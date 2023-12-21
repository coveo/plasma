import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';

import {useState} from 'react';
import {Table} from '../Table';
import {TableLayout} from '../Table.types';
import {useTable} from '../TableContext';

type RowData = {id: string; firstName: string; lastName?: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('firstName', {enableSorting: false}),
    columnHelper.accessor('lastName', {enableSorting: false}),
];

const EmptyState = () => {
    const {isFiltered} = useTable();
    return isFiltered ? <span data-testid="filtered-empty-state" /> : <span data-testid="empty-state" />;
};

describe('Table', () => {
    describe('when it has no data', () => {
        it('hides the footer and header if the table is not filtered', () => {
            render(
                <Table data={[]} columns={columns} noDataChildren={<EmptyState />}>
                    <Table.Header data-testid="table-header">header</Table.Header>
                    <Table.Footer data-testid="table-footer">footer</Table.Footer>
                </Table>,
            );

            expect(screen.queryByTestId('table-header')).not.toBeInTheDocument();
            expect(screen.queryByTestId('table-footer')).not.toBeInTheDocument();
            expect(screen.getByTestId('empty-state')).toBeVisible();
        });

        it('does not hide the footer and header if the table is filtered', () => {
            render(
                <Table
                    data={[]}
                    columns={columns}
                    noDataChildren={<EmptyState />}
                    initialState={{globalFilter: 'something'}}
                >
                    <Table.Header data-testid="table-header">header</Table.Header>
                    <Table.Footer data-testid="table-footer">footer</Table.Footer>
                </Table>,
            );

            expect(screen.getByTestId('table-header')).toBeVisible();
            expect(screen.getByTestId('table-footer')).toBeVisible();
            expect(screen.getByTestId('filtered-empty-state')).toBeVisible();
            expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument();
        });
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
            </Table>,
        );

        expect(screen.getByRole('button', {name: 'Click me'})).toBeVisible();
        expect(spy).not.toHaveBeenCalled();

        await user.click(screen.getByRole('button', {name: 'Click me'}));

        await waitFor(() => {
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe.skip('when it is loading', () => {
        it('shows a loading animation over the no data children (filtered)', () => {
            render(
                <Table
                    loading
                    data={[]}
                    columns={columns}
                    noDataChildren={<EmptyState />}
                    initialState={{globalFilter: 'something'}}
                >
                    <Table.Header>
                        <Table.Filter data-testid="table-filter" />
                    </Table.Header>
                </Table>,
            );
            expect(screen.getByTestId('filtered-empty-state').parentElement).toHaveClass(
                'mantine-Skeleton-root mantine-Skeleton-visible',
            );
        });

        it('shows a loading animation over the no data children (unfiltered)', () => {
            render(
                <Table loading data={[]} columns={columns} noDataChildren={<EmptyState />}>
                    <Table.Header>
                        <Table.Filter data-testid="table-filter" />
                    </Table.Header>
                </Table>,
            );
            expect(screen.getByTestId('empty-state').parentElement).toHaveClass(
                'mantine-Skeleton-root mantine-Skeleton-visible',
            );
        });
    });

    it('reset row selection when user click outside the table', async () => {
        const user = userEvent.setup();
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
            </div>,
        );

        const row = screen.getByRole('row', {name: 'patate king', selected: false});

        expect(row).toBeInTheDocument();

        await user.click(row);

        expect(screen.getByRole('row', {name: 'patate king', selected: true})).toBeInTheDocument();

        await user.click(screen.getByText(/i'm a header/i));

        expect(screen.getByRole('row', {name: 'patate king', selected: false})).toBeInTheDocument();
    });

    it('does not reset row selection when clicking within one of the specified additionalRootNodes, even if it is outside the table', async () => {
        const user = userEvent.setup();

        const Fixture = () => {
            const [cousinNode, setCousinNode] = useState<HTMLDivElement>();

            return (
                <>
                    <div key="inside" ref={setCousinNode} data-testid="table-cousin">
                        clicking inside here does not clear rows selection
                    </div>
                    <div key="outside" data-testid="outside-element">
                        clicking inside here clears rows selection
                    </div>
                    <Table
                        getRowId={({id}) => id}
                        data={[
                            {id: '🆔-1', firstName: 'John', lastName: 'Doe'},
                            {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                        ]}
                        columns={columns}
                        additionalRootNodes={[cousinNode]}
                    />
                </>
            );
        };
        render(<Fixture />);

        const row = screen.getByRole('row', {name: /John Doe/i, selected: false});
        expect(row).toBeInTheDocument();
        await user.click(row);
        expect(screen.getByRole('row', {name: /John Doe/i, selected: true})).toBeInTheDocument();
        await user.click(screen.getByTestId('table-cousin'));
        expect(screen.getByRole('row', {name: /John Doe/i, selected: true})).toBeInTheDocument();
        await user.click(screen.getByTestId('outside-element'));
        expect(screen.getByRole('row', {name: /John Doe/i, selected: false})).toBeInTheDocument();
    });

    describe('with multiple layouts', () => {
        const layouts: TableLayout[] = [
            {
                name: 'Layout 1',
                Header: () => <tr data-testid="layout1-header" />,
                Body: () => <tr data-testid="layout1-body" />,
            },
            {
                name: 'Layout 2',
                Header: () => <tr data-testid="layout2-header" />,
                Body: () => <tr data-testid="layout2-body" />,
            },
        ];

        it('handles switching layout', async () => {
            const user = userEvent.setup();
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                    columns={columns}
                    layouts={layouts}
                >
                    <Table.Header data-testid="table-header" />
                </Table>,
            );
            expect(screen.getByRole('radio', {name: /layout 1/i})).toBeChecked();
            expect(screen.getByTestId('layout1-header')).toBeInTheDocument();
            expect(screen.getByTestId('layout1-body')).toBeInTheDocument();
            expect(screen.getByRole('radio', {name: /layout 2/i})).not.toBeChecked();
            expect(screen.queryByTestId('layout2-header')).not.toBeInTheDocument();
            expect(screen.queryByTestId('layout2-body')).not.toBeInTheDocument();

            await user.click(screen.getByRole('radio', {name: /layout 2/i}));

            expect(screen.getByRole('radio', {name: /layout 2/i})).toBeChecked();
            expect(screen.getByTestId('layout2-header')).toBeInTheDocument();
            expect(screen.getByTestId('layout2-body')).toBeInTheDocument();
            expect(screen.getByRole('radio', {name: /layout 1/i})).not.toBeChecked();
            expect(screen.queryByTestId('layout1-header')).not.toBeInTheDocument();
            expect(screen.queryByTestId('layout1-body')).not.toBeInTheDocument();
        });

        it('does not refetch data when switching layout', async () => {
            const user = userEvent.setup();
            const fetchDataSpy = vi.fn();
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                    columns={columns}
                    onMount={fetchDataSpy}
                    onChange={fetchDataSpy}
                    layouts={layouts}
                >
                    <Table.Header data-testid="table-header" />
                </Table>,
            );

            await user.click(screen.getByRole('radio', {name: /layout 2/i}));
            await user.click(screen.getByRole('radio', {name: /layout 1/i}));
            expect(fetchDataSpy).toHaveBeenCalledTimes(1);
        });

        it('renders the layout specified in the initialState', () => {
            render(
                <Table
                    getRowId={({id}) => id}
                    data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                    columns={columns}
                    layouts={layouts}
                    initialState={{layout: 'Layout 2'}}
                >
                    <Table.Header data-testid="table-header" />
                </Table>,
            );

            expect(screen.getByRole('radio', {name: /layout 2/i})).toBeChecked();
            expect(screen.getByTestId('layout2-header')).toBeInTheDocument();
            expect(screen.getByTestId('layout2-body')).toBeInTheDocument();
            expect(screen.getByRole('radio', {name: /layout 1/i})).not.toBeChecked();
            expect(screen.queryByTestId('layout1-header')).not.toBeInTheDocument();
            expect(screen.queryByTestId('layout1-body')).not.toBeInTheDocument();
        });
    });

    describe('when multi row selection is enabled', () => {
        it('calls the onRowSelectionChange prop when the row selection changes', async () => {
            const onRowSelectionChangeSpy = vi.fn();
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
                    onRowSelectionChange={onRowSelectionChangeSpy}
                />,
            );
            await user.click(within(screen.getByRole('row', {name: /jane doe/i})).getByRole('checkbox'));
            expect(onRowSelectionChangeSpy).toHaveBeenCalledTimes(1);
            expect(onRowSelectionChangeSpy).toHaveBeenCalledWith([{id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}]);

            onRowSelectionChangeSpy.mockClear();

            await user.click(within(screen.getByRole('row', {name: /john smith/i})).getByRole('checkbox'));
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
            const user = userEvent.setup();
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
                </div>,
            );

            const row = screen.getByRole('row', {name: /patate king/i, selected: false});

            expect(row).toBeInTheDocument();

            await user.click(within(row).getByRole('checkbox'));

            expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();

            await user.click(screen.getByText(/i'm a header/i));

            expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        });

        it('unselects all the selected rows when clicking on the the unselect button from the table header', async () => {
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
                >
                    <Table.Header />
                </Table>,
            );

            await user.click(screen.getByRole('checkbox', {name: /select all/i}));
            await user.click(screen.getByRole('button', {name: /2 selected/i}));
            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
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
                />,
            );

            expect(screen.queryByRole('button', {name: /1 selected/i})).not.toBeInTheDocument();
        });
    });
});
