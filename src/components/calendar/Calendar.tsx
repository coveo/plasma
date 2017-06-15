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

export const CalendarSelectionRuleType = {
  all: 'ALL',
  lower: 'LOWER',
  upper: 'UPPER',
  range: 'RANGE',
};

export interface ICalendarSelectionRule {
  test: (date: Date, secondDate?: Date) => boolean;
  isFor: string;
}

export interface ICalendarOwnProps extends React.ClassAttributes<Calendar> {
  id?: string;
  months?: string[];
  startingMonth?: number;
  years?: string[];
  startingYear?: number;
  days?: string[];
  startingDay?: number;
  selectionRules?: ICalendarSelectionRule[];
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
  'December',
];

export const DEFAULT_YEARS: string[] = [
  ...DateUtils.getPreviousYears(10),
  DateUtils.currentYear.toString(),
  ...DateUtils.getNextYears(10),
];

export const DEFAULT_DAYS: string[] = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export const MONTH_PICKER_ID: string = 'calendar-months';

export const YEAR_PICKER_ID: string = 'calendar-years';

export class Calendar extends React.Component<ICalendarProps, any> {
  static defaultProps: Partial<ICalendarProps> = {
    selectionRules: [],
    years: DEFAULT_YEARS,
    months: DEFAULT_MONTHS,
    days: DEFAULT_DAYS,
    startingMonth: DateUtils.currentMonth,
    startingDay: 0,
  };

  private getSelectedDatePicker(): IDatePickerState {
    const selectedDatePickers: IDatePickerState[] = _.map(this.props.calendarSelection, (calendarSelection: IDatePickerState) => {
      if (calendarSelection.selected) {
        return calendarSelection;
      }
    }).filter(Boolean);

    return selectedDatePickers.length ? selectedDatePickers[0] : null;
  }

  private handleClick(value: Date) {
    if (this.props.onClick) {
      const selectedDatePicker: IDatePickerState = this.getSelectedDatePicker();

      if (selectedDatePicker) {
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
              this.props.years.indexOf(limitToChange.getFullYear().toString()));
          }
        }
      });
    }
  }

  fillInDayInfos(day: IDay): IDay {
    const dayStart: moment.Moment = day.date.startOf('day');
    day.isSelectable = true;

    _.each(this.props.calendarSelection, (calendarSelection: IDatePickerState) => {
      const selectionStart: moment.Moment = calendarSelection.lowerLimit
        ? moment(calendarSelection.lowerLimit).startOf('day')
        : undefined;
      const selectionEnd: moment.Moment = calendarSelection.upperLimit
        ? (calendarSelection.isRange
          ? moment(calendarSelection.upperLimit).startOf('day')
          : selectionStart)
        : undefined;
      const isSelected = selectionStart && selectionEnd
        && dayStart.toDate() >= selectionStart.toDate() && dayStart.toDate() <= selectionEnd.toDate();

      day.isSelected = isSelected || day.isSelected;
      day.isLowerLimit = calendarSelection.isRange && !dayStart.diff(selectionStart) || day.isLowerLimit;
      day.isUpperLimit = calendarSelection.isRange && !dayStart.diff(selectionEnd) || day.isUpperLimit;
      day.color = isSelected ? calendarSelection.color : day.color;

      _.each(this.props.selectionRules, (rule: ICalendarSelectionRule) => {
        if (day.isSelectable) {
          if (rule.isFor == CalendarSelectionRuleType.all
            || (rule.isFor === CalendarSelectionRuleType.lower && calendarSelection.selected === DateLimits.lower)
            || (rule.isFor === CalendarSelectionRuleType.upper && calendarSelection.selected === DateLimits.upper)) {
            day.isSelectable = rule.test(day.date.toDate());
          } else if (rule.isFor === CalendarSelectionRuleType.range && calendarSelection.selected === DateLimits.upper) {
            day.isSelectable = rule.test(calendarSelection.lowerLimit, day.date.toDate());
          }
        }
      });
    });

    return day;
  }

  render() {
    const monthPickerProps: IOptionsCycleProps = {
      options: this.props.months,
      startAt: this.props.startingMonth,
      isInline: true,
    };

    const startingYear: number = this.props.startingYear || this.props.years.indexOf(DateUtils.currentYear.toString());
    const yearPickerProps: IOptionsCycleProps = {
      options: this.props.years,
      startAt: startingYear,
      isInline: true,
    };

    const orderedDays: string[] = [
      this.props.days[this.props.startingDay],
      ...this.props.days.slice(this.props.startingDay + 1),
      ...this.props.days.slice(0, this.props.startingDay),
    ];
    const daysHeaderColumns: ITableHeaderCellProps[] = _.map(orderedDays, (day: string) => ({ title: day }));

    const monthPicker = this.props.withReduxState
      ? <OptionsCycleConnected id={this.props.id + MONTH_PICKER_ID} {...monthPickerProps} />
      : <OptionsCycle {...monthPickerProps} />;

    const yearPicker = this.props.withReduxState
      ? <OptionsCycleConnected id={this.props.id + YEAR_PICKER_ID} {...yearPickerProps} />
      : <OptionsCycle {...yearPickerProps} />;

    const sectedYearOption = !_.isUndefined(this.props.selectedYear) ? this.props.selectedYear : startingYear;
    const year = parseInt(this.props.years[sectedYearOption]);
    const selectedMonth = !_.isUndefined(this.props.selectedMonth) ? this.props.selectedMonth : this.props.startingMonth;

    const month: IDay[][] = DateUtils.getMonthWeeks(new Date(year, selectedMonth), this.props.startingDay);
    const weeks: JSX.Element[] = _.map(month, (week: IDay[]) => {
      const days: JSX.Element[] = _.map(week, (day: IDay) => {
        const dayFilled = this.fillInDayInfos(day);
        return <CalendarDay
          key={dayFilled.date.toString()}
          day={dayFilled}
          onClick={(value: Date) => this.handleClick(value)}
          onSelectUnselectable={() => this.handleClick(null)} />;
      });

      return <tr key={`week-${days[0].key}`}>{days}</tr>;
    });

    const tableClasses: string[] = ['calendar-grid'];
    if (this.getSelectedDatePicker()) {
      tableClasses.push('selecting');
    }

    return (
      <div className='calendar column'>
        <div className='calendar-header p2'>
          {monthPicker}
          {yearPicker}
        </div>
        <table className={tableClasses.join(' ')}>
          <TableHeader columns={daysHeaderColumns} headerClass='mod-no-border-top' />
          <tbody>
            {weeks}
          </tbody>
        </table>
      </div>
    );
  }
}
