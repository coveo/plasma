import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, within} from '@test-utils';

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

    it('goes back to the first page when changing the filter', async () => {
        const user = userEvent.setup({delay: null});
        const onChange = jest.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Filter />
                </Table.Header>
                <Table.Footer>
                    <Table.PerPage />
                    <Table.Pagination totalPages={2} />
                </Table.Footer>
            </Table>
        );

        await user.type(screen.getByRole('textbox'), 'veg');

        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({globalFilter: 'veg', pagination: {pageIndex: 0, pageSize: 50}})
        );
    });

    describe('when multi row selection is enabled', () => {
        it('does not unselect rows that get filtered out', async () => {
            const user = userEvent.setup({delay: null});
            const onChange = jest.fn();
            render(
                <Table
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    columns={columns}
                    onChange={onChange}
                    multiRowSelectionEnabled
                >
                    <Table.Header>
                        <Table.Filter />
                    </Table.Header>
                </Table>
            );

            await user.click(
                within(screen.getByRole('row', {name: /fruit/i})).getByRole('checkbox', {name: /select row/i})
            );
            await user.type(screen.getByRole('textbox'), 'veg');
            expect(screen.getByRole('button', {name: /1 selected/i})).toBeInTheDocument();
        });
    });
});
