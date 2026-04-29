# Smart Pantry & Recipe Scout

**Smart Pantry & Recipe Scout** is a frontend-only React + TypeScript + Vite application that helps users discover recipes from ingredients they already have. It combines manual ingredient entry, simulated fridge presets, quick-add chips from a local knowledge base, fuzzy parsing with canonical normalization, ranked recipe suggestions (with search, cuisine/style filtering, and pagination), and food waste reduction tips—all in the browser with **no backend** and **no runtime calls to external APIs**.

---

## Features

- **Manual ingredient text input** — Comma-separated pantry lists; latest text can persist in the browser.
- **Simulated fridge image input** — Loads sample “detected” ingredient sets into the textarea (not real image recognition).
- **Quick Add Ingredients** — Browse/search the full local ingredient knowledge base by category; toggles sync with the textarea.
- **Local ingredient knowledge base** — Canonical IDs, aliases (plurals, singulars, typos, multi-word foods), category and perishability metadata, storage tips, use ideas, and substitutions.
- **Alias examples** — e.g. `tomatos` → tomatoes, `cheeze` → cheese, `eggg` → eggs; **“black pepper”** resolves to pepper, not bell peppers; **“peanut butter”** stays a distinct ingredient from butter.
- **Recipe recommendations** — Ranked by match quality against curated + sample recipes; shows used vs missing mains, match percentage, substitutions, and short reasons.
- **RecipeNLG-based curation** — Optional script streams a RecipeNLG-style CSV, resolves ingredients through the knowledge base, infers cuisine/style, and emits `src/data/curatedRecipes.ts` (~10,000 rows when `CURATE_TARGET=10000` and the raw file supports it).
- **Cuisine / style** — Strict allowed list on the TypeScript side; labels assigned at curation time via deterministic rules (broad, conservative; uncertain → General).
- **Recipe search** — Filter suggestions by recipe title.
- **Cuisine / style filter** — Narrow suggestions using stored labels.
- **Pagination** — Recipe Suggestions tab shows a fixed page size (default 6 per page) so long lists stay manageable.
- **Food waste tips** — Driven by urgency cues, perishability, storage metadata, and use ideas.
- **localStorage** — Saves the latest pantry textarea content for convenience only (not a server database).

---

## Tech Stack

- **React** (UI)
- **TypeScript**
- **Vite** (build tool and dev server)
- **HeroUI** (`@heroui/react`) — Components (buttons, cards, inputs, chips, etc.)
- **Tailwind CSS** — Styling alongside component-level CSS

---

## Project Structure

High-level layout:

```text
smart-pantry-recipe-scout/
├── data/
│   └── raw/                 # Place RecipeNLG CSV here (gitignored — see below)
├── docs/
│   ├── PROJECT_REPORT.md
│   └── AI_USAGE_REPORT.md
├── public/
├── scripts/
│   └── curateRecipeDataset.ts   # Streams CSV → curatedRecipes.ts
├── src/
│   ├── App.tsx                # Main UI: pantry setup, results tabs, filters, pagination
│   ├── components/            # IngredientInput, IngredientPicker, SimulatedImageInput, …
│   ├── data/
│   │   ├── ingredientKnowledgeBase.ts
│   │   ├── sampleRecipes.ts
│   │   ├── curatedRecipes.ts    # Generated; committed when present
│   │   ├── recipeTypes.ts       # RecipeDef, CUISINE_STYLES, …
│   │   └── cuisineStyleInference.ts
│   ├── services/              # ingredientParser, recipeGenerator, wasteTips
│   └── utils/                 # Filters, pantry text helpers, …
├── index.html
├── package.json
└── README.md
```

---

## Setup

### Prerequisites

- **Node.js** 18+ (recommended)
- **npm** 9+ (recommended)

### Install dependencies

```bash
npm install
```

---

## How to Run Locally

Start the Vite development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

Optional: preview a production build after `npm run build`:

```bash
npm run preview
```

---

## How to Build

```bash
npm run build
```

Produces optimized assets under `dist/`.

---

## How to Lint

```bash
npm run lint
```

---

## How to Regenerate Curated Recipes

1. Place a RecipeNLG-style CSV (or compatible export) under **`data/raw/`** (for example `RecipeNLG_dataset.csv`). The curation script discovers CSV files in that folder or honors `RECIPE_NLG_CSV` if set.
2. Run:

```bash
npm run curate:recipes
```

Default target size is **10,000** recipes (`CURATE_TARGET`); adjust if needed.

**PowerShell (Windows) example — generate up to 10,000 curated rows:**

```powershell
$env:CURATE_TARGET="10000"; npm run curate:recipes
```

This writes **`src/data/curatedRecipes.ts`**. Commit that file if your course workflow expects it; the **raw CSV stays out of Git**.

---

## Data: `data/raw/` and Git

- **`data/raw/`** is listed in `.gitignore`. Large RecipeNLG dumps should live here locally and **must not be committed**.
- **`src/data/curatedRecipes.ts`** is the normalized, app-sized dataset derived from the script and **may be committed** so the app builds without the raw file on every machine.

---

## localStorage Behavior

- The app stores the **latest ingredient textarea text** under a versioned key so a refresh can restore what you typed.
- Data stays **in your browser** on this origin only; there is **no server sync** and **no account**.

---

## Manual Test Cases

Use these in the ingredient field (and optionally Simulated Fridge / Quick Add). Submit with **Find Recipes** and check Recipe Suggestions, filters, pagination, Waste Tips, and Parsed Ingredients as appropriate.

| # | Input |
|---|--------|
| 1 | `pasta, tomatoes, garlic, cheese` |
| 2 | `rice, black beans, salsa, cheese` |
| 3 | `eggs, rice, soy sauce` |
| 4 | `chicken, rice, broccoli` |
| 5 | `peanut butter, banana, bread` |
| 6 | `black pepper, salt, eggs` |
| 7 | `salt, black pepper, olive oil` |
| 8 | `old spinach, leftover rice, eggs` |
| 9 | `tomatos, cheeze, eggg` |
| 10 | *(empty)* — submit to verify empty/edge handling |

Also try **Simulated Fridge Image Input** presets (e.g. weeknight leftovers, breakfast basics, pasta night) and **Quick Add** searches such as `peanut butter`, `black pepper`, and `bell peppers` to confirm distinct canonical matches.

---

## Limitations

- **No backend or database** — All recipes and ingredient definitions ship as static TypeScript/data in the bundle (plus optional localStorage for textarea text).
- **No real image recognition** — Simulated fridge cards only paste predefined ingredient strings.
- **No runtime external recipe or AI APIs** — Recommendations are rule-based over local data.
- **Cuisine/style labels** are **inferred with deterministic rules** during curation; they are **broad** and **not guaranteed** to match a human chef’s taxonomy.
- **Curated recipe steps** are **short synthesized summaries** for the app, not full original RecipeNLG directions.
- **Knowledge base coverage** — Rare ingredients or spellings may not resolve to ideal canonical IDs.
- **Recommendation pool** — The UI works with a bounded pool of top suggestions for performance and filtering; extremely large match sets are paginated for readability, not all catalog recipes at once.

---

## Future Improvements

- Automated tests (parser, filters, recommendation edge cases).
- Optional backend or sync only if course/product scope allows.
- Richer knowledge base (more ingredients, allergens, diets).
- Optional true image / barcode flows behind explicit scope.
- User preferences (time, diet, cuisine) persisted beyond a single textarea.
- Further UX polish and accessibility audits.

---

## License / Course Context

Built as a **CS485** project emphasizing **frontend-only**, **local rule-based** logic, and **honest** documentation of simulated vs. real capabilities.
