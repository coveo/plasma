import {useForm} from '@mantine/form';
import {render, screen, userEvent, waitFor} from '@test-utils';
import {DateRangePickerValue} from '../DateRangePickerInlineCalendar.js';

import {DateRangePickerPopoverCalendar} from '../DateRangePickerPopoverCalendar.js';

describe('DateRangePickerPopoverCalendar', () => {
    it('does not render the preset searchbox when there is no presets', () => {
        render(<DateRangePickerPopoverCalendar defaultValue={[null, null]} />);

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it.skip('updates with the selected dates when choosing a preset', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const form = useForm<{dates: DateRangePickerValue}>({initialValues: {dates: [null, null]}});
            return (
                <>
                    <DateRangePickerPopoverCalendar
                        presets={{
                            year2k: {label: 'select me', range: [new Date(1999, 11, 31), new Date(2000, 0, 1)]},
                        }}
                        {...form.getInputProps('dates')}
                    />
                    <code data-testid="json">{JSON.stringify(form.values.dates)}</code>
                </>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('searchbox', {name: 'Date range'}));
        await user.click(screen.getByRole('option', {name: 'select me'}));

        expect(screen.getByTestId('json')).toHaveTextContent('["1999-12-31T00:00:00.000Z","2000-01-01T00:00:00.000Z"]');
    });

    it('calls onApply with the selected dates when clicking in the calendar', async () => {
        const user = userEvent.setup({delay: null});
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
        const Fixture = () => {
            const form = useForm<{dates: DateRangePickerValue}>({initialValues: {dates: [null, null]}});
            return (
                <>
                    <DateRangePickerPopoverCalendar {...form.getInputProps('dates')} />
                    <code data-testid="json">{JSON.stringify(form.values.dates)}</code>
                </>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('textbox', {name: 'Start'}));
        // click once for the start, once for the end
        await user.click(await screen.findByRole('button', {name: '8 January 2022'}));
        await user.click(screen.getByRole('button', {name: '14 February 2022'}));

        // hides the calendar when the second date is clicked
        await waitFor(() => expect(screen.queryByRole('button', {name: '8 January 2022'})).not.toBeVisible());
        expect(screen.queryByRole('button', {name: '8 February 2022'})).not.toBeVisible();

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-01-08T00:00:00.000Z","2022-02-14T00:00:00.000Z"]');

        vi.useRealTimers();
    });

    it.skip('calls onApply with the selected dates when typing in the inputs', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const form = useForm<{dates: DateRangePickerValue}>({initialValues: {dates: [null, null]}});
            return (
                <>
                    <DateRangePickerPopoverCalendar {...form.getInputProps('dates')} />
                    <code data-testid="json">{JSON.stringify(form.values.dates)}</code>
                </>
            );
        };
        render(<Fixture />);

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

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-01-08T00:00:00.000Z","2022-01-14T23:59:59.999Z"]');
    }, 10000);
});
