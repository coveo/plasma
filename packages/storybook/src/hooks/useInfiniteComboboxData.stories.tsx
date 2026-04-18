import {MultiSelect, Select, Stack, Text} from '@coveord/plasma-mantine';
import {useInfiniteComboboxData, useDebouncedSearch} from '@coveord/plasma-mantine/hooks';
import {QueryClient, QueryClientProvider, useInfiniteQuery} from '@tanstack/react-query';
import {useForm} from '@mantine/form';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';

interface Organization {
    id: string;
    displayName: string;
}

interface OrganizationPage {
    items: Organization[];
    totalEntries: number;
}

const MAX = 120;
const BATCH_SIZE = 20;

const allOrgs: Organization[] = Array.from({length: MAX}, (_, index) => ({
    id: `org-${index + 1}`,
    displayName: `Organization ${index + 1}`,
}));

const meta: Meta = {
    title: '@hooks/useInfiniteComboboxData',
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

const simulateApi = async (page: number, filter: string): Promise<OrganizationPage> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const filtered = allOrgs.filter((org) => org.displayName.toLowerCase().includes(filter.toLowerCase()));
    const start = page * BATCH_SIZE;
    return {
        items: filtered.slice(start, start + BATCH_SIZE),
        totalEntries: filtered.length,
    };
};

export const SelectWithUseState: Story = {
    name: 'Select + useState',
    render: () => {
        const [value, setValue] = useState<string | null>(null);
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['infinite-select-state', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<OrganizationPage, Organization>({
            query,
            search,
            getPageItems: (page) => page.items,
            getItemValue: (org) => org.id,
            getItemLabel: (org) => org.displayName,
        });

        return (
            <Stack>
                <Select
                    {...comboboxProps}
                    searchable
                    label="Select an organization"
                    placeholder="Search organizations..."
                    nothingFoundMessage="No organizations found"
                    value={value}
                    onChange={setValue}
                />
                <Text size="sm" c="dimmed">
                    Selected: <strong>{value ?? 'none'}</strong> | Items loaded: {comboboxProps.data.length} / {MAX}
                </Text>
            </Stack>
        );
    },
};

export const SelectWithUseForm: Story = {
    name: 'Select + useForm',
    render: () => {
        const form = useForm({initialValues: {orgId: ''}});
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['infinite-select-form', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<OrganizationPage, Organization>({
            query,
            search,
            getPageItems: (page) => page.items,
            getItemValue: (org) => org.id,
            getItemLabel: (org) => org.displayName,
        });

        return (
            <Stack>
                <Select
                    {...comboboxProps}
                    searchable
                    clearable
                    label="Select an organization (useForm)"
                    placeholder="Search organizations..."
                    nothingFoundMessage="No organizations found"
                    {...form.getInputProps('orgId')}
                    onChange={(val) => form.setFieldValue('orgId', val ?? '')}
                />
                <Text size="sm" c="dimmed">
                    Form value: <strong>{form.values.orgId || 'none'}</strong>
                </Text>
            </Stack>
        );
    },
};

export const MultiSelectWithUseState: Story = {
    name: 'MultiSelect + useState',
    render: () => {
        const [value, setValue] = useState<string[]>([]);
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['infinite-multiselect-state', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<OrganizationPage, Organization>({
            query,
            search,
            getPageItems: (page) => page.items,
            getItemValue: (org) => org.id,
            getItemLabel: (org) => org.displayName,
        });

        return (
            <Stack>
                <MultiSelect
                    {...comboboxProps}
                    searchable
                    label="Select organizations"
                    placeholder="Search organizations..."
                    value={value}
                    onChange={setValue}
                />
                <Text size="sm" c="dimmed">
                    Selected: <strong>{value.length > 0 ? value.join(', ') : 'none'}</strong> | Items loaded:{' '}
                    {comboboxProps.data.length} / {MAX}
                </Text>
            </Stack>
        );
    },
};

export const MultiSelectWithUseForm: Story = {
    name: 'MultiSelect + useForm',
    render: () => {
        const form = useForm<{orgIds: string[]}>({initialValues: {orgIds: []}});
        const search = useDebouncedSearch();

        const query = useInfiniteQuery({
            queryKey: ['infinite-multiselect-form', search.debouncedValue],
            queryFn: ({pageParam}) => simulateApi(pageParam ?? 0, search.debouncedValue),
            getNextPageParam: (lastPage, pages) =>
                pages.flatMap((page) => page.items).length < lastPage.totalEntries ? pages.length : undefined,
            initialPageParam: 0,
        });

        const comboboxProps = useInfiniteComboboxData<OrganizationPage, Organization>({
            query,
            search,
            getPageItems: (page) => page.items,
            getItemValue: (org) => org.id,
            getItemLabel: (org) => org.displayName,
        });

        return (
            <Stack>
                <MultiSelect
                    {...comboboxProps}
                    searchable
                    label="Select organizations (useForm)"
                    placeholder="Search organizations..."
                    {...form.getInputProps('orgIds')}
                    onChange={(vals) => form.setFieldValue('orgIds', vals)}
                />
                <Text size="sm" c="dimmed">
                    Form values:{' '}
                    <strong>{form.values.orgIds.length > 0 ? form.values.orgIds.join(', ') : 'none'}</strong>
                </Text>
            </Stack>
        );
    },
};
