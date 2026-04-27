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

## What AI Helped With

- Drafting and scaffolding React + TypeScript components quickly.
- Generating service-layer starter logic for:
  - ingredient parsing,
  - recipe recommendation scoring/ranking,
  - waste tip generation.
- Producing clean UI copy and structured placeholder text.
- Suggesting CSS layout patterns for responsive cards/lists.
- Accelerating documentation drafting for README and reports.

## What I Manually Reviewed, Modified, or Fixed

- Verified that generated code matched assignment constraints:
  - frontend-only,
  - local rule-based logic,
  - no backend or external API use.
- Checked parser behavior for assignment sample inputs and typo cases.
- Reviewed recommendation outputs for ranking quality and clarity.
- Adjusted UI text/content for course requirements and accuracy.
- Confirmed simulated image input is clearly labeled as simulation (not real CV).
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
use a live recipe API and does not perform real image recognition. The
"simulated image input" feature uses predefined ingredient sets to mimic what
image detection might return.
