import { useEffect, useMemo, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Label,
  ProgressBar,
  SearchField,
} from '@heroui/react'
import IngredientInput from './components/IngredientInput'
import IngredientPicker from './components/IngredientPicker'
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
import {
  buildOrderedCuisineFilterOptions,
  displayCuisine,
  filterRecipeSuggestions,
} from './utils/recipeSuggestionFilters'

const PANTRY_LOCAL_STORAGE_KEY = 'smart-pantry-recipe-scout-pantry-input-v1'

/** Visible rows per page in Recipe Suggestions (after search/cuisine filters). */
const RECIPES_PER_PAGE = 6

/** Show individual page buttons when there are at most this many pages. */
const MAX_PAGE_BUTTONS = 7

type ResultsTabKey = 'recipes' | 'parsed' | 'waste'

function App() {
  const [ingredientText, setIngredientText] = useState(() => {
    try {
      return localStorage.getItem(PANTRY_LOCAL_STORAGE_KEY) ?? ''
    } catch {
      return ''
    }
  })
  const [submittedIngredients, setSubmittedIngredients] = useState('')
  const [parsedIngredients, setParsedIngredients] = useState<ParsedIngredient[]>(
    []
  )
  const [recipeSuggestions, setRecipeSuggestions] = useState<RecipeSuggestion[]>(
    []
  )
  const [wasteTips, setWasteTips] = useState<WasteTip[]>([])

  const [recipeSearch, setRecipeSearch] = useState('')
  const [recipeCuisineFilter, setRecipeCuisineFilter] = useState('all')
  const [resultsTab, setResultsTab] = useState<ResultsTabKey>('recipes')
  const [recipePage, setRecipePage] = useState(1)

  const cuisineSelectItems = useMemo(
    () => buildOrderedCuisineFilterOptions(recipeSuggestions),
    [recipeSuggestions]
  )

  const effectiveRecipeCuisineFilter = useMemo(() => {
    if (recipeCuisineFilter === 'all') return 'all'
    return cuisineSelectItems.some((i) => i.id === recipeCuisineFilter)
      ? recipeCuisineFilter
      : 'all'
  }, [recipeCuisineFilter, cuisineSelectItems])

  const filteredSuggestions = useMemo(
    () =>
      filterRecipeSuggestions(
        recipeSuggestions,
        recipeSearch,
        effectiveRecipeCuisineFilter
      ),
    [recipeSuggestions, recipeSearch, effectiveRecipeCuisineFilter]
  )

  const totalPages = useMemo(() => {
    const n = filteredSuggestions.length
    if (n === 0) return 0
    return Math.ceil(n / RECIPES_PER_PAGE)
  }, [filteredSuggestions])

  /** Clamped page when filters shrink the result set (no effect sync). */
  const effectivePage = useMemo(() => {
    if (totalPages === 0) return 1
    return Math.min(Math.max(1, recipePage), totalPages)
  }, [recipePage, totalPages])

  const paginatedSuggestions = useMemo(() => {
    const start = (effectivePage - 1) * RECIPES_PER_PAGE
    return filteredSuggestions.slice(start, start + RECIPES_PER_PAGE)
  }, [filteredSuggestions, effectivePage])

  const recipeRangeLabel = useMemo(() => {
    const total = filteredSuggestions.length
    if (total === 0) return ''
    const start = (effectivePage - 1) * RECIPES_PER_PAGE + 1
    const end = Math.min(effectivePage * RECIPES_PER_PAGE, total)
    return `Showing ${start}–${end} of ${total} recipes`
  }, [filteredSuggestions.length, effectivePage])

  const hasRecipeFilterActive =
    recipeSearch.trim() !== '' || effectiveRecipeCuisineFilter !== 'all'

  const clearRecipeFilters = () => {
    setRecipeSearch('')
    setRecipeCuisineFilter('all')
    setRecipePage(1)
  }

  useEffect(() => {
    try {
      localStorage.setItem(PANTRY_LOCAL_STORAGE_KEY, ingredientText)
    } catch {
      /* ignore */
    }
  }, [ingredientText])

  const handleRecipeSearchChange = (value: string) => {
    setRecipeSearch(value)
    setRecipePage(1)
  }

  const handleRecipeCuisineChange = (value: string) => {
    setRecipeCuisineFilter(value.toLowerCase())
    setRecipePage(1)
  }

  const handleSubmit = () => {
    const parsed = parseIngredients(ingredientText)
    setSubmittedIngredients(ingredientText)
    setParsedIngredients(parsed)
    setRecipeSuggestions(generateRecipeSuggestions(parsed))
    setWasteTips(generateWasteTips(parsed))
    setRecipeSearch('')
    setRecipeCuisineFilter('all')
    setRecipePage(1)
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
    setRecipeSearch('')
    setRecipeCuisineFilter('all')
    setRecipePage(1)
    setResultsTab('recipes')
  }

  const hasSubmitted = submittedIngredients.trim() !== ''

  const showRecipePagination =
    filteredSuggestions.length > 0 && totalPages > 1

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

      <section aria-labelledby="pantry-setup-heading" className="mb-4">
        <Card className="rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <CardHeader className="border-b border-slate-100 px-4 pb-3 pt-4 sm:px-5">
            <div className="space-y-1">
              <h2
                id="pantry-setup-heading"
                className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg"
              >
                Pantry setup
              </h2>
              <p className="text-xs leading-snug text-slate-500 sm:text-sm">
                Enter ingredients, optionally pull from simulated fridge presets, quick-add staples,
                then run Find Recipes. Results appear below once submitted.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
            <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
              <div className="order-1 min-w-0 lg:col-span-7 xl:col-span-8">
                <IngredientInput
                  embedded
                  value={ingredientText}
                  onChange={setIngredientText}
                  onSubmit={handleSubmit}
                  onClearPantry={handleClearPantry}
                />
                {hasSubmitted && (
                  <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-snug text-slate-600">
                    <span className="font-semibold text-slate-700">Submitted:</span>{' '}
                    {submittedIngredients}
                  </div>
                )}
              </div>
              <div className="order-2 flex min-w-0 flex-col gap-3 lg:col-span-5 xl:col-span-4">
                <SimulatedImageInput
                  onSelectIngredients={setIngredientText}
                  selectedIngredients={ingredientText}
                />
                <IngredientPicker value={ingredientText} onChange={setIngredientText} />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="results-heading" className="mb-4">
        <div className="min-w-0">
          <div className="sr-only" id="results-heading">
            Recipe and pantry results
          </div>
          <Card className="rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <CardContent className="p-3 sm:p-4">
              <div
                className="mb-3 flex w-full flex-row flex-nowrap gap-1 rounded-xl border border-slate-200/95 bg-gradient-to-b from-slate-50 to-slate-100/90 p-1 shadow-inner"
                role="tablist"
                aria-label="Results sections"
              >
                <Button
                  type="button"
                  size="sm"
                  variant={resultsTab === 'recipes' ? 'primary' : 'secondary'}
                  className="min-h-9 min-w-0 flex-1 shrink rounded-lg px-1.5 text-xs font-semibold sm:px-2 sm:text-[13px]"
                  onPress={() => setResultsTab('recipes')}
                >
                  Recipe Suggestions
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={resultsTab === 'waste' ? 'primary' : 'secondary'}
                  className="min-h-9 min-w-0 flex-1 shrink rounded-lg px-1.5 text-xs font-semibold sm:px-2 sm:text-[13px]"
                  onPress={() => setResultsTab('waste')}
                >
                  Waste Tips
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={resultsTab === 'parsed' ? 'primary' : 'secondary'}
                  className="min-h-9 min-w-0 flex-1 shrink rounded-lg px-1.5 text-xs font-semibold sm:px-2 sm:text-[13px]"
                  onPress={() => setResultsTab('parsed')}
                >
                  Parsed Ingredients
                </Button>
              </div>

              {resultsTab === 'recipes' && (
                <div className="rounded-lg bg-slate-50/60 p-3 sm:p-4" role="tabpanel">
                  {!hasSubmitted ? (
                    <p className="text-sm leading-snug text-slate-500">
                      Submit ingredients to generate recommendations.
                    </p>
                  ) : recipeSuggestions.length === 0 ? (
                    <p className="text-sm leading-snug text-slate-500">
                      No matching recipes found. Try adjusting ingredients.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end">
                        <div className="min-w-0 flex-1 sm:min-w-[200px] sm:max-w-xs">
                          <Label className="mb-1 block text-xs font-medium text-slate-600">
                            Search
                          </Label>
                          <SearchField
                            value={recipeSearch}
                            onChange={handleRecipeSearchChange}
                            className="w-full"
                          >
                            <SearchField.Group>
                              <SearchField.SearchIcon className="size-4 text-slate-400" />
                              <SearchField.Input
                                placeholder="Search by recipe name"
                                className="text-sm"
                              />
                              <SearchField.ClearButton />
                            </SearchField.Group>
                          </SearchField>
                        </div>
                        <div className="relative z-[2] min-w-[min(100%,11.5rem)]">
                          <Label
                            htmlFor="recipe-cuisine-select"
                            className="mb-1 block text-xs font-medium text-slate-600"
                          >
                            Cuisine / Style
                          </Label>
                          <select
                            id="recipe-cuisine-select"
                            className="cuisine-style-select w-full max-w-full sm:w-auto sm:min-w-[12rem]"
                            value={effectiveRecipeCuisineFilter}
                            onChange={(e) =>
                              handleRecipeCuisineChange(e.target.value)
                            }
                            aria-label="Filter by cuisine or meal style"
                          >
                            {cuisineSelectItems.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        {hasRecipeFilterActive && (
                          <Button
                            type="button"
                            size="sm"
                            variant="secondary"
                            className="shrink-0"
                            onPress={clearRecipeFilters}
                          >
                            Clear filters
                          </Button>
                        )}
                      </div>
                      {filteredSuggestions.length === 0 ? (
                        <p className="text-sm leading-snug text-slate-600">
                          No recipes match those filters. Try clearing the search or choosing All
                          cuisines / styles.
                        </p>
                      ) : (
                        <>
                        <div className="grid gap-3 md:grid-cols-2">
                          {paginatedSuggestions.map((recipe, index) => (
                            <Card
                              key={`${recipe.title}-${displayCuisine(recipe)}-${recipe.matchPercentage}-${(effectivePage - 1) * RECIPES_PER_PAGE + index}`}
                              className="rounded-xl border border-slate-200 bg-white shadow-sm"
                            >
                              <CardContent className="space-y-2 p-3 sm:p-3.5">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <h3 className="min-w-0 flex-1 text-sm font-semibold leading-snug text-slate-900">
                                    {recipe.title}
                                  </h3>
                                  <div className="flex shrink-0 flex-wrap items-center justify-end gap-1.5">
                                    <Chip
                                      size="sm"
                                      color={recipe.matchPercentage >= 70 ? 'success' : 'accent'}
                                      variant="soft"
                                    >
                                      {recipe.matchPercentage}%
                                    </Chip>
                                    <Chip size="sm" variant="soft" color="default">
                                      {displayCuisine(recipe)}
                                    </Chip>
                                  </div>
                                </div>
                                <ProgressBar
                                  value={recipe.matchPercentage}
                                  color={recipe.matchPercentage >= 70 ? 'success' : 'accent'}
                                  aria-label={`${recipe.title} match`}
                                />
                                <p className="text-xs leading-snug text-slate-600">
                                  {recipe.matchSummary}
                                </p>
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
                        {showRecipePagination && (
                          <nav
                            className="mt-4 flex flex-col gap-3 border-t border-slate-200/90 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-2"
                            aria-label="Recipe list pages"
                          >
                            <p className="text-center text-xs text-slate-600 sm:text-left">
                              {recipeRangeLabel}
                            </p>
                            <div className="flex flex-col items-stretch gap-2 sm:flex-1 sm:flex-row sm:items-center sm:justify-end">
                              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-end">
                                <Button
                                  type="button"
                                  size="sm"
                                  variant="secondary"
                                  className="min-w-[5.5rem]"
                                  isDisabled={effectivePage <= 1}
                                  onPress={() =>
                                    setRecipePage(Math.max(1, effectivePage - 1))
                                  }
                                >
                                  Previous
                                </Button>
                                {totalPages <= MAX_PAGE_BUTTONS ? (
                                  <div
                                    className="flex flex-wrap items-center justify-center gap-1"
                                    role="group"
                                    aria-label="Page numbers"
                                  >
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                      (num) => (
                                        <Button
                                          key={num}
                                          type="button"
                                          size="sm"
                                          variant={
                                            effectivePage === num ? 'primary' : 'secondary'
                                          }
                                          className="min-w-8 px-2"
                                          onPress={() => setRecipePage(num)}
                                        >
                                          {num}
                                        </Button>
                                      )
                                    )}
                                  </div>
                                ) : (
                                  <span className="px-1 text-xs font-medium tabular-nums text-slate-700">
                                    Page {effectivePage} of {totalPages}
                                  </span>
                                )}
                                <Button
                                  type="button"
                                  size="sm"
                                  variant="secondary"
                                  className="min-w-[5.5rem]"
                                  isDisabled={effectivePage >= totalPages}
                                  onPress={() =>
                                    setRecipePage(
                                      Math.min(totalPages, effectivePage + 1)
                                    )
                                  }
                                >
                                  Next
                                </Button>
                              </div>
                            </div>
                          </nav>
                        )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {resultsTab === 'waste' && (
                <div className="rounded-lg bg-slate-50/60 p-3 sm:p-4" role="tabpanel">
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
                          key={tip.id}
                          className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                        >
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <p className="text-sm font-medium leading-snug text-slate-900">
                              {tip.headline}
                            </p>
                            <Chip
                              size="sm"
                              color={tip.priority === 'high' ? 'warning' : 'default'}
                              variant="soft"
                            >
                              {tip.priority === 'high' ? 'Use soon' : 'Plan ahead'}
                            </Chip>
                          </div>
                          <div className="space-y-2">
                            {tip.sections.map((section, si) => (
                              <div key={`${tip.id}-${section.label}-${si}`}>
                                <Chip
                                  size="sm"
                                  variant="soft"
                                  color="default"
                                  className="mb-0.5 font-medium"
                                >
                                  {section.label}
                                </Chip>
                                <p className="text-xs leading-snug text-slate-600">{section.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {resultsTab === 'parsed' && (
                <div className="rounded-lg bg-slate-50/60 p-3 sm:p-4" role="tabpanel">
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
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default App
