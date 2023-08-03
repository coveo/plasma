import classNames from 'clsx';
import moment from 'moment';
import {ClassAttributes, ReactNode, Component} from 'react';
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

type Languages = 'en';

interface I18nConfig {
    [key: string]: Record<Languages, string>;
}

export interface ICalendarOwnProps extends ClassAttributes<Calendar> {
    id?: string;
    /**
     * The list of months available in the calendar
     *
     * @default ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
     */
    months?: string[];
    /**
     * The month initially displayed in the calendar in the form of an index of the "months" array prop
     *
     * @default current month
     */
    startingMonth?: number;
    /**
     * The list of years available in the calendar
     *
     * @default 30 years before and after today
     */
    years?: string[];
    /**
     * The year initially displayed in the calendar in the form of an index of the "years" array prop
     *
     * @default current year
     */
    startingYear?: number;
    /**
     * The label of each day of the week displayed in the calendar
     *
     * @default ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     */
    days?: string[];
    /**
     * The starting day of the week displayed in the calendar in the form of an index of the "days" array prop
     *
     * @default 0
     */
    startingDay?: number;
    /**
     * Selection rules that may restrict the dates available for selection
     *
     * @default []
     */
    selectionRules?: ICalendarSelectionRule[];
    /**
     * If set to false, it will sync both the lower and upper to the same value
     */
    isLinkedToDateRange?: boolean;
    /**
     * If set to true, only the calendar will be visible
     */
    simple?: boolean;
    wrapperClassNames?: string;
    showHeader?: boolean;
    countdown?: boolean;
    locales?: I18nConfig;
    defaultLanguage?: Languages;
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
    ...DateUtils.getPreviousYears(30),
    DateUtils.currentYear.toString(),
    ...DateUtils.getNextYears(30),
];

export const DEFAULT_DAYS: string[] = moment.weekdaysShort();

export const MONTH_PICKER_ID: string = 'calendar-months';

export const YEAR_PICKER_ID: string = 'calendar-years';

/**
 * @deprecated Use Mantine Calendar instead: https://mantine.dev/dates/calendar/
 */
export class Calendar extends Component<ICalendarProps, any> {
    private countdownHeader: ReactNode;

    static defaultProps: Partial<ICalendarProps> = {
        selectionRules: [],
        years: DEFAULT_YEARS,
        months: DEFAULT_MONTHS,
        days: DEFAULT_DAYS,
        startingDay: 0,
        showHeader: true,
        defaultLanguage: 'en',
        locales: {
            countdownHeader: {
                en: '#{days} days left',
            },
            countdownHeaderLastDay: {
                en: 'Last day',
            },
        },
    };

