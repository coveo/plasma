import {Box, Center, Collapse, createStyles, Loader, Skeleton, Table as MantineTable} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useClickOutside, useDidUpdate} from '@mantine/hooks';
import {
    ColumnDef,
    defaultColumnSizing,
    flexRender,
    getCoreRowModel,
    Row,
    TableState,
    useReactTable,
} from '@tanstack/react-table';
import {CoreOptions, InitialTableState, TableOptions} from '@tanstack/table-core';
import defaultsDeep from 'lodash.defaultsdeep';
import {Children, Fragment, ReactElement, ReactNode, useCallback, useEffect, useState} from 'react';

import {TableActions} from './TableActions';
import {TableAccordionColumn, TableCollapsibleColumn} from './TableCollapsibleColumn';
import {onTableChangeEvent, TableContext, TableFormType} from './TableContext';
import {TableDateRangePicker} from './TableDateRangePicker';
import {TableFilter} from './TableFilter';
import {TableFooter} from './TableFooter';
import {TableHeader} from './TableHeader';
import {TablePagination} from './TablePagination';
import {TablePerPage} from './TablePerPage';
import {TablePredicate} from './TablePredicate';
import {TableSelectableColumn} from './TableSelectableColumn';
import {Th} from './Th';
import {useRowSelection} from './useRowSelection';

interface TableStylesParams {
    hasHeader: boolean;
    multiRowSelectionEnabled: boolean;
}

const useStyles = createStyles<string, TableStylesParams>((theme, {hasHeader, multiRowSelectionEnabled}) => {
    const rowBackgroundColor =
        theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
            : theme.colors[theme.primaryColor][0];
    return {
        table: {
            width: '100%',
            '& td:first-of-type, th:first-of-type > *': {
                paddingLeft: theme.spacing.xl,
            },
            '& tbody td': {
                verticalAlign: 'top',
            },
        },

        header: {
            position: 'sticky',
            top: hasHeader ? 69 : 0,
            backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
            transition: 'box-shadow 150ms ease',
            zIndex: 12, // skeleton is 11

            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
            },
        },

        rowSelected: {
            backgroundColor: multiRowSelectionEnabled ? undefined : rowBackgroundColor,
        },

        rowCollapsibleButtonCell: {
            textAlign: 'right',
            padding: `${theme.spacing.xs / 2}px ${theme.spacing.sm}px !important`,
        },

        row: {
            '&:hover': {
                backgroundColor: rowBackgroundColor,
            },
        },
    };
});

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
    onMount?: onTableChangeEvent;
    /**
     * Function called when the table should update
     *
     * @param state the state of the table
     */
    onChange?: onTableChangeEvent;
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
    initialState?: InitialTableState & Partial<TableFormType>;
    /**
     * Action passed when user double clicks on a row
     */
    doubleClickAction?: (datum: T) => void;
    /**
     * Whether the user can select multiple rows in order to perform actions in bulk
     *
     * @default false
     */
    multiRowSelectionEnabled?: boolean;

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
    >;
}

