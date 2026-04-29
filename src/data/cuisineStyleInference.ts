/**
 * Deterministic cuisine / meal-style inference for NLG curation.
 * Strong regional cues run before broad buckets (e.g. Italian before Pasta; Mexican before Sandwich).
 */

import type { CuisineStyle } from './recipeTypes'

function blobFrom(
  title: string,
  ingredientLines: string[],
  directions: string[]
): { titleL: string; blob: string } {
  const titleL = title.toLowerCase()
  const blob = `${title} ${ingredientLines.join(' ')} ${directions.join(' ')}`.toLowerCase()
  return { titleL, blob }
}

/**
 * Infer cuisineStyle from normalized ingredient ids and raw text signals.
 * Prefer General when uncertain.
 */
export function inferCuisineStyleFromSignals(
  title: string,
  canonicalIds: string[],
  ingredientLines: string[],
  directions: string[]
): CuisineStyle {
  const { titleL, blob } = blobFrom(title, ingredientLines, directions)
  const ids = new Set(canonicalIds)

  // Guard rails for ambiguous phrases that collide with geography labels.
  if (/\bfrench toast\b/.test(blob)) return 'Breakfast'

  // --- Strong regional cuisines first (before Pasta / Sandwich / Rice Bowl) ---
  if (
    /\bkimchi\b/.test(blob) ||
    /\bgochujang\b/.test(blob) ||
    /\bbibimbap\b/.test(blob) ||
    /\bbulgogi\b/.test(blob)
  ) {
    return 'Korean'
  }

  if (
    /\bpad thai\b/.test(blob) ||
    /\btom yum\b/.test(blob) ||
    /\blemongrass\b/.test(blob) ||
    /\bred curry\b/.test(blob) ||
    /\bgreen curry\b/.test(blob) ||
    (/\bcoconut milk\b/.test(blob) &&
      /\b(curry|paste|fish sauce|galangal)\b/.test(blob))
  ) {
    return 'Thai'
  }

  if (
    /\bmiso\b/.test(blob) ||
    /\bramen\b/.test(blob) ||
    /\budon\b/.test(blob) ||
    /\bsoba\b/.test(blob) ||
    /\bsushi\b/.test(blob) ||
    /\btempura\b/.test(blob) ||
    /\bteriyaki\b/.test(blob) ||
    /\bdashi\b/.test(blob) ||
    /\bmirin\b/.test(blob) ||
    /\bedamame\b/.test(blob)
  ) {
    return 'Japanese'
  }

  if (
    /\bstir[\s-]?fry\b/.test(blob) ||
    /\bdim sum\b/.test(blob) ||
    /\bwonton\b/.test(blob) ||
    /\bszechuan\b/.test(blob) ||
    /\bsichuan\b/.test(blob) ||
    /\bhoisin\b/.test(blob) ||
    /\boyster sauce\b/.test(blob) ||
    /\blo mein\b/.test(blob) ||
    /\bchow mein\b/.test(blob)
  ) {
    return 'Chinese'
  }

  if (
    /\bgaram masala\b/.test(blob) ||
    /\btikka\b/.test(blob) ||
    /\bmasala\b/.test(blob) ||
    /\bnaan\b/.test(blob) ||
    /\bpaneer\b/.test(blob) ||
    /\bbiryani\b/.test(blob) ||
    /\bdal\b/.test(blob) ||
    /\bindian\b/.test(blob) ||
    (/\bcardamom\b/.test(blob) && /\bcurry\b/.test(blob)) ||
    (/\b(lentils|chickpeas)\b/.test(blob) &&
      /\b(turmeric|coriander|cumin)\b/.test(blob) &&
      /\bcurry\b/.test(blob)) ||
    (ids.has('chickpeas') && /\b(turmeric|garam masala|curry powder)\b/.test(blob)) ||
    (ids.has('lentils') && /\b(turmeric|curry|cumin)\b/.test(blob))
  ) {
    return 'Indian'
  }

  if (
    ids.has('tortilla') ||
    ids.has('salsa') ||
    ids.has('black beans') ||
    /\btaco\b/.test(blob) ||
    /\bburrito\b/.test(blob) ||
    /\bquesadilla\b/.test(blob) ||
    /\benchilada\b/.test(blob) ||
    /\btamale\b/.test(blob) ||
    /\bfajita\b/.test(blob) ||
    /\btomatillo\b/.test(blob) ||
    (ids.has('beans') &&
      /\bcumin\b/.test(blob) &&
      /\b(cilantro|lime|chili powder|jalapeno)\b/.test(blob))
  ) {
    return 'Mexican'
  }

  const italianLex = /\b(lasagna|ravioli|risotto|marinara|pesto|spaghetti|linguine|fettuccine|carbonara|bolognese|gnocchi|tortellini|marsala|parmigiana)\b/.test(
    blob
  )
  const italianIdsHint =
    ids.has('tomato sauce') &&
    (ids.has('basil') || ids.has('oregano') || /\bmarinara\b/.test(blob))
  const pastaItalianCombo =
    (ids.has('pasta') || italianLex) &&
    (ids.has('basil') ||
      ids.has('oregano') ||
      /\b(parmesan|mozzarella|marinara|pesto|alfredo)\b/.test(blob))

  if (italianLex || italianIdsHint || pastaItalianCombo) {
    return 'Italian'
  }

  if (
    /\btzatziki\b/.test(blob) ||
    /\bgyro\b/.test(blob) ||
    /\bspanakopita\b/.test(blob) ||
    /\bmoussaka\b/.test(blob) ||
    (/\bfeta\b/.test(blob) &&
      /\bolives\b/.test(blob) &&
      /\bcucumber\b/.test(blob) &&
      /\btomatoes\b/.test(blob))
  ) {
    return 'Greek'
  }

  if (
    /\bfalafel\b/.test(blob) ||
    /\bshawarma\b/.test(blob) ||
    /\bza'?atar\b/.test(blob) ||
    /\btabbouleh\b/.test(blob)
  ) {
    return 'Middle Eastern'
  }

  if (
    /\bhummus\b/.test(blob) ||
    /\btahini\b/.test(blob) ||
    (ids.has('chickpeas') &&
      /\b(pita|olives|yogurt)\b/.test(blob) &&
      /\b(lemon|cucumber)\b/.test(blob))
  ) {
    return 'Mediterranean'
  }

  if (
    /\broux\b/.test(blob) ||
    /\bbeurre\b/.test(blob) ||
    /\bbaguette\b/.test(blob) ||
    /\bratatouille\b/.test(blob) ||
    /\bcoq au vin\b/.test(blob) ||
    /\bgratin\b/.test(blob)
  ) {
    return 'French'
  }

  if (
    /\bburger\b/.test(blob) ||
    /\bsloppy joe\b/.test(blob) ||
    /\bbbq\b/.test(blob) ||
    /\bbarbecue\b/.test(blob) ||
    /\bmac and cheese\b/.test(blob) ||
    /\bcornbread\b/.test(blob) ||
    /\bcobbler\b/.test(blob)
  ) {
    return 'American'
  }

  // --- Structural meal buckets ---
  if (/\b(soup|stew|chowder|bisque|broth)\b/.test(titleL)) {
    return 'Soup'
  }

  if (/\bsalad\b/.test(titleL)) {
    return 'Salad'
  }

  if (
    /\b(breakfast|brunch)\b/.test(blob) ||
    /\b(pancake|waffle|cereal|oatmeal|porridge|hash browns|omelet|omelette)\b/.test(blob)
  ) {
    return 'Breakfast'
  }

  if (
    /\bdessert\b/.test(blob) ||
    /\b(brownie|cupcake|tiramisu|cheesecake|shortcake)\b/.test(blob) ||
    /\b(chocolate chip cookies|vanilla ice cream)\b/.test(blob) ||
    (/\bcake\b/.test(titleL) && !/\b(crab|fish|beef)\s+cake\b/.test(blob))
  ) {
    return 'Dessert'
  }

  const asianNoodle =
    /\b(udon|ramen|soba|lo mein|chow mein|rice noodle|egg roll)\b/.test(blob)

  if (
    !asianNoodle &&
    (ids.has('pasta') ||
      /\b(penne|rigatoni|fusilli|orzo|macaroni|cavatelli)\b/.test(blob))
  ) {
    return 'Pasta'
  }

  const proteinLike =
    ids.has('chicken') ||
    ids.has('ground beef') ||
    ids.has('beans') ||
    ids.has('black beans') ||
    ids.has('chickpeas') ||
    ids.has('tofu') ||
    ids.has('eggs')
  const vegLike =
    ids.has('broccoli') ||
    ids.has('spinach') ||
    ids.has('carrots') ||
    ids.has('bell-peppers') ||
    ids.has('tomatoes')

  if (ids.has('rice') && proteinLike && vegLike) {
    return 'Rice Bowl'
  }

  if (
    /\b(sandwich|panini|hoagie|submarine|grilled cheese|tuna melt)\b/.test(blob) ||
    (ids.has('bread') && /\bmelt\b/.test(blob))
  ) {
    return 'Sandwich'
  }

  return 'General'
}
