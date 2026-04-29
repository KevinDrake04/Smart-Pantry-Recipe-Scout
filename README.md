# Smart Pantry & Recipe Scout

Smart Pantry & Recipe Scout is a frontend-only CS485 project that helps users
turn available ingredients into practical meal ideas while reducing food waste.
It uses local rule-based logic in the browser, with no backend and no external
recipe API.

## Features

- Ingredient text input (comma-separated ingredients)
- **Local ingredient knowledge base** acting as a lightweight food database:
  **canonical ingredient IDs**, **aliases** (typos, singular/plural forms, and
  multi-word foods such as peanut butter), and **metadata** (category,
  perishability, storage tips, use ideas, optional substitutions)
- Raw input is normalized into canonical ingredient records for consistent matching
- Simulated fridge image input using **sample detected ingredient sets** (not real vision)
- Ingredient parsing with urgency cues (`old`, `leftover`, `expiring`, `almost bad`, `use soon`)
- Rule-based recipe recommendations matched against **canonical IDs** from local sample recipes
- Match percentage and missing ingredient display
- Substitution suggestions (recipe-level hints plus knowledge-base substitutions when available)
- Food waste reduction tips driven by urgency and ingredient metadata
- **Browser localStorage**: the latest pantry textarea content is saved locally and restored on reload (not a remote database)
- Fully local logic (no server calls, no external AI/recipe APIs at runtime)

### Scope and honesty

- **No remote database**: all ingredient definitions and recipes ship with the app as static data.
- **No real image recognition**: the simulated fridge section fills the textarea from **fixed sample ingredient lists** to mimic what detection might return.
- The **local knowledge base** keeps the app **reliable**, **simple to run** (no API keys or servers), and **frontend-only**, which matches the MVP and course constraints.

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS

## Project Setup

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)

### Install Dependencies

```bash
npm install
```

## Run Locally

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build (optional)

```bash
npm run preview
```

## Manual Test Inputs

Use these sample inputs in the ingredient textarea to verify behavior:

- `eggs, rice, spinach`
- `old spinach, leftover rice, eggg`
- `tomatos, pasta, cheese`
- `milk, bread, banana`
- empty input

Also test simulated samples in the **Simulated Fridge Image Input** section:

- Weeknight leftovers
- Breakfast basics
- Pasta night

## Important Note About Simulated Image Input

The simulated image input is **not real computer vision**. It uses **pre-defined
sample ingredient sets** to imitate what a fridge/pantry image recognition feature
might detect. Choosing a card only **loads text** into the ingredient field—the
app does not analyze photos.
