---
name: storybook-component-guidelines
description: "STEP 2 OF 2. Rewrites converted component .mdx files in packages/storybook/src/ from a terse, LLM-facing format into clear, human-readable documentation suitable for a developer audience on Storybook. Use after the converting-md-to-storybook-mdx skill (Step 1) has already created the .mdx file. Use when a user says 'rewrite the usage guidelines for [Component]', 'humanize [Component].mdx', 'prepare [Component] for Storybook', or 'do the next component'."
---

# Step 2: Rewriting Component Usage Guidelines for Storybook

This is **Step 2 of a two-step process**:

1. **(converting-md-to-storybook-mdx skill)** Convert the `.md` source file from `packages/llms/src/components/` into a `.mdx` file in the correct Storybook folder, preserving the original writing exactly.
2. **(This skill)** Rewrite that converted `.mdx` file into clear, human-readable documentation for a developer audience.

Do not use this skill until Step 1 is complete and the `.mdx` file already exists.

Never edit, delete, move, rename, or overwrite any file under `packages/llms/src/components/`. You may read the original `.md` source file for cross-checking only. Treat it as read-only source material.

---

## Repository workflow

- Never modify files while on `master`.
- Before modifying any file, check the current branch: `git branch --show-current`.
- Before creating or switching branches, check for unrelated changes: `git status --short`.
- If there are unrelated uncommitted changes, stop and ask the user before continuing.
- If the current branch is `master`, determine the correct DS branch from the component group.
    - If the correct DS branch is clear, create or switch to it before editing.
    - If the correct DS branch is unclear, stop and ask the user.
- If the current branch is not `master`, confirm it matches the expected DS branch for the component.
- Process one component at a time. Never batch-rewrite multiple components in one pass.
- Validate after every component. Do not continue to the next until the current component's build passes and the user confirms.
- After a full alphabetic group is complete, push the branch and output the filled PR template to the user.

See [references/pr-workflow.md](references/pr-workflow.md) for the branch mapping, branch creation commands, and commit format.

---

## Branch-to-component validation

Before editing a component, confirm it belongs to the current DS branch group by component name:

- Components starting with `A` → `DS-400-A-components`
- Components starting with `B` → `DS-401-B-components`
- Components starting with `C` → `DS-426-C-components`
- Components starting with `E` through `M` → `DS-403-E-M-components`
- Components starting with `P` through `T` → `DS-427-P-T-components`

There are no D, N, or O groups because there are no components for those letters.

If the component does not belong to the current branch group, stop and ask the user before continuing.

---

## Stop conditions

Stop and ask the user before continuing if:

- The current branch is `master` and the correct DS branch cannot be determined from the component group
- There are unrelated uncommitted changes in the working tree
- The Step 1 `.mdx` file does not yet exist for the component
- The target `.mdx` file is not under `packages/storybook/src/`
- More than one matching `ComponentName.mdx` file exists
- The file has already been rewritten (Step 2 output is present) and the user has not explicitly asked to rewrite it again
- The original `.md` source file cannot be found for read-only cross-checking
- The `<Meta ... />`, H1, or description line is missing
- Fenced code blocks cannot be compared before and after rewriting
- Content guidance would require inventing behavior not supported by the source files or component code
- The Storybook build fails
- The component group does not match one of the approved DS branches

---

## What this process is

This is a **rewrite, not a content expansion.** You are improving how existing information is expressed. Do not add new information, do not remove rules, and do not change component names or file names.

**Rewrite rules:**

- Keep the `<Meta ...>`, H1, and description line exactly as they are.
- Keep every rule, constraint, and usage guideline that already exists in the source.
- Do not add information beyond what is in the original — except a missing or thin Content guidance section (see Research rules below).
- Reword sentences for clarity, flow, and tone.
- Add brief connecting prose where it helps readability.
- Mix prose and bullets naturally — do not default to bullet-only formatting.
- Rewrite ALL CAPS directives (`MUST`, `SHOULD`, `MAY`) as natural language.

---

## Source priority

Use sources in this order:

1. Existing `.mdx` file being rewritten
2. Original `.md` source file under `packages/llms/src/components/`
3. Writing-practices documentation under `packages/llms/src/content/`
4. Existing `.stories.tsx` file, if present
5. Actual component implementation, if needed
6. Third-party design guidance, only for Content guidance

The original `.md` component file is used for read-only cross-checking. Do not edit it.

The `.stories.tsx` file may be used as secondary context for examples, common usage patterns, and component behavior, but never as the primary writing source of truth.

---

---

## Page template

Every component file must follow this structure. Use the sections that apply. Omit sections that have no relevant content.

```mdx
import {Meta} from '@storybook/addon-docs/blocks';
import * as stories from './ComponentName.stories';

<Meta of={stories} title="@components/section/ComponentName" />

{/* For the agent-friendly version of this documentation, see packages/llms/src/components/ComponentName.md */}

# ComponentName

One sentence description of what the component does.

## Overview

[1–3 sentences: what is this component and when would a developer reach for it?]

## Content guidance

[See Content guidance rules below.]
```

