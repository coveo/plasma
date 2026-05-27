import {createColumnHelper, Table, useTable, type ColumnDef} from '@coveord/plasma-mantine';
import {Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Headings',
    id: 'headings',
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

type HeadingRowData = {
    name: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    variable: string;
};

const headings: HeadingRowData[] = [
    {name: 'h1', fontSize: '40px', lineHeight: '1.2', fontWeight: 'var(--coveo-fw-bold)', variable: '-'},
    {name: 'h2', fontSize: '32px', lineHeight: '1.35', fontWeight: 'var(--coveo-fw-normal)', variable: '-'},
    {name: 'h3', fontSize: '24px', lineHeight: '1.33', fontWeight: 'var(--coveo-fw-bold)', variable: '-'},
    {name: 'h4', fontSize: '18px', lineHeight: '1.2', fontWeight: 'var(--coveo-fw-bold)', variable: '-'},
    {name: 'h5', fontSize: '16px', lineHeight: '1.25', fontWeight: 'var(--coveo-fw-bold)', variable: '-'},
    {name: 'h6', fontSize: '12px', lineHeight: '1.33', fontWeight: 'var(--coveo-fw-bold)', variable: '-'},
];

const columnHelper = createColumnHelper<HeadingRowData>();
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
    columnHelper.display({
        id: 'value',
        header: 'value',
        cell: ({row}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {row.original.fontSize} / {row.original.lineHeight} /{' '}
                {row.original.fontWeight.replace('var(--coveo-fw-', '').replace(')', '')}
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
            <Text
                style={{
                    fontSize: row.original.fontSize,
                    lineHeight: row.original.lineHeight,
                    fontWeight: row.original.fontWeight,
                    fontFamily: 'canada-type-gibson, sans-serif',
                    minWidth: 190,
                }}
            >
                The quick brown fox
            </Text>
        ),
    }),
];

export const Headings: Story = {
    render: () => {
        const table = useTable<HeadingRowData>({
            initialState: {
                totalEntries: headings.length,
            },
            enableRowSelection: false,
        });

        return (
            <FoundationWrapper
                title="Headings"
                description="The Plasma theme defines the following heading sizes. The font family for all headings is canada-type-gibson, sans-serif."
            >
                <Table<HeadingRowData>
                    store={table}
                    columns={columns as Array<ColumnDef<HeadingRowData, unknown>>}
                    data={headings}
                    getRowId={({name}) => name}
                />
            </FoundationWrapper>
        );
    },
};
