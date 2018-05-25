import classNames = require('classnames');
import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';

import {DateUtils} from '../../utils/DateUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {DateLimits} from '../datePicker/DatePickerActions';
import {IDatePickerState} from '../datePicker/DatePickerReducers';
import {IOptionsCycleProps, OptionsCycle} from '../optionsCycle/OptionsCycle';
import {OptionsCycleConnected} from '../optionsCycle/OptionsCycleConnected';
import {TableHeader} from '../tables/TableHeader';
import {ITableHeaderCellProps} from '../tables/TableHeaderCell';
import {CalendarDay, IDay} from './CalendarDay';

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
    isLinkedToDateRange?: boolean;
    simple?: boolean;
}

export interface ICalendarStateProps extends IReduxStatePossibleProps {
    selectedMonth?: number;
    selectedYear?: number;
    calendarSelection?: IDatePickerState[];
}

export interface ICalendarDispatchProps {
    onClick?: (pickerId: string, isUpperLimit: boolean, value: Date) => void;
    onDateChange?: (cycleId: string, newValue: number) => void;
    onSelectUnselectable?: (pickerId: string) => void;
}

export interface ICalendarProps extends ICalendarOwnProps, ICalendarStateProps, ICalendarDispatchProps {}

export const DEFAULT_MONTHS: string[] = moment.months();

export const DEFAULT_YEARS: string[] = [
    ...DateUtils.getPreviousYears(10),
    DateUtils.currentYear.toString(),
    ...DateUtils.getNextYears(10),
];

export const DEFAULT_DAYS: string[] = moment.weekdaysShort();

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

    private handleInvalidDateSelected() {
        if (this.props.onSelectUnselectable) {
            const selectedDatePicker: IDatePickerState = this.getSelectedDatePicker();

            if (selectedDatePicker) {
                this.props.onSelectUnselectable(selectedDatePicker.id);
            }
        }
    }

    componentWillReceiveProps(nextProps: ICalendarProps) {
        if (this.props.onDateChange && this.props.calendarSelection.length) {
            _.each(nextProps.calendarSelection, (calendarSelection: IDatePickerState, index: number) => {
                if (this.props.calendarSelection[index]) {
                    let limitToChange: Date;
                    const currentLowerLimit: Date = this.props.calendarSelection[index].lowerLimit;
                    const currentUpperLimit: Date = this.props.calendarSelection[index].upperLimit;
                    const nextLowerLimit: Date = calendarSelection.lowerLimit;
                    const nextUpperLimit: Date = calendarSelection.upperLimit;

                    if (DateUtils.isDifferent(currentLowerLimit, nextLowerLimit, 'minute')) {
                        limitToChange = nextLowerLimit;
                    } else if (DateUtils.isDifferent(currentUpperLimit, nextUpperLimit, 'minute')) {
                        limitToChange = nextUpperLimit;
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
        day.isSelectable = true;

        _.each(this.props.calendarSelection, (calendarSelection: IDatePickerState) => {
            const selectionStart: moment.Moment = calendarSelection.lowerLimit
                ? moment(calendarSelection.lowerLimit).startOf('day')
                : null;
            const selectionEnd: moment.Moment = calendarSelection.isRange && calendarSelection.upperLimit && calendarSelection.lowerLimit
                ? moment(calendarSelection.upperLimit).endOf('day')
                : selectionStart;
            const isSelected = selectionStart && selectionEnd && day.date.isBetween(selectionStart, selectionEnd, 'day', '[]');

            day.isSelectable = calendarSelection.isRange && calendarSelection.selected === DateLimits.upper && calendarSelection.lowerLimit
                ? day.isSelectable && day.date.isSameOrAfter(calendarSelection.lowerLimit)
                : day.isSelectable;
            day.isSelected = (day.isSelectable && isSelected) || day.isSelected;
            day.isLowerLimit = (calendarSelection.isRange && day.date.isSame(selectionStart, 'day')) || day.isLowerLimit;
            day.isUpperLimit = (calendarSelection.isRange && day.date.isSame(selectionEnd, 'day')) || day.isUpperLimit;
            day.color = isSelected ? calendarSelection.color : day.color;

            _.each(this.props.selectionRules, (rule: ICalendarSelectionRule) => {
                if (day.isSelectable) {
                    if (rule.isFor === CalendarSelectionRuleType.all
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

        const startingYearIndex: number = this.props.years.indexOf(DateUtils.currentYear.toString());
        const startingYear: number = this.props.startingYear || (startingYearIndex >= 0 ? startingYearIndex : Math.floor(this.props.years.length / 2));
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
        const daysHeaderColumns: ITableHeaderCellProps[] = _.map(orderedDays, (day: string) => ({title: day}));

        const monthPicker = this.props.withReduxState
            ? <OptionsCycleConnected id={this.props.id + MONTH_PICKER_ID} {...monthPickerProps} />
            : <OptionsCycle {...monthPickerProps} />;

        const yearPicker = this.props.withReduxState
            ? <OptionsCycleConnected id={this.props.id + YEAR_PICKER_ID} {...yearPickerProps} />
            : <OptionsCycle {...yearPickerProps} />;

        const selectedYearOption = !_.isUndefined(this.props.selectedYear) ? this.props.selectedYear : startingYear;
        const year = parseInt(this.props.years[selectedYearOption], 10);
        const selectedMonth = !_.isUndefined(this.props.selectedMonth) ? this.props.selectedMonth : this.props.startingMonth;
        const month: IDay[][] = DateUtils.getMonthWeeks(new Date(year, selectedMonth), this.props.startingDay);
        const weeks: JSX.Element[] = _.map(month, (week: IDay[]) => {
            const days: JSX.Element[] = _.map(week, (day: IDay) => {
                const dayFilled = this.fillInDayInfos(day);
                return <CalendarDay
                    key={dayFilled.date.toString()}
                    day={dayFilled}
                    onClick={(value: Date) => this.handleClick(value)}
                    onSelectUnselectable={() => this.handleInvalidDateSelected()} />;
            });

            return <tr key={`week-${days[0].key}`}>{days}</tr>;
        });

        const tableClasses: string = classNames(
            'calendar-grid',
            {
                'selecting': !!this.getSelectedDatePicker(),
            },
        );

        const wrapperClasses: string = classNames(
            'calendar',
            {
                'column': !this.props.simple,
            },
        );

        return (
            <div className={wrapperClasses}>
                <div className='calendar-header p2'>
                    {monthPicker}
                    {yearPicker}
                </div>
                <table className={tableClasses}>
                    <TableHeader columns={daysHeaderColumns} headerClass='mod-no-border-top' />
                    <tbody>
                        {weeks}
                    </tbody>
                </table>
            </div>
        );
    }
}
