import {render, screen} from '@test-utils';
import {EditableDateTimeRangePicker} from '../EditableDateTimeRangePicker';

describe('EditableDateTimeRangePicker', () => {
    it('renders start and end date in correct format', () => {
        render(
            <EditableDateTimeRangePicker
                value={['2026-03-01T10:00:00Z', '2026-03-02T11:30:00Z']}
                dateFormat="DD/MM/YYYY hh:mm A"
            />,
        );
        expect(screen.getByRole('button', {name: 'Start'})).toHaveTextContent('01/03/2026 10:00 AM');
        expect(screen.getByRole('button', {name: 'End'})).toHaveTextContent('02/03/2026 11:30 AM');
    });
});
