# CS485 Project Report: Smart Pantry & Recipe Scout

## Project Goal

Build **Smart Pantry & Recipe Scout**, a practical web app that helps users:

- Find recipes from **ingredients they already have**
- Tolerate **messy or incomplete** ingredient text through normalization and aliases
- See **match quality**, **missing items**, and **substitution hints**
- Receive **food waste reduction tips** tied to urgency and ingredient metadata

The solution is intentionally **frontend-only**: **no backend database**, **no runtime external recipe API**, and **no real computer vision** in the MVP.

---

## Design Overview

The app is a **single-page React + TypeScript + Vite** client. Business logic lives in **services** (`ingredientParser`, `recipeGenerator`, `wasteTips`) and **data modules** (knowledge base, sample + curated recipes). The UI uses **HeroUI** components and **Tailwind**-oriented styling.

**Honest boundaries:**

- **Simulated fridge input** uses **fixed sample ingredient strings**, not photo analysis.
- **Recipes** come from **local TypeScript datasets** (`sampleRecipes` + `curatedRecipes`) generated or hand-authored; nothing is fetched from the network at runtime for recommendations.
- **Browser localStorage** may store the latest pantry textarea value for convenience; it is **not** a shared or server database.

---

## User Workflow

1. **Pantry setup (top of page)**  
   - Type comma-separated ingredients, **or** pick a **simulated fridge** preset, **or** **Quick Add** from the knowledge base (search + category groups).  
   - Submit with **Find Recipes**.

2. **Results (below)**  
   Tabs (fixed order): **Recipe Suggestions** → **Waste Tips** → **Parsed Ingredients**.

3. **Recipe Suggestions**  
   - Optional **search by recipe name** and **cuisine / style** filter (values come from stored recipe fields).  
   - **Pagination** shows a subset of the **filtered** list per page (default page size: 6).  
   - Cards show match %, cuisine/style chip, summary, used/missing, substitutions, rationale, time/difficulty, and short steps.

4. **Waste Tips**  
   Tips combine **urgency** from user phrasing with **perishability**, **storage**, and **use ideas** from the knowledge base.

5. **Parsed Ingredients**  
   Shows canonicalized ingredients after parsing (for transparency and debugging).

---

## Architecture

```text
User input (text / simulated fridge / quick add)
        │
        ▼
ingredientParser  ←→  ingredientKnowledgeBase (aliases, metadata)
        │
        ▼
ParsedIngredient[]  ────────────────┐
        │                           │
        ▼                           ▼
recipeGenerator                   wasteTips
(sampleRecipes + curatedRecipes)   (urgency + metadata)
        │                           │
        ▼                           ▼
RecipeSuggestion[]                WasteTip[]
        │
        ▼
recipeSuggestionFilters (search + cuisine) → pagination slice → UI
```

- **No mutation** of shared recipe arrays at runtime; filtering and pagination derive **new arrays** for display.
- **Ranking** is deterministic and runs over local catalog data only.

---

## Frontend Stack

| Layer | Choice |
|--------|--------|
| UI library | React |
| Language | TypeScript |
| Build | Vite |
| Components | HeroUI (`@heroui/react`) |
| Styling | Tailwind CSS + app CSS |

---

## Data Layer

| Asset | Role |
|--------|------|
| `ingredientKnowledgeBase.ts` | Canonical IDs, aliases, categories, perishability, tips, substitutions |
| `sampleRecipes.ts` | Hand-authored examples for demos and edge cases |
| `curatedRecipes.ts` | Large NLG-derived set (on the order of **~50,000** recipes when generated with `CURATE_TARGET=50000`, subject to raw CSV size and curation filters) |
| `recipeTypes.ts` | `RecipeDef`, strict **`CUISINE_STYLES`** list, `CuisineStyle` type |
| `cuisineStyleInference.ts` | Shared deterministic rules used by the curation script |

**Raw RecipeNLG CSV** belongs under **`data/raw/`**, is **gitignored**, and should **not** be committed. The **curated TypeScript output** is what ships with the repo for predictable builds.

