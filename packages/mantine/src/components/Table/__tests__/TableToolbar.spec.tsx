import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {act, render, screen, userEvent} from '@test-utils';

import dayjs from 'dayjs';
import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Toolbar', () => {
    it('renders Table.Filter without Grid.Col', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.Toolbar>
                        <Table.Filter placeholder="Search toolbar" />
                    </Table.Toolbar>
                </Table>
            );
        };

        // When rendering a Grid.Col outside a Grid Mantine throws an error
        expect(() => render(<Fixture />)).not.toThrow();

        expect(screen.getByPlaceholderText('Search toolbar')).toBeVisible();
    });

    it('renders Table.Predicate without Grid.Col', () => {
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {predicates: {rank: 'ALL'}}});
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.Toolbar>
                        <Table.Predicate
                            id="rank"
                            label="Rank"
                            data={[
                                {value: 'ALL', label: 'All'},
                                {value: 'first', label: 'First'},
                            ]}
                        />
                    </Table.Toolbar>
                </Table>
            );
        };
        // When rendering a Grid.Col outside a Grid Mantine throws an error
        expect(() => render(<Fixture />)).not.toThrow();

        expect(screen.getByRole('textbox', {name: 'Rank'})).toBeVisible();
    });

    it('renders Table.DateRangePicker without Grid.Col', () => {
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {dateRange: [dayjs('2022-01-01').toISOString(), dayjs('2022-01-07').toISOString()]},
            });
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.Toolbar>
                        <Table.DateRangePicker />
                    </Table.Toolbar>
                </Table>
            );
        };

        // When rendering a Grid.Col outside a Grid Mantine throws an error
        expect(() => render(<Fixture />)).not.toThrow();

        expect(screen.getByRole('button', {name: /jan 1, 2022 - jan 7, 2022/i})).toBeVisible();
    });

    it('updates the table state when rendering the Filter in the Toolbar', async () => {
        vi.useFakeTimers();
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageIndex: 1}, totalEntries: 52}});
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Toolbar>
                        <Table.Filter />
                    </Table.Toolbar>
                    <Table.Footer>
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: '2', current: 'page'})).toBeVisible();

        await user.type(screen.getByRole('textbox'), 'veg');
        act(() => {
            vi.advanceTimersByTime(300);
        });

        expect(screen.getByRole('button', {name: '1', current: 'page'})).toBeVisible();
        vi.useRealTimers();
    });

    it('updates the table state when rendering the Predicate in the Toolbar', async () => {
        if (!HTMLElement.prototype.scrollIntoView) {
            HTMLElement.prototype.scrollIntoView = () => {
                vi.fn();
            };
        }
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageIndex: 1}, totalEntries: 52}});
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Toolbar>
                        <Table.Predicate
                            id="rank"
                            label="Rank"
                            data={[
                                {value: 'first', label: 'First'},
                                {value: 'second', label: 'Second'},
                            ]}
                        />
                    </Table.Toolbar>
                    <Table.Footer>
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: '2', current: 'page'})).toBeVisible();
        await user.click(screen.getByRole('textbox', {name: 'Rank'}));
        await user.click(screen.getByRole('option', {name: 'First'}));
        expect(screen.getByRole('button', {name: '1', current: 'page'})).toBeVisible();
    });
});
