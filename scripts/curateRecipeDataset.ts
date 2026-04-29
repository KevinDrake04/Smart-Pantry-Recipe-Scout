/**
 * Streams RecipeNLG-style CSV from data/raw/, normalizes ingredients via the local KB,
 * and writes src/data/curatedRecipes.ts (committed). Raw CSV stays gitignored.
 *
 * Usage: npm run curate:recipes
 * Optional env: RECIPE_NLG_CSV=path/to.csv  CURATE_TARGET=1000
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

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const TARGET_COUNT = Math.max(1, parseInt(process.env.CURATE_TARGET ?? '1000', 10))
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

function candidateStrings(raw: string): string[] {
  const out = new Set<string>()
  const base = raw.trim()
  if (!base) return []
  out.add(normalizeIngredientPhrase(base))
  const stripped = normalizeIngredientPhrase(stripQuantityPrefix(base))
  if (stripped) out.add(stripped)
  const commaParts = base.split(',').map((p) => normalizeIngredientPhrase(p.trim()))
  commaParts.forEach((p) => {
    if (p.length >= 2) out.add(p)
    const st = normalizeIngredientPhrase(stripQuantityPrefix(p))
    if (st.length >= 2) out.add(st)
  })
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

function inferCuisine(blob: string): string {
  const s = blob.toLowerCase()
  const rules: [RegExp, string][] = [
    [/taco|burrito|enchilada|quesadilla|salsa|tamale/, 'Mexican'],
    [/pasta|lasagna|ravioli|risotto|parmesan|marinara/, 'Italian'],
    [/curry|masala|tikka|dal|naan|chapati/, 'Indian'],
    [/stir[\s-]?fry|dim sum|wonton|szechuan|sichuan/, 'Chinese'],
    [/miso|sushi|ramen|teriyaki|tempura/, 'Japanese'],
    [/kimchi|bibimbap|bulgogi|gochujang/, 'Korean'],
    [/pad thai|tom yum|satay|coconut milk curry/, 'Thai'],
    [/falafel|tahini|hummus|shawarma|zaatar/, 'Middle Eastern'],
    [/tzatziki|feta|olive oil.*salad|gyro/, 'Mediterranean'],
    [/gumbo|jambalaya|cajun|soul food|bbq ribs/, 'American'],
    [/porridge|pancake|waffle|breakfast burrito|hash browns/, 'Breakfast'],
    [/soup|chowder|bisque|broth bowl/, 'Soup'],
    [/salad|coleslaw|greens with/, 'Salad'],
    [/fried rice|rice bowl|bibimbap bowl/, 'Rice Bowl'],
    [/spaghetti|linguine|fettuccine|macaroni/, 'Pasta'],
  ]
  for (const [re, label] of rules) {
    if (re.test(s)) return label
  }
  return 'General'
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
  cuisine: string
): string[] {
  const focus = mains.slice(0, 4).join(', ')
  const steps = [
    `Prep ingredients (${focus || 'as listed'}) for a ${cuisine} style dish.`,
    'Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.',
    'Cook proteins first until safely done, then vegetables until tender-crisp.',
    'Combine sauce elements and simmer briefly to blend flavors.',
    'Season to taste and serve warm.',
  ]
  if (cuisine === 'Soup' || /soup|stew|chili/i.test(title)) {
    return [
      'Chop vegetables and aromatics.',
      'Simmer liquid with aromatics until fragrant.',
      'Add remaining ingredients and cook until tender.',
      'Adjust seasoning and serve.',
    ]
  }
  if (cuisine === 'Salad' || /salad/i.test(title)) {
    return [
      'Wash and chop produce.',
      'Whisk or shake dressing if needed.',
      'Toss gently and serve chilled.',
    ]
  }
  if (cuisine === 'Breakfast') {
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
  cuisine: string
  estimatedTime: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  steps: string[]
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

  const collected: CuratedRow[] = []
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
        if (collected.length >= TARGET_COUNT) {
          safeResolve()
          return
        }
        rowsSeen++
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

          const blob = `${title} ${ingredientLines.join(' ')}`
          const cuisine = inferCuisine(blob)
          const time = estimateTimeMinutes(directions, title)
          const difficulty = estimateDifficulty(mains.length, directions, title)
          const steps = synthesizeSteps(title, mains, cuisine)

          seenKeys.add(key)
          collected.push({
            title,
            mainIngredients: mains,
            optionalStaples: staples,
            optionalIngredients: [],
            cuisine,
            estimatedTime: time,
            difficulty,
            steps,
          })
          if (collected.length >= TARGET_COUNT) {
            safeResolve()
          }
        } catch {
          /* skip bad row */
        }
      })
      .on('end', safeResolve)
      .on('error', reject)

    readStream.on('error', reject)
  })

  const header = `/**
 * Curated recipes derived from a public RecipeNLG-style dataset.
 * Normalized to canonical ingredient ids from ingredientKnowledgeBase.ts for this class project.
 * Original long directions were not copied verbatim — short generic steps were synthesized.
 * The raw dataset lives under data/raw/ and is gitignored (not committed).
 * Regenerate: npm run curate:recipes
 */

import type { RecipeDef } from './recipeTypes'

`

  const body = `export const curatedRecipes: RecipeDef[] = ${JSON.stringify(collected, null, 2)}\n`
  writeFileSync(OUT_FILE, header + body, 'utf8')

  console.log('Rows scanned:', rowsSeen)
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
