---
name: Table
description: Table for displaying tabular data with optional filtering, pagination, row actions, and layout switching.
---

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
**`children`** `ReactNode` · optional · default: `undefined` — Children can include sub-components like `Table.Toolbar`, `Table.Header`, `Table.Footer`, `Table.NoData`, and `Table.LastUpdated`. Filter controls (`Table.Filter`, `Table.Predicate`, `Table.DateRangePicker`) MUST be placed inside `Table.Header` or `Table.Toolbar`.
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
- `Table.Toolbar`

### Table.Toolbar

Use `Table.Toolbar` to render `Table.Filter`, `Table.Predicate`, and `Table.DateRangePicker` outside of the `Table.Header` grid layout. The toolbar renders above the table layout. Components inside `Table.Toolbar` are not wrapped in `Grid.Col` (unlike when placed in `Table.Header`). You MAY use `renderRoot` to provide a flex container (e.g., `renderRoot={(props) => <Group {...props} />}`) and/or customize styles via standard Box props.

```tsx
<Table store={store} columns={columns} data={data}>
    <Table.Toolbar>
        <Table.Filter />
        <Table.Predicate id="status" data={[...]} label="Status" />
        <Table.DateRangePicker />
    </Table.Toolbar>
    {/* Table.Header can still be used for layout controls and row selection actions */}
</Table>
```

You SHOULD use `Table.Toolbar` when filter components need to be rendered outside the table header grid (e.g., in a custom layout above the table). You MUST still render `Table.Toolbar` inside the `<Table>` component because it requires `useTableContext`.

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
            pagination: {pageIndex: 0, pageSize: 10},
        },
    });

    return <Table<TData> store={store} columns={columns} data={data} getRowId={({id}) => id} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
