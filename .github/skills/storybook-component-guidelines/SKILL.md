---
name: storybook-component-guidelines
description: "STEP 2 OF 2 — Rewrites converted .mdx component usage guideline files in packages/storybook/src/ from a terse, LLM-facing format into clear, human-readable documentation suitable for a developer audience on Storybook. Use after the converting-md-to-storybook-mdx skill (Step 1) has already created the .mdx file. Use when a user says 'rewrite the usage guidelines for [Component]', 'humanize [Component]-usage.mdx', 'prepare [Component] for Storybook', or 'do the next component'."
---

# Step 2 — Rewriting Component Usage Guidelines for Storybook

This is **Step 2 of a two-step process**:

1. **(converting-md-to-storybook-mdx skill)** Convert the `.md` source file from `packages/llms/src/components/` into a `.mdx` file in the correct Storybook folder — preserving the original writing exactly.
2. **(This skill)** Rewrite that converted `.mdx` file into clear, human-readable documentation for a developer audience.

Do not use this skill until Step 1 is complete and the `.mdx` file already exists.

**You are NEVER allowed to touch any file under `packages/llms/src/components/`. That folder is off-limits.**

---

## Repository workflow

- Never work directly on `master`.
- Before modifying any file, check the current branch: `git branch --show-current`.
- If the current branch is `master`, create or switch to the correct DS branch before continuing.
- Process one component at a time. Never batch-rewrite multiple components in one pass.
- Validate after every component. Do not continue to the next until the current component's build passes and the user confirms.
- After a full alphabetic group is complete, push the branch and create a draft PR. Do not request reviewers.

See [references/pr-workflow.md](references/pr-workflow.md) for the branch mapping, branch creation commands, commit format, and PR title templates.

---

## Branch-to-component validation

Before editing a component, confirm it belongs to the current DS branch group:

- `Accordion`, `ActionIcon`, `Alert`, `AppShell` → `DS-400-A-components`
- `Badge`, `BlankSlate`, `BrowserPreview`, `Button` → `DS-401-B-components`
- `ChildForm`, `Chip`, `CodeEditor`, `Collection`, `CopyToClipboard` → `DS-426-C-components`
- `EllipsisText` through `Modal` → `DS-403-E-M-components`
- `PasswordInput` through `Table` → `DS-427-P-T-components`

If the component does not belong to the current branch group, stop and ask the user before continuing.

---

## Stop conditions

Stop and ask the user before continuing if:

- The current branch is `master`
- The Step 1 `.mdx` file does not yet exist for the component
- Content guidance would require inventing behavior not supported by the source files or component code
- The Storybook build fails
- The component group does not match one of the approved DS branches

---

## What this process is

This is a **rewrite, not a content expansion.** You are improving how existing information is expressed — not adding new information, not removing rules, and not changing component names or file names.

**Rewrite rules:**

- Keep the `<Meta title>`, H1, and description line exactly as they are.
- Keep every rule, constraint, and usage guideline that already exists in the source.
- Do not add information beyond what is in the original — except a missing or thin Content guidance section (see Research rules below).
- Reword sentences for clarity, flow, and tone.
- Add brief connecting prose where it helps readability.
- Mix prose and bullets naturally — do not default to bullet-only formatting.
- Rewrite ALL CAPS directives (`MUST`, `SHOULD`, `MAY`) as natural language.

---

## Source priority

Before rewriting, read the following sources in this order:

1. The existing `.mdx` file being rewritten
2. The original `.md` source file under `packages/llms/src/components/`
3. Published Storybook content docs under `packages/storybook/src/content/`:
    - `AboutContent.mdx`
    - `Voice.mdx`
    - `WritingMechanics.mdx`
4. The existing `.stories.tsx` file (for usage patterns and component behavior)
5. The actual component implementation, if needed to verify behavior
6. Third-party design guidance — only for Content guidance, and only when the existing section is missing or thin

Never treat `.stories.tsx` as the primary source of truth for writing rules. The published Storybook content docs are the source of truth for voice, grammar, and style.

---

## Completion marker

As the final edit in Step 2, add this marker immediately after the `<Meta title="..." />` block:

```mdx
{/* storybook-usage-guidelines: rewritten */}
```

The top of a finished file must look like this:

```mdx
import {Meta} from '@storybook/addon-docs/blocks';

<Meta title="@components/layout/Accordion" />

{/* storybook-usage-guidelines: rewritten */}

# Accordion
```

This marker signals that Step 2 is complete. Skill 1 must not overwrite this file without explicit user permission.

---

## Page template

Every component file must follow this structure. Use the sections that apply — omit sections that have no relevant content.

```mdx
import {Meta} from '@storybook/addon-docs/blocks';

<Meta title="@components/section/ComponentName" />

{/* storybook-usage-guidelines: rewritten */}

# ComponentName

One sentence description of what the component does.

## Overview

[1–3 sentences: what is this component and when would a developer reach for it?]

## Props

[Plasma-specific props, or the Mantine shorthand if none exist. See Props rules below.]

## Sub-components

[Table of sub-components with a Purpose column, if applicable.]

## Usage

[Code examples from the original — unchanged. Brief explanation after each block if not self-explanatory.]

## Content guidance

[See Content guidance rules below.]

---

{/* TODO: Replace with full Plasma docs URL */}
```

---

## Section-by-section rules

### Meta block, H1, and description

Keep the `import { Meta }` line, `<Meta title="..." />`, the `# H1` heading, and the description line exactly as they are. Do not alter any of these.

