import {DateRangePickerValue} from '@mantine/dates';
import {render, screen, userEvent} from '@test-utils';
import {useState} from 'react';

import {EditableDateRangePicker} from '../EditableDateRangePicker.js';

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

    it('updates when editing values', async () => {
        const user = userEvent.setup({delay: null});
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
        await user.clear(startInput);
        await user.type(startInput, 'Jan 8, 2022');

        const endInput = screen.getByRole('textbox', {
            name: /end/i,
        });
        await user.clear(endInput);
        await user.type(endInput, 'Jan 14, 2022');

        expect(screen.getByTestId('json')).toHaveTextContent('["2022-01-08T00:00:00.000Z","2022-01-14T23:59:59.999Z"]');
    });
});
