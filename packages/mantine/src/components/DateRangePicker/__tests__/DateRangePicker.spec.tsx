import {render, screen, userEvent, waitFor} from '@test-utils';
import dayjs from 'dayjs';
import {DateRangePicker} from '../DateRangePicker.js';

describe('DateRangePicker', () => {
    it('renders with placeholder text when no date range is selected', () => {
        render(<DateRangePicker />);

        expect(screen.getByRole('button', {name: /select date range/i})).toBeVisible();
    });

    it('renders with custom placeholder text', () => {
        render(<DateRangePicker placeholder="Choose dates" />);

        expect(screen.getByRole('button', {name: /choose dates/i})).toBeVisible();
    });

    it('displays the formatted date range when defaultValue is provided', () => {
        const startDate = dayjs('2022-01-01').toISOString();
        const endDate = dayjs('2022-01-07').toISOString();
        render(<DateRangePicker defaultValue={[startDate, endDate]} />);

        expect(screen.getByRole('button', {name: /jan 1, 2022 - jan 7, 2022/i})).toBeVisible();
    });

    it('displays the formatted date range when value is provided (controlled)', () => {
        const startDate = dayjs('2022-03-15').toISOString();
        const endDate = dayjs('2022-03-20').toISOString();
        render(<DateRangePicker value={[startDate, endDate]} />);

        expect(screen.getByRole('button', {name: /mar 15, 2022 - mar 20, 2022/i})).toBeVisible();
    });

    it('uses custom formatter when provided', () => {
        const startDate = dayjs('2022-01-01').toISOString();
        const endDate = dayjs('2022-01-07').toISOString();
        const customFormatter = (date: dayjs.ConfigType) => dayjs(date).format('YYYY/MM/DD');
        render(<DateRangePicker defaultValue={[startDate, endDate]} formatter={customFormatter} />);

        expect(screen.getByRole('button', {name: /2022\/01\/01 - 2022\/01\/07/i})).toBeVisible();
    });

    it('opens popover when input is clicked', async () => {
        const user = userEvent.setup();
        render(<DateRangePicker />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));
        await waitFor(() => expect(screen.getByRole('dialog')).toBeVisible());
    });

    it('calls onClick handler when input is clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<DateRangePicker onClick={onClick} />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('calls onChange when a date range is applied', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<DateRangePicker onChange={onChange} />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));
        await screen.findByRole('dialog');
        await user.type(screen.getByRole('textbox', {name: /start/i}), '2022-01-02');
        await user.type(screen.getByRole('textbox', {name: /end/i}), '2022-01-08');
        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(['2022-01-02T00:00:00.000Z', '2022-01-08T23:59:59.999Z']);
        expect(screen.queryByRole('dialog')).not.toBeVisible();
    });

    it('closes popover when Cancel is clicked', async () => {
        const user = userEvent.setup();
        render(<DateRangePicker />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));
        await screen.findByRole('dialog');
        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeVisible());
    });

    it('calls onCancel when Cancel button is clicked', async () => {
        const user = userEvent.setup();
        const onCancel = vi.fn();
        render(<DateRangePicker onCancel={onCancel} />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));
        await screen.findByRole('dialog');
        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('applies the selected date range in uncontrolled mode', async () => {
        const user = userEvent.setup();
        render(<DateRangePicker />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));
        await screen.findByRole('dialog');
        await user.type(screen.getByRole('textbox', {name: /start/i}), '2022-01-02');
        await user.type(screen.getByRole('textbox', {name: /end/i}), '2022-01-08');
        await user.click(screen.getByRole('button', {name: 'Apply'}));

        expect(screen.getByRole('button', {name: /jan 2, 2022 - jan 8, 2022/i})).toBeVisible();
    });

    it('applies the selected date range in controlled mode', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        const startDate = dayjs('2022-01-01').toISOString();
        const endDate = dayjs('2022-01-07').toISOString();
        const {rerender} = render(<DateRangePicker value={[startDate, endDate]} onChange={onChange} />);

        await user.click(screen.getByRole('button', {name: /jan 1, 2022 - jan 7, 2022/i}));
        await screen.findByRole('dialog');
        await user.clear(screen.getByRole('textbox', {name: /start/i}));
        await user.type(screen.getByRole('textbox', {name: /start/i}), '2022-01-02');
        await user.clear(screen.getByRole('textbox', {name: /end/i}));
        await user.type(screen.getByRole('textbox', {name: /end/i}), '2022-01-08');
        await user.click(screen.getByRole('button', {name: /apply/i}));

        expect(onChange).toHaveBeenCalledWith(['2022-01-02T00:00:00.000Z', '2022-01-08T23:59:59.999Z']);

        // Value should not change unless parent updates it
        expect(screen.getByRole('button', {name: /jan 1, 2022 - jan 7, 2022/i})).toBeVisible();
        rerender(
            <DateRangePicker value={['2022-01-02T00:00:00.000Z', '2022-01-08T23:59:59.999Z']} onChange={onChange} />,
        );
        expect(screen.getByRole('button', {name: /jan 2, 2022 - jan 8, 2022/i})).toBeVisible();
    });

    it('displays error message when error prop is provided', () => {
        render(<DateRangePicker error="Invalid date range" />);

        expect(screen.getByText('Invalid date range')).toBeVisible();
    });

    describe('with presets', () => {
        it('renders preset options in the popover', async () => {
            const user = userEvent.setup();
            render(
                <DateRangePicker
                    presets={{
                        lastWeek: {
                            label: 'Last Week',
                            range: [
                                new Date(2022, 0, 1, 0, 0, 0, 0).toISOString(),
                                new Date(2022, 0, 7, 23, 59, 59, 999).toISOString(),
                            ],
                        },
                        lastMonth: {
                            label: 'Last Month',
                            range: [
                                new Date(2022, 0, 1, 0, 0, 0, 0).toISOString(),
                                new Date(2022, 0, 31, 23, 59, 59, 999).toISOString(),
                            ],
                        },
                    }}
                />,
            );

            await user.click(screen.getByRole('button', {name: /select date range/i}));
            await screen.findByRole('dialog');
            await user.click(
                screen.getByRole('textbox', {
                    name: 'Date range',
                }),
            );
            expect(screen.getByRole('option', {name: 'Last Week'})).toBeVisible();
            expect(screen.getByRole('option', {name: 'Last Month'})).toBeVisible();
        });
    });

    describe('when url sync is activated', () => {
        afterEach(() => {
            window.history.replaceState(null, '', '/');
        });

        it('sets the selected date range in the url', async () => {
            const user = userEvent.setup();
            render(<DateRangePicker syncWithUrl />);

            await user.click(screen.getByRole('button', {name: /select date range/i}));
            await screen.findByRole('dialog');
            await user.type(screen.getByRole('textbox', {name: /start/i}), '2022-01-02');
            await user.type(screen.getByRole('textbox', {name: /end/i}), '2022-01-08');
            await user.click(screen.getByRole('button', {name: /apply/i}));

            expect(window.location.search).toBe('?from=2022-01-02T00%3A00%3A00.000Z&to=2022-01-08T23%3A59%3A59.999Z');
        });

        it('initially selects the specified date range from the url', () => {
            window.history.replaceState(null, '', '?from=2022-01-02T00%3A00%3A00.000Z&to=2022-01-08T23%3A59%3A59.999Z');

            render(<DateRangePicker syncWithUrl />);

            expect(screen.getByRole('button', {name: /jan 2, 2022 - jan 8, 2022/i})).toBeVisible();
        });
    });

    it('controls popover opened state with opened prop', async () => {
        const {rerender} = render(<DateRangePicker opened={false} />);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

        rerender(<DateRangePicker opened={true} />);
        await waitFor(() => expect(screen.getByRole('dialog')).toBeVisible());
    });

    it('calls onOpenedChange when popover state changes', async () => {
        const user = userEvent.setup();
        const onOpenedChange = vi.fn();
        render(<DateRangePicker onOpenedChange={onOpenedChange} />);

        await user.click(screen.getByRole('button', {name: /select date range/i}));

        expect(onOpenedChange).toHaveBeenCalledWith(true);
        await screen.findByRole('dialog');
        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        expect(onOpenedChange).toHaveBeenCalledWith(false);
    });
});
