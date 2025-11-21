import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

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
    it('displays the sort icon for every sortable column', () => {
        const data: RowData[] = [
            {name: 'apple', type: 'fruit', colors: ['red', 'green']},
            {name: 'potato', type: 'vegetable', colors: ['brown', 'blue', 'yellow']},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={data} columns={columns} />;
        };
        render(<Fixture />);

        const headers = screen.getAllByRole('columnheader');
        expect(headers[0]).toHaveAccessibleName(/nameDoubleArrowHead/i);
        expect(headers[1]).toHaveAccessibleName(/typeDoubleArrowHead/i);
    });

    it('changes the sort icon when clicking on a table header', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {name: 'apple', type: 'fruit', colors: ['red', 'green']},
            {name: 'potato', type: 'vegetable', colors: ['brown', 'blue', 'yellow']},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={data} columns={columns} />;
        };
        render(<Fixture />);

        const unsortedRowHeader = screen.getByRole('columnheader', {name: /nameDoubleArrowHead/i});
        expect(unsortedRowHeader).toBeVisible();
        await user.click(unsortedRowHeader);

        const sortedAscRowHeader = screen.getByRole('columnheader', {name: /nameArrowUp/i});
        expect(sortedAscRowHeader).toBeVisible();
        await user.click(sortedAscRowHeader);

        const sortedDescRowHeader = screen.getByRole('columnheader', {name: /nameArrowDown/i});
        expect(sortedDescRowHeader).toBeVisible();
        await user.click(sortedDescRowHeader);
    });

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the sort column and direction in the url', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {name: 'apple', type: 'fruit', colors: ['red', 'green']},
                {name: 'potato', type: 'vegetable', colors: ['brown', 'blue', 'yellow']},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({syncWithUrl: true});
                return <Table store={store} data={data} columns={columns} />;
            };
            render(<Fixture />);
            await user.click(screen.getByRole('columnheader', {name: /nameDoubleArrowHead/i}));
            expect(window.location.search).toBe('?sortBy=name.asc');
        });

        it('determines the initial visible columns from the url', () => {
            window.history.replaceState(null, '', '?sortBy=name.desc');
            const data: RowData[] = [
                {name: 'apple', type: 'fruit', colors: ['red', 'green']},
                {name: 'potato', type: 'vegetable', colors: ['brown', 'blue', 'yellow']},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({syncWithUrl: true});
                return <Table store={store} data={data} columns={columns} />;
            };
            render(<Fixture />);
            expect(screen.getByRole('columnheader', {name: /nameArrowDown/i})).toBeVisible();
        });
    });
});
