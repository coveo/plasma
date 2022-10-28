import {render, screen, userEvent} from '@test-utils';

import {DateRangePickerInlineCalendar} from '../DateRangePickerInlineCalendar';

describe('DateRangePickerInlineCalendar', () => {
    it('calls onApply when the user clicks on the apply button', () => {
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

        userEvent.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledTimes(1);
        expect(onApply).toHaveBeenCalledWith([null, null]);
    });

    it('calls onCancel when the user clicks on the cancel button', () => {
        const onCancel = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={jest.fn()} onCancel={onCancel} />);

        userEvent.click(screen.getByRole('button', {name: 'Cancel'}));

        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('does not render the preset searchbox when there is no presets', () => {
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={jest.fn()} onCancel={jest.fn()} />);

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it('calls onApply with the selected dates when choosing a preset', () => {
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

        userEvent.click(
            screen.getByRole('searchbox', {
                name: 'Date range',
            })
        );
        userEvent.click(screen.getByRole('option', {name: 'select me'}));
        userEvent.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(1999, 11, 31), new Date(2000, 0, 1)]);
    });

    it('calls onApply with the selected dates when clicking in the calendar', () => {
        jest.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

        // click once for the start, once for the end
        userEvent.click(screen.getAllByRole('button', {name: '8'})[0]);
        userEvent.click(screen.getAllByRole('button', {name: '14'})[0]);

        userEvent.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(2022, 0, 8), new Date(2022, 0, 14)]);

        jest.useRealTimers();
    });

    it('calls onApply with the selected dates when typing in the inputs', () => {
        const onApply = jest.fn();
        render(<DateRangePickerInlineCalendar initialRange={[null, null]} onApply={onApply} onCancel={jest.fn()} />);

        const startInput = screen.getByRole('textbox', {
            name: /start/i,
        });
        userEvent.clear(startInput);
        userEvent.type(startInput, 'Jan 8, 2022');

        const endInput = screen.getByRole('textbox', {
            name: /end/i,
        });
        userEvent.clear(endInput);
        userEvent.type(endInput, 'Jan 14, 2022');

        userEvent.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onApply).toHaveBeenCalledWith([new Date(2022, 0, 8), new Date(2022, 0, 14)]);
    });
});
