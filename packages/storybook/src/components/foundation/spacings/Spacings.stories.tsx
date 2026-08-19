import {Box, Code, createColumnHelper, Table, useTable} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {CSSVariableValue} from '../CSSVariableValue.js';
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
    size: string;
};

const spacings: SpacingRowData[] = [
    {size: 'xxs'},
    {size: 'xs'},
    {size: 'sm'},
    {size: 'md'},
    {size: 'lg'},
    {size: 'xl'},
];

const getVariableName = (size: string): string => `--mantine-spacing-${size}`;

const columnHelper = createColumnHelper<SpacingRowData>();
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
                    width: `var(${getVariableName(getValue())})`,
                    height: `var(${getVariableName(getValue())})`,
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
                <Table<SpacingRowData> store={table} columns={columns} data={spacings} getRowId={({size}) => size} />
            </FoundationWrapper>
        );
    },
};