### Overview

Write 1–3 natural sentences: what is this component, and when would a developer reach for it? Expand on the description without repeating it word for word.

### Props

If the component has no Plasma-specific props, check whether it extends Mantine:

- If it **extends Mantine** (the source file says `Extends: MantineXxxProps` or similar), use: _This component has no additional props beyond the Mantine base. Refer to the [Mantine documentation](https://mantine.dev) for all available props._
- If it is **Plasma-custom** (e.g. `Facet`, `BlankSlate`, `InfoToken`), describe the available props from the source file. Do not use the Mantine shorthand line.

Format each prop as:

**`propName`** `Type` — Description of what this prop does in practice. Defaults to `value` if not set.

### Sub-components

Convert bullet lists into a table with a Purpose column. Keep descriptive prose notes beneath the table rather than forcing them into table cells.

Pay attention to whether sub-components are optional or required. Some components (like `InfoToken`) expose semantic types only through sub-components because the underlying `type` prop is not public API — in those cases the sub-components are required, not optional. Use "use these instead of setting props manually" for optional wrappers and "you must use these to set the component type" for required ones.

### Usage

Keep all fenced code blocks byte-for-byte identical to the originals — do not alter, reformat, or correct them. After each block, add a brief explanation if it is not self-explanatory. Rewrite post-code bullet lists as natural prose or a short list.

### Content guidance

This section gives developers rules for what text to write — labels, headings, placeholder text, error messages, etc.

Use bold subheadings (not heading elements) for each distinct UI part that has copy rules. Name the part, not the concept. Include the sub-component or prop name in backticks where applicable.

Under each subheading, write one rule per bullet. Start each bullet with an imperative verb or "Avoid". Include a counter-example inline when the rule is about phrasing: `"Project settings" — not "Configure your project settings"`.

Every Content guidance section must cover at minimum:

- The primary label or title element
- The primary body or content area
- Ordering or grouping logic (if the component contains multiple items)

See [references/expected-format.md](references/expected-format.md) for the full structure spec.

---

## Code block preservation

Before rewriting, identify every fenced code block in the `.mdx` file. During the rewrite, do not edit, reformat, fix imports, change indentation, change comments, or change blank lines inside any code block. After rewriting, verify every fenced code block is byte-for-byte identical to the original.

---

## Research rules for Content guidance

Third-party research is allowed only when the existing Content guidance is missing, thin, or incomplete.

Prioritize these sources:

- Nielsen Norman Group
- Carbon Design System
- Material Design
- Red Hat Design System
- Other major enterprise design systems

Requirements:

- Fetch and read the actual source page. Do not rely on search snippets.
- Cross-check every researched rule against:
    1. The original `.md` file
    2. The existing `.stories.tsx` file, if present
    3. The published Storybook content docs under `packages/storybook/src/content/`
    4. The actual component code, if needed
- Do not add a third-party rule if it conflicts with Coveo code, existing component behavior, or published Storybook content guidance.
- Do not cite sources inside the MDX file.
- Do cite external sources in your final response and in the draft PR notes under "External research used".

---

## Writing style

Follow the published Storybook content docs as the source of truth. Before rewriting, read:

- `packages/storybook/src/content/AboutContent.mdx`
- `packages/storybook/src/content/Voice.mdx`
- `packages/storybook/src/content/WritingMechanics.mdx`
- `packages/storybook/src/content/ProductVocabulary.mdx`

Key rules:

- Sentence case for all UI text and headings
- Active voice, present tense
- Address the developer as "you" — never "we" or "the user"
- Plain language — short words, short sentences
- American spelling throughout
- No em-dashes, no exclamation marks, no ellipses in instructions

---

## Required validation after each component

After rewriting a component, run:

```bash
cd packages/storybook
pnpm build
```

If the build passes:

- Report that validation passed.
- Commit the file: `docs(storybook): add <ComponentName> usage guidelines`
- Wait for the user's confirmation before moving to the next component.

If the build fails:

- Leave the rewritten file in place.
- Stop the workflow.
- Report the exact command that failed and the relevant error output.
- Do not continue to another component.
- Do not attempt further fixes unless the user explicitly asks.

---

## Iteration order

Always work one component at a time. If the user names a component, start there. If the user names a group, process only that group in alphabetical order. Wait for confirmation after each component before continuing.

Do not process components outside the active branch group.

---

## Definition of done — one component

A component is done only when all of the following are true:

- Step 1 conversion exists
- Step 2 rewrite is complete
- Completion marker `{/* storybook-usage-guidelines: rewritten */}` is present
- Storybook build has been run and passed
- Build result has been reported
- Source `.md` file is untouched
- Changes have been committed on the correct DS branch

---

## Definition of done — one group

A group is done only when all of the following are true:

- Every component in the group is individually complete
- The branch name matches the approved DS branch
- Storybook build result is documented in the PR body
- Any external research is cited in the PR notes
- Branch is pushed
- Draft PR is created using the template in [references/pr-body-template.md](references/pr-body-template.md)
- No reviewers are requested

---

## Reference files

- [pr-workflow.md](references/pr-workflow.md) — branch rules, branch mapping, commit format, PR titles, draft PR command
- [pr-body-template.md](references/pr-body-template.md) — PR body template
- [validation-checklist.md](references/validation-checklist.md) — full checklist before marking a component complete
- [examples.md](references/examples.md) — good and bad output examples
- [expected-format.md](references/expected-format.md) — Content guidance section structure
