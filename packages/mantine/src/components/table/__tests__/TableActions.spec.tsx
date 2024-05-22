import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';

import {Table} from '../Table';
import {useTable} from '../use-table';

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
                    getRowActions={(datum: RowData) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem leftSection={null}>Eat {datum.name}</Table.ActionItem>,
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
                    getRowActions={(datum: RowData) => [
                        {
                            group: 'secondary',
                            component: (
                                <Table.ActionItem key="peel" leftSection={null}>
                                    Peel {datum.name}
                                </Table.ActionItem>
                            ),
                        },
                        {
                            group: 'secondary',
                            component: (
                                <Table.ActionItem key="chop" leftSection={null}>
                                    Chop {datum.name}
                                </Table.ActionItem>
                            ),
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
                    getRowActions={(datum: RowData) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem leftSection={null}>Eat {datum.name}</Table.ActionItem>,
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
                    getRowActions={(datum: RowData) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem leftSection={null}>Eat {datum.name}</Table.ActionItem>,
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
                        getMultiSelectionRowActions={(data: RowData[]) => [
                            {
                                group: '$$primary',
                                component: (
                                    <Table.ActionItem leftSection={null}>
                                        Eat {data.map((d) => d.name).join(', ')}
                                    </Table.ActionItem>
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
