import type { CuisineStyle, RecipeDef } from '../data/recipeTypes'
import { isCuisineStyle } from '../data/recipeTypes'
import { curatedRecipes } from '../data/curatedRecipes'
import { sampleRecipes } from '../data/sampleRecipes'
import {
  formatIngredientLabel,
  ingredientsById,
  isLowRecipeMatchWeight,
} from '../data/ingredientKnowledgeBase'
import type { ParsedIngredient } from './ingredientParser'

/** How many scored suggestions to pass to the UI for search/cuisine filtering (not all catalog recipes). */
export const RECIPE_SUGGESTION_POOL_SIZE = 48

const recipeCatalog: RecipeDef[] = [...sampleRecipes, ...curatedRecipes]

export type RecipeSuggestion = {
  title: string
  matchPercentage: number
  matchSummary: string
  usedIngredients: string[]
  missingIngredients: string[]
  substitutions: string[]
  whyRecommended: string
  estimatedTime: string
  difficulty: string
  steps: string[]
  /** Curated cuisine / meal style from recipe data (never blank in normal use). */
  cuisineStyle: CuisineStyle
}

/** Fallback staples only used when KB flag missing (legacy ids). */
const legacyLowWeightIds = new Set(['water'])

function isLowWeightId(id: string): boolean {
  return isLowRecipeMatchWeight(id) || legacyLowWeightIds.has(id)
}

/** Primary ingredients for scoring (excludes pantry seasonings). */
function meaningfulIds(ids: string[]): string[] {
  return ids.filter((id) => !isLowWeightId(id))
}

const substitutionMap: Record<string, string> = {
  'soy sauce': 'salt + a small splash of vinegar',
  garlic: 'garlic powder, onion, or shallot',
  onion: 'garlic powder or green onion',
  milk: 'water, oat milk, or almond milk',
  cheese: 'nutritional yeast or skip it',
  bread: 'tortilla, rice, or crackers',
  pasta: 'rice or noodles',
  rice: 'pasta, quinoa, or bread',
  spinach: 'lettuce, kale, chard, or mixed salad greens',
  tomatoes: 'tomato sauce, salsa, paste, or roasted peppers',
  eggs: 'tofu or beans in a pinch',
  yogurt: 'milk or cottage cheese, depending on the dish',
  butter: 'oil or a thin spread of cream cheese',
  cream: 'milk with a little extra cheese',
  'cottage cheese': 'yogurt or thick milk',
  beans: 'canned tuna or extra rice and vegetables',
  chicken: 'tofu, beans, or extra vegetables',
  tuna: 'chickpeas or white beans',
  potatoes: 'extra bread, rice, or pasta for bulk',
  'bell-peppers': 'any firm vegetables you have, or frozen mix',
  carrots: 'celery, peppers, or another crunchy vegetable',
  noodles: 'pasta, rice, or thinly sliced vegetables',
  lettuce: 'cabbage, spinach, or any fresh greens',
  banana: 'apple, yogurt, or a spoon of nut butter for body',
  strawberry: 'any frozen or fresh berries',
  'peanut butter': 'any nut or seed butter, or a little extra banana',
  tortilla: 'lettuce cups, bread, or a large collard leaf',
  oats: 'crushed crackers, more fruit, or a second dairy',
  vinegar: 'lemon or lime juice + a pinch of salt',
  'olive oil': 'any neutral oil or a small pat of butter',
  sugar: 'honey, syrup, or a ripe banana for sweetness',
  flour: 'extra eggs, breadcrumbs, or skip if not essential',
}

function substitutionLineForMissing(id: string): string | undefined {
  const label = formatIngredientLabel(id)
  const manual = substitutionMap[id]
  if (manual) return `${label}: ${manual}`
  const kbSub = ingredientsById[id]?.substitutions?.[0]
  if (kbSub) return `${label}: ${kbSub}`
  return undefined
}

function labelsForIds(ids: string[]): string[] {
  return ids.map((id) => formatIngredientLabel(id))
}

/** Prefer stored RecipeDef.cuisineStyle; coerce invalid or legacy rows to General. */
function cuisineStyleFromRecipe(recipe: RecipeDef): CuisineStyle {
  const fromDef = recipe.cuisineStyle?.trim()
  if (fromDef && isCuisineStyle(fromDef)) return fromDef
  const legacy = (recipe as { cuisine?: string }).cuisine?.trim()
  if (legacy && isCuisineStyle(legacy)) return legacy
  return 'General'
}

function buildWhyRecommended(
  meaningfulUsedIds: string[],
  urgentIngredientIds: Set<string>
): string {
  if (meaningfulUsedIds.length === 0) {
    return 'Recommended based on your ingredient categories and quick prep.'
  }

  const highlighted = meaningfulUsedIds.map((id) =>
    urgentIngredientIds.has(id)
      ? `use-soon ${formatIngredientLabel(id)}`
      : formatIngredientLabel(id)
  )

  const usedText =
    highlighted.length > 1
      ? `${highlighted.slice(0, -1).join(', ')}, and ${highlighted.at(-1)}`
      : highlighted[0]

  return `Recommended because it uses your ${usedText}.`
}

