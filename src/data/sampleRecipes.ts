export type SampleRecipe = {
  title: string
  requiredIngredients: string[]
  estimatedTime: string
  difficulty: 'Easy' | 'Medium'
  steps: string[]
}

export const sampleRecipes: SampleRecipe[] = [
  {
    title: 'Egg Fried Rice',
    requiredIngredients: ['eggs', 'rice', 'onion', 'soy sauce'],
    estimatedTime: '20 min',
    difficulty: 'Easy',
    steps: [
      'Scramble eggs in a lightly oiled pan.',
      'Add onion and cook until softened.',
      'Stir in cooked rice with soy sauce and season to taste.',
    ],
  },
  {
    title: 'Veggie Omelet',
    requiredIngredients: ['eggs', 'spinach', 'onion', 'cheese'],
    estimatedTime: '15 min',
    difficulty: 'Easy',
    steps: [
      'Whisk eggs with a pinch of salt.',
      'Saute chopped vegetables briefly.',
      'Pour eggs over vegetables and fold when set.',
    ],
  },
  {
    title: 'Simple Tomato Pasta',
    requiredIngredients: ['pasta', 'tomatoes', 'onion', 'garlic'],
    estimatedTime: '25 min',
    difficulty: 'Easy',
    steps: [
      'Boil pasta until al dente.',
      'Cook onion and tomatoes into a quick sauce.',
      'Toss pasta with the sauce and serve warm.',
    ],
  },
  {
    title: 'Cheese Toast',
    requiredIngredients: ['cheese', 'bread', 'butter'],
    estimatedTime: '10 min',
    difficulty: 'Easy',
    steps: [
      'Butter bread slices lightly.',
      'Top with cheese and toast until melted.',
      'Serve hot as a snack or side.',
    ],
  },
  {
    title: 'Vegetable Rice Bowl',
    requiredIngredients: ['rice', 'spinach', 'carrots', 'seasoning'],
    estimatedTime: '22 min',
    difficulty: 'Easy',
    steps: [
      'Warm cooked rice in a pan.',
      'Add vegetables and cook until tender-crisp.',
      'Season and serve in a bowl.',
    ],
  },
  {
    title: 'Banana Milk Smoothie',
    requiredIngredients: ['milk', 'banana'],
    estimatedTime: '5 min',
    difficulty: 'Easy',
    steps: [
      'Add milk and banana to a blender.',
      'Blend until smooth and creamy.',
      'Pour into a glass and serve chilled.',
    ],
  },
]
