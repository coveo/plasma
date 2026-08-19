import {Box, Code, createColumnHelper, Table, useTable} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {CSSVariableValue} from '../CSSVariableValue.js';
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
    size: string;
};

const shadows: ShadowRowData[] = [{size: 'xs'}, {size: 'sm'}, {size: 'md'}, {size: 'lg'}, {size: 'xl'}];

const getVariableName = (size: string): string => `--mantine-shadow-${size}`;

const columnHelper = createColumnHelper<ShadowRowData>();
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
        size: 320,
    }),
    columnHelper.accessor('size', {
        id: 'preview',
        header: '',
        enableSorting: false,
        cell: ({getValue}) => (
            <Box
                style={{
                    width: 120,
                    height: 64,
                    margin: 10,
                    backgroundColor: 'var(--mantine-color-white)',
                    borderRadius: 8,
                    boxShadow: `var(${getVariableName(getValue())})`,
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
                description="The Plasma theme defines the following shadow values. Each shadow maps to a CSS variable --mantine-shadow-{size}."
            >
                <Table<ShadowRowData>
                    store={table}
                    columns={columns}
                    data={shadows}
                    getRowId={({size}) => size}
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
