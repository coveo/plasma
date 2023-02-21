import {DateRangePickerValue} from '@mantine/dates';
import {UseFormReturnType} from '@mantine/form';
import {
    ColumnDef,
    CoreOptions,
    InitialTableState as TanstackInitialTableState,
    TableOptions,
    TableState as TanstackTableState,
} from '@tanstack/table-core';
import {Dispatch, ReactElement, ReactNode, RefObject} from 'react';

import {TableActions} from './TableActions';
import {TableAccordionColumn, TableCollapsibleColumn} from './TableCollapsibleColumn';
import {TableDateRangePicker} from './TableDateRangePicker';
import {TableFilter} from './TableFilter';
import {TableFooter} from './TableFooter';
import {TableHeader} from './TableHeader';
import {TablePagination} from './TablePagination';
import {TablePerPage} from './TablePerPage';
import {TablePredicate} from './TablePredicate';

export type RowSelectionWithData<TData> = Record<string, TData>;
export interface RowSelectionState<TData> {
    rowSelection: RowSelectionWithData<TData>;
}

export interface TableState<TData> extends Omit<TanstackTableState, 'rowSelection'>, RowSelectionState<TData> {}

export interface InitialTableState<TData>
    extends Omit<TanstackInitialTableState, 'rowSelection'>,
        Partial<RowSelectionState<TData>>,
        Partial<TableFormType> {}

export type onTableChangeEvent<TData> = (params: TableState<TData> & TableFormType) => void;

export type TableFormType = {
    /**
     * Object containing the table predicates and their selected values
     *
     * @example {type: "LONG", origin: "system"}
     */
    predicates: Record<string, string>;
    /**
     * Selected date range in the table
     *
     * @example [new Date(2022, 0, 1), new Date(2022, 0, 31)]
     */
    dateRange: DateRangePickerValue;
};

export type TableContextType<TData> = {
    /**
     * Function to call when the table needs an update
     */
    onChange: () => void;
    /**
     * Internal state of the table
     *
     * @see https://tanstack.com/table/v8/docs/api/core/table#state
     */
    state: TableState<TData>;
    /**
     * Function to update the table state
     */
    setState: Dispatch<(prevState: TableState<TData>) => TableState<TData>>;
    /**
     * Whether the table currently as any kind of filter applied.
     * Useful to determine if the noDataChildren is an empty state or just the result of a filter
     */
    isFiltered: boolean;
    /**
     * Function that clears the filter and predicates
     */
    clearFilters: () => void;
    /**
     * Function that returns the selected row if any.
     */
    getSelectedRow: () => TData | null;
    /**
     * Function that returns an array of the selected rows. Most useful when multi row selection is enabled.
     */
    getSelectedRows: () => TData[];
    /**
     * Function that clear the selected row
     */
    clearSelection: () => void;
    /**
     * Form used to handle predicates and dateRange
     */
    form: UseFormReturnType<TableFormType>;
    /**
     * Table container ref
     */
    containerRef: RefObject<HTMLDivElement>;
    /**
     * Whether multi row selection is activated
     */
    multiRowSelectionEnabled: boolean;
    /**
     * Function that returns the number of pages
     */
    getPageCount: () => number;
};

export interface TableProps<T> {
    /**
     * Data to display in the table
     */
    data: T[];
    /**
     * Defines how each row is uniquely identified. It is highly recommended that you specify this prop to an ID that makes sense.
     */
    getRowId?: CoreOptions<T>['getRowId'];
    /**
     * Columns to display in the table.
     *
     * @see https://tanstack.com/table/v8/docs/guide/column-defs
     */
    columns: Array<ColumnDef<T>>;
    /**
     * Function called when the table mounts
     *
     * @param state the state of the table
     */
    onMount?: onTableChangeEvent<T>;
    /**
     * Function called when the table should update
     *
     * @param state the state of the table
     */
    onChange?: onTableChangeEvent<T>;
    /**
     * Function that generates the expandable content of a row
     * Return null for rows that don't need to be expandable
     *
     * @param datum the row for which the children should be generated.
     */
    getExpandChildren?: (datum: T) => ReactNode;
    /**
     * React children to show when the table has no rows to show. You can leverage useTable to get the state of the table
     */
    noDataChildren?: ReactNode;
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
     * Initial state of the table
     */
    initialState?: InitialTableState<T>;
    /**
     * Action passed when user double clicks on a row
     */
    doubleClickAction?: (datum: T) => void;
    /**
     * Function called whenever the row selection changes
     *
     * @param selectedRows The selected rows
     */
    onRowSelectionChange?: (selectedRows: T[]) => void;
    /**
     * Whether the user can select multiple rows in order to perform actions in bulk
     *
     * @default false
     */
    multiRowSelectionEnabled?: boolean;
    /**
     * Additional options that can be passed to the table
     */
    options?: Omit<
        Partial<TableOptions<T>>,
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

export interface TableType {
    <T>(props: TableProps<T>): ReactElement;
    Actions: typeof TableActions;
    Filter: typeof TableFilter;
    Footer: typeof TableFooter;
    Header: typeof TableHeader;
    Pagination: typeof TablePagination;
    PerPage: typeof TablePerPage;
    Predicate: typeof TablePredicate;
    DateRangePicker: typeof TableDateRangePicker;
    CollapsibleColumn: typeof TableCollapsibleColumn;
    AccordionColumn: typeof TableAccordionColumn;
}
