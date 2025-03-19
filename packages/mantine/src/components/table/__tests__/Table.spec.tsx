import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, within} from '@test-utils';

import {useState} from 'react';
import {Table} from '../Table';
import {TableLayout} from '../Table.types';
import {useTable} from '../use-table';

type RowData = {id: string; firstName: string; lastName?: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [
    columnHelper.accessor('firstName', {enableSorting: false}),
    columnHelper.accessor('lastName', {enableSorting: false}),
];

const EmptyState = (props: {isFiltered: boolean}) =>
    props.isFiltered ? <span data-testid="filtered-empty-state" /> : <span data-testid="empty-state" />;

describe('Table', () => {
    describe('when it is vacant', () => {
        it('hides the footer and header if the table is not filtered', () => {
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {totalEntries: 0}});
                return (
                    <Table data={[]} store={store} columns={columns}>
                        <Table.Header data-testid="table-header">header</Table.Header>
                        <Table.Footer data-testid="table-footer">footer</Table.Footer>
                        <Table.NoData>
                            <EmptyState isFiltered={store.isFiltered} />
                        </Table.NoData>
                    </Table>
                );
            };
            render(<Fixture />);

            expect(screen.queryByTestId('table-header')).not.toBeInTheDocument();
            expect(screen.queryByTestId('table-footer')).not.toBeInTheDocument();
            expect(screen.getByTestId('empty-state')).toBeVisible();
        });

        it('does not hide the footer and header if the table is filtered', () => {
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {globalFilter: 'something'}});
                return (
                    <Table store={store} data={[]} columns={columns}>
                        <Table.Header data-testid="table-header">header</Table.Header>
                        <Table.Footer data-testid="table-footer">footer</Table.Footer>
                        <Table.NoData>
                            <EmptyState isFiltered={store.isFiltered} />
                        </Table.NoData>
                    </Table>
                );
            };
            render(<Fixture />);

            expect(screen.getByTestId('table-header')).toBeVisible();
            expect(screen.getByTestId('table-footer')).toBeVisible();
            expect(screen.getByTestId('filtered-empty-state')).toBeVisible();
            expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument();
        });
    });

    describe('when it is loading', () => {
        it('indicates the table element as loading', () => {
            const Fixture = ({loading}: {loading: boolean}) => {
                const store = useTable<RowData>();
                return <Table store={store} loading={loading} data={[]} columns={columns} />;
            };
            const {rerender} = render(<Fixture loading />);
            expect(screen.getByRole('table')).toHaveAttribute('data-loading', 'true');
            rerender(<Fixture loading={false} />);
            expect(screen.getByRole('table')).not.toHaveAttribute('data-loading');
        });

        it('shows a loading animation over the no data children (filtered)', () => {
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {globalFilter: 'something'}});
                return (
                    <Table store={store} loading data={[]} columns={columns}>
                        <Table.Header>
                            <Table.Filter data-testid="table-filter" />
                        </Table.Header>
                        <Table.NoData>
                            <EmptyState isFiltered={store.isFiltered} />
                        </Table.NoData>
                    </Table>
                );
            };
            render(<Fixture />);
            expect(screen.getByTestId('filtered-empty-state').parentElement).toBeVisible();
            expect(screen.getByTestId('filtered-empty-state').parentElement).toHaveClass('mantine-Skeleton-root');
        });

        it('shows a loading animation over the no data children (unfiltered)', () => {
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table store={store} loading data={[]} columns={columns}>
                        <Table.Header>
                            <Table.Filter data-testid="table-filter" />
                        </Table.Header>
                        <Table.NoData>
                            <EmptyState isFiltered={store.isFiltered} />
                        </Table.NoData>
                    </Table>
                );
            };
            render(<Fixture />);
            expect(screen.getByTestId('empty-state').parentElement).toBeVisible();
            expect(screen.getByTestId('empty-state').parentElement).toHaveClass('mantine-Skeleton-root');
        });
    });

    it('reset row selection when user click outside the table', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <div>
                    <div>outside table</div>
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={[
                            {id: '🆔-1', firstName: 'first', lastName: 'last'},
                            {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                        ]}
                        columns={columns}
                    />
                </div>
            );
        };
        render(<Fixture />);

        const row = screen.getByRole('row', {name: 'patate king', selected: false});

        expect(row).toBeInTheDocument();

        await user.click(row);

        expect(screen.getByRole('row', {name: 'patate king', selected: true})).toBeInTheDocument();

        await user.click(screen.getByText(/outside table/i));

        expect(screen.getByRole('row', {name: 'patate king', selected: false})).toBeInTheDocument();
    });

    it('does not reset row selection when clicking within one of the specified additionalRootNodes, even if it is outside the table', async () => {
        const user = userEvent.setup();

        const Fixture = () => {
            const [cousinNode, setCousinNode] = useState<HTMLDivElement>();
            const store = useTable<RowData>();

            return (
                <>
                    <div key="inside" ref={setCousinNode} data-testid="table-cousin">
                        clicking inside here does not clear rows selection
                    </div>
                    <div key="outside" data-testid="outside-element">
                        clicking inside here clears rows selection
                    </div>
                    <Table
                        store={store}
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
        const Layout1: TableLayout = ({children}) => <>{children}</>;
        Layout1.displayName = 'Layout 1';
        Layout1.Header = () => <tr data-testid="layout1-header" />;
        Layout1.Body = () => <tr data-testid="layout1-body" />;

        const Layout2: TableLayout = ({children}) => <>{children}</>;
        Layout2.displayName = 'Layout 2';
        Layout2.Header = () => <tr data-testid="layout2-header" />;
        Layout2.Body = () => <tr data-testid="layout2-body" />;

        const layouts: TableLayout[] = [Layout1, Layout2];

        it('handles switching layout', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>();
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                        columns={columns}
                        layouts={layouts}
                    >
                        <Table.Header data-testid="table-header" />
                    </Table>
                );
            };
            render(<Fixture />);
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

        it('renders the layout specified in the initialState', () => {
            const Fixture = () => {
                const store = useTable<RowData>({initialState: {layout: 'Layout 2'}});
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={[{id: '🆔', firstName: 'first', lastName: 'last'}]}
                        columns={columns}
                        layouts={layouts}
                    >
                        <Table.Header data-testid="table-header" />
                    </Table>
                );
            };
            render(<Fixture />);

            expect(screen.getByRole('radio', {name: /layout 2/i})).toBeChecked();
            expect(screen.getByTestId('layout2-header')).toBeInTheDocument();
            expect(screen.getByTestId('layout2-body')).toBeInTheDocument();
            expect(screen.getByRole('radio', {name: /layout 1/i})).not.toBeChecked();
            expect(screen.queryByTestId('layout1-header')).not.toBeInTheDocument();
            expect(screen.queryByTestId('layout1-body')).not.toBeInTheDocument();
        });
    });

    describe('when multi row selection is enabled', () => {
        it('does not clear the row selection when clicking outside the table', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <div>
                        <div>outside table</div>
                        <Table
                            store={store}
                            getRowId={({id}) => id}
                            data={[
                                {id: '🆔-1', firstName: 'first', lastName: 'last'},
                                {id: '🆔-2', firstName: 'patate', lastName: 'king'},
                            ]}
                            columns={columns}
                        />
                    </div>
                );
            };
            render(<Fixture />);

            const row = screen.getByRole('row', {name: /patate king/i, selected: false});

            expect(row).toBeInTheDocument();

            await user.click(within(row).getByRole('checkbox'));

            expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();

            await user.click(screen.getByText(/outside table/i));

            expect(screen.getByRole('row', {name: /patate king/i, selected: true})).toBeInTheDocument();
        });

        it('unselects all the selected rows when clicking on the the unselect button from the table header', async () => {
            const user = userEvent.setup();
            const Fixture = () => {
                const store = useTable<RowData>({enableMultiRowSelection: true});
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={[
                            {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                            {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                        ]}
                        columns={columns}
                    >
                        <Table.Header />
                    </Table>
                );
            };
            render(<Fixture />);

            await user.click(screen.getByRole('checkbox', {name: /select all/i}));
            await user.click(screen.getByRole('button', {name: /2 selected/i}));
            expect(screen.queryAllByRole('row', {selected: true})).toEqual([]);
        });

        it('does not display number of selected rows if disableRowSelection is true', () => {
            const Fixture = () => {
                const store = useTable<RowData>({
                    enableMultiRowSelection: true,
                    enableRowSelection: false,
                    initialState: {
                        rowSelection: {'🆔-2': {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'}},
                    },
                });
                return (
                    <Table
                        store={store}
                        getRowId={({id}) => id}
                        data={[
                            {id: '🆔-1', firstName: 'John', lastName: 'Smith'},
                            {id: '🆔-2', firstName: 'Jane', lastName: 'Doe'},
                        ]}
                        columns={columns}
                    />
                );
            };
            render(<Fixture />);

            expect(screen.queryByRole('button', {name: /1 selected/i})).not.toBeInTheDocument();
        });
    });
});
