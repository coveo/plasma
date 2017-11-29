import { IDay } from '../components/calendar/CalendarDay';
import * as moment from 'moment';
import * as _ from 'underscore';
import { Moment } from 'moment';

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
export const LONG_DATE_FORMAT: string = 'YYYY-MM-DD HH:mm';
export const LONG_DATE_WITH_SMALL_HOURS_FORMAT: string = 'YYYY-MM-DD H:mm';
export const DATES_SEPARATOR: string = '%';

export class DateUtils {
  static currentDate: Date = new Date();
  static currentMonth: number = DateUtils.currentDate.getMonth();
  static currentYear: number = DateUtils.currentDate.getFullYear();

  static getPreviousYears(numberOfYears: number): string[] {
    return _.range(DateUtils.currentYear - numberOfYears, DateUtils.currentYear).map(String);
  }

  static getNextYears(numberOfYears: number): string[] {
    return _.range(DateUtils.currentYear, DateUtils.currentYear + numberOfYears + 1).map(String);
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
          date: date,
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
    return DateUtils.getValidDate(date, true);
  }

  static getValidDate(date: string, fromTime: boolean = false): Date {
    let momentDate: Moment = moment(date, LONG_DATE_FORMAT, fromTime);
    if (momentDate.isValid()) {
      return momentDate.toDate();
    }

    momentDate = moment(date, LONG_DATE_WITH_SMALL_HOURS_FORMAT, fromTime);
    if (momentDate.isValid()) {
      return momentDate.toDate();
    }

    return moment().toDate();
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
}
