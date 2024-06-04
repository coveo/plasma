import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.DateRangePicker', () => {
    it('displays the initial dates', async () => {
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]}});
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Header>
                        <Table.DateRangePicker />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: /jan 01, 2022 \- jan 07, 2022/i})).toBeVisible();
    });
});
