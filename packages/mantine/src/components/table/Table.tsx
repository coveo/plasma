import {Box, Center, Collapse, Loader, Skeleton, Table as MantineTable} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useDidUpdate} from '@mantine/hooks';
import {
    ColumnDef,
    defaultColumnSizing,
    flexRender,
    getCoreRowModel,
    Row,
    TableState as TanstackTableState,
    useReactTable,
} from '@tanstack/react-table';
import debounce from 'lodash.debounce';
import defaultsDeep from 'lodash.defaultsdeep';
import {Children, Dispatch, Fragment, ReactElement, useCallback, useEffect, useState} from 'react';

import useStyles from './Table.styles';
import {TableFormType, TableProps, TableState, TableType} from './Table.types';
import {TableActions} from './TableActions';
import {TableAccordionColumn, TableCollapsibleColumn} from './TableCollapsibleColumn';
import {TableContext} from './TableContext';
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
    onRowSelectionChange,
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
    const [state, setState] = useState<TableState<T>>(table.initialState as TableState<T>);
    table.setOptions((prev) => ({
        ...prev,
        state: state as TanstackTableState,
        onStateChange: setState as Dispatch<React.SetStateAction<TanstackTableState>>,
    }));
    const {clearSelection, getSelectedRow, getSelectedRows, outsideClickRef} = useRowSelection(table, {
        multiRowSelectionEnabled,
        onRowSelectionChange,
    });
    const isFiltered =
        !!state.globalFilter ||
        Object.keys(form.values?.predicates ?? {}).some((predicate) => !!form.values.predicates[predicate]) ||
        !!form.values.dateRange?.[0] ||
        !!form.values.dateRange?.[1];

    const triggerChange = debounce(() => onChange?.({...state, ...form.values}), 500);

    useEffect(() => {
        onMount?.({...state, ...form.values});
        return () => {
            triggerChange.cancel();
        };
    }, []);

    useDidUpdate(() => {
        triggerChange();
        if (!multiRowSelectionEnabled) {
            clearSelection();
        }
    }, [state.globalFilter, state.pagination, state.sorting, form.values]);

    const clearFilters = useCallback(() => {
        form.setFieldValue('predicates', initialState.predicates ?? {});
        setState((prevState) => ({...prevState, globalFilter: ''}));
    }, []);

    if (!data) {
        return (
            <Center sx={{flexGrow: 1}}>
                <Loader />
            </Center>
        );
    }

    const rows = table.getRowModel().rows.map((row) => {
        const rowChildren = getExpandChildren?.(row.original) ?? null;
        const isSelected = !!row.getIsSelected();

        return (
            <Fragment key={row.id}>
                <tr
                    onClick={() => row.toggleSelected()}
                    onDoubleClick={() => doubleClickAction?.(row.original)}
                    className={cx(classes.row, {[classes.rowSelected]: isSelected})}
                    aria-selected={isSelected}
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
                                <Skeleton
                                    style={{display: 'inline-block'}}
                                    visible={loading}
                                    sx={!loading ? {borderRadius: 0} : undefined}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Skeleton>
                            </td>
                        );
                    })}
                </tr>
                {rowChildren ? (
                    <tr>
                        <td
                            colSpan={table.getAllColumns().length}
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
                    isFiltered,
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
                {!rows.length && !isFiltered && !loading ? (
                    noDataChildren
                ) : (
                    <>
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
                                        <td colSpan={table.getAllColumns().length}>{noDataChildren}</td>
                                    </tr>
                                )}
                            </tbody>
                        </MantineTable>
                        {footer}
                    </>
                )}
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
