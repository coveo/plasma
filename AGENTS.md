# AGENTS.md

Guidance for AI coding agents working in the Plasma monorepo. The goal of this file is to let an agent contribute a complete, review-ready pull request **without having to ask a human how**. Read it before making changes.

Humans should read [CONTRIBUTING.md](CONTRIBUTING.md) and the [README](README.md) instead — they cover the same ground with more narrative.

## What Plasma is

Plasma is Coveo's design system, used in the Coveo Cloud Administration Console. It ships a Mantine-themed React component library, design tokens, React icons, and documentation. It is a monorepo managed with **pnpm workspaces** and **Turbo**.

**Import invariant:** always import components from `@coveord/plasma-mantine`, even when Mantine's own docs were the reference source.

## Repository layout

Packages live in `packages/*` (declared in `pnpm-workspace.yaml`):

| Package                              | Purpose                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `@coveord/plasma-mantine`            | Plasma-flavoured Mantine theme and custom components (main library)          |
| `@coveord/plasma-tokens`             | Design tokens (colors, spacing, typography, …)                               |
| `@coveord/plasma-react-icons`        | React icon components (`src/generated` is generated — do not edit by hand)   |
| `@coveord/plasma-storybook`          | Storybook component documentation site                                       |
| `@coveord/plasma-figma-code-connect` | Figma Code Connect instances                                                 |
| `@coveord/plasma-llms`               | LLM-friendly component specs (`llms.txt`, `llms-full.txt`, per-component)    |
| `@coveord/plasma-mcp-server`         | MCP server exposing Plasma docs to AI agents                                 |
| `@coveord/plasma-style` / `-react`   | **Maintenance mode** — do not add features. Legacy lives on the `v53` branch |

## Tech stack

- **Node.js 24** and **pnpm** (pinned via `packageManager`; enable with `corepack enable`). pnpm is enforced — npm/yarn are blocked by `only-allow`.
- **React 19** with the **Mantine** UI library.
- **TypeScript** (strict).
- **Vitest** + **React Testing Library** for tests.
- **oxfmt** for formatting and **oxlint** for linting (not Prettier/ESLint). **Stylelint** for SCSS/CSS.
- **Turbo** for build/test orchestration, **Changesets** for versioning, **Husky** + **lint-staged** for pre-commit hooks.

## Setup

Run everything from the repository root.

```bash
pnpm install   # install and link all workspace packages
```

## Everyday commands

| Command          | What it does                                               |
| ---------------- | ---------------------------------------------------------- |
| `pnpm build`     | Build all packages (`turbo run build`)                     |
| `pnpm start`     | Build deps then start the demo/dev servers with hot reload |
| `pnpm test`      | Run all tests (`turbo run test`, runs in UTC)              |
| `pnpm lint`      | Lint with oxlint                                           |
| `pnpm fmt`       | Format with oxfmt                                          |
| `pnpm fmt:check` | Verify formatting without writing (this is what CI runs)   |
| `pnpm lintfix`   | Auto-fix lint/style issues across packages                 |
| `pnpm changeset` | Create a changeset for a releasable change                 |

You can run tests for a single package from `packages/{name}` with `pnpm test`, `pnpm test:watch`, or `pnpm test:debug`.

If `pnpm lint` fails with `Error: Invalid tsconfig`, set `OXLINT_TSGOLINT_DANGEROUSLY_SUPPRESS_PROGRAM_DIAGNOSTICS=true` (CI does this).

## Code style and conventions

Formatting is enforced by **oxfmt** (see `.oxfmtrc.json`): print width 120, tab width 4, single quotes, no bracket spacing in objects. Run `pnpm fmt` before committing — don't hand-format.

- **TypeScript** for all new code; prefer type inference; export types for public APIs.
- **React**: functional components with hooks, React 19 patterns, JSX runtime (no `import React`), prefer **named exports**.
- **File naming**: components `PascalCase.tsx`; utilities `camelCase.ts`; tests co-located as `*.spec.ts(x)`; styles as `*.module.css` / `*.css`.
- Match existing patterns in the surrounding package before introducing new ones.

## Testing