---

## Ingredient Knowledge Base

- **Canonical IDs** (e.g. `black-pepper`, `peanut-butter`) keep matching stable across typos and wording.
- **Aliases** map plurals, singulars, common typos, and multi-word foods so user text collapses to one ID per phrase where possible.
- **Category** supports grouping in Quick Add and downstream logic.
- **Perishability**, **storage tips**, **use ideas**, and **substitutions** feed waste tips and substitution lines.

Unknown fragments can still become safe fallback records so the UI does not crash.

---

## RecipeNLG Curation Pipeline

Script: **`scripts/curateRecipeDataset.ts`**

1. Stream rows from a CSV under **`data/raw/`** (or path from `RECIPE_NLG_CSV`).
2. Parse ingredient and direction fields; resolve lines to **canonical IDs** via the knowledge base.
3. Split **main** vs **low-weight staple** ingredients using KB flags.
4. Apply quality filters (minimum mains, reasonable counts, dedupe by normalized title).
5. Assign **`cuisineStyle`** using shared **`inferCuisineStyleFromSignals`** (`src/data/cuisineStyleInference.ts`) — **deterministic**, **broad**, prefer **General** when uncertain.
6. Parse and clean original RecipeNLG **`directions`** into a short step array when usable.
   - If at least 3 cleaned dataset steps pass basic validation → store them as dataset steps (`stepsSource="dataset"`).
   - If directions are missing/unusable → use the existing generated fallback templates (`stepsSource="generated"`).
7. Normalize and filter RecipeNLG source URLs (store `sourceUrl` / `sourceName` only when valid and not blocked for known stale/unavailable domains), validate labels against **`CUISINE_STYLES`**; log counts per style; write **`src/data/curatedRecipes.ts`**.

Regenerate with:

```bash
npm run curate:recipes
```

### Example (PowerShell, fast/local and full runs)

```powershell
$env:CURATE_TARGET="5000"; $env:CURATE_WORKERS="12"; $env:CURATE_BATCH_SIZE="2500"; npm run curate:recipes
```

```powershell
$env:CURATE_TARGET="50000"; $env:CURATE_WORKERS="12"; $env:CURATE_BATCH_SIZE="2500"; npm run curate:recipes
```

### Worker-thread curation optimization

`npm run curate:recipes` uses `worker_threads` to parallelize CPU-heavy per-row processing (ingredient phrase resolution, directions parsing/cleaning, and dataset-vs-generated step selection). The main thread remains responsible for global dedupe/balancing and for writing `src/data/curatedRecipes.ts`. Worker-local caches reduce repeated alias/phrase resolution work.

---

## Recipe Recommendation Logic

- **Main ingredients** (meaningful, non-staple) drive **match percentage** and **missing** lists.
- Recipes are **scored and sorted** by missing count, meaningful matches, urgent-ingredient use, and match %.
- A **fallback path** can propose simple pantry-friendly ideas when the main pool is thin.
- **Substitutions** combine hand-tuned strings and knowledge-base substitution entries where available.

The UI passes only a **bounded ranked pool** of top suggestions into search/filter/pagination so interaction stays responsive.

This pool is capped at **`MAX_RECIPE_SUGGESTIONS = 120`**. With **6 recipes per page**, pagination can reach up to ~20 pages when enough recipes match.

---

## Cuisine / Style Inference

- **Allowed values** are fixed in **`CUISINE_STYLES`** / **`CuisineStyle`** in `recipeTypes.ts`.
- **Curated recipes** store **`cuisineStyle`** at build time of `curatedRecipes.ts`.
- The UI reads **stored** labels for chips and filters; runtime fallback may coerce invalid legacy data to **General**.
- Inference uses **title, ingredient text, and direction snippets** with **ordered rules** (e.g. strong regional signals before broad buckets like Pasta or Sandwich). Results are **not perfect** and remain **high-level labels**.

---

## Food Waste Tips Logic

