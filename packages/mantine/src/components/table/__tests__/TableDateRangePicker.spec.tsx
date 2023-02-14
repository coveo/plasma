import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

// Since we're mocking the date and the animations are timer based we're mocking useReduceMotion to disable all the animations
// I tried wrapping the components in <MantineProvider theme={{components: {Transition: {defaultProps: {duration: 0}}}}}>
// but the animation was still happening. :(
vi.mock('@mantine/hooks', async () => {
    const actual = await vi.importActual('@mantine/hooks');
    return {
        ...actual,
        useReduceMotion: () => true,
    };
});

describe('Table.DateRangePicker', () => {
    // vi.setTimeout(15000);

    beforeEach(() => {
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 15));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('displays the intial dates', async () => {
        render(
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

        await waitFor(() => {
            expect(screen.getByText('Jan 01, 2022 - Jan 07, 2022')).toBeVisible();
        });
    });

    it('displays the selected date range in the table', async () => {
        const user = userEvent.setup({delay: null});
        const onChange = vi.fn();
        render(
            <Table
                data={[{name: 'fruit'}, {name: 'vegetable'}]}
                columns={columns}
                onChange={onChange}
                initialState={{dateRange: [new Date(2022, 0, 1), new Date(2022, 0, 7)]}}
            >
                <Table.Header>
                    <Table.DateRangePicker
                        presets={{preset: {label: 'Preset', range: [new Date(2022, 0, 8), new Date(2022, 0, 14)]}}}
                    />
                </Table.Header>
            </Table>
        );

        await screen.findByText('Jan 01, 2022 - Jan 07, 2022');
        await screen.findByRole('button', {name: 'calendar'});

        await user.click(screen.getByRole('button', {name: 'calendar'}));

        await screen.findByRole('dialog');

        // select a preset
        await user.click(
            screen.getByRole('searchbox', {
                name: 'Date range',
            })
        );
        await user.click(screen.getByRole('option', {name: 'Preset'}));

        await user.click(screen.getByRole('button', {name: 'Apply'}));
        vi.advanceTimersByTime(500);

        await waitFor(() => expect(screen.queryByText('Jan 08, 2022 - Jan 14, 2022')).toBeVisible());
        expect(onChange).toHaveBeenCalledWith(
            expect.objectContaining({dateRange: [new Date(2022, 0, 8), new Date(2022, 0, 14)]})
        );
    });
});
