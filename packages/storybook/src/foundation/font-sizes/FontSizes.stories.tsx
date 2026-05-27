import {createColumnHelper, Table, useTable, type ColumnDef} from '@coveord/plasma-mantine';
import {Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Font Sizes',
    id: 'font-sizes',
    tags: ['!dev'],
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

type FontSizeRowData = {
    name: string;
    value: string;
    variable: string;
};

const fontSizes: FontSizeRowData[] = [
    {name: 'xxs', value: '10px', variable: 'var(--mantine-font-size-xxs)'},
    {name: 'xs', value: '12px', variable: 'var(--mantine-font-size-xs)'},
    {name: 'sm', value: '14px', variable: 'var(--mantine-font-size-sm)'},
    {name: 'md', value: '16px', variable: 'var(--mantine-font-size-md)'},
    {name: 'lg', value: '18px', variable: 'var(--mantine-font-size-lg)'},
    {name: 'xl', value: '20px', variable: 'var(--mantine-font-size-xl)'},
];

const columnHelper = createColumnHelper<FontSizeRowData>();
const columns = [
    columnHelper.accessor('name', {
        header: 'name',
        cell: ({getValue}) => (
            <Text fw={600} ff="monospace" size="sm">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    columnHelper.accessor('value', {
        header: 'value',
        cell: ({getValue}) => (
            <Text size="sm" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    columnHelper.accessor('variable', {
        header: 'variable',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    columnHelper.display({
        id: 'preview',
        header: '',
        cell: ({row}) => <Text style={{fontSize: row.original.value, minWidth: 190}}>The quick brown fox</Text>,
    }),
];

export const FontSizes: Story = {
    render: () => {
        const table = useTable<FontSizeRowData>({
            initialState: {
                totalEntries: fontSizes.length,
            },
            enableRowSelection: false,
        });

        return (
            <FoundationWrapper
                title="Font Sizes"
                description="The Plasma theme defines the following font size values. Each font size maps to a CSS variable var(--mantine-font-size-{size})."
            >
                <Table<FontSizeRowData>
                    store={table}
                    columns={columns as Array<ColumnDef<FontSizeRowData, unknown>>}
                    data={fontSizes}
                    getRowId={({name}) => name}
                />
            </FoundationWrapper>
        );
    },
};