    private getSelectedDatePicker(): IDatePickerState {
        const selectedDatePickers: IDatePickerState[] = _.map(
            this.props.calendarSelection,
            (calendarSelection: IDatePickerState) => {
                if (calendarSelection.selected) {
                    return calendarSelection;
                }
            },
        ).filter(Boolean);

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

    componentDidUpdate(prevProps: ICalendarProps) {
        if (this.props.onDateChange && prevProps.calendarSelection.length) {
            _.each(this.props.calendarSelection, (calendarSelection: IDatePickerState, index: number) => {
                if (prevProps.calendarSelection[index]) {
                    let limitToChange: Date;
                    const previousLowerLimit: Date = prevProps.calendarSelection[index].lowerLimit;
                    const previousUpperLimit: Date = prevProps.calendarSelection[index].upperLimit;
                    const currentLowerLimit: Date = calendarSelection.lowerLimit;
                    const currentUpperLimit: Date = calendarSelection.upperLimit;

                    if (DateUtils.isDifferent(previousLowerLimit, currentLowerLimit, 'minute')) {
                        limitToChange = currentLowerLimit;
                    } else if (DateUtils.isDifferent(previousUpperLimit, currentUpperLimit, 'minute')) {
                        limitToChange = currentUpperLimit;
                    }

                    if (limitToChange) {
                        this.props.onDateChange(this.props.id + MONTH_PICKER_ID, limitToChange.getMonth());
                        this.props.onDateChange(
                            this.props.id + YEAR_PICKER_ID,
                            this.props.years.indexOf(limitToChange.getFullYear().toString()),
                        );
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
            const selectionEnd: moment.Moment =
                calendarSelection.isRange && calendarSelection.upperLimit && calendarSelection.lowerLimit
                    ? moment(calendarSelection.upperLimit).endOf('day')
                    : selectionStart;
            const isSelected =
                selectionStart && selectionEnd && day.date.isBetween(selectionStart, selectionEnd, 'day', '[]');

            day.isSelectable =
                calendarSelection.isRange &&
                calendarSelection.selected === DateLimits.upper &&
                calendarSelection.lowerLimit
                    ? day.isSelectable && day.date.isSameOrAfter(calendarSelection.lowerLimit)
                    : day.isSelectable;
            day.isSelected = (day.isSelectable && isSelected) || day.isSelected;
            day.isLowerLimit =
                (calendarSelection.isRange && day.date.isSame(selectionStart, 'day')) || day.isLowerLimit;
            day.isUpperLimit = (calendarSelection.isRange && day.date.isSame(selectionEnd, 'day')) || day.isUpperLimit;
            day.isCountdown = !!this.props.countdown;

            _.each(this.props.selectionRules, (rule: ICalendarSelectionRule) => {
                if (day.isSelectable) {
                    if (
                        rule.isFor === CalendarSelectionRuleType.all ||
                        (rule.isFor === CalendarSelectionRuleType.lower &&
                            calendarSelection.selected === DateLimits.lower) ||
                        (rule.isFor === CalendarSelectionRuleType.upper &&
                            calendarSelection.selected === DateLimits.upper)
                    ) {
                        day.isSelectable = rule.test(day.date.toDate());
                    } else if (
                        rule.isFor === CalendarSelectionRuleType.range &&
                        calendarSelection.selected === DateLimits.upper
                    ) {
                        day.isSelectable = rule.test(calendarSelection.lowerLimit, day.date.toDate());
                    }
                }
            });
        });

        return day;
    }

    render() {
        const startingMonth = this.props.startingMonth || DateUtils.currentMonth;
        const monthPickerProps: IOptionsCycleProps = {
            options: this.props.months,
            isInline: true,
            className: 'mod-month',
        };

        const startingYearIndex: number = this.props.years.indexOf(DateUtils.currentYear.toString());

        // this.props.startingYear is an index, so can't be more than length of this.props.years
        const isStartingYearDefined = !!this.props.years[this.props.startingYear];

        const startingYear: number =
            (isStartingYearDefined && this.props.startingYear) ||
            (startingYearIndex >= 0 ? startingYearIndex : Math.floor(this.props.years.length / 2));

        const yearPickerProps: IOptionsCycleProps = {
            options: this.props.years,
            isInline: true,
            className: 'mod-year',
        };

        const orderedDays: string[] = [
            this.props.days[this.props.startingDay],
            ...this.props.days.slice(this.props.startingDay + 1),
            ...this.props.days.slice(0, this.props.startingDay),
        ];
        const daysHeaderColumns: ITableHeaderCellProps[] = _.map(orderedDays, (day: string) => ({
            title: this.props.countdown ? day.substr(0, 1) : day,
        }));

        const monthPicker = this.props.withReduxState ? (
            <OptionsCycleConnected id={this.props.id + MONTH_PICKER_ID} startAt={startingMonth} {...monthPickerProps} />
        ) : (
            <OptionsCycle currentOption={startingMonth} {...monthPickerProps} />
        );

        const yearPicker = this.props.withReduxState ? (
            <OptionsCycleConnected id={this.props.id + YEAR_PICKER_ID} startAt={startingYear} {...yearPickerProps} />
        ) : (
            <OptionsCycle currentOption={startingYear} {...yearPickerProps} />
        );

        const selectedYearOption = !_.isUndefined(this.props.selectedYear) ? this.props.selectedYear : startingYear;
        const year = parseInt(this.props.years[selectedYearOption], 10);
        const selectedMonth = !_.isUndefined(this.props.selectedMonth) ? this.props.selectedMonth : startingMonth;
        const month: IDay[][] = DateUtils.getMonthWeeks(new Date(year, selectedMonth), this.props.startingDay);
        const weeks: JSX.Element[] = _.map(month, (week: IDay[]) => {
            const days: JSX.Element[] = _.map(week, (day: IDay) => {
                const dayFilled = this.fillInDayInfos(day);
                return (
                    <CalendarDay
                        key={dayFilled.date.toString()}
                        day={dayFilled}
                        onClick={(value: Date) => this.handleClick(value)}
                        onSelectUnselectable={() => this.handleInvalidDateSelected()}
                    />
                );
            });

            return (
                <tr key={`week-${days[0].key}`} className={classNames({'no-hover': this.props.countdown})}>
                    {days}
                </tr>
            );
        });

        const tableClasses: string = classNames('table', 'calendar-grid', {
            selecting: !!this.getSelectedDatePicker(),
        });

        const wrapperClasses: string = classNames(
            'calendar',
            {
                'mod-width-50': !this.props.simple,
                'countdown-calendar': this.props.countdown,
            },
            this.props.wrapperClassNames,
        );

        if (this.props.countdown) {
            const {
                locales: {countdownHeader, countdownHeaderLastDay},
                defaultLanguage,
            } = this.props;

            const endOfMonth = moment().endOf('month');
            const daysLeftInMonth = endOfMonth.diff(moment(), 'days');

            // Datepicker uses below logic to avoid displaying '0 days left'
            const countdownTitle =
                daysLeftInMonth === 0
                    ? countdownHeaderLastDay[defaultLanguage]
                    : countdownHeader[defaultLanguage].replace('#{days}', daysLeftInMonth.toString());

            this.countdownHeader = (
                <div id="countdown-header">
                    <h5 className="bold mb1">{countdownTitle}</h5>
                    <div className="smaller">in {this.props.months[selectedMonth]}</div>
                </div>
            );
        }

        const defaultHeader = (
            <div className="calendar-header p2">
                {monthPicker}
                {yearPicker}
            </div>
        );

        return (
            <div className={wrapperClasses}>
                {this.props.showHeader && (this.countdownHeader ?? defaultHeader)}
                <table className={tableClasses}>
                    <TableHeader
                        columns={daysHeaderColumns}
                        headerClass={classNames('mod-no-border-top', {'mod-no-border-bottom': this.props.countdown})}
                    />
                    <tbody>{weeks}</tbody>
                </table>
            </div>
        );
    }
}
1;
