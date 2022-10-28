import {DateRangePickerValue} from '@mantine/dates';
import {render, screen, userEvent} from '@test-utils';
import {useState} from 'react';

import {EditableDateRangePicker} from '../EditableDateRangePicker';

describe('EditableDateRangePicker', () => {
    it('renders an input for the start and an input for the end', () => {
        render(<EditableDateRangePicker value={[null, null]} />);

        expect(screen.getByRole('textbox', {name: 'Start'})).toBeVisible();
        expect(screen.getByRole('textbox', {name: 'End'})).toBeVisible();
    });

    it('renders the separator', () => {
        render(<EditableDateRangePicker value={[null, null]} separator={<div>SEPARATOR</div>} />);

        expect(screen.getByText('SEPARATOR')).toBeVisible();
    });

    it('updates when editing values', () => {
        const Fixture = () => {
            const [value, setValue] = useState<DateRangePickerValue>([null, null]);
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
        userEvent.clear(startInput);
        userEvent.type(startInput, 'Jan 8, 2022');

        const endInput = screen.getByRole('textbox', {
            name: /end/i,
        });
        userEvent.clear(endInput);
        userEvent.type(endInput, 'Jan 14, 2022');

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-01-08T00:00:00.000Z","2022-01-14T00:00:00.000Z"]');
    });
});
