import {render, screen} from '@test-utils';
import moment from 'moment';
import * as React from 'react';

import {Countdown} from '../Countdown';

describe('Countdown', () => {
    it('should render with default props', () => {
        const {container, getByText} = render(<Countdown />);

        const todaysDate = moment().date();

        const today = getByText(`${todaysDate}`);

        expect(container.firstChild).toHaveClass('countdown-calendar');
        expect(today).toHaveClass('todays-date');
    });

    it('should display "Last day" on the last day of the month', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2020-01-31T12:00:00.000Z').getTime());

        render(<Countdown />);

        expect(
            screen.getByRole('heading', {
                name: /last day/i,
            })
        ).toBeInTheDocument();
    });
});
