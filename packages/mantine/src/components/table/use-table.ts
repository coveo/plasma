import {DatesRangeValue, DateValue} from '@mantine/dates';
import {useDidUpdate} from '@mantine/hooks';
import {type ExpandedState, type PaginationState, type SortingState} from '@tanstack/table-core';
import defaultsDeep from 'lodash.defaultsdeep';
import {Dispatch, SetStateAction, useCallback, useMemo, useState} from 'react';
import {useUrlSyncedState, UseUrlSyncedStateOptions} from './use-url-synced-state';

// Create a deeply optional version of another type
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

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
    dateRange: DatesRangeValue<DateValue>;
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
    initialState?: DeepPartial<TableState<TData>>;
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
    /**
     * Whether to sync the table state with the URL.
     *
     * @default false
     */
    syncWithUrl?: boolean;
}

const defaultOptions: UseTableOptions = {
    enableRowSelection: true,
    enableMultiRowSelection: false,
    forceSelection: false,
    syncWithUrl: false,
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

const serialization = <K extends keyof TableState>(
    input: Pick<UseUrlSyncedStateOptions<TableState[K]>, 'serializer' | 'deserializer'>,
) => Object.freeze(input);

const PAGINATION_SERIALIZATION = serialization<'pagination'>({
    serializer: ({pageIndex, pageSize}) => [
        ['page', (pageIndex + 1).toString()],
        ['pageSize', pageSize.toString()],
    ],
    deserializer: (params, initialState) =>
        defaultsDeep(
            {
                pageIndex: params.get('page') ? Math.max(1, parseInt(params.get('page'), 10)) - 1 : undefined,
                pageSize: params.get('pageSize') ? parseInt(params.get('pageSize'), 10) : undefined,
            },
            initialState,
        ),
});

const SORTING_SERIALIZATION = serialization<'sorting'>({
    serializer: (sorting) => [['sortBy', sorting.map(({id, desc}) => `${id}.${desc ? 'desc' : 'asc'}`).join(',')]],
    deserializer: (params, initialState) => {
        if (!params.has('sortBy')) {
            return initialState;
        }
        const sorts = params.get('sortBy')?.split(',') ?? [];
        return sorts.map((sort) => {
            const [id, order] = sort.split('.');
            return {id, desc: order === 'desc'};
        });
    },
});

const GLOBAL_FILTER_SERIALIZATION = serialization<'globalFilter'>({
    serializer: (filter) => [['filter', filter]],
    deserializer: (params, initialState) => params.get('filter') ?? initialState,
});

const PREDICATES_SERIALIZATION = serialization<'predicates'>({
    serializer: (predicates) => Object.entries(predicates),
    deserializer: (params, initialState) =>
        Object.keys(initialState).reduce(
            (acc, predicateKey) => {
                acc[predicateKey] = params.get(predicateKey) ?? initialState[predicateKey];
                return acc;
            },
            {} as TableState['predicates'],
        ),
});

const LAYOUT_SERIALIZATION = serialization<'layout'>({
    serializer: (_layout) => [['layout', _layout]],
    deserializer: (params, initialState) => params.get('layout') ?? initialState,
});

const DATE_RANGE_SERIALIZATION = serialization<'dateRange'>({
    serializer: ([from, to]) => [
        ['from', from ? new Date(from).toISOString() : '', true],
        ['to', to ? new Date(to).toISOString() : '', true],
    ],
    deserializer: (params, initial) => [
        params.get('from') ? new Date(params.get('from') as string) : initial[0],
        params.get('to') ? new Date(params.get('to') as string) : initial[1],
    ],
});

const COLUMN_VISIBILITY_SERIALIZATION = serialization<'columnVisibility'>({
    serializer: (columns) => [
        [
            'show',
            Object.entries(columns)
                .filter(([, visible]) => visible === true)
                .map(([columnName]) => columnName)
                .join(','),
        ],
        [
            'hide',
            Object.entries(columns)
                .filter(([, visible]) => visible === false)
                .map(([columnName]) => columnName)
                .join(','),
        ],
    ],
    deserializer: (params, initial) => {
        if (!params.has('show') && !params.has('hide')) {
            return initial;
        }
        const visible = params.get('show')?.split(',') ?? [];
        const invisible = params.get('hide')?.split(',') ?? [];
        const columns = {} as TableState['columnVisibility'];
        visible.forEach((column) => {
            columns[column] = true;
        });
        invisible.forEach((column) => {
            columns[column] = false;
        });
        return columns;
    },
});

export const useTable = <TData>(userOptions: UseTableOptions<TData> = {}): TableStore<TData> => {
    const options = defaultsDeep({}, userOptions, defaultOptions) as UseTableOptions<TData>;
    const initialState = defaultsDeep({}, options.initialState, defaultState) as TableState<TData>;
    /**
     * The `useUrlSyncedState` hook defaults to synchronize, but the table wants to default to not synchronize,
     * so always pass the sync option as a resolved boolean value.
     */
    const sync = !!options.syncWithUrl;

    // (Optionally) synced with url
    const [pagination, setPagination] = useUrlSyncedState<TableState<TData>['pagination']>({
        ...PAGINATION_SERIALIZATION,
        initialState: initialState.pagination,
        sync,
    });
    const [sorting, setSorting] = useUrlSyncedState<TableState<TData>['sorting']>({
        ...SORTING_SERIALIZATION,
        initialState: initialState.sorting,
        sync,
    });
    const [globalFilter, setGlobalFilter] = useUrlSyncedState<TableState<TData>['globalFilter']>({
        ...GLOBAL_FILTER_SERIALIZATION,
        initialState: initialState.globalFilter,
        sync,
    });
    const [predicates, setPredicates] = useUrlSyncedState<TableState<TData>['predicates']>({
        ...PREDICATES_SERIALIZATION,
        initialState: initialState.predicates,
        sync,
    });
    const [layout, setLayout] = useUrlSyncedState<TableState<TData>['layout']>({
        ...LAYOUT_SERIALIZATION,
        initialState: initialState.layout,
        sync,
    });
    const [dateRange, setDateRange] = useUrlSyncedState<TableState<TData>['dateRange']>({
        ...DATE_RANGE_SERIALIZATION,
        initialState: initialState.dateRange,
        sync,
    });
    const [columnVisibility, setColumnVisibility] = useUrlSyncedState<TableState<TData>['columnVisibility']>({
        ...COLUMN_VISIBILITY_SERIALIZATION,
        initialState: initialState.columnVisibility,
        sync,
    });

    // unsynced
    const [totalEntries, _setTotalEntries] = useState<TableState<TData>['totalEntries']>(initialState.totalEntries);
    const [unfilteredTotalEntries, setUnfilteredTotalEntries] = useState<TableState<TData>['totalEntries']>(
        initialState.totalEntries,
    );
    const [expanded, setExpanded] = useState<TableState<TData>['expanded']>(initialState.expanded);
    const [rowSelection, setRowSelection] = useState<TableState<TData>['rowSelection']>(initialState.rowSelection);

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
