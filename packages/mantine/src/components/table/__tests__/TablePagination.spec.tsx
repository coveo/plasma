import {ColumnDef, createColumnHelper, getPaginationRowModel} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Pagination', () => {
    beforeEach(() => {
        if (!HTMLElement.prototype.scrollIntoView) {
            HTMLElement.prototype.scrollIntoView = () => {
                vi.fn();
            };
        }
    });

    it('displays the number of pages', () => {
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                <Table.Footer>
                    <Table.Pagination totalPages={3} />
                </Table.Footer>
            </Table>
        );

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5);
        expect(buttons[0]).toHaveAccessibleName('previous page');
        expect(buttons[1]).toHaveAccessibleName('1');
        expect(buttons[2]).toHaveAccessibleName('2');
        expect(buttons[3]).toHaveAccessibleName('3');
        expect(buttons[4]).toHaveAccessibleName('next page');
    });

    it('calls onChange when clicking on a page number', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Footer>
                    <Table.Pagination totalPages={5} />
                </Table.Footer>
            </Table>
        );

        onChange.mockReset();

        await user.click(screen.queryByRole('button', {name: '2'}));

        await waitFor(() => {
            expect(onChange).toHaveBeenCalledWith(
                expect.objectContaining({pagination: expect.objectContaining({pageIndex: 1})})
            );
        });
    });

    it('changes the page when the pagination is client side', async () => {
        const user = userEvent.setup();
        render(
            <Table
                data={[
                    {name: 'fruits'},
                    {name: 'vegetables'},
                    {name: 'grains'},
                    {name: 'protein foods'},
                    {name: 'dairy'},
                ]}
                columns={columns}
                initialState={{pagination: {pageSize: 3}}}
                options={{
                    getPaginationRowModel: getPaginationRowModel(),
                }}
            >
                <Table.Footer>
                    <Table.Pagination totalPages={null} />
                </Table.Footer>
            </Table>
        );

        expect(screen.getByText('fruits')).toBeVisible();
        expect(screen.getByText('vegetables')).toBeVisible();
        expect(screen.getByText('grains')).toBeVisible();
        expect(screen.queryByText('protein foods')).not.toBeInTheDocument();
        expect(screen.queryByText('dairy')).not.toBeInTheDocument();

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(4);
        expect(buttons[0]).toHaveAccessibleName('previous page');
        expect(buttons[1]).toHaveAccessibleName('1');
        expect(buttons[2]).toHaveAccessibleName('2');
        expect(buttons[3]).toHaveAccessibleName('next page');

        await user.click(screen.getByRole('button', {name: 'next page'}));

        expect(screen.queryByText('fruits')).not.toBeInTheDocument();
        expect(screen.queryByText('vegetables')).not.toBeInTheDocument();
        expect(screen.queryByText('grains')).not.toBeInTheDocument();
        expect(screen.getByText('protein foods')).toBeVisible();
        expect(screen.getByText('dairy')).toBeVisible();
    });

    it('triggers the onChangePage Callback with the right parameters', async () => {
        const user = userEvent.setup();
        const onChangePage = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns}>
                <Table.Footer>
                    <Table.PerPage />
                    <Table.Pagination totalPages={5} onPageChange={onChangePage} />
                </Table.Footer>
            </Table>
        );

        onChangePage.mockReset();

        await user.click(screen.getByRole('radio', {name: /100/i}));
        await user.click(screen.queryByRole('button', {name: '2'}));

        await waitFor(() => {
            expect(onChangePage).toHaveBeenCalledWith(1);
        });
    });

    it('renders nothing when there are no pages to show', () => {
        render(
            <Table data={[]} columns={columns} initialState={{globalFilter: 'filter'}}>
                <Table.Footer data-testid="table-footer">
                    <Table.Pagination totalPages={0} />
                </Table.Footer>
            </Table>
        );
        expect(screen.getByTestId('table-footer')).toBeEmptyDOMElement();
    });
});
