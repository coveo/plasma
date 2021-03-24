import {render} from '@testing-library/react';
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
});
