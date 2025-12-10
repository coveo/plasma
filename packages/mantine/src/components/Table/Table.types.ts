import {TablerIcon} from '@coveord/plasma-react-icons';
import {BoxProps, StylesApiProps} from '@mantine/core';
import {ColumnDef, CoreOptions, Row, TableOptions} from '@tanstack/table-core';
import {ReactElement, ReactNode} from 'react';

import {type PlasmaTableFactory} from './Table.js';
import {type TableColumnsSelectorColumnOptions} from './table-columns-selector/TableColumnsSelectorColumn.js';
import {TableStore} from './use-table.js';

export type TableLayoutProps<TData = unknown> = Pick<
    TableProps<TData>,
    'getRowExpandedContent' | 'getRowAttributes' | 'getRowActions' | 'loading'
> &
    TableProps<TData>['layoutProps'];

export interface TableLayout {
    (props: {children: ReactNode}): ReactElement;
    /**
     * Name of the layout.
     * Will be displayed in the layout control
     */
    displayName: string;
    /**
     * Icon illustrating the layout.
     * Will be displayed in the layout control
     */
    Icon?: TablerIcon;
    /**
     * Header portion of the table.
     * In the standard row layout that is where column headers would be displayed.
     */
    Header: <TData>(props: TableLayoutProps<TData>) => ReactElement;
    /**
     * Body portion of the table.
     * In the standard row layout that is where the rows would be displayed.
     */
    Body: <TData>(props: TableLayoutProps<TData>) => ReactElement;
}

export interface TableProps<TData> extends BoxProps, StylesApiProps<PlasmaTableFactory> {
    store: TableStore<TData>;
    /**
     * Data to display in the table. Use `null` when the table is initially loading.
     */
    data: TData[] | null;
    /**
     * Defines how each row is uniquely identified. It is highly recommended that you specify this prop to an ID that makes sense.
     */
    getRowId?: CoreOptions<TData>['getRowId'];
    /**
     * Allows to define html attributes that will be passed down to each row.
     */
    getRowAttributes?: (datum: TData, index: number, row: Row<TData>) => Record<string, unknown>;
    /**
     * Function that generates the expandable content of a row
     * Return null for rows that don't need to be expandable
     *
     * @param datum the row for which the children should be generated.
     */
    getRowExpandedContent?: (datum: TData, index: number, row: Row<TData>) => ReactNode;
    /**
     * Function that generates the actions for the selected rows
     * If the table doesn't support multi selection, access the data[0]
     * Return an empty array for rows that don't have actions
     *
     * @param datum the row for which the children should be generated.
     * @default []
     */
    getRowActions?: (data: TData[]) => TableAction[];
    /**
     * Columns to display in the table.
     *
     * @see https://tanstack.com/table/v8/docs/guide/column-defs
     */
    columns: Array<ColumnDef<TData>>;
    /**
     * Adds a column selector button in the table header row (rightmost column).
     * Set to `true` for default options, or provide custom options.
     * This is an alternative to using `Table.ColumnsSelector` in the header actions.
     *
     * @example
     * // With default options
     * <Table columnsSelectorColumn ... />
     *
     * // With custom options
     * <Table columnsSelectorColumn={{ label: 'Edit columns', maxSelectableColumns: 5 }} ... />
     */
    columnsSelectorColumn?: boolean | TableColumnsSelectorColumnOptions;
    /**
     * Available layouts
     *
     * @default [Table.Layouts.Rows]
     */
    layouts?: TableLayout[];
    /**
     * Props passed down to the active layout Header and Body components
     */
    layoutProps?: {
        /**
         * Called by the table layout when a row is double clicked.
         * @param selectedRow The data of the row that was double clicked
         * @param index The index of the row that was double clicked
         * @param row The row object that was double clicked
         * @returns
         */
        onRowDoubleClick?: (selectedRow: TData, index: number, row: Row<TData>) => void;
    } & Record<string, unknown>;
    /**
     * Whether the table is loading or not
     *
     * @default false
     */
    loading?: boolean;
    /**
     * Children to display in the table. They need to be wrap in either `Table.Header` or `Table.Footer`
     *
     * @example
     * <Table ...>
     *     <Table.Header>
     *         <div>Hello</div>
     *     </Table.Header>
     * </Table>
     */
    children?: ReactNode;
    /**
     * Nodes that are considered inside the table.
     *
     * Rows normally get unselected when clicking outside the table, but sometimes it has difficulties guessing what is inside or outside, for example when using modals.
     * You can use this prop to force the table to consider some nodes to be inside the table.
     *
     * @see https://mantine.dev/hooks/use-click-outside/#multiple-nodes
     */
    additionalRootNodes?: HTMLElement[];
    /**
     * Additional options that can be passed to the table
     */
    options?: Omit<
        Partial<TableOptions<TData>>,
        | 'initialState'
        | 'data'
        | 'columns'
        | 'manualPagination'
        | 'enableMultiRowSelection'
        | 'getRowId'
        | 'getRowCanExpand'
        | 'enableRowSelection'
        | 'onRowSelectionChange'
    >;
}

export interface TableAction {
    /**
     * Group to which the action belongs
     * $$primary is reserved for primary actions
     * $$confirmPrompt is reserved for InlineConfirm.Prompt, it will hide other actions when prompt is opened
     * other string will be considered secondary custom group
     */
    group: '$$primary' | '$$confirmPrompt' | (string & {});
    /**
     * Component to render, should be either `Table.PrimaryAction` or `Table.SecondaryAction`
     */
    component: ReactNode;
}
