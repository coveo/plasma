import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { OptionsCycle, IOptionsCycleProps } from '../optionsCycle/OptionsCycle';
import { OptionsCycleConnected } from '../optionsCycle/OptionsCycleConnected';
import { DateUtils } from '../../utils/DateUtils';
import { ITableHeaderCellProps } from '../tables/TableHeaderCell';
import { TableHeader } from '../tables/TableHeader';
import { CalendarDay, IDay } from './CalendarDay';
import { IDatePickerState } from '../datePicker/DatePickerReducers';
import { DateLimits } from '../datePicker/DatePickerActions';
import * as React from 'react';
import * as _ from 'underscore';
import * as moment from 'moment';

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
  calendarSelection?: IDatePickerState[];
}

export interface ICalendarDispatchProps {
  onClick?: (pickerId: string, isUpperLimit: boolean, value: Date) => void;
  onDateChange?: (cycleId: string, newValue: number) => void;
}

export interface ICalendarProps extends ICalendarOwnProps, ICalendarStateProps, ICalendarDispatchProps { }

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

  private handleClick(value: Date) {
    if (this.props.onClick) {
      let selectedDatePickers: IDatePickerState[] = _.map(this.props.calendarSelection, (calendarSelection: IDatePickerState) => {
        if (calendarSelection.selected) {
          return calendarSelection;
        }
      }).filter(Boolean);

      if (selectedDatePickers.length) {
        let selectedDatePicker: IDatePickerState = selectedDatePickers[0];
        this.props.onClick(selectedDatePicker.id, selectedDatePicker.selected === DateLimits.upper, value);
      }
    }
  }

  componentWillReceiveProps(nextProps: ICalendarProps) {
    if (this.props.onDateChange && this.props.calendarSelection.length) {
      _.each(nextProps.calendarSelection, (calendarSelection: IDatePickerState, index: number) => {
        let limitToChange: Date;

        if (this.props.calendarSelection[index]) {
          if (moment(calendarSelection.lowerLimit).diff(moment(this.props.calendarSelection[index].lowerLimit), 'minute')) {
            limitToChange = calendarSelection.lowerLimit;
          } else if (moment(calendarSelection.upperLimit).diff(moment(this.props.calendarSelection[index].upperLimit), 'minute')) {
            limitToChange = calendarSelection.upperLimit;
          }

          if (limitToChange) {
            this.props.onDateChange(this.props.id + MONTH_PICKER_ID, limitToChange.getMonth());
            this.props.onDateChange(this.props.id + YEAR_PICKER_ID,
              this.getYears().indexOf(limitToChange.getFullYear().toString()));
          }
        }
      });
    }
  }

  fillInDayInfos(day: IDay): IDay {
    let dayStart: moment.Moment = day.date.startOf('day');

    _.each(this.props.calendarSelection, (calendarSelection: IDatePickerState) => {
      let selectionStart: moment.Moment = moment(calendarSelection.lowerLimit).startOf('day');
      let selectionEnd: moment.Moment = calendarSelection.isRange
        ? moment(calendarSelection.upperLimit).startOf('day')
        : selectionStart;
      let isSelected = dayStart.toDate() >= selectionStart.toDate() && dayStart.toDate() <= selectionEnd.toDate();

      day.isSelected = isSelected || day.isSelected;
      day.isLowerLimit = calendarSelection.isRange && !dayStart.diff(selectionStart) || day.isLowerLimit;
      day.isUpperLimit = calendarSelection.isRange && !dayStart.diff(selectionEnd) || day.isUpperLimit;
      day.color = isSelected ? calendarSelection.color : day.color;
    });

    return day;
  }

  getYears(): string[] {
    return this.props.years || DEFAULT_YEARS;
  }

  render() {
    let months: string[] = this.props.months || DEFAULT_MONTHS;
    let startingMonth: number = this.props.startingMonth || DateUtils.currentMonth;
    let monthPickerProps: IOptionsCycleProps = {
      options: months,
      startAt: startingMonth,
      isInline: true
    };

    let years: string[] = this.getYears();
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

    let sectedYearOption = !_.isUndefined(this.props.selectedYear) ? this.props.selectedYear : startingYear;
    let year = parseInt(years[sectedYearOption]);
    let selectedMonth = !_.isUndefined(this.props.selectedMonth) ? this.props.selectedMonth : startingMonth;

    let month: IDay[][] = DateUtils.getMonthWeeks(new Date(year, selectedMonth), startingDay);
    let weeks: JSX.Element[] = _.map(month, (week: IDay[]) => {
      let days: JSX.Element[] = _.map(week, (day: IDay) => {
        day = this.fillInDayInfos(day);
        return <CalendarDay key={day.date.toString()} day={day} onClick={(value: Date) => this.handleClick(value)} />;
      });

      return <tr key={`week-${days[0].key}`}>{days}</tr>;
    });

    return (
      <div className='calendar column'>
        <div className='calendar-header p2'>
          {monthPicker}
          {yearPicker}
        </div>
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
