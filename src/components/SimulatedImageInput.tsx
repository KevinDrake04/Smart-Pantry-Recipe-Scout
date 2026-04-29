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

/** Truncate ingredient preview for compact card layout. */
function previewLine(text: string, maxLen = 72): string {
  const t = text.trim()
  if (t.length <= maxLen) return t
  return `${t.slice(0, maxLen - 1).trim()}…`
}

function SimulatedImageInput({
  onSelectIngredients,
  selectedIngredients = '',
}: SimulatedImageInputProps) {
  return (
    <section
      aria-label="Simulated image input"
      className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5 shadow-inner sm:p-3"
    >
      <div className="mb-2 space-y-0.5 px-0.5">
        <h3 className="text-xs font-semibold tracking-tight text-slate-900 sm:text-sm">
          Simulated Fridge Image Input
        </h3>
        <p className="text-[11px] leading-snug text-slate-500 sm:text-xs">
          Tap a sample to fill your pantry list.
        </p>
      </div>
      <div className="grid gap-1.5">
        {sampleOptions.map((option) => {
          const selected = selectedIngredients === option.ingredients
          return (
            <button
              key={option.title}
              type="button"
              title={option.ingredients}
              className="group w-full rounded-lg text-left outline-none ring-offset-2 ring-offset-[#eef2f7] transition focus-visible:ring-2 focus-visible:ring-blue-400"
              onClick={() => onSelectIngredients(option.ingredients)}
            >
              <Card
                className={
                  selected
                    ? 'rounded-lg border-2 border-blue-500 bg-white shadow-sm ring-1 ring-blue-100/70'
                    : 'rounded-lg border border-slate-200 bg-white shadow-sm transition group-hover:border-slate-300 group-active:scale-[0.998]'
                }
              >
                <CardContent className="px-2.5 py-2 sm:px-3 sm:py-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="shrink-0 text-sm leading-none" aria-hidden="true">
                      {option.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate text-xs font-semibold leading-tight text-slate-900 sm:text-[13px]">
                          {option.title}
                        </span>
                        {selected && (
                          <Chip
                            size="sm"
                            color="accent"
                            variant="soft"
                            className="h-5 min-w-0 shrink-0 px-1.5 text-[10px] font-semibold uppercase leading-none"
                          >
                            On
                          </Chip>
                        )}
                      </div>
                      <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-600 sm:line-clamp-1 sm:text-xs">
                        {previewLine(option.ingredients)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default SimulatedImageInput
