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
All logic runs locally in the browser and is rule-based. The app **does not use
a remote database**; ingredient definitions and recipes are bundled as static
data. The **simulated fridge image input** does **not** perform image
recognition—it applies **sample detected ingredient sets** to mimic a future
feature while keeping the MVP simple and honest.

High-level flow:

1. User enters ingredients (text) or selects a simulated fridge sample (predefined strings).
2. **Raw input is normalized into canonical ingredient records**:
   - Comma-separated fragments are trimmed and lowercased.
   - Urgency phrases are detected and stripped for matching (`old`, `leftover`,
     `expiring`, `almost bad`, `use soon`), while still flagging urgency on the parsed item.
   - Each fragment is resolved through a **local ingredient knowledge base**:
     aliases map typos, plurals/singulars, and multi-word foods to a **canonical
     ingredient ID**; the result includes **category**, **perishability**,
     **storage tips**, **use ideas**, and optional **substitutions**.
   - **Unknown** fragments still become safe, labeled **canonical records** with
     category `other` so the UI and tips do not break.
3. **Recipes match against canonical IDs** stored in the local recipe dataset (not free-text variants like `tomato` vs `tomatoes`).
4. Rule-based recommendation logic ranks recipe suggestions (missing mains, match strength, urgency-aware use of soon-to-expire items).
5. UI shows:
   - parsed ingredient results (canonical identity + metadata-driven display),
   - recipe match details (used/missing ingredients, match percentage),
   - substitutions,
   - waste reduction tips that **use ingredient metadata** (perishability, storage, use ideas) plus urgency.

**Browser localStorage** (not a backend) stores the latest pantry textarea value
so a refresh can restore what the user last typed or edited.

## 2) Assumptions

- MVP scope is frontend-only (no backend services, no hosted database).
- Recipe suggestions are based on local sample data **keyed by canonical ingredient IDs**, not live external databases.
- Simulated image input uses predefined ingredient sets only; **no computer vision pipeline** runs in the browser.
- The **local knowledge base** was chosen to keep the app **reliable**, **easy to run anywhere**, and **fully offline/frontend-only** without API keys.
- Users provide ingredients as comma-separated text.

## 3) Sample Input/Output

### Sample Input A
`old spinach, leftover rice, eggg`

Expected behavior:
- Parser maps `eggg` to the canonical ID for eggs (via aliases), with **use soon** urgency from `old` / `leftover`
- Recipe section ranks recipes that use eggs, rice, and/or spinach appropriately
- Waste tips prioritize urgent items and draw on **storage/use-idea metadata** where available

### Sample Input B
`tomatos, pasta, cheeze, onion`

Expected behavior:
- Parser resolves to canonical IDs (e.g. tomatoes, cheese) rather than maintaining separate typo strings everywhere
- Recipe suggestions include pasta-based options with match/missing details
- Substitution suggestions appear when mapped ingredients are missing (hand-tuned hints plus KB substitutions when relevant)

### Sample Input C
`milk, banana, bread`

Expected behavior:
- Suggests smoothie- and breakfast-style options where appropriate
- Displays match percentage and missing ingredients
- Waste tips can reference fruit/dairy urgency and KB storage guidance

## 4) Challenges

- Designing **alias resolution** (including multi-word foods) so normalization is predictable without a full NLP stack.
- Keeping the **knowledge base** maintainable as a single source of truth for parsing, tips, and labels.
- Balancing recommendation ranking so results feel useful and explainable.
- Avoiding overengineering while still supporting multiple assignment requirements
  (parsing, recommendations, substitutions, waste tips, simulated image input).
- Keeping UX clear while displaying many recommendation details.

## 5) Limitations

- No real-time recipe API integration or remote database.
- No nutritional analysis or personalization.
- No actual computer vision/image recognition pipeline; simulated cards are **sample text only**.
- Limited sample recipe dataset (small local set for MVP behavior).
- Rule-based matching and a fixed KB may miss rare ingredients or naming edge cases compared to ML/NLP-based systems.

## 6) Future Improvements

- Integrate a larger recipe knowledge source or API (if allowed in future scope).
- Add true image recognition for ingredient detection from uploaded photos.
- Expand the knowledge base with more ingredients, cuisines, and allergy tags.
- Add user preferences (dietary restrictions, cuisine preferences, time limits).
- Add optional backend services or account-based history if scope changes; localStorage remains suitable for lightweight local-only persistence.
- Add test suite coverage for parser and recommendation services.
