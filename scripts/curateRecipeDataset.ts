/**
 * Streams RecipeNLG-style CSV from data/raw/, normalizes ingredients via the local KB,
 * and writes src/data/curatedRecipes.ts (committed). Raw CSV stays gitignored.
 *
 * Usage: npm run curate:recipes
 * Optional env: RECIPE_NLG_CSV=path/to.csv  CURATE_TARGET=50000
 */
import { createReadStream } from 'fs'
import { writeFileSync, readdirSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import os from 'os'
import csv from 'csv-parser'
import { Worker } from 'node:worker_threads'
import {
  resolveIngredientPhrase,
  normalizeIngredientPhrase,
  isLowRecipeMatchWeight,
} from '../src/data/ingredientKnowledgeBase.ts'
import { inferCuisineStyleFromSignals } from '../src/data/cuisineStyleInference.ts'
import { CUISINE_STYLES, isCuisineStyle, type CuisineStyle } from '../src/data/recipeTypes.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const TARGET_COUNT = Math.max(1, parseInt(process.env.CURATE_TARGET ?? '50000', 10))
const MAX_SCAN_ROWS = Math.max(TARGET_COUNT * 8, 250000)
const MAX_CANDIDATES = Math.max(TARGET_COUNT * 3, 150000)
const RAW_DIR = path.join(ROOT, 'data', 'raw')
const OUT_FILE = path.join(ROOT, 'src', 'data', 'curatedRecipes.ts')

const CURATE_WORKERS_DEFAULT = Math.min(8, Math.max(1, os.cpus().length - 1))
const CURATE_BATCH_SIZE_DEFAULT = 1000

const SOURCE_URL_MAX_LEN = 280
const UNAVAILABLE_RECIPE_SOURCES = [
  'cookbooks.com',
  'www.cookbooks.com',
] as const
const UNAVAILABLE_RECIPE_SOURCE_SET = new Set(UNAVAILABLE_RECIPE_SOURCES)

// ---------------------------------------------------------------------------
// Worker-local caches (module scope -> per-worker memory).
// These are purely performance optimizations; results must be identical.
// ---------------------------------------------------------------------------
const CACHE_MAX_ENTRIES = parseInt(process.env.CURATE_CACHE_MAX_ENTRIES ?? '40000', 10)
const CACHE_MAX_ENTRIES_SMALL = parseInt(
  process.env.CURATE_CACHE_MAX_ENTRIES_SMALL ?? '8000',
  10
)

const normalizeIngredientForResolutionCache = new Map<string, string>()
const stripQuantityPrefixCache = new Map<string, string>()
const ingredientResolutionCache = new Map<string, string | null>()
const titleKeyCache = new Map<string, string>()

const jsonArrayFieldCache = new Map<string, string[]>()
const directionsStepsParseCache = new Map<string, string[]>()
const directionsCleanCache = new Map<string, { steps: string[]; usedDataset: boolean }>()

const cacheStats = {
  normalizeIngredientForResolution: { hits: 0, misses: 0 },
  stripQuantityPrefix: { hits: 0, misses: 0 },
  ingredientResolution: { hits: 0, misses: 0 },
  titleKey: { hits: 0, misses: 0 },
  jsonArrayField: { hits: 0, misses: 0 },
  directionsStepsParse: { hits: 0, misses: 0 },
  directionsClean: { hits: 0, misses: 0 },
}

function cappedSet<K, V>(map: Map<K, V>, key: K, value: V, maxEntries: number) {
  if (map.size >= maxEntries) {
    map.clear()
  }
  map.set(key, value)
}

export function resetWorkerCacheStats(): void {
  for (const group of Object.values(cacheStats)) {
    group.hits = 0
    group.misses = 0
  }
}

export function getWorkerCacheStats(): typeof cacheStats {
  return {
    normalizeIngredientForResolution: {
      hits: cacheStats.normalizeIngredientForResolution.hits,
      misses: cacheStats.normalizeIngredientForResolution.misses,
    },
    stripQuantityPrefix: {
      hits: cacheStats.stripQuantityPrefix.hits,
      misses: cacheStats.stripQuantityPrefix.misses,
    },
    ingredientResolution: {
      hits: cacheStats.ingredientResolution.hits,
      misses: cacheStats.ingredientResolution.misses,
    },
    titleKey: { hits: cacheStats.titleKey.hits, misses: cacheStats.titleKey.misses },
    jsonArrayField: {
      hits: cacheStats.jsonArrayField.hits,
      misses: cacheStats.jsonArrayField.misses,
    },
    directionsStepsParse: {
      hits: cacheStats.directionsStepsParse.hits,
      misses: cacheStats.directionsStepsParse.misses,
    },
    directionsClean: {
      hits: cacheStats.directionsClean.hits,
      misses: cacheStats.directionsClean.misses,
    },
  }
}

function findCsvPath(): string {
  const envPath = process.env.RECIPE_NLG_CSV
  if (envPath && existsSync(envPath)) return path.resolve(envPath)
  if (!existsSync(RAW_DIR)) {
    throw new Error(`Missing ${RAW_DIR}. Add RecipeNLG CSV under data/raw/.`)
  }
  const csvs = readdirSync(RAW_DIR).filter((f) => f.toLowerCase().endsWith('.csv'))
  if (csvs.length === 0) {
    throw new Error(`No .csv files in ${RAW_DIR}`)
  }
  if (csvs.length === 1) return path.join(RAW_DIR, csvs[0])
  const preferred = csvs.find((f) => /recipenlg|recipe_nlg|dataset/i.test(f))
  return path.join(RAW_DIR, preferred ?? csvs[0])
}

function stripQuantityPrefix(line: string): string {
  const cacheKey = line
  if (stripQuantityPrefixCache.has(cacheKey)) {
    cacheStats.stripQuantityPrefix.hits++
    return stripQuantityPrefixCache.get(cacheKey)!
  }

  cacheStats.stripQuantityPrefix.misses++

  let s = line.trim()
  s = s.replace(/\([^)]*\)/g, ' ').replace(/\[[^\]]*\]/g, ' ')
  // Repeatedly strip leading measures / numbers
  for (let i = 0; i < 4; i++) {
    const next = s
      .replace(
        /^\d+(\s*\/\s*\d+)?(\s*-\s*\d+(\s*\/\s*\d+)?)?\s*(to\s*)?/i,
        ''
      )
      .replace(
        /^(about|approx\.?|around|roughly)\s+/i,
        ''
      )
      .replace(
        /^(a|an|the)\s+/i,
        ''
      )
      .replace(
        /^(cups?|c\.|tbsp\.?|tsp\.?|teaspoons?|tablespoons?|ounces?|oz\.?|pounds?|lbs?\.?|grams?|g\.?|kg\.?|ml\.?|l\.?|liters?|quarts?|pints?|sticks?|slices?|pieces?|cloves?|packages?|pkgs?\.?|cans?|jars?|bunches?|cartons?|boxes?|bags?|medium|large|small|whole|half)\b\.?\s*/i,
        ''
      )
      .replace(/^(of|the|a|an)\s+/i, '')
      .replace(/\s+/g, ' ')
      .trim()
    if (next === s) break
    s = next
  }
  const out = s.trim()
  cappedSet(stripQuantityPrefixCache, cacheKey, out, CACHE_MAX_ENTRIES)
  return out
}

