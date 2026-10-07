---
name: kysely-migration-generator
description: Use when asked to generate a Kysely database migration from a Mermaid ERD or database schema diagram in docs/architecture/.
---

# Kysely Migration Generator

## Translation Rules

- Entities → Tables: Map Mermaid entities to snake_case table names (e.g., `USERS` → `users`).
- Keys & Columns: Convert PK attributes to auto-generating IDs/UUIDs and FK attributes to `.references().onDelete('cascade')`.
- Cardinalities: Correctly map `||--o{` (one-to-many) and `||--o|` (one-to-one with unique constraints).
- File Output: Write the generated TypeScript migration to `src/db/migrations/<timestamp>_<migration_name>.ts`.
- Structure: Enforce exports for both `up(db: Kysely<any>)` and `down(db: Kysely<any>)` functions. The down function must drop tables in reverse dependency order.
- Do not recreate tables that already exist in prior migrations (e.g., `users` from `001_initial_schema.ts`).
