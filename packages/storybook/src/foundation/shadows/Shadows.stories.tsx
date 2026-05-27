import {createColumnHelper, Table, useTable, type ColumnDef} from '@coveord/plasma-mantine';
import {Box, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';
import classes from './ShadowsTable.module.css';

const meta: Meta = {
    title: '@foundation/Shadows',
    id: 'shadows',
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

type ShadowRowData = {
    name: string;
    value: string;
    variable: string;
};

const shadows: ShadowRowData[] = [
    {
        name: 'xs',
        value: '0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px -0.5px 1px 0px rgba(0, 0, 0, 0.02)',
        variable: 'var(--mantine-shadow-xs)',
    },
    {
        name: 'sm',
        value: '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        variable: 'var(--mantine-shadow-sm)',
    },
    {
        name: 'md',
        value: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        variable: 'var(--mantine-shadow-md)',
    },
    {
        name: 'lg',
        value: '0px 12px 12px -7px rgba(0, 0, 0, 0.04), 0px 28px 23px -7px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        variable: 'var(--mantine-shadow-lg)',
    },
    {
        name: 'xl',
        value: '0px 17px 17px -7px rgba(0, 0, 0, 0.04), 0px 36px 28px -7px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
        variable: 'var(--mantine-shadow-xl)',
    },
];

const columnHelper = createColumnHelper<ShadowRowData>();
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
            <Text size="xs" c="dimmed" ff="monospace" style={{maxWidth: 420}}>
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
        cell: ({row}) => (
            <Box
                style={{
                    width: 120,
                    height: 64,
                    margin: 10,
                    backgroundColor: 'var(--mantine-color-white)',
                    borderRadius: 8,
                    boxShadow: row.original.value,
                }}
            />
        ),
    }),
];

export const Shadows: Story = {
    render: () => {
        const table = useTable<ShadowRowData>({
            initialState: {
                totalEntries: shadows.length,
            },
            enableRowSelection: false,
        });

        return (
            <FoundationWrapper
                title="Shadows"
                description="The Plasma theme defines the following shadow values. Each shadow maps to a CSS variable var(--mantine-shadow-{size})."
            >
                <Table<ShadowRowData>
                    store={table}
                    columns={columns as Array<ColumnDef<ShadowRowData, unknown>>}
                    data={shadows}
                    getRowId={({name}) => name}
                    layoutProps={{
                        classNames: {
                            row: classes.shadowRow,
                            cell: classes.shadowCell,
                        },
                    }}
                />
            </FoundationWrapper>
        );
    },
};
