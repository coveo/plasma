import moment from 'moment';
import {FunctionComponent} from 'react';
import {IDatePickerState} from '../datePicker/index.js';
import {Calendar} from './Calendar.js';

export interface CountdownProps {
    /**
     * The starting date from which the countdown begins
     *
     * @default Now
     */
    startDate?: moment.Moment;
    /**
     * The end date at which the countdown ends
     *
     * @default Last day of the current month
     */
    endDate?: moment.Moment;
}

/**
 * @deprecated Use Mantine instead
 */
export const Countdown: FunctionComponent<CountdownProps> = ({
    startDate = moment(),
    endDate = moment().date(moment().daysInMonth()),
}) => {
    const defaultProps = {
        id: 'countdown-id',
        calendarId: 'countdown-calendar-id',
        isRange: true,
        lowerLimit: startDate.toDate(),
        upperLimit: endDate.toDate(),
    } as IDatePickerState;

    return <Calendar id="countdown-calendar" countdown calendarSelection={[defaultProps]} />;
};
