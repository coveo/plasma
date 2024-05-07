import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Predicate', () => {
    it('goes back to the first page when changing the predicate', async () => {
        const user = userEvent.setup();
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageIndex: 1}, totalEntries: 52}});
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Header>
                        <Table.Predicate
                            id="rank"
                            data={[
                                {value: 'first', label: 'First'},
                                {value: 'second', label: 'Second'},
                            ]}
                        />
                    </Table.Header>
                    <Table.Footer>
                        <Table.PerPage />
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);
        expect(screen.getByRole('button', {name: '2', current: 'page'})).toBeVisible();
        await user.click(screen.getByRole('textbox', {name: 'rank'}));
        await user.click(screen.getByRole('option', {name: 'First'}));
        expect(screen.getByRole('button', {name: '1', current: 'page'})).toBeVisible();
    });
});
