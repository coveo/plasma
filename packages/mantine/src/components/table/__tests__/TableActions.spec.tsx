import {Button} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Actions', () => {
    it('displays the actions when the row is selected', async () => {
        const user = userEvent.setup({delay: null});
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
        await user.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('button', {name: 'Eat fruit'})).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();

        // select the vegetable row
        await user.click(screen.getByRole('cell', {name: 'vegetable'}));
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Eat vegetable'})).toBeVisible();
    });

    describe('when multi row selection is enabled', () => {
        it('passes down an array of selected rows', async () => {
            const user = userEvent.setup({delay: null});
            const renderSpy = jest.fn().mockImplementation(() => <div />);
            render(
                <Table<RowData>
                    data={[{name: 'fruit'}, {name: 'vegetable'}, {name: 'bread'}]}
                    columns={columns}
                    multiRowSelectionEnabled
                >
                    <Table.Header>
                        <Table.Actions>{renderSpy}</Table.Actions>
                    </Table.Header>
                </Table>
            );
            await user.click(screen.getByRole('cell', {name: 'fruit'}));
            await user.click(screen.getByRole('cell', {name: 'vegetable'}));
            expect(renderSpy).toHaveBeenCalledWith([{name: 'fruit'}, {name: 'vegetable'}]);
        });
    });
});
