---
name: BrowserPreview
description: Renders a simulated browser chrome frame around preview content.
---

# Usage guidance

## What problem does it solve?

The `BrowserPreview` frames content as a simulated browser view so users can evaluate how a rendered page, result, or experience will look in context.

## When to use it

Use `BrowserPreview` when:

- users need to preview content as it will appear in a browser-like surface
- the preview benefits from a title or header tooltip
- the content is separate from the configuration controls around it
- the interface needs to distinguish editable settings from preview output

## When not to use it

Do not use `BrowserPreview` when:

- the content is the actual page, not a preview
- the frame would add decoration without clarifying context
- users need to interact with a full application shell
- the preview content is too small or abstract to benefit from browser chrome

## Decision-making guidance

- Use `BrowserPreview` for preview surfaces inside configuration or authoring flows.
- Use `AppShell` for real application layout.
- Use `Card` or layout primitives for ordinary content grouping.

## Interaction notes

- Preview content MAY be interactive when that helps users validate behavior.
- Header tooltips SHOULD clarify what is being previewed, not explain the whole feature.
- Keep controls that modify the preview outside the preview frame when possible.

## Common anti-patterns

- Using browser chrome as decoration around normal content.
- Putting unrelated controls inside the preview surface.
- Treating a preview frame as the real navigational shell.

## What an AI agent should understand

- `BrowserPreview` is for simulated browser previews, not application layout.
- Use it when users need to inspect rendered output in context.
- Keep configuration controls separate from preview content.

# API reference

## Props

> Extends: `StackProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`headerTooltip`** `string` · optional · default: `undefined` — Text displayed in a tooltip in the header.
**`title`** `string` · optional · default: `undefined` — Custom title displayed at the center of the header.

## Usage

```tsx
import {useState} from 'react';
import {BrowserPreview, Flex, Pagination, Stack, Text} from '@coveord/plasma-mantine';

const products = [
    {name: 'Wireless Mouse', department: 'Accessories', price: '$29'},
    {name: 'Mechanical Keyboard', department: 'Accessories', price: '$99'},
    {name: 'USB-C Dock', department: 'Peripherals', price: '$149'},
    {name: 'Noise-Cancelling Headphones', department: 'Audio', price: '$199'},
    {name: '4K Monitor', department: 'Displays', price: '$399'},
    {name: 'Laptop Stand', department: 'Workspace', price: '$59'},
];

const pageSize = 3;

export function Example() {
    const [page, setPage] = useState(1);
    const total = Math.ceil(products.length / pageSize);
    const currentPageProducts = products.slice((page - 1) * pageSize, page * pageSize);

    return (
        <BrowserPreview title="Product catalog" headerTooltip="Preview the content exactly as users will see it.">
            <Stack flex={1}>
                <Stack gap="xl" pb="sm">
                    {currentPageProducts.map((product) => (
                        <Stack key={product.name} gap={0}>
                            <Text>{product.name}</Text>
                            <Text size="xs" c="dimmed">
                                {product.department} • {product.price}
                            </Text>
                        </Stack>
                    ))}
                </Stack>

                <Flex justify="center" mt="auto">
                    <Pagination value={page} total={total} onChange={setPage} />
                </Flex>
            </Stack>
        </BrowserPreview>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
