import {
    createColumnHelper as createTanStackColumnHelper,
    createCoreRowModel,
    createExpandedRowModel,
    createFacetedMinMaxValues,
    createFacetedRowModel,
    createFacetedUniqueValues,
    createFilteredRowModel,
    createGroupedRowModel,
    createPaginatedRowModel,
    createSortedRowModel,
    stockFeatures,
    tableFeatures,
    type CellContext as TanStackCellContext,
    type ColumnDef as TanStackColumnDef,
    type Header as TanStackHeader,
    type Row as TanStackRow,
    type RowData,
    type Table as TanStackTable,
    type TableFeatures,
    type TableOptions as TanStackTableOptions,
} from '@tanstack/table-core';

type CompatibleRowData<TData> = TData & RowData;

/**
 * Plasma includes all TanStack features to preserve the v8 escape hatch exposed through `TableProps.options`.
 * New v9-only feature configuration remains an implementation detail until Plasma can expose it deliberately.
 */
export const plasmaTableFeatures = tableFeatures({...stockFeatures});

export type PlasmaTableFeatures = typeof plasmaTableFeatures;

export type ColumnDef<TData, TValue = unknown> = TanStackColumnDef<
    PlasmaTableFeatures,
    CompatibleRowData<TData>,
    TValue
>;
export type Row<TData> = TanStackRow<PlasmaTableFeatures, CompatibleRowData<TData>>;
export type Header<TData, TValue = unknown> = TanStackHeader<PlasmaTableFeatures, CompatibleRowData<TData>, TValue>;
export type CellContext<TData, TValue = unknown> = TanStackCellContext<
    PlasmaTableFeatures,
    CompatibleRowData<TData>,
    TValue
>;
export type TanStackTableInstance<TData> = TanStackTable<PlasmaTableFeatures, CompatibleRowData<TData>>;

export interface LegacyTableFeatureOptions {
    getCoreRowModel?: ReturnType<typeof createCoreRowModel>;
    getExpandedRowModel?: ReturnType<typeof createExpandedRowModel>;
    getFacetedMinMaxValues?: ReturnType<typeof createFacetedMinMaxValues>;
    getFacetedRowModel?: ReturnType<typeof createFacetedRowModel>;
    getFacetedUniqueValues?: ReturnType<typeof createFacetedUniqueValues>;
    getFilteredRowModel?: ReturnType<typeof createFilteredRowModel>;
    getGroupedRowModel?: ReturnType<typeof createGroupedRowModel>;
    getPaginationRowModel?: ReturnType<typeof createPaginatedRowModel>;
    getSortedRowModel?: ReturnType<typeof createSortedRowModel>;
    filterFns?: TableFeatures['filterFns'];
    sortingFns?: TableFeatures['sortFns'];
    aggregationFns?: TableFeatures['aggregationFns'];
}

export type TableOptions<TData> = Omit<
    Partial<TanStackTableOptions<PlasmaTableFeatures, CompatibleRowData<TData>>>,
    'features'
> &
    LegacyTableFeatureOptions;

/**
 * Converts the v8 feature and row-model options accepted by Plasma into the v9 `features` option.
 */
export const getPlasmaTableFeatures = (options: LegacyTableFeatureOptions) =>
    tableFeatures({
        ...plasmaTableFeatures,
        coreRowModel: options.getCoreRowModel ?? createCoreRowModel(),
        expandedRowModel: options.getExpandedRowModel,
        facetedMinMaxValues: options.getFacetedMinMaxValues,
        facetedRowModel: options.getFacetedRowModel,
        facetedUniqueValues: options.getFacetedUniqueValues,
        filteredRowModel: options.getFilteredRowModel,
        groupedRowModel: options.getGroupedRowModel,
        paginatedRowModel: options.getPaginationRowModel,
        sortedRowModel: options.getSortedRowModel,
        filterFns: options.filterFns,
        sortFns: options.sortingFns,
        aggregationFns: options.aggregationFns,
    });

/** Matches TanStack Table v8's removed sizing defaults. */
export const defaultColumnSizing = {size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER};

/** Preserves Plasma's v8-shaped public helper. */
export const createColumnHelper = <TData extends RowData>() => createTanStackColumnHelper<PlasmaTableFeatures, TData>();

// Preserve the v8 row-model factory names exposed from Plasma's package barrel.
export const getCoreRowModel = createCoreRowModel;
export const getExpandedRowModel = createExpandedRowModel;
export const getFacetedMinMaxValues = createFacetedMinMaxValues;
export const getFacetedRowModel = createFacetedRowModel;
export const getFacetedUniqueValues = createFacetedUniqueValues;
export const getFilteredRowModel = createFilteredRowModel;
export const getGroupedRowModel = createGroupedRowModel;
export const getPaginationRowModel = createPaginatedRowModel;
export const getSortedRowModel = createSortedRowModel;