function createFallbackSuggestions(parsedIngredients: ParsedIngredient[]): RecipeSuggestion[] {
  const ids = new Set(parsedIngredients.map((item) => item.id))
  const categories = new Set(parsedIngredients.map((item) => item.category))
  const fallback: RecipeSuggestion[] = []

  if (categories.has('grain') && (categories.has('vegetable') || categories.has('legume'))) {
    fallback.push({
      title: 'Pantry Grain Bowl',
      cuisineStyle: 'General',
      matchPercentage: 60,
      matchSummary: 'You have a flexible grain + produce / legume base.',
      usedIngredients: labelsForIds(
        parsedIngredients
          .filter(
            (item) =>
              item.category === 'grain' ||
              item.category === 'vegetable' ||
              item.category === 'legume'
          )
          .map((item) => item.id)
          .filter((id) => !isLowWeightId(id))
          .slice(0, 4)
      ),
      missingIngredients: [],
      substitutions: [],
      whyRecommended:
        'Recommended because your grain and produce can become a fast bowl meal.',
      estimatedTime: '15 min',
      difficulty: 'Easy',
      steps: [
        'Cook or reheat your grain.',
        'Warm vegetables or beans in the same pan.',
        'Combine and season to taste.',
      ],
    })
  }

  if (ids.has('eggs') && (categories.has('vegetable') || ids.has('spinach'))) {
    fallback.push({
      title: 'Simple Omelet',
      cuisineStyle: 'Breakfast',
      matchPercentage: 65,
      matchSummary: 'You have the key omelet ingredients.',
      usedIngredients: labelsForIds(
        parsedIngredients
          .filter(
            (item) =>
              item.id === 'eggs' || item.category === 'vegetable' || item.id === 'spinach'
          )
          .map((item) => item.id)
          .filter((id) => !isLowWeightId(id))
          .slice(0, 4)
      ),
      missingIngredients: [],
      substitutions: [],
      whyRecommended: 'Recommended because eggs and vegetables make a quick balanced meal.',
      estimatedTime: '12 min',
      difficulty: 'Easy',
      steps: [
        'Whisk eggs with a pinch of salt.',
        'Cook chopped vegetables briefly.',
        'Add eggs and fold when set.',
      ],
    })
  }

  if (ids.has('milk') && categories.has('fruit')) {
    fallback.push({
      title: 'Quick Smoothie',
      cuisineStyle: 'General',
      matchPercentage: 70,
      matchSummary: 'You have milk + fruit for a drinkable snack.',
      usedIngredients: labelsForIds(
        parsedIngredients
          .filter((item) => item.id === 'milk' || item.category === 'fruit')
          .map((item) => item.id)
          .filter((id) => !isLowWeightId(id))
          .slice(0, 4)
      ),
      missingIngredients: [],
      substitutions: [],
      whyRecommended: 'Recommended because milk and fruit blend into a no-cook option.',
      estimatedTime: '5 min',
      difficulty: 'Easy',
      steps: ['Add milk and fruit to a blender.', 'Blend until smooth.', 'Serve immediately.'],
    })
  }

  if (ids.has('bread') && ids.has('cheese')) {
    fallback.push({
      title: 'Grilled Cheese',
      cuisineStyle: 'American',
      matchPercentage: 75,
      matchSummary: 'You already have bread and cheese.',
      usedIngredients: labelsForIds(['bread', 'cheese']),
      missingIngredients: [],
      substitutions: [],
      whyRecommended:
        'Recommended because bread and cheese are enough for a reliable comfort meal.',
      estimatedTime: '10 min',
      difficulty: 'Easy',
      steps: [
        'Assemble cheese between bread slices.',
        'Grill both sides until golden.',
        'Serve hot.',
      ],
    })
  }

  return fallback.slice(0, 6)
}

function isWeakMatch(
  matchPercentage: number,
  meaningfulUsedCount: number,
  meaningfulMissingCount: number,
  meaningfulTotal: number
): boolean {
  if (meaningfulTotal <= 1) {
    return matchPercentage < 55 && meaningfulUsedCount < meaningfulTotal
  }
  const lowCoverage = matchPercentage < 35 && meaningfulUsedCount <= 1
  const tooManyGaps = meaningfulMissingCount >= 2 && matchPercentage < 50
  return lowCoverage || tooManyGaps
}

type Scored = {
  title: string
  cuisineStyle: CuisineStyle
  matchPercentage: number
  matchSummary: string
  usedIngredients: string[]
  missingIngredients: string[]
  substitutions: string[]
  whyRecommended: string
  estimatedTime: string
  difficulty: string
  steps: string[]
  criticalMissingCount: number
  urgentUsedCount: number
  meaningfulTotalMain: number
  meaningfulUsedCount: number
}

