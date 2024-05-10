import {Icon} from '@coveord/plasma-react-icons';
import {BoxProps, StylesApiProps} from '@mantine/core';
import {ColumnDef, CoreOptions, TableOptions} from '@tanstack/table-core';
import {ReactElement, ReactNode} from 'react';

import {type PlasmaTableFactory} from './Table';
import {TableStore} from './use-table';

export interface TableLayoutProps<TData = unknown> {
    loading?: boolean;
    /**
     * Action passed when user double-clicks on a row
     */
    doubleClickAction?: (datum: TData) => void;
    /**
     * Function that generates the expandable content of a row
     * Return null for rows that don't need to be expandable
     *
     * @param datum the row for which the children should be generated.
     */
    getExpandChildren?: (datum: TData) => ReactNode;
    /**
     * Function that can be used to add additional attributes on rows
     */
    getRowAttributes?: (datum: TData) => Record<string, unknown>;
}

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
    Icon?: Icon;
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
    getRowAttributes?: (row: TData) => Record<string, unknown>;
    /**
     * Columns to display in the table.
     *
     * @see https://tanstack.com/table/v8/docs/guide/column-defs
     */
    columns: Array<ColumnDef<TData>>;
    /**
     * Available layouts
     *
     * @default [Table.Layouts.Rows]
     */
    layouts?: TableLayout[];
    /**
     * Props passed down to the active layout Header and Body components
     */
    layoutProps?: Record<string, any>;
    /**
     * Function that generates the expandable content of a row
     * Return null for rows that don't need to be expandable
     *
     * @param datum the row for which the children should be generated.
     */
    getExpandChildren?: (datum: TData) => ReactNode;
    /**
     * Whether the table is loading or not
     *
     * @default false
     */
    loading?: boolean;
    /**
     * Childrens to display in the table. They need to be wrap in either `Table.Header` or `Table.Footer`
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
     * Action passed when user double clicks on a row
     */
    doubleClickAction?: (datum: TData) => void;
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
