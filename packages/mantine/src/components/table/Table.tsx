import {Box, Center, Factory, Loader, useProps, useStyles} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useDidUpdate, useMergedRef} from '@mantine/hooks';
import {
    ColumnDef,
    defaultColumnSizing,
    getCoreRowModel,
    Row,
    TableState as TanstackTableState,
    useReactTable,
} from '@tanstack/react-table';
import debounce from 'lodash.debounce';
import defaultsDeep from 'lodash.defaultsdeep';
import {Children, cloneElement, Dispatch, ForwardedRef, ReactElement, useCallback, useEffect, useState} from 'react';

import {useRowSelection} from '../../hooks/useRowSelection';
import {CustomComponentThemeExtend, identity} from '../../utils';
import {TableLayouts} from './layouts/TableLayouts';
import {TableActions, TableActionsStylesNames} from './table-actions/TableActions';
import {
    TableAccordionColumn,
    TableCollapsibleColumn,
    TableCollapsibleColumnStylesNames,
} from './table-column/TableCollapsibleColumn';
import {TableSelectableColumn} from './table-column/TableSelectableColumn';
import {TableColumnsSelector, TableColumnsSelectorStylesNames} from './table-columns-selector/TableColumnsSelector';
import {TableConsumer} from './table-consumer/TableConsumer';
import {TableDateRangePicker, TableDateRangePickerStylesNames} from './table-date-range-picker/TableDateRangePicker';
import {TableFilter, TableFilterStylesNames} from './table-filter/TableFilter';
import {TableFooter} from './table-footer/TableFooter';
import {TableHeader, TableHeaderStylesNames} from './table-header/TableHeader';
import {TableThStylesNames} from './table-header/Th';
import {TableLastUpdated, TableLastUpdatedStylesNames} from './table-last-updated/TableLastUpdated';
import {TableLoading} from './table-loading/TableLoading';
import {TablePagination} from './table-pagination/TablePagination';
import {TablePerPage} from './table-per-page/TablePerPage';
import {TablePredicate, TablePredicateStylesNames} from './table-predicate/TablePredicate';
import classes from './Table.module.css';
import {TableFormType, TableLayout, TableProps, TableState} from './Table.types';
import {TableContext, TableStylesProvider} from './TableContext';

type TableStylesNames =
    | 'root'
    | 'table'
    | 'header'
    | 'body'
    | TableActionsStylesNames
    | TableCollapsibleColumnStylesNames
    | TableDateRangePickerStylesNames
    | TableFilterStylesNames
    | TableHeaderStylesNames
    | TableThStylesNames
    | TableLastUpdatedStylesNames
    | TablePredicateStylesNames
    | TableColumnsSelectorStylesNames;

export type PlasmaTableFactory = Factory<{
    props: TableProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: TableStylesNames;
    staticComponents: {
        Actions: typeof TableActions;
        Filter: typeof TableFilter;
        Footer: typeof TableFooter;
        Header: typeof TableHeader;
        LastUpdated: typeof TableLastUpdated;
        Pagination: typeof TablePagination;
        PerPage: typeof TablePerPage;
        Predicate: typeof TablePredicate;
        DateRangePicker: typeof TableDateRangePicker;
        CollapsibleColumn: typeof TableCollapsibleColumn;
        ColumnsSelector: typeof TableColumnsSelector;
        AccordionColumn: typeof TableAccordionColumn;
        Consumer: typeof TableConsumer;
        Loading: typeof TableLoading;
        Layouts: typeof TableLayouts;
    };
}>;

const defaultProps: Partial<TableProps<unknown>> = {
    layouts: [TableLayouts.Rows as TableLayout],
};

export const Table = <T,>(props: TableProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const {
        data,
        getRowId,
        noDataChildren,
        getExpandChildren,
        initialState = {},
        columns,
        layouts,
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
        ref,

        // Style props
        style,
        className,
        classNames,
        styles,
        unstyled,
        ...others
    } = useProps('PlasmaTable', defaultProps as TableProps<T>, props);

    const getStyles = useStyles<PlasmaTableFactory>({
        name: 'PlasmaTable',
        classes,
        props: props as TableProps<unknown>,
        className,
        style,
        classNames,
        styles,
        unstyled,
    });

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
            layout: initialState?.layout ?? layouts[0].displayName,
        },
    });

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
    const containerRef = useMergedRef(outsideClickRef, ref);
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
            <Center style={{flexGrow: 1}}>
                <Loader />
            </Center>
        );
    }

    const Layout = layouts.find(({displayName}) => displayName === form.values.layout);
    const hasRows = table.getRowModel().rows.length > 0;

    return (
        <Box ref={containerRef} {...others} {...getStyles('root')}>
            <TableStylesProvider value={{getStyles}}>
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
                        getAllColumns,
                        disableRowSelection,
                        layouts,
                    }}
                >
                    <Layout>
                        {consumer}
                        {!hasRows && !isFiltered && !loading ? (
                            noDataChildren
                        ) : (
                            <>
                                <Box component="table" {...getStyles('table')} pb="sm">
                                    <thead {...getStyles('header')}>
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
                                    <tbody {...getStyles('body')}>
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
                    </Layout>
                </TableContext.Provider>
            </TableStylesProvider>
        </Box>
    );
};

export const TableComponentsOrder = {
    MultiSelectInfo: 7,
    Actions: 6,
    Predicate: 5,
    Filter: 4,
    DateRangePicker: 3,
    ColumnsSelector: 2,
    LayoutControl: 1,
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
Table.ColumnsSelector = TableColumnsSelector;
Table.Layouts = TableLayouts;

Table.extend = identity as CustomComponentThemeExtend<PlasmaTableFactory>;
