/**
 * Local ingredient knowledge base (frontend-only).
 * Canonical IDs power parsing, recipes, substitutions, and waste tips.
 */

export type IngredientCategory =
  | 'protein'
  | 'grain'
  | 'vegetable'
  | 'fruit'
  | 'dairy'
  | 'legume'
  | 'pantry'
  | 'condiment'
  | 'other'

export type Perishability = 'low' | 'medium' | 'high'

export type IngredientRecord = {
  id: string
  name: string
  category: IngredientCategory
  aliases: string[]
  perishability: Perishability
  storageTip: string
  useIdeas: string[]
  substitutions?: string[]
}

export const INGREDIENT_KNOWLEDGE_BASE: IngredientRecord[] = [
  {
    id: 'eggs',
    name: 'eggs',
    category: 'protein',
    aliases: ['egg', 'eggs', 'eggg'],
    perishability: 'high',
    storageTip: 'Keep refrigerated with the carton closed; use within the pack date.',
    useIdeas: ['Scrambles and omelets', 'Fried rice', 'Frittatas'],
    substitutions: ['Tofu scramble', 'Chickpea batter for a simple pancake'],
  },
  {
    id: 'chicken',
    name: 'chicken',
    category: 'protein',
    aliases: ['chicken', 'chiken', 'chickn'],
    perishability: 'high',
    storageTip: 'Store on a low fridge shelf; cook or freeze within 1–2 days if opened.',
    useIdeas: ['Stir-fry strips', 'Soup', 'Salad topper'],
    substitutions: ['Tofu', 'Beans', 'Extra vegetables'],
  },
  {
    id: 'tuna',
    name: 'tuna',
    category: 'protein',
    aliases: ['tuna', 'tunafish'],
    perishability: 'high',
    storageTip: 'Refrigerate opened canned tuna in a sealed container and use quickly.',
    useIdeas: ['Melts', 'Salads', 'Pasta toss'],
    substitutions: ['Canned salmon', 'Chickpeas', 'White beans'],
  },
  {
    id: 'tofu',
    name: 'tofu',
    category: 'protein',
    aliases: ['tofu'],
    perishability: 'high',
    storageTip: 'Submerge unused tofu in water in a sealed container; change water daily.',
    useIdeas: ['Stir-fry cubes', 'Scrambles', 'Soups'],
    substitutions: ['Tempeh', 'Beans'],
  },
  {
    id: 'peanut butter',
    name: 'peanut butter',
    category: 'protein',
    aliases: ['peanut butter', 'pb'],
    perishability: 'medium',
    storageTip: 'Store tightly sealed; stir natural types if oil separates.',
    useIdeas: ['Toast', 'Smoothies', 'Sauces'],
    substitutions: ['Other nut or seed butter'],
  },
  {
    id: 'rice',
    name: 'rice',
    category: 'grain',
    aliases: ['rice'],
    perishability: 'high',
    storageTip: 'Cool leftover rice quickly; refrigerate and reheat until steaming hot.',
    useIdeas: ['Bowls', 'Fried rice', 'Soup thickener'],
    substitutions: ['Quinoa', 'Pasta', 'Bread crumbs for bulk'],
  },
  {
    id: 'pasta',
    name: 'pasta',
    category: 'grain',
    aliases: ['pasta', 'spaghetti', 'macaroni'],
    perishability: 'medium',
    storageTip: 'Dry pasta lasts in a sealed pantry container; cooked pasta lasts ~3–4 days chilled.',
    useIdeas: ['Quick sauces', 'Bakes', 'Cold salads'],
    substitutions: ['Rice', 'Noodles', 'Vegetable ribbons'],
  },
  {
    id: 'bread',
    name: 'bread',
    category: 'grain',
    aliases: ['bread', 'toast'],
    perishability: 'medium',
    storageTip: 'Freeze sliced bread you will not finish this week.',
    useIdeas: ['Sandwiches', 'Croutons', 'French toast'],
    substitutions: ['Tortilla', 'Crackers', 'Lettuce wraps'],
  },
  {
    id: 'oats',
    name: 'oats',
    category: 'grain',
    aliases: ['oats', 'oatmeal', 'rolled oats'],
    perishability: 'medium',
    storageTip: 'Keep dry oats airtight away from humidity.',
    useIdeas: ['Porridge', 'Smoothie thickness', 'Crumbles'],
    substitutions: ['Crushed crackers', 'Extra fruit'],
  },
  {
    id: 'noodles',
    name: 'noodles',
    category: 'grain',
    aliases: ['noodle', 'noodles', 'ramen noodles'],
    perishability: 'medium',
    storageTip: 'Store dry noodles sealed; toss cooked noodles with a little oil so they do not clump.',
    useIdeas: ['Stir-fry', 'Soup', 'Cold noodle salad'],
    substitutions: ['Pasta', 'Rice'],
  },
  {
    id: 'quinoa',
    name: 'quinoa',
    category: 'grain',
    aliases: ['quinoa', 'quilino'],
    perishability: 'medium',
    storageTip: 'Dry quinoa stays months in a cool pantry jar.',
    useIdeas: ['Grain bowls', 'Salads', 'Breakfast porridge'],
    substitutions: ['Rice', 'Couscous'],
  },
  {
    id: 'tortilla',
    name: 'tortilla',
    category: 'grain',
    aliases: ['tortilla', 'tortillas', 'tortila', 'tortillia'],
    perishability: 'medium',
    storageTip: 'Keep sealed after opening; warm briefly before rolling.',
    useIdeas: ['Wraps', 'Quesadillas', 'Crispy strips'],
    substitutions: ['Bread', 'Large lettuce leaves'],
  },
  {
    id: 'tomatoes',
    name: 'tomatoes',
    category: 'vegetable',
    aliases: [
      'tomato',
      'tomatoes',
      'tomatos',
      'cherry tomato',
      'cherry tomatoes',
      'roma tomato',
    ],
    perishability: 'medium',
    storageTip: 'Room temperature until ripe; then refrigerate if needed.',
    useIdeas: ['Sauce', 'Eggs', 'Salads'],
    substitutions: ['Salsa', 'Tomato paste diluted', 'Roasted peppers'],
  },
  {
    id: 'spinach',
    name: 'spinach',
    category: 'vegetable',
    aliases: ['spinach', 'spinich'],
    perishability: 'high',
    storageTip: 'Line a container with paper towel to absorb moisture.',
    useIdeas: ['Eggs', 'Soups', 'Smoothies'],
    substitutions: ['Kale', 'Lettuce', 'Frozen spinach'],
  },
  {
    id: 'lettuce',
    name: 'lettuce',
    category: 'vegetable',
    aliases: ['lettuce', 'letuce', 'romaine', 'greens'],
    perishability: 'high',
    storageTip: 'Keep dry in the crisper; revive wilted leaves briefly in cold water.',
    useIdeas: ['Salads', 'Wraps', 'Sandwich topper'],
    substitutions: ['Cabbage', 'Spinach'],
  },
  {
    id: 'onion',
    name: 'onion',
    category: 'vegetable',
    aliases: ['onion', 'onions', 'onoin'],
    perishability: 'medium',
    storageTip: 'Store whole onions cool and dry; wrap cut halves tightly.',
    useIdeas: ['Base for soups', 'Stir-fries', 'Eggs'],
    substitutions: ['Shallot', 'Onion powder', 'Green onion'],
  },
  {
    id: 'green onion',
    name: 'green onion',
    category: 'vegetable',
    aliases: ['green onion', 'green onions', 'scallion', 'scallions'],
    perishability: 'medium',
    storageTip: 'Stand trimmed ends in water or wrap in damp towel briefly.',
    useIdeas: ['Garnish', 'Stir-fries', 'Eggs'],
    substitutions: ['Chives', 'White onion'],
  },
  {
    id: 'garlic',
    name: 'garlic',
    category: 'vegetable',
    aliases: ['garlic', 'garlig', 'garlc'],
    perishability: 'medium',
    storageTip: 'Cool dry spot for whole bulbs; refrigerate peeled cloves short-term.',
    useIdeas: ['Sauces', 'Roasts', 'Stir-fries'],
    substitutions: ['Garlic powder', 'Jarred minced garlic'],
  },
  {
    id: 'peppers',
    name: 'bell peppers',
    category: 'vegetable',
    aliases: [
      'pepper',
      'peppers',
      'bell pepper',
      'bell peppers',
      'peper',
      'sweet pepper',
    ],
    perishability: 'medium',
    storageTip: 'Bag loosely in crisper to avoid soft spots.',
    useIdeas: ['Stir-fry', 'Fajitas', 'Salads'],
    substitutions: ['Frozen pepper mix', 'Zucchini'],
  },
  {
    id: 'carrots',
    name: 'carrots',
    category: 'vegetable',
    aliases: ['carrot', 'carrots'],
    perishability: 'medium',
    storageTip: 'Remove greens if attached; bag carrots slightly damp.',
    useIdeas: ['Soup', 'Roast', 'Salad shred'],
    substitutions: ['Celery', 'Frozen carrots'],
  },
  {
    id: 'potatoes',
    name: 'potatoes',
    category: 'vegetable',
    aliases: ['potato', 'potatoes', 'potatos'],
    perishability: 'medium',
    storageTip: 'Dark cool place for whole potatoes; refrigerate cooked potatoes soon.',
    useIdeas: ['Hash', 'Soup', 'Mash'],
    substitutions: ['Sweet potato', 'Turnip', 'Extra bread or pasta for bulk'],
  },
  {
    id: 'broccoli',
    name: 'broccoli',
    category: 'vegetable',
    aliases: ['broccoli'],
    perishability: 'high',
    storageTip: 'Do not seal wet; use within a few days for best texture.',
    useIdeas: ['Roast', 'Stir-fry', 'Pasta toss'],
    substitutions: ['Cauliflower', 'Frozen broccoli'],
  },
  {
    id: 'zucchini',
    name: 'zucchini',
    category: 'vegetable',
    aliases: ['zucchini', 'courgette'],
    perishability: 'medium',
    storageTip: 'Refrigerate in perforated bag.',
    useIdeas: ['Saute', 'Grate into bakes', 'Noodle substitute'],
    substitutions: ['Summer squash', 'Cucumber in salads'],
  },
  {
    id: 'beans',
    name: 'beans',
    category: 'legume',
    aliases: [
      'beans',
      'bean',
      'black beans',
      'kidney beans',
      'chickpeas',
      'chickpea',
      'garbanzo',
      'lentils',
      'lentil',
    ],
    perishability: 'high',
    storageTip: 'Refrigerate opened cans in a labeled container.',
    useIdeas: ['Bowls', 'Wraps', 'Mashes'],
    substitutions: ['Lentils', 'Tofu', 'Extra rice and vegetables'],
  },
  {
    id: 'banana',
    name: 'banana',
    category: 'fruit',
    aliases: ['banana', 'bananas', 'bananna'],
    perishability: 'medium',
    storageTip: 'Peel and freeze slices for smoothies when very ripe.',
    useIdeas: ['Smoothies', 'Oats', 'Quick bread'],
    substitutions: ['Applesauce', 'Mango'],
  },
  {
    id: 'strawberry',
    name: 'strawberry',
    category: 'fruit',
    aliases: ['strawberry', 'strawberries', 'strawbery'],
    perishability: 'high',
    storageTip: 'Do not wash until ready; freeze before mold appears.',
    useIdeas: ['Yogurt bowl', 'Smoothie', 'Sauce'],
    substitutions: ['Frozen mixed berries', 'Jam in a pinch'],
  },
  {
    id: 'apple',
    name: 'apple',
    category: 'fruit',
    aliases: ['apple', 'apples'],
    perishability: 'medium',
    storageTip: 'Keep crisper cold; wrap cut pieces tightly.',
    useIdeas: ['Snacks', 'Salads', 'Oat toppings'],
    substitutions: ['Pear', 'Carrot shred for crunch'],
  },
  {
    id: 'orange',
    name: 'orange',
    category: 'fruit',
    aliases: ['orange', 'oranges'],
    perishability: 'medium',
    storageTip: 'Counter for a few days; fridge for longer.',
    useIdeas: ['Juice', 'Zest into dressings', 'Snacks'],
    substitutions: ['Lemon', 'Lime'],
  },
  {
    id: 'milk',
    name: 'milk',
    category: 'dairy',
    aliases: ['milk', 'whole milk'],
    perishability: 'high',
    storageTip: 'Keep coldest part of fridge; smell-test before cooking.',
    useIdeas: ['Oats', 'Sauces', 'Baking'],
    substitutions: ['Oat or almond milk', 'Water plus extra fat for richness'],
  },
  {
    id: 'cheese',
    name: 'cheese',
    category: 'dairy',
    aliases: ['cheese', 'cheeze'],
    perishability: 'medium',
    storageTip: 'Rewrap tightly; freeze shreds for melts if needed.',
    useIdeas: ['Melts', 'Salad', 'Eggs'],
    substitutions: ['Nutritional yeast', 'Extra salt and richness from butter'],
  },
  {
    id: 'yogurt',
    name: 'yogurt',
    category: 'dairy',
    aliases: ['yogurt', 'yoghurt', 'yogourt'],
    perishability: 'high',
    storageTip: 'Keep sealed; use dairy by the date once opened.',
    useIdeas: ['Parfaits', 'Marinades', 'Smoothies'],
    substitutions: ['Cottage cheese', 'Sour cream', 'Milk plus lemon'],
  },
  {
    id: 'butter',
    name: 'butter',
    category: 'dairy',
    aliases: ['butter'],
    perishability: 'medium',
    storageTip: 'Fridge for daily use; freeze extra sticks.',
    useIdeas: ['Toast', 'Saute', 'Finishing sauces'],
    substitutions: ['Oil', 'Margarine'],
  },
  {
    id: 'cottage cheese',
    name: 'cottage cheese',
    category: 'dairy',
    aliases: ['cottage cheese'],
    perishability: 'high',
    storageTip: 'Keep coldest shelf; stir if watery.',
    useIdeas: ['Bowls', 'Wraps', 'Pasta topper'],
    substitutions: ['Ricotta', 'Yogurt'],
  },
  {
    id: 'flour',
    name: 'flour',
    category: 'pantry',
    aliases: ['flour', 'all purpose flour'],
    perishability: 'low',
    storageTip: 'Airtight in a cool pantry.',
    useIdeas: ['Thickening', 'Simple flatbreads', 'Coatings'],
    substitutions: ['Cornstarch slurry', 'Skip if not essential'],
  },
  {
    id: 'sugar',
    name: 'sugar',
    category: 'pantry',
    aliases: ['sugar', 'brown sugar'],
    perishability: 'low',
    storageTip: 'Keep dry to avoid clumps.',
    useIdeas: ['Baking', 'Balancing sauces', 'Oats'],
    substitutions: ['Honey', 'Maple syrup', 'Ripe banana sweetness'],
  },
  {
    id: 'salt',
    name: 'salt',
    category: 'pantry',
    aliases: ['salt', 'sea salt'],
    perishability: 'low',
    storageTip: 'Dry shaker; keep away from steam.',
    useIdeas: ['Seasoning', 'Pasta water', 'Finishing'],
    substitutions: ['Soy sauce carefully', 'Capers for brine'],
  },
  {
    id: 'oil',
    name: 'oil',
    category: 'pantry',
    aliases: ['oil', 'olive oil', 'cooking oil', 'vegetable oil'],
    perishability: 'low',
    storageTip: 'Dark bottle or cabinet away from heat.',
    useIdeas: ['Saute', 'Roast', 'Dressings'],
    substitutions: ['Butter', 'Broth for water-saute'],
  },
  {
    id: 'honey',
    name: 'honey',
    category: 'pantry',
    aliases: ['honey'],
    perishability: 'low',
    storageTip: 'Sealed at room temperature.',
    useIdeas: ['Sweeten tea or oats', 'Glazes'],
    substitutions: ['Sugar', 'Maple syrup'],
  },
  {
    id: 'spices',
    name: 'spices',
    category: 'pantry',
    aliases: ['spices', 'spice mix', 'seasoning'],
    perishability: 'low',
    storageTip: 'Cool dark cabinet; smell for freshness.',
    useIdeas: ['Any skillet meal', 'Soups', 'Roasts'],
    substitutions: ['Herb sprigs', 'Hot sauce sparingly'],
  },
  {
    id: 'soy sauce',
    name: 'soy sauce',
    category: 'condiment',
    aliases: ['soy sauce', 'soya sauce', 'tamari'],
    perishability: 'low',
    storageTip: 'Fridge after opening for best flavor.',
    useIdeas: ['Stir-fry', 'Marinades', 'Rice bowls'],
    substitutions: ['Salt plus a splash of vinegar', 'Coconut aminos'],
  },
  {
    id: 'salsa',
    name: 'salsa',
    category: 'condiment',
    aliases: ['salsa'],
    perishability: 'medium',
    storageTip: 'Refrigerate after opening.',
    useIdeas: ['Eggs', 'Beans', 'Wraps'],
    substitutions: ['Chopped tomato and onion', 'Hot sauce'],
  },
  {
    id: 'vinegar',
    name: 'vinegar',
    category: 'condiment',
    aliases: ['vinegar', 'balsamic vinegar', 'rice vinegar'],
    perishability: 'low',
    storageTip: 'Tightly closed; stable for a long time.',
    useIdeas: ['Dressings', 'Deglazing', 'Pickles'],
    substitutions: ['Lemon juice', 'Lime juice'],
  },
  {
    id: 'garlic powder',
    name: 'garlic powder',
    category: 'condiment',
    aliases: ['garlic powder'],
    perishability: 'low',
    storageTip: 'Dry pantry; replace if it smells dull.',
    useIdeas: ['Sauces', 'Rubs', 'Soups'],
    substitutions: ['Fresh garlic', 'Onion powder'],
  },
  {
    id: 'sesame seeds',
    name: 'sesame seeds',
    category: 'pantry',
    aliases: ['sesame seeds'],
    perishability: 'low',
    storageTip: 'Airtight to prevent rancidity.',
    useIdeas: ['Bowls', 'Salads', 'Stir-fry finish'],
    substitutions: ['Crushed nuts', 'Skip'],
  },
  {
    id: 'nutritional yeast',
    name: 'nutritional yeast',
    category: 'pantry',
    aliases: ['nutritional yeast', 'nooch'],
    perishability: 'low',
    storageTip: 'Dry cupboard.',
    useIdeas: ['Savory popcorn', 'Sauces', 'Eggs'],
    substitutions: ['Cheese', 'Salt plus herbs'],
  },
]

