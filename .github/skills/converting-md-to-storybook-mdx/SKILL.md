---
name: converting-md-to-storybook-mdx
description: Converts component .md files from packages/llms/src/components/ into MDX docs-only pages for the Plasma Storybook (packages/storybook). Strips frontmatter, adds the required Meta import and title block, escapes JSX-breaking characters, and places the output where Storybook's story globs will pick it up. Use when a user says "add this to Storybook", "convert to MDX", "do the next entry", or "render in Storybook".
---

# Converting Component MD Files to Plasma Storybook MDX

Converts `.md` component files from `packages/llms/src/components/` into `.mdx` docs-only pages for `packages/storybook` in the plasma repo.

## What This Process Is

This is a **duplication then conversion**. You are creating a new `.mdx` file based on the content of an existing `.md` file. The original `.md` file is the source of truth and must never be moved, edited, or deleted. The `.mdx` is a separate new file.

## Background

The source files in `packages/llms/src/components/` describe each Plasma component for LLM consumption. Each one can also serve as a human-readable documentation page in Storybook.

The Plasma Storybook auto-discovers MDX files under:

```text
packages/storybook/src/**/*.mdx
```

No story registration is needed. A docs-only page only requires a `<Meta>` block at the top.

The sidebar location is controlled by the `title` in `<Meta>`, which must match the convention used in the component's `.stories.tsx` file.

## Stop Conditions

Stop immediately and ask the user if any of the following are true:

- The current branch is `master` and the correct DS branch is unclear.
- There are unrelated uncommitted changes in the working tree.
- The source `.md` file is missing YAML frontmatter, `name`, or `description`.
- The target `.mdx` file already exists and the user has not given explicit permission to overwrite it.
- The component does not belong to the current branch group.

## Process

### Step 0: Confirm you are on the correct branch

Before modifying any file:

1. Check the current branch: `git branch --show-current`
2. Never modify files while on `master`.
3. If the current branch is `master`:
    - Determine the correct DS branch from the component group being worked on.
    - If the correct DS branch is clear, create or switch to it before making any edits.
    - If the correct DS branch is unclear, stop and ask the user which branch to use.
4. If the current branch is not `master`, confirm it matches the expected DS branch for the component before proceeding.

Before creating or switching branches, check for existing changes:

```bash
git status --short
```

If there are unrelated uncommitted changes, stop and ask the user before continuing.

### Branch-to-component group mapping

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

### Step 1: Identify the source file and target location

1. **Source file** — the `.md` file from `packages/llms/src/components/`
2. **Storybook section** — find the corresponding `.stories.tsx` file in `packages/storybook/src/` and read its `title` field. The MDX file goes in the same directory as that stories file.
3. **Meta title** — use the exact same `title` string from the `.stories.tsx` file (e.g. `@components/layout/Accordion`)

### Step 2: Perform the conversion manually

Before starting, verify the source `.md` file contains valid YAML frontmatter with both `name` and `description`. If the frontmatter is missing, malformed, or does not contain both fields, stop and ask the user.

Each source `.md` file has a YAML block at the top (called frontmatter) that looks like this:

```yaml
---
name: Accordion
description: Collapsible content panels with an additional disabled control variant.
---
```

This block is not valid in an MDX file and must be removed. However, the `name` and `description` values inside it are useful — use them as the opening content of the page instead.

Do the following in order:

1. **Strip the YAML frontmatter** — remove the entire `---` block from the top of the file. Then use the `name` value as the page's `# H1` heading, and always add the `description` value as a plain text line directly beneath it.
2. **Add the MDX header** — the very first lines of the output file must be:

    ```mdx
    import {Meta} from '@storybook/addon-docs/blocks';

    <Meta title="@components/section/ComponentName" />
    ```

3. **Escape JSX-breaking characters** — MDX is parsed as JSX (a JavaScript syntax), which means certain characters that are fine in plain Markdown will cause errors. Specifically: any bare `<tag>` or `</tag>` appearing in regular prose text (not inside a code block) must be rewritten as `&lt;tag&gt;`. Content inside backtick inline code or fenced code blocks is safe and must not be changed.
4. **Handle the `{{BASE_URL}}` link** — every source file ends with `[Full Plasma documentation]({{BASE_URL}})`. The `{{BASE_URL}}` placeholder has no real value in this repo — it is not a working link. Replace the entire line with this MDX comment so it is invisible in the rendered page but not silently lost:

    ```mdx
    {/* TODO: Replace with full Plasma docs URL */}
    ```

    Do not invent or guess a URL.

