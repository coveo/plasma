---
name: BrowserPreview
description: Renders a simulated browser chrome frame around preview content.
---

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

[Full Plasma documentation](https://plasma.coveo.com)
