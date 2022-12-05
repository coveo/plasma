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
import {InitialTableState} from '@tanstack/table-core';
import defaultsDeep from 'lodash.defaultsdeep';
import {Children, Fragment, ReactElement, ReactNode, useCallback, useEffect, useState} from 'react';

import {TableActions} from './TableActions';
import {TableCollapsibleColumn} from './TableCollapsibleColumn';
import {onTableChangeEvent, TableContext, TableFormType} from './TableContext';
import {TableDateRangePicker} from './TableDateRangePicker';
import {TableFilter} from './TableFilter';
import {TableFooter} from './TableFooter';
import {TableHeader} from './TableHeader';
import {TablePagination} from './TablePagination';
import {TablePerPage} from './TablePerPage';
import {TablePredicate} from './TablePredicate';
import {Th} from './Th';

const useStyles = createStyles<string, {hasHeader: boolean}>((theme, {hasHeader}, getRef) => ({
    table: {
        width: '100%',
        '& td:first-of-type': {
            paddingLeft: theme.spacing.xl,
        },
    },

    header: {
        position: 'sticky',
        top: hasHeader ? 69 : 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
        transition: 'box-shadow 150ms ease',
        zIndex: 12, // skeleton is 11
        '& tr th:first-of-type button': {
            paddingLeft: theme.spacing.xl,
        },
        '& tr th:first-of-type div': {
            paddingLeft: theme.spacing.xl,
        },

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
        ref: getRef('rowSelected'),
    },

    row: {
        [`&:hover, &.${getRef('rowSelected')}`]: {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                    : theme.colors[theme.primaryColor][0],
        },
    },
}));

interface TableProps<T> {
    /**
     * Data to display in the table
     */
    data: T[];
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
    CollapsibleColumn: typeof TableCollapsibleColumn;
    DateRangePicker: typeof TableDateRangePicker;
}

export const Table: TableType = <T,>({
    data,
    noDataChildren,
    getExpandChildren,
    initialState = {},
    columns,
    onMount,
    onChange,
    children,
    loading = false,
    doubleClickAction,
}: TableProps<T>) => {
    const convertedChildren = Children.toArray(children) as ReactElement[];
    const header = convertedChildren.find((child) => child.type === TableHeader);
    const footer = convertedChildren.find((child) => child.type === TableFooter);

    const {predicates, dateRange, ...initialStateWithoutForm} = initialState;
    const form = useForm<TableFormType>({
        initialValues: {predicates: initialState?.predicates ?? {}, dateRange: initialState?.dateRange ?? [null, null]},
    });

    const {cx, classes} = useStyles({hasHeader: !!header});

    const table = useReactTable({
        initialState: defaultsDeep(initialStateWithoutForm, {pagination: {pageSize: TablePerPage.DEFAULT_SIZE}}),
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        getRowCanExpand: (row: Row<T>) => !!getExpandChildren?.(row.original) ?? false,
    });
    const [state, setState] = useState<TableState>(table.initialState);
    table.setOptions((prev) => ({
        ...prev,
        state,
        onStateChange: setState,
    }));

    const triggerChange = () => onChange?.({...state, ...form.values});

    useEffect(() => {
        onMount?.({...state, ...form.values});
    }, []);

    const outsideClickRef = useClickOutside(() => {
        table.resetRowSelection(true);
    });

    useDidUpdate(() => {
        triggerChange();
        clearSelection();
    }, [state.globalFilter, state.sorting, state.pagination, form.values]);

    const clearFilters = useCallback(() => {
        form.setFieldValue('predicates', {});
        setState((prevState) => ({...prevState, globalFilter: ''}));
    }, []);

    const clearSelection = () => {
        setState((prevState) => ({...prevState, rowSelection: {}}));
    };

    const getSelectedRow = useCallback(
        () => table.getSelectedRowModel().flatRows?.[0]?.original ?? null,
        [state.rowSelection]
    );

    if (!data) {
        return (
            <Center sx={{flexGrow: 1}}>
                <Loader />
            </Center>
        );
    }

    const toggleRowSelection = (row: Row<T>) => {
        table.setRowSelection(() => ({[row.id]: !row.getIsSelected()}));
    };

    const rows = table.getRowModel().rows.map((row) => {
        const rowChildren = getExpandChildren?.(row.original) ?? null;

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={() => toggleRowSelection(row)}
                    onDoubleClick={() => doubleClickAction?.(row.original)}
                    className={cx(classes.row, {[classes.rowSelected]: row.getIsSelected()})}
                >
                    {row.getVisibleCells().map((cell) => {
                        const size = cell.column.getSize();
                        const width = size !== defaultColumnSizing.size ? size : undefined;
                        return (
                            <td key={cell.id} style={{width}}>
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
                            style={{padding: 0, borderBottomColor: row.getIsExpanded() ? undefined : 'transparent'}}
                        >
                            <Collapse in={row.getIsExpanded()} px="sm" py="xs">
                                {rowChildren}
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
                    clearSelection,
                    form,
                    containerRef: outsideClickRef,
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
Table.DateRangePicker = TableDateRangePicker;
