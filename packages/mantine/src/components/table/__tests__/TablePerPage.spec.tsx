import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.PerPage', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it('displays the label', () => {
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                <Table.Footer>
                    <Table.PerPage label="Per page" />
                </Table.Footer>
            </Table>,
        );

        expect(screen.getByText('Per page')).toBeVisible();
    });

    it('displays the values', () => {
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                initialState={{pagination: {pageSize: 2}}}
            >
                <Table.Footer>
                    <Table.PerPage label="Per page" values={[2, 7, 12, 17]} />
                </Table.Footer>
            </Table>,
        );

        const radios = screen.getAllByRole('radio');
        expect(radios).toHaveLength(4);
        expect(radios[0]).toHaveAccessibleName('2');
        expect(radios[1]).toHaveAccessibleName('7');
        expect(radios[2]).toHaveAccessibleName('12');
        expect(radios[3]).toHaveAccessibleName('17');
    });

    it('calls onMount with the initial value', () => {
        const onMount = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onMount={onMount}
                initialState={{pagination: {pageSize: 100}}}
            >
                <Table.Footer>
                    <Table.PerPage />
                </Table.Footer>
            </Table>,
        );

        expect(onMount).toHaveBeenCalledWith(
            expect.objectContaining({pagination: expect.objectContaining({pageSize: 100})}),
        );
    });

    it('calls onChange when changing the number of items per page', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Footer>
                    <Table.PerPage />
                </Table.Footer>
            </Table>,
        );

        await user.click(screen.queryByRole('radio', {name: '100'}));
        vi.advanceTimersByTime(500);
        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({pagination: expect.objectContaining({pageSize: 100})}),
        );
    });

    it('resets page index when changing the number of items per page', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const onChange = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onChange={onChange}
                initialState={{pagination: {pageIndex: 1, pageSize: 50}}}
            >
                <Table.Footer>
                    <Table.Pagination totalPages={2} />
                    <Table.PerPage />
                </Table.Footer>
            </Table>,
        );

        await user.click(screen.queryByRole('radio', {name: '100'}));
        vi.advanceTimersByTime(500);
        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({pagination: expect.objectContaining({pageIndex: 0})}),
        );
    });

    it('triggers the onChangePage Callback with the right parameters', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const onPerPageChange = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                initialState={{pagination: {pageIndex: 1, pageSize: 50}}}
            >
                <Table.Footer>
                    <Table.Pagination totalPages={2} />
                    <Table.PerPage onPerPageChange={onPerPageChange} />
                </Table.Footer>
            </Table>,
        );

        onPerPageChange.mockReset();

        await user.click(screen.getByRole('radio', {name: /100/i}));

        await waitFor(() => {
            expect(onPerPageChange).toHaveBeenCalledWith(100);
        });
    });

    it('renders nothing when there are no pages to show', () => {
        render(
            <Table data={[]} columns={columns} initialState={{globalFilter: 'filter'}}>
                <Table.Footer data-testid="table-footer">
                    <Table.PerPage />
                </Table.Footer>
            </Table>,
        );
        expect(screen.getByTestId('table-footer')).toBeEmptyDOMElement();
    });
});
