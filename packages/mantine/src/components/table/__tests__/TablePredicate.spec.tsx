import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Predicate', () => {
    it('goes back to the first page when changing the predicate', async () => {
        if (!HTMLElement.prototype.scrollIntoView) {
            HTMLElement.prototype.scrollIntoView = () => {
                vi.fn();
            };
        }
        const user = userEvent.setup();
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageIndex: 1}, totalEntries: 52}});
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Header>
                        <Table.Predicate
                            id="rank"
                            label="Rank"
                            data={[
                                {value: 'first', label: 'First'},
                                {value: 'second', label: 'Second'},
                            ]}
                        />
                    </Table.Header>
                    <Table.Footer>
                        <Table.PerPage />
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

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the current predicate value in the url using the predicate id as key', async () => {
            const user = userEvent.setup();
            const data = [{name: 'fruit'}, {name: 'vegetable'}];
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {predicates: {rank: 'ALL'}},
                    syncWithUrl: true,
                });
                return (
                    <Table store={store} data={data} columns={columns}>
                        <Table.Header>
                            <Table.Predicate
                                id="rank"
                                label="Rank"
                                data={[
                                    {value: 'ALL', label: 'All'},
                                    {value: 'first', label: 'First'},
                                    {value: 'second', label: 'Second'},
                                ]}
                            />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            await user.click(screen.getByRole('textbox', {name: 'Rank'}));
            await user.click(screen.getByRole('option', {name: 'First'}));
            expect(window.location.search).toBe('?rank=first');
        });

        it('determines the initial predicate value from the url', async () => {
            window.history.replaceState(null, '', '?rank=second');
            const data = [{name: 'fruit'}, {name: 'vegetable'}];
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {predicates: {rank: 'ALL'}},
                    syncWithUrl: true,
                });
                return (
                    <Table store={store} data={data} columns={columns}>
                        <Table.Header>
                            <Table.Predicate
                                id="rank"
                                label="Rank"
                                data={[
                                    {value: 'ALL', label: 'All'},
                                    {value: 'first', label: 'First'},
                                    {value: 'second', label: 'Second'},
                                ]}
                            />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            expect(screen.getByRole('textbox', {name: 'Rank'})).toHaveValue('Second');
        });
    });
});
