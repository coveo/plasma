import {Moment} from 'moment';
import * as React from 'react';

export interface IDay {
    number: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    date: Moment;
    isSelected?: boolean;
    isLowerLimit?: boolean;
    isUpperLimit?: boolean;
    color?: string;
    isSelectable?: boolean;
}

export interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {
    day: IDay;
    onClick: (value: Date) => void;
    onSelectUnselectable: () => void;
}

export class CalendarDay extends React.Component<ICalendarDayProps, {}> {
    static DEFAULT_DATE_CLASS: string = 'calendar-day';

    private handleClick() {
        if (this.props.day.isSelectable) {
            this.props.onClick(this.props.day.date.toDate());
        }
    }

    componentWillReceiveProps(nextProps: ICalendarDayProps) {
        if (
            !nextProps.day.isSelectable &&
            nextProps.day.isSelected &&
            (nextProps.day.isLowerLimit || nextProps.day.isUpperLimit)
        ) {
            nextProps.onSelectUnselectable();
        }
    }

    render() {
        const dayClasses: string[] = [];
        const dayCellClasses: string[] = [CalendarDay.DEFAULT_DATE_CLASS];

        if (!this.props.day.isCurrentMonth) {
            dayClasses.push('other-month-date');
        }

        if (!this.props.day.isSelectable) {
            dayCellClasses.push('un-selectable');
        }

        if (this.props.day.isToday) {
            dayClasses.push('todays-date');
        }

        if (this.props.day.isSelected && this.props.day.isSelectable) {
            dayClasses.push('selected-date');
            dayClasses.push('bg-' + this.props.day.color);

            if (this.props.day.isLowerLimit) {
                dayClasses.push('lower-limit');
            }

            if (this.props.day.isUpperLimit) {
                dayClasses.push('upper-limit');
            }
        }

        const bothLimitsElement: JSX.Element =
            this.props.day.isLowerLimit && this.props.day.isUpperLimit ? <span></span> : null;

        return (
            <td className={dayCellClasses.join(' ')} onClick={() => this.handleClick()}>
                <span className={dayClasses.join(' ')}>
                    {this.props.day.number}
                    {bothLimitsElement}
                </span>
            </td>
        );
    }
}
