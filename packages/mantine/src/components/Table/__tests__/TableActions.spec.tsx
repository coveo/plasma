import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {useState} from 'react';

import {InlineConfirm} from '../../InlineConfirm/InlineConfirm.js';
import {Table} from '../Table.js';
import {TableAction} from '../Table.types.js';
import {useTable, UseTableOptions} from '../use-table.js';

type RowData = {name: string};
const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];
const data: RowData[] = [{name: 'fruit'}, {name: 'vegetable'}, {name: 'bread'}];

const Fixture = ({
    getRowActions,
    storeOptions,
    loading,
    layouts,
}: {
    getRowActions?: (selected: RowData[]) => TableAction[];
    storeOptions?: UseTableOptions<RowData>;
    loading?: boolean;
    layouts?: Table.Props<RowData>['layouts'];
}) => {
    const store = useTable<RowData>(storeOptions);
    return (
        <Table<RowData>
            store={store}
            data={data}
            getRowId={(row) => row.name}
            columns={columns}
            getRowActions={getRowActions}
            loading={loading}
            layouts={layouts}
        />
    );
};

const getRow = (name: string) => screen.getByRole('row', {name: new RegExp(name)});
const openRowMenu = async (user: ReturnType<typeof userEvent.setup>, name: string) =>
    user.click(within(getRow(name)).getByRole('button', {name: 'Actions'}));