function toSuggestion(r: Scored): RecipeSuggestion {
  return {
    title: r.title,
    cuisineStyle: r.cuisineStyle,
    matchPercentage: r.matchPercentage,
    matchSummary: r.matchSummary,
    usedIngredients: r.usedIngredients,
    missingIngredients: r.missingIngredients,
    substitutions: r.substitutions,
    whyRecommended: r.whyRecommended,
    estimatedTime: r.estimatedTime,
    difficulty: r.difficulty,
    steps: r.steps,
  }
}

function scoreRecipe(
  recipe: RecipeDef,
  pantryIds: Set<string>,
  urgentIngredientIds: Set<string>
): Scored | null {
  const mains = recipe.mainIngredients
  const meaningfulMains = meaningfulIds(mains)

  if (meaningfulMains.length === 0) {
    return null
  }

  const usedIngredientIds = mains.filter((id) => pantryIds.has(id))
  const meaningfulUsedIds = meaningfulIds(usedIngredientIds)

  const missingIngredientIds = mains.filter((id) => !pantryIds.has(id))
  const meaningfulMissingIds = meaningfulIds(missingIngredientIds)

  const matchPercentage =
    meaningfulMains.length > 0
      ? Math.round((meaningfulUsedIds.length / meaningfulMains.length) * 100)
      : 0

  const criticalMissingCount = meaningfulMissingIds.length

  const substitutions = meaningfulMissingIds
    .map((id) => substitutionLineForMissing(id))
    .filter((line): line is string => Boolean(line))

  const urgentUsedCount = meaningfulUsedIds.filter((id) => urgentIngredientIds.has(id))
    .length

  const whyRecommended = buildWhyRecommended(meaningfulUsedIds, urgentIngredientIds)

  return {
    title: recipe.title,
    cuisineStyle: cuisineStyleFromRecipe(recipe),
    matchPercentage,
    matchSummary:
      meaningfulMains.length > 0
        ? `You matched ${meaningfulUsedIds.length} of ${meaningfulMains.length} main ingredients (pantry staples scored lightly).`
        : `You have ${usedIngredientIds.length} of ${mains.length} listed ingredients.`,
    usedIngredients: labelsForIds(usedIngredientIds),
    missingIngredients: labelsForIds(meaningfulMissingIds),
    substitutions,
    whyRecommended,
    estimatedTime: recipe.estimatedTime,
    difficulty: recipe.difficulty,
    steps: recipe.steps,
    criticalMissingCount,
    urgentUsedCount,
    meaningfulTotalMain: meaningfulMains.length,
    meaningfulUsedCount: meaningfulUsedIds.length,
  }
}

export function generateRecipeSuggestions(
  parsedIngredients: ParsedIngredient[]
): RecipeSuggestion[] {
  if (parsedIngredients.length === 0) {
    return []
  }

  const pantryIds = new Set(parsedIngredients.map((ingredient) => ingredient.id))
  const meaningfulPantry = meaningfulIds([...pantryIds])

  if (meaningfulPantry.length === 0) {
    return []
  }

  const urgentIngredientIds = new Set(
    parsedIngredients
      .filter((ingredient) => ingredient.urgency === 'use soon')
      .map((ingredient) => ingredient.id)
  )

  const scoredRecipes = recipeCatalog
    .map((recipe) => scoreRecipe(recipe, pantryIds, urgentIngredientIds))
    .filter((r): r is Scored => r !== null)
    .filter((recipe) => recipe.meaningfulUsedCount > 0)
    .filter(
      (recipe) =>
        !isWeakMatch(
          recipe.matchPercentage,
          recipe.meaningfulUsedCount,
          recipe.criticalMissingCount,
          recipe.meaningfulTotalMain
        )
    )
    .sort((a, b) => {
      if (a.criticalMissingCount !== b.criticalMissingCount) {
        return a.criticalMissingCount - b.criticalMissingCount
      }
      if (a.meaningfulUsedCount !== b.meaningfulUsedCount) {
        return b.meaningfulUsedCount - a.meaningfulUsedCount
      }
      if (b.urgentUsedCount !== a.urgentUsedCount) {
        return b.urgentUsedCount - a.urgentUsedCount
      }
      return b.matchPercentage - a.matchPercentage
    })

  const topSuggestions = scoredRecipes
    .slice(0, RECIPE_SUGGESTION_POOL_SIZE)
    .map(toSuggestion)

  if (topSuggestions.length > 0) {
    return topSuggestions
  }

  const fallbackSuggestions = createFallbackSuggestions(parsedIngredients)
  if (fallbackSuggestions.length > 0) {
    return fallbackSuggestions.slice(0, 6)
  }

  const loose = recipeCatalog
    .map((recipe) => scoreRecipe(recipe, pantryIds, urgentIngredientIds))
    .filter((r): r is Scored => r !== null)
    .filter((recipe) => recipe.meaningfulUsedCount > 0)
    .sort((a, b) => {
      if (a.criticalMissingCount !== b.criticalMissingCount) {
        return a.criticalMissingCount - b.criticalMissingCount
      }
      return b.meaningfulUsedCount - a.meaningfulUsedCount
    })
    .slice(0, RECIPE_SUGGESTION_POOL_SIZE)

  return loose.map(toSuggestion)
}
