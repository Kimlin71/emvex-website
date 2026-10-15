# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root, or
- **`CONTEXT-MAP.md`** at the repo root if it exists: it points at one `CONTEXT.md` per context. Read each one relevant to the topic.
- **`docs/adr/`**: read ADRs that touch the area you're about to work in. In multi-context repos, also check `src/<context>/docs/adr/` for context-scoped decisions.

If any of these files don't exist, proceed silently. Don't flag their absence or suggest creating them upfront; the `/domain-modeling` skill creates them when terms or decisions are resolved.

## File structure

This is a single-context repo: keep `CONTEXT.md` at the root and ADRs under `docs/adr/`.

## Use the glossary's vocabulary

Use the terms defined in `CONTEXT.md` for domain concepts. If a needed concept is missing, reconsider whether it is project language or note the gap for `/domain-modeling`.

## Flag ADR conflicts

Surface any contradiction with a relevant ADR instead of silently overriding it.