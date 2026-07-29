---
name: plasma-component-docs
description: Write or update LLM-optimised component documentation specs for the Plasma design system. Use when adding a new Plasma component to `packages/llms/src/components/`, updating an existing spec after a component API change, or auditing component docs for completeness. Trigger phrases include "write docs for [Component]", "update the LLM spec for [Component]", "add [Component] to llms", "document [Component] for LLM consumption".
---

Use this skill to create or update one component documentation file in `packages/llms/src/components/<ComponentName>.md`.

The output MUST follow [references/format.md](references/format.md), including the two top-level sections `# Usage guidance` and `# API reference`.

These per-component Markdown specs are consumed by humans and AI tools. They should make design-system judgement explicit: code can tell an agent what components exist, but not when one should be used over another.

These specs are not props-only API references. They should help humans and AI tools understand:

- what problem the component solves
- when to use it
- when not to use it
- how to choose it over nearby alternatives
- what Plasma-specific API surface exists
- what an AI agent should infer from it

## Workflow

### 1. Gather sources

Read in parallel:

| Source                      | Path pattern                                        |
| --------------------------- | --------------------------------------------------- |
| Component implementation    | `packages/mantine/src/components/<Name>/<Name>.tsx` |
| Storybook stories           | `packages/storybook/src/**/<Name>.stories.tsx`      |
| Existing spec (if updating) | `packages/llms/src/components/<Name>.md`            |

Use the strongest available guidance source first:

1. Plasma component implementation, Storybook stories, and existing coded docs
2. Existing Plasma component specs and nearby component guidance
3. Figma component or design-system guidance, when available
4. Product screenshots or observed usage, when available
5. External design-system references only for missing decision guidance

Do not pretend external references are Plasma policy. Use them only to strengthen missing sections such as accessibility, anti-patterns, or decision boundaries.

Also read nearby component specs when the component could be confused with another option. Common comparisons include:

- button-like actions vs links or overflow actions
- short visible choices vs long searchable choices
- exact numeric entry vs approximate range adjustment
- tooltip vs inline helper text or more persistent messaging
- short text vs long text vs syntax-sensitive editing

Use `grep`/`glob` to locate files when the exact path is unknown.

### 2. Extract what matters

Before writing guidance, answer:

- What repeated user or interface problem does this component solve?
- Is this a component, a page pattern, a layout primitive, or a one-off?
- Who needs this documentation: designers, developers, agents, or all three?
- What existing component could be confused with it?

From the component source, identify:

- **Plasma-specific props** — props defined in the Plasma wrapper (not inherited from Mantine). Include prop name, type, required flag, default, and JSDoc description.
- **Sub-components** — static properties assigned to the component (e.g. `Button.Primary`, `Table.Header`).
- **Extends** — if the component extends a Mantine base, note it in the Props section header (see format).

From stories, extract:

- **Usage examples** — the most common real-world snippet(s); see [references/format.md](references/format.md) for the Usage section rules.

From the component source, stories, existing spec, and nearby components, extract:

- **Problem solved** — what user or interface need this component addresses
- **Usage boundaries** — where it is appropriate and where it is the wrong choice
- **Decision guidance** — what nearby alternatives it could be confused with and how to distinguish them
- **Variants and states** — meaningful variants and visible states worth documenting
- **Interaction notes** — keyboard, focus, persistence, validation, dismissal, async, or conditional behaviour the component consumer should understand
- **Accessibility expectations** — baseline requirements or expectations relevant to consumers of the component
- **Content guidance** — labels, helper text, validation copy, status text, or option wording when relevant
- **Common anti-patterns** — likely misuse based on the component role and nearby alternatives
- **AI takeaway** — what an AI agent should understand when choosing or generating this component

The usage guidance is often the most valuable part of the spec. It should help readers answer:

- When should I choose this component?
- When should I choose something else?
- What should this component signal in the interface?
- What makes it distinct from adjacent options?

Include decision-making guidance at the level of concrete choices, such as:

- Use `Dialog` for confirmation, not `Popover`
- Use a link for navigation, not a button
- Use `Switch` for immediate binary state, not `Checkbox`

If the source material does not support a strong rule, prefer an explicit open question over false certainty.

### 3. Write the spec

Follow the format in [references/format.md](references/format.md) exactly. Key rules:

- YAML frontmatter `description` must be one sentence (used in `llms.txt` index).
- Omit the Props table entirely if no Plasma-specific props exist — use the `_No additional props_` shorthand instead.
- End every file with `[Full Plasma documentation]({{BASE_URL}})`. Use the literal placeholder `{{BASE_URL}}` — it is substituted at build time.
- Do not stop at API extraction. The spec should combine design guidance and technical reference.
- Do not infer usage guidance from props alone. Compare with nearby components when ambiguity is likely.
- Do not copy external design-system language as if it were Plasma policy.
- When a section is not relevant for a component, omit it rather than filling it with generic text.

### 4. Regenerate dist outputs

```bash
pnpm turbo run build --filter=@coveord/plasma-llms
```

This rebuilds `dist/llms/`, `dist/llms.txt`, `dist/llms-full.txt`, and `dist/plasma-skill.md` from all specs.
