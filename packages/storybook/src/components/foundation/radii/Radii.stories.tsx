import {createColumnHelper, Table, useTable, type ColumnDef} from '@coveord/plasma-mantine';
import {Box, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Radii',
    id: 'radii',
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

type RadiusRowData = {
    name: string;
    value: string;
    variable: string;
};

const radiiValues: RadiusRowData[] = [
    {name: 'none', value: '0px', variable: '--mantine-radius-none'},
    {name: 'xs', value: '2px', variable: '--mantine-radius-xs'},
    {name: 'sm', value: '4px', variable: '--mantine-radius-sm'},
    {name: 'md', value: '8px', variable: '--mantine-radius-md'},
    {name: 'lg', value: '16px', variable: '--mantine-radius-lg'},
    {name: 'xl', value: '24px', variable: '--mantine-radius-xl'},
    {name: 'xxl', value: '32px', variable: '--mantine-radius-xxl'},
];

const columnHelper = createColumnHelper<RadiusRowData>();
const columns = [
    columnHelper.accessor('name', {
        header: 'Name',
        cell: ({getValue}) => (
            <Text fw={600} ff="monospace" size="sm">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    columnHelper.accessor('variable', {
        header: 'Variable',
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
        cell: ({row}) => (
            <Box
                style={{
                    width: 64,
                    height: 64,
                    backgroundColor: 'var(--mantine-color-blue-6)',
                    borderRadius: row.original.value,
                }}
            />
        ),
    }),
];

export const Radii: Story = {
    render: () => {
        const table = useTable<RadiusRowData>({
            initialState: {
                totalEntries: radiiValues.length,
            },
            enableRowSelection: false,
        });

        return (
            <FoundationWrapper
                title="Radii"
                description="The Plasma theme defines the following border radius values. Each radius maps to a CSS variable --mantine-radius-{size}."
            >
                <Table<RadiusRowData>
                    store={table}
                    columns={columns as Array<ColumnDef<RadiusRowData, unknown>>}
                    data={radiiValues}
                    getRowId={({name}) => name}
                />
            </FoundationWrapper>
        );
    },
};
