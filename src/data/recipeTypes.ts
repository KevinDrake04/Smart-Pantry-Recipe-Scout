/**
 * Shared recipe shape for hand-authored samples and NLG-curated recipes.
 */

export type RecipeDifficulty = 'Easy' | 'Medium' | 'Hard'

/** Allowed cuisine / meal-style labels (single source of truth for app + curation). */
export const CUISINE_STYLES = [
  'General',
  'American',
  'Italian',
  'Mexican',
  'Indian',
  'Chinese',
  'Japanese',
  'Korean',
  'Thai',
  'Mediterranean',
  'Middle Eastern',
  'Greek',
  'French',
  'Breakfast',
  'Soup',
  'Salad',
  'Pasta',
  'Rice Bowl',
  'Sandwich',
  'Dessert',
] as const

export type CuisineStyle = (typeof CUISINE_STYLES)[number]

export function isCuisineStyle(value: string): value is CuisineStyle {
  return (CUISINE_STYLES as readonly string[]).includes(value)
}

export type RecipeDef = {
  title: string
  /** Canonical ingredient ids from `ingredientKnowledgeBase.ts` — drives matching. */
  mainIngredients: string[]
  /** Salt, oils, common spices (low match weight in KB). */
  optionalStaples?: string[]
  /** Optional extras (not used in match scoring). */
  optionalIngredients?: string[]
  tags?: string[]
  /**
   * Broad cuisine / meal style assigned at authoring or during dataset curation.
   * Prefer curated inference over guessing at runtime.
   */
  cuisineStyle: CuisineStyle
  estimatedTime: string
  difficulty: RecipeDifficulty
  /**
   * Optional metadata for showing a “View source” link in the UI.
   * Stored from RecipeNLG curation when available.
   */
  sourceUrl?: string
  /**
   * Optional display name for the source (e.g. RecipeNLG `source` field).
   */
  sourceName?: string
  /**
   * Whether `steps` come from cleaned dataset directions or from generated fallback templates.
   */
  stepsSource?: 'dataset' | 'generated'
  steps: string[]
}
