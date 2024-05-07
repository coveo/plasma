import {Box, Center, Factory, Loader, useProps, useStyles} from '@mantine/core';
import {useClickOutside, useMergedRef} from '@mantine/hooks';
import {
    ColumnDef,
    Row,
    RowSelectionState,
    defaultColumnSizing,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import isEqual from 'fast-deep-equal';
import {Children, ForwardedRef, ReactElement, cloneElement, useRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../utils';
import classes from './Table.module.css';
import {TableLayout, TableProps} from './Table.types';
import {TableProvider} from './TableContext';
import {TableLayouts} from './layouts/TableLayouts';
import {TableActions, TableActionsStylesNames} from './table-actions/TableActions';
import {
    TableAccordionColumn,
    TableCollapsibleColumn,
    TableCollapsibleColumnStylesNames,
} from './table-column/TableCollapsibleColumn';
import {TableSelectableColumn} from './table-column/TableSelectableColumn';
import {TableColumnsSelector, TableColumnsSelectorStylesNames} from './table-columns-selector/TableColumnsSelector';
import {TableDateRangePicker, TableDateRangePickerStylesNames} from './table-date-range-picker/TableDateRangePicker';
import {TableFilter, TableFilterStylesNames} from './table-filter/TableFilter';
import {TableFooter} from './table-footer/TableFooter';
import {TableHeader, TableHeaderStylesNames} from './table-header/TableHeader';
import {TableThStylesNames} from './table-header/Th';
import {TableLastUpdated, TableLastUpdatedStylesNames} from './table-last-updated/TableLastUpdated';
import {TableLoading} from './table-loading/TableLoading';
import {TableNoData} from './table-no-data/TableNoData';
import {TablePagination} from './table-pagination/TablePagination';
import {TablePerPage} from './table-per-page/TablePerPage';
import {TablePredicate, TablePredicateStylesNames} from './table-predicate/TablePredicate';
import {TableState} from './use-table';

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
        AccordionColumn: typeof TableAccordionColumn;
        Actions: typeof TableActions;
        CollapsibleColumn: typeof TableCollapsibleColumn;
        ColumnsSelector: typeof TableColumnsSelector;
        DateRangePicker: typeof TableDateRangePicker;
        Filter: typeof TableFilter;
        Footer: typeof TableFooter;
        Header: typeof TableHeader;
        LastUpdated: typeof TableLastUpdated;
        Layouts: typeof TableLayouts;
        Loading: typeof TableLoading;
        NoData: typeof TableNoData;
        Pagination: typeof TablePagination;
        PerPage: typeof TablePerPage;
        Predicate: typeof TablePredicate;
    };
}>;

const defaultProps: Partial<TableProps<unknown>> = {
    layouts: [TableLayouts.Rows as TableLayout],
    layoutProps: {},
    loading: false,
    additionalRootNodes: [],
    options: {},
};

export const Table = <T,>(props: TableProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const {
        store,
        data,
        getRowId,
        getExpandChildren,
        columns,
        layouts,
        layoutProps,
        children,
        loading,
        doubleClickAction,
        additionalRootNodes,
        options,
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
    const lastUpdated = convertedChildren.find((child) => child.type === TableLastUpdated);
    const noData = convertedChildren.find((child) => child.type === TableNoData);

    const table = useReactTable({
        data,
        state: {
            globalFilter: store.state.globalFilter,
            sorting: store.state.sorting,
            pagination: store.state.pagination,
            columnVisibility: store.state.columnVisibility,
        },
        onGlobalFilterChange: store.setGlobalFilter,
        onSortingChange: store.setSorting,
        onPaginationChange: store.setPagination,
        onColumnVisibilityChange: store.setColumnVisibility,
        columns: store.multiRowSelectionEnabled ? [TableSelectableColumn as ColumnDef<T>].concat(columns) : columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: options?.getPaginationRowModel === undefined,
        enableMultiRowSelection: !!store.multiRowSelectionEnabled,
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

    table.setOptions((prev) => ({
        ...prev,
        state: {
            ...prev.state,
            rowSelection: store.state.rowSelection as RowSelectionState,
        },
        onRowSelectionChange: (rowSelectionUpdater) => {
            store.setRowSelection((old) => {
                const newRowSelection = (
                    rowSelectionUpdater instanceof Function
                        ? rowSelectionUpdater(old as RowSelectionState)
                        : rowSelectionUpdater
                ) as TableState<T>['rowSelection'];

                if (isEqual(old, newRowSelection)) {
                    return old;
                }

                const rows = table.getRowModel().rowsById;

                Object.keys(newRowSelection).forEach((rowId) => {
                    if (newRowSelection[rowId] === true) {
                        if (!rows[rowId]) {
                            console.error(
                                'The table was not initialized properly, the rowSelection state should contain an object of type Record<string, TData>.',
                            );
                        }
                        newRowSelection[rowId] = rows[rowId]?.original ?? (true as T);
                    }
                });

                return newRowSelection;
            });
        },
    }));

    const containerRef = useRef<HTMLDivElement>();
    useClickOutside(
        () => {
            if (!store.multiRowSelectionEnabled) {
                store.clearRowSelection();
            }
        },
        null,
        [containerRef.current, ...additionalRootNodes],
    );
    const mergedRef = useMergedRef(containerRef, ref);

    if (!data) {
        return (
            <Center style={{flexGrow: 1}}>
                <Loader />
            </Center>
        );
    }

    const Layout =
        store.state.layout === null ? layouts[0] : layouts.find(({displayName}) => displayName === store.state.layout);
    const hasRows = table.getRowModel().rows.length > 0;

    return (
        <Box ref={mergedRef} {...others} {...getStyles('root')}>
            <TableProvider<T> value={{getStyles, store, table, layouts, containerRef}}>
                <Layout>
                    {!hasRows && !store.isFiltered && !loading ? (
                        noData
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
                                        doubleClickAction={doubleClickAction}
                                        getExpandChildren={getExpandChildren}
                                        loading={loading}
                                        {...layoutProps}
                                    />
                                </thead>
                                <tbody {...getStyles('body')}>
                                    {hasRows ? (
                                        <Layout.Body
                                            doubleClickAction={doubleClickAction}
                                            getExpandChildren={getExpandChildren}
                                            loading={loading}
                                            {...layoutProps}
                                        />
                                    ) : (
                                        <tr>
                                            <td colSpan={table.getAllColumns().length}>
                                                <TableLoading visible={loading}>{noData}</TableLoading>
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
            </TableProvider>
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

Table.AccordionColumn = TableAccordionColumn;
Table.Actions = TableActions;
Table.CollapsibleColumn = TableCollapsibleColumn;
Table.ColumnsSelector = TableColumnsSelector;
Table.DateRangePicker = TableDateRangePicker;
Table.Filter = TableFilter;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.LastUpdated = TableLastUpdated;
Table.Layouts = TableLayouts;
Table.Loading = TableLoading;
Table.NoData = TableNoData;
Table.Pagination = TablePagination;
Table.PerPage = TablePerPage;
Table.Predicate = TablePredicate;
Table.Predicate = TablePredicate;

Table.extend = identity as CustomComponentThemeExtend<PlasmaTableFactory>;