const PREP_WORDS = [
  'chopped',
  'diced',
  'sliced',
  'cooked',
  'shredded',
  'boneless',
  'skinless',
  'fresh',
  'frozen',
  'canned',
  'drained',
  'rinsed',
  'large',
  'small',
  'medium',
  'optional',
  'minced',
  'crushed',
  'peeled',
]

const PREP_WORD_REGEXES = PREP_WORDS.map((w) => new RegExp(`\\b${w}\\b`, 'g'))

function normalizeIngredientForResolution(text: string): string {
  const cacheKey = text.trim()
  if (normalizeIngredientForResolutionCache.has(cacheKey)) {
    cacheStats.normalizeIngredientForResolution.hits++
    return normalizeIngredientForResolutionCache.get(cacheKey)!
  }

  cacheStats.normalizeIngredientForResolution.misses++

  let s = text.toLowerCase()
  s = s.replace(/\([^)]*\)/g, ' ')
  s = s.replace(/\[[^\]]*\]/g, ' ')
  s = s.replace(/[/|]/g, ' ')
  s = s.replace(/[_-]/g, ' ')
  s = s.replace(/[^a-z0-9\s]/g, ' ')
  for (const re of PREP_WORD_REGEXES) s = s.replace(re, ' ')
  s = s.replace(/\s+/g, ' ').trim()
  const out = normalizeIngredientPhrase(s)
  cappedSet(
    normalizeIngredientForResolutionCache,
    cacheKey,
    out,
    CACHE_MAX_ENTRIES
  )
  return out
}

function candidateStrings(raw: string): string[] {
  const out = new Set<string>()
  const base = raw.trim()
  if (!base) return []
  out.add(normalizeIngredientForResolution(base))
  const stripped = normalizeIngredientForResolution(stripQuantityPrefix(base))
  if (stripped) out.add(stripped)
  const commaParts = base.split(',').map((p) => normalizeIngredientForResolution(p.trim()))
  commaParts.forEach((p) => {
    if (p.length >= 2) out.add(p)
    const st = normalizeIngredientForResolution(stripQuantityPrefix(p))
    if (st.length >= 2) out.add(st)
  })
  const noPercent = stripped.replace(/\b\d+(\.\d+)?\s*%\b/g, '').trim()
  if (noPercent) out.add(noPercent)
  const noPrepTail = stripped
    .replace(/\b(halves|chunks|pieces|strips|tenders|breast|breasts|thigh|thighs)\b$/g, '')
    .trim()
  if (noPrepTail) out.add(noPrepTail)
  const words = stripped.split(/\s+/).filter(Boolean)
  if (words.length > 3) {
    out.add(words.slice(-3).join(' '))
    out.add(words.slice(-2).join(' '))
  }
  return [...out].filter(Boolean)
}

function resolveKnownCanonical(raw: string): string | null {
  // Cache by the same “normalized ingredient” style key used by candidate generation.
  // This avoids repeating cleaning + alias matching for repeated phrases.
  const cacheKey = normalizeIngredientForResolution(stripQuantityPrefix(raw))
  if (ingredientResolutionCache.has(cacheKey)) {
    cacheStats.ingredientResolution.hits++
    return ingredientResolutionCache.get(cacheKey) ?? null
  }

  cacheStats.ingredientResolution.misses++

  let resolved: string | null = null
  for (const cand of candidateStrings(raw)) {
    if (!cand || cand.length < 2) continue
    const hit = resolveIngredientPhrase(cand)
    if (hit && !hit.id.startsWith('unknown:')) {
      resolved = hit.id
      break
    }
  }

  cappedSet(ingredientResolutionCache, cacheKey, resolved, CACHE_MAX_ENTRIES)
  return resolved
}

function resolveFromNerTokens(tokens: string[]): string[] {
  const ids: string[] = []
  for (const t of tokens) {
    const id = resolveKnownCanonical(t)
    if (id) ids.push(id)
  }
  return ids
}

function parseJsonArrayField(field: string | undefined): string[] {
  const trimmed = field?.trim()
  if (!trimmed) return []

  if (jsonArrayFieldCache.has(trimmed)) {
    cacheStats.jsonArrayField.hits++
    return jsonArrayFieldCache.get(trimmed)!
  }

  cacheStats.jsonArrayField.misses++

  try {
    const v = JSON.parse(trimmed) as unknown
    if (!Array.isArray(v)) return []
    const out = v.map((x) => String(x))
    cappedSet(jsonArrayFieldCache, trimmed, out, CACHE_MAX_ENTRIES_SMALL)
    return out
  } catch {
    return []
  }
}

