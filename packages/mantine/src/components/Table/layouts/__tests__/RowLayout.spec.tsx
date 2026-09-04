import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {createEvent, fireEvent, render, screen, userEvent, waitFor, within} from '@test-utils';
import {FunctionComponent} from 'react';
import {Table} from '../../Table.js';
import {useTable} from '../../use-table.js';

describe('RowLayout', () => {
    type RowData = {id: string; firstName: string; lastName?: string; disabled?: boolean};

    const columnHelper = createColumnHelper<RowData>();
    const columns: Array<ColumnDef<RowData, unknown>> = [
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
        const customColumns: Array<ColumnDef<RowData, unknown>> = [
            columnHelper.accessor('firstName', {
                header: () => 'First Name',
                cell: (info) => info.getValue()!.toUpperCase(),
                enableSorting: false,
            }),
            columnHelper.accessor('lastName', {
                header: () => 'Last Name',
                cell: (info) => info.getValue()!.toUpperCase(),
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
        const customColumns: Array<ColumnDef<RowData, unknown>> = [
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
        const customColumns: Array<ColumnDef<RowData, unknown>> = [
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
        await screen.findByRole('button', {name: 'Expand'});

        expect(screen.queryByText('Collapsible content: last')).not.toBeVisible();

        await user.click(screen.getByRole('button', {name: 'Expand'}));
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

        const customColumns: Array<ColumnDef<RowData, unknown>> = [
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
        await screen.findAllByRole('button', {name: 'Expand'});

        const allRows = screen.getAllByRole('button', {name: 'Expand'});
        expect(allRows).toHaveLength(2);
    });

    it('closes the opened collapsible when using the accordion column and the user expand a different row', async () => {
        const user = userEvent.setup();
        const Content: FunctionComponent<{row: RowData}> = ({row}) => <div>Collapsible content: {row.lastName}</div>;
        const customColumns: Array<ColumnDef<RowData, unknown>> = [
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
        await screen.findAllByRole('button', {name: 'Expand'});

        expect(screen.queryByText('Collapsible content: Russel')).not.toBeVisible();
        expect(screen.queryByText('Collapsible content: Retriever')).not.toBeVisible();

        await user.click(within(screen.getAllByRole('row')[1]).getByRole('button', {name: 'Expand'}));
        await waitFor(() => {
            expect(screen.queryByText('Collapsible content: Russel')).toBeVisible();
        });
        expect(screen.queryByText('Collapsible content: Retriever')).not.toBeVisible();

        await user.click(within(screen.getAllByRole('row')[3]).getByRole('button', {name: 'Expand'}));

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
                <Table<RowData>
                    store={store}
                    getRowId={({id}) => id}
                    data={data}
                    columns={columns}
                    layoutProps={{onRowDoubleClick: doubleClickSpy}}
                />
            );
        };
        render(<Fixture />);
        await user.dblClick(screen.getByRole('cell', {name: 'Mario'}));
        expect(doubleClickSpy).toHaveBeenCalledTimes(1);
        expect(doubleClickSpy).toHaveBeenCalledExactlyOnceWith(
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

        it('toggles row selection when clicking on the row', async () => {
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

            await user.click(screen.getByRole('row', {name: /john smith/i}));
            expect(screen.getByRole('row', {name: /john smith/i, selected: true})).toBeInTheDocument();
            expect(screen.getByRole('row', {name: /jane doe/i, selected: false})).toBeInTheDocument();

            await user.click(screen.getByRole('row', {name: /jane doe/i}));
            expect(screen.getByRole('row', {name: /john smith/i, selected: true})).toBeInTheDocument();
            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();

            await user.click(screen.getByRole('row', {name: /john smith/i}));
            expect(screen.getByRole('row', {name: /john smith/i, selected: false})).toBeInTheDocument();
            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();
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

        it('keeps selected rows selected through their checkboxes when row selection is forced', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    forceSelection: true,
                    initialState: {rowSelection: {'🆔-1': data[0]}},
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            const firstRow = screen.getByRole('row', {name: /john smith/i});
            const secondRow = screen.getByRole('row', {name: /jane doe/i});
            await user.click(within(secondRow).getByRole('checkbox', {name: /select row/i}));
            expect(firstRow).toHaveAttribute('aria-selected', 'true');
            expect(secondRow).toHaveAttribute('aria-selected', 'true');

            await user.click(within(firstRow).getByRole('checkbox', {name: /select row/i}));
            expect(firstRow).toHaveAttribute('aria-selected', 'true');
            expect(secondRow).toHaveAttribute('aria-selected', 'true');
        });

        it('uses a forced selected row as the range anchor when it is clicked', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'One'},
                {id: '2', firstName: 'Two'},
                {id: '3', firstName: 'Three'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    forceSelection: true,
                    initialState: {rowSelection: {'1': data[0]}},
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(within(screen.getByTestId('1')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{Shift>}');
            await user.click(within(screen.getByTestId('3')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{/Shift}');

            for (const id of ['1', '2', '3']) {
                expect(screen.getByTestId(id)).toHaveAttribute('aria-selected', 'true');
            }
        });

        it('selects a range of rows with Shift-click and preserves selections outside the range', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'One'},
                {id: '2', firstName: 'Two'},
                {id: '3', firstName: 'Three'},
                {id: '4', firstName: 'Four'},
                {id: '5', firstName: 'Five'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(screen.getByTestId('5'));
            await user.click(within(screen.getByTestId('2')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{Shift>}');
            await user.click(within(screen.getByTestId('4')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{/Shift}');

            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'false');
            for (const id of ['2', '3', '4', '5']) {
                expect(screen.getByTestId(id)).toHaveAttribute('aria-selected', 'true');
            }
        });

        it('selects a range by Shift-clicking row surfaces', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'One'},
                {id: '2', firstName: 'Two'},
                {id: '3', firstName: 'Three'},
                {id: '4', firstName: 'Four'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(screen.getByTestId('1'));
            await user.keyboard('{Shift>}');
            await user.click(screen.getByTestId('3'));
            await user.keyboard('{/Shift}');

            for (const id of ['1', '2', '3']) {
                expect(screen.getByTestId(id)).toHaveAttribute('aria-selected', 'true');
            }
            expect(screen.getByTestId('4')).toHaveAttribute('aria-selected', 'false');
        });

        it('prevents text selection when Shift-clicking a selectable row', () => {
            const data: RowData[] = [{id: '1', firstName: 'One'}];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            const row = screen.getByTestId('1');
            const shiftMouseDown = createEvent.mouseDown(row, {shiftKey: true});
            fireEvent(row, shiftMouseDown);

            expect(shiftMouseDown.defaultPrevented).toBe(true);
        });

        it('selects the full range when the Shift-click target is already selected', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'One'},
                {id: '2', firstName: 'Two'},
                {id: '3', firstName: 'Three'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    initialState: {rowSelection: {'3': data[2]}},
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(within(screen.getByTestId('1')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{Shift>}');
            await user.click(within(screen.getByTestId('3')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{/Shift}');

            expect(screen.getAllByRole('row', {selected: true})).toHaveLength(3);
        });

        it('resets the range anchor when the selection is cleared', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'One'},
                {id: '2', firstName: 'Two'},
                {id: '3', firstName: 'Three'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            const firstCheckbox = within(screen.getByTestId('1')).getByRole('checkbox', {name: /select row/i});
            await user.click(firstCheckbox);
            await user.click(firstCheckbox);
            await user.keyboard('{Shift>}');
            await user.click(within(screen.getByTestId('3')).getByRole('checkbox', {name: /select row/i}));
            await user.keyboard('{/Shift}');

            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'false');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'false');
            expect(screen.getByTestId('3')).toHaveAttribute('aria-selected', 'true');
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

        it('selects only rows allowed by the row selection predicate', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'Selectable'},
                {id: '2', firstName: 'Disabled', disabled: true},
                {id: '3', firstName: 'Also selectable'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    enableRowSelection: (row) => !row.original.disabled,
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            const selectableRow = screen.getByTestId('1');
            const disabledRow = screen.getByTestId('2');
            expect(selectableRow).toHaveAttribute('data-selectable', 'true');
            expect(selectableRow).not.toHaveAttribute('data-selection-disabled');
            expect(disabledRow).toHaveAttribute('data-selectable', 'false');
            expect(disabledRow).toHaveAttribute('data-selection-disabled', 'true');
            expect(within(selectableRow).getByRole('checkbox', {name: /select row/i})).toBeVisible();
            expect(within(disabledRow).queryByRole('checkbox', {name: /select row/i})).not.toBeInTheDocument();

            await user.click(disabledRow);
            expect(disabledRow).toHaveAttribute('aria-selected', 'false');

            await user.click(screen.getByRole('checkbox', {name: /select all from this page/i}));
            expect(selectableRow).toHaveAttribute('aria-selected', 'true');
            expect(disabledRow).toHaveAttribute('aria-selected', 'false');
            expect(screen.getByTestId('3')).toHaveAttribute('aria-selected', 'true');
        });

        it('skips rows rejected by the row selection predicate when selecting a range', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '1', firstName: 'One'},
                {id: '2', firstName: 'Two', disabled: true},
                {id: '3', firstName: 'Three'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    enableRowSelection: (row) => !row.original.disabled,
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(screen.getByTestId('1'));
            await user.keyboard('{Shift>}');
            await user.click(screen.getByTestId('3'));
            await user.keyboard('{/Shift}');

            expect(screen.getByTestId('1')).toHaveAttribute('aria-selected', 'true');
            expect(screen.getByTestId('2')).toHaveAttribute('aria-selected', 'false');
            expect(screen.getByTestId('3')).toHaveAttribute('aria-selected', 'true');
        });

        it('prevents row selection when row selection is disabled', async () => {
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

        it('does not render selection checkboxes when row selection is disabled and the selection is empty', () => {
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true, enableRowSelection: false});
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            expect(screen.queryByRole('checkbox', {name: /select all/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('checkbox', {name: /select row/i})).not.toBeInTheDocument();
        });

        it('renders read-only selection checkboxes when row selection is disabled and the selection is not empty', () => {
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    enableRowSelection: false,
                    initialState: {rowSelection: {'🆔-2': {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}}},
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            const rowCheckboxes = screen.getAllByRole('checkbox', {name: /select row/i});
            expect(rowCheckboxes).toHaveLength(2);
            expect(screen.getByRole('checkbox', {name: /select all/i})).toBeInTheDocument();
            expect(screen.getByRole('row', {name: /john smith/i, selected: false})).not.toHaveAttribute(
                'data-selection-disabled',
            );
            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).not.toHaveAttribute(
                'data-selection-disabled',
            );
        });

        it('does not mark rows as selection disabled while loading', () => {
            const data: RowData[] = [{id: '1', firstName: 'Selectable'}];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    enableRowSelection: (row) => !row.original.disabled,
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} loading />;
            };
            render(<Fixture />);

            expect(screen.getByTestId('1')).not.toHaveAttribute('data-selection-disabled');
        });

        it('does not change the selection when clicking read-only checkboxes', async () => {
            const user = userEvent.setup();
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    enableRowSelection: false,
                    initialState: {rowSelection: {'🆔-2': {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}}},
                });
                return <Table store={store} getRowId={({id}) => id} data={data} columns={columns} />;
            };
            render(<Fixture />);

            await user.click(screen.getAllByRole('checkbox', {name: /select row/i})[0]);

            expect(screen.getByRole('row', {name: /john smith/i, selected: false})).toBeInTheDocument();
            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();
        });

        it('does not trigger the double click action when double clicking on the selection checkbox', async () => {
            const user = userEvent.setup();
            const doubleClickSpy = vi.fn();
            const data: RowData[] = [
                {id: '🆔-1', firstName: 'Mario'},
                {id: '🆔-2', firstName: 'Luigi'},
            ];
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table<RowData>
                        store={store}
                        getRowId={({id}) => id}
                        data={data}
                        columns={columns}
                        layoutProps={{onRowDoubleClick: doubleClickSpy}}
                    />
                );
            };
            render(<Fixture />);
            await user.dblClick(
                within(screen.getByRole('row', {name: /Mario/i})).getByRole('checkbox', {name: /select row/i}),
            );
            expect(doubleClickSpy).not.toHaveBeenCalled();
        });
    });

    it('passes down attributes given by getRowAttributes function to the row element', () => {
        const customColumns: Array<ColumnDef<RowData, unknown>> = [
            columnHelper.accessor('firstName', {
                header: () => 'First Name',
                cell: (info) => info.getValue()!.toUpperCase(),
                enableSorting: false,
            }),
            columnHelper.accessor('lastName', {
                header: () => 'Last Name',
                cell: (info) => info.getValue()!.toUpperCase(),
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
