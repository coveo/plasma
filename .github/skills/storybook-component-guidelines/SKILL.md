---
name: storybook-component-guidelines
description: "STEP 2 OF 2 — Rewrites converted .mdx component usage guideline files in packages/storybook/src/ from a terse, LLM-facing format into clear, human-readable documentation suitable for a developer audience in Storybook. Use only after the converting-md-to-storybook-mdx skill has already created the .mdx file. Use when a user says 'rewrite the usage guidelines for [Component]', 'humanize [Component]-usage.mdx', 'prepare [Component] for Storybook', or 'do the next component'."
---

# Step 2 — Rewriting Component Usage Guidelines for Storybook

This is Step 2 of a two-step process:

1. `converting-md-to-storybook-mdx` converts the source `.md` file from `packages/llms/src/components/` into a Storybook `.mdx` file under `packages/storybook/src/`.
2. This skill rewrites the converted `.mdx` file into clear, human-readable documentation for a developer audience.

Do not use this skill until Step 1 is complete and the `.mdx` file already exists.

This skill edits only existing `ComponentName-usage.mdx` files under `packages/storybook/src/`.

Never delete, edit, move, or alter any `.md` file under `packages/llms/src/components/`.

## What This Process Is

This is a **rewrite, not a content expansion.** You are improving how existing information is expressed — not adding new information, not removing rules, and not changing component names or file names.

The goal is to make each file feel like it was written for a developer reading it in Storybook, not for a machine parsing it as a prompt.

**Rewrite rules:**

- Keep every rule, constraint, and usage guideline that already exists in the source file.
- Do not add information that is not already present in the original `.mdx` file — except when filling in a missing or thin Content guidance section through research (see below).
- You may reword sentences for clarity, flow, and tone.
- You may add brief connecting prose to improve readability between sections.
- You may use bullet points where they genuinely aid understanding, but do not default to bullet-only formatting throughout. Mix prose and bullets naturally.
- Remove robotic patterns: ALL CAPS directives like `SHOULD`, `MUST`, `MAY` — rewrite these as natural language.

---

## Target Files

This skill rewrites existing `.mdx` files under `packages/storybook/src/`.

Files follow this naming convention:

`ComponentName-usage.mdx`

Examples:

- `packages/storybook/src/layout/Accordion-usage.mdx`
- `packages/storybook/src/call-to-action/Button-usage.mdx`
- `packages/storybook/src/form/string/Select-usage.mdx`

Do not create a new `.md` file.

Do not edit files under `packages/llms/src/components/`.

Do not rename the `.mdx` file.

---

## Page Template

Every rewritten `.mdx` file must follow this structure. Use the sections that apply — omit sections that have no relevant content for that component.

```mdx
import {Meta} from '@storybook/addon-docs/blocks';

<Meta title="@components/section/ComponentName" />

{/* storybook-usage-guidelines: rewritten */}

# ComponentName

One sentence description of what the component does.

## Overview

[1–3 sentences explaining what this component is and when to use it.]

## Props

[Props content.]

## Sub-components

[Sub-components content.]

## Usage

[Code examples copied exactly from the original Step 1 `.mdx`.]

## Content guidance

[Content guidance rules.]

---

{/* TODO: Replace with full Plasma docs URL */}
```

---

## Section-by-Section Rules

### Meta block, marker, H1, and description

Keep the `import { Meta }` line unchanged.

Keep the `<Meta title="..." />` block unchanged.

As the final edit in Step 2, add this marker immediately after the `<Meta title="..." />` block:

```mdx
{/* storybook-usage-guidelines: rewritten */}
```

Keep the `# H1` heading unchanged.

Keep the description line directly beneath the H1 unchanged.

### Overview

Write 1–3 natural sentences that answer: what is this component, and when would a developer reach for it? This expands on the description line without repeating it word for word. It should feel like the opening of a well-written README.

### Props

If there are no Plasma-specific props, use this standardized shorthand line. Do not leave this section blank or omit it.

