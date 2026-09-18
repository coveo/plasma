# MDX patterns and troubleshooting

## Story-bound header

Bind the page to its co-located CSF story metadata:

```mdx
import {Canvas, Controls, Meta} from '@storybook/addon-docs/blocks';
import * as ComponentStories from './ComponentName.stories';

<Meta of={ComponentStories} />
```

Do not duplicate the story title on `Meta`.
The `of` binding supplies the title and ID from the story metadata.

Use a descriptive namespace such as `ButtonStories` or `AccordionStories` in a real page.
Let oxfmt determine final import formatting.

## Canvas and Controls

Reference an exported story:

```mdx
<Canvas of={ComponentStories.Demo} />
<Controls of={ComponentStories.Demo} />
```

Prefer a representative `Demo` story when one exists.
Use another export when it represents normal usage better.
Omit Controls when the selected story does not expose useful arguments.

## JSX-sensitive prose

MDX treats angle brackets and curly braces as JSX syntax.

| Context                | Action               |
| ---------------------- | -------------------- |
| Fenced code block      | Leave unchanged      |
| Inline code            | Leave unchanged      |
| Bare `<tag>` in prose  | Write `&lt;tag&gt;`  |
| Bare `</tag>` in prose | Write `&lt;/tag&gt;` |
| Bare `{` in prose      | Write `&#123;`       |
| Bare `}` in prose      | Write `&#125;`       |

Do not escape valid JSX elements used by the page.

## Source-only syntax

Component specifications contain YAML frontmatter and this generated-site footer:

```md
[Full Plasma documentation]({{BASE_URL}})
```

Do not copy either into Storybook MDX.
The specification remains unchanged.

## Tables

This Storybook does not configure `remark-gfm`, so Markdown pipe tables render incorrectly.
Use a Plasma table component instead:

```mdx
import {MantineTable as Table} from '@coveord/plasma-mantine';

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

Always import UI components from `@coveord/plasma-mantine`.

## Storybook discovery

Storybook discovers MDX under `packages/storybook/src/` through the `../src/**/*.mdx` glob.
Component pages belong under `packages/storybook/src/components/` beside their stories.

## Troubleshooting

### Unexpected token

Check for bare angle brackets or curly braces in prose.
Escape prose characters without changing inline code, fenced code blocks, or valid JSX.

### Page missing from the sidebar

Confirm that:

- The file is under `packages/storybook/src/`.
- The page contains `<Meta of={ComponentStories} />`.
- The namespace import points to the co-located story.
- The story has valid `title` and `id` metadata when required by local patterns.

### Canvas or Controls fails to render

Confirm that the referenced story export exists.
Read story decorators and parameters for providers or layout requirements.
Build Storybook to surface MDX and CSF errors.

### Content appears as raw Markdown

Replace Markdown pipe tables with JSX tables.
Check for unsupported Markdown extensions before adding new dependencies.