Do not reformat the import line. Keep it exactly as it appears in the Step 1 `.mdx` file.

---

## Section-by-section rules

### Meta block, H1, and description

Keep the `import {Meta}` line, `import * as stories` line (when present), `<Meta ... />`, the `# H1` heading, and the description line exactly as they are. Do not alter any of these.

When a stories file exists, `<Meta ... />` must follow this pattern:

```mdx
<Meta of={stories} title="@components/section/ComponentName" />
```

If the component has no stories file and uses an approved fallback location, keep the fallback `<Meta title="..." />` unchanged.

### Overview

Write 1–3 natural sentences: what is this component, and when would a developer reach for it? Expand on the description without repeating it word for word.

### API reference sections

Remove duplicated API reference sections from these docs pages.

Do not include `## Props`, `## Sub-components`, or `## Usage` sections in the rewritten output.

Developers should use the component Demo page for API details, controls, and code samples.

### Content guidance

This section gives developers rules for what text to write: labels, headings, placeholder text, error messages, and similar UI copy.

Use bold subheadings (not heading elements) for each distinct UI part that has copy rules. Name the part, not the concept. Include the sub-component or prop name in backticks where applicable.

Under each subheading, write one rule per bullet. Start each bullet with an imperative verb or "Don't". Include a counter-example inline when the rule is about phrasing: `"Project settings" not "Configure your project settings"`.

Every Content guidance section must cover at minimum:

- The primary label or title element
- The primary body or content area
- Ordering or grouping logic (if the component contains multiple items)

See [references/expected-format.md](references/expected-format.md) for the full structure spec.

---

## Prose line formatting

Write one sentence per line in all prose sections.

In MDX, two sentences on adjacent lines with no blank line between them render as a single paragraph. The line break is invisible to the reader.
Each sentence must be on its own line, separated from the next by a blank line, so that it renders as a separate paragraph.

**Correct:**

```mdx
Use an Accordion to organize related content into collapsible sections.

It works well when vertical space is limited and not all content needs to be visible at once.
```

**Incorrect:**

```mdx
Use an Accordion to organize related content into collapsible sections.
It works well when vertical space is limited and not all content needs to be visible at once.
```

Exceptions. Do not apply this rule inside:

- Fenced code blocks
- Table cells
- Bullet list items
- Numbered list items

---

## Em-dash rule

Do not use em-dashes (`—`) anywhere in prose you write. This means no clause separators, no spaced usage (`word — word`), and no em-dashes at all.

If you feel the need for an em-dash, rewrite the sentence. Use a period, a comma, or split into two sentences instead.

The only exception is when quoting or reproducing existing text that already contains an em-dash.

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
    1. The original `.md` component file
    2. The existing `.stories.tsx` file, if present
    3. The writing-practices documentation under `packages/llms/src/content/`
    4. The actual component code, if needed
- Do not add a third-party rule if it conflicts with Coveo code, existing component behavior, or the writing-practices documentation under `packages/llms/src/content/`.
- Do not cite sources inside the MDX file.
- Do cite external sources in your final response.

---

## Writing rules (non-negotiable)

The content documentation under `packages/llms/src/content/` is the source of truth for writing style, tone, punctuation, capitalization, grammar, and UX copy rules.

Read the relevant files in `packages/llms/src/content/` before rewriting component usage guidelines.

Use `references/expected-format.md` only for the structure of the `## Content guidance` section.

Every rule below is mandatory. Violations are not acceptable in submitted output. If any of these conflict with what you would naturally write, the rule wins.

### Voice and tone

- Active voice by default. Passive voice is acceptable only in confirmations where attributing the action to the user would feel inaccurate ("Your pipeline has been saved." not "You saved your pipeline.").
- Address the user as "you." Never use "we," "our," "us," or "Coveo" as the subject of an action. Omit the subject entirely when possible.
- Plain language. Use the simpler word when two options mean the same thing. Do not use idioms or expressions. See the jargon replacements list in `WritingMechanics.md`.
- Frontload: put the most important information first, then add context or detail.

### Contractions

Use the approved contractions list from `WritingMechanics.md`. The approved set includes: aren't, can't, couldn't, didn't, doesn't, don't, hasn't, haven't, how's, isn't, it's, shouldn't, that's, there's, they're, what's, where's, won't, wouldn't, you're, you've.

Do not use: it'll, would've, could've, should've, you'd, it'd, there'd, there'll, they'll, they've, who's.

### Punctuation and formatting

