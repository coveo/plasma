import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.DateRangePicker', () => {
    it('displays the initial dates', () => {
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]}});
            return (
                <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                    <Table.Header>
                        <Table.DateRangePicker />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: /jan 01, 2022 - jan 07, 2022/i})).toBeVisible();
    });

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the selected date range in the url', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]},
                    syncWithUrl: true,
                });
                return (
                    <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                        <Table.Header>
                            <Table.DateRangePicker />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            await user.click(screen.getByRole('button', {name: /jan 01, 2022 - jan 07, 2022/i}));
            await screen.findByRole('dialog');
            await user.clear(screen.getByRole('textbox', {name: /start/i}));
            await user.type(screen.getByRole('textbox', {name: /start/i}), '2022-01-02');
            await user.clear(screen.getByRole('textbox', {name: /end/i}));
            await user.type(screen.getByRole('textbox', {name: /end/i}), '2022-01-08');
            await user.click(screen.getByRole('button', {name: /apply/i}));
            expect(window.location.search).toBe('?from=2022-01-02T00%3A00%3A00.000Z&to=2022-01-08T23%3A59%3A59.999Z');
        });

        it('initially selects the specified date range from in the url', async () => {
            window.history.replaceState(null, '', '?from=2022-01-02T00%3A00%3A00.000Z&to=2022-01-08T23%3A59%3A59.999Z');
            userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]},
                    syncWithUrl: true,
                });
                return (
                    <Table store={store} data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                        <Table.Header>
                            <Table.DateRangePicker />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            expect(screen.getByRole('button', {name: /jan 02, 2022 - jan 08, 2022/i})).toBeVisible();
        });
    });
});
