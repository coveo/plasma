import {useForm} from '@mantine/form';
import {render, screen, userEvent, waitFor} from '@test-utils';

import {DatesRangeValue, DateStringValue} from '@mantine/dates';
import {DateTimeRangePicker} from '../DateTimeRangePicker.js';

describe('DateTimeRangePicker', () => {
    it('does not render the preset textbox when there is no presets', () => {
        render(<DateTimeRangePicker defaultValue={[null, null]} />);

        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    it('updates with the selected dates when choosing a preset', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const form = useForm<{dates: DatesRangeValue<DateStringValue | null>}>({
                initialValues: {dates: [null, null]},
            });
            return (
                <>
                    <DateTimeRangePicker
                        presets={{
                            year2k: {
                                label: 'Year 2K',
                                range: [
                                    new Date(2000, 0, 1, 0, 0, 0).toISOString(),
                                    new Date(2000, 11, 31, 23, 59, 59).toISOString(),
                                ],
                            },
                        }}
                        {...form.getInputProps('dates')}
                    />
                    <code data-testid="json">{JSON.stringify(form.values.dates)}</code>
                </>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('textbox', {name: 'Date range'}));
        await user.click(screen.getByRole('option', {name: 'Year 2K'}));

        expect(screen.getByTestId('json')).toHaveTextContent('["2000-01-01T00:00:00.000Z","2000-12-31T23:59:59.000Z"]');
    });

    it('can change the date and time', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const form = useForm<{dates: DatesRangeValue<DateStringValue | null>}>({
                initialValues: {dates: [null, null]},
            });
            return (
                <>
                    <DateTimeRangePicker
                        presets={{
                            year2k: {
                                label: 'Year 2K',
                                range: [new Date(2000, 0, 1, 0, 0, 0).toISOString(), null],
                            },
                        }}
                        {...form.getInputProps('dates')}
                    />
                    <code data-testid="json">{JSON.stringify(form.values.dates)}</code>
                </>
            );
        };
        render(<Fixture />);

        await user.click(screen.getByRole('textbox', {name: 'Date range'}));
        await user.click(screen.getByRole('option', {name: 'Year 2K'}));

        await user.click(screen.getByRole('button', {name: /start/i}));
        await waitFor(() => expect(screen.getByRole('dialog')).toBeVisible());

        await user.click(screen.getAllByRole('button', {name: /15/i})[0]);
        await user.click(screen.getAllByRole('spinbutton')[0]);
        await user.click(screen.getAllByRole('button', {name: '01'})[0]);
        await user.click(screen.getAllByRole('button', {name: '02'})[1]);
        await user.click(screen.getByRole('button', {name: 'AM'}));

        expect(screen.getByTestId('json')).toHaveTextContent('["2000-01-15 01:02:00",null]');
    });
});
