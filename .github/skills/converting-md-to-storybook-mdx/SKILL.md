---
name: converting-md-to-storybook-mdx
description: "STEP 1 OF 2 — Converts component .md files from packages/llms/src/components/ into MDX docs-only pages for the Plasma Storybook (packages/storybook). Strips frontmatter, adds the required Meta import and title block, escapes JSX-breaking characters, and places the output where Storybook's story globs will pick it up. Use when a user says 'add this to Storybook', 'convert to MDX', 'do the next entry', or 'render in Storybook'. After this step, use the storybook-component-guidelines skill (Step 2) to rewrite the converted .mdx file into clear, human-readable documentation."
---

# Step 1 — Converting Component MD Files to Plasma Storybook MDX

This is **Step 1 of a two-step process**:

1. **(This skill)** Convert the `.md` source file to a `.mdx` file in the correct Storybook folder — preserving the original writing exactly.
2. **(storybook-component-guidelines skill)** Rewrite the converted `.mdx` file into clear, human-readable documentation for a developer audience.

Do not skip ahead to Step 2 until the `.mdx` file from this step exists and the Storybook build passes.

## What this process is

This is a **duplication then conversion**. You are creating a new `.mdx` file based on the content of an existing `.md` file. The original `.md` file is the source of truth and must never be moved, edited, or deleted. The `.mdx` is a separate new file.

**Preserve the original writing exactly.** Do not rephrase, simplify, or improve any copy during this step. Rewriting happens in Step 2.

---

## Repository workflow

- Never work directly on `master`.
- Before modifying any file, check the current branch: `git branch --show-current`.
- If the current branch is `master`, create or switch to the correct DS branch before continuing.
- Process one component at a time. Never batch-convert multiple components in one pass.
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
- The target `.mdx` file already exists and would need to be overwritten
- A Step 2 completion marker is present in an existing file
- More than one matching `.stories.tsx` file exists for the component
- No matching `.stories.tsx` exists and the component is not in `references/storybook-fallbacks.md`
- The component group does not match one of the approved DS branches
- The Storybook build fails

---

## Process

### 1. Identify the source file and target location

1. **Source file** — the `.md` file from `packages/llms/src/components/`
2. **Stories file** — search for `<ComponentName>.stories.tsx` in `packages/storybook/src/` and read its `title` field. The MDX file goes in the same directory.
3. **No stories file** — if none exists, check [references/storybook-fallbacks.md](references/storybook-fallbacks.md) for the approved fallback location. If the component is not listed there either, stop and ask the user.

### 2. Existing file safety

Before writing `ComponentName-usage.mdx`:

- If the file does not exist, create it.
- If it exists and contains `{/* storybook-usage-guidelines: rewritten */}`, stop and ask the user for permission before overwriting. Step 2 is already complete for this file.
- If it exists but does not contain the marker, explain why overwriting may be safe or unsafe, then ask the user for permission before overwriting.

Never overwrite an existing `.mdx` file without explicit user permission.

### 3. Perform the conversion

Each source `.md` file starts with a YAML frontmatter block:

```
---
name: Accordion
description: Collapsible content panels with an additional disabled control variant.
---
```

Do the following in order:

1. **Strip the YAML frontmatter** — remove the entire `---` block. Use the `name` value as the `# H1` heading and add the `description` value as plain text directly beneath it.
2. **Add the MDX header** — the very first lines of the output file must be:

    ```mdx
    import {Meta} from '@storybook/addon-docs/blocks';

    <Meta title="@components/section/ComponentName" />
    ```

3. **Escape JSX-sensitive prose** — escape the following characters when they appear outside fenced code blocks and inline code:

    | Prose character or pattern | Escaped form   |
    | -------------------------- | -------------- |
    | `<tag>`                    | `&lt;tag&gt;`  |
    | `</tag>`                   | `&lt;/tag&gt;` |
    | `{`                        | `&#123;`       |
    | `}`                        | `&#125;`       |

    Do not escape content inside fenced code blocks or inline code. Do not escape intentional MDX syntax added by this skill, such as `{/* TODO: Replace with full Plasma docs URL */}`.

4. **Handle the `{{BASE_URL}}` link** — replace `[Full Plasma documentation]({{BASE_URL}})` with:
    ```mdx
    {/* TODO: Replace with full Plasma docs URL */}
    ```
5. **Preserve everything else** — fenced code blocks, inline code, tables, lists, and headings carry over unchanged.

### 4. Output file naming and placement

The file must be named `ComponentName-usage.mdx` and placed in the same folder as the `.stories.tsx` file.

The `form` section has sub-folders — always read the stories file to find the exact path:

| Stories file                                                   | MDX output                                                   |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| `packages/storybook/src/layout/Accordion.stories.tsx`          | `packages/storybook/src/layout/Accordion-usage.mdx`          |
| `packages/storybook/src/call-to-action/ActionIcon.stories.tsx` | `packages/storybook/src/call-to-action/ActionIcon-usage.mdx` |
| `packages/storybook/src/form/string/Select.stories.tsx`        | `packages/storybook/src/form/string/Select-usage.mdx`        |
| `packages/storybook/src/form/array/Collection.stories.tsx`     | `packages/storybook/src/form/array/Collection-usage.mdx`     |
| `packages/storybook/src/form/boolean/Checkbox.stories.tsx`     | `packages/storybook/src/form/boolean/Checkbox-usage.mdx`     |
| `packages/storybook/src/form/number/NumberInput.stories.tsx`   | `packages/storybook/src/form/number/NumberInput-usage.mdx`   |
| `packages/storybook/src/form/date/DatePickerInput.stories.tsx` | `packages/storybook/src/form/date/DatePickerInput-usage.mdx` |

Do not create or modify any `.stories.tsx` file. Do not modify the original `.md` source file.

---

## Required validation after each component

After converting a component, run:

```bash
cd packages/storybook
pnpm build
```

If the build passes:

- Report that validation passed.
- Commit the file: `docs(storybook): add <ComponentName> usage guidelines`
- Wait for the user's confirmation before moving to the next component.

If the build fails:

- Leave the generated file in place.
- Stop the workflow.
- Report the exact command that failed and the relevant error output.
- Do not continue to another component.
- Do not attempt further fixes unless the user explicitly asks.

---

## Iteration order

Always work one component at a time. If the user names a component, start there. If the user names a group, process only that group in alphabetical order. Wait for confirmation after each component before continuing.

Do not process components outside the active branch group.

---

## Reference files

- [pr-workflow.md](references/pr-workflow.md) — branch rules, branch mapping, commit format, PR titles, draft PR command
- [storybook-fallbacks.md](references/storybook-fallbacks.md) — approved locations for components with no `.stories.tsx` file
- [validation-checklist.md](references/validation-checklist.md) — full checklist before marking a component complete
- [examples.md](references/examples.md) — good and bad output examples
- [mdx-patterns.md](references/mdx-patterns.md) — JSX escaping rules and Storybook MDX troubleshooting