function parseRecipeNlgDirectionsSteps(raw: string | undefined): string[] {
  const field = raw?.trim()
  if (!field) return []

  if (directionsStepsParseCache.has(field)) {
    cacheStats.directionsStepsParse.hits++
    return directionsStepsParseCache.get(field)!
  }
  cacheStats.directionsStepsParse.misses++

  // 1) Prefer JSON array-like fields.
  const fromJson = parseJsonArrayField(field)
  if (fromJson.length > 0) {
    cappedSet(directionsStepsParseCache, field, fromJson, CACHE_MAX_ENTRIES_SMALL)
    return fromJson
  }

  // 2) Fallback: treat as plain text. CSV exports sometimes contain escaped newlines.
  let s = field.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/\r/g, '\n')

  // Strip a possible surrounding brackets/quotes.
  if (s.startsWith('[') && s.endsWith(']')) {
    s = s.slice(1, -1).trim()
  }
  s = s.replace(/^["']|["']$/g, '')

  // Normalize common numbering prefixes at line starts.
  s = s.replace(/\n\s*\d+[.)]\s*/g, '\n')
  s = s.replace(/\n\s*step\s*\d+[-:]\s*/gi, '\n')
  s = s.replace(/\n\s*instruction\s*\d+[-:]\s*/gi, '\n')

  // Split on newlines first.
  const byLines = s
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean)

  if (byLines.length >= 2) return byLines

  // If still mostly one blob, split on semicolons.
  const bySemicolons = s
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)

  if (bySemicolons.length >= 2) return bySemicolons

  // Final fallback: split on " . " / " | " separators if present.
  const bySeparators = s
    .split(/\s+\|\s+|\s+\.\s+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0)

  const out = bySeparators
    .map((p) => p.replace(/^\d+[.)]\s*/, '').trim())
    .filter(Boolean)

  cappedSet(directionsStepsParseCache, field, out, CACHE_MAX_ENTRIES_SMALL)
  return out
}

const STEP_VERB_RE =
  /\b(add|remove|place|combine|season|taste|drain|rinse|cook|heat|warm|stir|simmer|sauté|saute|fry|frozen|bake|toast|broil|blend|assemble|grill|roast|layer|fold|mix|serve|chop|slice|dice|shred|preheat|whisk)\b/i

function cleanAndValidateDirectionSteps(
  rawSteps: string[],
  recipeTitle: string
): { steps: string[]; usedDataset: boolean } {
  const seen = new Set<string>()
  const out: string[] = []

  const titleNorm = normalizeTitleKey(recipeTitle)

  const normalizeForDedup = (s: string) =>
    normalizeIngredientPhrase(
      s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()
    )

  for (const raw of rawSteps) {
    let step = String(raw ?? '').trim()
    if (!step) continue

    // Remove common numbering/bullets/prefixes.
    step = step
      .replace(/^\s*(?:step|instruction)\s*\d+\s*[-:]\s*/i, '')
      .replace(/^\s*\d+[.)]\s*/, '')
      .replace(/^\s*[-•*]\s*/, '')
      .trim()

    if (!step) continue
    if (step.length < 8) continue

    // Reject steps that appear to just be the title.
    const stepNorm = normalizeForDedup(step)
    if (!stepNorm) continue
    if (titleNorm && stepNorm.includes(titleNorm)) continue

    // Simple verb sanity check: dataset directions should contain actions.
    if (!STEP_VERB_RE.test(step)) continue

    // Truncate long steps to keep cards readable.
    if (step.length > 220) {
      step = `${step.slice(0, 219).trim()}…`
    }

    const dedupKey = normalizeForDedup(step)
    if (seen.has(dedupKey)) continue
    seen.add(dedupKey)

    out.push(step)
    if (out.length >= 6) break
  }

  // Require at least 3 usable steps to label dataset-derived steps.
  // Otherwise, fallback generated steps keep the UI consistent and readable.
  if (out.length >= 3) return { steps: out, usedDataset: true }
  return { steps: [], usedDataset: false }
}

function cleanAndValidateDirectionStepsCached(
  rawSteps: string[],
  recipeTitle: string,
  rawDirectionsText: string | undefined
): { steps: string[]; usedDataset: boolean } {
  const titleKey = normalizeTitleKey(recipeTitle)
  const rawKey = rawDirectionsText?.trim() ?? ''
  const cacheKey = `${titleKey}\u0000${rawKey}`
  if (directionsCleanCache.has(cacheKey)) {
    cacheStats.directionsClean.hits++
    return directionsCleanCache.get(cacheKey)!
  }

  cacheStats.directionsClean.misses++

  const out = cleanAndValidateDirectionSteps(rawSteps, recipeTitle)
  cappedSet(
    directionsCleanCache,
    cacheKey,
    out,
    Math.max(2000, CACHE_MAX_ENTRIES_SMALL)
  )
  return out
}

function extractSourceFields(row: { link?: string; source?: string }): {
  sourceUrl?: string
  sourceName?: string
} {
  const rawUrl = row.link ?? ''
  const rawName = row.source ?? ''

  const sourceName = String(rawName ?? '').trim()

  let safeUrl: string | undefined
  try {
    safeUrl = normalizeSourceUrl(String(rawUrl ?? '').trim())
  } catch {
    safeUrl = undefined
  }

  return {
    sourceUrl: safeUrl,
    sourceName: sourceName || undefined,
  }
}

function isKnownUnavailableRecipeSource(url: string): boolean {
  try {
    const u = new URL(url)
    return UNAVAILABLE_RECIPE_SOURCE_SET.has(u.hostname.toLowerCase())
  } catch {
    return false
  }
}

