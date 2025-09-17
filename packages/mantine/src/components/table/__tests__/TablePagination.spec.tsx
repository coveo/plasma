import {ColumnDef, createColumnHelper, getPaginationRowModel} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Pagination', () => {
    beforeEach(() => {
        if (!HTMLElement.prototype.scrollIntoView) {
            HTMLElement.prototype.scrollIntoView = () => {
                vi.fn();
            };
        }
    });

    it('calculates the number of pages based on the pageSize and the total number of entries', () => {
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {
                    pagination: {pageSize: 1},
                    totalEntries: 3,
                },
            });
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer>
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5);
        expect(buttons[0]).toHaveAccessibleName('previous page');
        expect(buttons[1]).toHaveAccessibleName('1');
        expect(buttons[2]).toHaveAccessibleName('2');
        expect(buttons[3]).toHaveAccessibleName('3');
        expect(buttons[4]).toHaveAccessibleName('next page');
    });

    it('changes the page when the pagination is client side', async () => {
        const user = userEvent.setup();
        const data = [
            {name: 'fruits'},
            {name: 'vegetables'},
            {name: 'grains'},
            {name: 'protein foods'},
            {name: 'dairy'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageSize: 3}}});

            return (
                <Table
                    store={store}
                    data={data}
                    columns={columns}
                    options={{
                        getPaginationRowModel: getPaginationRowModel(),
                    }}
                >
                    <Table.Footer>
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByText('fruits')).toBeVisible();
        expect(screen.getByText('vegetables')).toBeVisible();
        expect(screen.getByText('grains')).toBeVisible();
        expect(screen.queryByText('protein foods')).not.toBeInTheDocument();
        expect(screen.queryByText('dairy')).not.toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
        expect(buttons[0]).toHaveAccessibleName('previous page');
        expect(buttons[1]).toHaveAccessibleName('1');
        expect(buttons[2]).toHaveAccessibleName('2');
        expect(buttons[3]).toHaveAccessibleName('next page');
        expect(screen.getByRole('button', {name: '1', current: 'page'})).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'next page'}));

        expect(screen.getByRole('button', {name: '2', current: 'page'})).toBeVisible();
        expect(screen.queryByText('fruits')).not.toBeInTheDocument();
        expect(screen.queryByText('vegetables')).not.toBeInTheDocument();
        expect(screen.queryByText('grains')).not.toBeInTheDocument();
        expect(screen.getByText('protein foods')).toBeVisible();
        expect(screen.getByText('dairy')).toBeVisible();
    });

    it('triggers the onChangePage Callback with the right parameters', async () => {
        const user = userEvent.setup();
        const onChangePage = vi.fn();
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageSize: 1}}});
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer>
                        <Table.Pagination onPageChange={onChangePage} />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        onChangePage.mockReset();

        await user.click(screen.queryByRole('button', {name: '2'}));

        await waitFor(() => {
            expect(onChangePage).toHaveBeenCalledWith(1);
        });
    });

    it('renders nothing when there are no pages to show', () => {
        const data: RowData[] = [];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {globalFilter: 'filter'}});
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer data-testid="table-footer">
                        <Table.Pagination />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);
        expect(screen.getByTestId('table-footer')).toBeEmptyDOMElement();
    });

    it('changes page when the current page is greater than the total number of pages', async () => {
        const user = userEvent.setup();
        const onChangePage = vi.fn();
        const data = [{name: 'grains'}];
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {
                    pagination: {pageSize: 1, pageIndex: 2},
                    totalEntries: 3,
                },
            });
            const removeAPage = () => store.setTotalEntries((prev) => prev - 1);

            return (
                <>
                    <button data-testid="remove-page" onClick={removeAPage}>
                        change total pages
                    </button>
                    <Table store={store} data={data} columns={columns}>
                        <Table.Footer>
                            <Table.Pagination onPageChange={onChangePage} />
                        </Table.Footer>
                    </Table>
                </>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('cell', {name: 'grains'})).toBeVisible();
        let buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(6);
        expect(buttons[0]).toHaveAccessibleName('change total pages');
        expect(buttons[1]).toHaveAccessibleName('previous page');
        expect(buttons[2]).toHaveAccessibleName('1');
        expect(buttons[3]).toHaveAccessibleName('2');
        expect(buttons[4]).toHaveAccessibleName('3');
        expect(buttons[5]).toHaveAccessibleName('next page');

        // remove a page
        await user.click(screen.getByTestId('remove-page'));

        // The page is 2, but the index is 1
        expect(onChangePage).toHaveBeenCalledWith(1);

        buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5);
        expect(buttons[0]).toHaveAccessibleName('change total pages');
        expect(buttons[1]).toHaveAccessibleName('previous page');
        expect(buttons[2]).toHaveAccessibleName('1');
        expect(buttons[3]).toHaveAccessibleName('2');
        expect(buttons[4]).toHaveAccessibleName('next page');

        // remove a page
        await user.click(screen.getByTestId('remove-page'));

        // The page is 1, but the index is 0
        expect(onChangePage).toHaveBeenCalledWith(0);

        buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
        expect(buttons[0]).toHaveAccessibleName('change total pages');
        expect(buttons[1]).toHaveAccessibleName('previous page');
        expect(buttons[2]).toHaveAccessibleName('1');
        expect(buttons[3]).toHaveAccessibleName('next page');

        onChangePage.mockReset();

        // remove a page
        await user.click(screen.getByTestId('remove-page'));

        // There is no more pages
        expect(onChangePage).not.toHaveBeenCalled();

        buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(1);
        expect(buttons[0]).toHaveAccessibleName('change total pages');
    });

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the current page in the url using the parameter "page" counting from 1', async () => {
            const data = [{name: 'fruit'}, {name: 'vegetable'}];
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {
                        pagination: {pageSize: 1, pageIndex: 0},
                        totalEntries: 3,
                    },
                    syncWithUrl: true,
                });
                return (
                    <Table store={store} data={data} columns={columns}>
                        <Table.Footer>
                            <Table.Pagination />
                        </Table.Footer>
                    </Table>
                );
            };
            render(<Fixture />);
            await user.click(screen.queryByRole('button', {name: '2'}));
            expect(window.location.search).toBe('?page=2');
        });

        it('determines the initial page index from the url', async () => {
            window.history.replaceState(null, '', '?page=2');
            const data = [{name: 'fruit'}, {name: 'vegetable'}];
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {
                        pagination: {pageSize: 1, pageIndex: 0},
                        totalEntries: 3,
                    },
                    syncWithUrl: true,
                });
                return (
                    <Table store={store} data={data} columns={columns}>
                        <Table.Footer>
                            <Table.Pagination />
                            <Table.PerPage />
                        </Table.Footer>
                    </Table>
                );
            };
            render(<Fixture />);
            expect(screen.getByRole('button', {name: '2', current: 'page'})).toBeVisible();
        });
    });
});
