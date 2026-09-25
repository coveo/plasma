---
name: storybook-component-docs
description: Create or update human-facing Storybook MDX documentation for Plasma components. Use when adding a component docs page, rewriting an existing page for UX designers and developers, improving usage guidelines, or adding a representative Storybook demo and controls. Treat component specs in packages/llms/src/components as read-only source material.
---

# Storybook component documentation

Create or update component pages under `packages/storybook/src/components/` for UX designers and developers.
Use the corresponding specification under `packages/llms/src/components/` as read-only source material, not as text to copy mechanically.

See [references/page-structure.md](references/page-structure.md) for the canonical page shape.
See [references/mdx-patterns.md](references/mdx-patterns.md) for Storybook MDX patterns and troubleshooting.
Read [references/arg-types.md](references/arg-types.md) whenever a page exposes or changes Controls.
Complete [references/validation-checklist.md](references/validation-checklist.md) before reporting the work as done.

## Scope

This skill can:

- Create a missing component MDX page beside its story.
- Update an existing component MDX page while preserving valid custom content.
- Create or adjust a story when the page needs a representative demo or useful controls.
- Turn agent-oriented component guidance into concise decisions and best practices for humans.

This skill does not:

- Edit, move, rename, or delete files under `packages/llms/src/components/`.
- Copy complete API references, prop inventories, namespace aliases, or generated examples into Storybook.
- Create an intermediate converted page or intermediate commit.
- Edit component implementation unless the user expands the task beyond documentation.
- Commit, push, or open a pull request unless the user explicitly requests it.

## Workflow

### 1. Check repository state

1. Read `AGENTS.md`.
2. Run `git branch --show-current` and `git status --short`.
3. Record existing changes to the target MDX, stories, and `packages/llms/src/components/`.
4. Treat all existing changes and untracked files as user-owned work.
5. Never edit on `master`.
6. If a branch is needed, follow the Jira-based naming convention in `AGENTS.md`.
7. Do not switch branches when uncommitted work could be overwritten. Ask the user first.

A clean working tree is not required. Preserve unrelated work and verify that the final diff contains only intended changes.

### 2. Locate the component sources

For `<ComponentName>`, find and read in parallel when possible:

| Source                     | Path pattern                                                       |
| -------------------------- | ------------------------------------------------------------------ |
| Human-facing page          | `packages/storybook/src/components/**/<ComponentName>.mdx`         |
| Storybook stories          | `packages/storybook/src/components/**/<ComponentName>.stories.tsx` |
| Agent-facing specification | `packages/llms/src/components/<ComponentName>.md`                  |
| Implementation             | `packages/mantine/src/**/<ComponentName>.tsx`                      |
| Tests                      | Relevant co-located `*.spec.ts(x)` files                           |
| Writing guidance           | `packages/llms/src/content/`                                       |

If more than one matching story or MDX page exists, identify the authoritative target before editing.
If the specification is missing, ask the user before relying only on stories, implementation, and tests.

Read the story metadata, exports, args, arg types, parameters, and decorators.
Prefer an existing representative `Demo` export, but select another export when it better demonstrates normal usage.

### 3. Resolve source priority

Use sources in this order:

1. Explicit user requirements
2. Accurate content and custom examples in the existing MDX page
3. Story behavior and controls
4. The read-only component specification
5. Component implementation and tests
6. Repository writing guidance

Implementation and tests govern actual behavior.
The component specification supplies intended usage guidance.
Preserve existing MDX only when it remains accurate.
Report meaningful discrepancies instead of silently choosing one source.

Use repository sources first.
Ask the user before researching external design systems or adding externally sourced guidance.

### 4. Prepare a representative story

Reuse an existing story whenever possible.
If no story adequately demonstrates the component, create or update one using nearby stories as the pattern.

When editing stories:

