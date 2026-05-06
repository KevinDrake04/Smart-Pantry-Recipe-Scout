# AI Usage Report: Smart Pantry & Recipe Scout

## Tools Used

- **Cursor AI** — Primary assistant for code scaffolding, refactors, and in-editor iteration.
- **ChatGPT** — Brainstorming, drafting explanations, and second opinions on design tradeoffs.

This report reflects **honest** collaboration: AI produced drafts and suggestions; **I reviewed, edited, tested, and accepted responsibility** for what shipped.

---

## AI-Assisted Development Workflow

1. **Plan** — Describe goals and constraints (frontend-only, no backend, course requirements).
2. **Generate** — Ask AI for component/service sketches or refactors in small chunks.
3. **Review** — Read diffs for correctness, scope creep, and requirement mismatches.
4. **Run** — Execute `npm run dev`, `npm run build`, `npm run lint`, and manual browser checks.
5. **Iterate** — Refine prompts when output was wrong; fix edge cases by hand.
6. **Document** — Use AI to draft README/report text, then edit for accuracy and course voice.

---

## Example Prompts (5–10)

1. “Scaffold a React + TypeScript + Vite app with sections for ingredients, recipe suggestions, waste tips, and parsed output—frontend only, no API.”
2. “Implement a comma-separated ingredient parser with urgency words (`old`, `leftover`, …) stripped for matching but preserved on parsed items.”
3. “Design a local `ingredientKnowledgeBase` with canonical IDs, aliases for typos and multi-word foods, categories, perishability, storage, use ideas, and substitutions.”
4. “Build rule-based recipe scoring: match percentage, missing mains, substitutions, and a clear ‘why recommended’ string.”
5. “Add a simulated fridge component that fills the textarea from preset ingredient strings—clearly not real computer vision.”
6. “Wire HeroUI cards, buttons, and inputs for a cleaner dashboard layout and responsive grid.”
7. “Create a curation script that uses worker threads for per-row CPU work (ingredient resolution + directions parsing/cleaning + step selection), filters stale RecipeNLG source URLs, and outputs `src/data/curatedRecipes.ts` (without committing raw datasets).”
8. “Add deterministic cuisine/style inference with a strict allowed list; prefer General when uncertain.”
9. “Fix sorting/filter bugs for recipe suggestions and cuisine dropdown ordering, including pagination resets and match-threshold behavior.”
10. “Improve waste tips to use perishability and KB storage/use-idea text, and document match threshold + pagination UI expectations.”

---

## What AI Helped With

- **Initial project planning** and feature breakdowns aligned to assignment constraints.
- **React / Vite** file structure and TypeScript typings for services and data shapes.
- **GitFlow workflow** reminders (feature branches, develop/main integration, small reviewable changes)—I made the actual branching and merge decisions.
- **UI/UX** iterations using **HeroUI** and layout patterns (cards, tabs, pantry vs results).
- **Ingredient knowledge base** structure (IDs, aliases, metadata fields).
- **RecipeNLG curation script** skeleton: CSV streaming, normalization hooks, writing `curatedRecipes.ts`.
- **Dataset filtering** and **canonical ingredient matching** ideas (edge cases still required manual tuning).
- **Cuisine/style inference** rule ordering and consolidation into shared modules.
- **Quick Add filtering** — eligibility rules tied to recipe-catalog usage so staples/condiments stay typable but are hidden from one-click Quick Add.
- **Dataset audit script** (`scripts/auditRecipeCatalog.ts`) — ideas for reporting step sources, URL coverage, and simple quality checks.
- **Debugging** hints for filter/dropdown/search interactions.
- **Waste tips** structure and copy drafts.
- **Pagination** state and derived-list patterns (I verified ESLint rules and reset behavior).
- **Match threshold (“Min match”)** UI and filtering (segmented percentage buttons tied to the ranked suggestion list).
- **Documentation** first drafts for README and reports.

---

## What I Manually Reviewed, Modified, or Fixed