5. **Preserve everything else** — fenced code blocks, inline code, tables, lists, and headings carry over as-is.

### Step 3: Write the output file

The primary rule is: **the `.mdx` file must live in the same folder as the component's `.stories.tsx` file.** They are a pair — a developer browsing Storybook should find the usage guidelines right next to the interactive stories for the same component.

To find the right folder, search for `<ComponentName>.stories.tsx` in `packages/storybook/src/` and place the `.mdx` file in that exact directory. Read the `title` field from that stories file and use it exactly as the `<Meta title>` value — do not alter or reformat it.

If the target `.mdx` file already exists, stop and ask the user for explicit permission before overwriting it.

**Example:**

| Stories file                                                   | MDX file to create                                     |
| -------------------------------------------------------------- | ------------------------------------------------------ |
| `packages/storybook/src/layout/Accordion.stories.tsx`          | `packages/storybook/src/layout/Accordion.mdx`          |
| `packages/storybook/src/call-to-action/ActionIcon.stories.tsx` | `packages/storybook/src/call-to-action/ActionIcon.mdx` |

**If no matching `.stories.tsx` exists**, place the `.mdx` in the most appropriate existing folder based on the component's category. The 5 known cases are:

| Component       | Output directory                         |
| --------------- | ---------------------------------------- |
| `BlankSlate`    | `packages/storybook/src/feedback/`       |
| `Chip`          | `packages/storybook/src/data-display/`   |
| `Input`         | `packages/storybook/src/form/string/`    |
| `Menu`          | `packages/storybook/src/call-to-action/` |
| `PasswordInput` | `packages/storybook/src/form/string/`    |

For these, set `<Meta title>` to `@components/<section>/<ComponentName>` using the folder name as the section.

Do not delete or modify the original `.md` source file. Do not create or modify any `.stories.tsx` file.

### Step 4: Verify placement

Confirm the output file is under the watched glob:

```text
packages/storybook/src/**/*.mdx   ✓
```

### Step 5: Spot-check in Storybook (optional but recommended)

```bash
# From packages/storybook
pnpm storybook
```

Navigate to the expected sidebar location and confirm the page renders correctly.

## What the Output Looks Like

```mdx
import {Meta} from '@storybook/addon-docs/blocks';

<Meta title="@components/layout/Accordion" />

# Accordion

Collapsible content panels with an additional disabled control variant.

## Props

...
```

## Required Validation After Each Component

After converting a component, run:

```bash
cd packages/storybook
pnpm build
```

**If the build passes:**

- Report that Step 1 validation passed.
- Do not commit yet if Step 2 will run next.
- Continue to the `storybook-component-guidelines` skill for the same component, or wait for the user's instruction.

**If the build fails:**

- Leave the generated file in place.
- Stop the workflow.
- Report the exact command that failed and the relevant error output.
- Do not continue to another component.
- Do not attempt further fixes unless the user explicitly asks.

The final commit should be handled after Step 2, once the component documentation is rewritten and validated. PR creation is handled by the Step 2 skill after all rewritten files for the branch group are complete and validated.

## Iteration Order

If the user specifies a component to start with, begin there. If it is unclear which component you should start with, ask the user before beginning. Don't start without a concrete name of the component you'll be writing for. After each file, continue alphabetically through `packages/llms/src/components/` regardless of which branch you are on — do not rely on previously created `.mdx` files to determine progress. Do one file at a time and wait for confirmation before moving to the next.

## Reference Files

- [MDX patterns and troubleshooting](references/mdx-patterns.md) — JSX escaping rules and troubleshooting
- [Plasma writing rules](../storybook-component-guidelines/references/plasma-writing-rules.md) — capitalization, punctuation, grammar, voice, and jargon rules that apply to all Plasma copy
- [Expected format](../storybook-component-guidelines/references/expected-format.md) — section structure and formatting standards for component documentation

## Validation Checklist

Before considering a conversion complete:

- [ ] No YAML frontmatter remains in the output file
- [ ] `import { Meta }` line is the first line
- [ ] `<Meta title="..." />` title matches the existing `.stories.tsx` title exactly
- [ ] No unescaped bare `<tag>` syntax in prose (only inside fenced code blocks or inline code)
- [ ] `{{BASE_URL}}` link is replaced with a TODO comment
- [ ] Output file is under `packages/storybook/src/**/*.mdx`
- [ ] Original `.md` source file is untouched
- [ ] Build passes (`pnpm build` from `packages/storybook`)
- [ ] File has not been committed (Step 2 handles the final commit)
- [ ] No draft PR has been created (Step 2 handles PR creation)
