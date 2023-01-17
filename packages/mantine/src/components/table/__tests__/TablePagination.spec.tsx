import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Pagination', () => {
    beforeEach(() => {
        if (!HTMLElement.prototype.scrollIntoView) {
            HTMLElement.prototype.scrollIntoView = () => {
                jest.fn();
            };
        }
    });

    it('displays the number of pages', () => {
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                <Table.Footer>
                    <Table.Pagination totalPages={3} />
                </Table.Footer>
            </Table>
        );

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5);
        expect(buttons[0]).toHaveAccessibleName('previous page');
        expect(buttons[1]).toHaveAccessibleName('1');
        expect(buttons[2]).toHaveAccessibleName('2');
        expect(buttons[3]).toHaveAccessibleName('3');
        expect(buttons[4]).toHaveAccessibleName('next page');
    });

    it('calls onChange when clicking on a page number', async () => {
        const onChange = jest.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Footer>
                    <Table.Pagination totalPages={5} />
                </Table.Footer>
            </Table>
        );

        onChange.mockReset();

        userEvent.click(screen.queryByRole('button', {name: '2'}));

        await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(
                expect.objectContaining({pagination: expect.objectContaining({pageIndex: 1})})
            );
        });
    });
});