- Use **Vitest** + **React Testing Library**; test user-facing behavior, not implementation details.
- Co-locate `*.spec.ts(x)` files with the source.
- Do **not** prefix test names with "should"; use present tense: `it('returns true when value is valid')`, not `it('should return …')`.
- Cover new components/utilities and their edge cases, including accessibility.
- Add or update tests for every behavior change and confirm `pnpm test` passes before opening a PR.

## Internal skills

This repo ships agent **skills** in `.github/skills/`. Use them when the task matches — they encode the exact expected format and workflow:

- **`plasma-component-docs`** — write/update the LLM component specs in `packages/llms/src/components/`. Use when adding a component, updating a spec after an API change, or auditing docs.
- **`storybook-component-docs`** — create or update human-facing component pages in `packages/storybook`. Use the specs in `packages/llms/src/components/` as read-only source material, preserve useful demos and controls, and write concise guidelines for UX designers and developers.
- **`changesets-author`** — write or edit a changeset that follows the enforced template. Use when adding or editing a `.changeset/*.md` file. Scaffold with `pnpm changeset:new` and check with `pnpm changeset:validate`.

`packages/llms/src/skill.md` is the source for the public Plasma skill served at `https://plasma.coveo.com/plasma-skill.md`. It is intended for agents using Plasma in consumer applications; agents contributing to this repository do not need to install it. Edit the source file, not the generated `packages/llms/dist/plasma-skill.md`, when updating the public skill.

## Component documentation

When you change a component's public API:

1. Update the spec in `packages/llms/src/components/<ComponentName>.md` (use the `plasma-component-docs` skill).
2. Rebuild the aggregated LLM outputs if needed (the llms package build regenerates `dist/`).
3. Keep Storybook docs in sync (use the `storybook-component-docs` skill).
4. Update JSDoc and any affected README.

## Contributing a pull request

1. **Branch** off `master`. Name it `<jira-ticket-number>-short-one-liner-description` (e.g., `ADUI-1234-change-something`). If you don't know the Jira ticket number, ask the user for it; if there is no related Jira ticket, use just the one-liner description (e.g., `change-something`).
2. Make changes following the conventions above.
3. `pnpm test`, `pnpm lint`, and `pnpm fmt:check` must all pass.
4. **Add a changeset** if you touched a releasable package. Load the `changesets-author` skill — it walks through bump selection, the changelog template, and the `pnpm changeset:new` / `pnpm changeset:validate` workflow. Commit the generated `.changeset/*.md` file with your change. CI runs `pnpm changeset:validate` and fails on non-conforming changesets. Releases are driven by Changesets, **not** inferred from commit messages.
5. **Commit** with a concise, descriptive message. Mention the affected subject/package when it helps: `Add new Button variant`, `Fix primary color token value`.
6. **Push** the branch and open a draft PR (`gh pr create --draft`); do not push to `master`. Fill in the PR template (`.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`): proposed changes, potential breaking changes, and the acceptance-criteria checklist.

Pre-commit hooks (Husky + lint-staged) auto-run oxfmt and stylelint on staged files. Do not skip hooks (`--no-verify`) unless explicitly asked.

### What CI checks on a PR

- **Lint** — `pnpm lint` + `pnpm fmt:check`.
- **Test** — the full test suite.
- **Release Preview** — previews the package version bumps your changesets would produce.
- **Build & Deploy Demo** — builds Storybook and deploys a Chromatic preview, linked as a PR comment.

## Gotchas

- Import from `@coveord/plasma-mantine`, never from Mantine directly, in library/consumer code.
- Don't edit generated files (e.g., `packages/react-icons/src/generated`, any `dist/`).
- Don't add features to `@coveord/plasma-style` or `@coveord/plasma-react` — they are in maintenance mode (`v53` branch).
- Use `workspace:*` for internal dependencies. Add deps in the target package (`packages/{name}`), or `-Dw` for root dev deps. Dependencies are pinned exactly (`saveExact`).
- All packages are Apache 2.0 licensed; keep copyright headers.

## Resources

- Demo / Storybook: https://plasma.coveo.com/
- Repository: https://github.com/coveo/plasma
- Mantine docs: https://mantine.dev/
