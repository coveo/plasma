import {render, screen, userEvent} from '@test-utils';
import dayjs from 'dayjs';

import {DateRangePickerInlineCalendar} from '../DateRangePickerInlineCalendar.js';

describe('DateRangePickerInlineCalendar', () => {
    it('calls onApply when the user clicks on the apply button', async () => {
        const user = userEvent.setup({delay: null});
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledTimes(1);
        expect(onApply).toHaveBeenCalledWith([null, null]);
    });

    it('calls onCancel when the user clicks on the cancel button', async () => {
        const user = userEvent.setup({delay: null});
        const onCancel = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={jest.fn()} onCancel={onCancel} />);

        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('does not render the preset searchbox when there is no presets', () => {
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={jest.fn()} onCancel={jest.fn()} />);

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it('calls onApply with the selected dates when choosing a preset', async () => {
        const user = userEvent.setup({delay: null});
        const onApply = jest.fn();
        render(
            <DateRangePickerInlineCalendar
                presets={{
                    year2k: {label: 'select me', range: [new Date(1999, 11, 31), new Date(2000, 0, 1)]},
                }}
                initialRange={[null, null]}
                onApply={onApply}
                onCancel={jest.fn()}
            />
        );

        await user.click(
            screen.getByRole('searchbox', {
                name: 'Date range',
            })
        );
        await user.click(screen.getByRole('option', {name: 'select me'}));
        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(1999, 11, 31), new Date(2000, 0, 1)]);
    });

    it('calls onApply with the selected dates when clicking in the calendar', async () => {
        const user = userEvent.setup({delay: null});
        jest.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

        // click once for the start, once for the end
        await user.click(screen.getAllByRole('button', {name: '8'})[0]);
        await user.click(screen.getAllByRole('button', {name: '14'})[0]);

        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(2022, 0, 8), new Date(2022, 0, 14)]);

        jest.useRealTimers();
    });

    it('set end date same as start date if only one date is selected when clicking in the calendar', async () => {
        const user = userEvent.setup({delay: null});
        jest.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

        await user.click(screen.getAllByRole('button', {name: '8'})[0]);
        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(2022, 0, 8), new Date(2022, 0, 8)]);

        jest.useRealTimers();
    });

    it('calls onApply with the selected dates when typing in the inputs', async () => {
        const user = userEvent.setup({delay: null});
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

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

        expect(onApply).toHaveBeenCalledWith([
            dayjs(new Date(2022, 0, 8)).startOf('day').toDate(),
            dayjs(new Date(2022, 0, 14)).endOf('day').toDate(),
        ]);
    });
});
