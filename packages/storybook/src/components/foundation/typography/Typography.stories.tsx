import {createColumnHelper, Table, useTable, type ColumnDef, Stack, Text, Header} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FoundationWrapper} from '../FoundationWrapper.js';

const meta: Meta = {
    title: '@foundation/Typography',
    id: 'typography',
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
};

const headings: HeadingRowData[] = [
    {
        name: 'h1',
        fontSize: '--mantine-h1-font-size',
        lineHeight: '--mantine-h1-line-height',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'h2',
        fontSize: '--mantine-h2-font-size',
        lineHeight: '--mantine-h2-line-height',
        fontWeight: '--coveo-fw-normal',
    },
    {
        name: 'h3',
        fontSize: '--mantine-h3-font-size',
        lineHeight: '--mantine-h3-line-height',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'h4',
        fontSize: '--mantine-h4-font-size',
        lineHeight: '--mantine-h4-line-height',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'h5',
        fontSize: '--mantine-h5-font-size',
        lineHeight: '--mantine-h5-line-height',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'h6',
        fontSize: '--mantine-h6-font-size',
        lineHeight: '--mantine-h6-line-height',
        fontWeight: '--coveo-fw-bold',
    },
];

const headingColumnHelper = createColumnHelper<HeadingRowData>();
const headingColumns = [
    headingColumnHelper.accessor('name', {
        header: 'Name',
        cell: ({getValue}) => (
            <Text fw={600} ff="monospace" size="sm">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    headingColumnHelper.accessor('fontSize', {
        header: 'FontSize',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    headingColumnHelper.accessor('lineHeight', {
        header: 'LineHeight',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    headingColumnHelper.accessor('fontWeight', {
        header: 'FontWeight',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    headingColumnHelper.display({
        id: 'preview',
        header: '',
        cell: ({row}) => (
            <Text
                style={{
                    fontSize: `var(${row.original.fontSize})`,
                    lineHeight: `var(${row.original.lineHeight})`,
                    fontWeight: `var(${row.original.fontWeight})`,
                    fontFamily: 'canada-type-gibson, sans-serif',
                    minWidth: 190,
                }}
            >
                Headings
            </Text>
        ),
    }),
];

type TextSizeRowData = {
    name: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
};

const textSizes: TextSizeRowData[] = [
    {
        name: 'xxs',
        fontSize: '--mantine-font-size-xxs',
        lineHeight: '--mantine-line-height-xxs',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'xs',
        fontSize: '--mantine-font-size-xs',
        lineHeight: '--mantine-line-height-xs',
        fontWeight: '--coveo-fw-normal',
    },
    {
        name: 'sm',
        fontSize: '--mantine-font-size-sm',
        lineHeight: '--mantine-line-height-sm',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'md',
        fontSize: '--mantine-font-size-md',
        lineHeight: '--mantine-line-height-md',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'lg',
        fontSize: '--mantine-font-size-lg',
        lineHeight: '--mantine-line-height-lg',
        fontWeight: '--coveo-fw-bold',
    },
    {
        name: 'xl',
        fontSize: '--mantine-font-size-xl',
        lineHeight: '--mantine-line-height-xl',
        fontWeight: '--coveo-fw-bold',
    },
];

const textSizeColumnHelper = createColumnHelper<TextSizeRowData>();
const textSizeColumns = [
    textSizeColumnHelper.accessor('name', {
        header: 'Name',
        cell: ({getValue}) => (
            <Text fw={600} ff="monospace" size="sm">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    textSizeColumnHelper.accessor('fontSize', {
        header: 'FontSize',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    textSizeColumnHelper.accessor('lineHeight', {
        header: 'LineHeight',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    textSizeColumnHelper.accessor('fontWeight', {
        header: 'FontWeight',
        cell: ({getValue}) => (
            <Text size="xs" c="dimmed" ff="monospace">
                {getValue()}
            </Text>
        ),
        enableSorting: false,
    }),
    textSizeColumnHelper.display({
        id: 'preview',
        header: '',
        cell: ({row}) => (
            <Text size={row.original.name as any} style={{minWidth: 190}}>
                Text Sizes
            </Text>
        ),
    }),
];

export const Typography: Story = {
    render: () => {
        const headingTable = useTable<HeadingRowData>({
            initialState: {
                totalEntries: headings.length,
            },
            enableRowSelection: false,
        });

        const textSizeTable = useTable<TextSizeRowData>({
            initialState: {
                totalEntries: textSizes.length,
            },
            enableRowSelection: false,
        });

        return (
            <FoundationWrapper
                title="Typography"
                description="Typography tokens include font sizes and heading presets used across Plasma components."
            >
                <Stack gap="xl">
                    <Stack>
                        <Header
                            variant="secondary"
                            description="The Plasma theme defines the following heading sizes. The font family for all headings is canada-type-gibson, sans-serif."
                        >
                            Headings
                        </Header>
                        <Table<HeadingRowData>
                            store={headingTable}
                            columns={headingColumns as Array<ColumnDef<HeadingRowData, unknown>>}
                            data={headings}
                            getRowId={({name}) => name}
                        />
                    </Stack>

                    <Stack>
                        <Header
                            variant="secondary"
                            description="The Text component supports the following size values: xxs, xs, sm, md, lg, and xl."
                        >
                            Text Sizes
                        </Header>
                        <Table<TextSizeRowData>
                            store={textSizeTable}
                            columns={textSizeColumns as Array<ColumnDef<TextSizeRowData, unknown>>}
                            data={textSizes}
                            getRowId={({name}) => name}
                        />
                    </Stack>
                </Stack>
            </FoundationWrapper>
        );
    },
};
