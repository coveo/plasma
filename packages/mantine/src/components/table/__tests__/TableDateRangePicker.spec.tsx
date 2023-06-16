import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor, within} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];
const basicTableWithDateRangePicker = (
    <Table
        data={[{name: 'fruit'}, {name: 'vegetable'}]}
        columns={columns}
        initialState={{dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]}}
    >
        <Table.Header>
            <Table.DateRangePicker />
        </Table.Header>
    </Table>
);

describe('Table.DateRangePicker', () => {
    it('displays the initial dates', async () => {
        render(basicTableWithDateRangePicker);

        expect(screen.getByText('Jan 01, 2022 - Jan 07, 2022')).toBeVisible();
    });

    it('opens the dialog when clicking on the calendar button', async () => {
        const user = userEvent.setup();
        render(basicTableWithDateRangePicker);

        await user.click(screen.getByRole('button', {name: 'calendar'}));
        expect(screen.getByRole('dialog', {name: 'calendar'})).toBeVisible();
    });

    it('closes the dialog when clicking back on the calendar button', async () => {
        const user = userEvent.setup();
        render(basicTableWithDateRangePicker);

        await user.click(screen.getByRole('button', {name: 'calendar'}));
        await user.click(screen.getByRole('button', {name: 'calendar'}));
        expect(screen.queryByRole('dialog', {name: 'calendar'})).not.toBeInTheDocument();
    }, 10000);

    it('displays the selected date range in the table', async () => {
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 15));
        const user = userEvent.setup({delay: null});
        const onChange = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onChange={onChange}
                initialState={{dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]}}
            >
                <Table.Header data-testid="table-header">
                    <Table.DateRangePicker
                        presets={{preset: {label: 'Preset', range: [new Date(2022, 0, 8), new Date(2022, 0, 14)]}}}
                    />
                </Table.Header>
            </Table>
        );
        const tableHeader = screen.getByTestId('table-header');

        expect(within(tableHeader).getByText('Jan 01, 2022 - Jan 07, 2022')).toBeInTheDocument();
        await user.click(within(tableHeader).getByRole('button', {name: 'calendar'}));

        const calendar = await screen.findByRole('dialog', {name: 'calendar'});

        // select a preset
        await user.click(within(calendar).getByRole('searchbox', {name: 'Date range'}));
        await user.click(within(calendar).getByRole('option', {name: 'Preset'}));
        await user.click(within(calendar).getByRole('button', {name: 'Apply'}));

        await waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
        });
        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({dateRange: [new Date(2022, 0, 8), new Date(2022, 0, 14)]})
        );
        expect(within(tableHeader).getByText('Jan 08, 2022 - Jan 14, 2022')).toBeInTheDocument();

        vi.useRealTimers();
    }, 20000);
});
