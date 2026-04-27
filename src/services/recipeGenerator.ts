import { sampleRecipes } from '../data/sampleRecipes'
import type { ParsedIngredient } from './ingredientParser'

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
}

const nonCriticalPantryStaples = new Set([
  'salt',
  'pepper',
  'oil',
  'water',
  'butter',
  'seasoning',
])

const substitutionMap: Record<string, string> = {
  'soy sauce': 'salt + a small splash of vinegar',
  garlic: 'garlic powder or onion',
  milk: 'water or a non-dairy milk',
  cheese: 'nutritional yeast or skip it',
}

function buildWhyRecommended(
  usedIngredients: string[],
  urgentIngredientNames: Set<string>
): string {
  if (usedIngredients.length === 0) {
    return 'Recommended based on your ingredient categories and quick prep.'
  }

  const highlighted = usedIngredients.map((ingredient) =>
    urgentIngredientNames.has(ingredient)
      ? `use-soon ${ingredient}`
      : ingredient
  )

  const usedText =
    highlighted.length > 1
      ? `${highlighted.slice(0, -1).join(', ')}, and ${highlighted.at(-1)}`
      : highlighted[0]

  return `Recommended because it uses your ${usedText}.`
}

function createFallbackSuggestions(parsedIngredients: ParsedIngredient[]): RecipeSuggestion[] {
  const names = new Set(parsedIngredients.map((item) => item.name))
  const categories = new Set(parsedIngredients.map((item) => item.category))
  const fallback: RecipeSuggestion[] = []

  if (categories.has('grain') && categories.has('vegetable')) {
    fallback.push({
      title: 'Pantry Grain Bowl',
      matchPercentage: 60,
      matchSummary: 'You have a flexible grain + vegetable base.',
      usedIngredients: parsedIngredients
        .filter((item) => item.category === 'grain' || item.category === 'vegetable')
        .map((item) => item.name)
        .slice(0, 4),
      missingIngredients: [],
      substitutions: [],
      whyRecommended: 'Recommended because your grain and vegetables can become a fast bowl meal.',
      estimatedTime: '15 min',
      difficulty: 'Easy',
      steps: [
        'Cook or reheat your grain.',
        'Saute vegetables with any seasoning you like.',
        'Combine and finish with a simple dressing.',
      ],
    })
  }

  if (names.has('eggs') && categories.has('vegetable')) {
    fallback.push({
      title: 'Simple Omelet',
      matchPercentage: 65,
      matchSummary: 'You have the key omelet ingredients.',
      usedIngredients: parsedIngredients
        .filter((item) => item.name === 'eggs' || item.category === 'vegetable')
        .map((item) => item.name)
        .slice(0, 4),
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

  if (names.has('milk') && categories.has('fruit')) {
    fallback.push({
      title: 'Quick Smoothie',
      matchPercentage: 70,
      matchSummary: 'You have milk + fruit for a drinkable snack.',
      usedIngredients: parsedIngredients
        .filter((item) => item.name === 'milk' || item.category === 'fruit')
        .map((item) => item.name)
        .slice(0, 4),
      missingIngredients: [],
      substitutions: [],
      whyRecommended: 'Recommended because milk and fruit blend into a no-cook option.',
      estimatedTime: '5 min',
      difficulty: 'Easy',
      steps: [
        'Add milk and fruit to a blender.',
        'Blend until smooth.',
        'Serve immediately.',
      ],
    })
  }

  if (names.has('bread') && names.has('cheese')) {
    fallback.push({
      title: 'Grilled Cheese',
      matchPercentage: 75,
      matchSummary: 'You already have bread and cheese.',
      usedIngredients: ['bread', 'cheese'],
      missingIngredients: [],
      substitutions: [],
      whyRecommended: 'Recommended because bread and cheese are enough for a reliable comfort meal.',
      estimatedTime: '10 min',
      difficulty: 'Easy',
      steps: [
        'Assemble cheese between bread slices.',
        'Grill both sides until golden.',
        'Serve hot.',
      ],
    })
  }

  return fallback.slice(0, 4)
}

export function generateRecipeSuggestions(
  parsedIngredients: ParsedIngredient[]
): RecipeSuggestion[] {
  const pantrySet = new Set(parsedIngredients.map((ingredient) => ingredient.name))
  const urgentIngredientNames = new Set(
    parsedIngredients
      .filter((ingredient) => ingredient.urgency === 'use soon')
      .map((ingredient) => ingredient.name)
  )

  const scoredRecipes = sampleRecipes
    .map((recipe) => {
      const usedIngredients = recipe.requiredIngredients.filter((ingredient) =>
        pantrySet.has(ingredient)
      )
      const missingIngredients = recipe.requiredIngredients.filter(
        (ingredient) => !pantrySet.has(ingredient)
      )
      const criticalMissingCount = missingIngredients.filter(
        (ingredient) => !nonCriticalPantryStaples.has(ingredient)
      ).length
      const totalIngredients = recipe.requiredIngredients.length
      const matchPercentage = Math.round((usedIngredients.length / totalIngredients) * 100)
      const urgentUsedCount = usedIngredients.filter((ingredient) =>
        urgentIngredientNames.has(ingredient)
      ).length
      const substitutions = missingIngredients
        .filter((ingredient) => substitutionMap[ingredient])
        .map((ingredient) => `${ingredient}: ${substitutionMap[ingredient]}`)

      return {
        title: recipe.title,
        matchPercentage,
        matchSummary: `You have ${usedIngredients.length} of ${totalIngredients} main ingredients.`,
        usedIngredients,
        missingIngredients,
        substitutions,
        whyRecommended: buildWhyRecommended(usedIngredients, urgentIngredientNames),
        estimatedTime: recipe.estimatedTime,
        difficulty: recipe.difficulty,
        steps: recipe.steps,
        criticalMissingCount,
        urgentUsedCount,
      }
    })
    .filter((recipe) => recipe.usedIngredients.length > 0)
    .sort((a, b) => {
      if (a.criticalMissingCount !== b.criticalMissingCount) {
        return a.criticalMissingCount - b.criticalMissingCount
      }
      if (a.usedIngredients.length !== b.usedIngredients.length) {
        return b.usedIngredients.length - a.usedIngredients.length
      }
      return b.urgentUsedCount - a.urgentUsedCount
    })

  const strongMatches = scoredRecipes
    .filter((recipe) => recipe.matchPercentage >= 50 || recipe.usedIngredients.length >= 2)
    .slice(0, 4)
    .map(({ criticalMissingCount: _criticalMissingCount, urgentUsedCount: _urgentUsedCount, ...recipe }) => recipe)

  if (strongMatches.length > 0) {
    return strongMatches.slice(0, Math.max(2, Math.min(4, strongMatches.length)))
  }

  const fallbackSuggestions = createFallbackSuggestions(parsedIngredients)
  if (fallbackSuggestions.length > 0) {
    return fallbackSuggestions.slice(0, Math.max(2, Math.min(4, fallbackSuggestions.length)))
  }

  return scoredRecipes
    .slice(0, 2)
    .map(({ criticalMissingCount: _criticalMissingCount, urgentUsedCount: _urgentUsedCount, ...recipe }) => recipe)
}
