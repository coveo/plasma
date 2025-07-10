import {render, screen, userEvent} from '@test-utils';

import {DateRangePickerInlineCalendar} from '../DateRangePickerInlineCalendar';

const endOfDay = (year: number, month: number, day: number): Date => new Date(year, month, day, 23, 59, 59, 999);

describe('DateRangePickerInlineCalendar', () => {
    it('calls onApply when the user clicks on the apply button', async () => {
        const user = userEvent.setup({delay: null});
        const onApply = vi.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={vi.fn()} />);

        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledTimes(1);
        expect(onApply).toHaveBeenCalledWith([null, null]);
    });

    it('calls onCancel when the user clicks on the cancel button', async () => {
        const user = userEvent.setup({delay: null});
        const onCancel = vi.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={vi.fn()} onCancel={onCancel} />);

        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('does not render the preset searchbox when there is no presets', () => {
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={vi.fn()} onCancel={vi.fn()} />);

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it.skip('calls onApply with the selected dates when choosing a preset', async () => {
        const user = userEvent.setup({delay: null});
        const onApply = vi.fn();
        render(
            <DateRangePickerInlineCalendar
                presets={{
                    year2k: {label: 'select me', range: [new Date(1999, 11, 31), endOfDay(2000, 0, 1)]},
                }}
                initialRange={[null, null]}
                onApply={onApply}
                onCancel={vi.fn()}
            />,
        );

        await user.click(
            screen.getByRole('searchbox', {
                name: 'Date range',
            }),
        );
        await user.click(screen.getByRole('option', {name: 'select me'}));
        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(1999, 11, 31), endOfDay(2000, 0, 1)]);
    });

    it('calls onApply with the selected dates when clicking in the calendar', async () => {
        const user = userEvent.setup({delay: null});
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const onApply = vi.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={vi.fn()} />);

        // click once for the start, once for the end
        await user.click(screen.getAllByRole('button', {name: /8 january 2022/i})[0]);
        await user.click(screen.getAllByRole('button', {name: /14 january 2022/i})[0]);

        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith(['2022-01-08T00:00:00.000Z', '2022-01-14T23:59:59.999Z']);

        vi.useRealTimers();
    });

    it('set end date same as start date if only one date is selected when clicking in the calendar', async () => {
        const user = userEvent.setup({delay: null});
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const onApply = vi.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={vi.fn()} />);
        await user.click(screen.getAllByRole('button', {name: /8 january 2022/i})[0]);
        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith(['2022-01-08T00:00:00.000Z', '2022-01-08T23:59:59.999Z']);

        vi.useRealTimers();
    });

    it('calls onApply with the selected dates when typing in the inputs', async () => {
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const user = userEvent.setup({delay: null});
        const onApply = vi.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={vi.fn()} />);

        const startInput = screen.getByRole('textbox', {
            name: /start/i,
        });
        await user.clear(startInput);
        await user.type(startInput, 'Jan 8, 2022');

        const endInput = screen.getByRole('textbox', {
            name: /end/i,
        });
        await user.clear(endInput);
        await user.type(endInput, 'Jan 14, 2022');

        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith(['2022-01-08T00:00:00.000Z', '2022-01-14T23:59:59.999Z']);
        vi.useRealTimers();
    });
});
