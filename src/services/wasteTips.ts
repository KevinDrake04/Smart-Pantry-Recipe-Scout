import type { ParsedIngredient } from './ingredientParser'

export type WasteTip = {
  title: string
  tip: string
  priority: 'high' | 'medium'
}

const leafyGreens = new Set(['spinach', 'lettuce', 'kale'])

function tipForIngredient(ingredient: ParsedIngredient): WasteTip[] {
  const tips: WasteTip[] = []
  const isUrgent = ingredient.urgency === 'use soon'
  const priority: 'high' | 'medium' = isUrgent ? 'high' : 'medium'

  if (leafyGreens.has(ingredient.name)) {
    tips.push({
      title: `Use ${ingredient.name} soon`,
      tip: `${ingredient.name} wilts quickly. Use it today in an omelet, rice bowl, or smoothie.`,
      priority,
    })
  }

  switch (ingredient.category) {
    case 'dairy':
      tips.push({
        title: `Check ${ingredient.name} expiration`,
        tip: `Dairy spoils quickly. Check the date and use ${ingredient.name} in simple recipes like toast, pasta, or smoothies.`,
        priority,
      })
      break
    case 'fruit':
      tips.push({
        title: `Save extra ${ingredient.name}`,
        tip: `Use ripe fruit in smoothies, or freeze it now for later blends and oatmeal toppings.`,
        priority,
      })
      break
    case 'vegetable':
      tips.push({
        title: `Cook ${ingredient.name} before it softens`,
        tip: `Vegetables keep longer once cooked. Turn ${ingredient.name} into a stir-fry, soup, or roasted side.`,
        priority,
      })
      break
    case 'grain':
      tips.push({
        title: `Batch-cook ${ingredient.name}`,
        tip: `Cook a larger grain batch and reuse leftovers for fried rice, grain bowls, or quick lunches.`,
        priority,
      })
      break
    default:
      break
  }

  return tips
}

export function generateWasteTips(parsedIngredients: ParsedIngredient[]): WasteTip[] {
  if (parsedIngredients.length === 0) {
    return []
  }

  const allTips = parsedIngredients.flatMap((ingredient) => tipForIngredient(ingredient))

  const deduped = new Map<string, WasteTip>()
  for (const tip of allTips) {
    const existing = deduped.get(tip.title)
    if (!existing || (existing.priority === 'medium' && tip.priority === 'high')) {
      deduped.set(tip.title, tip)
    }
  }

  return [...deduped.values()]
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority === 'high' ? -1 : 1
      }
      return a.title.localeCompare(b.title)
    })
    .slice(0, 6)
}
