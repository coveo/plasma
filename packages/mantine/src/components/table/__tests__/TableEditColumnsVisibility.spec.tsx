import {Box} from '@mantine/core';
import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';
import {Table} from '../Table';
import {TableEditColumnsVisibility} from '../table-edit-columns-visibility/TableEditColumnsVisibility';

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

describe('TableEditColumnsVisibility', () => {
    it('render the edit button in the table header', () => {
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableEditColumnsVisibility columnNames={columnNames} />
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
                    <TableEditColumnsVisibility columnNames={columnNames} label="Custom label" />
                </Table.Header>
            </Table>,
        );

        expect(screen.getByRole('button', {name: 'Custom label'})).toBeVisible();
    });

    it('renders the count of visible columns if showVisibleCountLabel is true', () => {
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableEditColumnsVisibility columnNames={columnNames} showVisibleCountLabel />
                </Table.Header>
            </Table>,
        );

        expect(screen.getByRole('button', {name: 'Edit columns (4)'})).toBeVisible();
    });

    it('renders all columns in the dropdown, except the collapsible and the multiselectRow', async () => {
        const user = userEvent.setup();
        render(
            <Table
                data={mockData}
                columns={columns}
                multiRowSelectionEnabled
                getExpandChildren={(datum) => <Box py="xs">{datum.body}</Box>}
            >
                <Table.Header>
                    <TableEditColumnsVisibility columnNames={columnNames} />
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
                    <TableEditColumnsVisibility columnNames={columnNames} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(screen.getByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('renders disabled checkbox for the coloumns that cannot be hidden', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns}>
                <Table.Header>
                    <TableEditColumnsVisibility columnNames={columnNames} nonHideableColumns={['name']} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(screen.getByRole('checkbox', {name: 'Name'})).toBeDisabled();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeEnabled();
        expect(screen.getByRole('checkbox', {name: 'Email'})).toBeEnabled();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeEnabled();
    });

    it('renders unchecked checkboxes for the columns that are not visible in the inital state of the table', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns} initialState={{columnVisibility: {email: false}}}>
                <Table.Header>
                    <TableEditColumnsVisibility columnNames={columnNames} />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('button', {name: 'Edit columns'}));

        expect(screen.getByRole('checkbox', {name: 'Name'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Age'})).toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Email'})).not.toBeChecked();
        expect(screen.getByRole('checkbox', {name: 'Phone'})).toBeChecked();
    });

    it('renders disabled checkboxes when the maxSelectableColumns is set and the maximum number of columns is selected', async () => {
        const user = userEvent.setup();
        render(
            <Table data={mockData} columns={columns} initialState={{columnVisibility: {email: false}}}>
                <Table.Header>
                    <TableEditColumnsVisibility columnNames={columnNames} maxSelectableColumns={3} />
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

    describe('footer', () => {
        it('renders "All available columns selected" when all columns are selected', async () => {
            const user = userEvent.setup();
            render(
                <Table data={mockData} columns={columns}>
                    <Table.Header>
                        <TableEditColumnsVisibility columnNames={columnNames} maxSelectableColumns={4} />
                    </Table.Header>
                </Table>,
            );

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));

            expect(screen.getByText('All available columns selected')).toBeVisible();
        });

        it('renders "Maximum columns selected" when maxSelectableColumns is set and all columns are selected', async () => {
            const user = userEvent.setup();
            render(
                <Table data={mockData} columns={columns} initialState={{columnVisibility: {name: false, email: false}}}>
                    <Table.Header>
                        <TableEditColumnsVisibility columnNames={columnNames} maxSelectableColumns={3} />
                    </Table.Header>
                </Table>,
            );

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));
            await user.click(screen.getByRole('checkbox', {name: /name/i}));

            expect(screen.getByText('Maximum columns selected')).toBeVisible();
        });

        it('renders "You can choose x more" when not all columns are selected', async () => {
            const user = userEvent.setup();
            render(
                <Table data={mockData} columns={columns} initialState={{columnVisibility: {name: false, email: false}}}>
                    <Table.Header>
                        <TableEditColumnsVisibility columnNames={columnNames} maxSelectableColumns={3} />
                    </Table.Header>
                </Table>,
            );

            await user.click(screen.getByRole('button', {name: 'Edit columns'}));

            expect(screen.getByText('You can choose 1 more')).toBeVisible();
        });
    });
});

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
