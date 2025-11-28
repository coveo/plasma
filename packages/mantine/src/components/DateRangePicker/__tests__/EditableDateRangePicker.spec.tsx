import {render, screen, userEvent} from '@test-utils';
import {useState} from 'react';

import {type DatesRangeValue, type DateStringValue} from '@mantine/dates';
import {EditableDateRangePicker} from '../EditableDateRangePicker.js';

describe('EditableDateRangePicker', () => {
    it('renders an input for the start and an input for the end', () => {
        render(<EditableDateRangePicker value={[null, null]} />);

        expect(screen.getByRole('textbox', {name: 'Start'})).toBeVisible();
        expect(screen.getByRole('textbox', {name: 'End'})).toBeVisible();
    });

    it('updates when editing values', async () => {
        const user = userEvent.setup();
        const Fixture = () => {
            const [value, setValue] = useState<DatesRangeValue<DateStringValue | null>>([null, null]);
            return (
                <>
                    <EditableDateRangePicker value={value} onChange={setValue} />
                    <code data-testid="json">{JSON.stringify(value)}</code>
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

    it('accepts minDate and maxDate props for start and end inputs', async () => {
        const user = userEvent.setup();
        const minDate = '2022-10-10';
        const maxDate = '2022-11-11';
        const Fixture = () => {
            const [value, setValue] = useState<DatesRangeValue<DateStringValue | null>>([null, null]);
            return (
                <>
                    <EditableDateRangePicker
                        value={value}
                        onChange={setValue}
                        startProps={{minDate, maxDate}}
                        endProps={{minDate, maxDate}}
                    />
                    <code data-testid="json">{JSON.stringify(value)}</code>
                </>
            );
        };
        render(<Fixture />);
        const startInput = screen.getByRole('textbox', {
            name: /start/i,
        });
        await user.clear(startInput);
        await user.type(startInput, 'Oct 11, 2022');

        const endInput = screen.getByRole('textbox', {
            name: /end/i,
        });
        await user.clear(endInput);
        await user.type(endInput, 'Nov 10, 2022');

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-10-11T00:00:00.000Z","2022-11-10T23:59:59.999Z"]');

        await user.clear(startInput);
        await user.type(startInput, 'Oct 09, 2022');
        await user.clear(endInput);
        await user.type(endInput, 'Nov 12, 2022');

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-10-11T00:00:00.000Z","2022-11-10T23:59:59.999Z"]');
    }, 10000);
});
