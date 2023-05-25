import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {FunctionComponent} from 'react';

import {Table} from '../Table';
import {TableProps} from '../Table.types';
import {useTable} from '../TableContext';

type RowData = {id: string; firstName: string; lastName?: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('firstName', {enableSorting: false}),
    columnHelper.accessor('lastName', {enableSorting: false}),
];

describe('Table', () => {
    it('renders the data', () => {
        render(
            <Table
                getRowId={({id}) => id}
                data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                columns={columns}
            />
        );

        expect(screen.getByRole('columnheader', {name: 'firstName'})).toBeVisible();
        expect(screen.getByRole('columnheader', {name: 'lastName'})).toBeVisible();

        expect(
            screen.getByRole('cell', {
                name: /first/i,
            })
        ).toBeVisible();
        expect(
            screen.getByRole('cell', {
                name: /last/i,
            })
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
        render(<Table data={[{id: '🆔', firstName: 'first', lastName: 'last'}]} columns={customColumns} />);

        expect(screen.getByRole('columnheader', {name: 'First Name'})).toBeVisible();
        expect(screen.getByRole('columnheader', {name: 'Last Name'})).toBeVisible();

        expect(
            screen.getByRole('cell', {
                name: 'FIRST',
            })
        ).toBeVisible();
        expect(
            screen.getByRole('cell', {
                name: 'LAST',
            })
        ).toBeVisible();
    });

    it('renders the noDataChildren when the table is empty', () => {
        const Fixture: FunctionComponent = () => <button>Hello</button>;
        render(<Table data={[]} noDataChildren={<Fixture />} columns={columns} />);

        expect(screen.getByRole('button', {name: 'Hello'})).toBeVisible();
    });

    it('hides the footer and header when the table is empty and not filtered', () => {
        const NoData = () => <span data-testid="empty-state" />;
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
        render(
            <Table data={[]} columns={customColumns} noDataChildren={<NoData />}>
                <Table.Header data-testid="table-header">header</Table.Header>
                <Table.Footer data-testid="table-footer">footer</Table.Footer>
            </Table>
        );

        expect(screen.queryByTestId('table-header')).not.toBeInTheDocument();
        expect(screen.queryByTestId('table-footer')).not.toBeInTheDocument();
        expect(screen.getByTestId('empty-state')).toBeInTheDocument();
    });

    it('does not hide the footer and header when the table is empty and filtered', () => {
        const NoData = () => {
            const {isFiltered} = useTable();
            return isFiltered ? <span data-testid="filtered-empty-state" /> : <span data-testid="empty-state" />;
        };
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
        render(
            <Table
                data={[]}
                columns={customColumns}
                noDataChildren={<NoData />}
                initialState={{globalFilter: 'something'}}
            >
                <Table.Header data-testid="table-header">header</Table.Header>
                <Table.Footer data-testid="table-footer">footer</Table.Footer>
            </Table>
        );

        expect(screen.getByTestId('table-header')).toBeInTheDocument();
        expect(screen.getByTestId('table-footer')).toBeInTheDocument();
        expect(screen.getByTestId('filtered-empty-state')).toBeInTheDocument();
        expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument();
    });

    it('updates the table when a component in Table.Consumer triggers a change', async () => {
        const user = userEvent.setup();
        const spy = vi.fn();
        const Fixture = () => {
            const {onChange} = useTable();
            return <button onClick={() => onChange()}>Click me</button>;
        };
        render(
            <Table onChange={spy} data={[{id: '🆔', firstName: 'first', lastName: 'last'}]} columns={columns}>
                <Table.Consumer>
                    <Fixture />
                </Table.Consumer>
            </Table>
        );

        expect(screen.getByRole('button', {name: 'Click me'})).toBeVisible();
        expect(spy).not.toHaveBeenCalled();

        await user.click(screen.getByRole('button', {name: 'Click me'}));

        await waitFor(() => {
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe('shows a loading animation', () => {
        const doRender = (props: Omit<TableProps<RowData>, 'columns'>) => {
            const NoData = () => {
                const {isFiltered, clearFilters} = useTable();
                return isFiltered ? (
                    <button data-testid="filtered-empty-state" onClick={clearFilters}></button>
                ) : (
                    <span data-testid="empty-state" />
                );
            };

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
            render(
                <Table columns={customColumns} noDataChildren={<NoData />} {...props}>
                    <Table.Header>
                        <Table.Filter data-testid="table-filter" />
                    </Table.Header>
                </Table>
            );
        };

        it('when the table filtered, empty and loading', () => {
            doRender({loading: true, data: [], initialState: {globalFilter: 'something'}});
            expect(screen.getByTestId('filtered-empty-state').parentElement).toHaveClass(
                'mantine-Skeleton-root mantine-Skeleton-visible'
            );
        });

        it('when the table not filtered, empty and loading', () => {
            doRender({data: [], loading: true});
            expect(screen.getByTestId('empty-state').parentElement).toHaveClass(
                'mantine-Skeleton-root mantine-Skeleton-visible'
            );
        });
    });

    it('opens the collapsible rows when the user click on the toggle', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture: FunctionComponent<{row: RowData}> = ({row}) => <div>Collapsible content: {row.lastName}</div>;
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                enableSorting: false,
            }),
            Table.CollapsibleColumn as ColumnDef<RowData>,
        ];
        render(
            <Table
                getRowId={({id}) => id}
                data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                getExpandChildren={(row: RowData) => <Fixture row={row} />}
                columns={customColumns}
            />
        );

        // wait for the collapsible icon to show
        await screen.findByRole('button', {name: 'arrowHeadDown'});

        expect(screen.queryByText('Collapsible content: last')).not.toBeVisible();

        await user.click(screen.getByRole('button', {name: 'arrowHeadDown'}));
        await waitFor(() => {
            expect(screen.queryByText('Collapsible content: last')).toBeVisible();
        });
    });

    it('renders the collapsible button only for rows that can be expanded', async () => {
        const Fixture: FunctionComponent<{row: RowData}> = ({row}) => (
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
        render(
            <Table
                getRowId={({id}) => id}
                data={[
                    {id: '🆔-1', firstName: 'Luke', lastName: 'Skywalker'},
                    {id: '🆔-2', firstName: 'Lea', lastName: 'Skywalker'},
                    {id: '🆔-3', firstName: 'Han', lastName: 'Solo'},
                ]}
                getExpandChildren={(row: RowData) => (row.lastName === 'Skywalker' ? <Fixture row={row} /> : null)}
                columns={customColumns}
            />
        );

        // wait for the collapsible icon to show
        await screen.findAllByRole('button', {name: 'arrowHeadDown'});

        const allRows = screen.getAllByRole('button', {name: 'arrowHeadDown'});
        expect(allRows).toHaveLength(2);
    });

    it('closes the opened collapsible when using the accordion column and the user expand a different row', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture: FunctionComponent<{row: RowData}> = ({row}) => <div>Collapsible content: {row.lastName}</div>;
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                enableSorting: false,
            }),
            Table.AccordionColumn as ColumnDef<RowData>,
        ];
        render(
            <Table
                getRowId={({id}) => id}
                data={[
                    {id: '🆔-1', firstName: 'Jack', lastName: 'Russel'},
                    {id: '🆔-2', firstName: 'Golden', lastName: 'Retriever'},
                ]}
                getExpandChildren={(row: RowData) => <Fixture row={row} />}
                columns={customColumns}
            />
        );

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
        render(
            <Table<RowData>
                getRowId={({id}) => id}
                data={[
                    {id: '🆔-1', firstName: 'Mario'},
                    {id: '🆔-2', firstName: 'Luigi'},
                ]}
                columns={columns}
                doubleClickAction={doubleClickSpy}
            ></Table>
        );
        await user.dblClick(screen.getByRole('cell', {name: 'Mario'}));
        expect(doubleClickSpy).toHaveBeenCalledTimes(1);
        expect(doubleClickSpy).toHaveBeenCalledWith({id: '🆔-1', firstName: 'Mario'});
    });

    it('reset row selection when user click outside the table', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <div>
                <div>I'm a header</div>
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'first', lastName: 'last'},
                        {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                    ]}
                    columns={columns}
                />
            </div>
        );

        const row = screen.getByRole('row', {name: 'patate king', selected: false});

        expect(row).toBeInTheDocument();

        await user.click(row);

        expect(screen.getByRole('row', {name: 'patate king', selected: true})).toBeInTheDocument();

        await user.click(screen.getByText(/i'm a header/i));

        expect(screen.getByRole('row', {name: 'patate king', selected: false})).toBeInTheDocument();
    });

    describe('when multi row selection is enabled', () => {
        it('displays a checkbox as the first cell of each row', () => {
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                />
            );

            expect(screen.getByRole('columnheader', {name: /select all from this page/i})).toBeInTheDocument();

            const rows = screen.getAllByRole('row');
            rows.forEach((row) => {
                expect(within(row).getByRole('checkbox', {name: /select/i})).toBeInTheDocument();
            });
        });

        it('selects the rows specified in the initial state on mount', () => {
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                    initialState={{
                        rowSelection: {'🆔-2': {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}},
                    }}
                />
            );

            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();
        });

        it('selects all rows of the current page when clicking on the checkbox that is in the column header', async () => {
            const user = userEvent.setup({delay: null});
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                />
            );

            const selectAll = screen.getByRole('checkbox', {name: /select all from this page/i});
            await user.click(selectAll);

            expect(screen.getAllByRole('row', {selected: true})).toHaveLength(2);
            await user.click(selectAll);

            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
        });

        it('calls the onRowSelectionChange prop when the row selection changes', async () => {
            const onRowSelectionChangeSpy = vi.fn();
            const user = userEvent.setup({delay: null});
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                    onRowSelectionChange={onRowSelectionChangeSpy}
                />
            );
            await user.click(screen.getByRole('row', {name: /jane doe/i}));
            expect(onRowSelectionChangeSpy).toHaveBeenCalledTimes(1);
            expect(onRowSelectionChangeSpy).toHaveBeenCalledWith([{id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}]);

            onRowSelectionChangeSpy.mockClear();

            await user.click(screen.getByRole('row', {name: /john smith/i}));
            expect(onRowSelectionChangeSpy).toHaveBeenCalledTimes(1);
            expect(onRowSelectionChangeSpy).toHaveBeenCalledWith([
                {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
            ]);

            onRowSelectionChangeSpy.mockClear();

            await user.click(screen.getByRole('checkbox', {name: /unselect all from this page/i}));
            expect(onRowSelectionChangeSpy).toHaveBeenCalledTimes(1);
            expect(onRowSelectionChangeSpy).toHaveBeenCalledWith([]);
        });

        it('does not clear the row selection when clicking outside the table', async () => {
            const user = userEvent.setup({delay: null});
            render(
                <div>
                    <div>I'm a header</div>
                    <Table
                        getRowId={({id}) => id}
                        data={[
                            {id: '🆔-1', firstName: 'first', lastName: 'last'},
                            {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                        ]}
                        columns={columns}
                        multiRowSelectionEnabled
                    />
                </div>
            );

            const row = screen.getByRole('row', {name: /patate king/i, selected: false});

            expect(row).toBeInTheDocument();

            await user.click(row);

            expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();

            await user.click(screen.getByText(/i'm a header/i));

            expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        });

        it('unselects all the selected rows when clicking on the the unselect button from the table header', async () => {
            const user = userEvent.setup({delay: null});
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                >
                    <Table.Header />
                </Table>
            );

            await user.click(screen.getByRole('checkbox', {name: /select all/i}));
            await user.click(screen.getByRole('button', {name: /2 selected/i}));
            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
        });

        it('prevents row selection if disableRowSelection is true', async () => {
            const user = userEvent.setup({delay: null});

            render(
                <div>
                    <Table
                        getRowId={({id}) => id}
                        data={[
                            {id: '🆔-1', firstName: 'first', lastName: 'last'},
                            {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                        ]}
                        columns={columns}
                        multiRowSelectionEnabled
                        disableRowSelection
                    />
                </div>
            );

            await user.click(screen.getByRole('row', {name: /patate king/i}));
            expect(screen.getByRole('row', {name: /patate king/i, selected: false})).toBeInTheDocument();
            expect(screen.queryByRole('row', {name: /patate king/i, selected: true})).not.toBeInTheDocument();

            await user.click(screen.getByRole('row', {name: /first last/i}));
            expect(screen.getByRole('row', {name: /first last/i, selected: false})).toBeInTheDocument();
            expect(screen.queryByRole('row', {name: /first last/i, selected: true})).not.toBeInTheDocument();
        });

        it('prevents click on checkboxes if disableRowSelection is true', async () => {
            const user = userEvent.setup({delay: null});

            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                    disableRowSelection
                />
            );

            expect(screen.getByRole('checkbox', {name: /select all/i})).toHaveStyle('pointerEvents: none');

            const rows = screen.getAllByRole('row');
            rows.forEach(async (row) => {
                const checkbox = within(row).getByRole('checkbox', {name: /select/i});
                expect(checkbox).toHaveStyle('pointerEvents: none');
            });
        });

        it('does not display number of selected rows if disableRowSelection is true', async () => {
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                    initialState={{
                        rowSelection: {'🆔-2': {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}},
                    }}
                />
            );

            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();
            expect(screen.queryByRole('button', {name: /1 selected/i})).not.toBeInTheDocument();
        });
    });
});
