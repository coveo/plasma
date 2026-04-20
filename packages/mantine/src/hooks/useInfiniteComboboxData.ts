import {ComboboxItem, type OptionsFilter} from '@mantine/core';
import type {InfiniteData, UseInfiniteQueryResult} from '@tanstack/react-query';
import {useCallback, useMemo, useRef, type RefObject} from 'react';

import type {UseDebouncedSearchReturn} from './useDebouncedSearch.js';

export interface UseInfiniteComboboxDataOptions<TPage, TItem> {
    /**
     * The infinite query result from `useInfiniteQuery`.
     */
    query: UseInfiniteQueryResult<InfiniteData<TPage>>;
    /**
     * The search state object returned by `useDebouncedSearch`.
     */
    search: UseDebouncedSearchReturn;
    /**
     * Extracts the items array from a single page of the paginated response.
     */
    getPageItems: (page: TPage) => TItem[];
    /**
     * Extracts the unique value (id) from an item.
     */
    getItemValue: (item: TItem) => string;
    /**
     * Extracts the display label from an item.
     */
    getItemLabel: (item: TItem) => string;
    /**
     * Optionally extracts a group name for grouped options.
     */
    getItemGroup?: (item: TItem) => string | undefined;
    /**
     * Pixel threshold from the bottom to trigger fetching the next page.
     * @default 50
     */
    scrollThreshold?: number;
}

/**
 * Props returned by `useInfiniteComboboxData` that can be spread directly
 * onto Mantine `Select` or `MultiSelect` components.
 */
export interface UseInfiniteComboboxDataReturn {
    /**
     * The flattened data array, ready to be passed to `Select` or `MultiSelect` `data` prop.
     */
    data: ComboboxItem[];
    /**
     * The current search value. Pass to `searchValue` prop on Select/MultiSelect.
     */
    searchValue: string;
    /**
     * Callback when the search value changes. Pass to `onSearchChange` prop on Select/MultiSelect.
     */
    onSearchChange: (value: string) => void;
    /**
     * A filter function that returns all options (since filtering is server-side).
     * Pass to the `filter` prop of `Select` or `MultiSelect`.
     */
    filter: OptionsFilter;
    /**
     * Props to spread on the `scrollAreaProps` of `Select` or `MultiSelect`
     * to enable infinite scroll detection.
     */
    scrollAreaProps: {
        viewportRef: RefObject<HTMLDivElement>;
        onScrollPositionChange: (position: {x: number; y: number}) => void;
    };
}

/**
 * Hook that bridges `useInfiniteQuery` with Mantine 8 `Select` and `MultiSelect` components.
 *
 * It handles:
 * - Flattening paginated data into `ComboboxItem[]`
 * - Infinite scroll detection via `scrollAreaProps`
 * - Bypassing client-side filtering (since the server filters)
 *
 * Returns an object of props that can be spread directly onto `Select` or `MultiSelect`.
 * Query-related state (loading, raw items, etc.) is available directly from your `useInfiniteQuery` result.
 *
 * Use together with `useDebouncedSearch` for debounced search.
 *
 * @typeParam TPage - The shape of a single page returned by your API (e.g., `{items: Catalog[], totalCount: number}`).
 * @typeParam TItem - The shape of a single resource/item within a page (e.g., `Catalog`).
 *
 * @example
 * ```tsx
 * // 1. Create search state (before the query)
 * const search = useDebouncedSearch();
 *
 * // 2. Create the infinite query using the debounced search
 * const catalogsQuery = useInfiniteQuery({
 *     queryKey: ['catalogs', search.debouncedValue],
 *     queryFn: ({pageParam}) =>
 *         Platform.catalog.list({page: pageParam, pageSize: 25, filter: search.debouncedValue}),
 *     getNextPageParam: (lastPage, pages) =>
 *         pages.flatMap((p) => p.items).length < lastPage.totalCount ? pages.length : undefined,
 *     placeholderData: keepPreviousData,
 *     initialPageParam: 0,
 * });
 *
 * // 3. Bridge the query to Mantine components
 * const comboboxProps = useInfiniteComboboxData({
 *     query: catalogsQuery,
 *     search,
 *     getPageItems: (page) => page.items,
 *     getItemValue: (catalog) => catalog.id,
 *     getItemLabel: (catalog) => catalog.name,
 * });
 *
 * // 4. Use with Select (single value)
 * <Select
 *     {...comboboxProps}
 *     searchable
 *     value={selectedId}
 *     onChange={setSelectedId}
 *     label="Catalog"
 * />
 *
 * // 5. Or use with MultiSelect (multiple values)
 * <MultiSelect
 *     {...comboboxProps}
 *     searchable
 *     value={selectedIds}
 *     onChange={setSelectedIds}
 *     label="Catalogs"
 * />
 * ```
 */
export const useInfiniteComboboxData = <TPage, TItem>({
    query,
    search,
    getPageItems,
    getItemValue,
    getItemLabel,
    getItemGroup,
    scrollThreshold = 50,
}: UseInfiniteComboboxDataOptions<TPage, TItem>): UseInfiniteComboboxDataReturn => {
    const viewportRef = useRef<HTMLDivElement>(null);

    // Flatten all pages into a single array of items
    const items = useMemo<TItem[]>(() => query.data?.pages.flatMap(getPageItems) ?? [], [query.data, getPageItems]);

    // Transform items into ComboboxItem format
    const data: ComboboxItem[] = useMemo(
        () =>
            items.map((item) => ({
                value: getItemValue(item),
                label: getItemLabel(item),
                ...(getItemGroup ? {group: getItemGroup(item)} : {}),
            })),
        [items, getItemValue, getItemLabel, getItemGroup],
    );

    // Server-side filtering: return all options as-is
    const filter: OptionsFilter = useCallback(({options}) => options, []);

    // Detect scroll near bottom to trigger next page fetch
    const onScrollPositionChange = useCallback(
        ({y}: {x: number; y: number}) => {
            const viewport = viewportRef.current;
            if (!viewport) {
                return;
            }

            const {scrollHeight, clientHeight} = viewport;
            const isNearBottom = scrollHeight - y - clientHeight < scrollThreshold;

            if (isNearBottom && query.hasNextPage && !query.isFetchingNextPage) {
                query.fetchNextPage();
            }
        },
        [query.hasNextPage, query.isFetchingNextPage, query.fetchNextPage, scrollThreshold],
    );

    return {
        data,
        searchValue: search.value,
        onSearchChange: search.setValue,
        filter,
        scrollAreaProps: {
            viewportRef,
            onScrollPositionChange,
        },
    };
};
