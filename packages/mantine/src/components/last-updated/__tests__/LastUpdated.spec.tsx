import {render, screen} from '@test-utils';
import dayjs from 'dayjs';
import {LastUpdated} from '../LastUpdated.js';

describe('LastUpdated', () => {
    it('renders with default label, time and formatter', () => {
        vi.useFakeTimers().setSystemTime(new Date('2023-01-01T13:33:33'));
        render(<LastUpdated />);
        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:33:33 PM');
        vi.useRealTimers();
    });
    it('renders with date object and custom label', () => {
        const time = new Date('2023-01-01T12:34:56');
        render(<LastUpdated time={time} label="Updated at:" />);
        expect(screen.getByText('Updated at:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('12:34:56 PM');
    });
    it('renders with string time', () => {
        const time = '2023-01-01T01:02:03';
        render(<LastUpdated time={time} />);
        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:02:03 AM');
    });
    it('renders with number time (timestamp)', () => {
        const time = dayjs('2023-01-01T12:34:56').valueOf();
        render(<LastUpdated time={time} />);
        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('12:34:56 PM');
    });
    it('renders with custom formatter', () => {
        const time = dayjs('2023-01-01T12:34:56').valueOf();
        render(<LastUpdated time={time} formatter={(t) => dayjs(t).format('YYYY-MM-DD HH:mm:ss')} />);
        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('2023-01-01 12:34:56');
    });
});
