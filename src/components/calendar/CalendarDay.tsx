import * as React from 'react';
import { Moment } from 'moment';

export interface IDay {
  number: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  date: Moment;
}

export interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {
  day: IDay;
  onClick?: (date: Moment) => void;
}

export class CalendarDay extends React.Component<ICalendarDayProps, any> {

  private handleClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.day.date);
    }
  }

  render() {
    let dayClasses: string[] = [];

    if (!this.props.day.isCurrentMonth) {
      dayClasses.push('other-month-date');
    }

    if (this.props.day.isToday) {
      dayClasses.push('todays-date');
    }

    return (
      <td className={dayClasses.join(' ')} onClick={() => this.handleClick()}>{this.props.day.number}</td>
    );
  }
}
