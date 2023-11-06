import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string; type: 'fruit' | 'vegetable'; colors: string[]};
const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('name', {}),
    columnHelper.accessor('type', {sortDescFirst: true}),
    columnHelper.accessor('colors', {
        cell: (info) => info.getValue().map((color) => <span key={color}>{color}</span>),
        enableSorting: false,
    }),
];

describe('Th', () => {
    it('displays the sort icon for every sortable column', async () => {
        const data: RowData[] = [
            {name: 'apple', type: 'fruit', colors: ['red', 'green']},
            {name: 'potato', type: 'vegetable', colors: ['brown', 'blue', 'yellow']},
        ];
        render(<Table data={data} columns={columns} />);

        const headers = screen.getAllByRole('columnheader');
        expect(headers[0]).toHaveAccessibleName(/name doubleArrowHead/i);
        expect(headers[1]).toHaveAccessibleName(/type doubleArrowHead/i);
    });

    it('changes the sort icon when clicking on a table header', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {name: 'apple', type: 'fruit', colors: ['red', 'green']},
            {name: 'potato', type: 'vegetable', colors: ['brown', 'blue', 'yellow']},
        ];
        const onChange = vi.fn();
        render(<Table data={data} columns={columns} onChange={onChange} />);

        await user.click(screen.getByRole('columnheader', {name: /name doubleArrowHead/i}));
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(expect.objectContaining({sorting: [{id: 'name', desc: false}]}));
        });

        await user.click(screen.getByRole('columnheader', {name: /name arrowUp/i}));
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(expect.objectContaining({sorting: [{id: 'name', desc: true}]}));
        });

        await user.click(screen.getByRole('columnheader', {name: /name arrowDown/i}));
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(expect.objectContaining({sorting: [{id: 'name', desc: false}]}));
        });
    });
});
