import {Box} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {Table} from '../Table';
import {TableColumnsSelector} from '../table-columns-selector/TableColumnsSelector';
import {useTable} from '../use-table';

const mockData = [
    {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        body: 'coucou',
    },
    {
        name: 'Jane Doe',
        age: 25,
        email: 'jane.doe@example.com',
        phone: '098-765-4321',
        body: 'coucou 2',
    },
];

type RowData = {
    name: string;
    age: number;
    email: string;
    phone: string;
    body: string;
};

const columnHelper = createColumnHelper<RowData>();
const baseColumns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
    columnHelper.accessor('age', {header: 'Age', enableSorting: false}),
    columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
    columnHelper.accessor('phone', {header: 'Phone', enableSorting: false}),
    Table.CollapsibleColumn as ColumnDef<RowData>,
];

describe('TableColumnsSelector', () => {
    it('render the edit button in the table header', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: 'Edit columns'})).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Edit columns (4)'})).not.toBeInTheDocument();
    });

    it('renders the custom label when defined', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector label="Custom label" />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: 'Custom label'})).toBeVisible();
    });

    it('renders the count of visible columns if showVisibleCountLabel is true', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector showVisibleCountLabel />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('button', {name: 'Edit columns (4)'})).toBeVisible();
    });

    it('renders all columns in the dropdown, except the collapsible and the multiselectRow by default', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({enableMultiRowSelection: true});
            return (
                <Table
                    store={store}
                    data={mockData}
                    columns={baseColumns}
                    getRowExpandedContent={(datum) => <Box py="xs">{datum.body}</Box>}
                >
                    <Table.Header>
                        <TableColumnsSelector />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));
        const dropdown = await screen.findByRole('dialog', {name: 'Edit columns'});
        const columnsCheckboxes = within(dropdown).getAllByRole('checkbox');

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
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('renders a disabled checked checkbox for columns that are always visible', async () => {
        const columns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
            columnHelper.accessor('age', {header: 'Age', enableSorting: false, enableHiding: false}),
            columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
            columnHelper.accessor('phone', {header: 'Phone', enableSorting: false}),
        ];
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={mockData} columns={columns}>
                    <Table.Header>
                        <TableColumnsSelector />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();

        const ageColumn = screen.getByRole('checkbox', {name: 'Age'});
        expect(ageColumn).toBeChecked();
        expect(ageColumn).toBeDisabled();
        await user.hover(ageColumn.parentElement);
        await waitFor(() => {
            expect(screen.getByRole('tooltip', {name: 'This column is always visible.'})).toBeVisible();
        });
    });

    it('renders unchecked checkboxes for the columns that are not visible in the inital state of the table', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
            return (
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('renders disabled checkboxes when the maxSelectableColumns is set and the maximum number of columns is checked', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
            return (
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector maxSelectableColumns={3} />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        const nameCheckBox = await screen.findByRole('checkbox', {name: /name/i});
        const ageCheckBox = screen.getByRole('checkbox', {name: /age/i});
        const emailCheckBox = screen.getByRole('checkbox', {name: /email/i});
        const phoneCheckBox = screen.getByRole('checkbox', {name: /phone/i});

        expect(nameCheckBox).toBeChecked();
        expect(nameCheckBox).toBeEnabled();
        expect(ageCheckBox).toBeChecked();
        expect(ageCheckBox).toBeEnabled();
        expect(emailCheckBox).not.toBeChecked();
        expect(emailCheckBox).toBeDisabled();
        expect(phoneCheckBox).toBeChecked();
        expect(phoneCheckBox).toBeEnabled();

        await user.click(nameCheckBox);

        expect(nameCheckBox).toBeEnabled();
    });

    it('renders a tooltip when the maxSelectableColumns is set and the maximum number of columns is checked and the user hover a disabled checkbox', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
            return (
                <Table store={store} data={mockData} columns={baseColumns}>
                    <Table.Header>
                        <TableColumnsSelector
                            maxSelectableColumns={3}
                            limitReachedTooltip="You can display up to 3 columns"
                        />
                    </Table.Header>
                </Table>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        const emailCheckBoxWrapper = (await screen.findByRole('checkbox', {name: /email/i})).parentElement;

        await user.hover(emailCheckBoxWrapper);

        await waitFor(() => expect(screen.getByText('You can display up to 3 columns')).toBeVisible());
    });

    describe('footer', () => {
        it('does not render the footer when maxSelectableColumns is not defined', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table store={store} data={mockData} columns={baseColumns}>
                        <Table.Header>
                            <TableColumnsSelector />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));

            expect(screen.queryByText('You can display up to 3 columns')).not.toBeInTheDocument();
        });

        it('renders the footer when maxSelectableColumns is defined and footer is defined', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table store={store} data={mockData} columns={baseColumns}>
                        <Table.Header>
                            <TableColumnsSelector maxSelectableColumns={3} footer="You can display so many patate" />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));

            await waitFor(() => expect(screen.getByText('You can display so many patate')).toBeVisible());
        });
    });

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the current visible column ids in the url', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    syncWithUrl: true,
                    initialState: {columnVisibility: {email: false, phone: true}},
                });
                return (
                    <Table store={store} data={mockData} columns={baseColumns}>
                        <Table.Header>
                            <TableColumnsSelector />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            await user.click(screen.getByRole('button', {name: 'Edit columns'}));
            const emailCheckBox = await screen.findByRole('checkbox', {name: /email/i});
            await user.click(emailCheckBox);
            await user.click(screen.getByRole('checkbox', {name: /phone/i}));
            expect(window.location.search).toBe('?show=email&hide=phone');
        });

        it('determines the initial visible columns from the url', async () => {
            window.history.replaceState(null, '', '?show=email%2Cphone');
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({
                    syncWithUrl: true,
                    initialState: {columnVisibility: {email: false, phone: false}},
                });
                return (
                    <Table store={store} data={mockData} columns={baseColumns}>
                        <Table.Header>
                            <TableColumnsSelector />
                        </Table.Header>
                    </Table>
                );
            };
            render(<Fixture />);
            await user.click(screen.getByRole('button', {name: 'Edit columns'}));
            expect(await screen.findByRole('checkbox', {name: /email/i})).toBeChecked();
            expect(screen.getByRole('checkbox', {name: /phone/i})).toBeChecked();
        });
    });
});