function normalizeSourceUrl(rawUrl: string | undefined): string | undefined {
  const trimmed = String(rawUrl ?? '').trim()
  if (!trimmed) return undefined

  let candidate = trimmed
  if (/^www\./i.test(candidate)) candidate = `https://${candidate}`

  // If it's not clearly http(s), omit.
  if (!/^https?:\/\//i.test(candidate)) return undefined

  let parsed: URL
  try {
    parsed = new URL(candidate)
  } catch {
    return undefined
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined
  if (isKnownUnavailableRecipeSource(parsed.toString())) return undefined

  const normalized = parsed.toString()
  if (!normalized) return undefined
  if (normalized.length > SOURCE_URL_MAX_LEN) return `${normalized.slice(0, SOURCE_URL_MAX_LEN)}…`
  return normalized
}

function normalizeTitleKey(title: string): string {
  if (titleKeyCache.has(title)) {
    cacheStats.titleKey.hits++
    return titleKeyCache.get(title)!
  }

  cacheStats.titleKey.misses++

  const out = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  cappedSet(titleKeyCache, title, out, CACHE_MAX_ENTRIES)
  return out
}

function estimateTimeMinutesFromLowerBlob(blob: string): string {
  const h = blob.match(/(\d+)\s*(?:hours?|hrs?)\b/)
  const m = blob.match(/(\d+)\s*(?:min|minutes?)\b/)
  if (h && !m) {
    const m2 = blob.match(/(\d+)\s*(?:min|minutes?)\b/)
    const hours = parseInt(h[1], 10)
    if (m2) return `${hours * 60 + parseInt(m2[1], 10)} min`
    return `${hours * 60} min`
  }
  if (m) return `${parseInt(m[1], 10)} min`
  if (/overnight|marinate\s*(?:for\s*)?\d+\s*hours?/.test(blob)) return '8 hr (incl. wait)'
  if (/slow\s*cooker|simmer\s*(?:for\s*)?\d+\s*hours?/.test(blob)) return '3 hr'
  return '25 min'
}

function estimateDifficultyFromLowerBlob(
  meaningfulCount: number,
  blob: string
): 'Easy' | 'Medium' | 'Hard' {
  if (
    /double boiler|sous vide|temper chocolate|laminate dough|from scratch puff/.test(blob)
  )
    return 'Hard'
  if (/overnight|marinate \d|hours (?!min)|braise (?:for )?\d|three.?stage/.test(blob))
    return 'Hard'
  if (meaningfulCount >= 10) return 'Hard'
  if (meaningfulCount >= 6 || /simmer \d|bake \d|reduce /.test(blob)) return 'Medium'
  return 'Easy'
}

function synthesizeSteps(
  title: string,
  mains: string[],
  cuisineStyle: CuisineStyle
): string[] {
  const focus = mains.slice(0, 4).join(', ')
  const steps = [
    `Prep ingredients (${focus || 'as listed'}) for a ${cuisineStyle} style dish.`,
    'Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.',
    'Cook proteins first until safely done, then vegetables until tender-crisp.',
    'Combine sauce elements and simmer briefly to blend flavors.',
    'Season to taste and serve warm.',
  ]
  if (cuisineStyle === 'Soup' || /soup|stew|chili/i.test(title)) {
    return [
      'Chop vegetables and aromatics.',
      'Simmer liquid with aromatics until fragrant.',
      'Add remaining ingredients and cook until tender.',
      'Adjust seasoning and serve.',
    ]
  }
  if (cuisineStyle === 'Salad' || /salad/i.test(title)) {
    return [
      'Wash and chop produce.',
      'Whisk or shake dressing if needed.',
      'Toss gently and serve chilled.',
    ]
  }
  if (cuisineStyle === 'Breakfast') {
    return [
      'Warm skillet or griddle.',
      'Cook eggs or grains until set.',
      'Plate with toppings and serve.',
    ]
  }
  return steps.slice(0, 5)
}

type CuratedRow = {
  title: string
  mainIngredients: string[]
  optionalStaples: string[]
  optionalIngredients: string[]
  cuisineStyle: CuisineStyle
  sourceUrl?: string
  sourceName?: string
  stepsSource: 'dataset' | 'generated'
  estimatedTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  steps: string[]
}

type CandidateRecipe = CuratedRow & {
  titleKey: string
  /** Stable global index for deterministic ordering/dedupe. */
  rowIndex: number
}

export type RawRecipeNlgRow = {
  title?: string
  ingredients?: string
  directions?: string
  link?: string
  source?: string
  ner?: string
}

const PRIORITY_INGREDIENT_IDS = [
  'chicken',
  'ground beef',
  'tofu',
  'tuna',
  'eggs',
  'rice',
  'pasta',
  'noodles',
  'bread',
  'tortilla',
  'potatoes',
  'tomatoes',
  'cheese',
  'beans',
  'black beans',
  'chickpeas',
  'lentils',
  'peanut butter',
  'milk',
  'yogurt',
  'broccoli',
  'spinach',
  'bell-peppers',
] as const

const PRIORITY_TARGET_MIN = 100

function validateCollected(rows: CuratedRow[]): void {
  for (let i = 0; i < rows.length; i++) {
    const cs = rows[i].cuisineStyle
    if (!isCuisineStyle(cs)) {
      throw new Error(`Invalid cuisineStyle at row ${i}: ${String(cs)}`)
    }

    const ss = rows[i].stepsSource
    if (ss !== 'dataset' && ss !== 'generated') {
      throw new Error(`Invalid stepsSource at row ${i}: ${String(ss)}`)
    }

    const steps = rows[i].steps
    if (!Array.isArray(steps) || steps.length === 0) {
      throw new Error(`Missing steps at row ${i}`)
    }
    if (steps.length > 6) {
      throw new Error(`Too many steps (>6) at row ${i}: ${steps.length}`)
    }
  }
}

function chooseBalancedSubset(candidates: CandidateRecipe[], target: number): CuratedRow[] {
  if (candidates.length <= target) {
    return candidates.map((c) => {
      const row: CuratedRow = {
        title: c.title,
        mainIngredients: c.mainIngredients,
        optionalStaples: c.optionalStaples,
        optionalIngredients: c.optionalIngredients,
        cuisineStyle: c.cuisineStyle,
        estimatedTime: c.estimatedTime,
        difficulty: c.difficulty,
        steps: c.steps,
        sourceUrl: c.sourceUrl,
        sourceName: c.sourceName,
        stepsSource: c.stepsSource,
      }
      return row
    })
  }

  const selectedIdx = new Set<number>()
  const selectedTitleKeys = new Set<string>()
  const selectedPriorityCounts = new Map<string, number>()
  for (const id of PRIORITY_INGREDIENT_IDS) selectedPriorityCounts.set(id, 0)

  const indicesByPriority = new Map<string, number[]>()
  for (const id of PRIORITY_INGREDIENT_IDS) indicesByPriority.set(id, [])
  for (let i = 0; i < candidates.length; i++) {
    const set = new Set(candidates[i].mainIngredients)
    for (const id of PRIORITY_INGREDIENT_IDS) {
      if (set.has(id)) indicesByPriority.get(id)!.push(i)
    }
  }

  const addCandidate = (idx: number): boolean => {
    if (selectedIdx.size >= target) return false
    if (selectedIdx.has(idx)) return false
    const c = candidates[idx]
    if (selectedTitleKeys.has(c.titleKey)) return false
    selectedIdx.add(idx)
    selectedTitleKeys.add(c.titleKey)
    const set = new Set(c.mainIngredients)
    for (const id of PRIORITY_INGREDIENT_IDS) {
      if (set.has(id)) {
        selectedPriorityCounts.set(id, (selectedPriorityCounts.get(id) ?? 0) + 1)
      }
    }
    return true
  }

  for (const id of PRIORITY_INGREDIENT_IDS) {
    const idxs = indicesByPriority.get(id) ?? []
    for (const idx of idxs) {
      if ((selectedPriorityCounts.get(id) ?? 0) >= PRIORITY_TARGET_MIN) break
      addCandidate(idx)
      if (selectedIdx.size >= target) break
    }
    if (selectedIdx.size >= target) break
  }

  if (selectedIdx.size < target) {
    const availability = new Map<string, number>()
    for (const id of PRIORITY_INGREDIENT_IDS) {
      availability.set(id, (indicesByPriority.get(id) ?? []).length)
    }

    const scored = candidates.map((c, idx) => {
      const mains = new Set(c.mainIngredients)
      let score = c.mainIngredients.length * 0.05
      for (const id of PRIORITY_INGREDIENT_IDS) {
        if (!mains.has(id)) continue
        const have = selectedPriorityCounts.get(id) ?? 0
        const cap = Math.max(PRIORITY_TARGET_MIN, availability.get(id) ?? PRIORITY_TARGET_MIN)
        score += have < PRIORITY_TARGET_MIN ? 20 + (PRIORITY_TARGET_MIN - have) * 0.25 : 2
        score += 5 / Math.max(1, cap)
      }
      return { idx, score }
    })
    scored.sort((a, b) => b.score - a.score)

    for (const s of scored) {
      if (selectedIdx.size >= target) break
      addCandidate(s.idx)
    }
  }

  const out: CuratedRow[] = []
  for (const idx of selectedIdx) {
    const c = candidates[idx]
    out.push({
      title: c.title,
      mainIngredients: c.mainIngredients,
      optionalStaples: c.optionalStaples,
      optionalIngredients: c.optionalIngredients,
      cuisineStyle: c.cuisineStyle,
      estimatedTime: c.estimatedTime,
      difficulty: c.difficulty,
      steps: c.steps,
      sourceUrl: c.sourceUrl,
      sourceName: c.sourceName,
      stepsSource: c.stepsSource,
    })
  }
  return out.slice(0, target)
}

function splitMainVsStaple(ids: string[]): {
  mains: string[]
  staples: string[]
} {
  const mains: string[] = []
  const staples: string[] = []
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) continue
    seen.add(id)
    if (isLowRecipeMatchWeight(id)) staples.push(id)
    else mains.push(id)
  }
  return { mains, staples }
}

