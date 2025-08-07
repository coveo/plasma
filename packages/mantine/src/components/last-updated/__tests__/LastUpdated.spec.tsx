import {render, screen} from '@test-utils';
import {LastUpdated} from '../LastUpdated';

describe('LastUpdated', () => {
    it('renders with default label and formatted time', () => {
        const date = new Date('2023-01-01T12:34:56');
        render(<LastUpdated time={date} />);
        expect(screen.getByText('Last update:')).toBeInTheDocument();
        expect(screen.getByText('12:34:56 PM')).toBeInTheDocument();
        expect(screen.getByRole('timer')).toHaveTextContent('12:34:56 PM');
    });

    it('renders with custom label', () => {
        render(<LastUpdated time={0} label="Updated at:" />);
        expect(screen.getByText('Updated at:')).toBeInTheDocument();
    });

    it('accepts string time', () => {
        render(<LastUpdated time="2023-01-01T01:02:03" />);
        expect(screen.getByText('1:02:03 AM')).toBeInTheDocument();
    });

    it('accepts number time (timestamp)', () => {
        render(<LastUpdated time={Date.UTC(2023, 0, 1, 15, 0, 0)} />);
        expect(screen.getByRole('timer')).toBeInTheDocument();
    });
});