interface TableType {
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

export const Table: TableType = <T,>({
    data,
    getRowId,
    noDataChildren,
    getExpandChildren,
    initialState = {},
    columns,
    onMount,
    onChange,
    children,
    loading = false,
    doubleClickAction,
    multiRowSelectionEnabled,
    options = {},
}: TableProps<T>) => {
    const convertedChildren = Children.toArray(children) as ReactElement[];
    const header = convertedChildren.find((child) => child.type === TableHeader);
    const footer = convertedChildren.find((child) => child.type === TableFooter);

    const {predicates, dateRange, ...initialStateWithoutForm} = initialState;
    const form = useForm<TableFormType>({
        initialValues: {predicates: initialState?.predicates ?? {}, dateRange: initialState?.dateRange ?? [null, null]},
    });
    const {cx, classes} = useStyles({hasHeader: !!header, multiRowSelectionEnabled});

    const table = useReactTable({
        initialState: defaultsDeep(initialStateWithoutForm, {pagination: {pageSize: TablePerPage.DEFAULT_SIZE}}),
        data,
        columns: multiRowSelectionEnabled ? [TableSelectableColumn as ColumnDef<T>].concat(columns) : columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: options?.getPaginationRowModel === undefined,
        enableMultiRowSelection: !!multiRowSelectionEnabled,
        getRowId,
        getRowCanExpand: (row: Row<T>) => !!getExpandChildren?.(row.original) ?? false,
        enableRowSelection: !loading,
        ...options,
    });
    const [state, setState] = useState<TableState>(table.initialState);
    table.setOptions((prev) => ({
        ...prev,
        state,
        onStateChange: setState,
    }));
    const {clearSelection, getSelectedRow, getSelectedRows} = useRowSelection(table);

    const triggerChange = () => onChange?.({...state, ...form.values});

    useEffect(() => {
        onMount?.({...state, ...form.values});
    }, []);

    useDidUpdate(() => {
        triggerChange();
        if (!multiRowSelectionEnabled) {
            clearSelection();
        }
    }, [state.globalFilter, state.sorting, state.pagination, form.values]);

    const clearFilters = useCallback(() => {
        form.setFieldValue('predicates', {});
        setState((prevState) => ({...prevState, globalFilter: ''}));
    }, []);

    const outsideClickRef = useClickOutside(() => {
        if (!multiRowSelectionEnabled) {
            clearSelection();
        }
    });

    if (!data) {
        return (
            <Center sx={{flexGrow: 1}}>
                <Loader />
            </Center>
        );
    }

    const rows = table.getRowModel().rows.map((row) => {
        const rowChildren = getExpandChildren?.(row.original) ?? null;

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={() => row.toggleSelected()}
                    onDoubleClick={() => doubleClickAction?.(row.original)}
                    className={cx(classes.row, {[classes.rowSelected]: row.getIsSelected()})}
                    aria-selected={row.getIsSelected()}
                >
                    {row.getVisibleCells().map((cell) => {
                        const size = cell.column.getSize();
                        const width = size !== defaultColumnSizing.size ? size : undefined;
                        return (
                            <td
                                key={cell.id}
                                style={{width}}
                                className={cx({
                                    [classes.rowCollapsibleButtonCell]: cell.column.id === TableCollapsibleColumn.id,
                                })}
                            >
                                <Skeleton visible={loading} sx={!loading ? {borderRadius: 0} : undefined}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Skeleton>
                            </td>
                        );
                    })}
                </tr>
                {rowChildren ? (
                    <tr>
                        <td
                            colSpan={columns.length + 1}
                            style={{
                                padding: 0,
                                borderTop: row.getIsExpanded() ? undefined : 'none',
                                borderBottom: row.getIsExpanded() ? undefined : 'none',
                            }}
                        >
                            <Collapse in={row.getIsExpanded()}>
                                <Box px="sm" py="xs">
                                    {rowChildren}
                                </Box>
                            </Collapse>
                        </td>
                    </tr>
                ) : null}
            </Fragment>
        );
    });

    return (
        <Box ref={outsideClickRef}>
            <TableContext.Provider
                value={{
                    onChange: triggerChange,
                    state,
                    setState,
                    clearFilters,
                    getSelectedRow,
                    getSelectedRows,
                    clearSelection,
                    form,
                    containerRef: outsideClickRef,
                    multiRowSelectionEnabled,
                    getPageCount: table.getPageCount,
                }}
            >
                {header}
                <MantineTable className={classes.table} horizontalSpacing="sm" verticalSpacing="xs" pb="sm">
                    <thead className={classes.header}>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((columnHeader) => (
                                    <Th key={columnHeader.id} header={columnHeader} />
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {rows.length ? (
                            rows
                        ) : (
                            <tr>
                                <td colSpan={columns.length}>{noDataChildren}</td>
                            </tr>
                        )}
                    </tbody>
                </MantineTable>
                {footer}
            </TableContext.Provider>
        </Box>
    );
};

Table.Actions = TableActions;
Table.Filter = TableFilter;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.Pagination = TablePagination;
Table.Predicate = TablePredicate;
Table.PerPage = TablePerPage;
Table.Predicate = TablePredicate;
Table.CollapsibleColumn = TableCollapsibleColumn;
Table.AccordionColumn = TableAccordionColumn;
Table.DateRangePicker = TableDateRangePicker;
