import {MultiSelect, Select} from '@mantine/core';
import {useForm} from '@mantine/form';
import {QueryClient, QueryClientProvider, useInfiniteQuery} from '@tanstack/react-query';
import {ReactNode, useState} from 'react';

import {render, screen, userEvent, waitFor} from '@test-utils';
import {Plasmantine} from '../../theme/Plasmantine.js';
import {useInfiniteComboboxData} from '../useInfiniteComboboxData.js';
import {useDebouncedSearch} from '../useDebouncedSearch.js';

interface MockItem {
    id: string;
    name: string;
}

const BATCH_SIZE = 5;
const TOTAL = 12;

const createMockItems = (): MockItem[] =>
    Array.from({length: TOTAL}, (_, i) => ({
        id: `id-${i + 1}`,
        name: `Item ${i + 1}`,
    }));

const allItems = createMockItems();

const queryFnFactory =
    (filterFn?: (items: MockItem[], search: string) => MockItem[]) =>
    ({pageParam, search = ''}: {pageParam?: number; search?: string}) => {
        const filtered = filterFn ? filterFn(allItems, search) : allItems;
        const start = (pageParam ?? 0) * BATCH_SIZE;
        const items = filtered.slice(start, start + BATCH_SIZE);
        return Promise.resolve({items, totalEntries: filtered.length});
    };

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {queries: {retry: false, refetchOnWindowFocus: false}},
    });
    return ({children}: {children: ReactNode}) => (
        <QueryClientProvider client={queryClient}>
            <Plasmantine withCssVariables={false}>{children}</Plasmantine>
        </QueryClientProvider>
    );
};

describe('useInfiniteComboboxData', () => {
    describe('with Select component', () => {
        const InfiniteSelectWithUseState = () => {
            const [value, setValue] = useState<string | null>(null);
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['select-test', search.debouncedValue],
                queryFn: ({pageParam}) => queryFnFactory()({pageParam, search: search.debouncedValue}),
                getNextPageParam: (lastPage, pages) =>
                    pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
                initialPageParam: 0,
            });

            const comboboxProps = useInfiniteComboboxData({
                query,
                search,
                getPageItems: (page) => page.items,
                getItemValue: (item) => item.id,
                getItemLabel: (item) => item.name,
            });

            return (
                <Select
                    {...comboboxProps}
                    searchable
                    label="Item"
                    placeholder="Select an item"
                    value={value}
                    onChange={setValue}
                    nothingFoundMessage="No items found"
                />
            );
        };

        const InfiniteSelectWithUseForm = () => {
            const form = useForm({initialValues: {itemId: ''}});
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['select-form-test', search.debouncedValue],
                queryFn: ({pageParam}) => queryFnFactory()({pageParam, search: search.debouncedValue}),
                getNextPageParam: (lastPage, pages) =>
                    pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
                initialPageParam: 0,
            });

            const comboboxProps = useInfiniteComboboxData({
                query,
                search,
                getPageItems: (page) => page.items,
                getItemValue: (item) => item.id,
                getItemLabel: (item) => item.name,
            });

            return (
                <Select
                    {...comboboxProps}
                    searchable
                    label="Item"
                    {...form.getInputProps('itemId')}
                    onChange={(val) => form.setFieldValue('itemId', val ?? '')}
                />
            );
        };

        describe('with useState', () => {
            it('renders options from the infinite query', async () => {
                const user = userEvent.setup();
                render(<InfiniteSelectWithUseState />, {wrapper: createWrapper()});

                await waitFor(() => {
                    expect(screen.getByRole('textbox')).toBeVisible();
                });

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
                });
            });

            it('selects a value from the dropdown', async () => {
                const user = userEvent.setup();
                render(<InfiniteSelectWithUseState />, {wrapper: createWrapper()});

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
                });

                await user.click(screen.getByRole('option', {name: 'Item 1'}));
                expect(screen.getByRole('textbox')).toHaveValue('Item 1');
            });

            it('displays the first batch of options', async () => {
                const user = userEvent.setup();
                render(<InfiniteSelectWithUseState />, {wrapper: createWrapper()});

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getAllByRole('option').length).toBeGreaterThanOrEqual(1);
                });

                // First batch should have BATCH_SIZE items
                expect(screen.getAllByRole('option')).toHaveLength(BATCH_SIZE);
            });
        });

        describe('with useForm', () => {
            it('updates form value when selecting an option', async () => {
                const user = userEvent.setup();
                render(<InfiniteSelectWithUseForm />, {wrapper: createWrapper()});

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
                });

                await user.click(screen.getByRole('option', {name: 'Item 1'}));
                expect(screen.getByRole('textbox')).toHaveValue('Item 1');
            });
        });
    });

    describe('with MultiSelect component', () => {
        const InfiniteMultiSelectWithUseState = () => {
            const [value, setValue] = useState<string[]>([]);
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['multiselect-test', search.debouncedValue],
                queryFn: ({pageParam}) => queryFnFactory()({pageParam, search: search.debouncedValue}),
                getNextPageParam: (lastPage, pages) =>
                    pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
                initialPageParam: 0,
            });

            const comboboxProps = useInfiniteComboboxData({
                query,
                search,
                getPageItems: (page) => page.items,
                getItemValue: (item) => item.id,
                getItemLabel: (item) => item.name,
            });

            return (
                <MultiSelect
                    {...comboboxProps}
                    searchable
                    label="Items"
                    placeholder="Select items"
                    value={value}
                    onChange={setValue}
                />
            );
        };

        const InfiniteMultiSelectWithUseForm = () => {
            const form = useForm<{itemIds: string[]}>({initialValues: {itemIds: []}});
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['multiselect-form-test', search.debouncedValue],
                queryFn: ({pageParam}) => queryFnFactory()({pageParam, search: search.debouncedValue}),
                getNextPageParam: (lastPage, pages) =>
                    pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
                initialPageParam: 0,
            });

            const comboboxProps = useInfiniteComboboxData({
                query,
                search,
                getPageItems: (page) => page.items,
                getItemValue: (item) => item.id,
                getItemLabel: (item) => item.name,
            });

            return (
                <MultiSelect
                    {...comboboxProps}
                    searchable
                    label="Items"
                    {...form.getInputProps('itemIds')}
                    onChange={(vals) => form.setFieldValue('itemIds', vals)}
                />
            );
        };

        describe('with useState', () => {
            it('renders options from the infinite query', async () => {
                const user = userEvent.setup();
                render(<InfiniteMultiSelectWithUseState />, {wrapper: createWrapper()});

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
                });
            });

            it('selects multiple values', async () => {
                const user = userEvent.setup();
                render(<InfiniteMultiSelectWithUseState />, {wrapper: createWrapper()});

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
                });

                await user.click(screen.getByRole('option', {name: 'Item 1'}));
                await user.click(screen.getByRole('option', {name: 'Item 2'}));

                expect(screen.getByText('Item 1')).toBeVisible();
                expect(screen.getByText('Item 2')).toBeVisible();
            });
        });

        describe('with useForm', () => {
            it('updates form value when selecting options', async () => {
                const user = userEvent.setup();
                render(<InfiniteMultiSelectWithUseForm />, {wrapper: createWrapper()});

                await user.click(screen.getByRole('textbox'));

                await waitFor(() => {
                    expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
                });

                await user.click(screen.getByRole('option', {name: 'Item 1'}));
                expect(screen.getByText('Item 1')).toBeVisible();
            });
        });
    });
});
