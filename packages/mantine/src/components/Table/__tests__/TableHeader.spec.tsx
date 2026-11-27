import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';

import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

const predicateData = [
    {value: 'ALL', label: 'All'},
    {value: 'first', label: 'First'},
];

describe('Table.Header', () => {
    it('puts Table.Filter before the other header controls, whatever the children order', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {predicates: {rank: 'ALL'}}});
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.Header>
                        <Table.Predicate id="rank" label="Rank" data={predicateData} />
                        <Table.Filter placeholder="Search" />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.tab();
        expect(screen.getByPlaceholderText('Search')).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('combobox', {name: 'Rank'})).toHaveFocus();
    });

    it('keeps the order of the other header controls', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {predicates: {rank: 'ALL', size: 'ALL'}}});
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.Header>
                        <Table.Predicate id="size" label="Size" data={predicateData} />
                        <Table.Predicate id="rank" label="Rank" data={predicateData} />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.tab();
        expect(screen.getByRole('combobox', {name: 'Size'})).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('combobox', {name: 'Rank'})).toHaveFocus();
    });

    it('renders the header controls alongside the selected rows count and actions', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({enableMultiRowSelection: true});
            return (
                <Table
                    store={store}
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    columns={columns}
                    getRowActions={() => [
                        {group: '$$primary', component: <Table.ActionItem key="edit">Edit</Table.ActionItem>},
                    ]}
                >
                    <Table.Header>
                        <Table.Filter placeholder="Search" />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('cell', {name: 'fruit'}));

        expect(screen.getByPlaceholderText('Search')).toBeVisible();
        expect(screen.getByRole('button', {name: 'Edit'})).toBeVisible();
    });
});
