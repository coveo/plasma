import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {act, render, screen, userEvent, within} from '@test-utils';

import {Button} from '@mantine/core';
import {Table} from '../Table';
import {useTable} from '../TableContext';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.Filter', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it('displays the placeholder', () => {
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Filter placeholder="hello fruits" />
                </Table.Header>
            </Table>,
        );

        expect(screen.getByPlaceholderText('hello fruits')).toBeVisible();
    });

    it('calls onChange when typing something in the filter', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Filter />
                </Table.Header>
            </Table>,
        );

        await user.type(screen.getByRole('textbox'), 'vegetable');

        act(() => {
            // 300 ms debounce on TableFilter input
            vi.advanceTimersByTime(300);
        });
        act(() => {
            // 500 ms debounce on Table onChange callback
            vi.advanceTimersByTime(500);
        });

        expect(onChange).toHaveBeenCalledWith(expect.objectContaining({globalFilter: 'vegetable'}));
    });

    it('goes back to the first page when changing the filter', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const onChange = vi.fn();
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} onChange={onChange}>
                <Table.Header>
                    <Table.Filter />
                </Table.Header>
                <Table.Footer>
                    <Table.PerPage />
                    <Table.Pagination totalPages={2} />
                </Table.Footer>
            </Table>,
        );

        await user.type(screen.getByRole('textbox'), 'veg');
        act(() => {
            // 300 ms debounce on TableFilter input
            vi.advanceTimersByTime(300);
        });
        act(() => {
            // 500 ms debounce on Table onChange callback
            vi.advanceTimersByTime(500);
        });

        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({globalFilter: 'veg', pagination: {pageIndex: 0, pageSize: 50}}),
        );
    });

    it('clears the filter when clicking on the cross icon', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} initialState={{globalFilter: 'foo'}}>
                <Table.Header>
                    <Table.Filter placeholder="hello fruits" />
                </Table.Header>
            </Table>,
        );
        expect(screen.getByRole('textbox')).toHaveValue('foo');
        await user.click(screen.getByRole('button', {name: /cross/i}));
        expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it('clear the filter if the global state filter is cleared', async () => {
        const user = userEvent.setup({delay: null});

        const Fixture = () => {
            const {clearFilters} = useTable();
            return <Button data-testId="clear-button" onClick={clearFilters} />;
        };

        await render(
            <Table data={[{name: 'fruit'}, {name: 'vegetable'}]} columns={columns} initialState={{globalFilter: 'foo'}}>
                <Table.Header>
                    <Table.Consumer>
                        <Fixture />
                    </Table.Consumer>
                    <Table.Filter />
                </Table.Header>
            </Table>,
        );
        expect(screen.getByRole('textbox')).toHaveValue('foo');
        await user.click(screen.getByTestId('clear-button'));
        expect(screen.getByRole('textbox')).toHaveValue('');
    });

    describe('when multi row selection is enabled', () => {
        it('does not unselect rows that get filtered out', async () => {
            const user = userEvent.setup({delay: null});
            const onChange = vi.fn();
            render(
                <Table
                    data={[{name: 'fruit'}, {name: 'vegetable'}]}
                    columns={columns}
                    onChange={onChange}
                    multiRowSelectionEnabled
                >
                    <Table.Header>
                        <Table.Filter />
                    </Table.Header>
                </Table>,
            );

            await user.click(
                within(screen.getByRole('row', {name: /fruit/i})).getByRole('checkbox', {name: /select row/i}),
            );
            await user.type(screen.getByRole('textbox'), 'veg');
            expect(screen.getByRole('button', {name: /1 selected/i})).toBeInTheDocument();
        });
    });
});
