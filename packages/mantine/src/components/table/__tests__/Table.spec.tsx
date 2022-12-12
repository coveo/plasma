import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';
import {FunctionComponent} from 'react';

import {Table} from '../Table';

type RowData = {firstName: string; lastName?: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('firstName', {enableSorting: false}),
    columnHelper.accessor('lastName', {enableSorting: false}),
];

describe('Table', () => {
    it('renders the data', () => {
        render(<Table data={[{firstName: 'first', lastName: 'last'}]} columns={columns} />);

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
        render(<Table data={[{firstName: 'first', lastName: 'last'}]} columns={customColumns} />);

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

    it('opens the collapsible rows when the user click on the toggle', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture: FunctionComponent<{row: RowData}> = ({row}) => <div>Collapsible content: {row.lastName}</div>;
        const customColumns: Array<ColumnDef<RowData>> = [
            columnHelper.accessor('firstName', {
                enableSorting: false,
            }),
            Table.CollapsibleColumn,
        ];
        render(
            <Table
                data={[{firstName: 'first', lastName: 'last'}]}
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
            Table.CollapsibleColumn,
        ];
        render(
            <Table
                data={[
                    {firstName: 'Luke', lastName: 'Skywalker'},
                    {firstName: 'Lea', lastName: 'Skywalker'},
                    {firstName: 'Han', lastName: 'Solo'},
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

    it('calls an action when user double clicks on a row', async () => {
        const user = userEvent.setup();
        const doubleClickSpy = jest.fn();
        render(
            <Table<RowData>
                data={[{firstName: 'Mario'}, {firstName: 'Luigi'}]}
                columns={columns}
                doubleClickAction={doubleClickSpy}
            ></Table>
        );
        await user.dblClick(screen.getByRole('cell', {name: 'Mario'}));
        expect(doubleClickSpy).toHaveBeenCalledTimes(1);
        expect(doubleClickSpy).toHaveBeenCalledWith({firstName: 'Mario'});
    });

    it('reset row selection when user click outside the table', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <div>
                <div>I'm a header</div>
                <Table
                    data={[
                        {firstName: 'first', lastName: 'last'},
                        {firstName: 'patate', lastName: 'king'},
                    ]}
                    columns={columns}
                />
            </div>
        );

        const row = screen.getByRole('row', {name: 'patate king'});

        expect(row).not.toHaveClass('__mantine-ref-rowSelected');

        await user.click(row);

        expect(row).toHaveClass('__mantine-ref-rowSelected');

        await user.click(screen.getByText(/i'm a header/i));

        expect(row).not.toHaveClass('__mantine-ref-rowSelected');
    });
});
