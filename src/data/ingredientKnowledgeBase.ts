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
  /** When "low", recipe matching scores this as optional pantry seasoning (missing is OK). */
  recipeMatchWeight?: 'full' | 'low'
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
    id: 'turkey',
    name: 'turkey',
    category: 'protein',
    aliases: ['turkey', 'turky', 'leftover turkey'],
    perishability: 'high',
    storageTip: 'Slice leftovers thin; refrigerate promptly and use within a few days.',
    useIdeas: ['Sandwiches', 'Bowls', 'Soup'],
    substitutions: ['Chicken', 'Ham'],
  },
  {
    id: 'ground beef',
    name: 'ground beef',
    category: 'protein',
    aliases: ['ground beef', 'minced beef', 'beef mince'],
    perishability: 'high',
    storageTip: 'Cook within a day or two of opening; freeze flat if needed.',
    useIdeas: ['Skillet crumbles', 'Tacos', 'Soup'],
    substitutions: ['Turkey', 'Beans', 'Mushrooms'],
  },
  {
    id: 'sausage',
    name: 'sausage',
    category: 'protein',
    aliases: ['sausage', 'sausages'],
    perishability: 'high',
    storageTip: 'Keep chilled; freeze uncooked sausage if plans change.',
    useIdeas: ['Sheet pan meals', 'Pasta toss', 'Breakfast skillet'],
    substitutions: ['Bacon', 'Ham'],
  },
  {
    id: 'bacon',
    name: 'bacon',
    category: 'protein',
    aliases: ['bacon'],
    perishability: 'high',
    storageTip: 'Cook opened packs soon; freeze extras uncooked.',
    useIdeas: ['Breakfast', 'Sandwiches', 'Flavor base'],
    substitutions: ['Ham', 'Oil for crispness'],
  },
  {
    id: 'ham',
    name: 'ham',
    category: 'protein',
    aliases: ['ham', 'deli ham'],
    perishability: 'high',
    storageTip: 'Wrap deli slices tightly; use within package guidance.',
    useIdeas: ['Sandwiches', 'Egg cups', 'Soup'],
    substitutions: ['Turkey', 'Cheese melts'],
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
    id: 'cereal',
    name: 'cereal',
    category: 'grain',
    aliases: ['cereal', 'breakfast cereal'],
    perishability: 'medium',
    storageTip: 'Fold bag clip inside box to keep crunch.',
    useIdeas: ['Quick breakfast', 'Trail mix', 'Crust for yogurt'],
    substitutions: ['Oats', 'Crackers'],
  },
  {
    id: 'crackers',
    name: 'crackers',
    category: 'grain',
    aliases: ['crackers', 'cracker'],
    perishability: 'medium',
    storageTip: 'Reseal inner sleeve to avoid staleness.',
    useIdeas: ['Snacks', 'Soup side', 'Crumb toppings'],
    substitutions: ['Bread', 'Chips'],
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
    id: 'black-pepper',
    name: 'black pepper',
    category: 'pantry',
    aliases: [
      'black pepper',
      'pepper',
      'ground pepper',
      'cracked pepper',
      'ground black pepper',
    ],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Keep dry in a sealed shaker or grinder.',
    useIdeas: ['Finish eggs', 'Soups', 'Pan sauces'],
    substitutions: ['White pepper', 'Pinch of chili flakes'],
  },
  {
    id: 'bell-peppers',
    name: 'bell peppers',
    category: 'vegetable',
    aliases: [
      'peppers',
      'bell pepper',
      'bell peppers',
      'red pepper',
      'green pepper',
      'yellow pepper',
      'orange pepper',
      'sweet pepper',
      'sweet peppers',
      'capsicum',
      'peper',
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
    id: 'sweet potatoes',
    name: 'sweet potatoes',
    category: 'vegetable',
    aliases: ['sweet potato', 'sweet potatoes', 'yam', 'yams'],
    perishability: 'medium',
    storageTip: 'Cool dry bin for whole; refrigerate peeled cubes soon.',
    useIdeas: ['Bowls', 'Roast chunks', 'Mash'],
    substitutions: ['Potatoes', 'Squash'],
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
    id: 'kale',
    name: 'kale',
    category: 'vegetable',
    aliases: ['kale', 'cale'],
    perishability: 'high',
    storageTip: 'Wrap loosely; massage tough leaves before eating raw.',
    useIdeas: ['Salads', 'Soups', 'Chips'],
    substitutions: ['Spinach', 'Collards'],
  },
  {
    id: 'mushrooms',
    name: 'mushrooms',
    category: 'vegetable',
    aliases: ['mushroom', 'mushrooms', 'mushrom'],
    perishability: 'high',
    storageTip: 'Paper bag in fridge; wipe clean instead of soaking.',
    useIdeas: ['Pasta', 'Stir-fry', 'Egg topper'],
    substitutions: ['Zucchini', 'Extra onions'],
  },
  {
    id: 'cucumber',
    name: 'cucumber',
    category: 'vegetable',
    aliases: ['cucumber', 'cucumbers'],
    perishability: 'medium',
    storageTip: 'Refrigerate whole; slice close to serving.',
    useIdeas: ['Salads', 'Wraps', 'Cold noodle salads'],
    substitutions: ['Celery', 'Bell peppers'],
  },
  {
    id: 'celery',
    name: 'celery',
    category: 'vegetable',
    aliases: ['celery', 'celary'],
    perishability: 'medium',
    storageTip: 'Foil-wrap stalks or stand in water briefly.',
    useIdeas: ['Soup base', 'Salads', 'Snack sticks'],
    substitutions: ['Carrots', 'Bell peppers'],
  },
  {
    id: 'corn',
    name: 'corn',
    category: 'vegetable',
    aliases: ['corn', 'sweet corn'],
    perishability: 'medium',
    storageTip: 'Refrigerate fresh ears; freeze kernels before drying out.',
    useIdeas: ['Bowls', 'Salads', 'Soups'],
    substitutions: ['Peas', 'Bell peppers'],
  },
  {
    id: 'peas',
    name: 'peas',
    category: 'vegetable',
    aliases: ['peas', 'pea', 'frozen peas'],
    perishability: 'medium',
    storageTip: 'Freeze surplus peas flat if not cooking soon.',
    useIdeas: ['Stir-fries', 'Rice bowls', 'Soup'],
    substitutions: ['Corn', 'Beans'],
  },
  {
    id: 'beans',
    name: 'beans',
    category: 'legume',
    aliases: ['beans', 'bean', 'canned beans', 'pinto beans'],
    perishability: 'high',
    storageTip: 'Refrigerate opened cans in a labeled container.',
    useIdeas: ['Bowls', 'Wraps', 'Mashes'],
    substitutions: ['Lentils', 'Tofu', 'Extra rice and vegetables'],
  },
  {
    id: 'chickpeas',
    name: 'chickpeas',
    category: 'legume',
    aliases: ['chickpeas', 'chickpea', 'garbanzo', 'garbanzo beans'],
    perishability: 'high',
    storageTip: 'Rinse canned chickpeas and refrigerate leftovers promptly.',
    useIdeas: ['Salads', 'Roasts', 'Quick mash'],
    substitutions: ['White beans', 'Extra lentils'],
  },
  {
    id: 'lentils',
    name: 'lentils',
    category: 'legume',
    aliases: ['lentils', 'lentil', 'red lentils'],
    perishability: 'medium',
    storageTip: 'Dry lentils stay airtight for months; cooked lentils refrigerate ~4 days.',
    useIdeas: ['Soup', 'Dal-style bowls', 'Warm salads'],
    substitutions: ['Beans', 'Split peas'],
  },
  {
    id: 'black beans',
    name: 'black beans',
    category: 'legume',
    aliases: ['black beans', 'black bean'],
    perishability: 'high',
    storageTip: 'Refrigerate opened cans within two hours.',
    useIdeas: ['Rice bowls', 'Burritos', 'Soup'],
    substitutions: ['Kidney beans', 'Pinto beans'],
  },
  {
    id: 'kidney beans',
    name: 'kidney beans',
    category: 'legume',
    aliases: ['kidney beans', 'kidney bean'],
    perishability: 'high',
    storageTip: 'Keep drained beans covered in the fridge.',
    useIdeas: ['Chili', 'Bowls', 'Salads'],
    substitutions: ['Black beans', 'Pinto beans'],
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
    id: 'blueberries',
    name: 'blueberries',
    category: 'fruit',
    aliases: ['blueberries', 'blueberry'],
    perishability: 'high',
    storageTip: 'Keep dry in clamshell; freeze before soft spots spread.',
    useIdeas: ['Smoothies', 'Yogurt bowls', 'Pancakes'],
    substitutions: ['Strawberries', 'Frozen berries'],
  },
  {
    id: 'lemon',
    name: 'lemon',
    category: 'fruit',
    aliases: ['lemon', 'lemons'],
    perishability: 'medium',
    storageTip: 'Counter short-term; fridge extends life.',
    useIdeas: ['Dressings', 'Fish finish', 'Tea'],
    substitutions: ['Lime', 'Vinegar splash'],
  },
  {
    id: 'lime',
    name: 'lime',
    category: 'fruit',
    aliases: ['lime', 'limes'],
    perishability: 'medium',
    storageTip: 'Zip bag in fridge preserves zest-friendly skins.',
    useIdeas: ['Rice bowls', 'Dressings', 'Smoothies'],
    substitutions: ['Lemon', 'Vinegar splash'],
  },
  {
    id: 'avocado',
    name: 'avocado',
    category: 'vegetable',
    aliases: ['avocado', 'avocados'],
    perishability: 'medium',
    storageTip: 'Ripen on counter; refrigerate once soft.',
    useIdeas: ['Toast', 'Salads', 'Wraps'],
    substitutions: ['Hummus', 'Cheese slice'],
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
    id: 'cream cheese',
    name: 'cream cheese',
    category: 'dairy',
    aliases: ['cream cheese'],
    perishability: 'high',
    storageTip: 'Rewrap tightly after scooping.',
    useIdeas: ['Spreads', 'Pasta finishes', 'Bakes'],
    substitutions: ['Yogurt', 'Ricotta'],
  },
  {
    id: 'sour cream',
    name: 'sour cream',
    category: 'dairy',
    aliases: ['sour cream'],
    perishability: 'high',
    storageTip: 'Use opened tubs within about a week.',
    useIdeas: ['Bowls', 'Soups', 'Bakes'],
    substitutions: ['Yogurt', 'Cottage cheese'],
  },
  {
    id: 'flour',
    name: 'flour',
    category: 'pantry',
    aliases: ['flour', 'all purpose flour'],
    perishability: 'low',
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
    storageTip: 'Dry shaker; keep away from steam.',
    useIdeas: ['Seasoning', 'Pasta water', 'Finishing'],
    substitutions: ['Soy sauce carefully', 'Capers for brine'],
  },
  {
    id: 'oil',
    name: 'vegetable oil',
    category: 'pantry',
    aliases: ['vegetable oil', 'cooking oil', 'canola oil', 'neutral oil', 'oil'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Dark bottle or cabinet away from heat.',
    useIdeas: ['Saute', 'Roast', 'Dressings'],
    substitutions: ['Butter', 'Broth for water-saute'],
  },
  {
    id: 'olive oil',
    name: 'olive oil',
    category: 'pantry',
    aliases: ['olive oil', 'extra virgin olive oil', 'evoo'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Keep away from stove heat; tightly capped.',
    useIdeas: ['Dressings', 'Finishes', 'Light saute'],
    substitutions: ['Vegetable oil', 'Butter'],
  },
  {
    id: 'honey',
    name: 'honey',
    category: 'pantry',
    aliases: ['honey'],
    perishability: 'low',
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
    storageTip: 'Tightly closed; stable for a long time.',
    useIdeas: ['Dressings', 'Deglazing', 'Pickles'],
    substitutions: ['Lemon juice', 'Lime juice'],
  },
  {
    id: 'tomato sauce',
    name: 'tomato sauce',
    category: 'condiment',
    aliases: ['tomato sauce', 'marinara', 'tomato puree'],
    perishability: 'medium',
    recipeMatchWeight: 'low',
    storageTip: 'Refrigerate opened jars within two hours.',
    useIdeas: ['Pasta', 'Bake topping', 'Soup starter'],
    substitutions: ['Crushed tomatoes', 'Tomatoes'],
  },
  {
    id: 'ketchup',
    name: 'ketchup',
    category: 'condiment',
    aliases: ['ketchup', 'catsup'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Fridge after opening for best quality.',
    useIdeas: ['Quick sauces', 'Glazes'],
    substitutions: ['Tomato paste + sugar', 'Salsa'],
  },
  {
    id: 'mayonnaise',
    name: 'mayonnaise',
    category: 'condiment',
    aliases: ['mayonnaise', 'mayo'],
    perishability: 'medium',
    recipeMatchWeight: 'low',
    storageTip: 'Keep refrigerated once opened.',
    useIdeas: ['Sandwiches', 'Dressings', 'Quick dips'],
    substitutions: ['Yogurt', 'Sour cream'],
  },
  {
    id: 'mustard',
    name: 'mustard',
    category: 'condiment',
    aliases: ['mustard', 'dijon mustard'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Fridge keeps punch longer.',
    useIdeas: ['Sandwiches', 'Dressings', 'Roasts'],
    substitutions: ['Vinegar + spice', 'Wasabi sparingly'],
  },
  {
    id: 'hot sauce',
    name: 'hot sauce',
    category: 'condiment',
    aliases: ['hot sauce', 'chili sauce'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Cool cupboard or fridge depending on label.',
    useIdeas: ['Eggs', 'Bowls', 'Beans'],
    substitutions: ['Red pepper flakes', 'Sriracha-like blends'],
  },
  {
    id: 'broth',
    name: 'broth',
    category: 'pantry',
    aliases: ['broth', 'stock', 'chicken broth', 'vegetable broth'],
    perishability: 'medium',
    recipeMatchWeight: 'low',
    storageTip: 'Refrigerate opened cartons; freeze extras in cubes.',
    useIdeas: ['Soups', 'Grains', 'Braises'],
    substitutions: ['Bouillon cube + water', 'Water + soy sauce lightly'],
  },
  {
    id: 'paprika',
    name: 'paprika',
    category: 'pantry',
    aliases: ['paprika', 'smoked paprika'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Airtight tin away from light.',
    useIdeas: ['Roasts', 'Eggs', 'Soups'],
    substitutions: ['Chili powder lightly', 'Smoked paprika blend'],
  },
  {
    id: 'chili powder',
    name: 'chili powder',
    category: 'pantry',
    aliases: ['chili powder', 'chilli powder'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Replace yearly if aroma fades.',
    useIdeas: ['Beans', 'Chili', 'Rub'],
    substitutions: ['Paprika + cumin pinch'],
  },
  {
    id: 'cumin',
    name: 'cumin',
    category: 'pantry',
    aliases: ['cumin', 'cummin'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Whole seeds toast fresher longer.',
    useIdeas: ['Beans', 'Rice bowls', 'Roasted veg'],
    substitutions: ['Coriander seed', 'Chili powder sparingly'],
  },
  {
    id: 'italian seasoning',
    name: 'Italian seasoning',
    category: 'pantry',
    aliases: ['italian seasoning'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Crush between fingers to wake aroma.',
    useIdeas: ['Tomato sauces', 'Roasts', 'Dressings'],
    substitutions: ['Oregano + basil pinch mix'],
  },
  {
    id: 'oregano',
    name: 'oregano',
    category: 'pantry',
    aliases: ['oregano', 'oregno'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Airtight jar; replace if dusty-smelling.',
    useIdeas: ['Pizza flavor', 'Soups', 'Marinades'],
    substitutions: ['Italian seasoning', 'Thyme'],
  },
  {
    id: 'basil',
    name: 'basil',
    category: 'pantry',
    aliases: ['basil', 'basel', 'dried basil'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Add late to keep aroma.',
    useIdeas: ['Tomato pasta', 'Eggs', 'Soups'],
    substitutions: ['Oregano', 'Spinach for color'],
  },
  {
    id: 'cinnamon',
    name: 'cinnamon',
    category: 'pantry',
    aliases: ['cinnamon'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Whole sticks last longest.',
    useIdeas: ['Oats', 'Bakes', 'Warm drinks'],
    substitutions: ['Nutmeg pinch', 'Pumpkin spice mix'],
  },
  {
    id: 'onion powder',
    name: 'onion powder',
    category: 'condiment',
    aliases: ['onion powder'],
    perishability: 'low',
    recipeMatchWeight: 'low',
    storageTip: 'Keep dry to avoid clumping.',
    useIdeas: ['Rubs', 'Soups', 'Dressings'],
    substitutions: ['Fresh onion', 'Garlic powder lightly'],
  },
  {
    id: 'garlic powder',
    name: 'garlic powder',
    category: 'condiment',
    aliases: ['garlic powder'],
    perishability: 'low',
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
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
    recipeMatchWeight: 'low',
    storageTip: 'Dry cupboard.',
    useIdeas: ['Savory popcorn', 'Sauces', 'Eggs'],
    substitutions: ['Cheese', 'Salt plus herbs'],
  },
]

/** Canonical lookup by id */
export const ingredientsById: Record<string, IngredientRecord> = Object.fromEntries(
  INGREDIENT_KNOWLEDGE_BASE.map((ing) => [ing.id, ing])
)

/** Ingredients that barely affect match quality when present or absent. */
export function isLowRecipeMatchWeight(id: string): boolean {
  return ingredientsById[id]?.recipeMatchWeight === 'low'
}

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
