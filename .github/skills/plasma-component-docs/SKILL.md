---
name: plasma-component-docs
description: Write or update LLM-optimised component documentation specs for the Plasma design system. Use when adding a new Plasma component to `packages/llms/src/components/`, updating an existing spec after a component API change, or auditing component docs for completeness. Trigger phrases include "write docs for [Component]", "update the LLM spec for [Component]", "add [Component] to llms", "document [Component] for LLM consumption".
---

Write or update per-component Markdown specs consumed by AI tools. Sources live in `packages/llms/src/components/ComponentName.md`. See [references/format.md](references/format.md) for the exact format and annotated examples.

## Workflow

### 1. Gather sources

Read in parallel:

| Source                      | Path pattern                                        |
| --------------------------- | --------------------------------------------------- |
| Component implementation    | `packages/mantine/src/components/<Name>/<Name>.tsx` |
| Storybook stories           | `packages/storybook/src/**/<Name>.stories.tsx`      |
| Existing spec (if updating) | `packages/llms/src/components/<Name>.md`            |

Use `grep`/`glob` to locate files when the exact path is unknown.

### 2. Extract what matters

From the component source, identify:

- **Plasma-specific props** — props defined in the Plasma wrapper (not inherited from Mantine). Include prop name, type, required flag, default, and JSDoc description.
- **Sub-components** — static properties assigned to the component (e.g. `Button.Primary`, `Table.Header`).
- **Extends** — if the component extends a Mantine base, note it in the Props section header (see format).

From stories, extract:

- **Usage examples** — the most common real-world snippet(s); see [references/format.md](references/format.md) for the Usage section rules.

### 3. Write the spec

Follow the format in [references/format.md](references/format.md) exactly. Key rules:

- YAML frontmatter `description` must be one sentence (used in `llms.txt` index).
- Omit the Props table entirely if no Plasma-specific props exist — use the `_No additional props_` shorthand instead.
- End every file with `[Full Plasma documentation]({{BASE_URL}})`. Use the literal placeholder `{{BASE_URL}}` — it is substituted at build time.

### 4. Regenerate dist outputs

```bash
pnpm turbo run build --filter=@coveord/plasma-llms
```

This rebuilds `dist/llms/`, `dist/llms.txt`, `dist/llms-full.txt`, and `dist/plasma-skill.md` from all specs.
