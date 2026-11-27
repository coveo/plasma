import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, within} from '@test-utils';

import {CardLayout} from '../layouts/card-layout/CardLayout.js';
import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];
const data: RowData[] = Array.from({length: 30}, (_, index) => ({name: `row ${index}`}));

describe('Table.Footer', () => {
    beforeEach(() => {
        HTMLElement.prototype.scrollIntoView ??= vi.fn();
    });

    it('renders the last update, pagination and per page controls', () => {
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {perPage: 10}, totalEntries: 30}});
            return (
                <Table store={store} data={data.slice(0, 10)} columns={columns}>
                    <Table.Footer data-testid="footer">
                        <Table.PerPage label="Per page" values={[10, 20]} />
                        <Table.Pagination />
                        <Table.LastUpdated />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        const footer = within(screen.getByTestId('footer'));
        expect(footer.getByRole('timer')).toBeVisible();
        expect(footer.getByRole('button', {name: 'next page'})).toBeVisible();
        expect(footer.getByRole('radio', {name: '20'})).toBeInTheDocument();
    });

    it('keeps working with the card layout', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {pagination: {perPage: 10}, totalEntries: 30}});
            return (
                <Table store={store} data={data.slice(0, 10)} columns={columns} layouts={[CardLayout]}>
                    <Table.Footer>
                        <Table.Pagination />
                        <Table.LastUpdated />
                    </Table.Footer>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('timer')).toBeVisible();
        await user.click(screen.getByRole('button', {name: '2'}));
        expect(screen.getByRole('button', {name: '2'})).toHaveAttribute('data-active', 'true');
    });
});
