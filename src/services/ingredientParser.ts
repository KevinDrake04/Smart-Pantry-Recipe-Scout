import {
  createUnknownIngredientRecord,
  normalizeIngredientPhrase,
  resolveIngredientPhrase,
  type IngredientCategory,
  type IngredientRecord,
  type Perishability,
} from '../data/ingredientKnowledgeBase'

export type IngredientUrgency = 'use soon' | 'normal'

export type ParsedIngredient = {
  id: string
  name: string
  originalText: string
  category: IngredientCategory
  urgency: IngredientUrgency
  perishability: Perishability
  storageTip: string
  useIdeas: string[]
  substitutions?: string[]
}

export type { IngredientCategory, Perishability } from '../data/ingredientKnowledgeBase'

/** Strip urgency cues before canonical matching (longest phrases first). */
const URGENCY_PHRASES = ['almost bad', 'use soon', 'leftover', 'expiring', 'old']

function stripUrgency(raw: string): { cleaned: string; urgency: IngredientUrgency } {
  let s = normalizeIngredientPhrase(raw)
  let urgency: IngredientUrgency = 'normal'
  const sorted = [...URGENCY_PHRASES].sort((a, b) => b.length - a.length)

  for (const phrase of sorted) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')
    const re = new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'gi')
    if (re.test(s)) {
      urgency = 'use soon'
      s = s.replace(re, ' ')
    }
  }

  s = normalizeIngredientPhrase(s)
  return { cleaned: s, urgency }
}

function toParsed(
  record: IngredientRecord,
  originalText: string,
  urgency: IngredientUrgency
): ParsedIngredient {
  return {
    id: record.id,
    name: record.name,
    originalText,
    category: record.category,
    urgency,
    perishability: record.perishability,
    storageTip: record.storageTip,
    useIdeas: record.useIdeas,
    substitutions: record.substitutions,
  }
}

export function parseIngredients(rawInput: string): ParsedIngredient[] {
  const trimmed = rawInput.trim()
  if (!trimmed) {
    return []
  }

  const byId = new Map<string, ParsedIngredient>()

  for (const segment of rawInput.split(',')) {
    const originalText = segment.trim()
    if (!originalText) continue

    const { cleaned, urgency } = stripUrgency(segment)
    if (!cleaned) continue

    const resolved = resolveIngredientPhrase(cleaned)
    const record = resolved ?? createUnknownIngredientRecord(cleaned)

    const existing = byId.get(record.id)
    if (existing) {
      if (urgency === 'use soon') {
        existing.urgency = 'use soon'
      }
      continue
    }

    byId.set(record.id, toParsed(record, originalText, urgency))
  }

  return [...byId.values()]
}
