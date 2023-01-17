import classNames from 'clsx';
import {Moment} from 'moment';
import {ClassAttributes, Component} from 'react';
export interface IDay {
    // eslint-disable-next-line id-blacklist
    number: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    date: Moment;
    isSelected?: boolean;
    isLowerLimit?: boolean;
    isUpperLimit?: boolean;
    isSelectable?: boolean;
    isCountdown?: boolean;
}

export interface ICalendarDayProps extends ClassAttributes<CalendarDay> {
    day: IDay;
    onClick: (value: Date) => void;
    onSelectUnselectable: () => void;
}

/**
 * @deprecated Use Mantine Calendar instead: https://mantine.dev/dates/calendar/
 */
export class CalendarDay extends Component<ICalendarDayProps> {
    static DEFAULT_DATE_CLASS: string = 'calendar-day';

    private handleClick() {
        if (this.props.day.isSelectable) {
            this.props.onClick(this.props.day.date.toDate());
        }
    }

    componentDidUpdate() {
        const {day} = this.props;

        if (!day.isSelectable && day.isSelected && (day.isLowerLimit || day.isUpperLimit)) {
            this.props.onSelectUnselectable();
        }
    }

    render() {
        const {day} = this.props;

        const isSelectableAndSelected = day.isSelected && day.isSelectable;

        const dayClassNames: string = classNames({
            'other-month-date': !day.isCurrentMonth,
            'todays-date': day.isToday,
            countdown: day.isCountdown,
            'selected-date': isSelectableAndSelected,
            'lower-limit': isSelectableAndSelected && day.isLowerLimit,
            'upper-limit': isSelectableAndSelected && day.isUpperLimit,
        });

        const dayCellClassNames: string = classNames(CalendarDay.DEFAULT_DATE_CLASS, {
            'un-selectable': !day.isSelectable,
        });

        const bothLimitsElement: JSX.Element = day.isLowerLimit && day.isUpperLimit ? <span /> : null;

        const isCountdownAndToday = day.isCountdown && day.isToday;

        return (
            <td className={dayCellClassNames} onClick={() => this.handleClick()}>
                <span className={dayClassNames}>
                    {(isCountdownAndToday || !day.isCountdown) && day.number}
                    {bothLimitsElement}
                </span>
            </td>
        );
    }
}
