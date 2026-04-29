import {
  ingredientsById,
  isLowRecipeMatchWeight,
} from '../data/ingredientKnowledgeBase'
import type { ParsedIngredient } from './ingredientParser'

export type WasteTipSectionLabel = 'Use soon' | 'Storage' | 'Meal ideas' | 'Substitutions'

export type WasteTipSection = {
  label: WasteTipSectionLabel
  text: string
}

export type WasteTip = {
  /** Stable key for React lists */
  id: string
  ingredientName: string
  headline: string
  sections: WasteTipSection[]
  priority: 'high' | 'medium'
}

/** Optional richer one-liners for common pantry ids (short, specific). */
const MEAL_FOCUS: Partial<Record<string, string>> = {
  spinach:
    'Add it to eggs, rice bowls, smoothies, or soups before it wilts further.',
  rice: 'Leftover rice works well in fried rice, rice bowls, or soups. Reheat until steaming hot.',
  eggs: 'Use in scrambles, fried rice, bowls, or breakfast plates.',
  bread:
    'If bread is getting stale, toast it, make grilled cheese, or freeze slices for later.',
  milk: 'Use milk in smoothies, oatmeal, creamy pasta, or scrambled eggs before it expires.',
  tomatoes: 'Use soft tomatoes in pasta sauce, soup, salsa, or rice bowls.',
  chicken:
    'Use chicken soon or freeze it if you will not cook it within a day or two.',
  banana:
    'Freeze overripe bananas for smoothies or mash them into oatmeal.',
  cheese: 'Grate into eggs, melts, quesadillas, or pasta before it dries out.',
  butter: 'Use for sauteing, toast, or finishing sauces while fresh.',
  yogurt: 'Blend into smoothies, dollop on bowls, or bake while dates look good.',
  lettuce: 'Use crisp leaves in salads or wraps; wilting pieces still work in stir-fries.',
  potatoes: 'Roast, mash, or soup — trim sprouts or green spots before cooking.',
  beans: 'Rinse and warm for bowls, burritos, or mash for dips.',
  tuna: 'Mix into melts, salads, or pasta soon after opening.',
  pasta: 'Boil for quick sauces or cold salads with what you have.',
  noodles: 'Stir-fry, soup, or cold sesame-style noodles.',
  tortilla: 'Warm for wraps, quesadillas, or crispy strips.',
  oats: 'Cook as porridge or bake into simple crisps.',
  'peanut butter':
    'Spread on toast, blend into smoothies, or whisk into sauces.',
}

function perishRank(p: ParsedIngredient['perishability']): number {
  if (p === 'high') return 0
  if (p === 'medium') return 1
  return 2
}

function shouldSkipTip(p: ParsedIngredient): boolean {
  if (isLowRecipeMatchWeight(p.id)) return true
  if (p.id === 'salt' || p.id === 'black-pepper') return true
  if (p.perishability === 'low' && (p.category === 'pantry' || p.category === 'condiment')) {
    return true
  }
  return false
}

function leftoverCue(originalText: string): boolean {
  return /\bleftover\b|\bcooked\b|\brewarmed\b|\bold\b|\bextra\b/i.test(originalText)
}

/**
 * Lower = earlier in list. Order: use-soon → high perish → medium → leftovers cue → low.
 */
function wasteSortOrder(p: ParsedIngredient): number {
  if (p.urgency === 'use soon') return 0
  if (p.perishability === 'high') return 1
  if (p.perishability === 'medium') return 2
  if (leftoverCue(p.originalText)) return 3
  return 4
}

function capitalizeFirst(s: string): string {
  if (!s) return s
  return s[0].toUpperCase() + s.slice(1)
}

function mealLine(p: ParsedIngredient): string {
  const custom = MEAL_FOCUS[p.id]
  if (custom) return custom
  const ideas = p.useIdeas.filter(Boolean)
  if (ideas.length === 0) return `Cook or combine ${p.name} with what you already enjoy.`
  const pick = ideas.slice(0, 3)
  return `${capitalizeFirst(p.name)} pairs well with ${pick.join(', ')}.`
}

function buildSections(p: ParsedIngredient): WasteTipSection[] {
  const kb = ingredientsById[p.id]
  const sections: WasteTipSection[] = []

  if (p.urgency === 'use soon') {
    sections.push({
      label: 'Use soon',
      text: `Use ${p.name} soon. ${mealLine(p)}`,
    })
  }

  const storage = (kb?.storageTip ?? p.storageTip).trim()
  if (storage) {
    sections.push({ label: 'Storage', text: capitalizeFirst(storage) })
  }

  if (p.urgency !== 'use soon') {
    sections.push({ label: 'Meal ideas', text: mealLine(p) })
  }

  const subs = (kb?.substitutions ?? p.substitutions ?? []).filter(Boolean).slice(0, 2)
  if (subs.length > 0) {
    sections.push({
      label: 'Substitutions',
      text: `If you run short: ${subs.join('; ')}.`,
    })
  }

  return sections
}

export function generateWasteTips(parsedIngredients: ParsedIngredient[]): WasteTip[] {
  if (parsedIngredients.length === 0) {
    return []
  }

  const filtered = parsedIngredients.filter((p) => !shouldSkipTip(p))

  const sorted = [...filtered].sort((a, b) => {
    const oa = wasteSortOrder(a)
    const ob = wasteSortOrder(b)
    if (oa !== ob) return oa - ob
    return perishRank(a.perishability) - perishRank(b.perishability)
  })

  const tips: WasteTip[] = []
  const usedNames = new Set<string>()

  for (const p of sorted) {
    const sections = buildSections(p)
    if (sections.length === 0) continue

    let headline = p.name
    if (usedNames.has(p.name)) {
      headline = `${p.name} (${p.category})`
    }
    usedNames.add(p.name)

    const urgent = p.urgency === 'use soon'
    const highNeed =
      urgent || p.perishability === 'high' || leftoverCue(p.originalText)
    const priority: WasteTip['priority'] = highNeed ? 'high' : 'medium'

    tips.push({
      id: `${p.id}-${tips.length}`,
      ingredientName: p.name,
      headline,
      sections,
      priority,
    })
  }

  return tips.slice(0, 10)
}
