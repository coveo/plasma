import { IDay } from '../components/calendar/CalendarDay';
import * as moment from 'moment';
import * as _ from 'underscore';

export interface IDateComponents {
  year?: number;
  month?: number;
  date?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export const SIMPLE_DATE_FORMAT: string = 'MMM DD, YYYY';
export const LONG_DATE_FORMAT: string = 'YYYY-MM-DD HH:mm:ss';
export const DATES_SEPARATOR: string = '%';

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

  static getMonthWeeks(firstDay: Date, startingDay: number): IDay[][] {
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

  static getDateWithTimeString(date: Date): string {
    let dateMoment = moment(date);
    if (!date || !dateMoment.isValid()) {
      return '';
    }
    return dateMoment.format(LONG_DATE_FORMAT);
  }

  static getDateFromTimeString(date: string): Date {
    return moment(date, LONG_DATE_FORMAT, true).toDate();
  }

  static getSimpleDate(date: Date): string {
    let dateMoment = moment(date);
    if (!date || !dateMoment.isValid()) {
      return '';
    }
    return dateMoment.format(SIMPLE_DATE_FORMAT);
  }

  static getDateFromSimpleDateString(date: string): Date {
    return moment(date, SIMPLE_DATE_FORMAT, true).toDate();
  }

  static getRelativeDate(startingDate: Date, dateModifiers: IDateComponents): Date {
    _.defaults(dateModifiers, {
      year: 0,
      month: 0,
      date: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });

    let year: number = startingDate.getFullYear() + dateModifiers.year;
    let month: number = startingDate.getMonth() + dateModifiers.month;
    let date: number = startingDate.getDate() + dateModifiers.date;
    let hours: number = startingDate.getHours() + dateModifiers.hours;
    let minutes: number = startingDate.getMinutes() + dateModifiers.minutes;
    let seconds: number = startingDate.getSeconds() + dateModifiers.seconds;
    let milliseconds: number = startingDate.getMilliseconds() + dateModifiers.milliseconds;

    return new Date(year, month, date, hours, minutes, seconds, milliseconds);
  }
}
