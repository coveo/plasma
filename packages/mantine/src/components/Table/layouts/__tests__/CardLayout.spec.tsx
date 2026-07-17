import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, within} from '@test-utils';
import {Table} from '../../Table.js';
import {useTable} from '../../use-table.js';
import {CardLayout} from '../card-layout/CardLayout.js';

describe('CardLayout', () => {
    type RowData = {id: string; firstName: string; lastName?: string};

    const columnHelper = createColumnHelper<RowData>();
    const columns: Array<ColumnDef<RowData>> = [
        columnHelper.accessor('firstName', {header: 'First Name', enableSorting: false}),
        columnHelper.accessor('lastName', {header: 'Last Name', enableSorting: false}),
    ];

    it('renders data as cards', () => {
        const data: RowData[] = [
            {id: '1', firstName: 'John', lastName: 'Doe'},
            {id: '2', firstName: 'Jane', lastName: 'Smith'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />;
        };
        render(<Fixture />);

        expect(screen.getByTestId('1')).toBeVisible();
        expect(screen.getByTestId('2')).toBeVisible();
        expect(screen.getByText('John')).toBeVisible();
        expect(screen.getByText('Doe')).toBeVisible();
        expect(screen.getByText('Jane')).toBeVisible();
        expect(screen.getByText('Smith')).toBeVisible();
    });

    it('renders column headers inside each card', () => {
        const data: RowData[] = [{id: '1', firstName: 'John', lastName: 'Doe'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />;
        };
        render(<Fixture />);

        const card = screen.getByTestId('1');
        expect(within(card).getByText('First Name')).toBeVisible();
        expect(within(card).getByText('Last Name')).toBeVisible();
    });

    it('does not render column headers in the thead', () => {
        const data: RowData[] = [{id: '1', firstName: 'John', lastName: 'Doe'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />;
        };
        render(<Fixture />);

        expect(screen.queryByRole('columnheader')).not.toBeInTheDocument();
    });

    it('selects a card on single click when row selection is enabled', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {id: '1', firstName: 'John', lastName: 'Doe'},
            {id: '2', firstName: 'Jane', lastName: 'Smith'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />;
        };
        render(<Fixture />);

        await user.click(screen.getByTestId('1'));
        expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');

        // clicking same card again deselects it
        await user.click(screen.getByTestId('1'));
        expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'false');
    });

    it('prevents deselection when row selection is forced', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {id: '1', firstName: 'John', lastName: 'Doe'},
            {id: '2', firstName: 'Jane', lastName: 'Smith'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>({forceSelection: true});
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />;
        };
        render(<Fixture />);

        await user.click(screen.getByTestId('1'));
        expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');

        // clicking same card again should NOT deselect
        await user.click(screen.getByTestId('1'));
        expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');
    });

    it('calls onRowDoubleClick on double click', async () => {
        const user = userEvent.setup();
        const doubleClickSpy = vi.fn();
        const data: RowData[] = [{id: '1', firstName: 'John', lastName: 'Doe'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    getRowId={({id}) => id}
                    data={data}
                    columns={columns}
                    layouts={[CardLayout]}
                    layoutProps={{onRowDoubleClick: doubleClickSpy}}
                />
            );
        };
        render(<Fixture />);

        await user.dblClick(screen.getByTestId('1'));
        expect(doubleClickSpy).toHaveBeenCalledWith(
            {id: '1', firstName: 'John', lastName: 'Doe'},
            0,
            expect.anything(),
        );
    });

    describe('multi-row selection', () => {
        it('renders a checkbox in each card', () => {
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            const card1 = screen.getByTestId('1');
            const card2 = screen.getByTestId('2');
            expect(within(card1).getByRole('checkbox', {name: /select row/i})).toBeVisible();
            expect(within(card2).getByRole('checkbox', {name: /select row/i})).toBeVisible();
        });

        it('selects a card when clicking its checkbox', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            const card1 = screen.getByTestId('1');
            await user.click(within(card1).getByRole('checkbox', {name: /select row/i}));
            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'false');
        });

        it('selects multiple cards', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByTestId('1'));
            await user.click(screen.getByTestId('2'));
            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'true');
        });

        it('does not trigger double click when double clicking the checkbox', async () => {
            const user = userEvent.setup();
            const doubleClickSpy = vi.fn();
            const data: RowData[] = [{id: '1', firstName: 'John', lastName: 'Doe'}];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={data}
                        columns={columns}
                        layouts={[CardLayout]}
                        layoutProps={{onRowDoubleClick: doubleClickSpy}}
                    />
                );
            };
            render(<Fixture />);

            const card1 = screen.getByTestId('1');
            await user.dblClick(within(card1).getByRole('checkbox', {name: /select row/i}));
            expect(doubleClickSpy).not.toHaveBeenCalled();
        });

        it('renders a select all checkbox in the header', () => {
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            expect(screen.getByRole('checkbox', {name: /select all from this page/i})).toBeVisible();
        });

        it('selects all cards when clicking the select all checkbox', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('checkbox', {name: /select all from this page/i}));
            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'true');
        });

        it('unselects all cards when clicking the select all checkbox while all are selected', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            const selectAll = screen.getByRole('checkbox', {name: /select all from this page/i});
            await user.click(selectAll);
            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'true');

            await user.click(screen.getByRole('checkbox', {name: /unselect all from this page/i}));
            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'false');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'false');
        });

        it('shows indeterminate state when some but not all cards are selected', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            await user.click(screen.getByTestId('1'));
            const selectAll = screen.getByRole('checkbox', {name: /select all from this page/i});
            expect(selectAll).not.toBeChecked();
            // Mantine renders a minus icon for indeterminate state
            expect(selectAll.closest('.mantine-Checkbox-inner')?.querySelector('.tabler-icon-minus')).toBeVisible();
        });

        it('does not render a select all checkbox when multi-row selection is disabled', () => {
            const data: RowData[] = [
                {id: '1', firstName: 'John', lastName: 'Doe'},
                {id: '2', firstName: 'Jane', lastName: 'Smith'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table store={store} getRowId={({id}) => id} data={data} columns={columns} layouts={[CardLayout]} />
                );
            };
            render(<Fixture />);

            expect(screen.queryByRole('checkbox', {name: /select all from this page/i})).not.toBeInTheDocument();
        });
    });

    describe('collapsible rows', () => {
        it('does not render expanded content even when getRowExpandedContent is provided', () => {
            const data: RowData[] = [{id: '1', firstName: 'John', lastName: 'Doe'}];
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={data}
                        columns={columns}
                        layouts={[CardLayout]}
                        getRowExpandedContent={(row) => <div>Details for {row.firstName}</div>}
                    />
                );
            };
            render(<Fixture />);

            expect(screen.queryByText('Details for John')).not.toBeInTheDocument();
        });

        it('does not render the collapsible column in cards', () => {
            const collapsibleColumns: Array<ColumnDef<RowData>> = [
                ...columns,
                Table.CollapsibleColumn as ColumnDef<RowData>,
            ];
            const data: RowData[] = [{id: '1', firstName: 'John', lastName: 'Doe'}];
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={data}
                        columns={collapsibleColumns}
                        layouts={[CardLayout]}
                        getRowExpandedContent={(row) => <div>Details for {row.firstName}</div>}
                    />
                );
            };
            render(<Fixture />);

            // The collapsible column's expand button should not be rendered
            expect(screen.queryByRole('button', {name: /expand/i})).not.toBeInTheDocument();
        });
    });

    it('is accessible via Table.Layouts.Cards', () => {
        expect(Table.Layouts.Cards).toBe(CardLayout);
    });
});
