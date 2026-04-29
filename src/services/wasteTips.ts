import { ingredientsById } from '../data/ingredientKnowledgeBase'
import type { ParsedIngredient } from './ingredientParser'

export type WasteTip = {
  title: string
  tip: string
  priority: 'high' | 'medium'
}

function perishRank(p: ParsedIngredient['perishability']): number {
  if (p === 'high') return 0
  if (p === 'medium') return 1
  return 2
}

export function generateWasteTips(parsedIngredients: ParsedIngredient[]): WasteTip[] {
  if (parsedIngredients.length === 0) {
    return []
  }

  const sorted = [...parsedIngredients].sort((a, b) => {
    const ua = a.urgency === 'use soon' ? 0 : 1
    const ub = b.urgency === 'use soon' ? 0 : 1
    if (ua !== ub) return ua - ub
    return perishRank(a.perishability) - perishRank(b.perishability)
  })

  const openingsUrgent = [
    'Time-sensitive — plan a meal soon while texture and flavor hold.',
    'Sounds urgent — prioritize cooking or freezing today.',
  ]
  const openingsPlan = [
    'Rotate into meals before storage conditions slip.',
    'Pair storage discipline with one fast serving idea.',
  ]

  const tips: WasteTip[] = []

  sorted.forEach((p, index) => {
    const urgent = p.urgency === 'use soon'
    const priority: WasteTip['priority'] = urgent ? 'high' : 'medium'
    const kb = ingredientsById[p.id]

    const storageLine = kb?.storageTip ?? p.storageTip
    const ideas = p.useIdeas.length ? p.useIdeas : ['Season simply', 'Combine with staples you trust']
    const idea = ideas[index % ideas.length]

    const opening = urgent
      ? openingsUrgent[index % openingsUrgent.length]
      : openingsPlan[index % openingsPlan.length]

    const subs =
      kb?.substitutions?.length || p.substitutions?.length
        ? ` Substitutions if needed: ${(kb?.substitutions ?? p.substitutions ?? []).slice(0, 2).join('; ')}.`
        : ''

    const tip = `${opening} ${storageLine} Quick idea: ${idea}.${subs}`

    tips.push({
      title: urgent ? `${p.name}: use soon` : `${p.name}: reduce waste`,
      tip,
      priority,
    })
  })

  return tips.slice(0, 8)
}
