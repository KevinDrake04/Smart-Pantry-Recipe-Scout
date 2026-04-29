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
import csv from 'csv-parser'
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
  return s.trim()
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

function normalizeIngredientForResolution(text: string): string {
  let s = text.toLowerCase()
  s = s.replace(/\([^)]*\)/g, ' ')
  s = s.replace(/\[[^\]]*\]/g, ' ')
  s = s.replace(/[/|]/g, ' ')
  s = s.replace(/[_-]/g, ' ')
  s = s.replace(/[^a-z0-9\s]/g, ' ')
  for (const w of PREP_WORDS) {
    const re = new RegExp(`\\b${w}\\b`, 'g')
    s = s.replace(re, ' ')
  }
  s = s.replace(/\s+/g, ' ').trim()
  return normalizeIngredientPhrase(s)
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
  for (const cand of candidateStrings(raw)) {
    if (!cand || cand.length < 2) continue
    const hit = resolveIngredientPhrase(cand)
    if (hit && !hit.id.startsWith('unknown:')) return hit.id
  }
  return null
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
  if (!field?.trim()) return []
  try {
    const v = JSON.parse(field) as unknown
    if (!Array.isArray(v)) return []
    return v.map((x) => String(x))
  } catch {
    return []
  }
}

function normalizeTitleKey(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function estimateTimeMinutes(directions: string[], title: string): string {
  const blob = [...directions, title].join(' ').toLowerCase()
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

function estimateDifficulty(
  meaningfulCount: number,
  directions: string[],
  title: string
): 'Easy' | 'Medium' | 'Hard' {
  const blob = [...directions, title].join(' ').toLowerCase()
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
  estimatedTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  steps: string[]
}

type CandidateRecipe = CuratedRow & {
  titleKey: string
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

async function run(): Promise<void> {
  const csvPath = findCsvPath()
  console.log('Reading (streaming):', csvPath)
  console.log('Target curated recipes:', TARGET_COUNT)

  const candidates: CandidateRecipe[] = []
  const seenKeys = new Set<string>()
  let rowsSeen = 0

  await new Promise<void>((resolve, reject) => {
    const readStream = createReadStream(csvPath, { encoding: 'utf8' })
    const parser = csv()
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
          console.log(`Scanned rows: ${rowsSeen} | candidates: ${candidates.length}`)
        }
        if (rowsSeen >= MAX_SCAN_ROWS || candidates.length >= MAX_CANDIDATES) {
          safeResolve()
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
          const time = estimateTimeMinutes(directions, title)
          const difficulty = estimateDifficulty(mains.length, directions, title)
          const steps = synthesizeSteps(title, mains, cuisineStyle)

          seenKeys.add(key)
          candidates.push({
            title,
            titleKey: key,
            mainIngredients: mains,
            optionalStaples: staples,
            optionalIngredients: [],
            cuisineStyle,
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

  const header = `/**
 * Curated recipes derived from a public RecipeNLG-style dataset.
 * Normalized to canonical ingredient ids from ingredientKnowledgeBase.ts for this class project.
 * Original long directions were not copied verbatim — short generic steps were synthesized.
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

  console.log('Rows scanned:', rowsSeen)
  console.log('Candidate recipes after filtering:', candidates.length)
  console.log('Curated recipes written:', collected.length, '→', path.relative(ROOT, OUT_FILE))
  if (collected.length < TARGET_COUNT) {
    console.warn(
      `Warning: fewer than ${TARGET_COUNT} valid recipes after filters. Increase raw data or relax filters.`
    )
  }
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
