import {useDidUpdate} from '@mantine/hooks';
import {type ExpandedState, type PaginationState, type SortingState} from '@tanstack/table-core';
import defaultsDeep from 'lodash.defaultsdeep';
import {Dispatch, SetStateAction, useCallback, useMemo, useState} from 'react';
import {type DateRangePickerValue} from '../date-range-picker';

// Create a deeply optional version of another type
type PartialDeep<T> = T extends object
    ? {
          [P in keyof T]?: PartialDeep<T[P]>;
      }
    : T;

export interface TableState<TData = unknown> {
    /**
     * Current pagination state
     *
     * @default { pageIndex: 0, pageSize: 50 }
     */
    pagination: PaginationState;
    /**
     * Total number of entries in the table.
     * This number is used to calculate the number of pages in the pagination.
     * When null, the number of pages is calculated using the current data length.
     *
     * @default null
     */
    totalEntries: number | null;
    /**
     * Current sorting state
     *
     * @default []
     */
    sorting: SortingState;
    /**
     * Current global filter value
     *
     * @default ''
     */
    globalFilter: string;

    /**
     * Current expanded state
     *
     * @default {}
     */
    expanded: ExpandedState;
    /**
     * Predicates and their current value
     *
     * @default {}
     */
    predicates: Record<string, string>;
    /**
     * Layout currently selected. When null, the first layout is used.
     *
     * @default null
     */
    layout: string | null;
    /**
     * Currently selected date range
     *
     * @default [null, null]
     */
    dateRange: DateRangePickerValue;
    /**
     * Currently selected rows
     *
     * @default {}
     */
    rowSelection: Record<string, TData>;
    /**
     * Columns that are currently visible
     *
     * @default {}
     */
    columnVisibility: Record<string, boolean>;
}

export interface TableStore<TData = unknown> {
    /**
     * Current state of the table.
     */
    state: TableState<TData>;
    /**
     * Allows to change the pagination state.
     */
    setPagination: Dispatch<SetStateAction<TableState<TData>['pagination']>>;
    /**
     * Allows to change the total number of entries.
     */
    setTotalEntries: Dispatch<SetStateAction<TableState<TData>['totalEntries']>>;
    /**
     * Allows to change the sorting state.
     */
    setSorting: Dispatch<SetStateAction<TableState<TData>['sorting']>>;
    /**
     * Allows to change the global filter value.
     */
    setGlobalFilter: Dispatch<SetStateAction<TableState<TData>['globalFilter']>>;
    /**
     * Allows to change the rows expanded state.
     */
    setExpanded: Dispatch<SetStateAction<TableState<TData>['expanded']>>;
    /**
     * Allows to change the predicates values.
     */
    setPredicates: Dispatch<SetStateAction<TableState<TData>['predicates']>>;
    /**
     * Allows to change the selected layout.
     */
    setLayout: Dispatch<SetStateAction<TableState<TData>['layout']>>;
    /**
     * Allows to change the selected date range.
     */
    setDateRange: Dispatch<SetStateAction<TableState<TData>['dateRange']>>;
    /**
     * Allows to change the current row selection.
     */
    setRowSelection: Dispatch<SetStateAction<TableState<TData>['rowSelection']>>;
    /**
     * Allows to change the visible columns.
     */
    setColumnVisibility: Dispatch<SetStateAction<TableState<TData>['columnVisibility']>>;
    /**
     * Whether the table is currently filtered.
     */
    isFiltered: boolean;
    /**
     * Whether the table has data when unfiltered.
     *
     * This is derived from the totalEntries so make sure you set that number correctly, even if you're using a client side table.
     */
    isVacant: boolean;
    /**
     * Clear currently applied filters.
     */
    clearFilters: () => void;
    /**
     * Deselects all currently selected rows.
     */
    clearRowSelection: () => void;
    /**
     * Get currently selected rows.
     */
    getSelectedRows: () => TData[];
    /**
     * Get currently selected row
     */
    getSelectedRow: () => TData | null;
    /**
     * Whether the user can select multiple rows at the same time.
     */
    multiRowSelectionEnabled: boolean;
    /**
     * Whether rows can be selected.
     */
    rowSelectionEnabled: boolean;
    /**
     * Whether row selection is forced.
     */
    rowSelectionForced: boolean;
}

