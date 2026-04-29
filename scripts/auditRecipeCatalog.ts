import { curatedRecipes } from '../src/data/curatedRecipes.ts'
import {
  INGREDIENT_KNOWLEDGE_BASE,
  normalizeIngredientPhrase,
} from '../src/data/ingredientKnowledgeBase.ts'
import { sampleRecipes } from '../src/data/sampleRecipes.ts'
import { CUISINE_STYLES } from '../src/data/recipeTypes.ts'

const catalog = [...sampleRecipes, ...curatedRecipes]

const requestedImportant = [
  'chicken',
  'beef',
  'ground-beef',
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
  'black-beans',
  'chickpeas',
  'lentils',
  'peanut-butter',
  'milk',
  'yogurt',
  'broccoli',
  'spinach',
  'bell-peppers',
] as const

const LOW_SUPPORT_WARNING_THRESHOLD = 25

function bump(map: Map<string, number>, id: string): void {
  map.set(id, (map.get(id) ?? 0) + 1)
}

function buildAliasToIdMap(): Map<string, string> {
  const map = new Map<string, string>()
  for (const ing of INGREDIENT_KNOWLEDGE_BASE) {
    const keys = [ing.id, ing.name, ...ing.aliases]
    for (const k of keys) {
      const nk = normalizeIngredientPhrase(k)
      if (nk && !map.has(nk)) map.set(nk, ing.id)
    }
  }
  return map
}

function resolveRequestedKey(key: string, aliasToId: Map<string, string>): string | null {
  const k = normalizeIngredientPhrase(key)
  const variants = new Set<string>([
    k,
    k.replace(/-/g, ' '),
    k.replace(/\s+/g, '-'),
  ])
  for (const v of variants) {
    if (aliasToId.has(v)) return aliasToId.get(v) ?? null
  }
  return null
}

function topN(map: Map<string, number>, n: number): [string, number][] {
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n)
}

function runAudit(): void {
  const mainCounts = new Map<string, number>()
  const optionalCounts = new Map<string, number>()
  const cuisineCounts = new Map<string, number>()

  for (const c of CUISINE_STYLES) cuisineCounts.set(c, 0)

  for (const recipe of catalog) {
    for (const id of recipe.mainIngredients) bump(mainCounts, id)
    for (const id of recipe.optionalIngredients ?? []) bump(optionalCounts, id)
    bump(cuisineCounts, recipe.cuisineStyle)
  }

  const supportedAll = new Set<string>([
    ...mainCounts.keys(),
    ...optionalCounts.keys(),
  ])

  const aliasToId = buildAliasToIdMap()

  console.log('\n=== Recipe Catalog Audit ===')
  console.log(`Total recipes: ${catalog.length}`)

  console.log('\n--- Cuisine/style counts ---')
  for (const c of CUISINE_STYLES) {
    console.log(`${c}: ${cuisineCounts.get(c) ?? 0}`)
  }

  console.log('\n--- Top 50 mainIngredients by recipe count ---')
  for (const [id, n] of topN(mainCounts, 50)) {
    console.log(`${id}: ${n}`)
  }

  console.log('\n--- Main ingredient counts (all known ids in recipes) ---')
  for (const [id, n] of [...mainCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`${id}: ${n}`)
  }

  console.log('\n--- Optional ingredient counts (all known ids in recipes) ---')
  for (const [id, n] of [...optionalCounts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`${id}: ${n}`)
  }

  console.log('\n--- Requested important ingredient coverage ---')
  for (const req of requestedImportant) {
    const canonical = resolveRequestedKey(req, aliasToId)
    if (!canonical) {
      console.log(`${req}: canonical id not found in KB`)
      continue
    }
    const m = mainCounts.get(canonical) ?? 0
    const o = optionalCounts.get(canonical) ?? 0
    const total = m + o
    console.log(`${req} -> ${canonical}: main=${m}, optional=${o}, total=${total}`)
  }

  const lowCountImportant = requestedImportant
    .map((req) => {
      const canonical = resolveRequestedKey(req, aliasToId)
      if (!canonical) return { req, canonical: null as string | null, total: 0 }
      const total = (mainCounts.get(canonical) ?? 0) + (optionalCounts.get(canonical) ?? 0)
      return { req, canonical, total }
    })
    .filter((x) => x.canonical && x.total < LOW_SUPPORT_WARNING_THRESHOLD)
    .sort((a, b) => a.total - b.total)

  console.log('\n--- Low-count important ingredient warnings ---')
  if (lowCountImportant.length === 0) {
    console.log('None below threshold.')
  } else {
    for (const item of lowCountImportant) {
      console.warn(
        `Warning: ${item.req} (${item.canonical}) has low support: ${item.total} recipes`
      )
    }
  }

  const kbZeroSupport = INGREDIENT_KNOWLEDGE_BASE
    .filter((ing) => !supportedAll.has(ing.id))
    .map((ing) => ing.id)
    .sort((a, b) => a.localeCompare(b))

  console.log('\n--- KB ingredients with zero recipe support ---')
  console.log(`Count: ${kbZeroSupport.length}`)
  for (const id of kbZeroSupport) console.warn(`No recipe support: ${id}`)
}

runAudit()