Tips are generated from **parsed ingredients**:

- **Urgency** phrases (`old`, `leftover`, `use soon`, etc.) raise priority.
- **Perishability** and **category** tune messaging.
- **Storage tips** and **use ideas** from the knowledge base are woven into actionable suggestions.

---

## Quick Add Ingredient Filtering

The Quick Add picker intentionally shows only ingredient IDs that are more likely to be meaningful recipe drivers.

Instead of listing every knowledge-base entry, it uses recipe-catalog support signals to hide many pantry-only/staple/seasoning items (for example `salt`, many oils/spices, and other low-match condiments). Manual typing still supports the full ingredient knowledge base, so users can type `soy sauce`, `black pepper`, or `salt` and the parser can resolve them even if Quick Add hides them.

---

## Assumptions

- Users accept **comma-oriented** text entry and occasional parser ambiguity on exotic phrases.
- **Course / MVP scope** stays frontend-only unless explicitly expanded.
- **Cuisine labels** are informative, not authoritative culinary taxonomy.
- **Recipe steps** are teaching/demo-friendly. When curated dataset `directions` are usable, the app uses cleaned dataset steps; otherwise it uses generated fallback templates.

---

## Sample Input / Output

### Input: `old spinach, leftover rice, eggg`

- `eggg` → eggs via aliases; spinach/rice normalized; **use soon** urgency on spinach/rice.
- Recipes favoring those IDs rank higher; waste tips stress using urgent items.

### Input: `tomatos, cheeze, eggg`

- Typos map to tomatoes, cheese, eggs.
- Suggestions include matches with clear used/missing breakdown.

### Input: `pasta, tomatoes, garlic, cheese`

- Strong Italian/pasta-style recipes may appear among top matches; cuisine chip reflects **stored** `cuisineStyle`.

### Input: *(empty)*

- Submitting empty input should yield an empty or guarded experience without breaking the app.

---

## Challenges

- Designing **alias resolution** so multi-word ingredients (e.g. peanut butter vs butter) and pepper variants stay distinct.
- Scaling to **thousands of curated recipes** while keeping bundle size and UX (filters + pagination) manageable.
- **Cuisine inference** that is useful but not over-confident.
- Clear UX for **pantry setup vs results** and **pagination** without confusing state.

---

## Limitations

- **No backend database**; all static data is bundled; localStorage is browser-local only.
- **No real image recognition**; simulated fridge uses sample lists only.
- **Large curated dataset** — Committing tens of thousands of recipes in `curatedRecipes.ts` **increases frontend bundle size** and can affect dev/build times compared to a tiny demo set.
- **Cuisine/style** is **rule-based** and **approximate**; it is **not** perfect culinary classification.
- **Recipe steps** come from cleaned dataset directions when usable; otherwise the app uses generated fallback templates (“Suggested steps”).
- **Stale RecipeNLG source URLs** — Not every original publisher link remains valid; known broken/unavailable domains are filtered at curation time, and the UI shows “View source” only when a valid, non-blocked `sourceUrl` exists.
- **Knowledge base** cannot cover every ingredient worldwide.

---

## Future Improvements

- Unit/integration tests for parser, filters, and recommendation edge cases.
- Optional API or backend only if scope allows.
- Expanded KB (allergens, diets, regional names).
- Real image pipeline only with explicit scope and privacy review.

---

## Testing Summary

Manual verification regularly covers:

- Representative pantry strings (including typos and urgency).
- Simulated fridge presets and Quick Add searches (`peanut butter`, `black pepper`, `bell peppers`).
- **Find Recipes**, **search**, **cuisine filter**, **min match** threshold, and **pagination** (page changes, filter resets).
- **Build**: `npm run build`; **lint**: `npm run lint`.
- **Curation** (when raw CSV available): `npm run curate:recipes` with expected row counts and console histogram.
- **Audit**: `npm run audit:recipes` for step/source coverage and basic quality stats on `curatedRecipes.ts`.

Automated test suites are a documented future improvement rather than a current requirement.
