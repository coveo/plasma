import {Box, Center, Loader} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useDidUpdate} from '@mantine/hooks';
import {ColumnDef, getCoreRowModel, Row, TableState as TanstackTableState, useReactTable} from '@tanstack/react-table';
import debounce from 'lodash.debounce';
import defaultsDeep from 'lodash.defaultsdeep';
import {Children, cloneElement, Dispatch, ReactElement, useCallback, useEffect, useState} from 'react';

import {TableLayouts} from './layouts/TableLayouts';
import useStyles from './Table.styles';
import {TableFormType, TableProps, TableState, TableType} from './Table.types';
import {TableActions} from './TableActions';
import {TableAccordionColumn, TableCollapsibleColumn} from './TableCollapsibleColumn';
import {TableConsumer} from './TableConsumer';
import {TableContext} from './TableContext';
import {TableDateRangePicker} from './TableDateRangePicker';
import {TableFilter} from './TableFilter';
import {TableFooter} from './TableFooter';
import {TableHeader} from './TableHeader';
import {TableLastUpdated} from './TableLastUpdated';
import {TableLoading} from './TableLoading';
import {TablePagination} from './TablePagination';
import {TablePerPage} from './TablePerPage';
import {TablePredicate} from './TablePredicate';
import {TableSelectableColumn} from './TableSelectableColumn';
import {useRowSelection} from './useRowSelection';

export const Table: TableType = <T,>({
    data,
    getRowId,
    noDataChildren,
    getExpandChildren,
    initialState = {},
    columns,
    layouts = [TableLayouts.Rows],
    onMount,
    onChange,
    children,
    loading = false,
    doubleClickAction,
    multiRowSelectionEnabled,
    disableRowSelection,
    onRowSelectionChange,
    additionalRootNodes,
    options = {},
}: TableProps<T>) => {
    const convertedChildren = Children.toArray(children) as ReactElement[];
    const header = convertedChildren.find((child) => child.type === TableHeader);
    const footer = convertedChildren.find((child) => child.type === TableFooter);
    const consumer = convertedChildren.find((child) => child.type === TableConsumer);
    const lastUpdated = convertedChildren.find((child) => child.type === TableLastUpdated);

    const {predicates, dateRange, ...initialStateWithoutForm} = initialState;
    const form = useForm<TableFormType>({
        initialValues: {
            predicates: initialState?.predicates ?? {},
            dateRange: initialState?.dateRange ?? [null, null],
            layout: initialState?.layout ?? layouts[0].name,
        },
    });
    const {classes} = useStyles();

    const table = useReactTable({
        initialState: defaultsDeep(initialStateWithoutForm, {
            pagination: {pageSize: TablePerPage.DEFAULT_SIZE},
            globalFilter: '',
        }),
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
        additionalRootNodes,
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
    }, [
        state.globalFilter,
        state.pagination,
        state.sorting,
        JSON.stringify(form.values.dateRange),
        JSON.stringify(form.values.predicates),
    ]);

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

    const Layout = layouts.find(({name}) => name === form.values.layout);
    const hasRows = table.getRowModel().rows.length > 0;

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
                    disableRowSelection,
                    layouts,
                }}
            >
                {consumer}
                {!hasRows && !isFiltered && !loading ? (
                    noDataChildren
                ) : (
                    <>
                        <Box component="table" className={classes.table} pb="sm">
                            <thead className={classes.header}>
                                {!!header ? (
                                    <tr>
                                        <th style={{padding: 0}} colSpan={table.getAllColumns().length}>
                                            {header}
                                        </th>
                                    </tr>
                                ) : null}
                                <Layout.Header
                                    table={table}
                                    doubleClickAction={doubleClickAction}
                                    getExpandChildren={getExpandChildren}
                                    loading={loading}
                                />
                            </thead>
                            <tbody>
                                {hasRows ? (
                                    <Layout.Body
                                        table={table}
                                        doubleClickAction={doubleClickAction}
                                        getExpandChildren={getExpandChildren}
                                        loading={loading}
                                    />
                                ) : (
                                    <tr>
                                        <td colSpan={table.getAllColumns().length}>
                                            <TableLoading visible={loading}>{noDataChildren}</TableLoading>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Box>
                        {footer}
                        {lastUpdated
                            ? cloneElement(lastUpdated, {
                                  dependencies: [data, ...(lastUpdated.props.dependencies ?? [])],
                              })
                            : null}
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
Table.LastUpdated = TableLastUpdated;
Table.Pagination = TablePagination;
Table.Predicate = TablePredicate;
Table.PerPage = TablePerPage;
Table.Predicate = TablePredicate;
Table.CollapsibleColumn = TableCollapsibleColumn;
Table.AccordionColumn = TableAccordionColumn;
Table.DateRangePicker = TableDateRangePicker;
Table.Consumer = TableConsumer;
Table.Loading = TableLoading;
Table.Layouts = TableLayouts;
