# Smart Pantry & Recipe Scout

**Smart Pantry & Recipe Scout** is a frontend-only React + TypeScript + Vite application that helps users discover recipes from ingredients they already have. It combines manual ingredient entry, simulated fridge presets, quick-add chips from a local knowledge base, fuzzy parsing with canonical normalization, ranked recipe suggestions (with search, cuisine/style filtering, and pagination), and food waste reduction tips—all in the browser with **no backend** and **no runtime calls to external APIs**.

---

## Features

- **Manual ingredient text input** — Comma-separated pantry lists; latest text can persist in the browser.
- **Simulated fridge image input** — Loads sample “detected” ingredient sets into the textarea (not real image recognition).
- **Quick Add Ingredients** — Compact category browsing over the local ingredient knowledge base. Quick Add intentionally hides many “pantry-only” items (e.g. salt, most oils, and many seasonings/spices) so one-click selections usually generate useful recipe matches. Manual typing still supports the full knowledge base.
- **Local ingredient knowledge base** — Canonical IDs, aliases (plurals, singulars, typos, multi-word foods), category and perishability metadata, storage tips, use ideas, and substitutions.
- **Alias examples** — e.g. `tomatos` → tomatoes, `cheeze` → cheese, `eggg` → eggs; **“black pepper”** resolves to pepper, not bell peppers; **“peanut butter”** stays a distinct ingredient from butter.
- **Recipe recommendations** — Ranked by match quality against curated + sample recipes; shows used vs missing mains, match percentage, substitutions, and short reasons.
- **RecipeNLG-based curation** — Script streams a RecipeNLG-style CSV, resolves ingredients through the knowledge base, infers cuisine/style, and emits `src/data/curatedRecipes.ts` (default target **50,000** when `CURATE_TARGET=50000`). The pipeline uses `worker_threads` for CPU-heavy work and includes local caching to keep it fast.
- **Cuisine / style** — Strict allowed list on the TypeScript side; labels assigned at curation time via deterministic rules (broad, conservative; uncertain → General).
- **Recipe search** — Filter suggestions by recipe title.
- **Cuisine / style filter** — Narrow suggestions using stored labels.
- **Pagination** — Recipe Suggestions tab shows a fixed page size (default **6 per page**). The ranked suggestion pool feeding search/filter/pagination is bounded for UI performance, so pagination can grow (up to ~20 pages when many recipes match) without flooding the UI.
- **Match threshold (“Min match”)** — Compact segmented buttons (25%+, 50%+, 75%+, 90%) filter recipes by minimum match percentage.
- **View source links** — RecipeNLG `sourceUrl` is normalized/validated and **blocked** for known stale/unavailable domains; the UI only shows “View source” when a valid non-blocked `sourceUrl` exists.
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
│   ├── curateRecipeDataset.ts   # Streams CSV → curatedRecipes.ts (main thread)
│   └── curateRecipeDataset.worker.ts   # worker_threads batch processor
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

Default target size is **50,000** recipes (`CURATE_TARGET`); adjust if needed.

**PowerShell (Windows) examples**

Fast/local curation (benchmark-style):
```powershell
$env:CURATE_TARGET="5000"; $env:CURATE_WORKERS="12"; $env:CURATE_BATCH_SIZE="2500"; npm run curate:recipes
```

Full curation:
```powershell
$env:CURATE_TARGET="50000"; $env:CURATE_WORKERS="12"; $env:CURATE_BATCH_SIZE="2500"; npm run curate:recipes
```

This writes **`src/data/curatedRecipes.ts`**. Commit that file if your course workflow expects it; the **raw CSV stays out of Git**.

---
## How to Audit Curated Recipes

Run the audit script to inspect coverage and basic quality checks:

```bash
npm run audit:recipes
```

The audit is a lightweight console report (no network calls) that helps confirm cuisine/style coverage, step source usage, and step quality (e.g. too few/duplicate steps).

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
| 5 | `noodles, soy sauce, eggs` |
| 6 | `bread, cheese, tomatoes` |
| 7 | `tortilla, cheese, salsa` |
| 8 | `peanut butter, banana, bread` |
| 9 | `black pepper, salt, eggs` |
| 10 | `salt, black pepper, olive oil` |
| 11 | `old spinach, leftover rice, eggs` |
| 12 | `tomatos, cheeze, eggg` |
| 13 | *(empty)* — submit to verify empty/edge handling |

Also try **Simulated Fridge Image Input** presets (e.g. weeknight leftovers, breakfast basics, pasta night) to confirm the textarea fills with sample “detected” ingredients.

### Quick Add manual checks
- Search and toggle `peanut butter` (should appear)
- Search and toggle `rice` (should appear)
- Search and toggle `eggs` (should appear)
- Search and toggle `chicken` (should appear)
- Search `soy sauce` (should *not* appear in Quick Add; typing it manually should still parse)
- Search `black pepper` (should *not* appear in Quick Add; typing it manually should still parse and should not map to bell peppers)
- Search `salt` and common oils (should *not* appear in Quick Add)

---

## Limitations

- **No backend or database** — All recipes and ingredient definitions ship as static TypeScript/data in the bundle (plus optional localStorage for textarea text).
- **No real image recognition** — Simulated fridge cards only paste predefined ingredient strings.
- **No runtime external recipe or AI APIs** — Recommendations are rule-based over local data.
- **Cuisine/style labels** are **inferred with deterministic rules** during curation; they are **broad** and **not guaranteed** to match a human chef’s taxonomy.
- **Recipe steps** come from cleaned RecipeNLG `directions` when usable; otherwise the app shows generated fallback “Suggested steps”.
- **Knowledge base coverage** — Rare ingredients or spellings may not resolve to ideal canonical IDs.
- **Recommendation pool** — The UI works with a bounded pool of ranked suggestions (max 120) for performance and filtering; extremely large match sets are paginated for readability, not all catalog recipes at once.

- **Stale source URLs** — RecipeNLG `sourceUrl` values are normalized/validated and blocked for known unavailable domains (e.g. `cookbooks.com`), so cards show “View source” only when a valid non-blocked URL exists.

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
