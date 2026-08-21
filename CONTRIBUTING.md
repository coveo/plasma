# Contributing to Plasma

Thanks for contributing to Plasma, Coveo's design system! This guide walks you through setting up the project, making changes, and opening a pull request.

> Working with an AI coding agent? Point it at [AGENTS.md](AGENTS.md), which distills this guide into agent-focused instructions.

## Prerequisites

- [Node.js 24](https://nodejs.org/) (the version pinned in CI).
- [pnpm](https://pnpm.io/installation) — the repo enforces pnpm and blocks npm/yarn via `only-allow`. The exact version is pinned in `package.json` (`packageManager`); enable it with `corepack enable`.

## Project overview

Plasma is a monorepo managed with **pnpm workspaces** and **Turbo**. Packages live under `packages/*`:

| Package                              | Purpose                                                             |
| ------------------------------------ | ------------------------------------------------------------------- |
| `@coveord/plasma-mantine`            | Plasma-flavoured Mantine theme and custom components (main library) |
| `@coveord/plasma-tokens`             | Design tokens (colors, spacing, typography, …)                      |
| `@coveord/plasma-react-icons`        | React icon components (`src/generated` is generated)                |
| `@coveord/plasma-storybook`          | Storybook component documentation site                              |
| `@coveord/plasma-figma-code-connect` | Figma Code Connect instances                                        |
| `@coveord/plasma-llms`               | LLM-friendly component specs                                        |
| `@coveord/plasma-mcp-server`         | MCP server exposing Plasma docs to AI agents                        |

`@coveord/plasma-style` and `@coveord/plasma-react` are in **maintenance mode** and live on the [`v53` branch](https://github.com/coveo/plasma/tree/v53). Please don't add features to them here.

## Setup

Run every command from the repository root.

```bash
pnpm install   # installs and links all workspace packages
```

## Running the demo locally

```bash
pnpm start
```

This builds dependencies and starts the dev servers with hot reload. Editing any package's source files rebuilds and refreshes automatically. Because the packages share one repository and use pnpm, there's no need to link them manually.

## Everyday commands

| Command          | What it does                                     |
| ---------------- | ------------------------------------------------ |
| `pnpm build`     | Build all packages (`turbo run build`)           |
| `pnpm start`     | Build deps then start the demo with hot reload   |
| `pnpm test`      | Run the full test suite (runs in UTC)            |
| `pnpm lint`      | Lint with oxlint                                 |
| `pnpm fmt`       | Format with oxfmt                                |
| `pnpm fmt:check` | Verify formatting without writing (CI runs this) |
| `pnpm lintfix`   | Auto-fix lint/style issues across packages       |
| `pnpm changeset` | Create a changeset for a releasable change       |

## Code style

Formatting is handled by **oxfmt** (`.oxfmtrc.json`): print width 120, tab width 4, single quotes, no bracket spacing. Run `pnpm fmt` rather than hand-formatting. Linting is handled by **oxlint** and SCSS/CSS by **Stylelint**.

- Write **TypeScript** for all new code and prefer type inference; export types for public APIs.
- Use **React 19** functional components with hooks and the JSX runtime (no `import React`). Prefer named exports.
- Name files by convention: components `PascalCase.tsx`, utilities `camelCase.ts`, tests co-located as `*.spec.ts(x)`, styles as `*.module.css` / `*.css`.
- Follow the patterns already used in the package you're touching.

Always import components from `@coveord/plasma-mantine`, even when you used Mantine's own docs as a reference.

## Testing

New tests use [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/). Test user-facing behavior rather than implementation details, and co-locate spec files with their source. Avoid starting test names with "should" — use present tense (`it('returns true when value is valid')`).

Run all tests from the root with `pnpm test`. From within `packages/{name}` you can also use:

- `pnpm test:watch` — watch mode; press a key for the menu, then `p` to filter by filename. Use `fdescribe`/`fit` to focus.
- `pnpm test:debug` — starts a paused Node process; connect from `chrome://inspect` in a Chromium browser, add a `debugger` statement, and save to rerun.

## Documentation

- Keep README files current when you add or change features.
- Add JSDoc to exported functions and components.
- When a component's public API changes, update its spec in `packages/llms/src/components/<ComponentName>.md` and keep Storybook in sync. See the [internal agent skills](#internal-skills) for the exact workflow.

### Internal skills

`.github/skills/` contains agent skills that encode our documentation workflows:

- **`plasma-component-docs`** — write or update the per-component LLM specs in `packages/llms/src/components/`.
- **`converting-md-to-storybook-mdx`** — Step 1: convert a component `.md` spec into a Storybook `.mdx` page.
- **`storybook-component-guidelines`** — Step 2: rewrite the converted `.mdx` into human-readable documentation.
- **`changesets-author`** — write or edit a changeset that follows the template documented below.

`packages/llms/src/skill.md` is the source for the public Plasma skill served at [`https://plasma.coveo.com/plasma-skill.md`](https://plasma.coveo.com/plasma-skill.md). It is intended for agents using Plasma in consumer applications, so contributors do not need to install it. Edit the source file rather than the generated `packages/llms/dist/plasma-skill.md`.

## Committing your changes

Write a concise commit message that describes what changed and, when helpful, mentions the affected package or subject — for example `Add new Button variant` or `Fix primary color token value`.

A pre-commit hook (Husky + lint-staged) automatically formats staged files with oxfmt and fixes SCSS with Stylelint. Don't skip hooks (`--no-verify`) unless asked.

## Writing changesets

Add a changeset whenever your PR changes a releasable package. The changeset becomes the entry in that
package's `CHANGELOG.md` (and the Storybook changelog page), so it is written for **consumers** of the
package.

### Creating one

Scaffold a pre-filled changeset from the template:

```bash
pnpm changeset:new           # patch (default)
pnpm changeset:new minor
pnpm changeset:new major
pnpm changeset:new -p @coveord/plasma-tokens -b minor
```

Then edit the generated `.changeset/*.md` file: fill in the `TODO` placeholders, remove the guiding
comments, and adjust the package(s) and bump in the frontmatter. You can also use the interactive
`pnpm changeset` if you prefer.

Validate your changeset before pushing (CI runs the same check):

```bash
pnpm changeset:validate
```

### Format

A changeset is frontmatter (package + bump) followed by a title and an optional body:

```markdown
---
'@coveord/plasma-mantine': minor
---

Title on the first line

Optional body explaining the change.
```

**Title (first line)**

- One line, sentence case, **no trailing period**.
- Written from the consumer's perspective; describe _what changed_, not the implementation.
- Wrap component / prop / API names in backticks.
- Do **not** add a `**BREAKING:**` prefix — a `major` bump already marks breaking changes.
- Keep it to **100 characters or fewer**. Put anything longer in the body.

**Body**

- Separate it from the title with a blank line.
- Write the change as prose. Do **not** use markdown lists (`-`, `*`, `+`, or `1.`); validation rejects them. Use short paragraphs instead.
- Body headings start at a single `#` (they are re-leveled automatically in the changelog).
- Use ` ```diff ` fenced blocks for before/after code.

**Requirements by bump type**

| Bump    | Body required? | Notes                                              |
| ------- | -------------- | -------------------------------------------------- |
| `major` | Yes            | Must include a `# Migration` section (with steps). |
| `minor` | Yes            | Describe what the feature does and how to use it.  |
| `patch` | No             | A title alone is fine; add a body for context.     |

### Examples

`major` — breaking change with migration steps:

````markdown
---
'@coveord/plasma-mantine': major
---

Remove the `info` variant from `StatusToken` and make `variant` required

The `variant` prop no longer defaults to `info` — it is now required.

# Migration

Pass a `variant` explicitly to every `StatusToken`:

```diff
- <StatusToken />
+ <StatusToken variant="success" />
```
````

`minor` — new capability:

```markdown
---
'@coveord/plasma-mantine': minor
---

Add `Table.Cell` for controlling text overflow in table cells

Supports single-line ellipsis (default), multi-line clamping with `lineClamp`, word wrapping with
`wrap`, and an expandable "Show more" toggle with `expandable`.
```

`patch` — small fix, title only:

```markdown
---
'@coveord/plasma-mantine': patch
---

Fix table header inner grid min height
```

## Opening a pull request

1. Branch off `master`. Name it `<jira-ticket-number>-short-one-liner-description` (e.g., `ADUI-1234-change-something`). If there's no related Jira ticket, use just the one-liner description (e.g., `change-something`).
2. Make your changes following the conventions above.
3. Make sure `pnpm test`, `pnpm lint`, and `pnpm fmt:check` all pass.
4. Add a changeset if you touched a releasable package.
5. Commit your changes with a clear message.
6. Push your branch and open a PR — do not push directly to `master`.
7. Fill in the [PR template](.github/PULL_REQUEST_TEMPLATE/pull_request_template.md): proposed changes, potential breaking changes, and the acceptance-criteria checklist.

CI will then run lint and format checks, the test suite, a release preview, and a Chromatic demo build that gets linked as a PR comment. Address any failures before requesting review.

## License

All packages in this repository are distributed under the [Apache 2.0 license](LICENSE). Keep the copyright headers intact.
