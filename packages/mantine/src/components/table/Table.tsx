import {Box, Center, Loader} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useDidUpdate} from '@mantine/hooks';
import {
    ColumnDef,
    Row,
    TableState as TanstackTableState,
    defaultColumnSizing,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import debounce from 'lodash.debounce';
import defaultsDeep from 'lodash.defaultsdeep';
import {Children, Dispatch, ReactElement, cloneElement, useCallback, useEffect, useState} from 'react';

import {useRowSelection} from '../../hooks/useRowSelection';
import useStyles from './Table.styles';
import {TableFormType, TableProps, TableState, TableType} from './Table.types';
import {TableContext} from './TableContext';
import {TableLayouts} from './layouts/TableLayouts';
import {TableActions} from './table-actions/TableActions';
import {TableAccordionColumn, TableCollapsibleColumn} from './table-column/TableCollapsibleColumn';
import {TableSelectableColumn} from './table-column/TableSelectableColumn';
import {TableConsumer} from './table-consumer/TableConsumer';
import {TableDateRangePicker} from './table-date-range-picker/TableDateRangePicker';
import {TableEditColumnsVisibility} from './table-edit-columns-visibility/TableEditColumnsVisibility';
import {TableFilter} from './table-filter/TableFilter';
import {TableFooter} from './table-footer/TableFooter';
import {TableHeader} from './table-header/TableHeader';
import {TableLastUpdated} from './table-last-updated/TableLastUpdated';
import {TableLoading} from './table-loading/TableLoading';
import {TablePagination} from './table-pagination/TablePagination';
import {TablePerPage} from './table-per-page/TablePerPage';
import {TablePredicate} from './table-predicate/TablePredicate';

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
    classNames,
    styles,
    unstyled,
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
    const {classes} = useStyles(null, {name: 'PlasmaTable', classNames, styles, unstyled});

    const table = useReactTable({
        initialState: defaultsDeep(initialStateWithoutForm, {
            pagination: {pageSize: TablePerPage.DEFAULT_SIZE},
            globalFilter: '',
        }),
        data,
        columns: multiRowSelectionEnabled ? [TableSelectableColumn as ColumnDef<T>].concat(columns) : columns,
        getCoreRowModel: getCoreRowModel(),
        enableHiding: true,
        manualPagination: options?.getPaginationRowModel === undefined,
        enableMultiRowSelection: !!multiRowSelectionEnabled,
        getRowId,
        getRowCanExpand: (row: Row<T>) => !!getExpandChildren?.(row.original) ?? false,
        enableRowSelection: !loading,
        defaultColumn: {
            size: undefined,
            minSize: defaultColumnSizing.minSize,
            maxSize: defaultColumnSizing.maxSize,
        },
        ...options,
    });

    const getAllColumns = table.getAllFlatColumns;

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
    const hasRows = table.getRowModel()?.rows.length > 0;

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
                    getAllColumns,
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
                            <tbody className={classes.body}>
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

Table.EditColumnsVisibility = TableEditColumnsVisibility;
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