- Preserve valid exports and examples.
- Demonstrate the normal component experience rather than every edge case.
- Expose controls only for meaningful user-facing or developer-facing choices.
- Give every exposed arg type a clear description, documented type, and correct default.
- Keep control values and options compatible with the story argument type.
- Distinguish component defaults from initial values set only for the demo.
- Use public types and component defaults for public props.
- Name adapter-only arguments clearly and document their story types and defaults.
- Do not fabricate args solely to make the Controls block nonempty.
- Import Plasma components from `@coveord/plasma-mantine`.
- Verify behavior against the implementation and relevant tests.

Follow [references/arg-types.md](references/arg-types.md) for the required `argTypes` structure and source rules.

### 5. Create or update the MDX page

#### Create mode

1. Place `<ComponentName>.mdx` beside `<ComponentName>.stories.tsx`.
2. Bind the page to the story metadata with `<Meta of={ComponentStories} />`.
3. Use the component name as the H1.
4. Write a one-sentence description and concise Overview.
5. Add Usage with a representative Canvas and useful Controls.
6. Add Guidelines using the canonical structure.

Do not add a docs-only fallback when no representative story exists.
Create or improve the story instead.

#### Update mode

1. Read the entire MDX file before editing.
2. Preserve accurate story bindings, custom JSX, demos, and component-specific examples.
3. Add missing canonical sections.
4. Rewrite terse or agent-oriented prose for UX designers and developers.
5. Remove duplicated API material when stories and controls already communicate it better.
6. Do not replace the whole file merely to enforce a template.

### 6. Write human-facing guidance

The Guidelines section normally contains:

- `When to use`
- `When not to use`
- `Best practices`
- `Content guidelines`, only when the component contains meaningful user-facing copy

Keep variants, states, accessibility inventories, props, and code samples out when Usage already communicates them.
Preserve an essential nonvisual requirement under Best practices when a demo cannot communicate it.
Add a component-specific section only when critical guidance does not fit the common shape.

Write in active voice, plain language, sentence case, and American English.
Address the reader as "you" when direct instruction is useful.
Avoid agent-oriented directives such as `MUST`, `SHOULD`, and `MAY`.
Do not use em dashes.
Apply `packages/llms/src/content/WritingMechanics.md` to UI-copy examples.
Treat its UX-copy length limits as guidance, not rigid limits for developer documentation.

Do not invent behavior, usage rules, or content guidance.
Do not add external citations to the MDX page.

### 7. Protect MDX syntax

MDX parses prose as JSX.
Escape bare angle brackets and curly braces outside inline code and fenced code blocks.
Do not copy YAML frontmatter or the `[Full Plasma documentation]({{BASE_URL}})` footer from component specifications.
Do not use Markdown pipe tables because this Storybook does not configure `remark-gfm`.
Use Plasma components for JSX tables and other UI elements.

See [references/mdx-patterns.md](references/mdx-patterns.md) for exact examples.

### 8. Format and validate

1. Format intended files with oxfmt.
2. Run `pnpm fmt:check` from the repository root.
3. Run `pnpm --filter @coveord/plasma-storybook build`.
4. If a story changed, run `pnpm --filter @coveord/plasma-storybook lint`.
5. If a story changed, verify each exposed arg type in the generated Controls table.
6. Fix failures caused by the change and rerun the failed checks.
7. Run `git diff --check`.
8. Inspect the final status and diff for unexpected changes.
9. Confirm this operation did not change `packages/llms/src/components/`.

Use command exit status to determine whether a build passed.
Do not infer success from generated file timestamps.

Before a pull request, also run the full checks required by `AGENTS.md`.

### 9. Report the result

Report:

- Pages and stories created or updated
- Repository sources consulted
- Sections added, retained, or removed
- Validation commands and outcomes
- Any unresolved discrepancy or guidance gap

Do not commit, push, or open a pull request without an explicit user request.

## Definition of done

A component page is done when:

- The page follows the canonical structure where applicable.
- Usage demonstrates the normal component experience.
- Guidelines help UX designers and developers make decisions without duplicating Usage.
- Existing valid work is preserved.
- The agent-facing specification is unchanged.
- Formatting, Storybook build, and applicable lint checks pass.
