import { Button, TextArea } from '@heroui/react'
import type { ChangeEvent } from 'react'

type IngredientInputProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onClearPantry?: () => void
}

function IngredientInput({
  value,
  onChange,
  onSubmit,
  onClearPantry,
}: IngredientInputProps) {
  return (
    <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="space-y-1.5">
        <label
          htmlFor="ingredient-textarea"
          className="block text-sm font-semibold tracking-tight text-slate-900"
        >
          Enter ingredients (comma-separated)
        </label>
        <div className="rounded-lg border border-slate-200 bg-slate-50/40 px-3 py-2 shadow-inner transition-colors focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.18)]">
          <TextArea
            id="ingredient-textarea"
            rows={4}
            value={value}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              onChange(event.target.value)
            }
            placeholder="e.g. eggs, rice, spinach"
            variant="primary"
            className="min-h-[96px] w-full resize-y text-sm leading-snug text-slate-800 placeholder:text-slate-400"
          />
        </div>
        <p className="pl-0.5 text-xs leading-snug text-slate-500">
          Example: eggs, rice, old spinach, tomatos, onion
        </p>
        <p className="pl-0.5 text-[11px] leading-snug text-slate-400">
          Your latest text is remembered in this browser&apos;s local storage only (not sent to a
          server).
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <Button
          type="button"
          variant="primary"
          onPress={onSubmit}
          fullWidth
          size="sm"
          className="h-9 flex-1 rounded-lg border border-blue-600 bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:border-blue-700 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-[0.99]"
        >
          Find Recipes
        </Button>
        {onClearPantry && (
          <Button
            type="button"
            variant="secondary"
            onPress={onClearPantry}
            fullWidth
            size="sm"
            className="h-9 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-[0.99] sm:max-w-[140px]"
          >
            Clear pantry
          </Button>
        )}
      </div>
    </div>
  )
}

export default IngredientInput
