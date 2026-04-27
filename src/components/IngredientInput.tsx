type IngredientInputProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

function IngredientInput({ value, onChange, onSubmit }: IngredientInputProps) {
  return (
    <div className="ingredient-input">
      <label htmlFor="ingredient-textarea" className="ingredient-label">
        Enter ingredients (comma-separated)
      </label>
      <textarea
        id="ingredient-textarea"
        className="ingredient-textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="e.g. eggs, rice, spinach"
        rows={4}
      />
      <p className="ingredient-helper">
        Example: eggs, rice, old spinach, tomatos, onion
      </p>
      <button type="button" className="ingredient-submit" onClick={onSubmit}>
        Find Recipes
      </button>
    </div>
  )
}

export default IngredientInput
