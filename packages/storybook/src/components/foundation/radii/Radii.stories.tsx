import {Box, Code, createColumnHelper, Table, useTable} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {CSSVariableValue} from '../CSSVariableValue.js';
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
    size: string;
};

const radiiValues: RadiusRowData[] = [
    {size: 'default'},
    {size: 'none'},
    {size: 'xs'},
    {size: 'sm'},
    {size: 'md'},
    {size: 'lg'},
    {size: 'xl'},
    {size: 'xxl'},
];

const getVariableName = (size: string): string => `--mantine-radius-${size}`;

const columnHelper = createColumnHelper<RadiusRowData>();
const columns = [
    columnHelper.accessor('size', {
        header: 'Size',
        cell: ({getValue}) => <Code fw={600}>{getValue()}</Code>,
        enableSorting: false,
    }),
    columnHelper.accessor('size', {
        header: 'Variable',
        cell: ({getValue}) => <Code>{getVariableName(getValue())}</Code>,
        enableSorting: false,
    }),
    columnHelper.accessor('size', {
        header: 'Value',
        cell: ({getValue}) => <CSSVariableValue name={getVariableName(getValue())} />,
        enableSorting: false,
    }),
    columnHelper.accessor('size', {
        id: 'preview',
        header: '',
        enableSorting: false,
        cell: ({getValue}) => (
            <Box
                style={{
                    width: 64,
                    height: 64,
                    backgroundColor: 'var(--mantine-color-blue-6)',
                    borderRadius: `var(${getVariableName(getValue())})`,
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
                <Table<RadiusRowData> store={table} columns={columns} data={radiiValues} getRowId={({size}) => size} />
            </FoundationWrapper>
        );
    },
};