- Sentence case for all UI text and headings. Only capitalize the first word and proper nouns. Exception: title case for navigation menu items only.
- No em-dashes (`—`). Not as clause separators, not with spaces, not at all. Rewrite the sentence using a period, comma, or split into two sentences.
- Exclamation marks: at most one per context, only for genuinely positive moments (completed setup, new feature enabled). Never use for errors, warnings, neutral states, or instructional copy.
- No ellipses except to indicate a process in progress or truncated content.
- No ALL CAPS for emphasis. Rewrite `MUST`, `SHOULD`, `MAY` as natural language.
- No colons in titles or labels.
- Do not use the possessive form for objects or UI elements. Rewrite using "of" instead.

### Spelling

- American English spelling throughout. Use "customize" not "customise", "color" not "colour", "canceled" not "cancelled", "behavior" not "behaviour", "organize" not "organise".
- Exception: proper names always use their official spelling regardless of locale.

### Sentence length

These are maximums. Shorter is always better.

- Any sentence: 20 words
- Button labels: 3 words
- Tooltips: 20 words
- Error messages: 25 words

### Structure

- One sentence per line in prose sections, separated by a blank line.
- Mix prose and bullets naturally. Do not default to bullet-only formatting.
- Keep every rule, constraint, and usage guideline that exists in the source. Do not drop content.
- State the result before the required action ("To add a source, select **Add source**." not "Select **Add source** to add a source.").

---

## Writing self-check (required before committing)

After rewriting the `.mdx` file and before presenting the commit to the user, re-read the entire output and verify every item below passes. If any item fails, fix it before continuing.

- [ ] Approved contractions from `WritingMechanics.md` are used (don't, can't, it's, etc.). No banned contractions (it'll, would've, could've, etc.).
- [ ] No em-dashes (`—`) anywhere in prose
- [ ] Active voice by default. Passive voice only in confirmations or status messages.
- [ ] Sentence case for all headings and UI text (only first word and proper nouns capitalized)
- [ ] No "we", "our", "us", or "Coveo" as the subject of an action (always "you" or omit the subject)
- [ ] At most one exclamation mark per context, only for positive moments. None in errors, warnings, or instructions.
- [ ] No ellipses except for progress indicators or truncated content
- [ ] No ALL CAPS directives (`MUST`, `SHOULD`, `MAY`, `SHALL`, `WILL`)
- [ ] American English spelling throughout (no British variants like "colour", "behaviour", "organise", "cancelled")
- [ ] Every prose sentence is on its own line with a blank line between sentences
- [ ] Plain language: jargon replacements from `WritingMechanics.md` applied (e.g., "use" not "utilize", "start" not "begin", "can" not "is able to")
- [ ] Sentence length maximums respected (20 words per sentence, 3 words for buttons)

---

## Required validation after each component

After rewriting a component, run:

```bash
cd packages/storybook
pnpm build
```

To confirm the build passed, check that `packages/storybook/storybook-static/index.html` has a recent modification time. Do not rely solely on terminal output, as it can appear stuck even when the build is still running.

If the build passes:

- Report that validation passed.
- Present the commit message for the user to confirm:

    ```
    docs(storybook): rewrite <ComponentName> guidelines
    ```

- Wait for the user to confirm before committing. Once confirmed, make the commit.
- After committing, ask if the user wants to continue with the next component in the group or stop here.

If the build fails:

- Leave the rewritten file in place.
- Stop the workflow.
- Report the exact command that failed and the relevant error output.
- Do not continue to another component.
- Do not attempt further fixes unless the user explicitly asks.

---

## When the full group is complete

Once every component in the group is committed and the user confirms the group is done:

1. Push the branch:

    ```bash
    git push -u origin <branch-name>
    ```

2. Output the filled PR template from [references/pr-body-template.md](references/pr-body-template.md) to the user. Fill in all placeholders with real values from the session. Present the PR title and PR body as two separate copy-pasteable blocks so the user can go straight to GitHub and open the PR.

---

## Iteration order

Always work one component at a time. If the user names a component, start there. If the user names a group, process only that group in alphabetical order. Wait for confirmation after each component before continuing.

Do not process components outside the active branch group.

---

## Definition of done: one component

A component is done only when all of the following are true:

- Step 1 conversion exists
- Step 2 rewrite is complete
- Storybook build has been run and passed
- Build result has been reported
- Source `.md` file is untouched
- Changes have been committed on the correct DS branch with message `docs(storybook): rewrite <ComponentName> guidelines`

---

## Definition of done: one group

A group is done only when all of the following are true:

- Every component in the group is individually complete
- The branch name matches the approved DS branch
- All changes are committed on the correct DS branch
- Branch has been pushed with `git push -u origin <branch-name>`
- The filled PR template has been output to the user as two copy-pasteable blocks: PR title and PR body

---

## Reference files

- [pr-workflow.md](references/pr-workflow.md): branch rules, branch mapping, and commit format
- [pr-body-template.md](references/pr-body-template.md): group completion summary template to output to the user
- [validation-checklist.md](references/validation-checklist.md): full checklist before marking a component complete
- [examples.md](references/examples.md): good and bad output examples
- [expected-format.md](references/expected-format.md): Content guidance section structure
