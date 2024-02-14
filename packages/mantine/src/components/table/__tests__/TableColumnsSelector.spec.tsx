import {Box} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';
import {Table} from '../Table';
import {TableColumnsSelector} from '../table-columns-selector/TableColumnsSelector';

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

const columnNames: Record<string, string> = {
    name: 'Name',
    age: 'Age',
    email: 'Email',
    phone: 'Phone',
};

type RowData = {
    name: string;
    age: number;
    email: string;
    phone: string;
    body: string;
};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('name', {enableSorting: false}),
    columnHelper.accessor('age', {enableSorting: false}),
    columnHelper.accessor('email', {enableSorting: false}),
    columnHelper.accessor('phone', {enableSorting: false}),
    Table.CollapsibleColumn as ColumnDef<RowData>,
];

describe('TableColumnsSelector', () => {
    it('render the edit button in the table header', () => {
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} />
                </Table.Header>
            </Table>,
        );

        expect(screen.getByRole('button', {name: 'Edit columns'})).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Edit columns (4)'})).not.toBeInTheDocument();
    });

    it('renders the custom label when defined', () => {
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} label="Custom label" />
                </Table.Header>
            </Table>,
        );

        expect(screen.getByRole('button', {name: 'Custom label'})).toBeVisible();
    });

    it('renders the count of visible columns if showVisibleCountLabel is true', () => {
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} showVisibleCountLabel />
                </Table.Header>
            </Table>,
        );

        expect(screen.getByRole('button', {name: 'Edit columns (4)'})).toBeVisible();
    });

    it('renders all columns in the dropdown, except the collapsible and the multiselectRow by default', async () => {
        const user = userEvent.setup();
        render(
            <Table
                data={mockData}
                columns={columns}
                multiRowSelectionEnabled
                getExpandChildren={(datum) => <Box py="xs">{datum.body}</Box>}
            >
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        // columns are rendered
        expect(screen.getAllByRole('button', {name: /arrowheaddown/i})).toHaveLength(2);
        expect(screen.getAllByRole('checkbox', {name: /select row/i})).toHaveLength(2);

        expect(screen.getByRole('checkbox', {name: 'Name'})).toBeVisible();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeVisible();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeVisible();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeVisible();

        // columns are not in the dropdown
        expect(screen.queryByRole('checkbox', {name: /collapsible/i})).not.toBeInTheDocument();
        expect(screen.queryByRole('checkbox', {name: 'select'})).not.toBeInTheDocument();
    });

    it('renders all checkboxes checked by default', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(screen.getByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('does not render the checkboxes for the columns that are in the nonHideableColumns prop', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} nonHideableColumns={['name']} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(screen.queryByRole('checkbox', {name: 'Name'})).not.toBeInTheDocument();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('renders unchecked checkboxes for the columns that are not visible in the inital state of the table', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns} initialState={{columnVisibility: {email: false}}}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(screen.getByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('renders disabled checkboxes when the maxSelectableColumns is set and the maximum number of columns is checked', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns} initialState={{columnVisibility: {email: false}}}>
                <Table.Header>
                    <TableColumnsSelector columnNames={columnNames} maxSelectableColumns={3} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        const nameCheckBox = screen.getByRole('checkbox', {name: /name/i});
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
        render(
            <Table data={mockData} columns={columns} initialState={{columnVisibility: {email: false}}}>
                <Table.Header>
                    <TableColumnsSelector
                        columnNames={columnNames}
                        maxSelectableColumns={3}
                        limitReachedTooltip="You can display up to 3 columns"
                    />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        const emailCheckBoxWrapper = screen.getByRole('checkbox', {name: /email/i}).parentElement;

        await user.hover(emailCheckBoxWrapper);

        expect(screen.getByText('You can display up to 3 columns')).toBeVisible();
    });

    describe('footer', () => {
        it('does not render the footer when maxSelectableColumns is not defined', async () => {
            const user = userEvent.setup();
            render(
                <Table data={mockData} columns={columns}>
                    <Table.Header>
                        <TableColumnsSelector columnNames={columnNames} />
                    </Table.Header>
                </Table>,
            );

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));

            expect(screen.queryByText('You can display up to 3 columns')).not.toBeInTheDocument();
        });

        it('renders the footer when maxSelectableColumns is defined and footer is defined', async () => {
            const user = userEvent.setup();
            render(
                <Table data={mockData} columns={columns}>
                    <Table.Header>
                        <TableColumnsSelector
                            columnNames={columnNames}
                            maxSelectableColumns={3}
                            footer="You can display so many patate"
                        />
                    </Table.Header>
                </Table>,
            );

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));

            expect(screen.getByText('You can display so many patate')).toBeVisible();
        });
    });
});
