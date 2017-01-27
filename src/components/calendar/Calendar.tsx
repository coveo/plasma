import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { OptionsCycle, IOptionsCycleProps } from '../optionsCycle/OptionsCycle';
import { OptionsCycleConnected } from '../optionsCycle/OptionsCycleConnected';
import { DateUtils } from '../../utils/DateUtils';
import { ITableHeaderCellProps } from '../tables/TableHeaderCell';
import { TableHeader } from '../tables/TableHeader';
import * as React from 'react';
import * as _ from 'underscore';
import { CalendarDay } from './CalendarDay';

export interface ICalendarOwnProps extends React.ClassAttributes<Calendar> {
  id?: string;
  months?: string[];
  startingMonth?: number;
  years?: string[];
  startingYear?: number;
  days?: string[];
  startingDay?: number;
}

export interface ICalendarStateProps extends IReduxStatePossibleProps {
  selectedMonth?: number;
  selectedYear?: number;
}

export interface ICalendarProps extends ICalendarOwnProps, ICalendarStateProps { }

export const DEFAULT_MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const DEFAULT_YEARS: string[] = [
  ...DateUtils.getPreviousYears(10),
  DateUtils.currentYear.toString(),
  ...DateUtils.getNextYears(10)
];

export const DEFAULT_DAYS: string[] = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

export const MONTH_PICKER_ID: string = 'calendar-months';

export const YEAR_PICKER_ID: string = 'calendar-years';

export class Calendar extends React.Component<ICalendarProps, any> {

  render() {
    let months: string[] = this.props.months || DEFAULT_MONTHS;
    let startingMonth: number = this.props.startingMonth || DateUtils.currentMonth;
    let monthPickerProps: IOptionsCycleProps = {
      options: months,
      startAt: startingMonth,
      isInline: true
    };

    let years: string[] = this.props.years || DEFAULT_YEARS;
    let startingYear: number = this.props.startingYear || years.indexOf(DateUtils.currentYear.toString());
    let yearPickerProps: IOptionsCycleProps = {
      options: years,
      startAt: startingYear,
      isInline: true
    };

    let days: string[] = this.props.days || DEFAULT_DAYS;
    let startingDay: number = this.props.startingDay || 0;
    let orderedDays: string[] = [
      days[startingDay],
      ...days.slice(startingDay + 1),
      ...days.slice(0, startingDay)
    ];
    let daysHeaderColumns: ITableHeaderCellProps[] = _.map(orderedDays, (day: string) => ({ title: day }));

    let monthPicker = this.props.withReduxState
      ? <OptionsCycleConnected id={this.props.id + MONTH_PICKER_ID} {...monthPickerProps} />
      : <OptionsCycle {...monthPickerProps} />;

    let yearPicker = this.props.withReduxState
      ? <OptionsCycleConnected id={this.props.id + YEAR_PICKER_ID} {...yearPickerProps} />
      : <OptionsCycle {...yearPickerProps} />;

    let sectedYearOption = this.props.selectedYear || startingYear;
    let year = parseInt(years[sectedYearOption]);
    let selectedMonth = this.props.selectedMonth || startingMonth;

    let month = DateUtils.getMonthWeeks(new Date(year, selectedMonth), startingDay);
    let weeks = _.map(month, (week) => {
      let days = _.map(week, (day) => {
        return <CalendarDay key={day.date.toString()} day={day} />;
      });

      return <tr key={`week-${days[0].key}`}>{days}</tr>;
    });

    return (
      <div className='calendar'>
        {monthPicker}
        {yearPicker}
        <table className='calendar-grid'>
          <TableHeader columns={daysHeaderColumns} headerClass='mod-no-border-top' />
          <tbody>
            {weeks}
          </tbody>
        </table>
      </div>
    );
  }
}
