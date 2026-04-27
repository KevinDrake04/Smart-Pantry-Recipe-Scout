import { Card, CardContent, Chip } from '@heroui/react'

type SimulatedImageOption = {
  icon: string
  title: string
  ingredients: string
}

type SimulatedImageInputProps = {
  onSelectIngredients: (ingredients: string) => void
  selectedIngredients?: string
}

const sampleOptions: SimulatedImageOption[] = [
  {
    icon: '🧊',
    title: 'Weeknight leftovers',
    ingredients: 'leftover rice, old spinach, eggs, tomatoes, onion',
  },
  {
    icon: '📷',
    title: 'Breakfast basics',
    ingredients: 'milk, banana, bread, peanut butter',
  },
  {
    icon: '📷',
    title: 'Pasta night',
    ingredients: 'pasta, tomatos, cheeze, garlic, onion',
  },
]

function SimulatedImageInput({
  onSelectIngredients,
  selectedIngredients = '',
}: SimulatedImageInputProps) {
  return (
    <section
      aria-label="Simulated image input"
      className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner sm:p-4"
    >
      <div className="space-y-1">
        <h3 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-[15px]">
          Simulated Fridge Image Input
        </h3>
        <p className="text-xs leading-snug text-slate-500">
          This simulates what an image-recognition feature might detect from a
          fridge or pantry photo.
        </p>
      </div>
      <div className="grid gap-2">
        {sampleOptions.map((option) => (
          <button
            key={option.title}
            type="button"
            className="group w-full rounded-xl text-left outline-none ring-offset-2 ring-offset-[#eef2f7] transition focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => onSelectIngredients(option.ingredients)}
          >
            <Card
              className={
                selectedIngredients === option.ingredients
                  ? 'rounded-xl border-2 border-blue-500 bg-white shadow-sm ring-1 ring-blue-100/80'
                  : 'rounded-xl border border-slate-200 bg-white shadow-sm transition group-hover:border-slate-300 group-hover:shadow-md group-active:scale-[0.998]'
              }
            >
              <CardContent className="space-y-1.5 p-3 text-left sm:p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-1 items-start gap-2">
                    <span className="text-base leading-none" aria-hidden="true">
                      {option.icon}
                    </span>
                    <span className="text-sm font-semibold leading-tight text-slate-900">
                      {option.title}
                    </span>
                  </div>
                  {selectedIngredients === option.ingredients && (
                    <Chip
                      size="sm"
                      color="accent"
                      variant="soft"
                      className="shrink-0 font-medium"
                    >
                      Selected
                    </Chip>
                  )}
                </div>
                <p className="text-xs leading-snug text-slate-600">{option.ingredients}</p>
                {selectedIngredients !== option.ingredients && (
                  <p className="text-[11px] leading-snug text-slate-400">
                    Click to use these ingredients
                  </p>
                )}
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </section>
  )
}

export default SimulatedImageInput
