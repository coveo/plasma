---
name: storybook-component-docs
description: Rewrites component usage guideline files in packages/llms/src/components/ from a terse LLM-facing format into a clear, human-readable style suitable for Storybook. Preserves all existing rules and component names. Use when a user says "rewrite the usage guidelines for [Component]", "humanize [Component].md", "prepare [Component] for Storybook", or "do the next component".
---

# Writing Component Usage Guidelines for Storybook

Rewrites `.md` component files in `packages/llms/src/components/` from a terse, robotic LLM-facing format into clear, human-readable documentation suitable for a developer audience on Storybook.

## What This Process Is

This is a **rewrite, not a content expansion.** You are improving how existing information is expressed — not adding new information, not removing rules, and not changing component names or file names.

The goal is to make each file feel like it was written for a developer reading it in Storybook, not for a machine parsing it as a prompt.

**Critical — source file protection:**

You are NOT allowed to delete, edit, move, or alter any existing `.md` file in `packages/llms/src/components/`. Those files are the source of truth and the foundation for creating new documents. The output of this skill is a new `.md` file with the same name, placed under `packages/storybook/src/` — it is a separate file, not a replacement.

**Rewrite rules:**

- Keep the component name exactly as it appears in the frontmatter `name` field. Do not rename files.
- Keep every rule, constraint, and usage guideline that already exists in the source file.
- Do not add information that is not already present in the original file — except when filling in a missing or thin Content guidance section through research (see below).
- You may reword sentences for clarity, flow, and tone.
- You may add brief connecting prose to improve readability between sections.
- You may use bullet points where they genuinely aid understanding, but do not default to bullet-only formatting throughout. Mix prose and bullets naturally.
- Remove robotic patterns: ALL CAPS directives like `SHOULD`, `MUST`, `MAY` — rewrite these as natural language.

---

## Page Template

Every component file must follow this structure. Use the sections that apply — omit sections that have no relevant content for that component.

```markdown
---
name: ComponentName
description: One sentence description of what the component does.
---

## Overview

[1–3 sentences expanding on what this component is and when to use it. Written for a human developer, not an LLM.]

## Props

[If the component has Plasma-specific props, list them here. If not, use the shorthand line below.]

_This component has no additional props beyond the Mantine base. Refer to the [Mantine documentation](https://mantine.dev) for all available props._

[If props exist, use this format for each:]

**`propName`** `Type` — Description of what this prop does and when to use it. Defaults to `value` if not set.

## Sub-components

[If sub-components exist:]

Plasma provides pre-configured sub-components that handle styling and behavior. Use these instead of setting props manually.

| Sub-component       | Purpose      |
| ------------------- | ------------ |
| `Component.SubName` | What it does |

[Add any important notes about specific sub-components in prose beneath the table.]

## Usage

[Code example(s) showing the most common real-world use. Keep as-is from the original — do not alter code.]

[After the code block, add 1–3 sentences or a short list explaining what the example demonstrates, if the code alone is not self-explanatory.]

## Content guidance

[See the Content guidance section rules below.]

---

[Full Plasma documentation]({{BASE_URL}})
```

---

## Section-by-Section Rules

### Frontmatter

Keep `name` and `description` exactly as they are. Do not edit these.

### Overview

Write 1–3 natural sentences that answer: what is this component, and when would a developer reach for it? This expands on the `description` field without repeating it word for word. It should feel like the opening of a well-written README.

### Props

If there are no Plasma-specific props, use the standardized shorthand line. Do not leave this section blank or omit it.

If props exist, write each one as a sentence or two — not a dense one-liner. The prop name and type stay in code formatting. The description should tell a developer what the prop does in practice, not just what it is.

### Sub-components

Convert bullet lists of sub-components into a table with a Purpose column. If the original file has descriptive text about a specific sub-component, keep that as a prose note beneath the table rather than folding it into the table cell.

### Usage

