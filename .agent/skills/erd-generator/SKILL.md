---
name: erd-generator
description: Use when asked to design an ERD, data model, database schema, or architecture diagram. Drafts a Mermaid erDiagram, validates it with a local script, renders an SVG, and self-corrects syntax errors.
---

# ERD Generator

## Execution Workflow

1. Parse domain requirements into entities, primary keys (PK), foreign keys (FK), and cardinalities.
2. Write the drafted Mermaid syntax directly to `docs/architecture/schema.mmd`.
3. Execute `node .agent/skills/erd-generator/scripts/render_erd.js docs/architecture/schema.mmd`.
4. Self-Correction Loop: If execution fails with `SYNTAX_ERROR`, parse the error trace, adjust the Mermaid syntax in `docs/architecture/schema.mmd`, and re-run (up to 3 retries).
5. Final Output: Present the raw Mermaid block to the user and reference the generated image asset path (`docs/architecture/erd.svg`).