/** Canonical lookup by id */
export const ingredientsById: Record<string, IngredientRecord> = Object.fromEntries(
  INGREDIENT_KNOWLEDGE_BASE.map((ing) => [ing.id, ing])
)

/** Normalize whitespace and case for alias comparison */
export function normalizeIngredientPhrase(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, ' ')
}

function uniqueSortedAliases(): string[] {
  const set = new Set<string>()
  for (const ing of INGREDIENT_KNOWLEDGE_BASE) {
    set.add(normalizeIngredientPhrase(ing.id))
    set.add(normalizeIngredientPhrase(ing.name))
    for (const a of ing.aliases) {
      set.add(normalizeIngredientPhrase(a))
    }
  }
  return [...set].sort((a, b) => b.length - a.length)
}

/** Longest-alias-first for greedy phrase matching */
const SORTED_ALIAS_KEYS = uniqueSortedAliases()

/** Exact lookup: normalized alias → record */
const aliasExactLookup = new Map<string, IngredientRecord>()
for (const ing of INGREDIENT_KNOWLEDGE_BASE) {
  const add = (s: string) => {
    const k = normalizeIngredientPhrase(s)
    if (k) aliasExactLookup.set(k, ing)
  }
  add(ing.id)
  add(ing.name)
  for (const a of ing.aliases) add(a)
}

