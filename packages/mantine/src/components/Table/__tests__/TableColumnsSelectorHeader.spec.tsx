import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table.js';
import {TableActionsColumn} from '../table-column/TableActionsColumn.js';
import {useTable} from '../use-table.js';

type RowData = {name: string; age: number; email: string; phone: string};
const columnHelper = createColumnHelper<RowData>();

const mockData: RowData[] = [
    {name: 'John', age: 30, email: 'john@test.com', phone: '123-456'},
    {name: 'Jane', age: 25, email: 'jane@test.com', phone: '789-012'},
];

const getBaseColumns = (): Array<ColumnDef<RowData>> => [
    columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
    columnHelper.accessor('age', {header: 'Age', enableSorting: false}),
    columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
    columnHelper.accessor('phone', {header: 'Phone', enableSorting: false}),
    TableActionsColumn as ColumnDef<RowData>,
];

describe('TableColumnsSelectorHeader', () => {
    it('renders the column selector button in the actions column header when rowConfigurable is true', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={getBaseColumns()}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: 'settings'})).toBeVisible();
    });

    it('renders all columns in the dropdown except control columns', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={getBaseColumns()}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'settings'}));

        const columnsCheckboxes = await screen.findAllByRole('checkbox');
        expect(columnsCheckboxes).toHaveLength(4);
        expect(columnsCheckboxes[0]).toHaveAccessibleName('Name');
        expect(columnsCheckboxes[1]).toHaveAccessibleName('Age');
        expect(columnsCheckboxes[2]).toHaveAccessibleName('Email');
        expect(columnsCheckboxes[3]).toHaveAccessibleName('Phone');
    });

    it('renders all checkboxes checked by default', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={getBaseColumns()}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'settings'}));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('hides a column when the user unchecks it', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={getBaseColumns()}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('columnheader', {name: 'Email'})).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'settings'}));
        await user.click(await screen.findByRole('checkbox', {name: 'Email'}));

        expect(screen.queryByRole('columnheader', {name: 'Email'})).not.toBeInTheDocument();
    });

    it('shows a column when the user checks it', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {columnVisibility: {email: false}},
            });
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={getBaseColumns()}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        expect(screen.queryByRole('columnheader', {name: 'Email'})).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'settings'}));
        await user.click(await screen.findByRole('checkbox', {name: 'Email'}));

        expect(screen.getByRole('columnheader', {name: 'Email'})).toBeVisible();
    });

    it('renders a disabled checked checkbox for columns that are always visible', async () => {
        const user = userEvent.setup();
        const columnsWithNonHideable: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
            columnHelper.accessor('age', {header: 'Age', enableSorting: false, enableHiding: false}),
            columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
            TableActionsColumn as ColumnDef<RowData>,
        ];

        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={columnsWithNonHideable}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'settings'}));

        const ageColumn = await screen.findByRole('checkbox', {name: 'Age'});
        expect(ageColumn).toBeChecked();
        expect(ageColumn).toBeDisabled();
    });

    it('renders a tooltip when hovering a disabled always visible column checkbox', async () => {
        const user = userEvent.setup();
        const columnsWithNonHideable: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
            columnHelper.accessor('age', {header: 'Age', enableSorting: false, enableHiding: false}),
            TableActionsColumn as ColumnDef<RowData>,
        ];

        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={columnsWithNonHideable}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'settings'}));
        const ageCheckbox = await screen.findByRole('checkbox', {name: 'Age'});
        await user.hover(ageCheckbox.closest('div')!);

        await waitFor(() => {
            expect(screen.getByRole('tooltip', {name: 'This column is always visible.'})).toBeVisible();
        });
    });

    it('renders unchecked checkboxes for columns that are not visible in the initial state', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({
                initialState: {columnVisibility: {email: false}},
            });
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={getBaseColumns()}
                    options={{meta: {rowConfigurable: true}}}
                />
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'settings'}));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    describe('maxSelectableColumns', () => {
        it('disables unchecked columns when the maximum number of visible columns is reached', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {columnVisibility: {email: false, phone: false}},
                });
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getBaseColumns()}
                        options={{meta: {rowConfigurable: {maxSelectableColumns: 2}}}}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button', {name: 'settings'}));

            // Name and Age are visible (2 columns = max)
            expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
            expect(screen.getByRole('checkbox', {name: 'Name'})).not.toBeDisabled();
            expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
            expect(screen.getByRole('checkbox', {name: 'Age'})).not.toBeDisabled();

            // Email and Phone are hidden and should be disabled
            expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeChecked();
            expect(screen.getByRole('checkbox', {name: 'Email'})).toBeDisabled();
            expect(screen.getByRole('checkbox', {name: 'Phone'})).not.toBeChecked();
            expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeDisabled();
        });

        it('renders a footer with the max columns message when maxSelectableColumns is set', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getBaseColumns()}
                        options={{meta: {rowConfigurable: {maxSelectableColumns: 5}}}}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button', {name: 'settings'}));

            expect(await screen.findByText('You can display up to 5 columns')).toBeVisible();
        });

        it('does not render a footer when maxSelectableColumns is not set', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getBaseColumns()}
                        options={{meta: {rowConfigurable: true}}}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button', {name: 'settings'}));

            await screen.findByRole('checkbox', {name: 'Name'});
            expect(screen.queryByText(/You can display up to/)).not.toBeInTheDocument();
        });

        it('enables a disabled column when a visible column is hidden', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    initialState: {columnVisibility: {email: false, phone: false}},
                });
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getBaseColumns()}
                        options={{meta: {rowConfigurable: {maxSelectableColumns: 2}}}}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button', {name: 'settings'}));

            // Email is disabled because max is reached
            expect(await screen.findByRole('checkbox', {name: 'Email'})).toBeDisabled();

            // Hide Name column
            await user.click(screen.getByRole('checkbox', {name: 'Name'}));

            // Now Email should be enabled
            expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeDisabled();
        });
    });
});
