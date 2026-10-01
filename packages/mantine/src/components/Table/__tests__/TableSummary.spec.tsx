import {ColumnDef, createColumnHelper, getPaginationRowModel} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];
const data: RowData[] = Array.from({length: 12}, (_, index) => ({name: `row ${index + 1}`}));

const Fixture = ({summaryProps}: {summaryProps?: Table.Summary.Props}) => {
    const store = useTable<RowData>({initialState: {totalEntries: data.length, pagination: {perPage: 5}}});
    return (
        <Table<RowData>
            store={store}
            data={data}
            columns={columns}
            options={{getPaginationRowModel: getPaginationRowModel()}}
        >
            <Table.Footer>
                <Table.Summary {...summaryProps} />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};

describe('Table.Summary', () => {
    it('displays the range of rows displayed out of the total', () => {
        render(<Fixture />);

        expect(screen.getByText('Showing 1-5 out of 12')).toBeVisible();
    });

    it('updates the range when changing page', async () => {
        const user = userEvent.setup();
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: '3'}));

        expect(screen.getByText('Showing 11-12 out of 12')).toBeVisible();
    });

    it('accepts a custom range label', () => {
        render(<Fixture summaryProps={{rangeLabel: ({from, to, total}) => `${from} to ${to} of ${total} rows`}} />);

        expect(screen.getByText('1 to 5 of 12 rows')).toBeVisible();
    });

    it('displays the last update time', () => {
        render(<Fixture />);

        expect(screen.getByText(/Last update:/)).toBeVisible();
        expect(screen.getByRole('timer')).toBeVisible();
    });

    it('does not display the last update time when withLastUpdated is false', () => {
        render(<Fixture summaryProps={{withLastUpdated: false}} />);

        expect(screen.queryByText(/Last update:/)).not.toBeInTheDocument();
    });
});
