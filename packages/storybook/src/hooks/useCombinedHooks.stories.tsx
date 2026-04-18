import {Button, MultiSelect, Select, Stack, Text} from '@coveord/plasma-mantine';
import {
    getCreateOptionValue,
    useCreatableData,
    useInfiniteComboboxData,
    useDebouncedSearch,
} from '@coveord/plasma-mantine/hooks';
import {QueryClient, QueryClientProvider, useInfiniteQuery} from '@tanstack/react-query';
import {useForm} from '@mantine/form';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';

interface Item {
    id: string;
    name: string;
}

interface ItemPage {
    items: Item[];
    totalEntries: number;
}

const MAX = 80;
const BATCH_SIZE = 20;

const allItems: Item[] = Array.from({length: MAX}, (_, index) => ({
    id: `item-${index + 1}`,
    name: `Item ${index + 1}`,
}));

const meta: Meta = {
    title: '@hooks/useInfiniteComboboxData + useCreatableData',
    decorators: [
        (Story) => {
            const queryClient = new QueryClient({
                defaultOptions: {queries: {retry: false, refetchOnWindowFocus: false}},
            });
            return (
                <QueryClientProvider client={queryClient}>
                    <Story />
                </QueryClientProvider>
            );
        },
    ],
};
export default meta;
type Story = StoryObj;

const simulateApi = async (page: number, filter: string): Promise<ItemPage> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const filtered = allItems.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
    const start = page * BATCH_SIZE;
    return {
        items: filtered.slice(start, start + BATCH_SIZE),
        totalEntries: filtered.length,
    };
};

export const SelectCreatableInfiniteWithUseState: Story = {
    name: 'Select + useState',
    render: () => {
        const [value, setValue] = useState<string | null>(null);
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['combined-select-state', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<ItemPage, Item>({
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
            getCreateLabel: (searchValue) => `➕ Create "${searchValue}"`,
        });

        return (
            <Stack>
                <Select
                    filter={comboboxProps.filter}
                    scrollAreaProps={comboboxProps.scrollAreaProps}
                    {...creatable}
                    searchable
                    label="Infinite + Creatable Select"
                    placeholder="Search, scroll, or create..."
                    nothingFoundMessage="No items found"
                    value={value}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        setValue(val ? getCreateOptionValue(val) : null);
                    }}
                />
                <Text size="sm" c="dimmed">
                    Selected: <strong>{value ?? 'none'}</strong> | Items loaded: {comboboxProps.data.length} / {MAX}
                </Text>
            </Stack>
        );
    },
};

export const SelectCreatableInfiniteWithUseForm: Story = {
    name: 'Select + useForm',
    render: () => {
        const form = useForm({initialValues: {item: ''}});
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['combined-select-form', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<ItemPage, Item>({
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
            getCreateLabel: (searchValue) => `➕ Create "${searchValue}"`,
        });

        return (
            <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values)))}>
                <Stack>
                    <Select
                        filter={comboboxProps.filter}
                        scrollAreaProps={comboboxProps.scrollAreaProps}
                        {...creatable}
                        searchable
                        label="Infinite + Creatable Select (useForm)"
                        placeholder="Search, scroll, or create..."
                        {...form.getInputProps('item')}
                        onChange={(val) => {
                            creatable.persistCreatedValues(val);
                            form.setFieldValue('item', val ? getCreateOptionValue(val) : '');
                        }}
                    />
                    <Button.Primary type="submit">Submit</Button.Primary>
                    <Text size="sm" c="dimmed">
                        Form value: <strong>{form.values.item || 'none'}</strong>
                    </Text>
                </Stack>
            </form>
        );
    },
};

export const MultiSelectCreatableInfiniteWithUseState: Story = {
    name: 'MultiSelect + useState',
    render: () => {
        const [value, setValue] = useState<string[]>([]);
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['combined-multiselect-state', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<ItemPage, Item>({
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
            <Stack>
                <MultiSelect
                    filter={comboboxProps.filter}
                    scrollAreaProps={comboboxProps.scrollAreaProps}
                    {...creatable}
                    searchable
                    label="Infinite + Creatable MultiSelect"
                    placeholder="Search, scroll, or create..."
                    value={value}
                    onChange={(vals) => {
                        creatable.persistCreatedValues(vals);
                        setValue(vals.map(getCreateOptionValue));
                    }}
                />
                <Text size="sm" c="dimmed">
                    Selected: <strong>{value.length > 0 ? value.join(', ') : 'none'}</strong> | Items loaded:{' '}
                    {comboboxProps.data.length} / {MAX}
                </Text>
            </Stack>
        );
    },
};

export const MultiSelectCreatableInfiniteWithUseForm: Story = {
    name: 'MultiSelect + useForm',
    render: () => {
        const form = useForm<{items: string[]}>({initialValues: {items: []}});
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['combined-multiselect-form', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<ItemPage, Item>({
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
            getCreateLabel: (searchValue) => `➕ Create "${searchValue}"`,
        });

        return (
            <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values)))}>
                <Stack>
                    <MultiSelect
                        filter={comboboxProps.filter}
                        scrollAreaProps={comboboxProps.scrollAreaProps}
                        {...creatable}
                        searchable
                        label="Infinite + Creatable MultiSelect (useForm)"
                        placeholder="Search, scroll, or create..."
                        {...form.getInputProps('items')}
                        onChange={(vals) => {
                            creatable.persistCreatedValues(vals);
                            form.setFieldValue('items', vals.map(getCreateOptionValue));
                        }}
                    />
                    <Button.Primary type="submit">Submit</Button.Primary>
                    <Text size="sm" c="dimmed">
                        Form values:{' '}
                        <strong>{form.values.items.length > 0 ? form.values.items.join(', ') : 'none'}</strong>
                    </Text>
                </Stack>
            </form>
        );
    },
};
