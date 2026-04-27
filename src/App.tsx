import { useState } from 'react'
import IngredientInput from './components/IngredientInput'
import {
  parseIngredients,
  type ParsedIngredient,
} from './services/ingredientParser'
import {
  generateRecipeSuggestions,
  type RecipeSuggestion,
} from './services/recipeGenerator'
import { generateWasteTips, type WasteTip } from './services/wasteTips'
import './App.css'

function App() {
  const [ingredientText, setIngredientText] = useState('')
  const [submittedIngredients, setSubmittedIngredients] = useState('')
  const [parsedIngredients, setParsedIngredients] = useState<ParsedIngredient[]>(
    []
  )
  const [recipeSuggestions, setRecipeSuggestions] = useState<RecipeSuggestion[]>(
    []
  )
  const [wasteTips, setWasteTips] = useState<WasteTip[]>([])

  const handleSubmit = () => {
    const parsed = parseIngredients(ingredientText)
    setSubmittedIngredients(ingredientText)
    setParsedIngredients(parsed)
    setRecipeSuggestions(generateRecipeSuggestions(parsed))
    setWasteTips(generateWasteTips(parsed))
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Smart Pantry & Recipe Scout</h1>
        <p>
          Discover simple meal ideas from what you already have, reduce food
          waste, and plan smarter with your pantry staples.
        </p>
      </header>

      <section className="placeholder-grid" aria-label="Feature sections">
        <article className="placeholder-card">
          <h2>Ingredient Input</h2>
          <IngredientInput
            value={ingredientText}
            onChange={setIngredientText}
            onSubmit={handleSubmit}
          />
          {submittedIngredients.trim() !== '' && (
            <div className="ingredient-preview">
              <p className="preview-label">Temporary preview:</p>
              <p className="preview-text">{submittedIngredients}</p>
              <div className="parsed-results">
                <p className="preview-label">Parsed ingredients:</p>
                {parsedIngredients.length === 0 ? (
                  <p className="preview-text">No ingredients parsed.</p>
                ) : (
                  <ul className="parsed-list">
                    {parsedIngredients.map((ingredient) => (
                      <li key={ingredient.name}>
                        <strong>{ingredient.name}</strong> - original:{' '}
                        {ingredient.originalText}, category:{' '}
                        {ingredient.category}, urgency: {ingredient.urgency}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </article>

        <article className="placeholder-card">
          <h2>Recipe Suggestions</h2>
          {submittedIngredients.trim() === '' ? (
            <p>
              Submit ingredients to see rule-based suggestions with used and
              missing items.
            </p>
          ) : recipeSuggestions.length === 0 ? (
            <p>No matching recipes found yet. Try different ingredients.</p>
          ) : (
            <ul className="recipe-list">
              {recipeSuggestions.map((recipe) => (
                <li key={recipe.title} className="recipe-item">
                  <h3>{recipe.title}</h3>
                  <p>
                    <strong>Match:</strong> {recipe.matchPercentage}%
                  </p>
                  <p>{recipe.matchSummary}</p>
                  <p>
                    <strong>Used:</strong> {recipe.usedIngredients.join(', ')}
                  </p>
                  <p>
                    <strong>Missing:</strong>{' '}
                    {recipe.missingIngredients.length > 0
                      ? recipe.missingIngredients.join(', ')
                      : 'None'}
                  </p>
                  <p>
                    <strong>Substitutions:</strong>{' '}
                    {recipe.substitutions.length > 0
                      ? recipe.substitutions.join(' | ')
                      : 'None'}
                  </p>
                  <p>
                    <strong>Why recommended:</strong> {recipe.whyRecommended}
                  </p>
                  <p>
                    <strong>Estimated time:</strong> {recipe.estimatedTime}
                  </p>
                  <p>
                    <strong>Difficulty:</strong> {recipe.difficulty}
                  </p>
                  <p>
                    <strong>Steps:</strong> {recipe.steps.join(' ')}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </article>

        <article className="placeholder-card">
          <h2>Waste Reduction Tips</h2>
          {submittedIngredients.trim() === '' ? (
            <p>Submit ingredients to get practical food waste reduction tips.</p>
          ) : wasteTips.length === 0 ? (
            <p>No tips yet. Add ingredients to get spoilage-aware suggestions.</p>
          ) : (
            <ul className="tips-list">
              {wasteTips.map((tip) => (
                <li key={tip.title} className="tip-item">
                  <p>
                    <strong>{tip.title}</strong>{' '}
                    <span className={`tip-priority ${tip.priority}`}>
                      {tip.priority === 'high' ? 'use soon' : 'plan ahead'}
                    </span>
                  </p>
                  <p>{tip.tip}</p>
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>
    </main>
  )
}

export default App
