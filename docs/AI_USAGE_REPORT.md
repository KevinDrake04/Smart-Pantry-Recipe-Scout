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
7. “Create a Node script that streams RecipeNLG CSV, resolves ingredients through the KB, outputs `curatedRecipes.ts`, and skips committing raw data.”
8. “Add deterministic cuisine/style inference with a strict allowed list; prefer General when uncertain.”
9. “Fix sorting/filter bugs for recipe suggestions and cuisine dropdown ordering.”
10. “Improve waste tips to use perishability and KB storage/use-idea text.”
11. “Add pagination for recipe suggestions after search and cuisine filters, with reset behavior on new pantry submit.”
12. “Update README, project report, and AI usage report for the current feature set.”

---

## What AI Helped With

- **Initial project planning** and feature breakdowns aligned to assignment constraints.
- **React / Vite** file structure and TypeScript typings for services and data shapes.
- **GitFlow-style** reminders (feature branches, small commits)—I made the actual Git decisions.
- **UI/UX** iterations using **HeroUI** and layout patterns (cards, tabs, pantry vs results).
- **Ingredient knowledge base** structure (IDs, aliases, metadata fields).
- **RecipeNLG curation script** skeleton: CSV streaming, normalization hooks, writing `curatedRecipes.ts`.
- **Dataset filtering** and **canonical ingredient matching** ideas (edge cases still required manual tuning).
- **Cuisine/style inference** rule ordering and consolidation into shared modules.
- **Debugging** hints for filter/dropdown/search interactions.
- **Waste tips** structure and copy drafts.
- **Pagination** state and derived-list patterns (I verified ESLint rules and reset behavior).
- **Documentation** first drafts for README and reports.

---

## What I Manually Reviewed, Modified, or Fixed

- **Requirement compliance**: frontend-only, no runtime external APIs, honest labeling of simulated features.
- **Parser and KB edge cases** — Multi-word ingredients, pepper vs bell pepper, typos, empty input.
- **Recommendation ranking** and substitution copy so outputs stay explainable.
- **Curation script** — Filters, validation, `CURATE_TARGET`, and verifying counts after regeneration.
- **Cuisine list** and inference order so broad labels do not steal confident regional styles.
- **UI behavior** — Tab order, pantry layout, filter resets, pagination resets, mobile layout.
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
- **Curation** (when applicable): Run `npm run curate:recipes`, inspect console counts, spot-check `curatedRecipes.ts` header and sample rows.

---

## Honesty Statement

AI tools generated **drafts and code suggestions**. I **reviewed, edited, tested, and refined prompts**, fixed **UX and logic issues**, and verified behavior through **lint, build, and manual testing**. The app **does not use a backend database**, **does not use real image recognition** (simulated fridge uses **sample ingredient sets**), and relies on **local TypeScript data** plus optional **localStorage** for the pantry textarea. **Cuisine/style** is **inferred with deterministic rules** from titles and text during curation and is **broad, not perfect**. **Recipe steps** in curated data are **simplified for the app**, not full original dataset directions.
