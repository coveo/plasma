import {Box} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

const mockData = [
    {
        id: 'a',
        name: 'John Doe',
        body: 'coucou',
    },
    {
        id: 'b',
        name: 'Jane Doe',
        body: 'coucou 2',
    },
] satisfies RowData[];

type RowData = {
    id: string;
    name: string;
    body: string;
};

const columnHelper = createColumnHelper<RowData>();
const baseColumns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
    Table.CollapsibleColumn as ColumnDef<RowData>,
];

describe('TableCollapsibleColumn', () => {
    it('does not expand the rows when the user clicks on any cell, when row selection is active', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={baseColumns}
                    getRowId={(datum: RowData) => datum.id}
                    getRowExpandedContent={(datum: RowData) => (
                        <Box data-testid={`row-content-${datum.id}`}>{datum.body}</Box>
                    )}
                />
            );
        };
        render(<Fixture />);

        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
        await user.click(screen.getByRole('cell', {name: 'Jane Doe'}));

        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
    });

    it('does not expand the rows when clicking on a cell even if row selection is disabled', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({enableRowSelection: false});
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={baseColumns}
                    getRowId={(datum: RowData) => datum.id}
                    getRowExpandedContent={(datum: RowData) => (
                        <Box data-testid={`row-content-${datum.id}`}>{datum.body}</Box>
                    )}
                />
            );
        };
        render(<Fixture />);

        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
        await user.click(screen.getByRole('cell', {name: 'Jane Doe'}));

        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
    });

    it('does not expand the rows on click when multi row selection is enabled but row selection is disabled', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({enableRowSelection: false, enableMultiRowSelection: true});
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={baseColumns}
                    getRowId={(datum: RowData) => datum.id}
                    getRowExpandedContent={(datum: RowData) => (
                        <Box data-testid={`row-content-${datum.id}`}>{datum.body}</Box>
                    )}
                />
            );
        };
        render(<Fixture />);

        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
        await user.click(screen.getByRole('cell', {name: 'Jane Doe'}));

        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
    });

    it('expands the rows according to the initial state', () => {
        const Fixture = ({expanded}: {expanded: string}) => {
            const store = useTable<RowData>({initialState: {expanded: {[expanded]: true}}});
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={baseColumns}
                    getRowId={(datum: RowData) => datum.id}
                    getRowExpandedContent={(datum: RowData) => (
                        <Box data-testid={`row-content-${datum.id}`}>{datum.body}</Box>
                    )}
                />
            );
        };
        const {unmount} = render(<Fixture expanded="b" />);

        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
        expect(screen.queryByTestId('row-content-b')).toBeVisible();

        // unmount and mount a new component to be able to use initialState
        unmount();
        render(<Fixture expanded="a" />);

        expect(screen.queryByTestId('row-content-a')).toBeVisible();
        expect(screen.queryByTestId('row-content-b')).not.toBeVisible();
    });
});
