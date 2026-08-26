import {Box, Center, Factory, Loader, type SkeletonProps, useProps, useStyles} from '@mantine/core';
import {useClickOutside, useMergedRef} from '@mantine/hooks';
import {
    ColumnDef,
    defaultColumnSizing,
    getCoreRowModel,
    type PaginationState as TanStackPaginationState,
    Row,
    RowSelectionState,
    useReactTable,
} from '@tanstack/react-table';
import isEqual from 'fast-deep-equal';
import {Children, ForwardedRef, ReactElement, useEffect, useRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../utils/createFactoryComponent.js';
import {TableLayouts} from './layouts/TableLayouts.js';
import {
    TableActionItem,
    type TableActionItemFactory,
    type TableActionItemProps,
    type TableActionItemStylesNames,
} from './table-actions/TableActionItem.js';
import {type TableActionsListStylesNames} from './table-actions/TableActionsList.js';
import {type TableHeaderActionsStylesNames} from './table-actions/TableHeaderActions.js';
import {
    TableCell,
    type TableCellFactory,
    type TableCellProps,
    type TableCellStylesNames,
} from './table-cell/TableCell.js';
import {TableActionsColumn} from './table-column/TableActionsColumn.js';
import {
    TableAccordionColumn,
    TableCollapsibleColumn,
    type TableCollapsibleColumnStylesNames,
} from './table-column/TableCollapsibleColumn.js';
import {type TableSelectRowCheckboxStylesNames} from './table-column/TableSelectRowCheckbox.js';
import {TableSelectableColumn} from './table-column/TableSelectableColumn.js';
import {
    TableDateRangePicker,
    type TableDateRangePickerFactory,
    type TableDateRangePickerProps,
    type TableDateRangePickerStylesNames,
} from './table-date-range-picker/TableDateRangePicker.js';
import {
    TableFilter,
    type TableFilterFactory,
    type TableFilterProps,
    type TableFilterStylesNames,
} from './table-filter/TableFilter.js';
import {TableFooter, type TableFooterProps} from './table-footer/TableFooter.js';
import {
    TableHeader,
    type TableHeaderFactory,
    type TableHeaderProps,
    type TableHeaderStylesNames,
} from './table-header/TableHeader.js';
import {type TableThStylesNames} from './table-header/Th.js';
import {
    TableLastUpdated,
    type TableLastUpdatedFactory,
    type TableLastUpdatedProps,
    type TableLastUpdatedStylesNames,
} from './table-last-updated/TableLastUpdated.js';
import {TableLoading} from './table-loading/TableLoading.js';
import {TableNoData, type TableNoDataProps} from './table-no-data/TableNoData.js';
import {TablePagination} from './table-pagination/TablePagination.js';
import {type TablePaginationProps} from './table-pagination/TablePagination.types.js';
import {TablePerPage} from './table-per-page/TablePerPage.js';
import {type TablePerPageProps} from './table-per-page/TablePerPage.types.js';
import {
    TablePredicate,
    type TablePredicateFactory,
    type TablePredicateProps,
    type TablePredicateStylesNames,
} from './table-predicate/TablePredicate.js';
import {
    TableToolbar,
    type TableToolbarFactory,
    type TableToolbarProps,
    type TableToolbarStylesNames,
} from './table-toolbar/TableToolbar.js';
import classes from './Table.module.css';
import {type TableLayout, type TableProps} from './Table.types.js';
import {TableProvider} from './TableContext.js';
import {areSelectionCheckboxesVisible, getRangeSelection, selectRange} from './tableSelectionUtils.js';
import {TableState} from './use-table.js';

export type TableStylesNames =
    | 'root'
    | 'table'
    | 'header'
    | 'body'
    | TableHeaderActionsStylesNames
    | TableActionsListStylesNames
    | TableActionItemStylesNames
    | TableCollapsibleColumnStylesNames
    | TableSelectRowCheckboxStylesNames
    | TableDateRangePickerStylesNames
    | TableFilterStylesNames
    | TableHeaderStylesNames
    | TableThStylesNames
    | TableLastUpdatedStylesNames
    | TablePredicateStylesNames
    | TableToolbarStylesNames;

export type PlasmaTableFactory = Factory<{
    props: TableProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: TableStylesNames;
    staticComponents: {
        AccordionColumn: typeof TableAccordionColumn;
        ActionsColumn: typeof TableActionsColumn;
        ActionItem: typeof TableActionItem;
        Cell: typeof TableCell;
        CollapsibleColumn: typeof TableCollapsibleColumn;
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
        Toolbar: typeof TableToolbar;
    };
}>;

export type TableFactory = PlasmaTableFactory;

const defaultProps = {
    layouts: [TableLayouts.Rows as TableLayout],
    layoutProps: {},
    loading: false,
    additionalRootNodes: [],
    options: {},
    getRowActions: () => [],
} satisfies Partial<TableProps<unknown>>;

export const Table = <T,>(props: TableProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const {
        store,
        data,
        getRowId,
        getRowAttributes,
        getRowExpandedContent,
        getRowActions,
        columns,
        layouts,
        layoutProps,
        children,
        loading,
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
    } = useProps('PlasmaTable', defaultProps, props);

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
    const toolbar = convertedChildren.find((child) => child.type === TableToolbar);
    const lastUpdated = convertedChildren.find((child) => child.type === TableLastUpdated);
    const noData = convertedChildren.find((child) => child.type === TableNoData);

    const selectionCheckboxesVisible = areSelectionCheckboxesVisible(store);
    const rangeSelectionAnchorRef = useRef<string | null>(null);

    useEffect(() => {
        if (Object.keys(store.state.rowSelection).length === 0) {
            rangeSelectionAnchorRef.current = null;
        }
    }, [store.state.rowSelection]);

    const table = useReactTable({
        data: data || [],
        state: {
            globalFilter: store.state.globalFilter,
            sorting: store.state.sorting,
            pagination: {pageIndex: store.state.pagination.page, pageSize: store.state.pagination.perPage},
            columnVisibility: store.state.columnVisibility,
            expanded: store.state.expanded,
        },
        onGlobalFilterChange: store.setGlobalFilter,
        onExpandedChange: store.setExpanded,
        onSortingChange: store.setSorting,
        onPaginationChange: (updater) => {
            store.setPagination((prev) => {
                const tanstackPrev: TanStackPaginationState = {pageIndex: prev.page, pageSize: prev.perPage};
                const next = updater instanceof Function ? updater(tanstackPrev) : updater;
                return {page: next.pageIndex, perPage: next.pageSize};
            });
        },
        onColumnVisibilityChange: store.setColumnVisibility,
        columns: selectionCheckboxesVisible ? [TableSelectableColumn as ColumnDef<T>].concat(columns) : columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: options.getPaginationRowModel === undefined,
        enableMultiRowSelection: !!store.multiRowSelectionEnabled,
        getRowId,
        getRowCanExpand: (row: Row<T>) => !!getRowExpandedContent?.(row.original, row.index, row),
        enableRowSelection: !loading,
        defaultColumn: {
            size: undefined,
            minSize: defaultColumnSizing.minSize,
            maxSize: defaultColumnSizing.maxSize,
        },
        rowCount: options.getFilteredRowModel ? undefined : (store.state.totalEntries ?? undefined),
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

    const handleRowSelection = (row: Row<T>, rangeRequested: boolean) => {
        if (store.rowSelectionEnabled && row.getCanSelect()) {
            if (rangeRequested && store.multiRowSelectionEnabled) {
                const rangeSelection = getRangeSelection<T, Row<T>>({
                    row,
                    rows: table.getRowModel().rows,
                    anchorId: rangeSelectionAnchorRef.current,
                });
                store.setRowSelection((currentSelection) =>
                    selectRange<T, Row<T>>(currentSelection, rangeSelection.rows),
                );
                rangeSelectionAnchorRef.current = rangeSelection.nextAnchorId;
            } else if (!store.rowSelectionForced || !row.getIsSelected()) {
                row.toggleSelected();
                rangeSelectionAnchorRef.current = row.id;
            }
        }
    };

    useEffect(() => {
        // Update the selected rows data when the data prop changes
        if (store.getSelectedRows().length > 0) {
            store.setRowSelection((old) => {
                const rowsById = table.getRowModel().rowsById;
                const newSelection = {...old};
                Object.keys(old).forEach((rowId) => {
                    if (rowsById[rowId]) {
                        newSelection[rowId] = rowsById[rowId].original;
                    }
                });
                return isEqual(newSelection, old) ? old : newSelection;
            });
        }
    }, [data]);

    const containerRef = useRef<HTMLDivElement>(null);
    useClickOutside(
        () => {
            if (!store.multiRowSelectionEnabled && store.getSelectedRows().length > 0) {
                store.clearRowSelection();
            }
        },
        null,
        [containerRef.current, ...additionalRootNodes],
    );
    useEffect(() => {
        const clearRowSelection = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && store.rowSelectionEnabled && !store.rowSelectionForced) {
                store.clearRowSelection();
            }
        };

        document.addEventListener('keydown', clearRowSelection, true);
        return () => document.removeEventListener('keydown', clearRowSelection, true);
    }, [store.clearRowSelection, store.rowSelectionEnabled, store.rowSelectionForced]);
    const mergedRef = useMergedRef(containerRef, ref);

    if (!data) {
        return (
            <Center style={{flexGrow: 1}}>
                <Loader />
            </Center>
        );
    }

    const Layout =
        store.state.layout === null
            ? layouts[0]
            : (layouts.find(({displayName}) => displayName === store.state.layout) ?? layouts[0]);
    const hasRows = table.getRowModel().rows.length > 0;

    return (
        <Box ref={mergedRef} {...others} {...getStyles('root')}>
            <TableProvider<T>
                value={{
                    getStyles,
                    getRowActions,
                    store,
                    table,
                    layouts,
                    containerRef,
                    selectionCheckboxesVisible,
                    rangeSelectionAnchorRef,
                    handleRowSelection,
                }}
            >
                <>
                    {store.isVacant && !store.isFiltered ? null : toolbar}
                    <Layout>
                        {store.isVacant && !store.isFiltered ? (
                            noData
                        ) : (
                            <>
                                <Box component="table" {...getStyles('table')} mod={{loading}}>
                                    <thead {...getStyles('header')}>
                                        {header ? (
                                            <tr>
                                                <th style={{padding: 0}} colSpan={table.getAllColumns().length}>
                                                    {header}
                                                </th>
                                            </tr>
                                        ) : null}
                                        {hasRows || loading ? (
                                            <Layout.Header
                                                getRowExpandedContent={getRowExpandedContent}
                                                getRowAttributes={getRowAttributes}
                                                loading={loading}
                                                {...layoutProps}
                                            />
                                        ) : null}
                                    </thead>
                                    <tbody {...getStyles('body')}>
                                        {hasRows ? (
                                            <Layout.Body
                                                getRowExpandedContent={getRowExpandedContent}
                                                getRowAttributes={getRowAttributes}
                                                loading={loading}
                                                {...layoutProps}
                                            />
                                        ) : (
                                            <tr>
                                                <td colSpan={table.getAllColumns().length}>
                                                    <TableLoading visible={loading || !store.isFiltered}>
                                                        {noData}
                                                    </TableLoading>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Box>
                                {footer}
                                {lastUpdated}
                            </>
                        )}
                    </Layout>
                </>
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
    LayoutControl: 1,
};

/**
 * Generic column to use when your table needs an accordion (collapsible rows, but only one open at a time).
 */
Table.AccordionColumn = TableAccordionColumn;
/**
 * Generic column to use when your table needs actions on rows
 */
Table.ActionsColumn = TableActionsColumn;
/**
 * A cell wrapper that handles text overflow: ellipsis (default), word wrap, line clamping, or expandable "Show more".
 */
Table.Cell = TableCell;
/**
 * An action to display when a row is selected in the table. Can be displayed as a primary action or menu item.
 */
Table.ActionItem = TableActionItem;
/**
 * Generic column to use when your table needs collapsible rows
 */
Table.CollapsibleColumn = TableCollapsibleColumn;
/**
 * A date range picker integrated with the table store that resets pagination on change.
 */
Table.DateRangePicker = TableDateRangePicker;
/**
 * A search input that filters table rows by matching against any field.
 * The filter value is debounced and resets pagination to the first page on change.
 */
Table.Filter = TableFilter;
/**
 * Container for elements displayed below the table body, typically pagination and per-page controls.
 */
Table.Footer = TableFooter;
/**
 * Container for elements displayed above the table body such as filters, predicates, and actions.
 */
Table.Header = TableHeader;
/**
 * Displays the time of the last data update, automatically refreshing when table data changes.
 */
Table.LastUpdated = TableLastUpdated;
/**
 * Available table layout configurations (e.g., Rows, Cards).
 */
Table.Layouts = TableLayouts;
/**
 * Skeleton overlay displayed while the table data is loading.
 */
Table.Loading = TableLoading;
/**
 * Container displayed when the table has no data to show.
 */
Table.NoData = TableNoData;
/**
 * Page navigation control that syncs with the table store and scrolls to the table on page change.
 */
Table.Pagination = TablePagination;
/**
 * Control allowing users to choose how many results are displayed per page.
 */
Table.PerPage = TablePerPage;
/**
 * A dropdown that filters table data by a predefined set of values and resets pagination on change.
 */
Table.Predicate = TablePredicate;
Table.Toolbar = TableToolbar;

Table.extend = identity as CustomComponentThemeExtend<PlasmaTableFactory>;

export namespace Table {
    export type Props<TData> = TableProps<TData>;
    export type StylesNames = TableStylesNames;
    export type Factory = TableFactory;

    export namespace ActionItem {
        export type Props = TableActionItemProps;
        export type StylesNames = TableActionItemStylesNames;
        export type Factory = TableActionItemFactory;
    }

    export namespace Cell {
        export type Props = TableCellProps;
        export type StylesNames = TableCellStylesNames;
        export type Factory = TableCellFactory;
    }

    export namespace DateRangePicker {
        export type Props = TableDateRangePickerProps;
        export type StylesNames = TableDateRangePickerStylesNames;
        export type Factory = TableDateRangePickerFactory;
    }

    export namespace Filter {
        export type Props = TableFilterProps;
        export type StylesNames = TableFilterStylesNames;
        export type Factory = TableFilterFactory;
    }

    export namespace Footer {
        export type Props = TableFooterProps;
    }

    export namespace Header {
        export type Props = TableHeaderProps;
        export type StylesNames = TableHeaderStylesNames;
        export type Factory = TableHeaderFactory;
    }

    export namespace LastUpdated {
        export type Props = TableLastUpdatedProps;
        export type StylesNames = TableLastUpdatedStylesNames;
        export type Factory = TableLastUpdatedFactory;
    }

    export namespace Loading {
        export type Props = SkeletonProps;
    }

    export namespace NoData {
        export type Props = TableNoDataProps;
    }

    export namespace Pagination {
        export type Props = TablePaginationProps;
    }

    export namespace PerPage {
        export type Props = TablePerPageProps;
    }

    export namespace Predicate {
        export type Props = TablePredicateProps;
        export type StylesNames = TablePredicateStylesNames;
        export type Factory = TablePredicateFactory;
    }

    export namespace Toolbar {
        export type Props = TableToolbarProps;
        export type StylesNames = TableToolbarStylesNames;
        export type Factory = TableToolbarFactory;
    }
}
