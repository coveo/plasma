import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.PerPage', () => {
    it('displays the label', () => {
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                <Table.Footer>
                    <Table.PerPage label="Per page" />
                </Table.Footer>
            </Table>
        );

        expect(screen.getByText('Per page')).toBeVisible();
    });

    it('displays the values', () => {
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                initialState={{pagination: {pageSize: 2}}}
            >
                <Table.Footer>
                    <Table.PerPage label="Per page" values={[2, 7, 12, 17]} />
                </Table.Footer>
            </Table>
        );

        const radios = screen.getAllByRole('radio');
        expect(radios).toHaveLength(4);
        expect(radios[0]).toHaveAccessibleName('2');
        expect(radios[1]).toHaveAccessibleName('7');
        expect(radios[2]).toHaveAccessibleName('12');
        expect(radios[3]).toHaveAccessibleName('17');
    });

    it('calls onMount with the initial value', () => {
        const onMount = jest.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onMount={onMount}
                initialState={{pagination: {pageSize: 100}}}
            >
                <Table.Footer>
                    <Table.PerPage />
                </Table.Footer>
            </Table>
        );

        expect(onMount).toHaveBeenCalledWith(
            expect.objectContaining({pagination: expect.objectContaining({pageSize: 100})})
        );
    });

    it('calls onChange when changing the number of items per page', () => {
        const onChange = jest.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Footer>
                    <Table.PerPage />
                </Table.Footer>
            </Table>
        );

        userEvent.click(screen.queryByRole('radio', {name: '100'}));

        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({pagination: expect.objectContaining({pageSize: 100})})
        );
    });
});
