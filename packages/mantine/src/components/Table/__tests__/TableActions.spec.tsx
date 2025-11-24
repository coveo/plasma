import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {useState} from 'react';

import {Table} from '../Table.js';
import {useTable} from '../use-table.js';

type RowData = {name: string};
const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Actions', () => {
    it('displays the actions when the row is selected', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table<RowData>
                    store={store}
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    getRowId={(row) => row.name}
                    columns={columns}
                    getRowActions={(selected: RowData[]) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem>Eat {selected[0].name}</Table.ActionItem>,
                        },
                    ]}
                >
                    <Table.Header />
                </Table>
            );
        };
        render(<Fixture />);

        // no row is selected, no actions should be visible
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();

        // select the fruit row
        await user.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('button', {name: 'Eat fruit'})).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();

        // select the vegetable row
        await user.click(screen.getByRole('cell', {name: 'vegetable'}));
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Eat vegetable'})).toBeVisible();
    });

    it('displays the secondary actions when the row is selected and the user clicks on more', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table<RowData>
                    store={store}
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    columns={columns}
                    getRowActions={(selected: RowData[]) => [
                        {
                            group: 'secondary',
                            component: <Table.ActionItem key="peel">Peel {selected[0].name}</Table.ActionItem>,
                        },
                        {
                            group: 'secondary',
                            component: <Table.ActionItem key="chop">Chop {selected[0].name}</Table.ActionItem>,
                        },
                    ]}
                >
                    <Table.Header />
                </Table>
            );
        };
        render(<Fixture />);

        // no row is selected, no actions should be visible
        expect(screen.queryByRole('button', {name: /more/i})).not.toBeInTheDocument();

        // select the fruit row
        await user.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('button', {name: /more/i})).toBeVisible();

        await user.click(screen.getByRole('button', {name: /more/i}));
        await waitFor(() => expect(screen.getByRole('menuitem', {name: 'Peel fruit'})).toBeVisible());
        expect(screen.getByRole('menuitem', {name: 'Chop fruit'})).toBeVisible();
    });

    it('does not display the action when a loading row is selected', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table<RowData>
                    store={store}
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    columns={columns}
                    loading={true}
                    getRowActions={(selected: RowData[]) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem>Eat {selected[0].name}</Table.ActionItem>,
                        },
                    ]}
                >
                    <Table.Header />
                </Table>
            );
        };
        render(<Fixture />);
        await user.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('row', {name: 'fruit', selected: false})).toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.getByRole('row', {name: 'vegetable', selected: false})).toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();
    });

    it('does not display the action in the header when the header showActions prop is false', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table<RowData>
                    store={store}
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    columns={columns}
                    getRowActions={(selected: RowData[]) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem>Eat {selected[0].name}</Table.ActionItem>,
                        },
                    ]}
                >
                    <Table.Header showActions={false} />
                </Table>
            );
        };
        render(<Fixture />);
        await user.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('row', {name: 'fruit'})).toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Eat fruit'})).not.toBeInTheDocument();
        expect(screen.getByRole('row', {name: 'vegetable', selected: false})).toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Eat vegetable'})).not.toBeInTheDocument();
    });

    it('keeps the selected row data in sync with the data prop', async () => {
        // When a row is selected and the data prop changes, the selected row data should be updated with the new data without having to reselect the row
        type Food = {name: string; status: 'fresh' | 'eaten'};
        const foodColumnHelper = createColumnHelper<Food>();
        const myColumns: Array<ColumnDef<Food>> = [foodColumnHelper.accessor('name', {enableSorting: false})];
        const user = userEvent.setup();

        const Fixture = () => {
            const [data, setData] = useState<Food[]>([{name: 'fruit', status: 'fresh'}]);
            const eatFruit = () => setData([{name: 'fruit', status: 'eaten'}]);

            const store = useTable<Food>();
            return (
                <Table<Food>
                    store={store}
                    data={data}
                    columns={myColumns}
                    getRowActions={(selected: Food[]) => [
                        {
                            group: '$$primary',
                            component:
                                selected[0].status === 'fresh' ? (
                                    <Table.ActionItem key="eat" onClick={eatFruit}>
                                        Eat
                                    </Table.ActionItem>
                                ) : null,
                        },
                        {
                            group: '$$primary',
                            component:
                                selected[0].status === 'eaten' ? (
                                    <Table.ActionItem key="trash">Throw away</Table.ActionItem>
                                ) : null,
                        },
                    ]}
                >
                    <Table.Header />
                </Table>
            );
        };
        render(<Fixture />);
        await user.click(screen.getByRole('cell', {name: 'fruit'}));
        expect(screen.getByRole('button', {name: 'Eat'})).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Throw away'})).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'Eat'}));
        expect(screen.queryByRole('button', {name: 'Eat'})).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Throw away'})).toBeVisible();
    });

    describe('when multi row selection is enabled', () => {
        it('passes down an array of selected rows', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table<RowData>
                        store={store}
                        getRowId={(row) => row.name}
                        data={[{name: 'fruit'}, {name: 'vegetable'}, {name: 'bread'}]}
                        columns={columns}
                        getRowActions={(data: RowData[]) => [
                            {
                                group: '$$primary',
                                component: (
                                    <Table.ActionItem>Eat {data.map((d) => d.name).join(', ')}</Table.ActionItem>
                                ),
                            },
                        ]}
                    >
                        <Table.Header />
                    </Table>
                );
            };
            render(<Fixture />);
            await user.click(within(screen.getByRole('row', {name: /fruit/})).getByRole('checkbox'));
            await user.click(within(screen.getByRole('row', {name: /vegetable/})).getByRole('checkbox'));
            expect(screen.getByRole('button', {name: 'Eat fruit, vegetable'})).toBeVisible();
        });
    });
});
