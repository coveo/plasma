import {render, screen} from '@test-utils';

import {Countdown} from '../Countdown';

describe('Countdown', () => {
    it('should render with default props', () => {
        // mock timer as test can be flaky on the last of the month
        jest.useFakeTimers('modern').setSystemTime(new Date('2020-01-20T12:00:00.000Z').getTime());
        const {container} = render(<Countdown />);

        expect(container.firstChild).toHaveClass('countdown-calendar');
        expect(
            screen.getByRole('heading', {
                name: /11 days left/i,
            }),
        ).toBeInTheDocument();
    });

    it('should display "Last day" on the last day of the month', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2020-01-31T12:00:00.000Z').getTime());

        render(<Countdown />);

        expect(
            screen.getByRole('heading', {
                name: /last day/i,
            }),
        ).toBeInTheDocument();
    });
});
