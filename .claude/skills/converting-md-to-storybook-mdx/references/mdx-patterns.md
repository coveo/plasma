# MDX Patterns and Troubleshooting

Reference for the `converting-md-to-storybook-mdx` skill.

## Contents
- [Required MDX structure](#required-mdx-structure)
- [JSX escaping rules](#jsx-escaping-rules)
- [Link rewriting](#link-rewriting)
- [GFM support](#gfm-support)
- [Storybook story globs](#storybook-story-globs)
- [Troubleshooting](#troubleshooting)

---

## Required MDX structure

Every docs-only MDX page needs exactly two things at the top:

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Section/Page Title" />
```

Everything after that is standard Markdown. No other imports, exports, or story definitions are needed for a docs-only page.

---

## JSX escaping rules

MDX is parsed as JSX, so some characters that are valid in Markdown will break the parser.

### Angle brackets in prose

| Context | Action |
|---------|--------|
| Inside a fenced code block (` ```...``` `) | Leave as-is — not parsed as JSX |
| Inside inline code (`` `...` ``) | Leave as-is |
| Bare `<tag>` or `</tag>` in prose | Escape to `&lt;tag&gt;` |
| Math comparison like `x > 0` or `a < b` | Usually safe; the script targets tag-like patterns only |

**Example — before (breaks MDX):**
```
Set the <collection> attribute to the name of your index.
```

**Example — after (valid MDX):**
```
Set the &lt;collection&gt; attribute to the name of your index.
```

### Curly braces in prose

Bare `{` and `}` in prose are treated as JSX expression delimiters. Escape them:

| Character | Escaped form |
|-----------|--------------|
| `{` | `&#123;` or `\{` |
| `}` | `&#125;` or `\}` |

The convert script does **not** auto-escape curly braces (too many false positives with code examples). Fix these manually if you see parse errors.

---

## Link rewriting

Jekyll uses several link patterns that don't work in MDX:

| Pattern | What to do |
|---------|-----------|
| `{% link path/to/page.md %}` | Replace with full `https://docs.coveo.com/en/slug/` URL |
| `/en/slug/` relative path | Prepend `https://docs.coveo.com` (script does this automatically, flags for verification) |
| `xref:` AsciiDoc cross-references | Remove or replace with full URL — not supported in MDX |

The convert script flags these with `⚠️` comments. Search the output for `⚠️` and resolve each one before committing.

---

## GFM support

`remarkGfm` is enabled in `main.ts`, so these GitHub-Flavored Markdown features work natively:

- Tables (`| col | col |`)
- Strikethrough (`~~text~~`)
- Task lists (`- [ ] item`)
- Autolinks

No extra setup is needed.

---

## Storybook story globs

From `packages/atomic/.storybook/main.ts`, the watched patterns are:

```
./Introduction.mdx                         (root intro only)
../src/**/*.mdx                            (component-level docs)
../storybook-pages/**/*.mdx               (standalone docs pages)
```

**Use `storybook-pages/<section>/`** for general documentation pages.
**Use `src/components/<section>/`** only for docs tightly coupled to a specific component.

If your file doesn't appear in the Storybook sidebar, confirm it's under one of the two watched globs above.

---

## Sidebar sort order

From `preview.ts`, the story sort order is:

```
Coveo Atomic Storybook (root)
Search       → Introduction, Example Pages, *
Commerce     → Introduction, Example Pages, *
Recommendations → Introduction, Example Pages, *
Insight      → Introduction, Example Pages, *
Common       → Introduction, Example Pages, *
*            (everything else, alphabetical)
```

To place a page at the top of its section, name it `Introduction` in the title:
`<Meta title="Search/Introduction" />`

---

## Troubleshooting

### Parse error: "Unexpected token"

**Cause**: Bare `<tag>` or `{expression}` in prose.

**Fix**: Search the output for `<` outside code blocks and escape to `&lt;`. Check for unescaped `{` too.

### Page doesn't appear in sidebar

**Cause**: File is not under a watched glob, or title is missing/malformed.

**Fix**:
1. Confirm file path is `src/**/*.mdx` or `storybook-pages/**/*.mdx`
2. Confirm `<Meta title="..." />` is present and the title uses `/` as section separator

### Page appears but content is blank

**Cause**: MDX compilation error that didn't surface as a terminal error.

**Fix**: Open browser DevTools console — MDX errors often appear there. Usually a JSX escaping issue.

### Jekyll frontmatter still visible in rendered page

**Cause**: The `---` block wasn't stripped (e.g., a second frontmatter block, or non-standard delimiters).

**Fix**: Manually delete everything between and including the opening and closing `---` lines at the top of the file.