function acceptableRecipe(mains: string[], staples: string[]): boolean {
  if (mains.length < 3) return false
  if (mains.length > 12) return false
  const totalKnown = mains.length + staples.length
  const ratio = mains.length / Math.max(totalKnown, 1)
  if (ratio < 0.35 && mains.length < 5) return false
  return true
}

/**
 * Row-level curation logic (pure): transforms a raw RecipeNLG CSV row into a
 * candidate recipe, or returns null if the row fails quality/validity checks.
 *
 * This is exported so it can be executed inside worker threads.
 */
export function processRecipeNlgRow(
  rowIndex: number,
  row: RawRecipeNlgRow
): CandidateRecipe | null {
  const title = String(row.title ?? '').trim()
  if (!title || title.length < 4 || title.length > 120) return null
  const wc = title.split(/\s+/).filter(Boolean).length
  if (wc < 2) return null

  const key = normalizeTitleKey(title)
  if (!key) return null

  const ingredientLines = parseJsonArrayField(row.ingredients)
  const directions = parseJsonArrayField(row.directions)
  const nerTokens = parseJsonArrayField(row.ner)

  if (ingredientLines.length < 3) return null
  if (directions.length > 35 || directions.some((d) => d.length > 1200)) return null

  const resolved = new Set<string>()
  for (const line of ingredientLines) {
    const id = resolveKnownCanonical(line)
    if (id) resolved.add(id)
  }
  if (resolved.size < 3 && nerTokens.length > 0) {
    for (const id of resolveFromNerTokens(nerTokens)) {
      resolved.add(id)
    }
  }
  if (resolved.size < 3) return null

  const allIds = [...resolved]
  const { mains: baseMains, staples } = splitMainVsStaple(allIds)
  let mains = baseMains
  if (mains.length > 12) mains = mains.slice(0, 12)

  if (mains.length < 3) return null
  if (!acceptableRecipe(mains, staples)) return null

  const cuisineStyle = inferCuisineStyleFromSignals(
    title,
    mains,
    ingredientLines,
    directions
  )
  const timeDifficultyBlob = [...directions, title].join(' ').toLowerCase()
  const time = estimateTimeMinutesFromLowerBlob(timeDifficultyBlob)
  const difficulty = estimateDifficultyFromLowerBlob(
    mains.length,
    timeDifficultyBlob
  )

  const datasetRawSteps = parseRecipeNlgDirectionsSteps(row.directions)
  const datasetCleaned = cleanAndValidateDirectionStepsCached(
    datasetRawSteps,
    title,
    row.directions
  )

  const stepsSource: 'dataset' | 'generated' = datasetCleaned.usedDataset
    ? 'dataset'
    : 'generated'
  const steps = datasetCleaned.usedDataset
    ? datasetCleaned.steps
    : synthesizeSteps(title, mains, cuisineStyle)

  const { sourceUrl, sourceName } = extractSourceFields({
    link: row.link,
    source: row.source,
  })

  return {
    title,
    titleKey: key,
    rowIndex,
    mainIngredients: mains,
    optionalStaples: staples,
    optionalIngredients: [],
    cuisineStyle,
    stepsSource,
    sourceUrl,
    sourceName,
    estimatedTime: time,
    difficulty,
    steps,
  }
}

