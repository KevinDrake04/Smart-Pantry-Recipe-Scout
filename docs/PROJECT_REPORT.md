# CS485 Project Report: Smart Pantry & Recipe Scout

## 1) Goal and Design

### Goal
The goal of this project is to build a practical recipe assistant that helps
users:

- use ingredients they already have,
- handle incomplete or messy ingredient input,
- reduce food waste with actionable guidance.

### Design Summary
This application is built as a frontend-only React + TypeScript + Vite app.
All logic runs locally in the browser and is rule-based.

High-level flow:

1. User enters ingredients (text) or selects a simulated fridge sample.
2. Ingredients are parsed and normalized (trimmed, lowercased, typo-corrected).
3. Rule-based recommendation logic ranks recipe suggestions.
4. UI shows:
   - parsed ingredient results,
   - recipe match details (used/missing ingredients, match percentage),
   - substitutions,
   - waste reduction tips.

## 2) Assumptions

- MVP scope is frontend-only (no backend services).
- Recipe suggestions are based on local sample data, not live databases.
- Simulated image input uses predefined ingredient sets and does not perform real
  image recognition.
- Rule-based matching is sufficient for demonstrating recommendation logic for
  the course project.
- Users provide ingredients as comma-separated text.

## 3) Sample Input/Output

### Sample Input A
`old spinach, leftover rice, eggg`

Expected behavior:
- Parser normalizes `eggg` to `eggs`
- Detects urgency (`old`, `leftover`) as `use soon`
- Recipe section ranks recipes using eggs/rice/spinach near the top
- Waste tips prioritize spinach/rice usage due to urgency

### Sample Input B
`tomatos, pasta, cheeze, onion`

Expected behavior:
- Parser normalizes:
  - `tomatos` -> `tomatoes`
  - `cheeze` -> `cheese`
- Recipe suggestions include pasta-based options with match/missing details
- Substitution suggestions appear when mapped ingredients are missing

### Sample Input C
`milk, banana, bread`

Expected behavior:
- Suggests smoothie-related recipe/fallback options
- Displays match percentage and missing ingredients
- Waste tips suggest using fruit soon or freezing leftovers

## 4) Challenges

- Designing fuzzy parsing rules that improve input quality without overcomplicating
  implementation.
- Balancing recommendation ranking so results feel useful and explainable.
- Avoiding overengineering while still supporting multiple assignment requirements
  (parsing, recommendations, substitutions, waste tips, simulated image input).
- Keeping UX clear while displaying many recommendation details.

## 5) Limitations

- No real-time recipe API integration.
- No nutritional analysis or personalization.
- No actual computer vision/image recognition pipeline.
- Limited sample recipe dataset (small local set for MVP behavior).
- Rule-based matching may miss edge cases compared to ML/NLP-based systems.

## 6) Future Improvements

- Integrate a larger recipe knowledge source or API (if allowed in future scope).
- Add true image recognition for ingredient detection from uploaded photos.
- Improve fuzzy parsing with stronger synonym and misspelling support.
- Add user preferences (dietary restrictions, cuisine preferences, time limits).
- Add persistence (saved pantry/history) and optional backend services.
- Add test suite coverage for parser and recommendation services.
