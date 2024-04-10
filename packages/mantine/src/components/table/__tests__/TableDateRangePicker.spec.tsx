import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];
const basicTableWithDateRangePicker = (
    <Table
        data={[{name: 'fruit'}, {name: 'vegetable'}]}
        columns={columns}
        initialState={{dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]}}
    >
        <Table.Header>
            <Table.DateRangePicker />
        </Table.Header>
    </Table>
);

describe('Table.DateRangePicker', () => {
    it('displays the initial dates', async () => {
        render(basicTableWithDateRangePicker);

        await waitFor(() =>
            expect(
                screen.getByRole('button', {
                    name: /jan 01, 2022 – jan 07, 2022/i,
                }),
            ).toBeVisible(),
        );
    });
});
