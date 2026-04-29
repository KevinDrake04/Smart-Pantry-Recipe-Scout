/**
 * Shared recipe shape for hand-authored samples and NLG-curated recipes.
 */

export type RecipeDifficulty = 'Easy' | 'Medium' | 'Hard'

export type RecipeDef = {
  title: string
  /** Canonical ingredient ids from `ingredientKnowledgeBase.ts` — drives matching. */
  mainIngredients: string[]
  /** Salt, oils, common spices (low match weight in KB). */
  optionalStaples?: string[]
  /** Optional extras (not used in match scoring). */
  optionalIngredients?: string[]
  tags?: string[]
  /** Broad cuisine/category hint from curation heuristics. */
  cuisine?: string
  estimatedTime: string
  difficulty: RecipeDifficulty
  steps: string[]
}
