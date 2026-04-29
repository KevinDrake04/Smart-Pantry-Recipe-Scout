# AI Usage Report: Smart Pantry & Recipe Scout

## Tools Used

- Cursor AI
- ChatGPT

## Example Prompts Used (5-10)

1. "Create an initial React app shell for Smart Pantry & Recipe Scout with three placeholder sections."
2. "Implement a TypeScript ingredient parser that handles comma-separated input, typo correction, and urgency words."
3. "Build a rule-based recipe generator using local sample recipes with used and missing ingredients."
4. "Improve recipe ranking with match percentage and clear recommendation reasons."
5. "Add substitution suggestions for common missing ingredients like milk, cheese, garlic, and soy sauce."
6. "Add food waste reduction tips based on ingredient urgency and category."
7. "Create a simulated fridge image input component with sample pantry/fridge selections."
8. "Refine the simulated image input UI so it looks like mock detection cards and keeps click-to-fill behavior."
9. "Design a frontend-only ingredient knowledge base: canonical IDs, categories, aliases for typos and multi-word foods, perishability, storage tips, use ideas, and substitutions—no backend."
10. "Refactor parsing so user text normalizes to canonical ingredient IDs through the knowledge base instead of maintaining separate hardcoded typo maps everywhere."

## What AI Helped With

- Drafting and scaffolding React + TypeScript components quickly.
- Generating service-layer starter logic for:
  - ingredient parsing and normalization,
  - recipe recommendation scoring/ranking,
  - waste tip generation tied to ingredient metadata.
- Structuring a **local ingredient knowledge base** pattern (IDs, aliases, metadata) suitable for a static frontend.
- Producing clean UI copy and structured placeholder text.
- Suggesting CSS layout patterns for responsive cards/lists.
- Accelerating documentation drafting for README and reports.

## What I Manually Reviewed, Modified, or Fixed

- Verified that generated code matched assignment constraints:
  - frontend-only,
  - local rule-based logic,
  - no backend or external API use.
- Checked parser behavior for assignment sample inputs, alias cases, and urgency handling.
- Reviewed recommendation outputs for ranking quality and clarity.
- Adjusted UI text/content for course requirements and accuracy.
- Confirmed simulated image input is clearly labeled as simulation (not real CV), using **sample ingredient sets** only.
- Manually validated app behavior via local runs and targeted test inputs.

## What I Learned About AI-Assisted Development

- AI is very effective for rapid scaffolding and iteration across branches.
- Clear, scoped prompts produce better and safer outputs.
- Human review remains essential for requirement alignment and correctness.
- AI-generated logic should be treated as a starting point, not a final authority.
- Honest documentation of limitations is important, especially when using
  simulated features instead of production systems.

## Honesty and Scope Statement

This project currently uses local rule-based logic in the frontend. It does not
use a live recipe API, **does not use a remote database**, and does not perform real image recognition. The
"simulated image input" feature uses predefined ingredient sets to mimic what
image detection might return. The latest pantry text may be stored in **browser localStorage** for convenience only; that is not a backend or shared database.