describe('Table actions', () => {
    describe('row actions', () => {
        it('renders an actions menu at the end of each row when getRowActions is provided', () => {
            render(
                <Fixture
                    getRowActions={() => [{group: '$$primary', component: <Table.ActionItem>Eat</Table.ActionItem>}]}
                />,
            );

            data.forEach(({name}) => {
                const cells = within(getRow(name)).getAllByRole('cell');
                expect(within(cells[cells.length - 1]).getByRole('button', {name: 'Actions'})).toBeInTheDocument();
            });
        });

        it('does not render the actions column when getRowActions is not provided', () => {
            render(<Fixture />);

            expect(screen.queryByRole('button', {name: 'Actions'})).not.toBeInTheDocument();
        });

        it('does not render the actions menu for rows without actions', () => {
            render(
                <Fixture
                    getRowActions={([row]) =>
                        row.name === 'fruit'
                            ? [{group: '$$primary', component: <Table.ActionItem>Eat</Table.ActionItem>}]
                            : []
                    }
                />,
            );

            expect(within(getRow('fruit')).getByRole('button', {name: 'Actions'})).toBeInTheDocument();
            expect(within(getRow('vegetable')).queryByRole('button', {name: 'Actions'})).not.toBeInTheDocument();
        });

        it('calls the action with the data of its row', async () => {
            const user = userEvent.setup();
            const onEat = vi.fn();
            render(
                <Fixture
                    getRowActions={(selected) => [
                        {
                            group: '$$primary',
                            component: <Table.ActionItem onClick={() => onEat(selected)}>Eat</Table.ActionItem>,
                        },
                    ]}
                />,
            );

            await openRowMenu(user, 'vegetable');
            await user.click(await screen.findByRole('menuitem', {name: 'Eat'}));

            expect(onEat).toHaveBeenCalledWith([{name: 'vegetable'}]);
        });

        it('does not select the row when opening its actions menu', async () => {
            const user = userEvent.setup();
            render(
                <Fixture
                    getRowActions={() => [{group: '$$primary', component: <Table.ActionItem>Eat</Table.ActionItem>}]}
                />,
            );

            await openRowMenu(user, 'fruit');
            await user.click(await screen.findByRole('menuitem', {name: 'Eat'}));

            expect(screen.getByRole('row', {name: /fruit/, selected: false})).toBeInTheDocument();
        });

        it('renders primary actions first and labels the other groups', async () => {
            const user = userEvent.setup();
            render(
                <Fixture
                    getRowActions={() => [
                        {group: 'Danger zone', component: <Table.ActionItem key="trash">Throw away</Table.ActionItem>},
                        {group: '$$primary', component: <Table.ActionItem key="eat">Eat</Table.ActionItem>},
                    ]}
                />,
            );

            await openRowMenu(user, 'fruit');
            const menu = await screen.findByRole('menu');

            expect(
                within(menu)
                    .getAllByRole('menuitem')
                    .map((item) => item.textContent),
            ).toEqual(['Eat', 'Throw away']);
            expect(within(menu).getByText('Danger zone')).toBeVisible();
        });

        it('replaces the actions menu with the confirm prompt when a confirm action is clicked', async () => {
            const user = userEvent.setup();
            render(
                <Fixture
                    getRowActions={() => [
                        {
                            group: '$$primary',
                            component: (
                                <InlineConfirm.Target
                                    component={Table.ActionItem}
                                    inlineConfirmId="delete"
                                    key="delete"
                                >
                                    Delete
                                </InlineConfirm.Target>
                            ),
                        },
                        {
                            group: '$$confirmPrompt',
                            component: (
                                <InlineConfirm.Prompt
                                    inlineConfirmId="delete"
                                    key="delete-prompt"
                                    label="Are you sure?"
                                    onConfirm={vi.fn()}
                                />
                            ),
                        },
                    ]}
                />,
            );

            await openRowMenu(user, 'fruit');
            await user.click(await screen.findByRole('menuitem', {name: 'Delete'}));

            expect(within(getRow('fruit')).getByText('Are you sure?')).toBeVisible();
            expect(within(getRow('fruit')).queryByRole('button', {name: 'Actions'})).not.toBeInTheDocument();
        });

        it('keeps the row data in sync with the data prop', async () => {
            type Food = {name: string; status: 'fresh' | 'eaten'};
            const foodColumnHelper = createColumnHelper<Food>();
            const foodColumns: Array<ColumnDef<Food>> = [foodColumnHelper.accessor('name', {enableSorting: false})];
            const user = userEvent.setup();

            const FoodFixture = () => {
                const [food, setFood] = useState<Food[]>([{name: 'fruit', status: 'fresh'}]);
                const store = useTable<Food>();
                return (
                    <Table<Food>
                        store={store}
                        data={food}
                        columns={foodColumns}
                        getRowActions={([row]) => [
                            {
                                group: '$$primary',
                                component:
                                    row.status === 'fresh' ? (
                                        <Table.ActionItem
                                            key="eat"
                                            onClick={() => setFood([{name: 'fruit', status: 'eaten'}])}
                                        >
                                            Eat
                                        </Table.ActionItem>
                                    ) : (
                                        <Table.ActionItem key="trash">Throw away</Table.ActionItem>
                                    ),
                            },
                        ]}
                    />
                );
            };
            render(<FoodFixture />);

            await openRowMenu(user, 'fruit');
            await user.click(await screen.findByRole('menuitem', {name: 'Eat'}));
            await openRowMenu(user, 'fruit');

            expect(await screen.findByRole('menuitem', {name: 'Throw away'})).toBeVisible();
            expect(screen.queryByRole('menuitem', {name: 'Eat'})).not.toBeInTheDocument();
        });

        it('renders the actions menu in each card of the card layout', () => {
            render(
                <Fixture
                    layouts={[Table.Layouts.Cards]}
                    getRowActions={() => [{group: '$$primary', component: <Table.ActionItem>Eat</Table.ActionItem>}]}
                />,
            );

            expect(screen.getAllByRole('button', {name: 'Actions'})).toHaveLength(data.length);
        });
    });

    describe('search', () => {
        const manyActions = (count: number) => (): TableAction[] =>
            Array.from({length: count}, (_, index) => ({
                group: '$$primary',
                component: <Table.ActionItem key={index}>{`Action ${index + 1}`}</Table.ActionItem>,
            }));

        it('does not render a search input when there are 7 actions or less', async () => {
            const user = userEvent.setup();
            render(<Fixture getRowActions={manyActions(7)} />);

            await openRowMenu(user, 'fruit');
            await screen.findByRole('menu');

            expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
        });

        it('filters the actions when there are more than 7 actions', async () => {
            const user = userEvent.setup();
            render(<Fixture getRowActions={manyActions(8)} />);

            await openRowMenu(user, 'fruit');
            await user.type(await screen.findByRole('searchbox', {name: 'Search actions'}), 'action 8');

            expect(screen.getAllByRole('menuitem').map((item) => item.textContent)).toEqual(['Action 8']);
        });

        it('matches the searchValue of the actions', async () => {
            const user = userEvent.setup();
            render(
                <Fixture
                    getRowActions={() => [
                        ...manyActions(8)(),
                        {
                            group: '$$primary',
                            component: (
                                <Table.ActionItem key="custom" searchValue="banana">
                                    <span>Custom</span>
                                </Table.ActionItem>
                            ),
                        },
                    ]}
                />,
            );

            await openRowMenu(user, 'fruit');
            await user.type(await screen.findByRole('searchbox'), 'banana');

            expect(screen.getAllByRole('menuitem').map((item) => item.textContent)).toEqual(['Custom']);
        });

        it('shows a message when no action matches the search', async () => {
            const user = userEvent.setup();
            render(<Fixture getRowActions={manyActions(8)} />);

            await openRowMenu(user, 'fruit');
            await user.type(await screen.findByRole('searchbox'), 'nothing');

            expect(screen.queryByRole('menuitem')).not.toBeInTheDocument();
            expect(screen.getByText('No actions found')).toBeVisible();
        });
    });

    describe('bulk actions', () => {
        const bulkActions =
            (onClick = vi.fn()) =>
            (selected: RowData[]): TableAction[] => [
                {
                    group: '$$primary',
                    component: <Table.ActionItem onClick={() => onClick(selected)}>Eat all</Table.ActionItem>,
                },
            ];

        const selectRow = async (user: ReturnType<typeof userEvent.setup>, name: string) =>
            user.click(within(getRow(name)).getByRole('checkbox'));

        it('does not render the action bar when no row is selected', () => {
            render(<Fixture storeOptions={{enableMultiRowSelection: true}} getRowActions={bulkActions()} />);

            expect(screen.queryByRole('group', {name: 'Bulk actions'})).not.toBeInTheDocument();
        });

        it('does not render the action bar when multi row selection is disabled', async () => {
            const user = userEvent.setup();
            render(<Fixture getRowActions={bulkActions()} />);

            await user.click(screen.getByRole('cell', {name: 'fruit'}));

            expect(screen.getByRole('row', {name: /fruit/, selected: true})).toBeInTheDocument();
            expect(screen.queryByRole('group', {name: 'Bulk actions'})).not.toBeInTheDocument();
        });

        it('renders the number of selected rows in the action bar', async () => {
            const user = userEvent.setup();
            render(<Fixture storeOptions={{enableMultiRowSelection: true}} getRowActions={bulkActions()} />);

            await selectRow(user, 'fruit');
            await selectRow(user, 'bread');

            const actionBar = await screen.findByRole('group', {name: 'Bulk actions'});
            expect(within(actionBar).getByText('2 selected')).toBeVisible();
        });

        it('renders the action bar without menu when there are no bulk actions', async () => {
            const user = userEvent.setup();
            render(<Fixture storeOptions={{enableMultiRowSelection: true}} />);

            await selectRow(user, 'fruit');

            const actionBar = await screen.findByRole('group', {name: 'Bulk actions'});
            expect(within(actionBar).getByText('1 selected')).toBeVisible();
            expect(within(actionBar).queryByRole('button', {name: 'Bulk actions'})).not.toBeInTheDocument();
        });

        it('calls the bulk action with all the selected rows', async () => {
            const user = userEvent.setup();
            const onEat = vi.fn();
            render(<Fixture storeOptions={{enableMultiRowSelection: true}} getRowActions={bulkActions(onEat)} />);

            await selectRow(user, 'fruit');
            await selectRow(user, 'vegetable');
            const actionBar = await screen.findByRole('group', {name: 'Bulk actions'});
            await user.click(within(actionBar).getByRole('button', {name: 'Bulk actions'}));
            await user.click(await screen.findByRole('menuitem', {name: 'Eat all'}));

            expect(onEat).toHaveBeenCalledWith([{name: 'fruit'}, {name: 'vegetable'}]);
        });

        it('clears the selection when clicking the close button', async () => {
            const user = userEvent.setup();
            render(<Fixture storeOptions={{enableMultiRowSelection: true}} getRowActions={bulkActions()} />);

            await selectRow(user, 'fruit');
            await user.click(await screen.findByRole('button', {name: 'Unselect all'}));

            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
            await waitFor(() => expect(screen.queryByRole('group', {name: 'Bulk actions'})).not.toBeInTheDocument());
        });

        it('clears the selection when pressing Escape', async () => {
            const user = userEvent.setup();
            render(<Fixture storeOptions={{enableMultiRowSelection: true}} getRowActions={bulkActions()} />);

            await selectRow(user, 'fruit');
            await screen.findByRole('group', {name: 'Bulk actions'});
            await user.keyboard('{Escape}');

            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
        });

        it('does not render the close button when row selection is forced', async () => {
            render(
                <Fixture
                    storeOptions={{
                        enableMultiRowSelection: true,
                        forceSelection: true,
                        initialState: {rowSelection: {fruit: {name: 'fruit'}}},
                    }}
                    getRowActions={bulkActions()}
                />,
            );

            await screen.findByRole('group', {name: 'Bulk actions'});
            expect(screen.queryByRole('button', {name: 'Unselect all'})).not.toBeInTheDocument();
        });
    });
});
