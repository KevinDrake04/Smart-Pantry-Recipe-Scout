/**
 * Curated recipes derived from a public RecipeNLG-style dataset.
 * Normalized to canonical ingredient ids from ingredientKnowledgeBase.ts for this class project.
 * Original long directions were not copied verbatim — short generic steps were synthesized.
 * The raw dataset lives under data/raw/ and is gitignored (not committed).
 * Regenerate: npm run curate:recipes
 */

import type { RecipeDef } from './recipeTypes'

export const curatedRecipes: RecipeDef[] = [
  {
    "title": "No-Bake Nut Cookies",
    "mainIngredients": [
      "milk",
      "butter",
      "rice"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jewell Ball'S Chicken",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Creamy Corn",
    "mainIngredients": [
      "corn",
      "cream cheese",
      "butter"
    ],
    "optionalStaples": [
      "garlic powder",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (corn, cream cheese, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Funny",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Reeses Cups(Candy)",
    "mainIngredients": [
      "peanut butter",
      "crackers",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peanut butter, crackers, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheeseburger Potato Soup",
    "mainIngredients": [
      "potatoes",
      "ground beef",
      "butter",
      "milk",
      "cheese",
      "bacon",
      "lettuce",
      "sour cream"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "8 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Scalloped Corn",
    "mainIngredients": [
      "corn",
      "crackers",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, crackers, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Nolan'S Pepper Steak",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "lettuce"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Millionaire Pie",
    "mainIngredients": [
      "milk",
      "lemon",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (milk, lemon, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco Salad Chip Dip",
    "mainIngredients": [
      "sour cream",
      "cream cheese",
      "ground beef",
      "lettuce",
      "tomatoes",
      "onion",
      "bell-peppers",
      "cheese"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Broccoli Salad",
    "mainIngredients": [
      "broccoli",
      "bacon",
      "lettuce"
    ],
    "optionalStaples": [
      "mayonnaise",
      "vinegar",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Strawberry Whatever",
    "mainIngredients": [
      "strawberry",
      "banana",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (strawberry, banana, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Prize-Winning Meat Loaf",
    "mainIngredients": [
      "ground beef",
      "tomatoes",
      "oats",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, tomatoes, oats, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Smothered Round Steak(Servings: 4)",
    "mainIngredients": [
      "bell-peppers",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "black-pepper",
      "oil",
      "broth",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bell-peppers, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco-Filled Green Pepper",
    "mainIngredients": [
      "ground beef",
      "kidney beans",
      "onion",
      "lettuce",
      "tomatoes",
      "cheese",
      "sour cream"
    ],
    "optionalStaples": [
      "spices",
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, kidney beans, onion, lettuce) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Punch Bowl Fruit Salad",
    "mainIngredients": [
      "strawberry",
      "apple",
      "banana"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Potato And Cheese Pie",
    "mainIngredients": [
      "eggs",
      "potatoes",
      "cheese",
      "green onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, potatoes, cheese, green onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tuna Macaroni Casserole",
    "mainIngredients": [
      "pasta",
      "tuna",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, tuna, onion) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Dip For Crackers",
    "mainIngredients": [
      "sour cream",
      "broccoli",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Pear-Lime Salad",
    "mainIngredients": [
      "lime",
      "cream cheese",
      "lemon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chicken Stew",
    "mainIngredients": [
      "chicken",
      "potatoes",
      "onion",
      "corn",
      "peas",
      "butter",
      "tomatoes",
      "pasta"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Quick Coffee Cake(6 Servings)",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Divan",
    "mainIngredients": [
      "onion",
      "celery",
      "mushrooms",
      "broccoli",
      "chicken",
      "cheese"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, celery, mushrooms, broccoli) for a Indian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vegetable-Burger Soup",
    "mainIngredients": [
      "ground beef",
      "onion",
      "tomatoes"
    ],
    "optionalStaples": [
      "sugar",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken Ole",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "lettuce",
      "milk",
      "onion",
      "corn"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (chicken, mushrooms, lettuce, milk) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Creamy Coleslaw(Better Homes And Gardens)",
    "mainIngredients": [
      "carrots",
      "bell-peppers",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "mayonnaise",
      "vinegar",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Creole Flounder",
    "mainIngredients": [
      "tomatoes",
      "bell-peppers",
      "lemon",
      "onion"
    ],
    "optionalStaples": [
      "oil",
      "salt",
      "basil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Three Bean Salad",
    "mainIngredients": [
      "lettuce",
      "beans",
      "kidney beans"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Casserole Italiano",
    "mainIngredients": [
      "ground beef",
      "onion",
      "tomatoes",
      "noodles",
      "cheese"
    ],
    "optionalStaples": [
      "oregano",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Taco Dip",
    "mainIngredients": [
      "cream cheese",
      "green onion",
      "lettuce",
      "tomatoes",
      "cheese",
      "tortilla"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cream cheese, green onion, lettuce, tomatoes) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bonbon Cookies",
    "mainIngredients": [
      "butter",
      "peanut butter",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, peanut butter, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Casserole",
    "mainIngredients": [
      "mushrooms",
      "chicken",
      "celery",
      "butter",
      "rice"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Pineapple Nut Pie",
    "mainIngredients": [
      "cream cheese",
      "milk",
      "lemon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, milk, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Annie'S Diabetic Candy",
    "mainIngredients": [
      "cream cheese",
      "butter",
      "peanut butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, butter, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Potato Casserole",
    "mainIngredients": [
      "potatoes",
      "onion",
      "butter",
      "chicken",
      "sour cream",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "50 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Spanish Hamburgers",
    "mainIngredients": [
      "celery",
      "onion",
      "butter",
      "ground beef",
      "lemon"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "mustard",
      "salt",
      "black-pepper",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (celery, onion, butter, ground beef) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Egg Casserole",
    "mainIngredients": [
      "onion",
      "mushrooms",
      "lettuce",
      "garlic",
      "bread",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "480 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (onion, mushrooms, lettuce, garlic) for a Indian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Brown Rice",
    "mainIngredients": [
      "rice",
      "onion",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cheese Dip",
    "mainIngredients": [
      "cheese",
      "tomatoes",
      "lettuce",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (cheese, tomatoes, lettuce, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Squash Casserole",
    "mainIngredients": [
      "onion",
      "sour cream",
      "carrots",
      "chicken",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cheese Ball",
    "mainIngredients": [
      "cream cheese",
      "cheese",
      "bell-peppers",
      "onion",
      "lemon"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, cheese, bell-peppers, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pound Cake",
    "mainIngredients": [
      "eggs",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Roll-Ups",
    "mainIngredients": [
      "cheese",
      "chicken",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Beef And Spanish Rice Casserole",
    "mainIngredients": [
      "rice",
      "onion",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, onion, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Beans",
    "mainIngredients": [
      "beans",
      "bell-peppers",
      "onion",
      "ground beef"
    ],
    "optionalStaples": [
      "ketchup",
      "sugar",
      "salt",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (beans, bell-peppers, onion, ground beef) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sweet-N-Sour Chicken",
    "mainIngredients": [
      "chicken",
      "onion",
      "carrots",
      "bell-peppers"
    ],
    "optionalStaples": [
      "sugar",
      "ketchup",
      "vinegar",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, onion, carrots, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crustless Vegetable Ham Pie",
    "mainIngredients": [
      "butter",
      "mushrooms",
      "garlic",
      "zucchini",
      "onion",
      "ham",
      "eggs",
      "cheese",
      "spinach"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, mushrooms, garlic, zucchini) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "German Potato Salad",
    "mainIngredients": [
      "potatoes",
      "bacon",
      "lettuce"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "black-pepper",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Jan'S Winter Soup",
    "mainIngredients": [
      "butter",
      "onion",
      "ground beef",
      "garlic",
      "tomatoes",
      "potatoes",
      "carrots",
      "celery",
      "lettuce"
    ],
    "optionalStaples": [
      "broth",
      "basil",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Don Juan'S Sangria",
    "mainIngredients": [
      "lime",
      "orange",
      "apple"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lime, orange, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ranch Beef And Beans",
    "mainIngredients": [
      "onion",
      "kidney beans",
      "butter",
      "beans",
      "lettuce",
      "bell-peppers",
      "garlic"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard",
      "honey"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, kidney beans, butter, beans) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Souper Tuna Crunch",
    "mainIngredients": [
      "noodles",
      "mushrooms",
      "chicken",
      "celery",
      "onion",
      "peas"
    ],
    "optionalStaples": [
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cheese-Ham Ball",
    "mainIngredients": [
      "cheese",
      "cream cheese",
      "ham",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, cream cheese, ham, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pasta Chicken Salad(268 Calories Per Serving)",
    "mainIngredients": [
      "chicken",
      "broccoli",
      "carrots",
      "green onion",
      "mushrooms",
      "milk"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Zucchini-Artichoke Continental",
    "mainIngredients": [
      "zucchini",
      "mushrooms",
      "green onion",
      "garlic",
      "butter",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "4 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (zucchini, mushrooms, green onion, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Supreme Beef Casserole",
    "mainIngredients": [
      "tomatoes",
      "garlic",
      "eggs",
      "sour cream",
      "cream cheese",
      "green onion",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (tomatoes, garlic, eggs, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Salad",
    "mainIngredients": [
      "chicken",
      "celery",
      "lemon"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Cold Spaghetti Salad",
    "mainIngredients": [
      "bell-peppers",
      "zucchini",
      "onion"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chicken Spaghetti",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "tomatoes",
      "cheese",
      "pasta"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Good Sweet Muffins",
    "mainIngredients": [
      "eggs",
      "milk",
      "blueberries"
    ],
    "optionalStaples": [
      "oil",
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, milk, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn \"Oysters\"",
    "mainIngredients": [
      "corn",
      "eggs",
      "onion",
      "crackers"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (corn, eggs, onion, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bright Party Beans",
    "mainIngredients": [
      "ground beef",
      "onion",
      "beans",
      "kidney beans",
      "lettuce"
    ],
    "optionalStaples": [
      "sugar",
      "chili powder",
      "ketchup",
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, beans, kidney beans) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "French Onion Soup",
    "mainIngredients": [
      "butter",
      "onion",
      "chicken",
      "garlic"
    ],
    "optionalStaples": [
      "broth",
      "black-pepper",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "7-Up Cake",
    "mainIngredients": [
      "eggs",
      "butter",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Pie",
    "mainIngredients": [
      "milk",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tater Tot Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "bell-peppers",
      "mushrooms",
      "celery",
      "chicken",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Caramel Pie",
    "mainIngredients": [
      "milk",
      "crackers",
      "cream cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, crackers, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Cornbread",
    "mainIngredients": [
      "onion",
      "broccoli",
      "eggs",
      "cottage cheese"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, broccoli, eggs, cottage cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vegetable Soup",
    "mainIngredients": [
      "onion",
      "potatoes",
      "lettuce",
      "celery",
      "carrots",
      "pasta",
      "turkey",
      "peas",
      "tomatoes"
    ],
    "optionalStaples": [
      "italian seasoning"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Magic Cookie Bars",
    "mainIngredients": [
      "butter",
      "crackers",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, crackers, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tamale Casserole",
    "mainIngredients": [
      "lettuce",
      "cheese",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (lettuce, cheese, onion) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Pot Pie",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "peas",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "broth",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Smoked Turkey Risotto",
    "mainIngredients": [
      "chicken",
      "lettuce",
      "garlic",
      "rice",
      "spinach",
      "cheese"
    ],
    "optionalStaples": [
      "oil",
      "oregano",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, lettuce, garlic, rice) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Eggplant Spaghetti Sauce",
    "mainIngredients": [
      "onion",
      "lettuce",
      "mushrooms",
      "garlic",
      "tomatoes"
    ],
    "optionalStaples": [
      "oil",
      "basil",
      "oregano",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, lettuce, mushrooms, garlic) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sweet Potato Pie",
    "mainIngredients": [
      "sweet potatoes",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sweet potatoes, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Breasts With Wild Rice",
    "mainIngredients": [
      "rice",
      "mushrooms",
      "onion",
      "chicken",
      "butter",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Creole Green Beans",
    "mainIngredients": [
      "lettuce",
      "onion",
      "bacon",
      "tomatoes"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, onion, bacon, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Bread",
    "mainIngredients": [
      "eggs",
      "banana",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, banana, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Patio Potatoes",
    "mainIngredients": [
      "onion",
      "mushrooms",
      "sour cream",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Sky High Biscuits",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Coconut Pie",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mom'S Pancakes",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Pizza Casserole",
    "mainIngredients": [
      "ground beef",
      "cheese",
      "mushrooms",
      "milk",
      "eggs"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, cheese, mushrooms, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Casserole",
    "mainIngredients": [
      "broccoli",
      "mushrooms",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chinese Hamburger",
    "mainIngredients": [
      "onion",
      "celery",
      "rice",
      "mushrooms",
      "chicken",
      "noodles"
    ],
    "optionalStaples": [
      "oil",
      "soy sauce",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hungarian-Stuffed Peppers",
    "mainIngredients": [
      "bell-peppers",
      "onion",
      "ground beef",
      "rice",
      "eggs"
    ],
    "optionalStaples": [
      "garlic powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bell-peppers, onion, ground beef, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Cup Cookies",
    "mainIngredients": [
      "butter",
      "peanut butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, peanut butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cream Puff Dessert",
    "mainIngredients": [
      "eggs",
      "milk",
      "cream cheese"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (eggs, milk, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Golf Balls",
    "mainIngredients": [
      "butter",
      "milk",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Festive Fruit Salad",
    "mainIngredients": [
      "orange",
      "strawberry",
      "apple",
      "lemon",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Fruit Medley",
    "mainIngredients": [
      "orange",
      "strawberry",
      "banana",
      "lime"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (orange, strawberry, banana, lime) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Nana'S Cornbread(For 9-Inch Iron Skillet Or 8 X 8-Inch Pan)",
    "mainIngredients": [
      "corn",
      "eggs",
      "bacon"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, eggs, bacon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Dad'S Chili",
    "mainIngredients": [
      "garlic",
      "lettuce",
      "tomatoes"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicago Crunchy Chocolate Chip Cookies",
    "mainIngredients": [
      "milk",
      "butter",
      "eggs",
      "oats"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, eggs, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salad Dressing",
    "mainIngredients": [
      "lemon",
      "garlic",
      "onion"
    ],
    "optionalStaples": [
      "honey"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Banana Cream Pie",
    "mainIngredients": [
      "milk",
      "eggs",
      "butter",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, eggs, butter, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Marinated Onions And Blue Cheese",
    "mainIngredients": [
      "lemon",
      "cheese",
      "onion"
    ],
    "optionalStaples": [
      "olive oil",
      "salt",
      "black-pepper",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, cheese, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese Cake",
    "mainIngredients": [
      "crackers",
      "butter",
      "cream cheese",
      "milk",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "cinnamon",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (crackers, butter, cream cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mixed Vegetable Casserole",
    "mainIngredients": [
      "onion",
      "cheese",
      "crackers"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, cheese, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheeseburger Crescent Bake(1 Hour)",
    "mainIngredients": [
      "ground beef",
      "onion",
      "lemon",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [
      "paprika",
      "garlic powder",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, lemon, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Any Flavor Pan Dessert",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, cream cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mexican Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "mushrooms",
      "chicken",
      "milk",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Apple Sour Cream Coffee Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "sour cream",
      "apple"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, sour cream, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spaghetti Salad",
    "mainIngredients": [
      "pasta",
      "cucumber",
      "tomatoes",
      "celery",
      "lettuce",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Spanish Meat Balls",
    "mainIngredients": [
      "bread",
      "onion",
      "rice",
      "eggs",
      "bell-peppers",
      "tomatoes"
    ],
    "optionalStaples": [
      "chili powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Fried Onion Rings",
    "mainIngredients": [
      "onion",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "oil",
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheeseburger Loaf",
    "mainIngredients": [
      "milk",
      "eggs",
      "crackers",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "mustard",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (milk, eggs, crackers, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ranch Style Baked Beans Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "kidney beans"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard",
      "vinegar",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Baked Spaghetti",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "butter",
      "tomatoes",
      "mushrooms",
      "ground beef",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, bell-peppers, butter, tomatoes) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Gooey Butter Cake",
    "mainIngredients": [
      "eggs",
      "butter",
      "cream cheese"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Pudding",
    "mainIngredients": [
      "corn",
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Zucchini In Tomato Juice(From Weight Watchers)",
    "mainIngredients": [
      "zucchini",
      "tomatoes",
      "bell-peppers",
      "onion",
      "chicken"
    ],
    "optionalStaples": [
      "oregano",
      "garlic powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (zucchini, tomatoes, bell-peppers, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Brunswick Stew",
    "mainIngredients": [
      "chicken",
      "potatoes",
      "onion",
      "corn",
      "tomatoes",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Marinated Carrots",
    "mainIngredients": [
      "carrots",
      "onion",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "sugar",
      "oil",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Blueberry Cake",
    "mainIngredients": [
      "eggs",
      "milk",
      "blueberries"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Summer Squash Casserole",
    "mainIngredients": [
      "onion",
      "chicken",
      "sour cream",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Mushroom Caps Stuffed",
    "mainIngredients": [
      "mushrooms",
      "sausage",
      "cheese",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (mushrooms, sausage, cheese, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Stir Fried Veggies Medley",
    "mainIngredients": [
      "carrots",
      "celery",
      "onion",
      "broccoli",
      "mushrooms"
    ],
    "optionalStaples": [
      "olive oil",
      "salt",
      "black-pepper",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Bacon And Egg Breakfast Bake",
    "mainIngredients": [
      "bacon",
      "cheese",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bacon, cheese, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fruit Pizza",
    "mainIngredients": [
      "cream cheese",
      "strawberry",
      "blueberries"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, strawberry, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham Roll-Ups",
    "mainIngredients": [
      "ham",
      "cream cheese",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ham, cream cheese, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Souffle",
    "mainIngredients": [
      "butter",
      "bread",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, bread, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Diane'S Quick Quiche",
    "mainIngredients": [
      "eggs",
      "cheese",
      "bacon",
      "onion",
      "broccoli"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, cheese, bacon, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Egg Drop Soup",
    "mainIngredients": [
      "onion",
      "garlic",
      "carrots",
      "peas",
      "eggs"
    ],
    "optionalStaples": [
      "oil",
      "broth",
      "soy sauce",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cherry Pie",
    "mainIngredients": [
      "crackers",
      "milk",
      "lemon",
      "cream cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, lemon, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Bean Casserole",
    "mainIngredients": [
      "bacon",
      "garlic",
      "onion",
      "beans",
      "kidney beans",
      "lettuce"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard",
      "black-pepper",
      "salt",
      "sugar",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (bacon, garlic, onion, beans) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fried Rice",
    "mainIngredients": [
      "onion",
      "lettuce",
      "rice",
      "mushrooms",
      "eggs"
    ],
    "optionalStaples": [
      "oil",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Strawberry Yum-Yum",
    "mainIngredients": [
      "crackers",
      "cream cheese",
      "milk",
      "strawberry"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "180 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, cream cheese, milk, strawberry) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blueberry Cream Pie",
    "mainIngredients": [
      "sour cream",
      "eggs",
      "blueberries",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sour cream, eggs, blueberries, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Western Style Barbecue",
    "mainIngredients": [
      "butter",
      "beans",
      "corn"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "24 Hour Salad",
    "mainIngredients": [
      "lettuce",
      "onion",
      "bacon",
      "cheese",
      "celery",
      "peas"
    ],
    "optionalStaples": [
      "mayonnaise",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "1440 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chicken And Tortilla Casserole",
    "mainIngredients": [
      "chicken",
      "tortilla",
      "onion",
      "bell-peppers",
      "mushrooms",
      "tomatoes",
      "garlic",
      "cheese"
    ],
    "optionalStaples": [
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Clam Chowder",
    "mainIngredients": [
      "bacon",
      "potatoes",
      "onion",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Banana Omelette",
    "mainIngredients": [
      "butter",
      "banana",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, banana, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco Soup",
    "mainIngredients": [
      "onion",
      "kidney beans",
      "butter",
      "tomatoes"
    ],
    "optionalStaples": [
      "spices",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Frosty Pudding Cones",
    "mainIngredients": [
      "milk",
      "lemon",
      "yogurt"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, lemon, yogurt) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Oriental Tossed Salad",
    "mainIngredients": [
      "noodles",
      "green onion",
      "broccoli",
      "lettuce"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar",
      "oil",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Japanese",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Brown Rice Pizza(Light)",
    "mainIngredients": [
      "rice",
      "milk",
      "eggs",
      "broccoli",
      "zucchini",
      "mushrooms",
      "onion"
    ],
    "optionalStaples": [
      "oregano",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, milk, eggs, broccoli) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Creamy Shells With Broccoli And Ham",
    "mainIngredients": [
      "pasta",
      "ham",
      "broccoli",
      "garlic",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, ham, broccoli, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Over Rice",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "celery",
      "potatoes"
    ],
    "optionalStaples": [
      "broth",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, bell-peppers, celery, potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Meatball Chop Suey",
    "mainIngredients": [
      "ground beef",
      "bread",
      "milk",
      "onion",
      "eggs",
      "celery",
      "beans",
      "mushrooms",
      "rice"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, bread, milk, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vegetable Beef Soup",
    "mainIngredients": [
      "ground beef",
      "tomatoes",
      "onion",
      "potatoes",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "360 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Sugar-Free Sweet-N-Sour Stir-Fry",
    "mainIngredients": [
      "celery",
      "carrots",
      "onion",
      "zucchini",
      "lettuce"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Chinese",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (celery, carrots, onion, zucchini) for a Chinese style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sausage Strata",
    "mainIngredients": [
      "bread",
      "sausage",
      "cheese",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, sausage, cheese, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pepperoni Spaghetti",
    "mainIngredients": [
      "onion",
      "lettuce",
      "ground beef",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, lettuce, ground beef, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Tomatoes And Cucumbers",
    "mainIngredients": [
      "cucumber",
      "onion",
      "butter",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cucumber, onion, butter, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fluffy White Icing",
    "mainIngredients": [
      "eggs",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Dishpan Cookies",
    "mainIngredients": [
      "eggs",
      "oats",
      "corn"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "12 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, oats, corn) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pumpkin Squares",
    "mainIngredients": [
      "oats",
      "milk",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (oats, milk, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Two Sweet Potato Pies",
    "mainIngredients": [
      "potatoes",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli-Cauliflower Soup",
    "mainIngredients": [
      "broccoli",
      "chicken",
      "butter",
      "onion",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "flour",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hunter'S Delight",
    "mainIngredients": [
      "butter",
      "onion",
      "ground beef",
      "corn",
      "milk",
      "potatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, onion, ground beef, corn) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Thousand Island Dressing",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "vinegar",
      "hot sauce",
      "sugar",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Working Mother'S \"Mess\"(Renamed Dad'S Quick Delight)",
    "mainIngredients": [
      "ground beef",
      "onion",
      "tomatoes",
      "garlic",
      "pasta",
      "beans"
    ],
    "optionalStaples": [
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, tomatoes, garlic) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Jello Vegetable Salad",
    "mainIngredients": [
      "lemon",
      "celery",
      "carrots",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chicken-Cheese Ball",
    "mainIngredients": [
      "chicken",
      "cream cheese",
      "onion"
    ],
    "optionalStaples": [
      "soy sauce",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, cream cheese, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salted Nut Squares",
    "mainIngredients": [
      "butter",
      "peanut butter",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, peanut butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Creamy Chicken And Mushrooms",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "garlic powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cherry Supreme",
    "mainIngredients": [
      "crackers",
      "butter",
      "cream cheese"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, butter, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Reuben Casserole",
    "mainIngredients": [
      "tomatoes",
      "cheese",
      "bread",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, cheese, bread, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy Chicken And Dumplings",
    "mainIngredients": [
      "chicken",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "broth",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Peanut Butter Oat Cookies",
    "mainIngredients": [
      "butter",
      "corn",
      "oats",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, corn, oats, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Oatmeal Cake",
    "mainIngredients": [
      "oats",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (oats, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salmon Croquettes",
    "mainIngredients": [
      "potatoes",
      "onion",
      "eggs",
      "bread"
    ],
    "optionalStaples": [
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, onion, eggs, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Relish]",
    "mainIngredients": [
      "corn",
      "onion",
      "celery",
      "bell-peppers",
      "lettuce"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, onion, celery, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vanilla Wafer Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Double Baked Potatoes",
    "mainIngredients": [
      "potatoes",
      "onion",
      "bacon",
      "ham",
      "cheese",
      "butter",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, onion, bacon, ham) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crabmeat Au Gratin",
    "mainIngredients": [
      "milk",
      "celery",
      "lettuce",
      "onion",
      "eggs",
      "cheese",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "35 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hobo Stew",
    "mainIngredients": [
      "ground beef",
      "potatoes",
      "beans",
      "corn",
      "onion"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Lemon Crunch",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "lemon",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cream cheese, lemon, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Name Cake",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Gold Rush Brunch",
    "mainIngredients": [
      "potatoes",
      "butter",
      "milk",
      "sour cream",
      "bacon",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, butter, milk, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham Cheese Oven Omelet",
    "mainIngredients": [
      "eggs",
      "milk",
      "ham",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, ham, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "sour cream",
      "cottage cheese",
      "tortilla",
      "cheese"
    ],
    "optionalStaples": [
      "garlic powder",
      "spices",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, sour cream, cottage cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Warm Crabmeat Dip",
    "mainIngredients": [
      "cream cheese",
      "lemon",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, lemon, onion, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Southwestern Skillet",
    "mainIngredients": [
      "ground beef",
      "onion",
      "tomatoes",
      "rice",
      "bell-peppers",
      "garlic",
      "cheese"
    ],
    "optionalStaples": [
      "chili powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, tomatoes, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Delicious Baked Potato Dish",
    "mainIngredients": [
      "potatoes",
      "butter",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, butter, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Cream Of Broccoli Soup",
    "mainIngredients": [
      "broccoli",
      "chicken",
      "milk"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cabbage Rolls",
    "mainIngredients": [
      "rice",
      "eggs",
      "onion",
      "tomatoes"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, eggs, onion, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Zucchini Pizzas",
    "mainIngredients": [
      "pasta",
      "cheese",
      "onion",
      "zucchini",
      "mushrooms"
    ],
    "optionalStaples": [
      "black-pepper",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, cheese, onion, zucchini) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Country Style Beef And Macaroni",
    "mainIngredients": [
      "pasta",
      "onion",
      "peas"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, onion, peas) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Cream Pie",
    "mainIngredients": [
      "cream cheese",
      "milk",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, milk, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Waldrop Banana Pudding",
    "mainIngredients": [
      "milk",
      "eggs",
      "banana"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, eggs, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Rice Casserole",
    "mainIngredients": [
      "onion",
      "celery",
      "butter",
      "broccoli",
      "rice",
      "chicken"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Broccoli-Raisin Salad",
    "mainIngredients": [
      "broccoli",
      "green onion",
      "bacon"
    ],
    "optionalStaples": [
      "mayonnaise",
      "vinegar",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Old-Time Bread Pudding",
    "mainIngredients": [
      "bread",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Original Mayfair Dressing",
    "mainIngredients": [
      "celery",
      "onion",
      "garlic",
      "lemon",
      "eggs"
    ],
    "optionalStaples": [
      "black-pepper",
      "mustard",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (celery, onion, garlic, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheeseburger Pie",
    "mainIngredients": [
      "ground beef",
      "onion",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "italian seasoning"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, tomatoes, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fried Cabbage",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "tomatoes"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, bell-peppers, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jello Salad(This Is Almost Like A Dessert, Yummy.)",
    "mainIngredients": [
      "lemon",
      "orange",
      "carrots",
      "celery",
      "cottage cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Mexicali Chicken And Cheese Bake",
    "mainIngredients": [
      "chicken",
      "cheese",
      "corn",
      "milk",
      "eggs",
      "onion",
      "lettuce"
    ],
    "optionalStaples": [
      "flour",
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Ripe Tomato Ketchup",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "vinegar",
      "black-pepper",
      "sugar",
      "cinnamon",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fresh Broccoli Salad",
    "mainIngredients": [
      "broccoli",
      "bacon",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Lemon Chicken",
    "mainIngredients": [
      "chicken",
      "lemon",
      "butter"
    ],
    "optionalStaples": [
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, lemon, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cream Tacos",
    "mainIngredients": [
      "onion",
      "corn",
      "lettuce",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, corn, lettuce, milk) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pizza Cups",
    "mainIngredients": [
      "ground beef",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "tomato sauce",
      "italian seasoning"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "All-American Apple Pie",
    "mainIngredients": [
      "apple",
      "lemon",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (apple, lemon, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Swedish Meat Balls",
    "mainIngredients": [
      "ground beef",
      "onion",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "hot sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Calf Liver Braised In Wine",
    "mainIngredients": [
      "onion",
      "butter",
      "mushrooms"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper",
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, butter, mushrooms) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sour Cream Pound Cake",
    "mainIngredients": [
      "sour cream",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sour cream, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Orange-Coconut Pie",
    "mainIngredients": [
      "butter",
      "eggs",
      "orange",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, orange, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Company Chicken",
    "mainIngredients": [
      "rice",
      "mushrooms",
      "chicken",
      "celery"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Minestrone Soup",
    "mainIngredients": [
      "carrots",
      "celery",
      "onion",
      "garlic",
      "chickpeas",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "basil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cherry Topped Cheesecake",
    "mainIngredients": [
      "cream cheese",
      "eggs",
      "milk",
      "lemon"
    ],
    "optionalStaples": [
      "oil",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, eggs, milk, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Coconut Cream Pie Or Lemon Meringue Pie",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Meal Muffins",
    "mainIngredients": [
      "corn",
      "eggs",
      "milk",
      "bacon"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, eggs, milk, bacon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Taco Rice",
    "mainIngredients": [
      "ground beef",
      "onion",
      "chicken",
      "rice"
    ],
    "optionalStaples": [
      "salsa",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, chicken, rice) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Zucchini Squares",
    "mainIngredients": [
      "zucchini",
      "onion",
      "garlic",
      "eggs"
    ],
    "optionalStaples": [
      "oil",
      "salt",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (zucchini, onion, garlic, eggs) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Eclair Dessert",
    "mainIngredients": [
      "crackers",
      "milk",
      "corn"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, corn) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Saltimbocca",
    "mainIngredients": [
      "chicken",
      "ham",
      "cheese",
      "tomatoes",
      "bread",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, ham, cheese, tomatoes) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Tortilla Casserole",
    "mainIngredients": [
      "tortilla",
      "chicken",
      "mushrooms",
      "sour cream",
      "onion",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Spanish Hamburger #1",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "celery",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Turkey Vegetable Stir-Fry",
    "mainIngredients": [
      "carrots",
      "mushrooms",
      "lettuce",
      "celery",
      "peas",
      "turkey",
      "rice"
    ],
    "optionalStaples": [
      "soy sauce",
      "broth",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Chinese",
    "estimatedTime": "3 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (carrots, mushrooms, lettuce, celery) for a Chinese style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mango With Tomatoes And Scallions Or Leeks",
    "mainIngredients": [
      "tomatoes",
      "green onion",
      "lemon"
    ],
    "optionalStaples": [
      "oil",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, green onion, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Stir-Fried Gumbo",
    "mainIngredients": [
      "chicken",
      "lettuce",
      "onion",
      "carrots",
      "butter",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "flour",
      "oil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "American",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, lettuce, onion, carrots) for a American style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Bake Chocolate Cookies",
    "mainIngredients": [
      "milk",
      "peanut butter",
      "oats"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, peanut butter, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Fat Rice And Vegetable Dish",
    "mainIngredients": [
      "rice",
      "zucchini",
      "onion",
      "mushrooms",
      "tomatoes",
      "garlic",
      "lemon"
    ],
    "optionalStaples": [
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, zucchini, onion, mushrooms) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Coffee Cake(Double Recipe)",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "cinnamon",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "21 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheesy Cornbread",
    "mainIngredients": [
      "bacon",
      "eggs",
      "corn",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bacon, eggs, corn, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Rice Crispy Chicken",
    "mainIngredients": [
      "rice",
      "eggs",
      "milk",
      "chicken"
    ],
    "optionalStaples": [
      "paprika",
      "flour",
      "salt",
      "black-pepper",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, eggs, milk, chicken) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No-Fat Added Oven Fried Chicken",
    "mainIngredients": [
      "chicken",
      "cheese",
      "bread"
    ],
    "optionalStaples": [
      "garlic powder",
      "onion powder",
      "black-pepper",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, cheese, bread) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sauerkraut Salad",
    "mainIngredients": [
      "lettuce",
      "celery",
      "onion"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sour Cream Meat Loaf",
    "mainIngredients": [
      "carrots",
      "apple",
      "potatoes",
      "onion",
      "bacon",
      "eggs",
      "sour cream"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (carrots, apple, potatoes, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Stuffed Chicken Breast",
    "mainIngredients": [
      "bell-peppers",
      "mushrooms",
      "chicken",
      "garlic"
    ],
    "optionalStaples": [
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Meg'S Power Peanut Butter Balls",
    "mainIngredients": [
      "crackers",
      "peanut butter",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, peanut butter, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Indian Meat Loaf",
    "mainIngredients": [
      "ground beef",
      "eggs",
      "corn",
      "onion",
      "bell-peppers",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, eggs, corn, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Skillet Beef And Macaroni",
    "mainIngredients": [
      "ground beef",
      "onion",
      "pasta",
      "bell-peppers"
    ],
    "optionalStaples": [
      "tomato sauce",
      "salt",
      "black-pepper",
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, pasta, bell-peppers) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jiffy Beef Stroganoff",
    "mainIngredients": [
      "ground beef",
      "onion",
      "noodles",
      "mushrooms",
      "sour cream"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Baked Cheese Sandwiches",
    "mainIngredients": [
      "eggs",
      "milk",
      "bread",
      "cheese"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, bread, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Teresa'S Brisket",
    "mainIngredients": [
      "garlic",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "480 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (garlic, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Salmon Loaf",
    "mainIngredients": [
      "celery",
      "onion",
      "mushrooms",
      "milk",
      "eggs",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (celery, onion, mushrooms, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Favorite Vegetable Soup(Low-Fat)",
    "mainIngredients": [
      "onion",
      "garlic",
      "zucchini",
      "carrots"
    ],
    "optionalStaples": [
      "broth",
      "basil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Sour Cream Lasagna",
    "mainIngredients": [
      "eggs",
      "ground beef",
      "garlic",
      "cottage cheese",
      "sour cream",
      "lettuce",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "tomato sauce",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, ground beef, garlic, cottage cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Chicken And Zucchini",
    "mainIngredients": [
      "chicken",
      "zucchini",
      "lemon"
    ],
    "optionalStaples": [
      "broth",
      "soy sauce",
      "sugar",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, zucchini, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Meat Balls",
    "mainIngredients": [
      "ground beef",
      "onion",
      "eggs"
    ],
    "optionalStaples": [
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Apple Waldorf Salad",
    "mainIngredients": [
      "apple",
      "celery",
      "lemon",
      "yogurt"
    ],
    "optionalStaples": [
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Navy Bean Soup",
    "mainIngredients": [
      "beans",
      "tomatoes",
      "potatoes",
      "onion",
      "carrots",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Layered Banana Pineapple Dessert",
    "mainIngredients": [
      "crackers",
      "butter",
      "banana",
      "cream cheese",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "180 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, butter, banana, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Scalloped Potatoes",
    "mainIngredients": [
      "onion",
      "butter",
      "potatoes",
      "lemon",
      "milk",
      "bread"
    ],
    "optionalStaples": [
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, butter, potatoes, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Split Dessert",
    "mainIngredients": [
      "crackers",
      "eggs",
      "butter",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "360 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, eggs, butter, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Strawberry Salad",
    "mainIngredients": [
      "banana",
      "strawberry",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Peanut Butter Pie",
    "mainIngredients": [
      "eggs",
      "corn",
      "peanut butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, corn, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fresh Tomato Salsa",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "garlic",
      "bell-peppers",
      "lime"
    ],
    "optionalStaples": [
      "tomato sauce",
      "oregano",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, garlic, bell-peppers) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vermicelli Salad",
    "mainIngredients": [
      "noodles",
      "lettuce",
      "lemon"
    ],
    "optionalStaples": [
      "olive oil",
      "spices",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Two Potato Bake",
    "mainIngredients": [
      "sweet potatoes",
      "potatoes",
      "onion",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sweet potatoes, potatoes, onion, milk) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spinach Dip",
    "mainIngredients": [
      "bread",
      "spinach",
      "sour cream",
      "green onion"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cabbage And Noodles",
    "mainIngredients": [
      "onion",
      "eggs",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Scalloped Tomatoes(Heart Smart)",
    "mainIngredients": [
      "tomatoes",
      "bell-peppers",
      "onion",
      "garlic",
      "bread"
    ],
    "optionalStaples": [
      "basil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, bell-peppers, onion, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hobo Dinner",
    "mainIngredients": [
      "potatoes",
      "carrots",
      "onion",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, carrots, onion, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Nut Muffins",
    "mainIngredients": [
      "banana",
      "milk",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "22 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (banana, milk, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick-Energy Pickups",
    "mainIngredients": [
      "crackers",
      "peanut butter",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, peanut butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken With Rice(Arroz Con Pollo)",
    "mainIngredients": [
      "chicken",
      "garlic",
      "bell-peppers",
      "onion",
      "peas",
      "tomatoes",
      "rice"
    ],
    "optionalStaples": [
      "salt",
      "broth",
      "oregano",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, garlic, bell-peppers, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Puff Pancakes",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Easy Hot Dish",
    "mainIngredients": [
      "pasta",
      "onion",
      "chicken"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Easy Spaghetti",
    "mainIngredients": [
      "pasta",
      "ground beef",
      "onion",
      "garlic",
      "tomatoes"
    ],
    "optionalStaples": [
      "olive oil",
      "salt",
      "black-pepper",
      "oregano",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, ground beef, onion, garlic) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cashew Chicken",
    "mainIngredients": [
      "chicken",
      "bell-peppers",
      "peas"
    ],
    "optionalStaples": [
      "soy sauce",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "360 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (chicken, bell-peppers, peas) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Casserole",
    "mainIngredients": [
      "lettuce",
      "onion",
      "corn",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "65 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, onion, corn, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Skillet Pineapple Upside-Down Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Kim'S Chicken Alfredo Pizza",
    "mainIngredients": [
      "bell-peppers",
      "onion",
      "garlic",
      "chicken",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bell-peppers, onion, garlic, chicken) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Don Hill'S Lasagna",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "garlic",
      "pasta",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, bell-peppers, garlic, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Layered Salad",
    "mainIngredients": [
      "lettuce",
      "onion",
      "bacon",
      "cheese"
    ],
    "optionalStaples": [
      "sugar",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Apple Cream Coffee Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "sour cream",
      "apple"
    ],
    "optionalStaples": [
      "cinnamon",
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, eggs, sour cream, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Chess Pie",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Oatmeal Chocolate Chip Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "12 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Wayne'S Cajun Bean Soup",
    "mainIngredients": [
      "potatoes",
      "onion",
      "celery",
      "beans",
      "tomatoes",
      "sausage"
    ],
    "optionalStaples": [
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "American",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Grandma'S Cheesecake(New York Style)",
    "mainIngredients": [
      "crackers",
      "butter",
      "cream cheese",
      "eggs",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, butter, cream cheese, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Preacher Cookies",
    "mainIngredients": [
      "butter",
      "milk",
      "oats"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sour Cream Apple Pie",
    "mainIngredients": [
      "butter",
      "lettuce",
      "lemon",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, lettuce, lemon, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Meat Loaf",
    "mainIngredients": [
      "bread",
      "milk",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, milk, eggs, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cumin Rice Dish",
    "mainIngredients": [
      "rice",
      "onion",
      "bell-peppers",
      "bacon"
    ],
    "optionalStaples": [
      "cumin",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, onion, bell-peppers, bacon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "French Potato Soup",
    "mainIngredients": [
      "potatoes",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Walla-Walla Onion Pie",
    "mainIngredients": [
      "onion",
      "butter",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "olive oil",
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, butter, eggs, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sausage Stars",
    "mainIngredients": [
      "sausage",
      "cheese",
      "bell-peppers",
      "eggs"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sweet Potato Or Pumpkin Cake",
    "mainIngredients": [
      "eggs",
      "butter",
      "sweet potatoes"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (eggs, butter, sweet potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham Cheese Ball",
    "mainIngredients": [
      "cream cheese",
      "ham",
      "lettuce"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, ham, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Potato Salad",
    "mainIngredients": [
      "potatoes",
      "green onion",
      "lettuce"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "14 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chinese Chicken Salad",
    "mainIngredients": [
      "chicken",
      "lettuce",
      "cucumber",
      "celery",
      "bell-peppers",
      "green onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Irish Stew",
    "mainIngredients": [
      "chicken",
      "corn",
      "tomatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Holiday Broccoli",
    "mainIngredients": [
      "broccoli",
      "chicken",
      "celery",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Crystal'S Cherry Delight",
    "mainIngredients": [
      "cream cheese",
      "milk",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (cream cheese, milk, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Macaroni Pie",
    "mainIngredients": [
      "pasta",
      "cheese",
      "milk",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, cheese, milk, eggs) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Power Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Zucchini Relish",
    "mainIngredients": [
      "zucchini",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "salt",
      "vinegar",
      "mustard",
      "sugar",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (zucchini, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Strawberry Bottom Cheesecake Pie",
    "mainIngredients": [
      "crackers",
      "cream cheese",
      "sour cream",
      "strawberry"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, cream cheese, sour cream, strawberry) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "The Clergy Special",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "cheese",
      "ham",
      "sausage"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, cheese, ham) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Thomas Jefferson'S Macaroni And Cheese Pudding",
    "mainIngredients": [
      "butter",
      "milk",
      "cheese",
      "pasta"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, cheese, pasta) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Almond",
    "mainIngredients": [
      "broccoli",
      "onion",
      "butter",
      "milk",
      "cheese",
      "eggs",
      "bread"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (broccoli, onion, butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blueberry Muffins",
    "mainIngredients": [
      "butter",
      "eggs",
      "blueberries"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spinach Layer Salad",
    "mainIngredients": [
      "spinach",
      "eggs",
      "bacon",
      "peas",
      "onion",
      "cheese",
      "sour cream"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "1440 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Baked Cabbage",
    "mainIngredients": [
      "onion",
      "rice",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken & Spaghetti Casserole",
    "mainIngredients": [
      "pasta",
      "onion",
      "celery",
      "garlic",
      "chicken",
      "bell-peppers",
      "tomatoes"
    ],
    "optionalStaples": [
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, onion, celery, garlic) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken, Broccoli And Cheese Casserole",
    "mainIngredients": [
      "broccoli",
      "chicken",
      "milk",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cabbage Soup",
    "mainIngredients": [
      "butter",
      "onion",
      "chicken",
      "tomatoes",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hot Sauce(To Can)",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Yellow Cake(Delicious With Just A Dusting Of Powdered Sugar.)",
    "mainIngredients": [
      "milk",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Microwave Zucchini-Beef Bake",
    "mainIngredients": [
      "zucchini",
      "onion",
      "garlic",
      "cottage cheese",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "olive oil",
      "tomato sauce",
      "salt",
      "cinnamon",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (zucchini, onion, garlic, cottage cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Dill Rye Bread Dip",
    "mainIngredients": [
      "sour cream",
      "onion",
      "bread"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sour cream, onion, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jane'S Cheese Cake",
    "mainIngredients": [
      "cream cheese",
      "eggs",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cream cheese, eggs, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spicy Home Fried Potatoes",
    "mainIngredients": [
      "potatoes",
      "onion",
      "butter"
    ],
    "optionalStaples": [
      "black-pepper",
      "garlic powder",
      "basil",
      "paprika",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, onion, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Light And Crunchy Chicken Salad",
    "mainIngredients": [
      "chicken",
      "apple",
      "bell-peppers",
      "celery",
      "onion",
      "cheese",
      "lettuce"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Scotch Broth",
    "mainIngredients": [
      "carrots",
      "celery",
      "onion"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Peaches And Cream Cheesecake",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs",
      "cream cheese"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, eggs, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ragu Cheese Potatoes",
    "mainIngredients": [
      "potatoes",
      "cheese",
      "milk"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cherry Wink Cookies",
    "mainIngredients": [
      "eggs",
      "milk",
      "corn"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, corn) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef And Green Beans",
    "mainIngredients": [
      "lettuce",
      "garlic",
      "onion",
      "rice",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "soy sauce",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (lettuce, garlic, onion, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cornbread Dressing",
    "mainIngredients": [
      "bread",
      "butter",
      "onion",
      "garlic",
      "bell-peppers",
      "celery",
      "eggs"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bread, butter, onion, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Black-Eyed Mullet",
    "mainIngredients": [
      "peas",
      "onion",
      "bell-peppers",
      "garlic"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (peas, onion, bell-peppers, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy Chicken Cacciatore",
    "mainIngredients": [
      "chicken",
      "tomatoes",
      "mushrooms",
      "butter",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [
      "garlic powder",
      "onion powder",
      "italian seasoning",
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, tomatoes, mushrooms, butter) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cranberry Souffle",
    "mainIngredients": [
      "lemon",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Stuffed Mushrooms",
    "mainIngredients": [
      "bacon",
      "cream cheese",
      "mushrooms"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bacon, cream cheese, mushrooms) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese And Chilies",
    "mainIngredients": [
      "eggs",
      "milk",
      "lettuce",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "English Toffee Bars",
    "mainIngredients": [
      "crackers",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fruit Cobbler",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "honey"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Bake Cookies",
    "mainIngredients": [
      "milk",
      "oats",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, oats, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cream Cheese Rolls",
    "mainIngredients": [
      "cream cheese",
      "sour cream",
      "onion"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (cream cheese, sour cream, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Barbecue Turkey Loaf",
    "mainIngredients": [
      "chicken",
      "butter",
      "cheese",
      "turkey",
      "eggs"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, butter, cheese, turkey) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Onion Casserole",
    "mainIngredients": [
      "onion",
      "mushrooms",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hamburger And Macaroni Casserole",
    "mainIngredients": [
      "onion",
      "pasta",
      "tomatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "One-Rise Monkey Bread",
    "mainIngredients": [
      "bread",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bread, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy \"Apple Festival\" Pie(Microwave)",
    "mainIngredients": [
      "apple",
      "oats",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "6 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (apple, oats, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Strawberry Pizza",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "strawberry",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cream cheese, strawberry, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Santa Fe Nachos",
    "mainIngredients": [
      "sausage",
      "cheese",
      "tortilla",
      "bell-peppers",
      "tomatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, cheese, tortilla, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Rice-Broccoli Casserole",
    "mainIngredients": [
      "onion",
      "celery",
      "rice",
      "broccoli",
      "chicken",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Party Mix",
    "mainIngredients": [
      "corn",
      "butter",
      "garlic",
      "celery"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (corn, butter, garlic, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fettucini With Lemon Vegetables",
    "mainIngredients": [
      "lettuce",
      "butter",
      "lemon",
      "milk",
      "cream cheese",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "7 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (lettuce, butter, lemon, milk) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Or Turkey Casserole",
    "mainIngredients": [
      "garlic",
      "sour cream",
      "onion",
      "milk",
      "chicken",
      "crackers",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Maple-Bacon Oven Pancake",
    "mainIngredients": [
      "cheese",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Fruit Salad",
    "mainIngredients": [
      "orange",
      "banana",
      "strawberry"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Dirty Rice",
    "mainIngredients": [
      "lettuce",
      "celery",
      "rice",
      "sausage"
    ],
    "optionalStaples": [
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, celery, rice, sausage) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sunday Dinner",
    "mainIngredients": [
      "potatoes",
      "carrots",
      "chicken"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, carrots, chicken) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Macaroon Bars",
    "mainIngredients": [
      "crackers",
      "milk",
      "bread",
      "eggs"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (crackers, milk, bread, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Breasts In Lemon Sauce",
    "mainIngredients": [
      "chicken",
      "butter",
      "garlic",
      "apple",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "6 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, butter, garlic, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spaghetti Meat Sauce",
    "mainIngredients": [
      "ground beef",
      "onion",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "garlic powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, pasta, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Zucchini Stew",
    "mainIngredients": [
      "zucchini",
      "lettuce",
      "onion",
      "tomatoes"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Quick Spanish Rice Casserole",
    "mainIngredients": [
      "rice",
      "beans",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, beans, onion, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crock Pot Pizza",
    "mainIngredients": [
      "cheese",
      "mushrooms",
      "onion",
      "bell-peppers",
      "noodles"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "90 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, mushrooms, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "German Potatoes",
    "mainIngredients": [
      "onion",
      "butter",
      "potatoes"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, butter, potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fullabull'S Shepherd'S Pie",
    "mainIngredients": [
      "ground beef",
      "onion",
      "potatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Whole Wheat Carrot Cake",
    "mainIngredients": [
      "eggs",
      "milk",
      "carrots"
    ],
    "optionalStaples": [
      "oil",
      "sugar",
      "cinnamon",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, carrots) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pickled Squash",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "vinegar",
      "sugar",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, bell-peppers, celery) for a Indian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pasta Salad",
    "mainIngredients": [
      "cheese",
      "tomatoes",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Salad Luncheon Beans",
    "mainIngredients": [
      "ground beef",
      "onion",
      "beans",
      "butter",
      "kidney beans"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "360 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Picnic Potato Salad",
    "mainIngredients": [
      "potatoes",
      "eggs",
      "celery",
      "bacon",
      "carrots",
      "cucumber",
      "onion",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "mustard",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chicken Fettucini",
    "mainIngredients": [
      "butter",
      "chicken",
      "mushrooms",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (butter, chicken, mushrooms, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Chip Cookies",
    "mainIngredients": [
      "cream cheese",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cream cheese, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cajun Crawfish Cornbread",
    "mainIngredients": [
      "eggs",
      "onion",
      "cheese",
      "corn",
      "bell-peppers"
    ],
    "optionalStaples": [
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "American",
    "estimatedTime": "55 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, onion, cheese, corn) for a American style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fat-Free Banana Crunch Muffins",
    "mainIngredients": [
      "cereal",
      "banana",
      "yogurt",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cereal, banana, yogurt, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chili Con Carne",
    "mainIngredients": [
      "ground beef",
      "onion",
      "kidney beans",
      "bell-peppers"
    ],
    "optionalStaples": [
      "tomato sauce",
      "chili powder",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Spaghetti Casserole",
    "mainIngredients": [
      "pasta",
      "onion",
      "bell-peppers",
      "mushrooms"
    ],
    "optionalStaples": [
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cold Bread Pudding",
    "mainIngredients": [
      "milk",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Persimmon Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Graham Cracker Cake",
    "mainIngredients": [
      "crackers",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sausage And Egg Quiche",
    "mainIngredients": [
      "sausage",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (sausage, eggs, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Cheese Soup",
    "mainIngredients": [
      "onion",
      "butter",
      "milk",
      "carrots",
      "celery",
      "broccoli",
      "cheese"
    ],
    "optionalStaples": [
      "flour",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Sausages And Seashells",
    "mainIngredients": [
      "pasta",
      "sausage",
      "onion",
      "garlic",
      "tomatoes"
    ],
    "optionalStaples": [
      "olive oil",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, sausage, onion, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Crepes",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spanakopeta(Spinach Squares)",
    "mainIngredients": [
      "lettuce",
      "onion",
      "butter",
      "spinach",
      "cream cheese",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Mediterranean",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (lettuce, onion, butter, spinach) for a Mediterranean style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot And Spicy Chicken",
    "mainIngredients": [
      "chicken",
      "corn",
      "celery",
      "onion",
      "cheese",
      "bell-peppers"
    ],
    "optionalStaples": [
      "broth",
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, corn, celery, onion) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Monster Cookies",
    "mainIngredients": [
      "eggs",
      "oats",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, oats, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Seven Layer Salad",
    "mainIngredients": [
      "lettuce",
      "celery",
      "bell-peppers",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Judy'S Vegetable Tortellini",
    "mainIngredients": [
      "onion",
      "garlic",
      "butter",
      "spinach",
      "cheese"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, garlic, butter, spinach) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hash Brown Casserole",
    "mainIngredients": [
      "chicken",
      "sour cream",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Sausage Casserole(Microwave)",
    "mainIngredients": [
      "sausage",
      "onion",
      "bell-peppers",
      "tomatoes",
      "pasta",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar",
      "chili powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "6 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (sausage, onion, bell-peppers, tomatoes) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chewy Oatmeal Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef And Shell Bake",
    "mainIngredients": [
      "ground beef",
      "celery",
      "onion",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "oregano",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, celery, onion, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Kidney Bean Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "pasta",
      "tomatoes",
      "kidney beans",
      "cheese"
    ],
    "optionalStaples": [
      "oil",
      "salt",
      "black-pepper",
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tomato Aspic",
    "mainIngredients": [
      "tomatoes",
      "lemon",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, lemon, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco Beans",
    "mainIngredients": [
      "beans",
      "lettuce",
      "tomatoes",
      "bell-peppers",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "chili powder",
      "cumin"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (beans, lettuce, tomatoes, bell-peppers) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vanilla Pudding",
    "mainIngredients": [
      "milk",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (milk, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blueberry Heaven Supreme",
    "mainIngredients": [
      "blueberries",
      "lemon",
      "milk",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (blueberries, lemon, milk, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Kraut Salad",
    "mainIngredients": [
      "celery",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "1440 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Broccoli And Rice Casserole",
    "mainIngredients": [
      "rice",
      "broccoli",
      "onion",
      "chicken",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "California Cookies",
    "mainIngredients": [
      "eggs",
      "lemon",
      "lettuce"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, lemon, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Corn",
    "mainIngredients": [
      "milk",
      "corn",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, corn, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corned Beef Hash Casserole",
    "mainIngredients": [
      "potatoes",
      "onion",
      "milk",
      "butter",
      "corn",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, onion, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Meringue Pie",
    "mainIngredients": [
      "eggs",
      "butter",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vegetable Spread",
    "mainIngredients": [
      "cream cheese",
      "carrots",
      "onion",
      "cucumber"
    ],
    "optionalStaples": [
      "mayonnaise",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, carrots, onion, cucumber) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Life Saver Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "9 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Chiffon Cake",
    "mainIngredients": [
      "eggs",
      "lemon",
      "banana"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, lemon, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Carrot Coins(Microwave)",
    "mainIngredients": [
      "carrots",
      "butter",
      "garlic"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (carrots, butter, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Coconut Pecan Frosting",
    "mainIngredients": [
      "milk",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "12 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Skillet Barbecue Beans",
    "mainIngredients": [
      "sausage",
      "onion",
      "bell-peppers",
      "beans"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, onion, bell-peppers, beans) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Sticks",
    "mainIngredients": [
      "bread",
      "peanut butter",
      "crackers"
    ],
    "optionalStaples": [
      "oil",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (bread, peanut butter, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cinnamon Pull-Aparts",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "cinnamon",
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Tuna Appetizer",
    "mainIngredients": [
      "tuna",
      "bell-peppers",
      "eggs",
      "lettuce",
      "butter",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (tuna, bell-peppers, eggs, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Low-Fat Texas Trash",
    "mainIngredients": [
      "rice",
      "corn",
      "apple"
    ],
    "optionalStaples": [
      "garlic powder",
      "onion powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, corn, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Seafood Casserole",
    "mainIngredients": [
      "butter",
      "mushrooms",
      "onion",
      "crackers"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, mushrooms, onion, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Split Cake",
    "mainIngredients": [
      "crackers",
      "eggs",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (crackers, eggs, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sweet Potato Casserole",
    "mainIngredients": [
      "sweet potatoes",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sweet potatoes, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Homemade Chicken Noodle Soup",
    "mainIngredients": [
      "garlic",
      "lettuce",
      "onion",
      "chicken",
      "pasta"
    ],
    "optionalStaples": [
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Blueberry Dumplings",
    "mainIngredients": [
      "blueberries",
      "lemon",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (blueberries, lemon, butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Potatoes Romanoff",
    "mainIngredients": [
      "onion",
      "chicken",
      "cheese",
      "sour cream",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Enchilada Casserole",
    "mainIngredients": [
      "onion",
      "mushrooms",
      "chicken",
      "cheese"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, mushrooms, chicken, cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Country Casserole",
    "mainIngredients": [
      "cheese",
      "milk",
      "turkey",
      "peas",
      "pasta",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cheese, milk, turkey, peas) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Party Pizza Appetizers(Makes 90)",
    "mainIngredients": [
      "sausage",
      "onion",
      "cheese",
      "garlic",
      "tomatoes"
    ],
    "optionalStaples": [
      "oregano",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, onion, cheese, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Red Lobster Cheese Garlic Biscuits",
    "mainIngredients": [
      "milk",
      "cheese",
      "butter"
    ],
    "optionalStaples": [
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (milk, cheese, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Mold",
    "mainIngredients": [
      "lemon",
      "lime",
      "cottage cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sour Cream Potatoes",
    "mainIngredients": [
      "sour cream",
      "cheese",
      "chicken",
      "butter",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Breakfast",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Warm skillet or griddle.",
      "Cook eggs or grains until set.",
      "Plate with toppings and serve."
    ]
  },
  {
    "title": "Ground Beef Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "garlic",
      "bell-peppers",
      "celery",
      "tomatoes",
      "mushrooms",
      "corn",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (ground beef, onion, garlic, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Maranda",
    "mainIngredients": [
      "chicken",
      "celery",
      "milk"
    ],
    "optionalStaples": [
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Apple-Banana Bread",
    "mainIngredients": [
      "eggs",
      "banana",
      "milk",
      "apple"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, banana, milk, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mock Lobster Salad",
    "mainIngredients": [
      "crackers",
      "celery",
      "lettuce",
      "eggs",
      "onion",
      "tomatoes"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sweet And Sour Seashells",
    "mainIngredients": [
      "corn",
      "cucumber",
      "onion"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar",
      "mustard",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, cucumber, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cornbread Salad",
    "mainIngredients": [
      "onion",
      "lettuce",
      "tomatoes",
      "bacon",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Ham And Rice Casserole",
    "mainIngredients": [
      "mushrooms",
      "milk",
      "rice",
      "ham"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Zucchini Muffins",
    "mainIngredients": [
      "oats",
      "eggs",
      "zucchini"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "cinnamon",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (oats, eggs, zucchini) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Parmesan",
    "mainIngredients": [
      "chicken",
      "bread",
      "pasta",
      "onion",
      "garlic",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, bread, pasta, onion) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chunky Cheddar Chili Beans",
    "mainIngredients": [
      "ground beef",
      "kidney beans",
      "onion",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [
      "chili powder",
      "sugar",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Frito Salad",
    "mainIngredients": [
      "tomatoes",
      "lettuce",
      "cheese",
      "beans"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Marinated Beef Slices",
    "mainIngredients": [
      "onion",
      "lemon",
      "sour cream"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, lemon, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken And Stuffing Bake",
    "mainIngredients": [
      "chicken",
      "celery",
      "onion",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Turkey Casserole",
    "mainIngredients": [
      "turkey",
      "mushrooms",
      "celery",
      "chicken",
      "rice"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Linguine Salad",
    "mainIngredients": [
      "tomatoes",
      "cucumber",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Parmesan Meat Loaf",
    "mainIngredients": [
      "ground beef",
      "cottage cheese",
      "oats",
      "eggs",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, cottage cheese, oats, eggs) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spinach Squares",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter",
      "onion",
      "cheese",
      "spinach"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, milk, butter, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mexican Bean Salad",
    "mainIngredients": [
      "beans",
      "tomatoes",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Hungarian Goulash",
    "mainIngredients": [
      "onion",
      "garlic",
      "bell-peppers",
      "noodles"
    ],
    "optionalStaples": [
      "ketchup",
      "vinegar",
      "sugar",
      "paprika",
      "salt",
      "mustard",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, garlic, bell-peppers, noodles) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Cordon Blue",
    "mainIngredients": [
      "chicken",
      "cheese",
      "ham",
      "butter"
    ],
    "optionalStaples": [
      "paprika",
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, cheese, ham, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco Salad",
    "mainIngredients": [
      "ground beef",
      "onion",
      "celery",
      "bell-peppers",
      "garlic",
      "cheese",
      "tomatoes",
      "lettuce",
      "corn"
    ],
    "optionalStaples": [
      "cumin",
      "chili powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Garden Cabbage Salad",
    "mainIngredients": [
      "lettuce",
      "carrots",
      "cucumber"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Kentucky Pecan Pie",
    "mainIngredients": [
      "corn",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (corn, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Macaroni And Cheese Casserole",
    "mainIngredients": [
      "cheese",
      "pasta",
      "mushrooms",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Betsy'S Chocolate Fudge Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "sour cream"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Stroganoff",
    "mainIngredients": [
      "chicken",
      "onion",
      "mushrooms",
      "yogurt",
      "noodles",
      "garlic"
    ],
    "optionalStaples": [
      "oil",
      "black-pepper",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, onion, mushrooms, yogurt) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Onion Soup",
    "mainIngredients": [
      "onion",
      "butter",
      "bread",
      "cheese"
    ],
    "optionalStaples": [
      "oil",
      "sugar",
      "flour",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Banana Walnut Cake",
    "mainIngredients": [
      "milk",
      "banana",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, banana, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fat Free Pizza Treats",
    "mainIngredients": [
      "cheese",
      "onion",
      "mushrooms",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, onion, mushrooms, bell-peppers) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Imitation Crabmeat Salad",
    "mainIngredients": [
      "pasta",
      "sour cream",
      "celery",
      "green onion",
      "peas"
    ],
    "optionalStaples": [
      "mayonnaise",
      "onion powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Macaroni And Cottage Cheese",
    "mainIngredients": [
      "pasta",
      "cottage cheese",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, cottage cheese, butter) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "String Pie",
    "mainIngredients": [
      "ground beef",
      "onion",
      "green onion",
      "pasta",
      "cheese",
      "eggs",
      "butter",
      "cottage cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, green onion, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pear Relish",
    "mainIngredients": [
      "onion",
      "lettuce",
      "bell-peppers"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "mustard",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, lettuce, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chili Beef Casserole",
    "mainIngredients": [
      "tomatoes",
      "ground beef",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "12 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Salmon Casserole Baked In Sour Cream",
    "mainIngredients": [
      "lemon",
      "sour cream",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, sour cream, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Carrie'S Cabbage Soup",
    "mainIngredients": [
      "lettuce",
      "onion",
      "celery",
      "bell-peppers",
      "tomatoes",
      "ground beef",
      "sausage"
    ],
    "optionalStaples": [
      "sugar",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken And Pasta Salad",
    "mainIngredients": [
      "eggs",
      "chicken",
      "lettuce"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Calico Beans",
    "mainIngredients": [
      "beans",
      "peas",
      "bacon",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "sugar",
      "ketchup",
      "mustard",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (beans, peas, bacon, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Penne Al'Arrabbiato",
    "mainIngredients": [
      "tomatoes",
      "garlic",
      "bell-peppers",
      "pasta"
    ],
    "optionalStaples": [
      "olive oil",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, garlic, bell-peppers, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vegetable Dip",
    "mainIngredients": [
      "sour cream",
      "green onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "mayonnaise",
      "garlic powder",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (sour cream, green onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy Chicken Pot Pie",
    "mainIngredients": [
      "chicken",
      "onion",
      "mushrooms",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Squash Souffle",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs",
      "crackers",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, eggs, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Loris'S Egg Salad",
    "mainIngredients": [
      "eggs",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "salt",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Meatball Stew",
    "mainIngredients": [
      "cereal",
      "eggs",
      "ground beef",
      "tomatoes",
      "carrots",
      "onion",
      "potatoes"
    ],
    "optionalStaples": [
      "broth",
      "salt",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cauliflower-Broccoli Casserole",
    "mainIngredients": [
      "broccoli",
      "butter",
      "mushrooms",
      "milk",
      "cheese",
      "rice"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cabbage Casserole",
    "mainIngredients": [
      "celery",
      "bell-peppers",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "6 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Best Ever Salad",
    "mainIngredients": [
      "pasta",
      "onion",
      "bell-peppers",
      "celery",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Tuna Casserole",
    "mainIngredients": [
      "tuna",
      "mushrooms",
      "pasta",
      "celery",
      "onion",
      "peas"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "35 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Swiss Chicken Casserole",
    "mainIngredients": [
      "chicken",
      "cheese",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Happy Face Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mexican Chicken",
    "mainIngredients": [
      "chicken",
      "onion",
      "cheese",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, onion, cheese, mushrooms) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Onion Dressing",
    "mainIngredients": [
      "milk",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "vinegar",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chocolate Oatmeal Cookies",
    "mainIngredients": [
      "milk",
      "oats",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, oats, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chippewa Soup",
    "mainIngredients": [
      "carrots",
      "onion",
      "celery",
      "lettuce",
      "garlic",
      "ham",
      "potatoes"
    ],
    "optionalStaples": [
      "tomato sauce",
      "basil",
      "oregano",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Voodoo Chicken",
    "mainIngredients": [
      "chicken",
      "onion",
      "garlic",
      "milk"
    ],
    "optionalStaples": [
      "vinegar",
      "soy sauce",
      "black-pepper",
      "mustard",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (chicken, onion, garlic, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Old Fashioned Tea Cakes",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "French Toast And Sauce",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter",
      "bread"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spaghetti Pie",
    "mainIngredients": [
      "pasta",
      "cheese",
      "eggs",
      "cottage cheese",
      "ground beef",
      "onion",
      "lettuce"
    ],
    "optionalStaples": [
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, cheese, eggs, cottage cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blue Muffins",
    "mainIngredients": [
      "eggs",
      "milk",
      "blueberries"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Victorian Baked French Toast",
    "mainIngredients": [
      "butter",
      "corn",
      "bread",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (butter, corn, bread, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Swedish Meatballs",
    "mainIngredients": [
      "ground beef",
      "bread",
      "cream cheese",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Irish Stew(Microwave)",
    "mainIngredients": [
      "onion",
      "carrots",
      "potatoes"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "8 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Pepperoni Loaf",
    "mainIngredients": [
      "bread",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, cheese, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Antionett'S Soup",
    "mainIngredients": [
      "ground beef",
      "onion",
      "garlic",
      "noodles",
      "lettuce",
      "tomatoes",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Seafood And Pasta Salad",
    "mainIngredients": [
      "green onion",
      "eggs",
      "noodles"
    ],
    "optionalStaples": [
      "olive oil",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Easy Peanut Blossom Cookies",
    "mainIngredients": [
      "milk",
      "peanut butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "12 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (milk, peanut butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken And Broccoli Casserole",
    "mainIngredients": [
      "chicken",
      "broccoli",
      "mushrooms",
      "sour cream",
      "cheese",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Lebanese Carrots",
    "mainIngredients": [
      "carrots",
      "onion",
      "lettuce",
      "tomatoes"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "1440 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Mexican Cornbread",
    "mainIngredients": [
      "cheese",
      "corn",
      "onion",
      "bell-peppers",
      "eggs"
    ],
    "optionalStaples": [
      "oil",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, corn, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Italian Style Meat Loaf",
    "mainIngredients": [
      "ground beef",
      "sausage",
      "tomatoes",
      "bread",
      "onion",
      "bell-peppers",
      "eggs"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, sausage, tomatoes, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Southwest Taco Dip",
    "mainIngredients": [
      "black beans",
      "turkey",
      "onion",
      "cheese",
      "sour cream",
      "avocado",
      "tomatoes",
      "lettuce",
      "tortilla"
    ],
    "optionalStaples": [
      "chili powder",
      "salsa",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "2 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (black beans, turkey, onion, cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Orange Roughy Fillets",
    "mainIngredients": [
      "orange",
      "onion",
      "butter"
    ],
    "optionalStaples": [
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (orange, onion, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fresh Tomato Aspic",
    "mainIngredients": [
      "chicken",
      "tomatoes",
      "lemon",
      "green onion",
      "cucumber",
      "lettuce"
    ],
    "optionalStaples": [
      "salt",
      "hot sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, tomatoes, lemon, green onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Strawberry Smoothie",
    "mainIngredients": [
      "banana",
      "strawberry",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (banana, strawberry, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Asparagus Casserole",
    "mainIngredients": [
      "cheese",
      "mushrooms",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "7 Layer Dish",
    "mainIngredients": [
      "potatoes",
      "carrots",
      "celery",
      "peas",
      "rice",
      "tomatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Inside Out Ravioli",
    "mainIngredients": [
      "onion",
      "spinach",
      "mushrooms",
      "pasta",
      "cheese",
      "bread",
      "eggs"
    ],
    "optionalStaples": [
      "garlic powder",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, spinach, mushrooms, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spinach Cheese Casserole",
    "mainIngredients": [
      "pasta",
      "butter",
      "mushrooms",
      "onion",
      "spinach",
      "cheese",
      "sour cream"
    ],
    "optionalStaples": [
      "oregano",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, butter, mushrooms, onion) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Japanese Fried Rice",
    "mainIngredients": [
      "rice",
      "ground beef",
      "carrots",
      "lettuce"
    ],
    "optionalStaples": [
      "salt",
      "spices",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Rice Bowl",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, ground beef, carrots, lettuce) for a Rice Bowl style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Peek Chicken",
    "mainIngredients": [
      "celery",
      "rice",
      "chicken",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Green Bean Salad",
    "mainIngredients": [
      "lettuce",
      "kidney beans",
      "beans",
      "onion"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "black-pepper",
      "oil",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Missouri Casserole",
    "mainIngredients": [
      "potatoes",
      "onion",
      "ground beef",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, onion, ground beef, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fresh Apple Pound Cake",
    "mainIngredients": [
      "corn",
      "eggs",
      "apple",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, eggs, apple, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sugar-Free Peanut Butter Pie",
    "mainIngredients": [
      "peanut butter",
      "milk",
      "yogurt"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peanut butter, milk, yogurt) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Barbecue Sauce Meatballs",
    "mainIngredients": [
      "ground beef",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Honey'S Hominy Soup",
    "mainIngredients": [
      "onion",
      "lettuce",
      "butter",
      "tomatoes"
    ],
    "optionalStaples": [
      "broth",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Stuffed Cabbage",
    "mainIngredients": [
      "onion",
      "ground beef",
      "rice",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "garlic powder",
      "salt",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, ground beef, rice, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pizza Dip",
    "mainIngredients": [
      "ground beef",
      "onion",
      "garlic",
      "cheese",
      "cream cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "ketchup",
      "sugar",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, garlic, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef And Potato Casserole",
    "mainIngredients": [
      "potatoes",
      "ground beef",
      "broccoli",
      "onion",
      "celery",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "garlic powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tuna-Noodle Casserole",
    "mainIngredients": [
      "noodles",
      "mushrooms",
      "milk",
      "sour cream",
      "tuna",
      "peas",
      "onion",
      "garlic"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Night Before Coffee Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Summer Pickles",
    "mainIngredients": [
      "celery",
      "garlic",
      "onion"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (celery, garlic, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blueberry Breakfast Bread",
    "mainIngredients": [
      "orange",
      "cheese",
      "blueberries",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (orange, cheese, blueberries, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spinach Pie",
    "mainIngredients": [
      "onion",
      "garlic",
      "spinach",
      "cheese",
      "tomatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, garlic, spinach, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Yum Yum Coffee Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Macaroni Beef And Cheese Casserole",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "mustard",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, pasta, cheese) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Nut Bread",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "banana"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hamburger Casserole",
    "mainIngredients": [
      "onion",
      "lettuce",
      "garlic",
      "eggs",
      "cream cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "ketchup",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, lettuce, garlic, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Manhattan Clam Chowder",
    "mainIngredients": [
      "butter",
      "bacon",
      "onion",
      "celery",
      "lettuce",
      "garlic",
      "potatoes",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Broiled Herbed Tomatoes",
    "mainIngredients": [
      "tomatoes",
      "butter",
      "bread"
    ],
    "optionalStaples": [
      "basil",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "12 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, butter, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Orange Slice Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fruitcake Cookies",
    "mainIngredients": [
      "lettuce",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Breakfast Casserole(Serves 8)",
    "mainIngredients": [
      "rice",
      "ground beef",
      "onion",
      "sausage",
      "mushrooms"
    ],
    "optionalStaples": [
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, ground beef, onion, sausage) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bertha'S Macaroni Delight",
    "mainIngredients": [
      "onion",
      "butter",
      "celery",
      "milk",
      "cheese",
      "pasta",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Zucchini Casserole",
    "mainIngredients": [
      "eggs",
      "onion",
      "zucchini",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "oil",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, onion, zucchini, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Puppy Chow",
    "mainIngredients": [
      "butter",
      "peanut butter",
      "rice"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, peanut butter, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cucumber Relish",
    "mainIngredients": [
      "cucumber",
      "onion",
      "garlic",
      "bell-peppers"
    ],
    "optionalStaples": [
      "salt",
      "vinegar",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cucumber, onion, garlic, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Light And Dark",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cream cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jicama Sun Delight(Appetizer)",
    "mainIngredients": [
      "cucumber",
      "orange",
      "lemon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cucumber, orange, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hidden Valley Ranch Oyster Crackers",
    "mainIngredients": [
      "milk",
      "crackers",
      "lemon"
    ],
    "optionalStaples": [
      "oil",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Breakfast Casserole",
    "mainIngredients": [
      "bread",
      "cheese",
      "eggs",
      "sausage"
    ],
    "optionalStaples": [
      "salt",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (bread, cheese, eggs, sausage) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Strawberry Fluff",
    "mainIngredients": [
      "cream cheese",
      "strawberry",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, strawberry, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Old-Fashioned Scalloped Potatoes",
    "mainIngredients": [
      "potatoes",
      "milk",
      "butter",
      "onion"
    ],
    "optionalStaples": [
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, milk, butter, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bee Sting Buns(Makes 16 Buns)",
    "mainIngredients": [
      "cream cheese",
      "butter",
      "orange"
    ],
    "optionalStaples": [
      "sugar",
      "honey"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cream cheese, butter, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Meatless Lasagna",
    "mainIngredients": [
      "noodles",
      "pasta",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [
      "onion powder",
      "garlic powder",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (noodles, pasta, cheese, eggs) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheddar Chowder",
    "mainIngredients": [
      "potatoes",
      "celery",
      "butter",
      "milk",
      "cheese",
      "carrots",
      "onion",
      "ham"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Crab Spread(Appetizer)",
    "mainIngredients": [
      "cream cheese",
      "lemon",
      "garlic"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, lemon, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crispy Baked Onion Rings",
    "mainIngredients": [
      "onion",
      "corn",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "sugar",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, corn, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Rice Krispie Bars",
    "mainIngredients": [
      "peanut butter",
      "corn",
      "rice"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peanut butter, corn, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salad Soup",
    "mainIngredients": [
      "garlic",
      "lemon",
      "tomatoes",
      "cucumber",
      "lettuce",
      "carrots",
      "celery",
      "green onion"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Oyster Cracker Snack",
    "mainIngredients": [
      "crackers",
      "lemon",
      "garlic"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, lemon, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Salmon Casserole",
    "mainIngredients": [
      "mushrooms",
      "milk",
      "peas",
      "potatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tofu Foo Yong",
    "mainIngredients": [
      "peas",
      "lettuce",
      "beans",
      "tofu"
    ],
    "optionalStaples": [
      "soy sauce",
      "flour",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peas, lettuce, beans, tofu) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chickpea Spread On Baguette",
    "mainIngredients": [
      "chickpeas",
      "sour cream",
      "garlic",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chickpeas, sour cream, garlic, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick One Dish Meal",
    "mainIngredients": [
      "pasta",
      "lettuce",
      "tuna",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, lettuce, tuna, onion) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bean Dip",
    "mainIngredients": [
      "ground beef",
      "onion",
      "beans",
      "sour cream",
      "cheese"
    ],
    "optionalStaples": [
      "spices",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, beans, sour cream) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Prune Whip Pie",
    "mainIngredients": [
      "lemon",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Breakfast Bars",
    "mainIngredients": [
      "peanut butter",
      "milk",
      "orange"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peanut butter, milk, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salmon Patties For Two",
    "mainIngredients": [
      "crackers",
      "eggs",
      "onion",
      "celery",
      "lemon"
    ],
    "optionalStaples": [
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, eggs, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese Squash",
    "mainIngredients": [
      "onion",
      "cheese",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "paprika",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, cheese, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Roasted Potatoes",
    "mainIngredients": [
      "onion",
      "butter",
      "potatoes"
    ],
    "optionalStaples": [
      "oil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Spinach Balls",
    "mainIngredients": [
      "spinach",
      "onion",
      "eggs",
      "butter",
      "cheese",
      "garlic"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (spinach, onion, eggs, butter) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Italian Pasta And Bean Soup(Pasta E Fagioli)",
    "mainIngredients": [
      "garlic",
      "tomatoes",
      "beans",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [
      "oil",
      "broth",
      "salt",
      "black-pepper",
      "basil",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cabbage Patch Stew",
    "mainIngredients": [
      "celery",
      "tomatoes",
      "onion",
      "bell-peppers",
      "beans",
      "kidney beans"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "V. Mc'S Chicken And Broccoli",
    "mainIngredients": [
      "butter",
      "chicken",
      "broccoli",
      "milk"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Stuffed Luncheon Loaf",
    "mainIngredients": [
      "pasta",
      "ham",
      "cheese",
      "bread",
      "onion",
      "chicken"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Shepherd'S Pie",
    "mainIngredients": [
      "garlic",
      "onion",
      "cheese",
      "butter"
    ],
    "optionalStaples": [
      "oil",
      "tomato sauce",
      "oregano",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (garlic, onion, cheese, butter) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Barbecued Spoonburgers",
    "mainIngredients": [
      "ground beef",
      "bell-peppers",
      "tomatoes",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "ketchup",
      "black-pepper",
      "chili powder",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, bell-peppers, tomatoes, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Indoor S'Mores",
    "mainIngredients": [
      "corn",
      "butter",
      "milk",
      "cereal"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, butter, milk, cereal) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Eugene'S Chicken",
    "mainIngredients": [
      "cream cheese",
      "chicken",
      "mushrooms",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Easy Chicken Gumbo",
    "mainIngredients": [
      "chicken",
      "tomatoes",
      "onion",
      "garlic",
      "bell-peppers"
    ],
    "optionalStaples": [
      "basil",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "American",
    "estimatedTime": "480 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, tomatoes, onion, garlic) for a American style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Old Fashioned Chocolate Pie",
    "mainIngredients": [
      "milk",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "One Dish Chicken Dinner",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "celery",
      "rice"
    ],
    "optionalStaples": [
      "broth",
      "black-pepper",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "1-2-3-4 Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Bake Peanut Butter Cookies",
    "mainIngredients": [
      "milk",
      "oats",
      "peanut butter"
    ],
    "optionalStaples": [
      "honey"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, oats, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Carrots A La Orange",
    "mainIngredients": [
      "carrots",
      "butter",
      "orange"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (carrots, butter, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bread And Butter Pickles",
    "mainIngredients": [
      "onion",
      "cucumber",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "vinegar",
      "sugar",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, cucumber, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No Crust Coconut Pie",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Low-Fat Mexican Dip",
    "mainIngredients": [
      "yogurt",
      "beans",
      "cheese",
      "bell-peppers"
    ],
    "optionalStaples": [
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (yogurt, beans, cheese, bell-peppers) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Barbecue Sauce",
    "mainIngredients": [
      "corn",
      "celery",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "ketchup",
      "mustard",
      "hot sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, celery, onion, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Summer Chicken Salad",
    "mainIngredients": [
      "chicken",
      "celery",
      "green onion"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Foolproof Hollandaise",
    "mainIngredients": [
      "eggs",
      "lemon",
      "butter"
    ],
    "optionalStaples": [
      "salt",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, lemon, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese And Pasta",
    "mainIngredients": [
      "ground beef",
      "onion",
      "garlic",
      "pasta",
      "tomatoes",
      "mushrooms",
      "sour cream",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, garlic, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Caesar Salad",
    "mainIngredients": [
      "cheese",
      "garlic",
      "lettuce"
    ],
    "optionalStaples": [
      "vinegar",
      "olive oil",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Ruth'S Jello Salad",
    "mainIngredients": [
      "strawberry",
      "banana",
      "apple"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chocolate Sour Cream Pound Cake",
    "mainIngredients": [
      "eggs",
      "sour cream",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, sour cream, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Doug Cooper'S Polynesian Black Bean Soup",
    "mainIngredients": [
      "beans",
      "tomatoes",
      "onion",
      "garlic",
      "chicken"
    ],
    "optionalStaples": [
      "broth",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Golden Cream Potato Soup",
    "mainIngredients": [
      "potatoes",
      "celery",
      "carrots",
      "onion",
      "chicken",
      "milk",
      "cheese",
      "broccoli",
      "bacon"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cheese Squares",
    "mainIngredients": [
      "bread",
      "cheese",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, cheese, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mother'S Pound Cake",
    "mainIngredients": [
      "eggs",
      "milk",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, milk, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef Stew By Sylvia",
    "mainIngredients": [
      "onion",
      "celery",
      "potatoes",
      "carrots"
    ],
    "optionalStaples": [
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "300 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Baked Pineapple",
    "mainIngredients": [
      "eggs",
      "butter",
      "bread"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bacon-Flavored Chicken Breasts",
    "mainIngredients": [
      "chicken",
      "bacon",
      "mushrooms",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Rice Salad(Great Switch From Potato Salad)",
    "mainIngredients": [
      "rice",
      "celery",
      "onion",
      "eggs",
      "cucumber"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Creamed Tacos",
    "mainIngredients": [
      "ground beef",
      "onion",
      "bell-peppers",
      "tomatoes",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (ground beef, onion, bell-peppers, tomatoes) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Spinach Patties",
    "mainIngredients": [
      "chicken",
      "bread",
      "spinach",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, bread, spinach, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken-Mexican Casserole",
    "mainIngredients": [
      "chicken",
      "onion",
      "tomatoes",
      "corn",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chocolate Pudding Or Pie Filling",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Taco Salad(Easier For Kids To Eat Than Traditional Tacos)",
    "mainIngredients": [
      "onion",
      "lettuce",
      "corn",
      "cheese",
      "tomatoes"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Au Gratin Potatoes",
    "mainIngredients": [
      "potatoes",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "oil",
      "garlic powder",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, onion, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken And Rice Casserole",
    "mainIngredients": [
      "rice",
      "onion",
      "mushrooms",
      "chicken"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Burrito Bake",
    "mainIngredients": [
      "beans",
      "ground beef",
      "avocado",
      "cheese"
    ],
    "optionalStaples": [
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (beans, ground beef, avocado, cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Big Boy Sandwich(Poor Boy Sub)",
    "mainIngredients": [
      "bread",
      "sausage",
      "ham",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise",
      "ketchup",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, sausage, ham, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pepper Steak",
    "mainIngredients": [
      "tomatoes",
      "lettuce",
      "garlic"
    ],
    "optionalStaples": [
      "oil",
      "soy sauce",
      "black-pepper",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, lettuce, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Swiss Vegetable Medley",
    "mainIngredients": [
      "carrots",
      "mushrooms",
      "cheese",
      "sour cream",
      "onion"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Italian Style Duck",
    "mainIngredients": [
      "onion",
      "mushrooms",
      "butter",
      "cheese",
      "pasta",
      "garlic"
    ],
    "optionalStaples": [
      "tomato sauce",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (onion, mushrooms, butter, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese Roll-Ups",
    "mainIngredients": [
      "cream cheese",
      "cheese",
      "celery",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chocolate Pistachio Cake",
    "mainIngredients": [
      "orange",
      "eggs",
      "lettuce"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (orange, eggs, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Boiled Cookies",
    "mainIngredients": [
      "butter",
      "milk",
      "peanut butter",
      "oats"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, peanut butter, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Silky Peanut Butter Fudge",
    "mainIngredients": [
      "milk",
      "butter",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (milk, butter, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Onion-Cheese Bread",
    "mainIngredients": [
      "onion",
      "eggs",
      "milk",
      "cheese",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, eggs, milk, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Roast Pork",
    "mainIngredients": [
      "ham",
      "celery",
      "garlic"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ham, celery, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef Burgundy",
    "mainIngredients": [
      "onion",
      "carrots",
      "garlic",
      "mushrooms",
      "peas"
    ],
    "optionalStaples": [
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, carrots, garlic, mushrooms) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Cake",
    "mainIngredients": [
      "eggs",
      "banana",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, banana, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ho-Ho Cake(Deep Dark Chocolate Ho-Ho Cake)",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Sausage And Cheese",
    "mainIngredients": [
      "bread",
      "cheese",
      "sausage",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "spices",
      "mustard",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, cheese, sausage, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Gourmet Meatballs",
    "mainIngredients": [
      "ground beef",
      "cheese",
      "garlic",
      "bread",
      "eggs",
      "pasta"
    ],
    "optionalStaples": [
      "basil",
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, cheese, garlic, bread) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Eggplant Casserole",
    "mainIngredients": [
      "crackers",
      "eggs",
      "cheese",
      "milk"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, eggs, cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Golden Cream Soup",
    "mainIngredients": [
      "potatoes",
      "celery",
      "onion",
      "chicken",
      "milk",
      "carrots",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cheesy Vegetable Chowder",
    "mainIngredients": [
      "onion",
      "garlic",
      "celery",
      "carrots",
      "potatoes",
      "corn",
      "butter",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "broth",
      "flour",
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Evening Delight Hamburger Stew",
    "mainIngredients": [
      "ground beef",
      "onion",
      "potatoes"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "7 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Baked Fish Fillets",
    "mainIngredients": [
      "lemon",
      "butter",
      "milk",
      "bread"
    ],
    "optionalStaples": [
      "paprika",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, butter, milk, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Texan Chowder",
    "mainIngredients": [
      "potatoes",
      "carrots",
      "onion",
      "celery",
      "butter",
      "milk",
      "cheese",
      "corn"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "broth",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "The Lady'S Cheesy Mac",
    "mainIngredients": [
      "pasta",
      "cheese",
      "eggs",
      "sour cream",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, cheese, eggs, sour cream) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bacon Corn Chowder",
    "mainIngredients": [
      "bacon",
      "potatoes",
      "onion",
      "corn",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Mama'S Fruit Cake",
    "mainIngredients": [
      "lemon",
      "orange",
      "butter",
      "strawberry"
    ],
    "optionalStaples": [
      "cinnamon",
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, orange, butter, strawberry) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Rye Rounds",
    "mainIngredients": [
      "cheese",
      "bread",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, bread, onion) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Central American Rice",
    "mainIngredients": [
      "rice",
      "onion",
      "tomatoes",
      "chicken"
    ],
    "optionalStaples": [
      "oil",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, onion, tomatoes, chicken) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sour Cream Frosting",
    "mainIngredients": [
      "milk",
      "butter",
      "sour cream"
    ],
    "optionalStaples": [
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blended Gazpacho",
    "mainIngredients": [
      "garlic",
      "tomatoes",
      "onion",
      "lettuce",
      "cucumber",
      "eggs",
      "butter",
      "bread"
    ],
    "optionalStaples": [
      "vinegar",
      "salt",
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Beans, Beans, Beans!",
    "mainIngredients": [
      "bacon",
      "onion",
      "garlic",
      "butter",
      "beans",
      "kidney beans"
    ],
    "optionalStaples": [
      "sugar",
      "mustard",
      "vinegar",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bacon, onion, garlic, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Veal With Mushrooms And Peppers",
    "mainIngredients": [
      "mushrooms",
      "bell-peppers",
      "garlic",
      "rice"
    ],
    "optionalStaples": [
      "olive oil",
      "flour",
      "oregano",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (mushrooms, bell-peppers, garlic, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Broccoli Casserole",
    "mainIngredients": [
      "broccoli",
      "chicken",
      "cheese",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Oven Fried Chicken",
    "mainIngredients": [
      "chicken",
      "yogurt",
      "garlic",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "55 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, yogurt, garlic, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Raw Apple Bread",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "apple"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Cake(Low Calorie-160 Per Slice)",
    "mainIngredients": [
      "peanut butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (peanut butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sour Cream Apple Cake",
    "mainIngredients": [
      "butter",
      "sour cream",
      "eggs",
      "apple"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, sour cream, eggs, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Potato Salad",
    "mainIngredients": [
      "potatoes",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Quiche Lorraine",
    "mainIngredients": [
      "cheese",
      "bacon",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "black-pepper",
      "mustard",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, bacon, eggs, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sour Cream Noodle Bake(Serves 6)",
    "mainIngredients": [
      "eggs",
      "butter",
      "garlic",
      "cottage cheese",
      "sour cream",
      "green onion",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, butter, garlic, cottage cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Italian Pasta Salad",
    "mainIngredients": [
      "pasta",
      "lettuce",
      "cheese",
      "onion",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Japanese Fruit Cake",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peach Pie",
    "mainIngredients": [
      "milk",
      "lemon",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, lemon, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Rice Cooker Shrimp",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "rice"
    ],
    "optionalStaples": [
      "broth",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, bell-peppers, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "All-Purpose Sauce",
    "mainIngredients": [
      "onion",
      "garlic",
      "tomatoes"
    ],
    "optionalStaples": [
      "oil",
      "salt",
      "sugar",
      "oregano",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, garlic, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Very Cheese-Y Macaroni",
    "mainIngredients": [
      "pasta",
      "broccoli",
      "butter",
      "milk",
      "cheese",
      "bread"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "3 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, broccoli, butter, milk) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tamale Bake Casserole",
    "mainIngredients": [
      "corn",
      "garlic",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (corn, garlic, cheese, eggs) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Macaroni Casserole",
    "mainIngredients": [
      "butter",
      "milk",
      "pasta",
      "broccoli",
      "cheese"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, pasta, broccoli) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Potato, Pimento Casserole",
    "mainIngredients": [
      "potatoes",
      "chicken",
      "milk",
      "cheese",
      "onion",
      "bread"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cream Of Celery Soup",
    "mainIngredients": [
      "celery",
      "onion",
      "garlic",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Lemon Fluff",
    "mainIngredients": [
      "milk",
      "lemon",
      "crackers",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, lemon, crackers, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken And Rice",
    "mainIngredients": [
      "rice",
      "celery",
      "chicken",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Four-Inch Cheese Ball",
    "mainIngredients": [
      "cheese",
      "garlic",
      "cream cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Poppy Seed Chicken",
    "mainIngredients": [
      "chicken",
      "sour cream",
      "lemon",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Nadiola'S Cinnamon Coffee Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Refrigerator Pickles",
    "mainIngredients": [
      "cucumber",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cucumber, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Avocado-Beef Tortilla Pizza",
    "mainIngredients": [
      "ground beef",
      "garlic",
      "mushrooms",
      "lettuce",
      "tortilla",
      "avocado",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, garlic, mushrooms, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Philadelphia Cream Cheese Ball",
    "mainIngredients": [
      "cream cheese",
      "ham",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, ham, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheddar Chicken Surprise",
    "mainIngredients": [
      "chicken",
      "cheese",
      "ham",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "oil",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, cheese, ham, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Open House Salad",
    "mainIngredients": [
      "apple",
      "milk",
      "lettuce",
      "onion",
      "strawberry"
    ],
    "optionalStaples": [
      "mayonnaise",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Spicy Pot Roast",
    "mainIngredients": [
      "garlic",
      "carrots",
      "potatoes",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (garlic, carrots, potatoes, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Cacciatore",
    "mainIngredients": [
      "chicken",
      "onion",
      "lettuce",
      "celery",
      "tomatoes"
    ],
    "optionalStaples": [
      "olive oil",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Mediterranean",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, onion, lettuce, celery) for a Mediterranean style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Copper Penny Salad",
    "mainIngredients": [
      "carrots",
      "tomatoes",
      "onion",
      "lettuce"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "vinegar",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken Pilaf",
    "mainIngredients": [
      "mushrooms",
      "onion",
      "rice",
      "chicken",
      "butter"
    ],
    "optionalStaples": [
      "salt",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Shrimp Scampi",
    "mainIngredients": [
      "butter",
      "garlic",
      "lemon"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, garlic, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Dish",
    "mainIngredients": [
      "broccoli",
      "butter",
      "mushrooms",
      "chicken",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Lorene'S Cornbread Salad",
    "mainIngredients": [
      "beans",
      "lettuce",
      "onion",
      "tomatoes",
      "bacon"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Beef Stroganoff Sandwich",
    "mainIngredients": [
      "ground beef",
      "onion",
      "sour cream",
      "tomatoes",
      "cheese",
      "bread"
    ],
    "optionalStaples": [
      "garlic powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, sour cream, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef And Broccoli Over Noodles",
    "mainIngredients": [
      "garlic",
      "onion",
      "broccoli",
      "noodles"
    ],
    "optionalStaples": [
      "oil",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Salmon Loaf",
    "mainIngredients": [
      "eggs",
      "onion",
      "bread",
      "lemon",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, onion, bread, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Vegetables Tamale",
    "mainIngredients": [
      "corn",
      "tomatoes",
      "cheese",
      "bell-peppers",
      "onion",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (corn, tomatoes, cheese, bell-peppers) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Veggie Pizza",
    "mainIngredients": [
      "cottage cheese",
      "cream cheese",
      "tomatoes"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cottage cheese, cream cheese, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pork Chops With Scalloped Potatoes",
    "mainIngredients": [
      "potatoes",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, onion, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Potatoes Au Gratin",
    "mainIngredients": [
      "potatoes",
      "cheese",
      "onion",
      "bacon"
    ],
    "optionalStaples": [
      "mayonnaise",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, cheese, onion, bacon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Oriental Rice",
    "mainIngredients": [
      "rice",
      "butter",
      "mushrooms",
      "onion"
    ],
    "optionalStaples": [
      "soy sauce",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, butter, mushrooms, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bananas 'N' Cream Cake",
    "mainIngredients": [
      "eggs",
      "banana",
      "sour cream"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, banana, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Microwave Ham Roll-Ups",
    "mainIngredients": [
      "cheese",
      "ham",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, ham, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sausage Dressing",
    "mainIngredients": [
      "sausage",
      "celery",
      "onion",
      "bread"
    ],
    "optionalStaples": [
      "spices",
      "black-pepper",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, celery, onion, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Barbarakuchen(German Lemon Cake)",
    "mainIngredients": [
      "butter",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "75 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Fruit Toddy",
    "mainIngredients": [
      "apple",
      "orange",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (apple, orange, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Nikki'S No Bake Cookies",
    "mainIngredients": [
      "milk",
      "butter",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Red Fox Tomato Pudding",
    "mainIngredients": [
      "tomatoes",
      "butter",
      "bread"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, butter, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cocido Castellano(Castillian Bean Soup; One Pot Meal)",
    "mainIngredients": [
      "chickpeas",
      "ham",
      "sausage",
      "onion",
      "bacon",
      "pasta",
      "lemon"
    ],
    "optionalStaples": [
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cream Of Broccoli Soup",
    "mainIngredients": [
      "broccoli",
      "butter",
      "carrots",
      "celery",
      "milk",
      "mushrooms",
      "cheese"
    ],
    "optionalStaples": [
      "broth",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Toasted Herb Bread",
    "mainIngredients": [
      "bread",
      "cheese",
      "butter"
    ],
    "optionalStaples": [
      "oregano",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, cheese, butter) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Shrimp Rice",
    "mainIngredients": [
      "bacon",
      "onion",
      "celery",
      "rice"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bacon, onion, celery, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tuna Cheese Spread",
    "mainIngredients": [
      "cottage cheese",
      "cream cheese",
      "tuna",
      "onion"
    ],
    "optionalStaples": [
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cottage cheese, cream cheese, tuna, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Schoolhouse Peanut Butter Cookies",
    "mainIngredients": [
      "peanut butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peanut butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Tomato Hamburger With Rice",
    "mainIngredients": [
      "ground beef",
      "rice",
      "tomatoes",
      "lettuce",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, rice, tomatoes, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lots Of Vegetable Soup",
    "mainIngredients": [
      "tomatoes",
      "lettuce",
      "carrots",
      "celery",
      "potatoes",
      "onion",
      "rice",
      "garlic",
      "mushrooms"
    ],
    "optionalStaples": [
      "broth",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Swiss 'N Chicken Casserole",
    "mainIngredients": [
      "chicken",
      "celery",
      "cheese",
      "milk",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, celery, cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Green Goddess Mold",
    "mainIngredients": [
      "lemon",
      "chicken",
      "lettuce",
      "celery"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Hot Chicken Salad",
    "mainIngredients": [
      "chicken",
      "potatoes",
      "celery",
      "onion",
      "mushrooms",
      "lemon"
    ],
    "optionalStaples": [
      "salt",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tuna-Tater Tempters",
    "mainIngredients": [
      "potatoes",
      "tuna",
      "eggs",
      "milk",
      "celery",
      "onion",
      "corn"
    ],
    "optionalStaples": [
      "salt",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, tuna, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Ham And Cheese Sandwiches",
    "mainIngredients": [
      "butter",
      "onion",
      "ham",
      "cheese"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, onion, ham, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheddar Potatoes",
    "mainIngredients": [
      "mushrooms",
      "potatoes",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Feelin' Energetic Cookies",
    "mainIngredients": [
      "carrots",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (carrots, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "John Ben Getty Casserole",
    "mainIngredients": [
      "ground beef",
      "onion",
      "bell-peppers",
      "noodles",
      "corn",
      "peas",
      "mushrooms",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "\"Cowbelle\" Special",
    "mainIngredients": [
      "ground beef",
      "tomatoes",
      "mushrooms",
      "pasta",
      "cheese",
      "lettuce"
    ],
    "optionalStaples": [
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Roman Holiday Casserole",
    "mainIngredients": [
      "pasta",
      "onion",
      "ground beef",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "tomato sauce",
      "hot sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, onion, ground beef, cheese) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Green Bean Bundles",
    "mainIngredients": [
      "lettuce",
      "bacon",
      "lemon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, bacon, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chili Con Queso Dip",
    "mainIngredients": [
      "tomatoes",
      "cheese",
      "onion"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Broccoli And Cauliflower Casserole",
    "mainIngredients": [
      "broccoli",
      "mushrooms",
      "cheese",
      "butter"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Layered Tuna Salad",
    "mainIngredients": [
      "lettuce",
      "tuna",
      "pasta",
      "tomatoes",
      "cucumber",
      "peas",
      "bacon",
      "cheese"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Chicken Divan Pot Pie",
    "mainIngredients": [
      "milk",
      "cheese",
      "chicken",
      "broccoli"
    ],
    "optionalStaples": [
      "flour",
      "black-pepper",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (milk, cheese, chicken, broccoli) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jim'S Breakfast Delight",
    "mainIngredients": [
      "eggs",
      "cottage cheese",
      "corn",
      "cheese",
      "green onion"
    ],
    "optionalStaples": [
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, cottage cheese, corn, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hello Dolly",
    "mainIngredients": [
      "butter",
      "crackers",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, crackers, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Zucchini Cake",
    "mainIngredients": [
      "eggs",
      "milk",
      "zucchini"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, zucchini) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Skillet Baked Beans",
    "mainIngredients": [
      "beans",
      "bacon",
      "bell-peppers",
      "onion"
    ],
    "optionalStaples": [
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (beans, bacon, bell-peppers, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Pie",
    "mainIngredients": [
      "crackers",
      "milk",
      "lemon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mixed Vegetable Bake",
    "mainIngredients": [
      "cream cheese",
      "milk",
      "potatoes",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, milk, potatoes, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Fudge Pie",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Casserole",
    "mainIngredients": [
      "cheese",
      "crackers",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, crackers, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fred'S Chicken Or Turkey Casserole",
    "mainIngredients": [
      "chicken",
      "celery",
      "onion",
      "lemon",
      "cheese",
      "corn"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, celery, onion, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salmon Party Ball",
    "mainIngredients": [
      "cream cheese",
      "lemon",
      "onion"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, lemon, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fancy Fried Green Tomatoes",
    "mainIngredients": [
      "sour cream",
      "green onion",
      "eggs",
      "lettuce"
    ],
    "optionalStaples": [
      "salt",
      "flour",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sour cream, green onion, eggs, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Potluck Potatoes",
    "mainIngredients": [
      "potatoes",
      "onion",
      "chicken",
      "butter",
      "cheese",
      "sour cream",
      "corn"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken Inspiration",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "cheese",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, mushrooms, cheese, milk) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Down East Blueberry Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "blueberries"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jalapeno Cheese Squares",
    "mainIngredients": [
      "cheese",
      "eggs",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, eggs, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Green Bean Cheesy",
    "mainIngredients": [
      "lettuce",
      "milk",
      "mushrooms",
      "cheese"
    ],
    "optionalStaples": [
      "garlic powder",
      "chili powder",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Macaroni Salad",
    "mainIngredients": [
      "pasta",
      "celery",
      "lettuce"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Easy Scalloped Potatoes",
    "mainIngredients": [
      "potatoes",
      "milk",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Salsa Sauce",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "garlic",
      "bell-peppers"
    ],
    "optionalStaples": [
      "black-pepper",
      "vinegar",
      "salt",
      "sugar",
      "cumin",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, garlic, bell-peppers) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Wholesome Oatmeal Biscuits",
    "mainIngredients": [
      "milk",
      "oats",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, oats, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "The Best Chocolate Chip Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Strawberry Bread",
    "mainIngredients": [
      "butter",
      "eggs",
      "strawberry"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, strawberry) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef, Beans And Dumplings",
    "mainIngredients": [
      "ground beef",
      "sausage",
      "onion",
      "garlic",
      "pasta",
      "beans",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "6 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, sausage, onion, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Spaghetti Sauce",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "butter",
      "mushrooms",
      "ground beef"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, butter, mushrooms) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Butterfinger Dessert",
    "mainIngredients": [
      "crackers",
      "lemon",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, lemon, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Noodle Soup Homemade",
    "mainIngredients": [
      "eggs",
      "chicken",
      "garlic"
    ],
    "optionalStaples": [
      "flour",
      "oil",
      "salt",
      "black-pepper",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Ground Turkey Kebabs(Microwave)",
    "mainIngredients": [
      "turkey",
      "onion",
      "lettuce",
      "tomatoes"
    ],
    "optionalStaples": [
      "tomato sauce",
      "soy sauce",
      "salt",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (turkey, onion, lettuce, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Meatballs For Spaghetti",
    "mainIngredients": [
      "ground beef",
      "oats",
      "milk",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "flour",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, oats, milk, eggs) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Buffalo Chicken Sandwiches",
    "mainIngredients": [
      "butter",
      "chicken",
      "tomatoes",
      "lettuce",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, chicken, tomatoes, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Macaroni And Cheese",
    "mainIngredients": [
      "pasta",
      "milk",
      "cheese",
      "bread",
      "butter"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, milk, cheese, bread) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sweet Nothings",
    "mainIngredients": [
      "butter",
      "peanut butter",
      "rice"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, peanut butter, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pepper Steak And Rice",
    "mainIngredients": [
      "rice",
      "butter",
      "garlic",
      "green onion",
      "lettuce",
      "tomatoes"
    ],
    "optionalStaples": [
      "paprika",
      "broth",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, butter, garlic, green onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mock Pizza Snack",
    "mainIngredients": [
      "cream cheese",
      "sausage",
      "lettuce",
      "tortilla",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cream cheese, sausage, lettuce, tortilla) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cracker Snacks",
    "mainIngredients": [
      "crackers",
      "garlic",
      "lemon"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, garlic, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Impossible Ham 'N Swiss Pie",
    "mainIngredients": [
      "ham",
      "cheese",
      "green onion",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ham, cheese, green onion, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tater Wedges With Cheese",
    "mainIngredients": [
      "potatoes",
      "lettuce",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, lettuce, tomatoes, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham Casserole",
    "mainIngredients": [
      "ham",
      "eggs",
      "mushrooms",
      "milk",
      "celery",
      "onion",
      "cheese",
      "bell-peppers"
    ],
    "optionalStaples": [
      "paprika",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Irish Potato Cake",
    "mainIngredients": [
      "butter",
      "potatoes",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, potatoes, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Honolulu Chicken",
    "mainIngredients": [
      "chicken",
      "onion",
      "bell-peppers",
      "carrots"
    ],
    "optionalStaples": [
      "oil",
      "flour",
      "black-pepper",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, onion, bell-peppers, carrots) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Bars",
    "mainIngredients": [
      "lemon",
      "butter",
      "eggs",
      "cream cheese"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, butter, eggs, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mike'S Fried Rice",
    "mainIngredients": [
      "rice",
      "green onion",
      "chicken",
      "eggs"
    ],
    "optionalStaples": [
      "oil",
      "soy sauce",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Rice Bowl",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (rice, green onion, chicken, eggs) for a Rice Bowl style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Shrimp Casserole",
    "mainIngredients": [
      "mushrooms",
      "butter",
      "rice",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (mushrooms, butter, rice, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salmon Ball",
    "mainIngredients": [
      "cream cheese",
      "onion",
      "lemon"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (cream cheese, onion, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Veal Parmesan",
    "mainIngredients": [
      "cheese",
      "cottage cheese",
      "garlic"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, cottage cheese, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Swiss Chicken",
    "mainIngredients": [
      "chicken",
      "milk",
      "butter",
      "cheese"
    ],
    "optionalStaples": [
      "garlic powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Broccoli Cauliflower Salad",
    "mainIngredients": [
      "broccoli",
      "onion",
      "cheese",
      "bacon"
    ],
    "optionalStaples": [
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Crab Meat Bisque",
    "mainIngredients": [
      "celery",
      "milk",
      "broccoli",
      "butter"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Virginia'S Christmas Salad",
    "mainIngredients": [
      "celery",
      "sour cream",
      "apple"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Cherry Dessert",
    "mainIngredients": [
      "crackers",
      "butter",
      "cream cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, butter, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Split Pea Soup",
    "mainIngredients": [
      "peas",
      "garlic",
      "onion",
      "carrots",
      "ham"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "240 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Quesadilla Party Wedges",
    "mainIngredients": [
      "cheese",
      "lettuce",
      "avocado",
      "lemon"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, lettuce, avocado, lemon) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ground Beef 'N Biscuits",
    "mainIngredients": [
      "ground beef",
      "onion",
      "corn",
      "cheese"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, corn, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Day Ahead Banana Pudding",
    "mainIngredients": [
      "milk",
      "sour cream",
      "banana"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, sour cream, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Monterey",
    "mainIngredients": [
      "chicken",
      "lettuce",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "oil",
      "flour",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sour Cream 'N Dill Chicken",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "onion",
      "sour cream",
      "lemon",
      "eggs"
    ],
    "optionalStaples": [
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Heavenly Onions",
    "mainIngredients": [
      "onion",
      "cheese",
      "bread",
      "milk",
      "butter",
      "chicken"
    ],
    "optionalStaples": [
      "black-pepper",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Top Secret Dressing",
    "mainIngredients": [
      "milk",
      "cheese",
      "garlic"
    ],
    "optionalStaples": [
      "vinegar",
      "italian seasoning",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, cheese, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham And Cheese Americana",
    "mainIngredients": [
      "sour cream",
      "ham",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sour cream, ham, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "3 Cheese Chicken Bake",
    "mainIngredients": [
      "noodles",
      "onion",
      "bell-peppers",
      "chicken",
      "mushrooms",
      "milk",
      "cottage cheese",
      "cheese"
    ],
    "optionalStaples": [
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (noodles, onion, bell-peppers, chicken) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese Manicotti",
    "mainIngredients": [
      "onion",
      "cheese",
      "garlic",
      "tomatoes",
      "eggs"
    ],
    "optionalStaples": [
      "oil",
      "tomato sauce",
      "sugar",
      "salt",
      "black-pepper",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Corn Bread",
    "mainIngredients": [
      "corn",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (corn, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Noodle Casserole",
    "mainIngredients": [
      "ham",
      "tomatoes",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ham, tomatoes, eggs, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mushroom-Alfredo Sauce",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "cheese"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, mushrooms, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy Cucumber Salad",
    "mainIngredients": [
      "cottage cheese",
      "cucumber",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise",
      "vinegar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Margaret'S 7 Layer Cookies",
    "mainIngredients": [
      "crackers",
      "milk",
      "rice"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jan Sherrill'S Shrimp Salad",
    "mainIngredients": [
      "cucumber",
      "green onion",
      "lemon"
    ],
    "optionalStaples": [
      "olive oil",
      "cumin",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Baked Stuffed Mushrooms",
    "mainIngredients": [
      "mushrooms",
      "bread",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (mushrooms, bread, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crock-Pot Pepper Steak",
    "mainIngredients": [
      "garlic",
      "beans",
      "tomatoes",
      "lettuce"
    ],
    "optionalStaples": [
      "oil",
      "salt",
      "black-pepper",
      "soy sauce",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (garlic, beans, tomatoes, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese Sticks",
    "mainIngredients": [
      "cheese",
      "butter",
      "bell-peppers"
    ],
    "optionalStaples": [
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, butter, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef Noodle Casserole",
    "mainIngredients": [
      "cheese",
      "butter",
      "eggs",
      "onion",
      "cream cheese",
      "sour cream",
      "garlic"
    ],
    "optionalStaples": [
      "salt",
      "sugar",
      "black-pepper",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cheese, butter, eggs, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Salsa Chicken",
    "mainIngredients": [
      "chicken",
      "bread",
      "milk"
    ],
    "optionalStaples": [
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, bread, milk) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mozzarella Chicken",
    "mainIngredients": [
      "chicken",
      "butter",
      "cheese",
      "eggs",
      "bread"
    ],
    "optionalStaples": [
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, butter, cheese, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Grilled Ham Sandwich",
    "mainIngredients": [
      "cream cheese",
      "bread",
      "cheese",
      "ham"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, bread, cheese, ham) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Best Ever Banana Bread",
    "mainIngredients": [
      "butter",
      "eggs",
      "sour cream",
      "banana"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, sour cream, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mom'S Meat Loaf",
    "mainIngredients": [
      "ground beef",
      "crackers",
      "eggs",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "tomato sauce",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, crackers, eggs, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Golden Corn Bread",
    "mainIngredients": [
      "corn",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cheese Ring",
    "mainIngredients": [
      "cheese",
      "onion",
      "garlic",
      "bell-peppers",
      "strawberry"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, onion, garlic, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Souped Up Spaghetti",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "celery",
      "mushrooms",
      "tomatoes"
    ],
    "optionalStaples": [
      "oil",
      "salt",
      "black-pepper",
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cream Cheese Ball",
    "mainIngredients": [
      "cream cheese",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Shrimp Dip",
    "mainIngredients": [
      "cream cheese",
      "celery",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, celery, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hot Sauce",
    "mainIngredients": [
      "tomatoes",
      "lettuce",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "cumin",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, lettuce, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mom'S Oatmeal Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "cinnamon",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tortilla Soup",
    "mainIngredients": [
      "onion",
      "tomatoes",
      "lemon",
      "cheese"
    ],
    "optionalStaples": [
      "oil",
      "broth",
      "chili powder",
      "cumin",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Kraut Slaw",
    "mainIngredients": [
      "bell-peppers",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (bell-peppers, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chili Sauce",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "lettuce",
      "bell-peppers"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "cinnamon",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Sweet And Sour Chicken Wings",
    "mainIngredients": [
      "chicken",
      "eggs",
      "apple",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "ketchup",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, eggs, apple, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bacon Wraps",
    "mainIngredients": [
      "butter",
      "cheese",
      "bacon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cheese, bacon) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Sheet Pie",
    "mainIngredients": [
      "eggs",
      "cream cheese",
      "sour cream"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, cream cheese, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cranberry Relish",
    "mainIngredients": [
      "orange",
      "lemon",
      "celery"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (orange, lemon, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Vegetable Casserole",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "milk",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Salmon Noodle Romanoff",
    "mainIngredients": [
      "eggs",
      "sour cream",
      "mushrooms",
      "cottage cheese",
      "green onion",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, sour cream, mushrooms, cottage cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Quiche",
    "mainIngredients": [
      "cheese",
      "onion",
      "eggs",
      "milk",
      "tomatoes"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, onion, eggs, milk) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Championship Chocolate Chip Bars",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crab Dip",
    "mainIngredients": [
      "sour cream",
      "cream cheese",
      "lemon"
    ],
    "optionalStaples": [
      "mayonnaise",
      "onion powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sour cream, cream cheese, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn-Cheese Delight",
    "mainIngredients": [
      "corn",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, milk, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Delight",
    "mainIngredients": [
      "chicken",
      "cheese",
      "mushrooms",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Oatmeal Cookie Candy",
    "mainIngredients": [
      "milk",
      "butter",
      "peanut butter",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, peanut butter, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Three Bean Casserole",
    "mainIngredients": [
      "kidney beans",
      "lettuce",
      "beans",
      "onion",
      "ground beef"
    ],
    "optionalStaples": [
      "sugar",
      "chili powder",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (kidney beans, lettuce, beans, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "White Chip Orange Dream Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Italian Style Zucchini",
    "mainIngredients": [
      "bacon",
      "zucchini",
      "tomatoes",
      "carrots",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bacon, zucchini, tomatoes, carrots) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Supreme",
    "mainIngredients": [
      "chicken",
      "bacon",
      "mushrooms",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "180 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Shrimp With Rice",
    "mainIngredients": [
      "butter",
      "onion",
      "mushrooms",
      "bell-peppers",
      "rice"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, onion, mushrooms, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Curried Chicken Rice Salad",
    "mainIngredients": [
      "onion",
      "rice",
      "chicken",
      "celery",
      "lettuce"
    ],
    "optionalStaples": [
      "vinegar",
      "oil",
      "mayonnaise",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "1440 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Easy Sausage Casserole",
    "mainIngredients": [
      "sausage",
      "beans",
      "rice",
      "bell-peppers",
      "onion"
    ],
    "optionalStaples": [
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, beans, rice, bell-peppers) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Genoese Pesto",
    "mainIngredients": [
      "garlic",
      "cheese",
      "pasta"
    ],
    "optionalStaples": [
      "basil",
      "salt",
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (garlic, cheese, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cabbage Slaw(Low Calorie)",
    "mainIngredients": [
      "carrots",
      "celery",
      "onion"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (carrots, celery, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Chowder",
    "mainIngredients": [
      "corn",
      "bacon",
      "onion",
      "milk",
      "potatoes"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tangy Corn Salad",
    "mainIngredients": [
      "corn",
      "bell-peppers",
      "celery",
      "lettuce"
    ],
    "optionalStaples": [
      "vinegar",
      "oil",
      "sugar",
      "salt",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "480 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Heavenly Hamburger Dish",
    "mainIngredients": [
      "ground beef",
      "onion",
      "cheese",
      "mushrooms",
      "noodles"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "tomato sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, cheese, mushrooms) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mandarin Orange Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Curry",
    "mainIngredients": [
      "chicken",
      "onion",
      "mushrooms",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "oil",
      "sugar",
      "soy sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, onion, mushrooms, lemon) for a Indian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hamburger Stroganoff",
    "mainIngredients": [
      "ground beef",
      "onion",
      "butter",
      "garlic",
      "mushrooms",
      "chicken",
      "sour cream",
      "noodles"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tomato Dip",
    "mainIngredients": [
      "cream cheese",
      "sour cream",
      "tomatoes"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Golden Catfish Fillets",
    "mainIngredients": [
      "eggs",
      "milk",
      "corn"
    ],
    "optionalStaples": [
      "salt",
      "garlic powder",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, corn) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tuna Pasta Salad",
    "mainIngredients": [
      "yogurt",
      "lemon",
      "celery",
      "tuna",
      "peas",
      "bell-peppers",
      "green onion"
    ],
    "optionalStaples": [
      "honey",
      "vinegar",
      "paprika",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "12 min",
    "difficulty": "Medium",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Cauliflower And Broccoli Souflettes",
    "mainIngredients": [
      "broccoli",
      "rice",
      "milk",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (broccoli, rice, milk, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Everyday Meat Loaf",
    "mainIngredients": [
      "crackers",
      "milk",
      "ground beef",
      "eggs",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "sugar",
      "ketchup",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, ground beef, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Macaroni Cheddar Salad",
    "mainIngredients": [
      "celery",
      "bell-peppers",
      "pasta",
      "cheese",
      "onion"
    ],
    "optionalStaples": [
      "oil",
      "vinegar",
      "mayonnaise",
      "mustard",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sweet Potato Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "potatoes"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, eggs, potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Arkansas Cheese Ball",
    "mainIngredients": [
      "cheese",
      "cream cheese",
      "garlic"
    ],
    "optionalStaples": [
      "garlic powder",
      "mustard",
      "chili powder"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, cream cheese, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Delicious Pea And Bean Soup",
    "mainIngredients": [
      "ham",
      "peas",
      "onion",
      "carrots",
      "potatoes",
      "celery"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "180 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Easy Hamburger Stroganoff",
    "mainIngredients": [
      "ground beef",
      "onion",
      "garlic",
      "mushrooms",
      "chicken",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "8 Pound Golden Fruit Cake",
    "mainIngredients": [
      "lemon",
      "orange",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "cinnamon",
      "flour",
      "salt",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, orange, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jello Salad",
    "mainIngredients": [
      "strawberry",
      "banana",
      "cream cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Aunt Mamie'S Tomato Relish(Good To Put On Vegetables)",
    "mainIngredients": [
      "tomatoes",
      "bell-peppers",
      "onion"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "180 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (tomatoes, bell-peppers, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Microwave Caramels",
    "mainIngredients": [
      "butter",
      "corn",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, corn, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Banana Pudding",
    "mainIngredients": [
      "banana",
      "sour cream",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (banana, sour cream, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pepper, Tomato And Onion Stew",
    "mainIngredients": [
      "tomatoes",
      "butter",
      "lettuce",
      "bell-peppers",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "salt",
      "olive oil",
      "basil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "The Early'S 3-Layer Squash Casserole",
    "mainIngredients": [
      "onion",
      "sour cream",
      "crackers",
      "cheese",
      "butter"
    ],
    "optionalStaples": [
      "salt",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, sour cream, crackers, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Casserole 2",
    "mainIngredients": [
      "chicken",
      "rice",
      "eggs",
      "mushrooms",
      "celery",
      "onion",
      "lemon",
      "bread",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Broccoli Cheese Bake",
    "mainIngredients": [
      "broccoli",
      "eggs",
      "cheese",
      "tomatoes"
    ],
    "optionalStaples": [
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (broccoli, eggs, cheese, tomatoes) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bean Soup",
    "mainIngredients": [
      "peas",
      "beans",
      "kidney beans",
      "lettuce"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Strawberry Cream Cheese Cookies",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "strawberry"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "12 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cream cheese, strawberry) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Silk Pie",
    "mainIngredients": [
      "butter",
      "eggs",
      "crackers"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fresh Coconut Cake",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Enchilada Casserole",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "milk",
      "onion",
      "lettuce",
      "sour cream",
      "cheese",
      "corn"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, mushrooms, milk, onion) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Super Sloppy Joes",
    "mainIngredients": [
      "ground beef",
      "onion",
      "celery",
      "lettuce",
      "tomatoes",
      "garlic"
    ],
    "optionalStaples": [
      "ketchup",
      "sugar",
      "vinegar",
      "mustard",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, onion, celery, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Apple Pastry",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "eggs",
      "apple"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cream cheese, eggs, apple) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Strawberry Pretzel Salad",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "strawberry"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Candied Sweet Potatoes",
    "mainIngredients": [
      "corn",
      "butter",
      "sweet potatoes"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (corn, butter, sweet potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bacon Roll-Ups",
    "mainIngredients": [
      "bread",
      "bacon",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, bacon, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tomato Juice Cocktail",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "paprika",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Delicious Punch",
    "mainIngredients": [
      "strawberry",
      "orange",
      "lemon"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (strawberry, orange, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fat Burning Soup",
    "mainIngredients": [
      "green onion",
      "lettuce",
      "tomatoes",
      "celery",
      "carrots",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Yogurt Coffee Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "yogurt"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, yogurt) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Six Layer Dinner",
    "mainIngredients": [
      "potatoes",
      "corn",
      "onion",
      "ground beef",
      "carrots",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (potatoes, corn, onion, ground beef) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crab Meat Stew",
    "mainIngredients": [
      "onion",
      "butter",
      "mushrooms",
      "potatoes",
      "celery",
      "milk"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Mushroom Rice Casserole",
    "mainIngredients": [
      "mushrooms",
      "butter",
      "rice"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hamburger Hot Dish",
    "mainIngredients": [
      "mushrooms",
      "onion",
      "carrots",
      "potatoes"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "White Clam Sauce",
    "mainIngredients": [
      "garlic",
      "cheese",
      "pasta"
    ],
    "optionalStaples": [
      "olive oil",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (garlic, cheese, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Oven Porcupines",
    "mainIngredients": [
      "rice",
      "garlic",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "tomato sauce",
      "salt",
      "black-pepper",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, garlic, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Soda Cracker Bars",
    "mainIngredients": [
      "crackers",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "7 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "My Favorite Chocolate Cake",
    "mainIngredients": [
      "cream cheese",
      "sour cream",
      "eggs",
      "crackers"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (cream cheese, sour cream, eggs, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Corn Bread",
    "mainIngredients": [
      "corn",
      "broccoli",
      "onion",
      "eggs",
      "butter",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (corn, broccoli, onion, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Judias Estofadas(Pinto Bean Soup)",
    "mainIngredients": [
      "beans",
      "onion",
      "tomatoes",
      "garlic",
      "ham"
    ],
    "optionalStaples": [
      "olive oil",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Crispy Chicken With Asparagus Sauce",
    "mainIngredients": [
      "chicken",
      "eggs",
      "bread",
      "milk",
      "rice"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hot Fudge Sauce",
    "mainIngredients": [
      "milk",
      "corn",
      "butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, corn, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "\"Good Friday\" Vegetable Soup",
    "mainIngredients": [
      "butter",
      "carrots",
      "onion",
      "lettuce",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Bacon Spinach Roll-Ups",
    "mainIngredients": [
      "butter",
      "sausage",
      "cheese",
      "spinach",
      "eggs",
      "bacon"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, sausage, cheese, spinach) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Duchess Potatoes",
    "mainIngredients": [
      "potatoes",
      "butter",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, butter, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "7-Up Pound Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sugarless Banana Walnut Cake",
    "mainIngredients": [
      "banana",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (banana, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken And Asparagus Casserole Dish(A Good Company Dish)",
    "mainIngredients": [
      "chicken",
      "onion",
      "butter",
      "mushrooms",
      "milk",
      "cheese",
      "lettuce"
    ],
    "optionalStaples": [
      "soy sauce",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Krispy Krunch",
    "mainIngredients": [
      "eggs",
      "oats",
      "rice"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, oats, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Overnight Chicken Casserole",
    "mainIngredients": [
      "pasta",
      "milk",
      "celery",
      "mushrooms",
      "cheese",
      "chicken",
      "onion",
      "eggs"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Velvet Pound Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "lemon"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (butter, eggs, milk, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Coconut Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sweet Green Tomato Pickles",
    "mainIngredients": [
      "lettuce",
      "lime",
      "apple",
      "celery"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (lettuce, lime, apple, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bacon And Green Bean Casserole",
    "mainIngredients": [
      "lettuce",
      "mushrooms",
      "milk",
      "onion",
      "bacon"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken Tetrazzini",
    "mainIngredients": [
      "chicken",
      "noodles",
      "onion",
      "bell-peppers",
      "celery",
      "milk",
      "cheese",
      "mushrooms"
    ],
    "optionalStaples": [
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Guacamole Viva",
    "mainIngredients": [
      "avocado",
      "lemon",
      "sour cream",
      "garlic",
      "onion",
      "tomatoes",
      "celery"
    ],
    "optionalStaples": [
      "oregano",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (avocado, lemon, sour cream, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pasta Carbonara",
    "mainIngredients": [
      "bacon",
      "mushrooms",
      "garlic",
      "lettuce",
      "eggs",
      "cheese",
      "pasta"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "3 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bacon, mushrooms, garlic, lettuce) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Dirt Dessert",
    "mainIngredients": [
      "butter",
      "cream cheese",
      "milk"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, cream cheese, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Grandma Liskawa'S Pork And Beans",
    "mainIngredients": [
      "ground beef",
      "beans",
      "onion"
    ],
    "optionalStaples": [
      "ketchup",
      "hot sauce",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chicken Kiev",
    "mainIngredients": [
      "chicken",
      "bread",
      "cheese",
      "butter"
    ],
    "optionalStaples": [
      "oregano",
      "garlic powder",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, bread, cheese, butter) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Garden Chicken Salad",
    "mainIngredients": [
      "milk",
      "green onion",
      "lemon",
      "lettuce",
      "chicken"
    ],
    "optionalStaples": [
      "mayonnaise",
      "sugar",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "White Chili",
    "mainIngredients": [
      "beans",
      "chicken",
      "lettuce",
      "garlic",
      "onion"
    ],
    "optionalStaples": [
      "oil",
      "cumin",
      "oregano",
      "black-pepper",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Golden Corn Stuffing Bake",
    "mainIngredients": [
      "corn",
      "celery",
      "chicken"
    ],
    "optionalStaples": [
      "sugar",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Crunchy Cheese Ball",
    "mainIngredients": [
      "cream cheese",
      "ham",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise",
      "mustard",
      "hot sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, ham, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hungarian Gulya'S",
    "mainIngredients": [
      "onion",
      "carrots",
      "potatoes"
    ],
    "optionalStaples": [
      "salt",
      "oil",
      "paprika",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, carrots, potatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Italian Spaghetti Sauce",
    "mainIngredients": [
      "tomatoes",
      "cheese",
      "lettuce",
      "garlic",
      "onion"
    ],
    "optionalStaples": [
      "olive oil",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "240 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, cheese, lettuce, garlic) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Favorite Four Bean Salad",
    "mainIngredients": [
      "kidney beans",
      "lettuce",
      "beans",
      "chickpeas",
      "lemon"
    ],
    "optionalStaples": [
      "oil",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "8 hr (incl. wait)",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Lemon Shrimp Oriental",
    "mainIngredients": [
      "chicken",
      "green onion",
      "peas",
      "lemon",
      "mushrooms",
      "celery",
      "lettuce",
      "rice"
    ],
    "optionalStaples": [
      "soy sauce",
      "sugar",
      "black-pepper",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, green onion, peas, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Savory Meat Loaf",
    "mainIngredients": [
      "onion",
      "garlic",
      "bread",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "mustard",
      "basil",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "240 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, garlic, bread, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Cauliflower Salad",
    "mainIngredients": [
      "lettuce",
      "bacon",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise",
      "vinegar",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "1440 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "King Ranch",
    "mainIngredients": [
      "onion",
      "bell-peppers",
      "butter",
      "mushrooms",
      "chicken",
      "cheese",
      "tomatoes",
      "tortilla"
    ],
    "optionalStaples": [
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Linda'S Broccoli Casserole",
    "mainIngredients": [
      "chicken",
      "broccoli",
      "cheese",
      "milk",
      "lemon",
      "bread"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, broccoli, cheese, milk) for a Indian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple And Rice Casserole",
    "mainIngredients": [
      "bread",
      "milk",
      "ground beef",
      "eggs",
      "onion",
      "butter",
      "rice",
      "lettuce"
    ],
    "optionalStaples": [
      "salt",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bread, milk, ground beef, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tuna Spread",
    "mainIngredients": [
      "tuna",
      "cream cheese",
      "onion"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tuna, cream cheese, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pineapple Chicken Salad",
    "mainIngredients": [
      "butter",
      "chicken",
      "celery",
      "lemon",
      "lettuce"
    ],
    "optionalStaples": [
      "honey",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Shrimp Soup",
    "mainIngredients": [
      "tomatoes",
      "mushrooms",
      "chicken",
      "celery",
      "cheese",
      "butter",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Potato Cheese Casserole",
    "mainIngredients": [
      "potatoes",
      "cream cheese",
      "cheese",
      "cottage cheese",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, cream cheese, cheese, cottage cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sausage And Cheese Biscuits",
    "mainIngredients": [
      "turkey",
      "oats",
      "cheese"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "11 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (turkey, oats, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Johnny Menyetta",
    "mainIngredients": [
      "ground beef",
      "bell-peppers",
      "green onion",
      "celery",
      "noodles",
      "tomatoes",
      "cheese",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Creamy Baked Flounder",
    "mainIngredients": [
      "onion",
      "tomatoes",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, tomatoes, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pepperoni Pizza Casserole",
    "mainIngredients": [
      "rice",
      "cheese",
      "eggs",
      "pasta",
      "bell-peppers",
      "mushrooms"
    ],
    "optionalStaples": [
      "oregano",
      "garlic powder"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, cheese, eggs, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hummingbird Cake",
    "mainIngredients": [
      "eggs",
      "banana",
      "cream cheese"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar",
      "cinnamon",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, banana, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Supreme",
    "mainIngredients": [
      "broccoli",
      "mushrooms",
      "eggs",
      "onion",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Tacos In Pasta Shells",
    "mainIngredients": [
      "pasta",
      "ground beef",
      "cream cheese",
      "cheese",
      "tortilla"
    ],
    "optionalStaples": [
      "spices",
      "salt",
      "salsa"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, ground beef, cream cheese, cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Amie'S French Country Chicken",
    "mainIngredients": [
      "chicken",
      "bacon",
      "potatoes",
      "butter",
      "carrots",
      "onion",
      "garlic"
    ],
    "optionalStaples": [
      "olive oil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, bacon, potatoes, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crisp Bread And Butter Pickles",
    "mainIngredients": [
      "cucumber",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "salt",
      "sugar",
      "mustard",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "180 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cucumber, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broiled Zucchini Squash",
    "mainIngredients": [
      "zucchini",
      "garlic",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (zucchini, garlic, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Porcupine Meatballs",
    "mainIngredients": [
      "ground beef",
      "rice",
      "eggs",
      "onion",
      "pasta"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, rice, eggs, onion) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beefy Noodle Cheese Bake",
    "mainIngredients": [
      "lettuce",
      "onion",
      "ground beef",
      "celery",
      "milk",
      "cheese",
      "noodles"
    ],
    "optionalStaples": [
      "oil",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Weinberg'S Sausage Dip",
    "mainIngredients": [
      "sausage",
      "tomatoes",
      "cream cheese",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, tomatoes, cream cheese, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy Chicken",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "sour cream",
      "rice"
    ],
    "optionalStaples": [
      "salt",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Spinach And Cheese Souffle",
    "mainIngredients": [
      "spinach",
      "cheese",
      "milk",
      "sour cream",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "flour",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (spinach, cheese, milk, sour cream) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Corn Okra Casserole",
    "mainIngredients": [
      "lettuce",
      "onion",
      "bacon",
      "corn",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (lettuce, onion, bacon, corn) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Apple Crisp Pie",
    "mainIngredients": [
      "crackers",
      "eggs",
      "apple",
      "lemon",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (crackers, eggs, apple, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Whole Wheat Banana Bread",
    "mainIngredients": [
      "butter",
      "eggs",
      "banana"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Turkey Or Chicken Casserole",
    "mainIngredients": [
      "turkey",
      "mushrooms",
      "chicken",
      "milk",
      "sour cream",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Peasant-Style Homemade Vegetable Soup(Serves 8)",
    "mainIngredients": [
      "carrots",
      "onion",
      "potatoes",
      "tomatoes"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Bee Cake",
    "mainIngredients": [
      "lemon",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lemon, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Carrot Casserole",
    "mainIngredients": [
      "carrots",
      "eggs",
      "cheese",
      "crackers",
      "onion",
      "mushrooms"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "55 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Autumn Apple Salad",
    "mainIngredients": [
      "lemon",
      "cream cheese",
      "apple",
      "celery",
      "lettuce"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Macaroni And Cheese",
    "mainIngredients": [
      "pasta",
      "cheese",
      "eggs",
      "butter",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, cheese, eggs, butter) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Blossoms",
    "mainIngredients": [
      "peanut butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "8 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (peanut butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Blt Bites",
    "mainIngredients": [
      "tomatoes",
      "bacon",
      "green onion",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, bacon, green onion, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tostado Casserole",
    "mainIngredients": [
      "ground beef",
      "corn",
      "beans",
      "cheese"
    ],
    "optionalStaples": [
      "tomato sauce",
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, corn, beans, cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Jalapeno Pie",
    "mainIngredients": [
      "lettuce",
      "eggs",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, eggs, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Buttermilk Corn Bread",
    "mainIngredients": [
      "corn",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Breakfast Burritos",
    "mainIngredients": [
      "sausage",
      "eggs",
      "tomatoes",
      "onion",
      "lettuce",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (sausage, eggs, tomatoes, onion) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Clams And Cheese",
    "mainIngredients": [
      "cheese",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "mustard",
      "hot sauce"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, onion, bell-peppers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sour Cream Banana Pudding",
    "mainIngredients": [
      "milk",
      "sour cream",
      "banana"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, sour cream, banana) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Green Chile Casserole",
    "mainIngredients": [
      "lettuce",
      "cheese",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (lettuce, cheese, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Black Bean Soup",
    "mainIngredients": [
      "garlic",
      "black beans",
      "lettuce",
      "sour cream",
      "onion",
      "ham",
      "lemon"
    ],
    "optionalStaples": [
      "olive oil",
      "oregano",
      "salt",
      "sugar",
      "cumin",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Christmas Party Pinwheels",
    "mainIngredients": [
      "cream cheese",
      "bell-peppers",
      "celery",
      "lettuce",
      "green onion"
    ],
    "optionalStaples": [
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Brown Rice Pilaf",
    "mainIngredients": [
      "rice",
      "carrots",
      "celery",
      "green onion",
      "garlic",
      "bell-peppers"
    ],
    "optionalStaples": [
      "broth",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (rice, carrots, celery, green onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Broccoli Ham Ring",
    "mainIngredients": [
      "cheese",
      "ham",
      "broccoli",
      "onion",
      "lemon"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, ham, broccoli, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Rotel Casserole",
    "mainIngredients": [
      "ground beef",
      "mushrooms",
      "onion",
      "tortilla",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Mediterranean Chicken And Penne",
    "mainIngredients": [
      "onion",
      "garlic",
      "chicken",
      "pasta",
      "cheese"
    ],
    "optionalStaples": [
      "olive oil",
      "basil",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, garlic, chicken, pasta) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Italian Zucchini Casserole",
    "mainIngredients": [
      "zucchini",
      "onion",
      "tomatoes",
      "cheese",
      "crackers"
    ],
    "optionalStaples": [
      "italian seasoning",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (zucchini, onion, tomatoes, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Easy Lasagne",
    "mainIngredients": [
      "pasta",
      "noodles",
      "cheese",
      "eggs"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (pasta, noodles, cheese, eggs) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Twice Baked Potato Casserole",
    "mainIngredients": [
      "potatoes",
      "cream cheese",
      "sour cream",
      "butter",
      "lettuce",
      "cheese",
      "bacon"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, cream cheese, sour cream, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Stuffed French Toast",
    "mainIngredients": [
      "bread",
      "cream cheese",
      "eggs",
      "milk"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (bread, cream cheese, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Garden Patch Soup",
    "mainIngredients": [
      "potatoes",
      "corn",
      "beans",
      "onion",
      "tomatoes",
      "chicken"
    ],
    "optionalStaples": [
      "broth",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chocolate Chip Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Bread Stuffing",
    "mainIngredients": [
      "bread",
      "onion",
      "celery",
      "eggs"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, onion, celery, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Winter Fruit Bowl",
    "mainIngredients": [
      "lemon",
      "apple",
      "orange",
      "lettuce",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (lemon, apple, orange, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tomato Soup Congealed Salad",
    "mainIngredients": [
      "celery",
      "bell-peppers",
      "cream cheese",
      "tomatoes",
      "onion"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hickory Stick",
    "mainIngredients": [
      "ground beef",
      "bell-peppers",
      "garlic"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1440 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, bell-peppers, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Breasts Diane",
    "mainIngredients": [
      "chicken",
      "butter",
      "green onion",
      "lemon"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "oil",
      "mustard",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "4 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sensational Double Layer Pumpkin Pie",
    "mainIngredients": [
      "cream cheese",
      "milk",
      "crackers"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "2 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, milk, crackers) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Vegetable Pizza",
    "mainIngredients": [
      "cream cheese",
      "mushrooms",
      "broccoli",
      "tomatoes",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cream cheese, mushrooms, broccoli, tomatoes) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Icebox Pie",
    "mainIngredients": [
      "milk",
      "crackers",
      "eggs",
      "lemon"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, crackers, eggs, lemon) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Carrot Salad",
    "mainIngredients": [
      "carrots",
      "lettuce",
      "onion"
    ],
    "optionalStaples": [
      "sugar",
      "vinegar",
      "oil",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "French Spaghetti",
    "mainIngredients": [
      "pasta",
      "onion",
      "butter",
      "tomatoes",
      "mushrooms",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "10 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, onion, butter, tomatoes) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Apple Crisp",
    "mainIngredients": [
      "apple",
      "eggs",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (apple, eggs, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sarah Coble'S Creamed Corn",
    "mainIngredients": [
      "corn",
      "butter",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, butter, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tartar Sauce",
    "mainIngredients": [
      "milk",
      "onion",
      "cream cheese"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, onion, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chess Cheese Bars",
    "mainIngredients": [
      "eggs",
      "lemon",
      "cream cheese"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, lemon, cream cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "King Ranch Chicken Enchiladas",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "milk",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (chicken, mushrooms, milk, cheese) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Twice-Baked Potatoes",
    "mainIngredients": [
      "potatoes",
      "cream cheese",
      "milk",
      "garlic",
      "butter"
    ],
    "optionalStaples": [
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (potatoes, cream cheese, milk, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Wild Rice With Pecans",
    "mainIngredients": [
      "butter",
      "green onion",
      "rice"
    ],
    "optionalStaples": [
      "broth",
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, green onion, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Overnight Scalloped Chicken Casserole",
    "mainIngredients": [
      "mushrooms",
      "milk",
      "chicken",
      "pasta",
      "eggs",
      "butter",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "65 min",
    "difficulty": "Hard",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Cream Cheese Fruit Squares",
    "mainIngredients": [
      "butter",
      "crackers",
      "cream cheese",
      "eggs",
      "apple"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "50 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (butter, crackers, cream cheese, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Mushroom Casserole",
    "mainIngredients": [
      "chicken",
      "mushrooms",
      "milk",
      "onion"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Fruit Rocks",
    "mainIngredients": [
      "lettuce",
      "butter",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (lettuce, butter, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Green Salad With Orange Dressing",
    "mainIngredients": [
      "orange",
      "lettuce",
      "onion"
    ],
    "optionalStaples": [
      "vinegar",
      "mustard",
      "salt",
      "black-pepper",
      "olive oil"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Applesauce Cookies",
    "mainIngredients": [
      "butter",
      "eggs",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Company Casserole",
    "mainIngredients": [
      "rice",
      "mushrooms",
      "sausage",
      "turkey",
      "bread",
      "butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Old Fashioned Bread Pudding",
    "mainIngredients": [
      "eggs",
      "bread",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "35 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, bread, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Walnut Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "sugar",
      "salt",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "90 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beer Stew(Pork)",
    "mainIngredients": [
      "onion",
      "potatoes",
      "carrots"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hurry-Up Meat Loaves",
    "mainIngredients": [
      "bread",
      "onion",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (bread, onion, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Creamy Corn Soup",
    "mainIngredients": [
      "chicken",
      "milk",
      "corn"
    ],
    "optionalStaples": [
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Double Delicious Cookie Bars",
    "mainIngredients": [
      "crackers",
      "milk",
      "peanut butter"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (crackers, milk, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "No-Bake Chocolate Peanut Butter Cookies",
    "mainIngredients": [
      "milk",
      "butter",
      "oats",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "1 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (milk, butter, oats, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Chicken Wings",
    "mainIngredients": [
      "chicken",
      "butter",
      "tomatoes",
      "celery"
    ],
    "optionalStaples": [
      "soy sauce",
      "vinegar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (chicken, butter, tomatoes, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Scallop Stew",
    "mainIngredients": [
      "butter",
      "onion",
      "mushrooms",
      "milk"
    ],
    "optionalStaples": [
      "mustard",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Chocolate Pecan Pie",
    "mainIngredients": [
      "eggs",
      "butter",
      "milk",
      "oats"
    ],
    "optionalStaples": [
      "sugar",
      "flour"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, butter, milk, oats) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Layered Taco Dip",
    "mainIngredients": [
      "ground beef",
      "lettuce",
      "sour cream",
      "beans",
      "avocado",
      "cheese",
      "tomatoes",
      "green onion"
    ],
    "optionalStaples": [
      "spices"
    ],
    "optionalIngredients": [],
    "cuisine": "Mexican",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, lettuce, sour cream, beans) for a Mexican style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Granny'S Fruit Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Wild Blueberry Bread",
    "mainIngredients": [
      "eggs",
      "milk",
      "blueberries"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, blueberries) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Fruit Soup",
    "mainIngredients": [
      "orange",
      "strawberry",
      "banana"
    ],
    "optionalStaples": [
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Skillet Macaroni And Beef",
    "mainIngredients": [
      "ground beef",
      "pasta",
      "onion",
      "bell-peppers"
    ],
    "optionalStaples": [
      "tomato sauce",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Pasta",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (ground beef, pasta, onion, bell-peppers) for a Pasta style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Crawfish Tortellini",
    "mainIngredients": [
      "cheese",
      "butter",
      "onion",
      "garlic"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (cheese, butter, onion, garlic) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Quick Cheese Sauce In The Microwave",
    "mainIngredients": [
      "butter",
      "milk",
      "cheese"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "3 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chicken Dinner In Foil(Method:  Foil)",
    "mainIngredients": [
      "chicken",
      "potatoes",
      "tomatoes",
      "onion",
      "mushrooms",
      "bell-peppers",
      "rice",
      "butter"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (chicken, potatoes, tomatoes, onion) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Apple Pizza",
    "mainIngredients": [
      "apple",
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (apple, butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Hungry Man'S Casserole",
    "mainIngredients": [
      "tomatoes",
      "onion",
      "beans",
      "potatoes"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Posh Squash",
    "mainIngredients": [
      "zucchini",
      "eggs",
      "onion",
      "bell-peppers",
      "cheese"
    ],
    "optionalStaples": [
      "mayonnaise",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (zucchini, eggs, onion, bell-peppers) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Beef Roast",
    "mainIngredients": [
      "onion",
      "carrots",
      "potatoes",
      "celery"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, carrots, potatoes, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chinese Cole Slaw",
    "mainIngredients": [
      "noodles",
      "butter",
      "lettuce"
    ],
    "optionalStaples": [
      "sesame seeds"
    ],
    "optionalIngredients": [],
    "cuisine": "Japanese",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (noodles, butter, lettuce) for a Japanese style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Layered Zucchini Casserole",
    "mainIngredients": [
      "bacon",
      "zucchini",
      "onion",
      "mushrooms",
      "cheese",
      "tomatoes"
    ],
    "optionalStaples": [
      "flour",
      "garlic powder",
      "salt",
      "black-pepper",
      "basil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (bacon, zucchini, onion, mushrooms) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chocolate Chip Cookie",
    "mainIngredients": [
      "butter",
      "milk",
      "eggs"
    ],
    "optionalStaples": [
      "sugar",
      "flour",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, milk, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Mango Chutney",
    "mainIngredients": [
      "lettuce",
      "bell-peppers",
      "garlic"
    ],
    "optionalStaples": [
      "salt",
      "sugar",
      "vinegar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (lettuce, bell-peppers, garlic) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "New England Clam Chowder(Serves 6)",
    "mainIngredients": [
      "onion",
      "potatoes",
      "milk"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Baked Tuna Chow Mein Casserole",
    "mainIngredients": [
      "celery",
      "onion",
      "bell-peppers",
      "butter",
      "tuna",
      "mushrooms",
      "noodles"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Simple Turkey Casserole",
    "mainIngredients": [
      "turkey",
      "potatoes",
      "celery",
      "mushrooms",
      "crackers"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Fiesta Salad",
    "mainIngredients": [
      "rice",
      "bell-peppers",
      "lemon",
      "sour cream",
      "corn",
      "tuna",
      "celery",
      "onion",
      "garlic",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt",
      "cumin",
      "chili powder",
      "oregano"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "60 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Fiesta Potato Salad",
    "mainIngredients": [
      "potatoes",
      "bell-peppers",
      "eggs",
      "celery",
      "lettuce"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Cheesy Salmon Loaf",
    "mainIngredients": [
      "celery",
      "onion",
      "eggs",
      "cheese",
      "lemon",
      "bread"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper",
      "mayonnaise"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (celery, onion, eggs, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Tuna Marbels",
    "mainIngredients": [
      "tuna",
      "onion",
      "lemon",
      "eggs",
      "oats",
      "crackers"
    ],
    "optionalStaples": [
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (tuna, onion, lemon, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sesame Chicken",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk",
      "chicken"
    ],
    "optionalStaples": [
      "flour",
      "paprika",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk, chicken) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Irish Mistery Chicken",
    "mainIngredients": [
      "ham",
      "chicken",
      "mushrooms",
      "sour cream"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Fried Tomatoes",
    "mainIngredients": [
      "tomatoes",
      "eggs",
      "bread"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, eggs, bread) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lancanshire Hot Pot",
    "mainIngredients": [
      "potatoes",
      "carrots",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "black-pepper",
      "salt",
      "broth"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (potatoes, carrots, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pumpkin Soup",
    "mainIngredients": [
      "onion",
      "butter",
      "milk",
      "sour cream"
    ],
    "optionalStaples": [
      "broth",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Memphis Spicy Baked Beans",
    "mainIngredients": [
      "ground beef",
      "onion",
      "lettuce",
      "beans"
    ],
    "optionalStaples": [
      "mustard",
      "chili powder",
      "sugar",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ground beef, onion, lettuce, beans) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Overnight Salad",
    "mainIngredients": [
      "peas",
      "lettuce",
      "corn",
      "celery",
      "bell-peppers",
      "onion"
    ],
    "optionalStaples": [
      "salt",
      "sugar",
      "vinegar",
      "oil",
      "paprika"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "1440 min",
    "difficulty": "Hard",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Spaetzle(German Dumpling)",
    "mainIngredients": [
      "eggs",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "flour",
      "salt",
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, milk, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Sweet Sour Tuna",
    "mainIngredients": [
      "tuna",
      "lettuce",
      "rice"
    ],
    "optionalStaples": [
      "vinegar",
      "sugar",
      "ketchup"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (tuna, lettuce, rice) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lacking Salad",
    "mainIngredients": [
      "lemon",
      "orange",
      "banana"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sicilian Meat Loaf",
    "mainIngredients": [
      "eggs",
      "tomatoes",
      "garlic",
      "ham",
      "cheese",
      "bread",
      "ground beef"
    ],
    "optionalStaples": [
      "oregano",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "15 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, tomatoes, garlic, ham) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Good Potatoes",
    "mainIngredients": [
      "potatoes",
      "butter",
      "cheese"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (potatoes, butter, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Brownie Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "milk"
    ],
    "optionalStaples": [
      "flour",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, milk) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Scalloped Tomatoes",
    "mainIngredients": [
      "tomatoes",
      "bread",
      "butter"
    ],
    "optionalStaples": [
      "sugar",
      "cinnamon"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "40 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (tomatoes, bread, butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Beans And Chutney",
    "mainIngredients": [
      "beans",
      "onion",
      "yogurt"
    ],
    "optionalStaples": [
      "mustard",
      "honey",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (beans, onion, yogurt) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Pasta Ala Renee",
    "mainIngredients": [
      "pasta",
      "tomatoes",
      "bell-peppers",
      "onion",
      "mushrooms",
      "garlic",
      "cheese"
    ],
    "optionalStaples": [
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (pasta, tomatoes, bell-peppers, onion) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Oven Baked Chicken",
    "mainIngredients": [
      "celery",
      "milk",
      "butter"
    ],
    "optionalStaples": [
      "paprika",
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "60 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (celery, milk, butter) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham And Potato Casserole",
    "mainIngredients": [
      "potatoes",
      "ham",
      "onion",
      "bell-peppers",
      "mushrooms"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "10 min",
    "difficulty": "Easy",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Hashbrown Casserole",
    "mainIngredients": [
      "butter",
      "lettuce",
      "chicken",
      "sour cream",
      "cheese",
      "corn"
    ],
    "optionalStaples": [
      "salt",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "45 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Pig Picking Cake",
    "mainIngredients": [
      "butter",
      "eggs",
      "orange"
    ],
    "optionalStaples": [
      "oil"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (butter, eggs, orange) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Peanut Butter Fudge",
    "mainIngredients": [
      "corn",
      "milk",
      "peanut butter"
    ],
    "optionalStaples": [
      "sugar",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "5 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (corn, milk, peanut butter) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Ham Cups",
    "mainIngredients": [
      "ham",
      "bread",
      "eggs"
    ],
    "optionalStaples": [
      "mustard",
      "sugar"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "60 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (ham, bread, eggs) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Lemon Curry Deviled Eggs",
    "mainIngredients": [
      "eggs",
      "sour cream",
      "lemon"
    ],
    "optionalStaples": [
      "salt",
      "paprika",
      "mustard"
    ],
    "optionalIngredients": [],
    "cuisine": "Indian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (eggs, sour cream, lemon) for a Indian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Chinese Pepper Steak(Crockery Cooking)",
    "mainIngredients": [
      "garlic",
      "beans",
      "lettuce"
    ],
    "optionalStaples": [
      "sugar",
      "oil",
      "soy sauce",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "20 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (garlic, beans, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Polish Stuffed Cabbage",
    "mainIngredients": [
      "rice",
      "onion",
      "butter",
      "eggs",
      "tomatoes"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Soup",
    "estimatedTime": "120 min",
    "difficulty": "Medium",
    "steps": [
      "Chop vegetables and aromatics.",
      "Simmer liquid with aromatics until fragrant.",
      "Add remaining ingredients and cook until tender.",
      "Adjust seasoning and serve."
    ]
  },
  {
    "title": "Orange Roughy",
    "mainIngredients": [
      "onion",
      "tomatoes",
      "mushrooms",
      "lettuce"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "30 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (onion, tomatoes, mushrooms, lettuce) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Baked Groundhog",
    "mainIngredients": [
      "potatoes",
      "carrots",
      "onion",
      "celery"
    ],
    "optionalStaples": [
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "10 min",
    "difficulty": "Hard",
    "steps": [
      "Prep ingredients (potatoes, carrots, onion, celery) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Light And Easy Alfredo Sauce",
    "mainIngredients": [
      "cottage cheese",
      "cheese",
      "butter",
      "milk",
      "chicken",
      "bell-peppers"
    ],
    "optionalStaples": [
      "basil",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (cottage cheese, cheese, butter, milk) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Asparagus Crab Omelets",
    "mainIngredients": [
      "eggs",
      "tomatoes",
      "butter",
      "cheese",
      "spinach",
      "milk",
      "mushrooms"
    ],
    "optionalStaples": [
      "salt",
      "garlic powder",
      "oregano",
      "black-pepper"
    ],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Medium",
    "steps": [
      "Prep ingredients (eggs, tomatoes, butter, cheese) for a Italian style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  },
  {
    "title": "Avocado Orange Salad",
    "mainIngredients": [
      "lettuce",
      "avocado",
      "orange"
    ],
    "optionalStaples": [
      "mayonnaise",
      "paprika",
      "salt"
    ],
    "optionalIngredients": [],
    "cuisine": "Salad",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Antipasto Salad",
    "mainIngredients": [
      "pasta",
      "lettuce",
      "onion",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "Italian",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Wash and chop produce.",
      "Whisk or shake dressing if needed.",
      "Toss gently and serve chilled."
    ]
  },
  {
    "title": "Sausage Cannoli",
    "mainIngredients": [
      "sausage",
      "bell-peppers",
      "cheese"
    ],
    "optionalStaples": [],
    "optionalIngredients": [],
    "cuisine": "General",
    "estimatedTime": "25 min",
    "difficulty": "Easy",
    "steps": [
      "Prep ingredients (sausage, bell-peppers, cheese) for a General style dish.",
      "Heat oil or butter in a pan, pot, or oven-safe dish as appropriate.",
      "Cook proteins first until safely done, then vegetables until tender-crisp.",
      "Combine sauce elements and simmer briefly to blend flavors.",
      "Season to taste and serve warm."
    ]
  }
]
