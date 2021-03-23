import classNames from 'classnames';
import {Moment} from 'moment';
import * as React from 'react';

export interface IDay {
    // eslint-disable-next-line id-blacklist
    number: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    date: Moment;
    isSelected?: boolean;
    isLowerLimit?: boolean;
    isUpperLimit?: boolean;
    color?: string;
    isSelectable?: boolean;
    isCountdown?: boolean;
}

export interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {
    day: IDay;
    onClick: (value: Date) => void;
    onSelectUnselectable: () => void;
}

export class CalendarDay extends React.Component<ICalendarDayProps> {
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

        const isSelectedAndSelectable = day.isSelected && day.isSelectable;

        const dayClassNames: string = classNames({
            'other-month-date': !day.isCurrentMonth,
            'todays-date': day.isToday,
            countdown: day.isCountdown,
            'selected-date': isSelectedAndSelectable,
            'lower-limit': isSelectedAndSelectable && day.isLowerLimit,
            'upper-limit': isSelectedAndSelectable && day.isUpperLimit,
        });

        const dayCellClassNames: string = classNames(CalendarDay.DEFAULT_DATE_CLASS, {
            'un-selectable': !day.isSelectable,
        });

        const bothLimitsElement: JSX.Element = day.isLowerLimit && day.isUpperLimit ? <span /> : null;

        return (
            <td className={dayCellClassNames} onClick={() => this.handleClick()}>
                <span className={dayClassNames}>
                    {day.number}
                    {bothLimitsElement}
                </span>
            </td>
        );
    }
}
