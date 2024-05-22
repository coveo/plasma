import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {FunctionComponent} from 'react';
import {Table} from '../../Table';
import {useTable} from '../../use-table';

describe('RowLayout', () => {
    type RowData = {id: string; firstName: string; lastName?: string; disabled?: boolean};

    const columnHelper = createColumnHelper<RowData>();
    const columns: Array<ColumnDef<RowData>> = [
        columnHelper.accessor('firstName', {enableSorting: false}),
        columnHelper.accessor('lastName', {enableSorting: false}),
    ];

    it('renders the data using the RowLayout by default', () => {
        const data: RowData[] = [{id: '🆔', firstName: 'first', lastName: 'last'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
        };
        render(<Fixture />);

        expect(screen.getByRole('columnheader', {name: 'firstName'})).toBeVisible();
        expect(screen.getByRole('columnheader', {name: 'lastName'})).toBeVisible();

        expect(
            screen.getByRole('cell', {
                name: /first/i,
            }),
        ).toBeVisible();
        expect(
            screen.getByRole('cell', {
                name: /last/i,
            }),
        ).toBeVisible();
    });

    it('formats the data', () => {
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                header: () => 'First Name',
                cell: (info) => info.getValue().toUpperCase(),
                enableSorting: false,
            }),
            columnHelper.accessor('lastName', {
                header: () => 'Last Name',
                cell: (info) => info.getValue().toUpperCase(),
                enableSorting: false,
            }),
        ];
        const data: RowData[] = [{id: '🆔', firstName: 'first', lastName: 'last'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} data={data} columns={customColumns} />;
        };
        render(<Fixture />);

        expect(screen.getByRole('columnheader', {name: 'First Name'})).toBeVisible();
        expect(screen.getByRole('columnheader', {name: 'Last Name'})).toBeVisible();

        expect(screen.getByRole('cell', {name: 'FIRST'})).toBeVisible();
        expect(screen.getByRole('cell', {name: 'LAST'})).toBeVisible();
    });

    it('adds testid on the data', () => {
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {}),
            columnHelper.accessor('lastName', {}),
        ];
        const data: RowData[] = [
            {id: 'ash', firstName: 'Ash', lastName: 'Ketchum'},
            {id: 'gary', firstName: 'Gary', lastName: 'Oak'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={customColumns} />;
        };
        render(<Fixture />);

        expect(screen.getByTestId('ash')).toBeVisible();
        expect(screen.getByTestId('ash_firstName')).toHaveTextContent('Ash');
        expect(screen.getByTestId('ash_lastName')).toHaveTextContent('Ketchum');

        expect(screen.getByTestId('gary')).toBeVisible();
        expect(screen.getByTestId('gary_firstName')).toHaveTextContent('Gary');
        expect(screen.getByTestId('gary_lastName')).toHaveTextContent('Oak');
    });

    it('opens the collapsible rows when the user click on the toggle', async () => {
        const user = userEvent.setup();
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                enableSorting: false,
            }),
            Table.CollapsibleColumn as ColumnDef<RowData>,
        ];
        const data: RowData[] = [{id: '🆔', firstName: 'first', lastName: 'last'}];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    getRowId={({id}) => id}
                    data={data}
                    getRowExpandedContent={(row) => <div>Collapsible content: {row.lastName}</div>}
                    columns={customColumns}
                />
            );
        };
        render(<Fixture />);

        // wait for the collapsible icon to show
        await screen.findByRole('button', {name: 'arrowHeadDown'});

        expect(screen.queryByText('Collapsible content: last')).not.toBeVisible();

        await user.click(screen.getByRole('button', {name: 'arrowHeadDown'}));
        await waitFor(() => {
            expect(screen.queryByText('Collapsible content: last')).toBeVisible();
        });
    });

    it('renders the collapsible button only for rows that can be expanded', async () => {
        const Content: FunctionComponent<{row: RowData}> = ({row}) => (
            <div>
                Collapsible content: {row.firstName} {row.lastName}
            </div>
        );

        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                enableSorting: false,
            }),
            Table.CollapsibleColumn as ColumnDef<RowData>,
        ];
        const data: RowData[] = [
            {id: '🆔-1', firstName: 'Luke', lastName: 'Skywalker'},
            {id: '🆔-2', firstName: 'Lea', lastName: 'Skywalker'},
            {id: '🆔-3', firstName: 'Han', lastName: 'Solo'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    getRowId={({id}) => id}
                    data={data}
                    getRowExpandedContent={(row: RowData) =>
                        row.lastName === 'Skywalker' ? <Content row={row} /> : null
                    }
                    columns={customColumns}
                />
            );
        };
        render(<Fixture />);

        // wait for the collapsible icon to show
        await screen.findAllByRole('button', {name: 'arrowHeadDown'});

        const allRows = screen.getAllByRole('button', {name: 'arrowHeadDown'});
        expect(allRows).toHaveLength(2);
    });

    it('closes the opened collapsible when using the accordion column and the user expand a different row', async () => {
        const user = userEvent.setup();
        const Content: FunctionComponent<{row: RowData}> = ({row}) => <div>Collapsible content: {row.lastName}</div>;
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                enableSorting: false,
            }),
            Table.AccordionColumn as ColumnDef<RowData>,
        ];
        const data: RowData[] = [
            {id: '🆔-1', firstName: 'Jack', lastName: 'Russel'},
            {id: '🆔-2', firstName: 'Golden', lastName: 'Retriever'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    getRowId={({id}) => id}
                    data={data}
                    getRowExpandedContent={(row: RowData) => <Content row={row} />}
                    columns={customColumns}
                />
            );
        };
        render(<Fixture />);

        // wait for the collapsible icon to show
        await screen.findAllByRole('button', {name: 'arrowHeadDown'});

        expect(screen.queryByText('Collapsible content: Russel')).not.toBeVisible();
        expect(screen.queryByText('Collapsible content: Retriever')).not.toBeVisible();

        await user.click(within(screen.getAllByRole('row')[1]).getByRole('button', {name: 'arrowHeadDown'}));
        await waitFor(() => {
            expect(screen.queryByText('Collapsible content: Russel')).toBeVisible();
        });
        expect(screen.queryByText('Collapsible content: Retriever')).not.toBeVisible();

        await user.click(within(screen.getAllByRole('row')[3]).getByRole('button', {name: 'arrowHeadDown'}));

        await waitFor(() => {
            expect(screen.queryByText('Collapsible content: Retriever')).toBeVisible();
        });
        expect(screen.queryByText('Collapsible content: Russel')).not.toBeVisible();
    });

    it('calls an action when user double clicks on a row', async () => {
        const user = userEvent.setup();
        const doubleClickSpy = vi.fn();
        const data: RowData[] = [
            {id: '🆔-1', firstName: 'Mario'},
            {id: '🆔-2', firstName: 'Luigi'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    getRowId={({id}) => id}
                    data={data}
                    columns={columns}
                    getRowActions={() => [
                        {
                            group: 'any',
                            component: null,
                            onRowDoubleClick: doubleClickSpy,
                        },
                    ]}
                />
            );
        };
        render(<Fixture />);
        await user.dblClick(screen.getByRole('cell', {name: 'Mario'}));
        expect(doubleClickSpy).toHaveBeenCalledTimes(1);
        expect(doubleClickSpy).toHaveBeenCalledWith(
            {id: '🆔-1', firstName: 'Mario'},
            0,
            expect.objectContaining({id: '🆔-1'}),
        );
    });

    it('toggles row selection when clicking on a selected row', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {id: '🆔-1', firstName: 'first', lastName: 'last'},
            {id: '🆔-2', firstName: 'patate', lastName: 'king'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: false})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: true})).not.toBeInTheDocument();
    });

    it('prevents row deselection if row selection is forced', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {id: '🆔-1', firstName: 'first', lastName: 'last'},
            {id: '🆔-2', firstName: 'patate', lastName: 'king'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>({forceSelection: true});
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();
    });

    it('allows selection of a different row if row selection is forced', async () => {
        const user = userEvent.setup();
        const data: RowData[] = [
            {id: '🆔-1', firstName: 'first', lastName: 'last'},
            {id: '🆔-2', firstName: 'patate', lastName: 'king'},
        ];
        const Fixture = () => {
            const store = useTable<RowData>({forceSelection: true});
            return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
        };
        render(<Fixture />);

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();

        await user.click(screen.getByRole('row', {name: /first last/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: false})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: true})).not.toBeInTheDocument();
        expect(screen.getByRole('row', {name: /first last/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /first last/i, selected: false})).not.toBeInTheDocument();
    });

    describe('when multi row selection is enabled', () => {
        it('displays a checkbox as the first cell of each row', () => {
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            expect(screen.getByRole('columnheader', {name: /select all from this page/i})).toBeInTheDocument();

            const rows = screen.getAllByRole('row');
            rows.forEach((row) => {
                expect(within(row).getByRole('checkbox', {name: /select/i})).toBeInTheDocument();
            });
        });

        it('selects the rows specified in the initial state on mount', () => {
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    initialState: {rowSelection: {'🆔-2': {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}}},
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();
        });

        it('selects all rows of the current page when clicking on the checkbox that is in the column header', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            const selectAll = screen.getByRole('checkbox', {name: /select all from this page/i});
            await user.click(selectAll);

            expect(screen.getAllByRole('row', {selected: true})).toHaveLength(2);
            await user.click(selectAll);

            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
        });

        it('prevents row selection if disableRowSelection is true', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'first', lastName: 'last'},
                {id: '🆔-2', firstName: 'patate', lastName: 'king'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true, enableRowSelection: false});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(screen.getByRole('row', {name: /patate king/i}));
            expect(screen.getByRole('row', {name: /patate king/i, selected: false})).toBeInTheDocument();
            expect(screen.queryByRole('row', {name: /patate king/i, selected: true})).not.toBeInTheDocument();

            await user.click(screen.getByRole('row', {name: /first last/i}));
            expect(screen.getByRole('row', {name: /first last/i, selected: false})).toBeInTheDocument();
            expect(screen.queryByRole('row', {name: /first last/i, selected: true})).not.toBeInTheDocument();
        });

        it('prevents click on checkboxes if disableRowSelection is true', async () => {
            const user = userEvent.setup();
            const onClick = vi.fn();
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true, enableRowSelection: false});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);
            await user.click(screen.getByRole('checkbox', {name: /select all/i}));
            expect(onClick).not.toHaveBeenCalled();

            const rows = screen.getAllByRole('row');
            rows.forEach(async (row) => {
                await user.click(within(row).getByRole('checkbox', {name: /select/i}));

                expect(onClick).not.toHaveBeenCalled();
            });
        });
    });

    it('passes down attributes given by getRowAttributes function to the row element', () => {
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                header: () => 'First Name',
                cell: (info) => info.getValue().toUpperCase(),
                enableSorting: false,
            }),
            columnHelper.accessor('lastName', {
                header: () => 'Last Name',
                cell: (info) => info.getValue().toUpperCase(),
                enableSorting: false,
            }),
        ];
        const data: RowData[] = [
            {id: '1', firstName: 'Alberto', lastName: 'Contador'},
            {id: '2', firstName: 'Lance', lastName: 'Armstrong', disabled: true},
        ];
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table
                    store={store}
                    data={data}
                    columns={customColumns}
                    getRowAttributes={({disabled}) => ({'data-disabled': disabled})}
                />
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('row', {name: /alberto contador/i})).not.toHaveAttribute('data-disabled');
        expect(screen.getByRole('row', {name: /lance armstrong/i})).toHaveAttribute('data-disabled');
    });
});
