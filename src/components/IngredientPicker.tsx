import { useMemo, useState } from 'react'
import { Button, Label, SearchField } from '@heroui/react'
import {
  INGREDIENT_KNOWLEDGE_BASE,
  normalizeIngredientPhrase,
  type IngredientCategory,
  type IngredientRecord,
} from '../data/ingredientKnowledgeBase'
import { parseIngredients } from '../services/ingredientParser'
import { togglePantryIngredient } from '../utils/pantryIngredientText'

const CATEGORY_ORDER: IngredientCategory[] = [
  'protein',
  'grain',
  'vegetable',
  'fruit',
  'dairy',
  'legume',
  'pantry',
  'condiment',
  'other',
]

function categoryHeading(cat: IngredientCategory): string {
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

function ingredientMatchesQuery(ing: IngredientRecord, q: string): boolean {
  if (!q) return true
  const n = normalizeIngredientPhrase(q)
  const hay = [
    ing.name,
    ing.id,
    ...ing.aliases,
  ].map((s) => normalizeIngredientPhrase(s))
  return hay.some((h) => h.includes(n))
}

type IngredientPickerProps = {
  value: string
  onChange: (next: string) => void
}

export default function IngredientPicker({ value, onChange }: IngredientPickerProps) {
  const [filter, setFilter] = useState('')

  const selectedIds = useMemo(() => {
    const ids = new Set<string>()
    for (const p of parseIngredients(value)) {
      ids.add(p.id)
    }
    return ids
  }, [value])

  const filteredByCategory = useMemo(() => {
    const map = new Map<IngredientCategory, IngredientRecord[]>()
    for (const cat of CATEGORY_ORDER) map.set(cat, [])
    /** Every KB row is listed once; unknown categories fall back to “other”. */
    for (const ing of INGREDIENT_KNOWLEDGE_BASE) {
      if (!ingredientMatchesQuery(ing, filter)) continue
      const bucket: IngredientCategory = map.has(ing.category) ? ing.category : 'other'
      map.get(bucket)?.push(ing)
    }
    for (const [, arr] of map) {
      arr.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
    }
    return map
  }, [filter])

  const handleToggle = (id: string) => {
    onChange(togglePantryIngredient(value, id))
  }

  return (
    <section
      aria-label="Quick add ingredients"
      className="rounded-xl border border-slate-200 bg-slate-50/80 p-3 shadow-inner"
    >
      <div className="space-y-1">
        <h3 className="text-sm font-semibold tracking-tight text-slate-900">
          Quick add ingredients
        </h3>
        <p className="text-xs leading-snug text-slate-500">
          Click ingredients to add or remove them from your pantry.
        </p>
      </div>
      <div className="mt-2 space-y-2">
        <Label className="sr-only">Filter ingredient list</Label>
        <SearchField value={filter} onChange={setFilter} className="w-full">
          <SearchField.Group>
            <SearchField.SearchIcon className="size-4 text-slate-400" />
            <SearchField.Input
              placeholder="Search ingredients…"
              className="text-xs"
              aria-label="Filter ingredients by name or alias"
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <div className="mt-2 max-h-52 overflow-y-auto overflow-x-hidden pr-1 [-ms-overflow-style:none] [scrollbar-gutter:stable] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/90 [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="space-y-3">
          {CATEGORY_ORDER.map((cat) => {
            const items = filteredByCategory.get(cat) ?? []
            if (items.length === 0) return null
            return (
              <div key={cat}>
                <p className="text-[11px] font-semibold text-slate-500">
                  {categoryHeading(cat)}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {items.map((ing) => {
                    const selected = selectedIds.has(ing.id)
                    return (
                      <Button
                        key={ing.id}
                        type="button"
                        size="sm"
                        variant={selected ? 'primary' : 'secondary'}
                        className="h-auto min-h-7 rounded-full px-2.5 py-1 text-xs font-medium"
                        onPress={() => handleToggle(ing.id)}
                      >
                        {ing.name}
                      </Button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
