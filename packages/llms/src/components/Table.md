---
name: Table
description: Table for displaying tabular data with optional filtering, pagination, row actions, and layout switching.
---

> **Note:** This component is currently under active redesign. Usage guidance will be updated once the initiative concludes. In the meantime, use this as a general reference only.

# Usage guidance

## What problem does it solve?

The `Table` lets users scan, compare, filter, paginate, select, and act on structured data in rows and columns.

It is useful for operational views where users need to inspect many records and perform actions on one or more of them.

## When to use it

Use `Table` when:

- data is naturally structured as rows and columns
- users need to compare values across records
- filtering, pagination, row actions, selection, or expandable row content are needed
- the view needs table-specific empty, loading, footer, or pagination patterns

## When not to use it

Do not use `Table` when:

- the content is primarily visual or card-like
- users are editing a repeatable form list; use `Collection`
- there are only a few simple values that can be shown as text or cards
- the layout would require hiding the most important information in many columns

## Decision-making guidance

- Use `Table` for data display and operational record management.
- Use `Collection` for editable repeated form items.
- Use `Facet` or table filter sub-components when users need to narrow data.
- Use row actions for item-specific commands and header/footer actions for table-level commands.

## States

Important states include:

- initially loading with `data={null}`
- loaded with rows
- empty or no matching data
- selected rows
- expanded rows
- paginated data
- filtered data

## Interaction notes

- `store` MUST come from `useTable`.
- `getRowId` SHOULD be provided when records have stable identifiers.
- `getRowActions` SHOULD return only actions relevant to the selected row or rows.
- Expandable row content SHOULD add detail without replacing the row's core scannable information.
- Additional root nodes MAY be provided when related overlays should not clear row selection.

## Content guidance

- Column headers SHOULD be short and describe the data clearly.
- Empty states SHOULD explain whether there is no data or no matching data.
- Row actions SHOULD use clear verbs and destructive labels when appropriate.
- Filter labels SHOULD match the terms users use to understand the data.

## Common anti-patterns

- Using a table for layout instead of data.
- Putting editable repeated form fields in a table when `Collection` is the intended pattern.
- Omitting stable row IDs for selectable or reorderable data.
- Hiding key record identity in expandable content instead of visible columns.

## What an AI agent should understand

- `Table` is for structured data display and operational record actions.
- Use it with `useTable`, stable columns, and row IDs when available.
- Use `Collection` for editable repeated form inputs and simpler layouts for non-tabular content.

# API reference

## Props

> Extends: `BoxProps & StylesApiProps<PlasmaTableFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`store`** `TableStore<TData>` · required · default: `undefined` — You MUST pass the table store returned by `useTable`.
**`data`** `TData[] | null` · required · default: `undefined` — Data to display in the table. You MUST use `null` when the table is initially loading.
**`getRowId`** `CoreOptions<TData>['getRowId']` · optional · default: `undefined` — Defines how each row is uniquely identified. You SHOULD specify this prop with an ID that makes sense.
**`getRowAttributes`** `(datum: TData, index: number, row: Row<TData>) => Record<string, unknown>` · optional · default: `undefined` — HTML attributes MAY be defined for each row with this prop.
**`getRowExpandedContent`** `(datum: TData, index: number, row: Row<TData>) => ReactNode` · optional · default: `undefined` — Function that generates the expandable content of a row. You MUST return `null` for rows that do not need to be expandable.
**`getRowActions`** `(data: TData[]) => TableAction[]` · optional · default: `() => []` — Function that generates the actions for the selected rows. If the table does not support multi selection, you MUST access `data[0]`. You MUST return an empty array for rows that do not have actions.
**`columns`** `Array<ColumnDef<TData>>` · required · default: `undefined` — Columns to display in the table. This prop MUST define the rendered columns.
**`layouts`** `TableLayout[]` · optional · default: `[Table.Layouts.Rows]` — Available layouts. This prop MAY be used to expose layout switching.
**`layoutProps`** `{onRowDoubleClick?: (selectedRow: TData, index: number, row: Row<TData>) => void} & Record<string, unknown>` · optional · default: `{}` — Props passed down to the active layout Header and Body components.
**`loading`** `boolean` · optional · default: `false` — Whether the table is loading or not. This prop MAY be used to show loading states.
**`children`** `ReactNode` · optional · default: `undefined` — Children to display in the table. They MUST be wrapped in either `Table.Header` or `Table.Footer`.
**`additionalRootNodes`** `HTMLElement[]` · optional · default: `[]` — Nodes that are considered inside the table. Rows normally get unselected when clicking outside the table, but the component can have difficulty guessing what is inside or outside, for example when using modals. You MAY use this prop to force the table to consider some nodes to be inside the table.
**`options`** `Omit<Partial<TableOptions<TData>>, 'initialState' | 'data' | 'columns' | 'manualPagination' | 'enableMultiRowSelection' | 'getRowId' | 'getRowCanExpand' | 'enableRowSelection' | 'onRowSelectionChange'>` · optional · default: `{}` — Additional options MAY be passed to the table with this prop.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Table.AccordionColumn`
- `Table.ActionsColumn`
- `Table.ActionItem`
- `Table.CollapsibleColumn`
- `Table.DateRangePicker`
- `Table.Filter`
- `Table.Footer`
- `Table.Header`
- `Table.LastUpdated`
- `Table.Layouts`
- `Table.Loading`
- `Table.NoData`
- `Table.Pagination`
- `Table.PerPage`
- `Table.Predicate`

## Usage

```tsx
import {createColumnHelper, Table, useTable} from '@coveord/plasma-mantine';
import {useMemo} from 'react';

type TData = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
};

const columnHelper = createColumnHelper<TData>();

const columns = [
    columnHelper.accessor('firstName', {header: 'First name'}),
    columnHelper.accessor('lastName', {header: 'Last name'}),
    columnHelper.accessor('age', {header: 'Age'}),
];

export function Example() {
    const data = useMemo<TData[]>(
        () => [
            {id: '1', firstName: 'Ada', lastName: 'Lovelace', age: 36},
            {id: '2', firstName: 'Grace', lastName: 'Hopper', age: 85},
        ],
        [],
    );

    const store = useTable<TData>({
        initialState: {
            totalEntries: data.length,
            pagination: {page: 0, perPage: 10},
        },
    });

    return <Table<TData> store={store} columns={columns} data={data} getRowId={({id}) => id} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
