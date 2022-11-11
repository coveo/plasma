import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Filter', () => {
    it('displays the placeholder', () => {
        const onChange = jest.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Filter placeholder="hello fruits" />
                </Table.Header>
            </Table>
        );

        expect(screen.getByPlaceholderText('hello fruits')).toBeVisible();
    });

    it('calls onChange when typing something in the filter', async () => {
        const user = userEvent.setup({delay: null});
        const onChange = jest.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Filter />
                </Table.Header>
            </Table>
        );

        await user.type(screen.getByRole('textbox'), 'vegetable');

        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({globalFilter: 'vegetable'}));
    });
});
