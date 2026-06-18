import {createColumnHelper, Table, useTable, type ColumnDef} from '@coveord/plasma-mantine';
import {Box, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Spacings',
    id: 'spacings',
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

type SpacingRowData = {
    name: string;
    value: string;
    variable: string;
};

const spacings: SpacingRowData[] = [
    {name: 'xxs', value: '4px', variable: '--mantine-spacing-xxs'},
    {name: 'xs', value: '8px', variable: '--mantine-spacing-xs'},
    {name: 'sm', value: '16px', variable: '--mantine-spacing-sm'},
    {name: 'md', value: '24px', variable: '--mantine-spacing-md'},
    {name: 'lg', value: '32px', variable: '--mantine-spacing-lg'},
    {name: 'xl', value: '40px', variable: '--mantine-spacing-xl'},
];

const columnHelper = createColumnHelper<SpacingRowData>();
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
                    width: `var(${row.original.variable})`,
                    height: `var(${row.original.variable})`,
                    width: `var(${row.original.variable})`,
                    backgroundColor: 'var(--mantine-color-blue-6)',
                    minWidth: 4,
                }}
            />
        ),
    }),
];

export const Spacings: Story = {
    render: () => {
        const table = useTable<SpacingRowData>({
            initialState: {
                totalEntries: spacings.length,
            },
            enableRowSelection: false,
        });

        return (
            <FoundationWrapper
                title="Spacings"
                description="The Plasma theme defines the following spacing values. Each spacing maps to a CSS variable --mantine-spacing-{size}."
            >
                <Table<SpacingRowData>
                    store={table}
                    columns={columns as Array<ColumnDef<SpacingRowData, unknown>>}
                    data={spacings}
                    getRowId={({name}) => name}
                />
            </FoundationWrapper>
        );
    },
};
