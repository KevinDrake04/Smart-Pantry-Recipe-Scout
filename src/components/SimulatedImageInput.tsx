type SimulatedImageOption = {
  title: string
  ingredients: string
}

type SimulatedImageInputProps = {
  onSelectIngredients: (ingredients: string) => void
  selectedIngredients?: string
}

const sampleOptions: SimulatedImageOption[] = [
  {
    title: 'Weeknight leftovers',
    ingredients: 'leftover rice, old spinach, eggs, tomatoes, onion',
  },
  {
    title: 'Breakfast basics',
    ingredients: 'milk, banana, bread, peanut butter',
  },
  {
    title: 'Pasta night',
    ingredients: 'pasta, tomatos, cheeze, garlic, onion',
  },
]

function SimulatedImageInput({
  onSelectIngredients,
  selectedIngredients = '',
}: SimulatedImageInputProps) {
  return (
    <section className="simulated-image-input" aria-label="Simulated image input">
      <h3 className="simulated-heading">Simulated Fridge Image Input</h3>
      <p className="simulated-note">
        This simulates what an image-recognition feature might detect from a
        fridge or pantry photo.
      </p>
      <div className="sample-grid">
        {sampleOptions.map((option) => (
          <button
            key={option.title}
            type="button"
            className={`sample-option ${
              selectedIngredients === option.ingredients ? 'selected' : ''
            }`}
            onClick={() => onSelectIngredients(option.ingredients)}
          >
            <span className="sample-top-row">
              <span className="sample-icon" aria-hidden="true">
                📷
              </span>
              <span className="sample-title">{option.title}</span>
            </span>
            <span className="sample-ingredients">{option.ingredients}</span>
            <span className="sample-cta">Use detected ingredients</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default SimulatedImageInput
