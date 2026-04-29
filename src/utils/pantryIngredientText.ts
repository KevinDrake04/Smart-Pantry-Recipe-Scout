import { formatIngredientLabel } from '../data/ingredientKnowledgeBase'
import { parseIngredients } from '../services/ingredientParser'

/**
 * Toggle a knowledge-base ingredient on the pantry comma-separated string.
 * Preserves original phrasing for segments that remain (fuzzy input friendly).
 */
export function togglePantryIngredient(text: string, id: string): string {
  const parsed = parseIngredients(text)
  const present = parsed.some((p) => p.id === id)
  if (present) {
    return parsed
      .filter((p) => p.id !== id)
      .map((p) => p.originalText)
      .join(', ')
  }
  const label = formatIngredientLabel(id)
  const t = text.trim()
  return t ? `${t}, ${label}` : label
}
