import {Button} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Actions', () => {
    it('displays the actions when the row is selected', () => {
        render(
            <Table<RowData> data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                <Table.Header>
                    <Table.Actions>{(datum: RowData) => <Button>Eat {datum.name}</Button>}</Table.Actions>
                </Table.Header>
            </Table>
        );

        // no row is selected, no actions should be visible
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();

        // select the fruit row
        userEvent.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('button', {name: 'Eat fruit'})).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();

        // select the vegetable row
        userEvent.click(screen.getByRole('cell', {name: 'vegetable'}));
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Eat vegetable'})).toBeVisible();
    });
});
