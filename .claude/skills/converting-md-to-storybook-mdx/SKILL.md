---
name: converting-md-to-storybook-mdx
description: Converts formatted Markdown (.md) files into MDX docs-only pages for the Coveo Atomic Storybook (packages/atomic in ui-kit-main). Strips Jekyll frontmatter, adds the required Meta import and title block, escapes JSX-breaking characters, and places the output where Storybook's story globs will pick it up. Use when converting docs, guides, or reference pages from the Jekyll doc site into Storybook, or when a user says "add this to Storybook", "convert to MDX", or "render in Storybook".
license: Apache-2.0
metadata:
  author: coveo
  version: "1.0"
---

# Converting Markdown Files to Atomic Storybook MDX

Converts `.md` documentation files into `.mdx` docs-only pages for `packages/atomic` in the `ui-kit-main` repo.

## Background

The Atomic Storybook uses MDX for documentation pages. MDX files placed under either of these paths are auto-discovered:

- `packages/atomic/src/**/*.mdx`
- `packages/atomic/storybook-pages/**/*.mdx`

No story registration is needed. A docs-only page requires only a `<Meta>` block at the top.

The sidebar location is controlled by the `title` in `<Meta>`. The sort order in `preview.ts` prioritises:
`Search > Commerce > Recommendations > Insight > Common`

## Process

### Step 1: Identify the source file and target location

Ask (or infer from context):

1. **Source file path** — the `.md` file to convert
2. **Storybook section** — which sidebar group it belongs to: `Search`, `Commerce`, `Recommendations`, `Insight`, or `Common`
3. **Page title** — the human-readable name that appears in the sidebar (e.g., `"Search/Getting Started"`)
4. **Output directory** — use `storybook-pages/<section>/` for standalone docs pages; use `src/components/<section>/` only if the content is tightly coupled to a component

When in doubt, prefer `storybook-pages/`.

### Step 2: Run the conversion script

```bash
node .claude/skills/converting-md-to-storybook-mdx/scripts/convert.mjs \
  --input <path/to/source.md> \
  --output <path/to/output.mdx> \
  --title "Section/Page Title"
```

The script:
- Strips Jekyll YAML frontmatter (`---` blocks at the top)
- Injects the MDX `Meta` import and `<Meta title="..." />` block
- Escapes bare `<` and `>` in prose text (outside code blocks) that would break JSX parsing
- Rewrites any Jekyll-style links (`[text]({% link ... %})` or `[text](/en/slug/)`) with a warning comment so they can be reviewed
- Preserves all fenced code blocks, GFM tables, and inline code untouched

### Step 3: Review the output

Open the generated `.mdx` file and check:

1. **Frontmatter is gone** — no `---` block at the top (only the MDX `import` line)
2. **Meta title is correct** — matches the intended sidebar path
3. **No bare JSX-breaking syntax** — angle brackets in prose are escaped (e.g., `&lt;value&gt;`)
4. **Links are valid** — Jekyll-relative links (`/en/slug/`) won't resolve in Storybook; replace with full `https://docs.coveo.com/en/slug/` URLs or remove them
5. **Code blocks render** — GFM fenced blocks with language tags (`\`\`\`html`, `\`\`\`javascript`) are supported natively

### Step 4: Verify placement

Confirm the output file is under one of the watched globs:

```
packages/atomic/src/**/*.mdx          ✓
packages/atomic/storybook-pages/**/*.mdx  ✓
```

If you placed it elsewhere, Storybook won't pick it up.

### Step 5: Spot-check in Storybook (optional but recommended)

```bash
# From packages/atomic
pnpm storybook
```

Navigate to the expected sidebar location and confirm the page renders correctly.

## Sidebar Title Conventions

| Content topic        | `<Meta title="...">` prefix  |
|----------------------|------------------------------|
| Search               | `Search/`                    |
| Commerce             | `Commerce/`                  |
| Recommendations      | `Recommendations/`           |
| Insight              | `Insight/`                   |
| Shared/cross-cutting | `Common/`                    |

Example: `<Meta title="Search/Rate Limiting Guide" />`

## What the Output Looks Like

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Search/My Guide" />

# My Guide

Your existing markdown content here — headings, lists, code blocks, tables all work as-is.
```

That's the entire required structure. Nothing else is needed for a docs-only page.

## Reference Files

- [MDX patterns and troubleshooting](references/mdx-patterns.md) — JSX escaping rules, link rewriting, GFM support details

## Validation Checklist

Before considering a conversion complete:

- [ ] No YAML frontmatter remains in the output file
- [ ] `import { Meta }` line is the first line
- [ ] `<Meta title="Section/Title" />` is present and the title matches the intended sidebar location
- [ ] No unescaped bare `<tag>` syntax in prose (only inside fenced code blocks)
- [ ] All Jekyll-style links have been replaced or flagged
- [ ] Output file is under `src/**/*.mdx` or `storybook-pages/**/*.mdx`
- [ ] File renders without parse errors in Storybook
