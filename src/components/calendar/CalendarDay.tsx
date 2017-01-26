import * as React from 'react';
import {Moment} from 'moment';

export interface IDay {
  number: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  date: Moment;
}

export interface ICalendarDayProps extends React.ClassAttributes<CalendarDay> {
  day: IDay;
}

export class CalendarDay extends React.Component<ICalendarDayProps, any> {

  render() {

    return (
      <td>{this.props.day.number}</td>
    );
  }
}
