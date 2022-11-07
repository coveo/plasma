import {DateRangePickerValue} from '@mantine/dates';
import {useForm} from '@mantine/form';
import {render, screen, userEvent} from '@test-utils';

import {DateRangePickerPopoverCalendar} from '../DateRangePickerPopoverCalendar';

// Since we're mocking the date and the animations are timer based we're mocking useReduceMotion to disable all the animations
// I tried wrapping the components in <MantineProvider theme={{components: {Transition: {defaultProps: {duration: 0}}}}}>
// but the animation was still happening. :(
jest.mock('@mantine/hooks', () => ({
    ...jest.requireActual('@mantine/hooks'),
    useReducedMotion: () => true,
}));

describe('DateRangePickerPopoverCalendar', () => {
    it('does not render the preset searchbox when there is no presets', () => {
        render(<DateRangePickerPopoverCalendar defaultValue={[null, null]} />);

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it('updates with the selected dates when choosing a preset', () => {
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

        userEvent.click(
            screen.getByRole('searchbox', {
                name: 'Date range',
            })
        );
        userEvent.click(screen.getByRole('option', {name: 'select me'}));

        expect(screen.getByTestId('json')).toHaveTextContent('["1999-12-31T00:00:00.000Z","2000-01-01T00:00:00.000Z"]');
    });

    it('calls onApply with the selected dates when clicking in the calendar', () => {
        jest.useFakeTimers().setSystemTime(new Date(2022, 0, 31));
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

        userEvent.click(screen.getByRole('textbox', {name: 'Start'}));
        // click once for the start, once for the end
        userEvent.click(screen.getAllByRole('button', {name: '8'})[0]);
        userEvent.click(screen.getAllByRole('button', {name: '14'})[0]);

        // hides the calendar when the second date is clicked
        expect(screen.queryByRole('button', {name: '8'})).not.toBeInTheDocument();

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-01-08T00:00:00.000Z","2022-01-14T00:00:00.000Z"]');

        jest.useRealTimers();
    });

    it('calls onApply with the selected dates when typing in the inputs', () => {
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
        userEvent.clear(startInput);
        userEvent.type(startInput, 'Jan 8, 2022');

        const endInput = screen.getByRole('textbox', {
            name: /end/i,
        });
        userEvent.clear(endInput);
        userEvent.type(endInput, 'Jan 14, 2022');

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-01-08T00:00:00.000Z","2022-01-14T23:59:59.999Z"]');
    });
});
