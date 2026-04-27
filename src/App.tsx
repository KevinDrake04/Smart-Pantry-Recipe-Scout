import { useState } from 'react'
import IngredientInput from './components/IngredientInput'
import './App.css'

function App() {
  const [ingredientText, setIngredientText] = useState('')
  const [submittedIngredients, setSubmittedIngredients] = useState('')

  const handleSubmit = () => {
    setSubmittedIngredients(ingredientText)
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
            </div>
          )}
        </article>

        <article className="placeholder-card">
          <h2>Recipe Suggestions</h2>
          <p>
            Placeholder for recommended recipes, matched ingredients, and
            missing items.
          </p>
        </article>

        <article className="placeholder-card">
          <h2>Waste Reduction Tips</h2>
          <p>
            Placeholder for food-saving guidance based on available ingredients.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App
