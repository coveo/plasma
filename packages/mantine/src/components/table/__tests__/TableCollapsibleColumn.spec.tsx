import {Box} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';
import {waitFor} from '@testing-library/react';
import {Table} from '../Table';
import {useTable} from '../use-table';

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
    it('expands the rows when the user clicks on a cell', async () => {
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

        await waitFor(() => expect(screen.getByTestId('row-content-b')).toBeVisible());
        expect(screen.queryByTestId('row-content-a')).not.toBeVisible();
        expect(screen.getByTestId('row-content-b')).toHaveTextContent('coucou 2');
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
