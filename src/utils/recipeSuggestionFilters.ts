import { CUISINE_STYLES } from '../data/recipeTypes'
import type { RecipeSuggestion } from '../services/recipeGenerator'

export function displayCuisine(recipe: RecipeSuggestion): string {
  return recipe.cuisineStyle
}

/** Unique cuisines from the current suggestion list, sorted alphabetically. */
export function cuisinesInSuggestions(recipes: RecipeSuggestion[]): string[] {
  const set = new Set<string>()
  for (const r of recipes) {
    set.add(r.cuisineStyle)
  }
  return [...set].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
}

/**
 * Dropdown options: “All” first, then allowed labels that appear in the current pool,
 * in CUISINE_STYLES order (omit absent labels).
 */
export function buildOrderedCuisineFilterOptions(
  recipes: RecipeSuggestion[]
): { id: string; name: string }[] {
  const present = new Set<string>()
  for (const r of recipes) {
    present.add(r.cuisineStyle.toLowerCase())
  }

  const out: { id: string; name: string }[] = [
    { id: 'all', name: 'All cuisines / styles' },
  ]

  for (const label of CUISINE_STYLES) {
    const key = label.toLowerCase()
    if (present.has(key)) {
      out.push({ id: key, name: label })
    }
  }

  return out
}

/** Filter by title search and cuisine/style only; preserves generator ranking order. */
export function filterRecipeSuggestions(
  recipes: RecipeSuggestion[],
  searchQuery: string,
  cuisineFilter: string
): RecipeSuggestion[] {
  const q = searchQuery.trim().toLowerCase()
  const cf = cuisineFilter.trim().toLowerCase()

  let list = recipes.slice()

  if (q) {
    list = list.filter((r) => r.title.toLowerCase().includes(q))
  }

  if (cf && cf !== 'all') {
    list = list.filter((r) => r.cuisineStyle.toLowerCase() === cf)
  }

  return list
}