async function run(): Promise<void> {
  const csvPath = findCsvPath()
  console.log('Reading (streaming):', csvPath)
  console.log('Target curated recipes:', TARGET_COUNT)
  const startMs = Date.now()

  const candidates: CandidateRecipe[] = []
  const seenKeys = new Set<string>()
  const workerCount = (() => {
    const raw = process.env.CURATE_WORKERS
    if (!raw) return CURATE_WORKERS_DEFAULT
    const n = parseInt(raw, 10)
    if (Number.isFinite(n) && n >= 1) return Math.min(Math.max(1, os.cpus().length - 1), n)
    return CURATE_WORKERS_DEFAULT
  })()
  const batchSize = (() => {
    const raw = process.env.CURATE_BATCH_SIZE
    if (!raw) return CURATE_BATCH_SIZE_DEFAULT
    const n = parseInt(raw, 10)
    if (Number.isFinite(n) && n >= 50) return n
    return CURATE_BATCH_SIZE_DEFAULT
  })()

  console.log(`Curation parallelism: workers=${workerCount} batchSize=${batchSize}`)

  type BatchRow = { rowIndex: number; row: RawRecipeNlgRow }
  const candidatesByTitleKey = new Map<string, CandidateRecipe>()
  let acceptedRows = 0
  let rejectedRows = 0

  const cacheTotals: ReturnType<typeof getWorkerCacheStats> = {
    normalizeIngredientForResolution: { hits: 0, misses: 0 },
    stripQuantityPrefix: { hits: 0, misses: 0 },
    ingredientResolution: { hits: 0, misses: 0 },
    titleKey: { hits: 0, misses: 0 },
    jsonArrayField: { hits: 0, misses: 0 },
    directionsStepsParse: { hits: 0, misses: 0 },
    directionsClean: { hits: 0, misses: 0 },
  }

  const addCacheTotals = (
    totals: typeof cacheTotals,
    delta: ReturnType<typeof getWorkerCacheStats>
  ): void => {
    for (const [k, group] of Object.entries(delta)) {
      const key = k as keyof typeof totals
      totals[key].hits += group.hits
      totals[key].misses += group.misses
    }
  }

  let currentBatch: BatchRow[] = []

  const projectRow = (r: Record<string, string>): RawRecipeNlgRow => ({
    title: r.title ?? r.Title,
    ingredients: r.ingredients ?? r.Ingredients,
    directions: r.directions ?? r.Directions,
    link: r.link ?? r.Link,
    source: r.source ?? r.Source,
    ner: r.NER ?? r.ner,
  })

  const workerPool: Worker[] = []
  const pendingBatchPromises: Array<Promise<void>> = []
  let inflightBatches = 0
  const batchResolvers = new Map<number, () => void>()
  const maxInflight = workerCount * 3
  let pausedByBackpressure = false
  const parserRef = {
    current: null as { pause: () => void; resume: () => void } | null,
  }
  let nextBatchId = 0

  const upsertCandidate = (c: CandidateRecipe): void => {
    const prev = candidatesByTitleKey.get(c.titleKey)
    if (!prev || c.rowIndex < prev.rowIndex) candidatesByTitleKey.set(c.titleKey, c)
  }

  const sendBatch = (rows: BatchRow[]): void => {
    if (rows.length === 0) return

    const batchId = nextBatchId++
    inflightBatches++
    if (
      parserRef.current &&
      inflightBatches >= maxInflight &&
      !pausedByBackpressure
    ) {
      parserRef.current.pause()
      pausedByBackpressure = true
    }

    const worker = workerPool[batchId % workerPool.length]
    const p = new Promise<void>((resolve) => {
      batchResolvers.set(batchId, resolve)
    })
    pendingBatchPromises.push(p)

    worker.postMessage({
      type: 'batch',
      batchId,
      rows,
    })
  }

  if (workerCount > 1) {
    const workerUrl = new URL('./curateRecipeDataset.worker.ts', import.meta.url)
    for (let i = 0; i < workerCount; i++) {
      const w = new Worker(workerUrl, {
        type: 'module',
        execArgv: ['--import', 'tsx/esm'],
      })
      w.on('message', (message) => {
        const msg = message as
          | { type: 'batchResult'; batchId: number; candidates: CandidateRecipe[]; stats: { accepted: number; rejected: number }; cacheStats: ReturnType<typeof getWorkerCacheStats> }
          | { type: string }

        if (msg.type !== 'batchResult') return

        inflightBatches--
        acceptedRows += msg.stats.accepted
        rejectedRows += msg.stats.rejected
        addCacheTotals(cacheTotals, msg.cacheStats)
        for (const c of msg.candidates) upsertCandidate(c)

        const resolve = batchResolvers.get(msg.batchId)
        if (resolve) {
          batchResolvers.delete(msg.batchId)
          resolve()
        }

        if (
      parserRef.current &&
          pausedByBackpressure &&
          inflightBatches < maxInflight - 1
        ) {
          parserRef.current.resume()
          pausedByBackpressure = false
        }
      })
      w.on('error', (e) => {
        console.error('Worker error:', e)
      })
      workerPool.push(w)
    }
  }

  let rowsSeen = 0

  await new Promise<void>((resolve, reject) => {
    const readStream = createReadStream(csvPath, { encoding: 'utf8' })
    const parser = csv()
    parserRef.current = parser
    readStream.pipe(parser)

    let settled = false
    const safeResolve = () => {
      if (settled) return
      settled = true
      readStream.destroy()
      resolve()
    }

    parser
      .on('data', (row: Record<string, string>) => {
        if (settled) return
        rowsSeen++
        if (rowsSeen % 50000 === 0) {
          const candidateCount =
            workerCount > 1 ? candidatesByTitleKey.size : candidates.length
          console.log(`Scanned rows: ${rowsSeen} | candidates: ${candidateCount}`)
        }
        const candidateCount =
          workerCount > 1 ? candidatesByTitleKey.size : candidates.length
        if (rowsSeen >= MAX_SCAN_ROWS || candidateCount >= MAX_CANDIDATES) {
          safeResolve()
          return
        }
        if (workerCount > 1) {
          currentBatch.push({ rowIndex: rowsSeen, row: projectRow(row) })
          if (currentBatch.length >= batchSize) {
            const batch = currentBatch
            currentBatch = []
            sendBatch(batch)
          }
          return
        }
        try {
          const title = (row.title ?? row.Title ?? '').trim()
          if (!title || title.length < 4 || title.length > 120) return
          const wc = title.split(/\s+/).filter(Boolean).length
          if (wc < 2) return

          const key = normalizeTitleKey(title)
          if (!key || seenKeys.has(key)) return
          const ingredientLines = parseJsonArrayField(row.ingredients ?? row.Ingredients)
          const directions = parseJsonArrayField(row.directions ?? row.Directions)
          const nerTokens = parseJsonArrayField(row.NER ?? row.ner)

          if (ingredientLines.length < 3) return
          if (directions.length > 35 || directions.some((d) => d.length > 1200)) return

          const resolved = new Set<string>()
          for (const line of ingredientLines) {
            const id = resolveKnownCanonical(line)
            if (id) resolved.add(id)
          }
          if (resolved.size < 3 && nerTokens.length > 0) {
            for (const id of resolveFromNerTokens(nerTokens)) {
              resolved.add(id)
            }
          }
          if (resolved.size < 3) return

          const allIds = [...resolved]
          const { mains: baseMains, staples } = splitMainVsStaple(allIds)
          let mains = baseMains

          if (mains.length > 12) mains = mains.slice(0, 12)

          if (mains.length < 3) return

          if (!acceptableRecipe(mains, staples)) return

          const cuisineStyle = inferCuisineStyleFromSignals(
            title,
            mains,
            ingredientLines,
            directions
          )
          const timeDifficultyBlob = [...directions, title].join(' ').toLowerCase()
          const time = estimateTimeMinutesFromLowerBlob(timeDifficultyBlob)
          const difficulty = estimateDifficultyFromLowerBlob(
            mains.length,
            timeDifficultyBlob
          )
          const rawDirectionsText = row.directions ?? row.Directions
          const datasetRawSteps = parseRecipeNlgDirectionsSteps(rawDirectionsText)
          const datasetCleaned = cleanAndValidateDirectionStepsCached(
            datasetRawSteps,
            title,
            rawDirectionsText
          )

          const stepsSource: 'dataset' | 'generated' = datasetCleaned.usedDataset ? 'dataset' : 'generated'
          const steps =
            datasetCleaned.usedDataset
              ? datasetCleaned.steps
              : synthesizeSteps(title, mains, cuisineStyle)

          const { sourceUrl, sourceName } = extractSourceFields(row)

          seenKeys.add(key)
          candidates.push({
            title,
            titleKey: key,
            rowIndex: rowsSeen,
            mainIngredients: mains,
            optionalStaples: staples,
            optionalIngredients: [],
            cuisineStyle,
            stepsSource,
            sourceUrl,
            sourceName,
            estimatedTime: time,
            difficulty,
            steps,
          })
        } catch {
          /* skip bad row */
        }
      })
      .on('end', safeResolve)
      .on('error', reject)

    readStream.on('error', reject)
  })

  if (workerCount > 1) {
    if (currentBatch.length > 0) {
      const tail = currentBatch
      currentBatch = []
      sendBatch(tail)
    }

    await Promise.all(pendingBatchPromises)

    candidates.length = 0
    const sortedUnique = [...candidatesByTitleKey.values()].sort(
      (a, b) => a.rowIndex - b.rowIndex
    )
    candidates.push(...sortedUnique)

    await Promise.all(workerPool.map((w) => w.terminate()))

    const elapsedMs = Date.now() - startMs
    const elapsedS = Math.max(0.001, elapsedMs / 1000)
    const rowsPerSec = rowsSeen / elapsedS
    console.log('Worker pool complete:')
    console.log(`  workers=${workerCount} batchSize=${batchSize}`)
    console.log(
      `  scannedRows=${rowsSeen} acceptedRows=${acceptedRows} rejectedRows=${rejectedRows}`
    )
    console.log(`  elapsedMs=${elapsedMs} rows/sec=${rowsPerSec.toFixed(1)}`)
    console.log(`  deduped candidates=${candidates.length}`)
    console.log('Worker cache stats (aggregate):')
    for (const [name, group] of Object.entries(cacheTotals)) {
      const total = group.hits + group.misses
      const hitRate = total > 0 ? group.hits / total : 0
      console.log(
        `  ${name}: hits=${group.hits} misses=${group.misses} hitRate=${(
          hitRate * 100
        ).toFixed(1)}%`
      )
    }
  }

  if (rowsSeen >= MAX_SCAN_ROWS) {
    console.warn(`Stopped scan at MAX_SCAN_ROWS=${MAX_SCAN_ROWS} for runtime control.`)
  }
  if (candidates.length >= MAX_CANDIDATES) {
    console.warn(`Stopped after collecting MAX_CANDIDATES=${MAX_CANDIDATES}.`)
  }

  const collected = chooseBalancedSubset(candidates, TARGET_COUNT)
  validateCollected(collected)

  const counts = new Map<CuisineStyle, number>()
  for (const s of CUISINE_STYLES) counts.set(s, 0)
  for (const row of collected) {
    counts.set(row.cuisineStyle, (counts.get(row.cuisineStyle) ?? 0) + 1)
  }
  console.log('Cuisine / style counts:')
  for (const s of CUISINE_STYLES) {
    console.log(`  ${s}: ${counts.get(s) ?? 0}`)
  }

  const priorityCounts = new Map<string, number>()
  for (const id of PRIORITY_INGREDIENT_IDS) priorityCounts.set(id, 0)
  for (const row of collected) {
    const mains = new Set(row.mainIngredients)
    for (const id of PRIORITY_INGREDIENT_IDS) {
      if (mains.has(id)) {
        priorityCounts.set(id, (priorityCounts.get(id) ?? 0) + 1)
      }
    }
  }
  console.log('Priority ingredient coverage (mainIngredients):')
  for (const id of PRIORITY_INGREDIENT_IDS) {
    const n = priorityCounts.get(id) ?? 0
    console.log(`  ${id}: ${n}`)
    if (n < PRIORITY_TARGET_MIN) {
      const avail = candidates.filter((c) => c.mainIngredients.includes(id)).length
      console.warn(
        `  Warning: ${id} below target (${n}/${PRIORITY_TARGET_MIN}). Candidate availability: ${avail}.`
      )
    }
  }

  const stepsSourceCounts = { dataset: 0, generated: 0 }
  let tooShortSteps = 0
  let duplicatesDetected = 0
  for (const row of collected) {
    if (row.stepsSource === 'dataset') stepsSourceCounts.dataset++
    else stepsSourceCounts.generated++
    if (row.steps.length < 3) tooShortSteps++
    const norm = new Set<string>()
    let hasDup = false
    for (const s of row.steps) {
      const k = s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      if (norm.has(k)) {
        hasDup = true
        break
      }
      norm.add(k)
    }
    if (hasDup) duplicatesDetected++
  }
  console.log('Steps source counts:')
  console.log(`  dataset directions: ${stepsSourceCounts.dataset}`)
  console.log(`  generated fallback: ${stepsSourceCounts.generated}`)
  if (tooShortSteps > 0) console.warn(`Warning: ${tooShortSteps} recipes have < 3 steps`)
  if (duplicatesDetected > 0)
    console.warn(`Warning: ${duplicatesDetected} recipes contain duplicate steps`)

  const header = `/**
 * Curated recipes derived from a public RecipeNLG-style dataset.
 * Normalized to canonical ingredient ids from ingredientKnowledgeBase.ts for this class project.
 * Recipe steps are extracted from the dataset 'directions' field when usable.
 * Steps are cleaned, deduped, and truncated for display. When directions are missing
 * or fail basic quality checks, we fall back to short generated steps.
 *
 * Each recipe includes 'stepsSource' ('dataset' | 'generated') and optional 'sourceUrl'.
 *
 * cuisineStyle is inferred deterministically from title, ingredient text, and direction signals
 * (see scripts/curateRecipeDataset.ts and src/data/cuisineStyleInference.ts). Labels use the shared
 * CUISINE_STYLES list — prefer "General" when signals conflict or are weak.
 *
 * The raw dataset lives under data/raw/ and is gitignored (not committed).
 * Regenerate: npm run curate:recipes  (optional: CURATE_TARGET=50000)
 */

`

  /** Embed as JSON.parse(...) so TypeScript does not infer an enormous literal union (TS2590). */
  const innerJson = JSON.stringify(collected)
  const body = `export const curatedRecipes = JSON.parse(${JSON.stringify(innerJson)}) as import('./recipeTypes').RecipeDef[]\n`
  writeFileSync(OUT_FILE, header + body, 'utf8')

  const elapsedMs = Date.now() - startMs
  const elapsedS = Math.max(0.001, elapsedMs / 1000)
  const rowsPerSec = rowsSeen / elapsedS
  console.log(`Elapsed: ${elapsedMs}ms rows/sec=${rowsPerSec.toFixed(1)}`)

  console.log('Rows scanned:', rowsSeen)
  console.log('Candidate recipes after filtering:', candidates.length)
  console.log('Curated recipes written:', collected.length, '→', path.relative(ROOT, OUT_FILE))
  if (collected.length < TARGET_COUNT) {
    console.warn(
      `Warning: fewer than ${TARGET_COUNT} valid recipes after filters. Increase raw data or relax filters.`
    )
  }
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isDirectRun) {
  run()
    .then(() => process.exit(0))
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}
