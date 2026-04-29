import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  ProgressBar,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from '@heroui/react'
import IngredientInput from './components/IngredientInput'
import SimulatedImageInput from './components/SimulatedImageInput'
import {
  parseIngredients,
  type ParsedIngredient,
} from './services/ingredientParser'
import {
  generateRecipeSuggestions,
  type RecipeSuggestion,
} from './services/recipeGenerator'
import { generateWasteTips, type WasteTip } from './services/wasteTips'

const PANTRY_LOCAL_STORAGE_KEY = 'smart-pantry-recipe-scout-pantry-input-v1'

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

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PANTRY_LOCAL_STORAGE_KEY)
      if (saved !== null) {
        setIngredientText(saved)
      }
    } catch {
      /* ignore quota / privacy mode */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(PANTRY_LOCAL_STORAGE_KEY, ingredientText)
    } catch {
      /* ignore */
    }
  }, [ingredientText])

  const handleSubmit = () => {
    const parsed = parseIngredients(ingredientText)
    setSubmittedIngredients(ingredientText)
    setParsedIngredients(parsed)
    setRecipeSuggestions(generateRecipeSuggestions(parsed))
    setWasteTips(generateWasteTips(parsed))
  }

  const handleClearPantry = () => {
    setIngredientText('')
    try {
      localStorage.removeItem(PANTRY_LOCAL_STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setSubmittedIngredients('')
    setParsedIngredients([])
    setRecipeSuggestions([])
    setWasteTips([])
  }

  const hasSubmitted = submittedIngredients.trim() !== ''

  return (
    <main className="mx-auto max-w-[1360px] px-4 py-5 sm:px-6 lg:px-8">
      <header className="mb-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm sm:p-5">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Smart Pantry & Recipe Scout
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-snug text-slate-600 sm:text-[15px]">
          Discover practical recipes from ingredients you already have, track
          match quality, and reduce waste with actionable storage and usage tips.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-5 lg:self-start">
          <Card className="rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <CardHeader className="border-b border-slate-100 px-4 pb-3 pt-4 sm:px-5">
              <div className="space-y-1">
                <h2 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                  Ingredient Input
                </h2>
                <p className="text-xs leading-snug text-slate-500 sm:text-sm">
                  Add ingredients manually or choose a simulated fridge scan.
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
              <SimulatedImageInput
                onSelectIngredients={setIngredientText}
                selectedIngredients={ingredientText}
              />
              <IngredientInput
                value={ingredientText}
                onChange={setIngredientText}
                onSubmit={handleSubmit}
                onClearPantry={handleClearPantry}
              />
              {hasSubmitted && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-snug text-slate-600">
                  <span className="font-semibold text-slate-700">Submitted:</span>{' '}
                  {submittedIngredients}
                </div>
              )}
            </CardContent>
          </Card>
        </aside>

        <section className="min-w-0">
          <Card className="rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <CardContent className="p-3 sm:p-4">
              <Tabs defaultSelectedKey="recipes" variant="primary" className="results-tabs">
                <TabList
                  aria-label="Results sections"
                  className="results-tab-bar mb-3 flex w-full min-h-[2.25rem] flex-row flex-nowrap items-stretch gap-0.5 overflow-x-auto overscroll-x-contain rounded-lg border border-slate-200 bg-slate-100/90 p-0.5 shadow-inner [-ms-overflow-style:none] md:overflow-visible [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/80 [&::-webkit-scrollbar-track]:bg-transparent"
                >
                  <Tab id="recipes" className="result-tab shrink-0 sm:flex-1 sm:min-w-0">
                    Recipe Suggestions
                  </Tab>
                  <Tab id="parsed" className="result-tab shrink-0 sm:flex-1 sm:min-w-0">
                    Parsed Ingredients
                  </Tab>
                  <Tab id="waste-tips" className="result-tab shrink-0 sm:flex-1 sm:min-w-0">
                    Waste Tips
                  </Tab>
                </TabList>

                <TabPanel id="recipes" className="rounded-lg bg-slate-50/60 p-3 sm:p-4">
                  {!hasSubmitted ? (
                    <p className="text-sm leading-snug text-slate-500">
                      Submit ingredients to generate recommendations.
                    </p>
                  ) : recipeSuggestions.length === 0 ? (
                    <p className="text-sm leading-snug text-slate-500">
                      No matching recipes found. Try adjusting ingredients.
                    </p>
                  ) : (
                    <div className="grid gap-3 md:grid-cols-2">
                      {recipeSuggestions.map((recipe) => (
                        <Card
                          key={recipe.title}
                          className="rounded-xl border border-slate-200 bg-white shadow-sm"
                        >
                          <CardContent className="space-y-2 p-3 sm:p-3.5">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-sm font-semibold leading-snug text-slate-900">
                                {recipe.title}
                              </h3>
                              <Chip
                                size="sm"
                                color={recipe.matchPercentage >= 70 ? 'success' : 'accent'}
                                variant="soft"
                              >
                                {recipe.matchPercentage}%
                              </Chip>
                            </div>
                            <ProgressBar
                              value={recipe.matchPercentage}
                              color={recipe.matchPercentage >= 70 ? 'success' : 'accent'}
                              aria-label={`${recipe.title} match`}
                            />
                            <p className="text-xs leading-snug text-slate-600">{recipe.matchSummary}</p>
                            <p className="text-xs leading-snug text-slate-700">
                              <span className="font-medium">Used:</span>{' '}
                              {recipe.usedIngredients.join(', ') || 'None'}
                            </p>
                            <p className="text-xs leading-snug text-slate-700">
                              <span className="font-medium">Missing:</span>{' '}
                              {recipe.missingIngredients.join(', ') || 'None'}
                            </p>
                            {recipe.substitutions.length > 0 && (
                              <p className="text-xs leading-snug text-slate-700">
                                <span className="font-medium">Substitutions:</span>{' '}
                                {recipe.substitutions.join(' | ')}
                              </p>
                            )}
                            <p className="text-xs leading-snug text-slate-600">
                              <span className="font-medium">Why:</span>{' '}
                              {recipe.whyRecommended}
                            </p>
                            <p className="text-xs leading-snug text-slate-600">
                              <span className="font-medium">Time:</span>{' '}
                              {recipe.estimatedTime} |{' '}
                              <span className="font-medium">Difficulty:</span>{' '}
                              {recipe.difficulty}
                            </p>
                            <p className="text-xs leading-snug text-slate-600">
                              <span className="font-medium">Steps:</span>{' '}
                              {recipe.steps.join(' ')}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabPanel>

                <TabPanel id="parsed" className="rounded-lg bg-slate-50/60 p-3 sm:p-4">
                  {!hasSubmitted ? (
                    <p className="text-sm leading-snug text-slate-500">
                      Parsed ingredients will appear here after submission.
                    </p>
                  ) : parsedIngredients.length === 0 ? (
                    <p className="text-sm leading-snug text-slate-500">
                      No ingredients parsed.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {parsedIngredients.map((ingredient) => (
                        <Chip
                          key={ingredient.id}
                          size="sm"
                          variant="soft"
                          color={ingredient.urgency === 'use soon' ? 'warning' : 'default'}
                        >
                          {ingredient.name} ({ingredient.category})
                        </Chip>
                      ))}
                    </div>
                  )}
                </TabPanel>

                <TabPanel id="waste-tips" className="rounded-lg bg-slate-50/60 p-3 sm:p-4">
                  {!hasSubmitted ? (
                    <p className="text-sm leading-snug text-slate-500">
                      Submit ingredients to get waste-reduction tips.
                    </p>
                  ) : wasteTips.length === 0 ? (
                    <p className="text-sm leading-snug text-slate-500">
                      No tips available for the current input.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {wasteTips.map((tip) => (
                        <div
                          key={tip.title}
                          className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                        >
                          <div className="mb-0.5 flex items-center gap-2">
                            <p className="text-sm font-medium leading-snug text-slate-900">{tip.title}</p>
                            <Chip
                              size="sm"
                              color={tip.priority === 'high' ? 'warning' : 'default'}
                              variant="soft"
                            >
                              {tip.priority === 'high' ? 'Use soon' : 'Plan ahead'}
                            </Chip>
                          </div>
                          <p className="text-xs leading-snug text-slate-600">{tip.tip}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </TabPanel>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  )
}

export default App
