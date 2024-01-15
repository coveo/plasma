import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';
import {FunctionComponent} from 'react';
import {Table} from '../../Table';
import {TableLayouts} from '../TableLayouts';

describe('RowLayout', () => {
    type RowData = {id: string; firstName: string; lastName?: string};

    const columnHelper = createColumnHelper<RowData>();
    const columns: Array<ColumnDef<RowData>> = [
        columnHelper.accessor('firstName', {enableSorting: false}),
        columnHelper.accessor('lastName', {enableSorting: false}),
    ];

    it('renders the data using the RowLayout by default', () => {
        render(
            <Table
                getRowId={({id}) => id}
                data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                columns={columns}
            />,
        );

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
        render(<Table data={[{id: '🆔', firstName: 'first', lastName: 'last'}]} columns={customColumns} />);

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
        render(
            <Table
                getRowId={({id}) => id}
                data={[
                    {id: 'ash', firstName: 'Ash', lastName: 'Ketchum'},
                    {id: 'gary', firstName: 'Gary', lastName: 'Oak'},
                ]}
                columns={customColumns}
            />,
        );

        expect(screen.getByTestId('ash')).toBeVisible();
        expect(screen.getByTestId('ash_firstName')).toHaveTextContent('Ash');
        expect(screen.getByTestId('ash_lastName')).toHaveTextContent('Ketchum');

        expect(screen.getByTestId('gary')).toBeVisible();
        expect(screen.getByTestId('gary_firstName')).toHaveTextContent('Gary');
        expect(screen.getByTestId('gary_lastName')).toHaveTextContent('Oak');
    });

    it('opens the collapsible rows when the user click on the toggle', async () => {
        const user = userEvent.setup();
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
            />,
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
            />,
        );

        // wait for the collapsible icon to show
        await screen.findAllByRole('button', {name: 'arrowHeadDown'});

        const allRows = screen.getAllByRole('button', {name: 'arrowHeadDown'});
        expect(allRows).toHaveLength(2);
    });

    it('closes the opened collapsible when using the accordion column and the user expand a different row', async () => {
        const user = userEvent.setup();
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
            />,
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
            ></Table>,
        );
        await user.dblClick(screen.getByRole('cell', {name: 'Mario'}));
        expect(doubleClickSpy).toHaveBeenCalledTimes(1);
        expect(doubleClickSpy).toHaveBeenCalledWith({id: '🆔-1', firstName: 'Mario'});
    });

    it('toggles row selection when clicking on a selected row', async () => {
        const user = userEvent.setup();

        render(
            <div>
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'first', lastName: 'last'},
                        {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                    ]}
                    columns={columns}
                />
            </div>,
        );

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: false})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: true})).not.toBeInTheDocument();
    });

    it('prevents row toggle if keepSelection is true', async () => {
        const user = userEvent.setup();

        render(
            <div>
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'first', lastName: 'last'},
                        {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                    ]}
                    columns={columns}
                    layouts={[
                        {
                            ...TableLayouts.Rows,
                            Body: (props) => <TableLayouts.Rows.Body {...props} keepSelection />,
                        },
                    ]}
                />
            </div>,
        );

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();

        await user.click(screen.getByRole('row', {name: /patate king/i}));
        expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        expect(screen.queryByRole('row', {name: /patate king/i, selected: false})).not.toBeInTheDocument();
    });

    it('allows selection of another row if keepSelection is true', async () => {
        const user = userEvent.setup();

        render(
            <div>
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'first', lastName: 'last'},
                        {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                    ]}
                    columns={columns}
                    layouts={[
                        {
                            ...TableLayouts.Rows,
                            Body: (props) => <TableLayouts.Rows.Body {...props} keepSelection />,
                        },
                    ]}
                />
            </div>,
        );

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
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                />,
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
                />,
            );

            expect(screen.getByRole('row', {name: /jane doe/i, selected: true})).toBeInTheDocument();
        });

        it('selects all rows of the current page when clicking on the checkbox that is in the column header', async () => {
            const user = userEvent.setup();
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[
                        {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                        {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                    ]}
                    columns={columns}
                    multiRowSelectionEnabled
                />,
            );

            const selectAll = screen.getByRole('checkbox', {name: /select all from this page/i});
            await user.click(selectAll);

            expect(screen.getAllByRole('row', {selected: true})).toHaveLength(2);
            await user.click(selectAll);

            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
        });

        it('prevents row selection if disableRowSelection is true', async () => {
            const user = userEvent.setup();

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
                </div>,
            );

            await user.click(screen.getByRole('row', {name: /patate king/i}));
            expect(screen.getByRole('row', {name: /patate king/i, selected: false})).toBeInTheDocument();
            expect(screen.queryByRole('row', {name: /patate king/i, selected: true})).not.toBeInTheDocument();

            await user.click(screen.getByRole('row', {name: /first last/i}));
            expect(screen.getByRole('row', {name: /first last/i, selected: false})).toBeInTheDocument();
            expect(screen.queryByRole('row', {name: /first last/i, selected: true})).not.toBeInTheDocument();
        });

        it('prevents click on checkboxes if disableRowSelection is true', async () => {
            const onClick = vi.fn();
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
                />,
            );
            screen.getByRole('checkbox', {name: /select all/i}).click();
            expect(onClick).not.toHaveBeenCalled();

            const rows = screen.getAllByRole('row');
            rows.forEach(async (row) => {
                const checkbox = within(row).getByRole('checkbox', {name: /select/i});
                checkbox.click();
                expect(onClick).not.toHaveBeenCalled();
            });
        });
    });
});