- **Requirement compliance**: frontend-only, no runtime external APIs, honest labeling of simulated features.
- **Parser and KB edge cases** — Multi-word ingredients, pepper vs bell pepper, typos, empty input.
- **Recommendation ranking** and substitution copy so outputs stay explainable.
- **Curation script** — Filters, validation, `CURATE_TARGET`, and verifying counts after regeneration.
- **Worker-thread optimization + caching** — debugging/iterating on `worker_threads` for per-row CPU work, and adding cache hit/miss stats to confirm speedups without behavior drift.
- **Recipe steps from original directions** — parsing/cleaning dataset `directions`, falling back to generated templates when unusable, and labeling `Recipe steps` vs `Suggested steps` honestly.
- **Stale source URL filtering** — blocking known unavailable domains (e.g. `cookbooks.com`) and ensuring “View source” only renders for valid `sourceUrl`.
- **Cuisine list** and inference order so broad labels do not steal confident regional styles.
- **UI behavior** — Tab order, pantry layout, filter resets, pagination resets, mobile layout.
- **Match threshold + pagination** — ensuring filter reset behavior, and adjusting the ranked UI suggestion pool size to keep pagination useful but bounded for performance.
- **All verification**: `npm run build`, `npm run lint`, manual test strings, and optional `npm run curate:recipes` when raw CSV is present.

---

## What I Learned About Using AI

- **Narrow prompts** with explicit constraints yield safer code than vague “build the app” requests.
- AI is fast at **boilerplate** but weak at **your exact course rules** unless you repeat them.
- **Human testing** (browser + build + lint) is non-negotiable for UI state bugs.
- Treat AI output as **proposals**—diff review catches scope creep and subtle logic errors.
- Document **limitations** up front so AI does not “invent” backends or APIs.

---

## Strengths of AI-Assisted Development

- Faster iteration on **repetitive UI** and **service-layer** scaffolding.
- Useful **starting points** for documentation and for complex scripts (curation).
- Good for exploring **alternative layouts** and **refactor strategies** before committing.

---

## Limitations and Mistakes Encountered

- Occasional **hallucinated APIs** or packages—always verify against `package.json` and real imports.
- Sometimes **over-engineered** solutions; I removed or simplified to match MVP scope.
- **ESLint / React** rule violations (e.g. state updates in effects) required manual refactors.
- **UX assumptions** that did not match the assignment—fixed after manual use.

---

## How I Verified the Output

- **Build**: `npm run build` must succeed.
- **Lint**: `npm run lint` must succeed.
- **Manual**: Course-provided and extended ingredient strings; simulated fridge; Quick Add searches; filters; pagination; empty input.
- **Curation** (when applicable): Run `npm run curate:recipes` (optionally with `CURATE_TARGET`, `CURATE_WORKERS`, and `CURATE_BATCH_SIZE`), inspect console counts/cache stats, then run `npm run audit:recipes` and spot-check `curatedRecipes.ts` header/sample rows (including sourceUrl + stepsSource).

---

## Manual Test Cases

1. `pasta, tomatoes, garlic, cheese`
2. `rice, black beans, salsa, cheese`
3. `eggs, rice, soy sauce`
4. `chicken, rice, broccoli`
5. `noodles, soy sauce, eggs`
6. `bread, cheese, tomatoes`
7. `tortilla, cheese, salsa`
8. `peanut butter, banana, bread`
9. `black pepper, salt, eggs`
10. `salt, black pepper, olive oil`
11. `old spinach, leftover rice, eggs`
12. `tomatos, cheeze, eggg`
13. *(empty input)* — verify the app handles it without breaking

### Quick Add Manual Checks
- `peanut butter` should appear
- `rice` should appear
- `eggs` should appear
- `chicken` should appear
- `soy sauce` should not appear in Quick Add, but should still parse when typed manually
- `black pepper` should not appear in Quick Add, but should still parse manually (and should not map to bell peppers)
- `salt` and oils should not appear in Quick Add

## Honesty Statement

AI tools generated **drafts and code suggestions**. I **reviewed, edited, tested, and refined prompts**, fixed **UX and logic issues**, and verified behavior through **lint, build, and manual testing**. The app **does not use a backend database**, **does not use real image recognition** (simulated fridge uses **sample ingredient sets**), **does not call external recipe APIs at runtime**, and relies on **local TypeScript data** plus optional **localStorage** for the pantry textarea. **Cuisine/style** is **inferred with deterministic rules** from titles and text during curation and is **broad, not perfect**. **Recipe steps** come from cleaned RecipeNLG `directions` when usable, otherwise the app shows generated fallback “Suggested steps”. **Original RecipeNLG source links are not guaranteed to work**; known bad domains are filtered during curation.
