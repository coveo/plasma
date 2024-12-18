import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {act, render, screen, userEvent, within} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Filter', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it('displays the placeholder', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Header>
                        <Table.Filter placeholder="hello fruits" />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByPlaceholderText('hello fruits')).toBeVisible();
    });

    it('goes back to the first page when changing the filter', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageIndex: 1}, totalEntries: 52}});
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Header>
                        <Table.Filter />
                    </Table.Header>
                    <Table.Footer>
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: '1'})).toBeVisible();
        expect(screen.getByRole('button', {name: '2', current: 'page'})).toBeVisible();

        await user.type(screen.getByRole('textbox'), 'veg');
        act(() => {
            // 300 ms debounce on TableFilter input
            vi.advanceTimersByTime(300);
        });

        expect(screen.getByRole('button', {name: '1', current: 'page'})).toBeVisible();
        expect(screen.getByRole('button', {name: '2'})).toBeVisible();
    });

    it('clears the filter when clicking on the cross icon', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {globalFilter: 'foo'}});
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Header>
                        <Table.Filter placeholder="hello fruits" />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);
        expect(screen.getByRole('textbox')).toHaveValue('foo');
        await user.click(screen.getByRole('button', {name: /cross/i}));
        expect(screen.getByRole('textbox')).toHaveValue('');
    });

    describe('when multi row selection is enabled', () => {
        it('does not unselect rows that get filtered out', async () => {
            const user = userEvent.setup({delay: null});
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                        <Table.Header>
                            <Table.Filter />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);

            await user.click(
                within(screen.getByRole('row', {name: /fruit/i})).getByRole('checkbox', {name: /select row/i}),
            );
            await user.type(screen.getByRole('textbox'), 'veg');
            expect(screen.getByRole('button', {name: /1 selected/i})).toBeInTheDocument();
        });
    });

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the current filter value in the url using the parameter "filter"', async () => {
            const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {globalFilter: ''}, syncWithUrl: true});
                return (
                    <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                        <Table.Header>
                            <Table.Filter />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            await user.type(screen.getByRole('textbox'), 'veg');
            act(() => {
                // 300 ms debounce on TableFilter input
                vi.advanceTimersByTime(300);
            });
            expect(window.location.search).toBe('?filter=veg');
        });

        it('determines the initial filter value from the url', async () => {
            window.history.replaceState(null, '', '?filter=veg');
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {globalFilter: ''}, syncWithUrl: true});
                return (
                    <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                        <Table.Header>
                            <Table.Filter />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            expect(screen.getByRole('textbox')).toHaveValue('veg');
        });
    });
});
