# Changeset templates (annotated)

Annotated examples for each bump type. Rules enforced by `scripts/validateChangesets.js`.

## Table of contents

- [major](#major)
- [minor](#minor)
- [patch](#patch)
- [Multiple packages](#multiple-packages)

## major

Breaking change — body required, must include a `# Migration` section.

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

Notes:

- No `**BREAKING:**` prefix — the `major` bump already groups this under "Major Changes".
- `# Migration` uses a single `#`; it renders as `##### Migration` under the entry title.

## minor

New capability — body required.

```markdown
---
'@coveord/plasma-mantine': minor
---

Add `Table.Cell` for controlling text overflow in table cells

Supports single-line ellipsis (default), multi-line clamping with `lineClamp`, word wrapping with
`wrap`, and an expandable "Show more" toggle with `expandable`.
```

## patch

Bug fix — title only is acceptable.

```markdown
---
'@coveord/plasma-mantine': patch
---

Fix table header inner grid min height
```

## Multiple packages

One line per package in the frontmatter; the strongest bump determines the body requirement. Write the body as prose, not a list.

```markdown
---
'@coveord/plasma-llms': minor
'@coveord/plasma-mcp-server': minor
---

Add content guidelines to LLM documentation outputs and MCP server

Content guideline files are now included in `llms.txt` and `llms-full.txt`, and the MCP server exposes new `list_content_guidelines` and `get_content_guideline` tools.
```
