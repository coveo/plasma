---
name: changesets-author
description: Author Changesets files for the Plasma monorepo that conform to the project's changelog template. Use when adding or editing a `.changeset/*.md` file, when a PR changes a releasable package (`packages/*`), or when the user says "add a changeset", "write a changeset for…", "create a changeset", "document this change for release", or "fix the failing changeset validation". Covers frontmatter, bump selection, title rules, per-bump body requirements, and the `pnpm changeset:new` / `pnpm changeset:validate` commands.
---

Write `.changeset/*.md` files that pass `pnpm changeset:validate` (the same check CI runs) and render cleanly in each package's `CHANGELOG.md`. The full contributor-facing rules live in [CONTRIBUTING.md](../../../CONTRIBUTING.md#writing-changesets); see [references/template.md](references/template.md) for annotated per-bump examples.

## Workflow

### 1. Decide the bump

- `major` — a breaking change (removed/renamed/behavior-changed public API).
- `minor` — a new, backward-compatible capability.
- `patch` — a bug fix or internal change with no API surface change.

Identify every affected releasable package under `packages/*` (a change can bump several).

### 2. Scaffold the file

```bash
pnpm changeset:new <bump>      # e.g. pnpm changeset:new major
pnpm changeset:new -p @coveord/plasma-tokens -b minor
```

This writes `.changeset/<name>.md` pre-filled with the correct skeleton. Replace the `TODO` placeholders. Add extra packages to the frontmatter if the change spans more than one.

### 3. Apply the format rules

**Frontmatter** — one line per package: `'<package>': <major|minor|patch>`.

**Title (first line after the frontmatter)**

- Single line, sentence case, **no trailing period**, ≤ 100 characters.
- Consumer's perspective; describe _what_ changed, not the implementation.
- Backtick component / prop / API names.
- No `**BREAKING:**` prefix (the `major` bump already signals it) and no leading list marker.

**Body**

- Blank line after the title, then markdown.
- Headings **start at a single `#`** — they are re-leveled automatically by `.changeset/changelog.cjs`.
- Use ` ```diff ` blocks for before/after code.

**Audience — write for external users**

Changesets become the public `CHANGELOG.md`. Document only what a consumer of the package needs to know to understand or adopt the release.

- Focus on the observable, external-facing impact: new/changed/removed API, behavior changes, and migration steps.
- Omit internal changes that are transparent to users (refactors, internal type plumbing, private helper updates, test-only changes, build tweaks). Do **not** add an "Internal changes" section.
- If an internal change is only worth noting because it _might_ surface for users, describe the user-facing symptom, not the implementation detail.

**Per-bump body requirements**

- `major`: body **required** and must contain a `# Migration` section with concrete steps.
- `minor`: body **required** (what it does / how to use it).
- `patch`: title only is acceptable.

### 4. Validate

```bash
pnpm changeset:validate
```

Fix every reported issue before committing. Commit the `.changeset/*.md` file with your change.