Keep all code blocks exactly as they are — do not alter, reformat, or correct code. After the code block, add a brief explanation if the example is not self-explanatory. If the original file already has post-code bullets, rewrite them as natural prose or a short list — whichever reads better.

### Content guidance

This section needs the most care. The content guidance section gives developers rules for what text to write when using the component — labels, headings, placeholder text, error messages, etc.

**Structure:**

Use bold subheadings (not heading elements) for each distinct part of the component that has copy rules. Name the UI part, not the concept. Include the sub-component or prop name in backticks where applicable.

Example: `**Control labels (`Accordion.Control`)**`

Under each subheading, write the rules as a short bulleted list. Each bullet should be one rule. Start each bullet with an imperative verb or "Avoid".

Include a counter-example inline when the rule is about syntax or phrasing:
`"Project settings" — not "Configure your project settings"`

**Minimum coverage:**

Every content guidance section must address at minimum:

- The primary label or title element
- The primary body or content area
- Ordering or grouping logic (if the component contains multiple items)

**Research:**

If the existing content guidance section is thin, incomplete, or missing entirely, research at least two authoritative sources before writing it. Prioritize:

- Nielsen Norman Group (nngroup.com)
- Carbon Design System (carbondesignsystem.com)
- Material Design (m3.material.io)
- Red Hat Design System (ux.redhat.com)
- Other major enterprise design systems

Fetch the actual pages — do not rely on search snippets alone. Look for: character limits, casing rules, punctuation rules, syntax patterns, prohibited patterns.

**Cross-check before writing:**

Any rule drawn from third-party research must be cross-checked against the original source file in `packages/llms/src/components/` and the Plasma writing rules in [plasma-writing-rules.md](references/plasma-writing-rules.md). Coveo's own documentation and guidelines are the source of truth. Do not add rules that contradict or conflict with what is already written in the original file or the Plasma writing rules — discard any third-party guidance that does not align.

Do not cite sources inline.

---

## Writing Style

All rewritten copy must follow the Plasma writing rules. Key points:

- Sentence case for all UI text and headings
- Active voice, present tense
- Address the developer as "you" — never "we" or "the user"
- Plain language — short words, short sentences
- American spelling throughout (e.g. "behavior" not "behaviour", "standardized" not "standardised", "prioritize" not "prioritise")
- No jargon replacements (see [plasma-writing-rules.md](references/plasma-writing-rules.md) for the full list)
- No em-dashes, no exclamation marks, no ellipses in instructions

Refer to both reference files before writing:

- [plasma-writing-rules.md](references/plasma-writing-rules.md) — voice, grammar, punctuation, and style
- [expected-format.md](references/expected-format.md) — structure and formatting for the Content guidance section specifically

---

## Completeness Checklist

Before considering a component file done and moving to the next, verify every item below. You cannot move on until all boxes are checked.

- [ ] Every rule from the original source file in `packages/llms/src/components/` is present in the rewritten file
- [ ] No rules have been added that do not appear in the original source file (except Content guidance filled in through research and cross-checked against Plasma guidelines)
- [ ] The component `name` in the frontmatter is unchanged
- [ ] The `description` in the frontmatter is unchanged
- [ ] All code blocks are identical to the originals — not altered, reformatted, or corrected
- [ ] The original source file in `packages/llms/src/components/` has not been touched
- [ ] The output file is saved under `packages/storybook/src/` — not in `packages/llms/`
- [ ] American spelling is used throughout
- [ ] ALL CAPS directives (`SHOULD`, `MUST`, `MAY`) have been rewritten as natural language
- [ ] Content guidance covers the primary label, primary body, and ordering/grouping logic at minimum

---

## Iteration Order

If the user specifies a component to start with, begin there. If it is unclear which component to start with, ask the user before beginning. After the named file, continue one at a time, alphabetically, through `packages/llms/src/components/`. Do one file at a time and wait for the user to review and confirm before moving to the next.

---

## Example output reference

See `packages/llms/src/components/Accordion.md` for a completed reference implementation.