export interface UseTableOptions<TData = unknown> {
    /**
     * Initial state of the table.
     */
    initialState?: PartialDeep<TableState<TData>>;
    /**
     * Whether rows can be selected.
     *
     * @default true
     */
    enableRowSelection?: boolean;
    /**
     * Whether multiple rows can be selected at the same time.
     *
     * @default false
     */
    enableMultiRowSelection?: boolean;
    /**
     * Forces the user to always have one row selected.
     * When activating that setting, a good practice is to have a row already selected in the initial state.
     *
     * @default false
     */
    forceSelection?: boolean;
}

const defaultOptions: UseTableOptions = {
    enableRowSelection: true,
    enableMultiRowSelection: false,
    forceSelection: false,
};

const defaultState: Partial<TableState> = {
    pagination: {
        pageIndex: 0,
        pageSize: 50,
    },
    totalEntries: null,
    sorting: [],
    globalFilter: '',
    predicates: {},
    layout: null,
    dateRange: [null, null],
    rowSelection: {},
    columnVisibility: {},
};

export const useTable = <TData>(userOptions: UseTableOptions<TData> = {}): TableStore<TData> => {
    const options = defaultsDeep({}, userOptions, defaultOptions) as UseTableOptions<TData>;
    const initialState = defaultsDeep({}, options.initialState, defaultState) as TableState<TData>;

    const [pagination, setPagination] = useState<TableState<TData>['pagination']>(initialState.pagination);
    const [totalEntries, _setTotalEntries] = useState<TableState<TData>['totalEntries']>(initialState.totalEntries);
    const [unfilteredTotalEntries, setUnfilteredTotalEntries] = useState<TableState<TData>['totalEntries']>(
        initialState.totalEntries,
    );
    const [sorting, setSorting] = useState<TableState<TData>['sorting']>(initialState.sorting);
    const [globalFilter, setGlobalFilter] = useState<TableState<TData>['globalFilter']>(initialState.globalFilter);
    const [expanded, setExpanded] = useState<TableState<TData>['expanded']>(initialState.expanded);
    const [predicates, setPredicates] = useState<TableState<TData>['predicates']>(initialState.predicates);
    const [layout, setLayout] = useState<TableState<TData>['layout']>(initialState.layout);
    const [dateRange, setDateRange] = useState<TableState<TData>['dateRange']>(initialState.dateRange);
    const [rowSelection, setRowSelection] = useState<TableState<TData>['rowSelection']>(initialState.rowSelection);
    const [columnVisibility, setColumnVisibility] = useState<TableState<TData>['columnVisibility']>(
        initialState.columnVisibility,
    );

    const isFiltered =
        !!globalFilter ||
        Object.keys(predicates).some((predicate) => !!predicates[predicate]) ||
        !!dateRange?.[0] ||
        !!dateRange?.[1];

    const isVacant = unfilteredTotalEntries === 0;

    const setTotalEntries: typeof _setTotalEntries = useCallback(
        (updater) => {
            _setTotalEntries((old) => {
                const newTotalEntries = updater instanceof Function ? updater(old) : updater;
                if (!isFiltered) {
                    setUnfilteredTotalEntries(newTotalEntries);
                }
                return newTotalEntries;
            });
        },
        [isFiltered],
    );

    const clearFilters = useCallback(() => {
        setPredicates(initialState.predicates);
        setGlobalFilter('');
    }, []);

    const clearRowSelection = useCallback(() => {
        setRowSelection({});
    }, []);

    const getSelectedRows = useCallback(() => Object.values(rowSelection), [rowSelection]);

    const getSelectedRow = () => getSelectedRows()[0] ?? null;

    useDidUpdate(() => {
        if (!options.enableMultiRowSelection) {
            clearRowSelection();
        }
    }, [globalFilter, pagination, sorting, dateRange, predicates]);

    const state = useMemo(
        () => ({
            pagination,
            totalEntries,
            sorting,
            globalFilter,
            expanded,
            predicates,
            layout,
            dateRange,
            rowSelection,
            columnVisibility,
        }),
        [
            pagination,
            totalEntries,
            sorting,
            globalFilter,
            expanded,
            predicates,
            layout,
            dateRange,
            rowSelection,
            columnVisibility,
        ],
    );

    return {
        state,
        setPagination,
        setTotalEntries,
        setSorting,
        setGlobalFilter,
        setExpanded,
        setPredicates,
        setLayout,
        setDateRange,
        setRowSelection,
        setColumnVisibility,
        isFiltered,
        isVacant,
        clearFilters,
        clearRowSelection,
        getSelectedRows,
        getSelectedRow,
        rowSelectionEnabled: options.enableRowSelection,
        rowSelectionForced: options.forceSelection,
        multiRowSelectionEnabled: options.enableMultiRowSelection,
    };
};
