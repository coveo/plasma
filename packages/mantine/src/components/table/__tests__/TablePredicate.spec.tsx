import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Predicate', () => {
    it('displays the intial value', async () => {
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
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
            </Table>
        );

        await waitFor(() => {
            expect(
                screen.getByRole('searchbox', {
                    name: 'rank',
                })
            ).toHaveValue('Second');
        });
    });

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
            </Table>
        );

        await waitFor(() => {
            expect(
                screen.getByRole('searchbox', {
                    name: 'rank',
                })
            ).toHaveValue('Second');
        });
        expect(onMount).toHaveBeenCalledWith(expect.objectContaining({predicates: {rank: 'second'}}));
    });

    it('calls onChange when changing the predicate', async () => {
        const user = userEvent.setup({delay: null});
        const onChange = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onChange={onChange}
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
            </Table>
        );

        await waitFor(() => {
            expect(
                screen.getByRole('searchbox', {
                    name: 'rank',
                })
            ).toHaveValue('Second');
        });

        await user.click(
            screen.getByRole('searchbox', {
                name: 'rank',
            })
        );

        await user.click(
            screen.getByRole('option', {
                name: 'First',
            })
        );

        expect(
            screen.getByRole('searchbox', {
                name: 'rank',
            })
        ).toHaveValue('First');

        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({predicates: {rank: 'first'}}));
    });
});
