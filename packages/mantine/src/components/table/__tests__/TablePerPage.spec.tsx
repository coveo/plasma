import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.PerPage', () => {
    it('displays the label', () => {
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer>
                        <Table.PerPage label="Per page" />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByText('Per page')).toBeVisible();
    });

    it('displays the values', () => {
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {pageSize: 2}}});
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer>
                        <Table.PerPage label="Per page" values={[2, 7, 12, 17]} />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        const radios = screen.getAllByRole('radio');
        expect(radios).toHaveLength(4);
        expect(radios[0]).toHaveAccessibleName('2');
        expect(radios[1]).toHaveAccessibleName('7');
        expect(radios[2]).toHaveAccessibleName('12');
        expect(radios[3]).toHaveAccessibleName('17');
    });

    it('resets page index when changing the number of items per page', async () => {
        const user = userEvent.setup();
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {
                    pagination: {pageIndex: 1, pageSize: 50},
                    totalEntries: 52,
                },
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

        await user.click(screen.getByRole('radio', {name: '100'}));
        expect(screen.getByRole('button', {name: '1', current: 'page'})).toBeVisible();
    });

    it('triggers the onPerPageChange Callback with the right parameters', async () => {
        const user = userEvent.setup();
        const data = [{name: 'fruit'}, {name: 'vegetable'}];
        const onPerPageChange = vi.fn();
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {
                    pagination: {pageIndex: 1, pageSize: 50},
                    totalEntries: 52,
                },
            });
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer>
                        <Table.Pagination />
                        <Table.PerPage onPerPageChange={onPerPageChange} />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        onPerPageChange.mockReset();

        await user.click(screen.getByRole('radio', {name: /100/i}));

        await waitFor(() => {
            expect(onPerPageChange).toHaveBeenCalledWith(100);
        });
    });

    it('renders nothing when there are no pages to show', () => {
        const data: RowData[] = [];
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {globalFilter: 'filter'}});
            return (
                <Table store={store} data={data} columns={columns}>
                    <Table.Footer data-testid="table-footer">
                        <Table.PerPage />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);
        expect(screen.getByTestId('table-footer')).toBeEmptyDOMElement();
    });
});
