# MDX Patterns and Troubleshooting

Reference for the `converting-md-to-storybook-mdx` skill.

## Required MDX structure

Every docs-only MDX page needs exactly two things at the top:

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="@components/section/ComponentName" />
```

Everything after that is standard Markdown. No other imports, exports, or story definitions are needed.

---

## JSX escaping rules

MDX is parsed as JSX, so some characters valid in Markdown will break the parser.

### Angle brackets in prose

| Context | Action |
| --- | --- |
| Inside a fenced code block | Leave as-is — not parsed as JSX |
| Inside inline code | Leave as-is |
| Bare `<tag>` or `</tag>` in prose | Escape to `&lt;tag&gt;` |

**Before (breaks MDX):**

```
Set the <collection> attribute to the name of your index.
```

**After (valid MDX):**

```
Set the &lt;collection&gt; attribute to the name of your index.
```

### Curly braces in prose

Bare `{` and `}` in prose are treated as JSX expression delimiters. Escape them if they appear outside code blocks:

| Character | Escaped form |
| --- | --- |
| `{` | `&#123;` |
| `}` | `&#125;` |

---

## The `{{BASE_URL}}` link

Source files in `packages/llms/src/components/` end with:

```
[Full Plasma documentation]({{BASE_URL}})
```

`{{BASE_URL}}` is a template placeholder with no value in this repo. Replace it with a TODO comment so it doesn't render as a broken link:

```mdx
{/* TODO: Replace with full Plasma docs URL */}
```

---

## GFM support

`remarkGfm` is enabled in `packages/storybook/.storybook/main.ts`, so these GitHub-Flavored Markdown features work natively:

- Tables (`| col | col |`)
- Strikethrough (`~~text~~`)
- Task lists (`- [ ] item`)

---

## Storybook story glob

From `packages/storybook/.storybook/main.ts`, the watched pattern is:

```
../src/**/*.mdx
```

All MDX files must be placed under `packages/storybook/src/` to be picked up automatically.

---

## Troubleshooting

### Parse error: "Unexpected token"

**Cause:** Bare `<tag>` or `{expression}` in prose.

**Fix:** Find `<` outside code blocks and escape to `&lt;`. Check for unescaped `{` too.

### Page doesn't appear in sidebar

**Cause:** File is not under `packages/storybook/src/`, or `<Meta title="..." />` is missing or malformed.

**Fix:** Confirm the file path and that the title matches the exact string from the component's `.stories.tsx` file.

### Page appears but content is blank

**Cause:** MDX compilation error that didn't surface as a terminal error.

**Fix:** Open browser DevTools console — MDX errors often appear there. Usually a JSX escaping issue.

### Frontmatter still visible in rendered page

**Cause:** The `---` block wasn't fully removed.

**Fix:** Delete everything between and including the opening and closing `---` lines at the top of the file.
