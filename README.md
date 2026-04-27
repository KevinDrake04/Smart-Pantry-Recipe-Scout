# Smart Pantry & Recipe Scout

Smart Pantry & Recipe Scout is a frontend-only CS485 project that helps users
turn available ingredients into practical meal ideas while reducing food waste.
It uses local rule-based logic in the browser, with no backend and no external
recipe API.

## Features

- Ingredient text input (comma-separated ingredients)
- Simulated fridge image input using sample ingredient sets
- Fuzzy ingredient parsing and typo correction (for common misspellings)
- Rule-based recipe recommendations from available ingredients
- Match percentage and missing ingredient display
- Substitution suggestions for common missing items
- Food waste reduction tips based on urgency and ingredient category
- Fully local logic (no server calls, no external AI/recipe APIs at runtime)

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

The simulated image input is **not real computer vision**. It uses pre-defined
sample ingredient sets to imitate what a fridge/pantry image recognition feature
might detect.
