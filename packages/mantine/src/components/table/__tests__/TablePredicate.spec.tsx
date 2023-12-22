import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe.skip('Table.Predicate', () => {
    it('calls onMount with the initial value', async () => {
        const onMount = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onMount={onMount}
                initialState={{predicates: {rank: 'second'}}}
            >
                <Table.Header>
                    <Table.Predicate
                        id="rank"
                        data={[
                            {value: 'first', label: 'First'},
                            {value: 'second', label: 'Second'},
                        ]}
                    />
                </Table.Header>
            </Table>,
        );

        await waitFor(() => {
            expect(screen.getByRole('searchbox', {name: 'rank'})).toHaveValue('Second');
        });
        expect(onMount).toHaveBeenCalledWith(expect.objectContaining({predicates: {rank: 'second'}}));
    });

    it('calls onChange when changing the predicate', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header data-testid="table-header">
                    <Table.Predicate
                        id="rank"
                        data={[
                            {value: 'first', label: 'First'},
                            {value: 'second', label: 'Second'},
                        ]}
                    />
                </Table.Header>
            </Table>,
        );

        await user.click(screen.getByRole('searchbox', {name: 'rank'}));
        await user.click(screen.getByRole('option', {name: 'First'}));

        expect(screen.getByRole('searchbox', {name: 'rank'})).toHaveValue('First');
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
        });
        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({predicates: {rank: 'first'}}));
    });

    it('goes back to the first page when changing the predicate', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Predicate
                        id="rank"
                        data={[
                            {value: 'first', label: 'First'},
                            {value: 'second', label: 'Second'},
                        ]}
                    />
                </Table.Header>
                <Table.Footer>
                    <Table.PerPage />
                    <Table.Pagination totalPages={2} />
                </Table.Footer>
            </Table>,
        );
        await user.click(screen.getByRole('searchbox', {name: 'rank'}));
        await user.click(screen.getByRole('option', {name: 'First'}));
        expect(screen.getByRole('searchbox', {name: 'rank'})).toHaveValue('First');
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
        });
        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({predicates: {rank: 'first'}, pagination: {pageIndex: 0, pageSize: 50}}),
        );
    });
});
