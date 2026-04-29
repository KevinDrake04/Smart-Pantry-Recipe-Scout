import type { RecipeDef } from '../data/recipeTypes'
import {
  ingredientsById,
  INGREDIENT_KNOWLEDGE_BASE,
  isLowRecipeMatchWeight,
} from '../data/ingredientKnowledgeBase'
import { curatedRecipes } from '../data/curatedRecipes'
import { sampleRecipes } from '../data/sampleRecipes'

/** Meal-driving condiments/sauces that may be KB-low-weight but still deserve Quick Add when recipes use them often. */
const QUICK_ADD_ALLOWLIST = new Set([
  'peanut butter',
  'salsa',
  'tomato sauce',
  'broth',
  'cheese',
  'yogurt',
])

/**
 * Hidden from Quick Add only — KB rows remain for parsing. Canonical ids match ingredientKnowledgeBase.ts.
 */
const QUICK_ADD_DENYLIST = new Set([
  'salt',
  'black-pepper',
  'oil',
  'olive oil',
  'butter',
  'soy sauce',
  'vinegar',
  'hot sauce',
  'ketchup',
  'mustard',
  'mayonnaise',
  'garlic powder',
  'onion powder',
  'paprika',
  'chili powder',
  'cumin',
  'oregano',
  'basil',
  'italian seasoning',
  'cinnamon',
  'sugar',
  'flour',
  'spices',
  'honey',
  'nutritional yeast',
])

type UsageCounts = {
  mainCount: Map<string, number>
  optionalCount: Map<string, number>
}

function tallyRecipeCatalogUsage(recipes: RecipeDef[]): UsageCounts {
  const mainCount = new Map<string, number>()
  const optionalCount = new Map<string, number>()

  for (const recipe of recipes) {
    for (const id of recipe.mainIngredients) {
      mainCount.set(id, (mainCount.get(id) ?? 0) + 1)
    }
    if (recipe.optionalIngredients) {
      for (const id of recipe.optionalIngredients) {
        optionalCount.set(id, (optionalCount.get(id) ?? 0) + 1)
      }
    }
  }

  return { mainCount, optionalCount }
}

/** Only optionalStaples — excluded from eligibility tallies for Quick Add. */
function tallyStaplesOnlyIds(recipes: RecipeDef[]): Set<string> {
  const inMainOrOptional = new Set<string>()
  const inStaples = new Set<string>()

  for (const recipe of recipes) {
    for (const id of recipe.mainIngredients) {
      inMainOrOptional.add(id)
    }
    if (recipe.optionalIngredients) {
      for (const id of recipe.optionalIngredients) {
        inMainOrOptional.add(id)
      }
    }
    if (recipe.optionalStaples) {
      for (const id of recipe.optionalStaples) inStaples.add(id)
    }
  }

  const onlyStaples = new Set<string>()
  for (const id of inStaples) {
    if (!inMainOrOptional.has(id)) onlyStaples.add(id)
  }
  return onlyStaples
}

function computeQuickAddEligibleIds(
  counts: UsageCounts,
  optionalOnlyMin: number
): Set<string> {
  const { mainCount, optionalCount } = counts

  const eligible = new Set<string>()

  for (const ing of INGREDIENT_KNOWLEDGE_BASE) {
    const id = ing.id
    if (QUICK_ADD_DENYLIST.has(id)) continue

    const main = mainCount.get(id) ?? 0
    const opt = optionalCount.get(id) ?? 0

    if (main === 0 && opt === 0) continue

    const allow = QUICK_ADD_ALLOWLIST.has(id)
    const low = isLowRecipeMatchWeight(id)

    if (!allow && low) continue

    if (ing.category === 'condiment' && !allow) continue

    if (main > 0) {
      eligible.add(id)
      continue
    }

    if (allow && opt > 0) {
      eligible.add(id)
      continue
    }

    if (opt >= optionalOnlyMin) {
      eligible.add(id)
    }
  }

  return eligible
}

function buildQuickAddSupport(): ReadonlySet<string> {
  const catalog: RecipeDef[] = [...sampleRecipes, ...curatedRecipes]
  const counts = tallyRecipeCatalogUsage(catalog)

  const optionalOnlyMin = Math.max(
    25,
    Math.min(120, Math.round(catalog.length * 0.001))
  )

  const idsOnlyEverStaples = tallyStaplesOnlyIds(catalog)
  const eligible = computeQuickAddEligibleIds(counts, optionalOnlyMin)

  const kbTotal = INGREDIENT_KNOWLEDGE_BASE.length

  const sortedMain = [...counts.mainCount.entries()].sort((a, b) => b[1] - a[1])
  const topMain = sortedMain.slice(0, 15)

  let denylistedHitKb = 0
  for (const id of QUICK_ADD_DENYLIST) {
    if (ingredientsById[id]) denylistedHitKb += 1
  }

  if (import.meta.env.DEV) {
    console.info('[Quick Add ingredients]', {
      recipeCatalogSize: catalog.length,
      kbIngredientRows: kbTotal,
      quickAddEligibleCount: eligible.size,
      optionalOnlyMainThreshold: optionalOnlyMin,
      staplesOnlyDistinctIds: idsOnlyEverStaples.size,
      denylistKbIdsMatched: denylistedHitKb,
      topMainIngredientIdsByRecipeCount: Object.fromEntries(topMain),
    })
  }

  return eligible
}

export const QUICK_ADD_SUPPORTED_INGREDIENT_IDS: ReadonlySet<string> =
  buildQuickAddSupport()
