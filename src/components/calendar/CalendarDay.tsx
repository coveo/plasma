import { Moment } from 'moment';
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
}

export interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {
  day: IDay;
  onClick: (value: Date) => void;
}

export class CalendarDay extends React.Component<ICalendarDayProps, any> {

  render() {
    let dayClasses: string[] = [];

    if (!this.props.day.isCurrentMonth) {
      dayClasses.push('other-month-date');
    }

    if (this.props.day.isToday) {
      dayClasses.push('todays-date');
    }

    if (this.props.day.isSelected) {
      dayClasses.push('selected-date');
      dayClasses.push('bg-' + this.props.day.color);

      if (this.props.day.isLowerLimit) {
        dayClasses.push('lower-limit');
      }

      if (this.props.day.isUpperLimit) {
        dayClasses.push('upper-limit');
      }
    }

    let bothLimitsElement: JSX.Element = this.props.day.isLowerLimit && this.props.day.isUpperLimit
      ? <span></span>
      : null;

    return (
      <td onClick={() => this.props.onClick(this.props.day.date.toDate())}>
        <span className={dayClasses.join(' ')}>
          {this.props.day.number}
          {bothLimitsElement}
        </span>
      </td>
    );
  }
}