/** Singular/plural style variants to try after exact match */
function morphologicalVariants(term: string): string[] {
  const t = normalizeIngredientPhrase(term)
  if (!t) return []
  const out = new Set<string>([t])

  if (t.length > 2 && t.endsWith('s')) {
    out.add(t.slice(0, -1))
    if (t.endsWith('es')) out.add(t.slice(0, -2))
    if (t.endsWith('ies')) out.add(t.slice(0, -3) + 'y')
  }
  if (!t.endsWith('s')) {
    out.add(t + 's')
    out.add(t + 'es')
  }
  return [...out]
}

function matchesWholePhrase(haystack: string, needle: string): boolean {
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')
  const re = new RegExp(`(^|\\s)${escaped}(\\s|$)`, 'i')
  return re.test(haystack)
}

/**
 * Resolve a cleaned user fragment (urgency words already removed) to a known record, or null.
 * Prefers longest multi-word aliases so “peanut butter” wins over “butter”; token matching avoids “egg” → eggs inside “eggplant”.
 */
export function resolveIngredientPhrase(cleanedFragment: string): IngredientRecord | null {
  const key = normalizeIngredientPhrase(cleanedFragment)
  if (!key) return null

  if (aliasExactLookup.has(key)) return aliasExactLookup.get(key)!

  let best: IngredientRecord | null = null
  let bestLen = -1
  for (const alias of SORTED_ALIAS_KEYS) {
    if (!alias.includes(' ')) continue
    if (alias.length <= bestLen) continue
    if (!matchesWholePhrase(key, alias)) continue
    const hit = aliasExactLookup.get(alias)
    if (hit) {
      best = hit
      bestLen = alias.length
    }
  }
  if (best) return best

  const parts = key.split(/\s+/).filter(Boolean)
  const maxGram = Math.min(4, parts.length)
  for (let len = maxGram; len >= 2; len--) {
    for (let i = 0; i + len <= parts.length; i++) {
      const gram = normalizeIngredientPhrase(parts.slice(i, i + len).join(' '))
      const hit = aliasExactLookup.get(gram)
      if (hit) return hit
    }
  }

  for (const tok of parts) {
    const direct = aliasExactLookup.get(tok)
    if (direct) return direct
    for (const variant of morphologicalVariants(tok)) {
      const hit = aliasExactLookup.get(variant)
      if (hit) return hit
    }
  }

  return null
}

/** Human-readable label for a canonical id (and legacy unknown ids). */
export function formatIngredientLabel(id: string): string {
  const row = ingredientsById[id]
  if (row) return row.name
  if (id.startsWith('unknown:')) {
    const rest = id.slice('unknown:'.length).replace(/-/g, ' ')
    return rest || 'unknown ingredient'
  }
  return id
}

/** Fallback record for tokens not in the knowledge base */
export function createUnknownIngredientRecord(rawSlug: string): IngredientRecord {
  const slug =
    normalizeIngredientPhrase(rawSlug).replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ||
    'unknown'
  return {
    id: `unknown:${slug}`,
    name: normalizeIngredientPhrase(rawSlug) || rawSlug.trim(),
    category: 'other',
    aliases: [],
    perishability: 'medium',
    storageTip: 'Use soon while fresh; label leftovers with the date.',
    useIdeas: ['Season simply', 'Combine with ingredients you trust'],
    substitutions: [],
  }
}
