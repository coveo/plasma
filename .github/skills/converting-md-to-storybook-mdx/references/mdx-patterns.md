# MDX Patterns and Troubleshooting

Reference for the `converting-md-to-storybook-mdx` skill.

## Required MDX structure

Every docs-only MDX page tied to a component story needs three things at the top:

```mdx
import {Meta} from '@storybook/addon-docs/blocks';
import * as stories from './ComponentName.stories';

<Meta of={stories} title="@components/section/ComponentName" />
```

If no stories file exists and the component uses an approved fallback path, omit `stories` and `of`:

```mdx
import {Meta} from '@storybook/addon-docs/blocks';

<Meta title="@components/section/ComponentName" />
```

Everything after that is standard Markdown. No other imports, exports, or story definitions are needed.

---

## JSX escaping rules

MDX is parsed as JSX, so some characters valid in Markdown will break the parser.

### Angle brackets in prose

| Context                           | Action                          |
| --------------------------------- | ------------------------------- |
| Inside a fenced code block        | Leave as-is (not parsed as JSX) |
| Inside inline code                | Leave as-is                     |
| Bare `<tag>` or `</tag>` in prose | Escape to `&lt;tag&gt;`         |

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
| --------- | ------------ |
| `{`       | `&#123;`     |
| `}`       | `&#125;`     |

---

## The `{{BASE_URL}}` link

Source files in `packages/llms/src/components/` end with:

```
[Full Plasma documentation]({{BASE_URL}})
```

`{{BASE_URL}}` is a template placeholder with no value in this repo. Remove this link entirely so it does not render as a broken or placeholder link.

---

## Prose line formatting

In MDX, two sentences on adjacent lines without a blank line between them render as a single paragraph.
Each sentence that should appear as its own paragraph must be separated from the next by a blank line.

**Correct:**

```mdx
Use an Accordion to organize related content into collapsible sections.

It works well when vertical space is limited.
```

**Incorrect (renders as one paragraph):**

```mdx
Use an Accordion to organize related content into collapsible sections.
It works well when vertical space is limited.
```

This rule applies to all prose sections. It does not apply inside fenced code blocks, table cells, bullet list items, or numbered list items.

---

## GFM support

`remarkGfm` is enabled in `packages/storybook/.storybook/main.ts`, but **do not use markdown pipe tables** in MDX files. Pipe tables are not rendered correctly at runtime in this Storybook setup.

Use the Mantine `<Table>` JSX component instead. See the Tables section below.

---

## Tables

Never use markdown pipe table syntax (`| col | col |`) in MDX files. Always use the Mantine `<Table>` component.

Add the import at the top of the file alongside the `Meta` import:

```mdx
import {Meta} from '@storybook/addon-docs/blocks';
import {Table} from '@mantine/core';
```

Use `withTableBorder` and `withColumnBorders` on every table:

```mdx
<Table withTableBorder withColumnBorders>
    <Table.Thead>
        <Table.Tr>
            <Table.Th>Column A</Table.Th>
            <Table.Th>Column B</Table.Th>
        </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
        <Table.Tr>
            <Table.Td>Value</Table.Td>
            <Table.Td>Value</Table.Td>
        </Table.Tr>
    </Table.Tbody>
</Table>
```

Always leave a blank line between the closing `</Table>` tag and the next prose sentence.

---

## Import formatting (`oxfmt`)

The CI runs `oxfmt` to check formatting. Write all imports with **single quotes and no spaces inside braces**:

```mdx
import {Meta} from '@storybook/addon-docs/blocks';
import {Table} from '@mantine/core';
```

Not:

```mdx
import {Meta} from '@storybook/addon-docs/blocks';
import {Table} from '@mantine/core';
```

`oxfmt` will reformat double-quoted, space-padded imports and fail the check if they are committed that way.

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

**Cause:** File is not under `packages/storybook/src/`, or `<Meta ... />` is missing or malformed.

**Fix:** Confirm the file path and that the title matches the exact string from the component's `.stories.tsx` file.

### Page appears but content is blank

**Cause:** MDX compilation error that didn't surface as a terminal error.

**Fix:** Open browser DevTools console. MDX errors often appear there. Usually a JSX escaping issue.

### Frontmatter still visible in rendered page

**Cause:** The `---` block wasn't fully removed.

**Fix:** Delete everything between and including the opening and closing `---` lines at the top of the file.
