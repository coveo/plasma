import {QueryClient, QueryClientProvider, useInfiniteQuery} from '@tanstack/react-query';
import {ReactNode} from 'react';

import {act, renderHook, waitFor} from '@test-utils';
import {useInfiniteComboboxData} from '../useInfiniteComboboxData.js';
import {useDebouncedSearch} from '../useDebouncedSearch.js';

interface MockItem {
    id: string;
    name: string;
}

const BATCH_SIZE = 10;
const TOTAL = 25;

const createMockPages = (): Array<{items: MockItem[]; totalEntries: number}> => {
    const pages: Array<{items: MockItem[]; totalEntries: number}> = [];
    for (let page = 0; page * BATCH_SIZE < TOTAL; page++) {
        const items: MockItem[] = [];
        for (let i = 0; i < BATCH_SIZE && page * BATCH_SIZE + i < TOTAL; i++) {
            const index = page * BATCH_SIZE + i + 1;
            items.push({id: `id-${index}`, name: `Item ${index}`});
        }
        pages.push({items, totalEntries: TOTAL});
    }
    return pages;
};

const mockPages = createMockPages();

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {queries: {retry: false, refetchOnWindowFocus: false}},
    });
    const Wrapper = ({children}: {children: ReactNode}) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    return {Wrapper, queryClient};
};

describe('useInfiniteComboboxData', () => {
    it('flattens paginated data into ComboboxItem[]', async () => {
        const {Wrapper} = createWrapper();

        const {result} = renderHook(
            () => {
                const search = useDebouncedSearch();
                const query = useInfiniteQuery({
                    queryKey: ['test-items'],
                    queryFn: ({pageParam}) => Promise.resolve(mockPages[pageParam ?? 0]),
                    getNextPageParam: (lastPage, pages) =>
                        pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
                    initialPageParam: 0,
                });

                return useInfiniteComboboxData({
                    query,
                    search,
                    getPageItems: (page) => page.items,
                    getItemValue: (item) => item.id,
                    getItemLabel: (item) => item.name,
                });
            },
            {wrapper: Wrapper},
        );

        await waitFor(() => {
            expect(result.current.data.length).toBeGreaterThan(0);
        });

        expect(result.current.data[0]).toEqual({value: 'id-1', label: 'Item 1'});
        expect(result.current.data).toHaveLength(BATCH_SIZE);
    });

    it('returns searchValue and onSearchChange bound to the search object', async () => {
        const {Wrapper} = createWrapper();

        const {result} = renderHook(
            () => {
                const search = useDebouncedSearch();
                const query = useInfiniteQuery({
                    queryKey: ['test-search', search.debouncedValue],
                    queryFn: () => Promise.resolve(mockPages[0]),
                    getNextPageParam: (): undefined => undefined,
                    initialPageParam: 0,
                });

                return {
                    search,
                    infinite: useInfiniteComboboxData({
                        query,
                        search,
                        getPageItems: (page) => page.items,
                        getItemValue: (item) => item.id,
                        getItemLabel: (item) => item.name,
                    }),
                };
            },
            {wrapper: Wrapper},
        );

        expect(result.current.infinite.searchValue).toBe('');

        act(() => {
            result.current.infinite.onSearchChange('hello');
        });

        expect(result.current.search.value).toBe('hello');
        expect(result.current.infinite.searchValue).toBe('hello');
    });

    it('returns a filter function that returns all options (server-side filtering)', async () => {
        const {Wrapper} = createWrapper();

        const {result} = renderHook(
            () => {
                const search = useDebouncedSearch();
                const query = useInfiniteQuery({
                    queryKey: ['test-filter'],
                    queryFn: () => Promise.resolve(mockPages[0]),
                    getNextPageParam: (): undefined => undefined,
                    initialPageParam: 0,
                });

                return useInfiniteComboboxData({
                    query,
                    search,
                    getPageItems: (page) => page.items,
                    getItemValue: (item) => item.id,
                    getItemLabel: (item) => item.name,
                });
            },
            {wrapper: Wrapper},
        );

        await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0));

        const filteredOptions = result.current.filter({
            options: result.current.data,
            search: 'nonexistent',
            limit: Infinity,
        });
        expect(filteredOptions).toEqual(result.current.data);
    });

    it('supports getItemGroup for grouped options', async () => {
        const {Wrapper} = createWrapper();

        const {result} = renderHook(
            () => {
                const search = useDebouncedSearch();
                const query = useInfiniteQuery({
                    queryKey: ['test-grouped'],
                    queryFn: () => Promise.resolve(mockPages[0]),
                    getNextPageParam: (): undefined => undefined,
                    initialPageParam: 0,
                });

                return useInfiniteComboboxData({
                    query,
                    search,
                    getPageItems: (page) => page.items,
                    getItemValue: (item) => item.id,
                    getItemLabel: (item) => item.name,
                    getItemGroup: (item) => (parseInt(item.id.split('-')[1], 10) <= 5 ? 'Group A' : 'Group B'),
                });
            },
            {wrapper: Wrapper},
        );

        await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0));

        expect(result.current.data[0]).toEqual({value: 'id-1', label: 'Item 1', group: 'Group A'});
        expect(result.current.data[9]).toEqual({value: 'id-10', label: 'Item 10', group: 'Group B'});
    });

    it('returns scrollAreaProps with viewportRef and onScrollPositionChange', async () => {
        const {Wrapper} = createWrapper();

        const {result} = renderHook(
            () => {
                const search = useDebouncedSearch();
                const query = useInfiniteQuery({
                    queryKey: ['test-scroll'],
                    queryFn: () => Promise.resolve(mockPages[0]),
                    getNextPageParam: (): undefined => undefined,
                    initialPageParam: 0,
                });

                return useInfiniteComboboxData({
                    query,
                    search,
                    getPageItems: (page) => page.items,
                    getItemValue: (item) => item.id,
                    getItemLabel: (item) => item.name,
                });
            },
            {wrapper: Wrapper},
        );

        expect(result.current.scrollAreaProps).toBeDefined();
        expect(result.current.scrollAreaProps.viewportRef).toBeDefined();
        expect(typeof result.current.scrollAreaProps.onScrollPositionChange).toBe('function');
    });
});
