import * as moment from 'moment';
import {IDay} from '../components/calendar/CalendarDay';

export class DateUtils {
  static currentDate: Date = new Date();
  static currentMonth: number = DateUtils.currentDate.getMonth();
  static currentYear: number = DateUtils.currentDate.getFullYear();

  static getPreviousYears(numberOfYears: number): string[] {
    let years: string[] = [];

    for (let year = DateUtils.currentYear - 1; year >= DateUtils.currentYear - numberOfYears; year--) {
      years.push(year.toString());
    }

    return years.reverse();
  }

  static getNextYears(numberOfYears: number): string[] {
    let years: string[] = [];

    for (let year = DateUtils.currentYear + 1; year <= DateUtils.currentYear + numberOfYears; year++) {
      years.push(year.toString());
    }

    return years;
  }

  static getMonthWeeks(firstDay: Date, startingDay: number) {
    let weeks: IDay[][] = [];
    let done = false;
    let date = moment(firstDay).startOf('week').add(startingDay, 'day');
    let monthIndex = date.month();
    let count = 0;

    while (!done) {
      let days: IDay[] = [];
      for (let i = 0; i < 7; i++) {
        days.push({
          number: date.date(),
          isCurrentMonth: date.month() === firstDay.getMonth(),
          isToday: date.isSame(DateUtils.currentDate, 'day'),
          date: date
        });
        date = date.clone();
        date.add(1, 'day');
      }
      weeks.push(days);
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }
}
