import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {Table} from '../Table.js';
import {TableColumnsSelectorColumn} from '../table-columns-selector/TableColumnsSelectorColumn.js';
import {useTable} from '../use-table.js';

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
];

const getColumnsWithSelector = (options = {}): Array<ColumnDef<RowData>> => [
    ...baseColumns,
    TableColumnsSelectorColumn(options) as ColumnDef<RowData>,
];

describe('TableColumnsSelectorColumn', () => {
    it('renders the column selector button in the table header', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        expect(screen.getByRole('button')).toBeVisible();
    });

    it('renders all columns in the dropdown, except control columns', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));
        const dropdown = await screen.findByRole('listbox');
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
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('hides a column when the user unchecks it', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        expect(screen.getByRole('columnheader', {name: 'Email'})).toBeVisible();

        await user.click(screen.getByRole('button'));
        await user.click(await screen.findByRole('checkbox', {name: 'Email'}));

        expect(screen.queryByRole('columnheader', {name: 'Email'})).not.toBeInTheDocument();
    });

    it('shows a column when the user checks it', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        expect(screen.queryByRole('columnheader', {name: 'Email'})).not.toBeInTheDocument();

        await user.click(screen.getByRole('button'));
        await user.click(await screen.findByRole('checkbox', {name: 'Email'}));

        expect(screen.getByRole('columnheader', {name: 'Email'})).toBeVisible();
    });

    it('renders a disabled checked checkbox for columns that are always visible', async () => {
        const columns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
            columnHelper.accessor('age', {header: 'Age', enableSorting: false, enableHiding: false}),
            columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
            columnHelper.accessor('phone', {header: 'Phone', enableSorting: false}),
            TableColumnsSelectorColumn() as ColumnDef<RowData>,
        ];
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={columns} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));

        const ageColumn = await screen.findByRole('checkbox', {name: 'Age'});
        expect(ageColumn).toBeChecked();
        expect(ageColumn).toBeDisabled();
    });

    it('renders a tooltip when hovering a disabled always visible column checkbox', async () => {
        const columns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
            columnHelper.accessor('age', {header: 'Age', enableSorting: false, enableHiding: false}),
            columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
            columnHelper.accessor('phone', {header: 'Phone', enableSorting: false}),
            TableColumnsSelectorColumn() as ColumnDef<RowData>,
        ];
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={columns} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));
        const ageColumn = await screen.findByRole('checkbox', {name: 'Age'});
        await user.hover(ageColumn.parentElement!);

        await waitFor(() => {
            expect(screen.getByRole('tooltip', {name: 'This column is always visible.'})).toBeVisible();
        });
    });

    it('renders a custom always visible tooltip when provided', async () => {
        const columns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('name', {header: 'Name', enableSorting: false}),
            columnHelper.accessor('age', {header: 'Age', enableSorting: false, enableHiding: false}),
            columnHelper.accessor('email', {header: 'Email', enableSorting: false}),
            TableColumnsSelectorColumn({alwaysVisibleTooltip: 'Custom always visible message'}) as ColumnDef<RowData>,
        ];
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={columns} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));
        const ageColumn = await screen.findByRole('checkbox', {name: 'Age'});
        await user.hover(ageColumn.parentElement!);

        await waitFor(() => {
            expect(screen.getByRole('tooltip', {name: 'Custom always visible message'})).toBeVisible();
        });
    });

    it('renders unchecked checkboxes for columns that are not visible in the initial state', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));

        expect(await screen.findByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    describe('maxSelectableColumns', () => {
        it('renders disabled checkboxes when the maximum number of columns is checked', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
                return (
                    <Table store={store} data={mockData} columns={getColumnsWithSelector({maxSelectableColumns: 3})} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

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
        });

        it('enables disabled checkboxes when a column is unchecked', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
                return (
                    <Table store={store} data={mockData} columns={getColumnsWithSelector({maxSelectableColumns: 3})} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            const nameCheckBox = await screen.findByRole('checkbox', {name: /name/i});
            let emailCheckBox = screen.getByRole('checkbox', {name: /email/i});

            expect(emailCheckBox).toBeDisabled();

            await user.click(nameCheckBox);

            // Re-open dropdown to verify state after toggle
            await user.click(screen.getByRole('button'));
            emailCheckBox = await screen.findByRole('checkbox', {name: /email/i});

            expect(emailCheckBox).toBeEnabled();
        });

        it('renders a tooltip when hovering a disabled checkbox due to limit', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
                return (
                    <Table store={store} data={mockData} columns={getColumnsWithSelector({maxSelectableColumns: 3})} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            const emailCheckBoxWrapper = (await screen.findByRole('checkbox', {name: /email/i})).parentElement;
            await user.hover(emailCheckBoxWrapper!);

            await waitFor(() => expect(screen.getByText('You have reached the maximum display limit.')).toBeVisible());
        });

        it('renders a custom limit reached tooltip when provided', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getColumnsWithSelector({
                            maxSelectableColumns: 3,
                            limitReachedTooltip: 'You can display up to 3 columns',
                        })}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            const emailCheckBoxWrapper = (await screen.findByRole('checkbox', {name: /email/i})).parentElement;
            await user.hover(emailCheckBoxWrapper!);

            await waitFor(() => expect(screen.getByText('You can display up to 3 columns')).toBeVisible());
        });

        it('ignores maxSelectableColumns when set to 0 (all columns remain enabled)', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table store={store} data={mockData} columns={getColumnsWithSelector({maxSelectableColumns: 0})} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            const nameCheckBox = await screen.findByRole('checkbox', {name: /name/i});
            const ageCheckBox = screen.getByRole('checkbox', {name: /age/i});
            const emailCheckBox = screen.getByRole('checkbox', {name: /email/i});
            const phoneCheckBox = screen.getByRole('checkbox', {name: /phone/i});

            // All checkboxes should be enabled since maxSelectableColumns: 0 is treated as no limit
            expect(nameCheckBox).toBeEnabled();
            expect(ageCheckBox).toBeEnabled();
            expect(emailCheckBox).toBeEnabled();
            expect(phoneCheckBox).toBeEnabled();
        });

        it('ignores maxSelectableColumns when set to a negative value (all columns remain enabled)', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table store={store} data={mockData} columns={getColumnsWithSelector({maxSelectableColumns: -5})} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            const nameCheckBox = await screen.findByRole('checkbox', {name: /name/i});
            const ageCheckBox = screen.getByRole('checkbox', {name: /age/i});
            const emailCheckBox = screen.getByRole('checkbox', {name: /email/i});
            const phoneCheckBox = screen.getByRole('checkbox', {name: /phone/i});

            // All checkboxes should be enabled since negative values are treated as no limit
            expect(nameCheckBox).toBeEnabled();
            expect(ageCheckBox).toBeEnabled();
            expect(emailCheckBox).toBeEnabled();
            expect(phoneCheckBox).toBeEnabled();
        });

        it('does not render the footer when maxSelectableColumns is 0', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getColumnsWithSelector({maxSelectableColumns: 0, footer: 'Should not appear'})}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            expect(screen.queryByText('Should not appear')).not.toBeInTheDocument();
        });
    });

    describe('footer', () => {
        it('does not render the footer when maxSelectableColumns is not defined', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            expect(screen.queryByText('You can display so many patate')).not.toBeInTheDocument();
        });

        it('renders the footer when maxSelectableColumns and footer are defined', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={getColumnsWithSelector({
                            maxSelectableColumns: 3,
                            footer: 'You can display so many patate',
                        })}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            await waitFor(() => expect(screen.getByText('You can display so many patate')).toBeVisible());
        });
    });

    describe('columnsSelectorColumn prop', () => {
        it('adds the column selector column when columnsSelectorColumn is true', () => {
            const Fixture = () => {
                const store = useTable<RowData>();
                return <Table store={store} data={mockData} columns={baseColumns} columnsSelectorColumn />;
            };
            render(<Fixture />);

            expect(screen.getByRole('button')).toBeVisible();
        });

        it('adds the column selector column with options when columnsSelectorColumn is an object', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {columnVisibility: {email: false}}});
                return (
                    <Table
                        store={store}
                        data={mockData}
                        columns={baseColumns}
                        columnsSelectorColumn={{maxSelectableColumns: 3}}
                    />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('button'));

            const emailCheckBox = await screen.findByRole('checkbox', {name: /email/i});
            expect(emailCheckBox).toBeDisabled();
        });
    });

    it('does not include the columns selector column in the dropdown options', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('button'));
        const dropdown = await screen.findByRole('listbox');
        const columnsCheckboxes = within(dropdown).getAllByRole('checkbox');

        // Should only have 4 columns, not 5 (columns selector is excluded)
        expect(columnsCheckboxes).toHaveLength(4);
    });

    it('renders a selector column cell in each row', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={mockData} columns={getColumnsWithSelector()} />;
        };
        render(<Fixture />);

        const rows = screen.getAllByRole('row');
        // Header row + 2 data rows
        expect(rows).toHaveLength(3);

        // Each data row should have 5 cells (4 data columns + 1 selector column)
        const dataRow = rows[1];
        const cells = within(dataRow).getAllByRole('cell');
        expect(cells).toHaveLength(5);
    });
});
