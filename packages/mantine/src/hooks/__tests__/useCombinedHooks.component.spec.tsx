import {MultiSelect, Select} from '@mantine/core';
import {useForm} from '@mantine/form';
import {QueryClient, QueryClientProvider, useInfiniteQuery} from '@tanstack/react-query';
import {ReactNode, useState} from 'react';

import {render, screen, userEvent, waitFor} from '@test-utils';
import {Plasmantine} from '../../theme/Plasmantine.js';
import {useInfiniteComboboxData} from '../useInfiniteComboboxData.js';
import {useDebouncedSearch} from '../useDebouncedSearch.js';
import {getCreateOptionValue, useCreatableData} from '../useCreatableData.js';

interface MockItem {
    id: string;
    name: string;
}

const BATCH_SIZE = 5;
const TOTAL = 12;

const allItems: MockItem[] = Array.from({length: TOTAL}, (_, i) => ({
    id: `id-${i + 1}`,
    name: `Item ${i + 1}`,
}));

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

describe('useInfiniteComboboxData + useCreatableData combined', () => {
    describe('with Select', () => {
        const InfiniteCreatableSelect = () => {
            const [value, setValue] = useState<string | null>(null);
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['combined-select', search.debouncedValue],
                queryFn: ({pageParam}) => {
                    const filtered = allItems.filter((item) =>
                        item.name.toLowerCase().includes(search.debouncedValue.toLowerCase()),
                    );
                    const start = (pageParam ?? 0) * BATCH_SIZE;
                    return Promise.resolve({
                        items: filtered.slice(start, start + BATCH_SIZE),
                        totalEntries: filtered.length,
                    });
                },
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

            const creatable = useCreatableData({
                data: comboboxProps.data,
                searchValue: comboboxProps.searchValue,
                onSearchChange: comboboxProps.onSearchChange,
                getCreateLabel: (searchInput) => `+ Create "${searchInput}"`,
            });

            return (
                <Select
                    filter={comboboxProps.filter}
                    scrollAreaProps={comboboxProps.scrollAreaProps}
                    {...creatable}
                    searchable
                    label="Item"
                    value={value}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        setValue(val ? getCreateOptionValue(val) : null);
                    }}
                />
            );
        };

        it('renders options from the infinite query', async () => {
            const user = userEvent.setup();
            render(<InfiniteCreatableSelect />, {wrapper: createWrapper()});

            await user.click(screen.getByRole('textbox'));

            await waitFor(() => {
                expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
            });
        });

        it('selects an existing value', async () => {
            const user = userEvent.setup();
            render(<InfiniteCreatableSelect />, {wrapper: createWrapper()});

            await user.click(screen.getByRole('textbox'));

            await waitFor(() => {
                expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
            });

            await user.click(screen.getByRole('option', {name: 'Item 1'}));
            expect(screen.getByRole('textbox')).toHaveValue('Item 1');
        });

        it('shows a create option when typing a value that does not exist', async () => {
            const user = userEvent.setup();
            render(<InfiniteCreatableSelect />, {wrapper: createWrapper()});

            await user.click(screen.getByRole('textbox'));
            await user.type(screen.getByRole('textbox'), 'NewItem');

            await waitFor(() => {
                expect(screen.getByRole('option', {name: /Create "NewItem"/i})).toBeVisible();
            });
        });

        it('creates and selects a new value', async () => {
            const user = userEvent.setup();
            render(<InfiniteCreatableSelect />, {wrapper: createWrapper()});

            await user.click(screen.getByRole('textbox'));
            await user.type(screen.getByRole('textbox'), 'NewItem');

            await waitFor(() => {
                expect(screen.getByRole('option', {name: /Create "NewItem"/i})).toBeVisible();
            });

            await user.click(screen.getByRole('option', {name: /Create "NewItem"/i}));
            expect(screen.getByRole('textbox')).toHaveValue('NewItem');
        });
    });

    describe('with MultiSelect', () => {
        const InfiniteCreatableMultiSelect = () => {
            const [value, setValue] = useState<string[]>([]);
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['combined-multiselect', search.debouncedValue],
                queryFn: ({pageParam}) => {
                    const filtered = allItems.filter((item) =>
                        item.name.toLowerCase().includes(search.debouncedValue.toLowerCase()),
                    );
                    const start = (pageParam ?? 0) * BATCH_SIZE;
                    return Promise.resolve({
                        items: filtered.slice(start, start + BATCH_SIZE),
                        totalEntries: filtered.length,
                    });
                },
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

            const creatable = useCreatableData({
                data: comboboxProps.data,
                searchValue: comboboxProps.searchValue,
                onSearchChange: comboboxProps.onSearchChange,
            });

            return (
                <MultiSelect
                    filter={comboboxProps.filter}
                    scrollAreaProps={comboboxProps.scrollAreaProps}
                    {...creatable}
                    searchable
                    label="Items"
                    value={value}
                    onChange={(vals) => {
                        creatable.persistCreatedValues(vals);
                        setValue(vals.map(getCreateOptionValue));
                    }}
                />
            );
        };

        it('selects existing values and creates new ones', async () => {
            const user = userEvent.setup();
            render(<InfiniteCreatableMultiSelect />, {wrapper: createWrapper()});

            await user.click(screen.getByRole('textbox'));

            await waitFor(() => {
                expect(screen.getByRole('option', {name: 'Item 1'})).toBeVisible();
            });

            // Select existing
            await user.click(screen.getByRole('option', {name: 'Item 1'}));
            expect(screen.getByText('Item 1')).toBeVisible();

            // Create new
            await user.type(screen.getByRole('textbox'), 'Custom');

            await waitFor(() => {
                expect(screen.getByRole('option', {name: /Create "Custom"/i})).toBeVisible();
            });

            await user.click(screen.getByRole('option', {name: /Create "Custom"/i}));

            expect(screen.getByText('Item 1')).toBeVisible();
            expect(screen.getByText('Custom')).toBeVisible();
        });
    });

    describe('with useForm', () => {
        const InfiniteCreatableSelectWithForm = () => {
            const form = useForm({initialValues: {item: ''}});
            const search = useDebouncedSearch();

            const query = useInfiniteQuery({
                queryKey: ['combined-form', search.debouncedValue],
                queryFn: ({pageParam}) => {
                    const start = (pageParam ?? 0) * BATCH_SIZE;
                    return Promise.resolve({
                        items: allItems.slice(start, start + BATCH_SIZE),
                        totalEntries: TOTAL,
                    });
                },
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

            const creatable = useCreatableData({
                data: comboboxProps.data,
                searchValue: comboboxProps.searchValue,
                onSearchChange: comboboxProps.onSearchChange,
            });

            return (
                <Select
                    filter={comboboxProps.filter}
                    scrollAreaProps={comboboxProps.scrollAreaProps}
                    {...creatable}
                    searchable
                    label="Item"
                    {...form.getInputProps('item')}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        form.setFieldValue('item', val ? getCreateOptionValue(val) : '');
                    }}
                />
            );
        };

        it('creates a new value and updates form state', async () => {
            const user = userEvent.setup();
            render(<InfiniteCreatableSelectWithForm />, {wrapper: createWrapper()});

            await user.click(screen.getByRole('textbox'));
            await user.type(screen.getByRole('textbox'), 'NewEntry');

            await waitFor(() => {
                expect(screen.getByRole('option', {name: /Create "NewEntry"/i})).toBeVisible();
            });

            await user.click(screen.getByRole('option', {name: /Create "NewEntry"/i}));
            expect(screen.getByRole('textbox')).toHaveValue('NewEntry');
        });
    });
});