_This component has no additional props beyond the Mantine base. Refer to the [Mantine documentation](https://mantine.dev) for all available props._

If props exist, write each one as a sentence or two — not a dense one-liner. The prop name and type stay in code formatting. The description should tell a developer what the prop does in practice, not just what it is.

### Sub-components

Convert bullet lists of sub-components into a table with a Purpose column. If the original file has descriptive text about a specific sub-component, keep that as a prose note beneath the table rather than folding it into the table cell.

### Usage

Keep all code blocks exactly as they are — do not alter, reformat, or correct code. After the code block, add a brief explanation if the example is not self-explanatory. If the original file already has post-code bullets, rewrite them as natural prose or a short list — whichever reads better.

### Content guidance

This section needs the most care. The content guidance section gives developers rules for what text to write when using the component — labels, headings, placeholder text, error messages, etc.

Follow `references/expected-format.md`.

Every Content guidance section must:

- Use `## Content guidance` as the section heading.
- Use bold subheadings, not `###` headings.
- Include the prop or sub-component name in backticks where one exists.
- Name the UI part, not the abstract concept.
- Include at least two bold subheadings.
- Use bullets only under each bold subheading.
- Start each bullet with an imperative verb or "Don't".
- Include counter-examples inline when the rule is about syntax or phrasing.
- Cover primary labels, primary body/content, and ordering or grouping logic when applicable.

Do not invent behavior that is unsupported by the source `.md`, stories, or component code.

---

## Code Block Preservation

Before rewriting, identify every fenced code block in the `.mdx` file.

During the rewrite:

- Do not edit code block contents.
- Do not reformat code.
- Do not fix imports.
- Do not change indentation.
- Do not change comments.
- Do not change blank lines.
- Do not change the code fence language.

After rewriting, compare every fenced code block against the original. They must be byte-for-byte identical.

---

## Writing Source of Truth

The published Storybook content section is the only source of truth for writing style, tone, punctuation, capitalization, grammar, and UX copy rules.

Read these files before rewriting:

- `packages/storybook/src/foundation/content/AboutContent.mdx`
- `packages/storybook/src/foundation/content/Voice.mdx`
- `packages/storybook/src/foundation/content/WritingMechanics.mdx`

Use `references/expected-format.md` only for the structure of the `## Content guidance` section.

**Key style points:**

- Sentence case for all UI text and headings
- Active voice, present tense
- Address the developer as "you" — never "we" or "the user"
- Plain language — short words, short sentences
- American spelling throughout
- No em-dashes, no exclamation marks, no ellipses in instructions

---

## Source Priority

Use sources in this order:

1. Existing `.mdx` file being rewritten
2. Original `.md` source file under `packages/llms/src/components/`
3. Published Storybook content docs
4. Existing `.stories.tsx` file, if present
5. Actual component implementation, if needed
6. Third-party design guidance, only for Content guidance

The original `.md` file is used for cross-checking only. Do not edit it.

The `.stories.tsx` file may be used as secondary context for examples, common usage patterns, and component behavior, but never as the primary writing source of truth.

---

## Research Rules for Content Guidance

Third-party research is allowed only when the existing Content guidance is missing, thin, or incomplete.

Prioritize:

- Nielsen Norman Group
- Carbon Design System
- Material Design
- Red Hat Design System
- Other major enterprise design systems

Requirements:

- Fetch and read the actual source page.
- Do not rely on search snippets.
- Cross-check every researched rule against:
    1. The original `.md` file
    2. The existing `.stories.tsx` file, if present
    3. The actual component code, if needed
    4. Published Storybook content docs under `packages/storybook/src/foundation/content/`

Do not add a third-party rule if it conflicts with Coveo code, existing component behavior, or published Storybook content guidance.

Do not cite sources inside the MDX file.

Do cite external sources in the final response and in the draft PR notes.

---

## Repository Workflow

- Never modify files while on `master`.
- Before modifying any file, check the current branch: `git branch --show-current`.
- Before creating or switching branches, check for unrelated changes: `git status --short`.
- If there are unrelated uncommitted changes, stop and ask the user before continuing.
- If the current branch is `master`, determine the correct DS branch from the component group.
    - If the correct DS branch is clear, create or switch to it before editing.
    - If the correct DS branch is unclear, stop and ask the user.
- Process one component at a time. Never batch-rewrite multiple components in one pass.
- Validate after every component.
- Commit one component at a time after Step 2 validation.
- After a full alphabetic group is complete, push the branch and create a draft PR.
- Do not request reviewers.

See `references/pr-workflow.md` for the branch mapping, branch creation commands, commit format, and PR title templates.

---

## Branch-to-Component Validation

Before editing a component, confirm it belongs to the current DS branch group by component name:

| Component name starts with | Branch                  |
| -------------------------- | ----------------------- |
| `A`                        | `DS-400-A-components`   |
| `B`                        | `DS-401-B-components`   |
| `C`                        | `DS-426-C-components`   |
| `E` through `M`            | `DS-403-E-M-components` |
| `P` through `T`            | `DS-427-P-T-components` |

There are no D, N, or O groups because there are no components for those letters.

If the component does not belong to the current branch group, stop and ask the user before continuing.

---

## Stop Conditions

Stop and ask the user before continuing if:

- The current branch is `master` and the correct DS branch cannot be determined.
- There are unrelated uncommitted changes in the working tree.
- The target `.mdx` file does not exist.
- The target file is not under `packages/storybook/src/`.
- The file does not appear to be a Step 1 conversion.
- The original `.md` source file cannot be found for cross-checking.
- The `<Meta title="..." />`, H1, or description line is missing.
- The component group does not match one of the approved DS branches.
- Content guidance would require inventing behavior not supported by the source files.
- Storybook build fails.

---

## Required Validation After Each Component

After rewriting a component, run:

```bash
cd packages/storybook
pnpm build
```

**If the build passes:**

- Report that Step 2 validation passed.
- Commit the file with this format: `docs(storybook): add <ComponentName> usage guidelines`
- Wait for the user's confirmation before moving to the next component.

**If the build fails:**

- Leave the rewritten file in place.
- Stop the workflow.
- Report the exact command that failed and the relevant error output.
- Do not continue to another component.
- Do not attempt further fixes unless the user explicitly asks.

---

## After an Alphabetic Group Is Complete

When every component in the assigned group has completed Step 1 and Step 2:

1. Confirm the branch name matches the approved group branch.
2. Confirm no files under `packages/llms/src/components/` were modified.
3. Run `cd packages/storybook && pnpm build`.
4. If the build passes, include the passing result in the PR body.
5. If the build fails, leave the files in place and include the error output in the PR body.
6. Push the branch.
7. Create a draft PR.
8. Do not request reviewers.
9. Stop after creating the draft PR.

Use `references/pr-body-template.md` for the PR body.

---

## Iteration Order

Always work one component at a time.

If the user names a component, start with that component.

If the user names a group, process only that group:

- A
- B
- C
- E-M
- P-T

Continue alphabetically within the assigned group.

After each component, validate and wait for confirmation before moving to the next component.

Do not process components outside the active branch group.

---

## Reference Files

- `references/pr-workflow.md` — branch rules, branch mapping, commit format, PR titles, and draft PR command
- `references/pr-body-template.md` — draft PR body template
- `references/validation-checklist.md` — full checklist before marking a component complete
- `references/examples.md` — good and bad output examples
- `references/expected-format.md` — required structure for the Content guidance section

---

## Example Output Reference

See `references/examples.md` for good and bad output examples.
