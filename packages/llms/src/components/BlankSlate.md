---
name: BlankSlate
description: Empty state container that SHOULD be used when a view has no content to display.
---

## Props

| Prop         | Type      | Required | Default | Description                                                                       |
| ------------ | --------- | :------: | ------- | --------------------------------------------------------------------------------- |
| `withBorder` | `boolean` |          | `true`  | Renders a border when this prop is `true` and omits it when this prop is `false`. |

## Usage

The most common use case is rendering a table empty state, often with an action to clear filters.

```tsx
import {BlankSlate, Button, Table, Title} from '@coveord/plasma-mantine';

const NoData = ({clearFilters}: {clearFilters: () => void}) => (
    <BlankSlate>
        <Title order={4}>No data found for those filters</Title>
        <Button.Tertiary onClick={clearFilters}>Clear filters</Button.Tertiary>
    </BlankSlate>
);

const Example = () => (
    <Table.NoData>
        <NoData clearFilters={() => {}} />
    </Table.NoData>
);
```

You can also use `BlankSlate` for simpler empty states.

```tsx
import {BlankSlate, Title} from '@coveord/plasma-mantine';

const EmptyState = () => (
    <BlankSlate>
        <Title order={4}>No data</Title>
    </BlankSlate>
);
```

If the surrounding layout already has its own border, disable the `BlankSlate` border.

```tsx
import {BlankSlate, Title} from '@coveord/plasma-mantine';

const EmptyState = () => (
    <BlankSlate withBorder={false}>
        <Title order={4}>Empty state</Title>
        This view has no content yet.
    </BlankSlate>
);
```

---

[Full Plasma documentation](https://plasma.coveo.com)
