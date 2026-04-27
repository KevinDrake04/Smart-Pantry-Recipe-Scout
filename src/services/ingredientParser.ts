export type IngredientCategory =
  | 'protein'
  | 'grain'
  | 'vegetable'
  | 'fruit'
  | 'dairy'
  | 'pantry'
  | 'other'

export type IngredientUrgency = 'use soon' | 'normal'

export type ParsedIngredient = {
  name: string
  originalText: string
  category: IngredientCategory
  urgency: IngredientUrgency
}

const typoMap: Record<string, string> = {
  tomatos: 'tomatoes',
  eggg: 'eggs',
  spinich: 'spinach',
  cheeze: 'cheese',
}

const urgencyTerms = ['old', 'leftover', 'expiring', 'almost bad']

const categoryMap: Record<string, IngredientCategory> = {
  eggs: 'protein',
  chicken: 'protein',
  beef: 'protein',
  fish: 'protein',
  tofu: 'protein',
  beans: 'protein',
  rice: 'grain',
  pasta: 'grain',
  bread: 'grain',
  oats: 'grain',
  spinach: 'vegetable',
  onion: 'vegetable',
  tomato: 'vegetable',
  tomatoes: 'vegetable',
  carrot: 'vegetable',
  carrots: 'vegetable',
  banana: 'fruit',
  apple: 'fruit',
  apples: 'fruit',
  orange: 'fruit',
  oranges: 'fruit',
  milk: 'dairy',
  cheese: 'dairy',
  yogurt: 'dairy',
  butter: 'dairy',
  flour: 'pantry',
  sugar: 'pantry',
  salt: 'pantry',
  oil: 'pantry',
  spices: 'pantry',
}

function cleanIngredientName(raw: string): { name: string; urgency: IngredientUrgency } {
  let cleaned = raw.trim().toLowerCase()
  let urgency: IngredientUrgency = 'normal'

  for (const term of urgencyTerms) {
    if (cleaned.includes(term)) {
      urgency = 'use soon'
      const expression = new RegExp(`\\b${term}\\b`, 'g')
      cleaned = cleaned.replace(expression, ' ')
    }
  }

  cleaned = cleaned.replace(/\s+/g, ' ').trim()
  cleaned = typoMap[cleaned] ?? cleaned

  return { name: cleaned, urgency }
}

function categorizeIngredient(name: string): IngredientCategory {
  return categoryMap[name] ?? 'other'
}

export function parseIngredients(rawInput: string): ParsedIngredient[] {
  const parsed: ParsedIngredient[] = []
  const seenNames = new Set<string>()

  for (const token of rawInput.split(',')) {
    const originalText = token.trim()
    if (!originalText) {
      continue
    }

    const { name, urgency } = cleanIngredientName(originalText)
    if (!name || seenNames.has(name)) {
      continue
    }

    seenNames.add(name)
    parsed.push({
      name,
      originalText,
      category: categorizeIngredient(name),
      urgency,
    })
  }

  return parsed
}
