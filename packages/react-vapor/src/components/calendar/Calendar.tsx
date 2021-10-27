import classNames from 'classnames';
import moment from 'moment';
import React, {useEffect, FunctionComponent} from 'react';

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

export interface ICalendarOwnProps {
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

const defaultLocales = {
    countdownHeader: {
        en: '#{days} days left',
    },
    countdownHeaderLastDay: {
        en: 'Last day',
    },
};
export const Calendar: FunctionComponent<ICalendarProps> = ({
    id,
    years = DEFAULT_YEARS,
    months = DEFAULT_MONTHS,
    startingMonth = DateUtils.currentMonth,
    days = DEFAULT_DAYS,
    startingDay = 0,
    selectionRules = [],
    isLinkedToDateRange,
    simple,
    wrapperClassNames,
    showHeader = true,
    countdown,
    locales = defaultLocales,
    defaultLanguage = 'en',
    onClick,
    calendarSelection,
    onSelectUnselectable,
    selectedYear,
    withReduxState,
    onDateChange,
    ...props
}) => {
    let countdownHeader: React.ReactNode;

    const getSelectedDatePicker = (): IDatePickerState => {
        const selectedDatePickers: IDatePickerState[] = calendarSelection
            .map((currCalSelection: IDatePickerState) => {
                if (currCalSelection.selected) {
                    return currCalSelection;
                }
            })
            .filter(Boolean);

        return selectedDatePickers.length ? selectedDatePickers[0] : null;
    };

    const handleClick = (value: Date) => {
        if (onClick) {
            const selectedDatePicker: IDatePickerState = getSelectedDatePicker();

            if (selectedDatePicker) {
                onClick(selectedDatePicker.id, selectedDatePicker.selected === DateLimits.upper, value);
            }
        }
    };

    const handleInvalidDateSelected = () => {
        if (onSelectUnselectable) {
            const selectedDatePicker: IDatePickerState = getSelectedDatePicker();

            if (selectedDatePicker) {
                onSelectUnselectable(selectedDatePicker.id);
            }
        }
    };

    useEffect(() => {
        if (onDateChange && calendarSelection.length) {
            calendarSelection.forEach((currCalSelection: IDatePickerState, index: number) => {
                if (calendarSelection[index]) {
                    let limitToChange: Date;
                    const previousLowerLimit: Date = calendarSelection[index].lowerLimit;
                    const previousUpperLimit: Date = calendarSelection[index].upperLimit;
                    const currentLowerLimit: Date = currCalSelection.lowerLimit;
                    const currentUpperLimit: Date = currCalSelection.upperLimit;

                    if (DateUtils.isDifferent(previousLowerLimit, currentLowerLimit, 'minute')) {
                        limitToChange = currentLowerLimit;
                    } else if (DateUtils.isDifferent(previousUpperLimit, currentUpperLimit, 'minute')) {
                        limitToChange = currentUpperLimit;
                    }

                    if (limitToChange) {
                        onDateChange(id + MONTH_PICKER_ID, limitToChange.getMonth());
                        onDateChange(id + YEAR_PICKER_ID, years.indexOf(limitToChange.getFullYear().toString()));
                    }
                }
            });
        }
    }, [calendarSelection]);

    const fillInDayInfos = (day: IDay): IDay => {
        day.isSelectable = true;

        calendarSelection.forEach((currCalSelection: IDatePickerState) => {
            const selectionStart: moment.Moment = currCalSelection.lowerLimit
                ? moment(currCalSelection.lowerLimit).startOf('day')
                : null;
            const selectionEnd: moment.Moment =
                currCalSelection.isRange && currCalSelection.upperLimit && currCalSelection.lowerLimit
                    ? moment(currCalSelection.upperLimit).endOf('day')
                    : selectionStart;
            const isSelected =
                selectionStart && selectionEnd && day.date.isBetween(selectionStart, selectionEnd, 'day', '[]');

            day.isSelectable =
                currCalSelection.isRange &&
                currCalSelection.selected === DateLimits.upper &&
                currCalSelection.lowerLimit
                    ? day.isSelectable && day.date.isSameOrAfter(currCalSelection.lowerLimit)
                    : day.isSelectable;
            day.isSelected = (day.isSelectable && isSelected) || day.isSelected;
            day.isLowerLimit = (currCalSelection.isRange && day.date.isSame(selectionStart, 'day')) || day.isLowerLimit;
            day.isUpperLimit = (currCalSelection.isRange && day.date.isSame(selectionEnd, 'day')) || day.isUpperLimit;
            day.color = isSelected ? currCalSelection.color : day.color;
            day.isCountdown = !!countdown;

            selectionRules.forEach((rule: ICalendarSelectionRule) => {
                if (day.isSelectable) {
                    if (
                        rule.isFor === CalendarSelectionRuleType.all ||
                        (rule.isFor === CalendarSelectionRuleType.lower &&
                            currCalSelection.selected === DateLimits.lower) ||
                        (rule.isFor === CalendarSelectionRuleType.upper &&
                            currCalSelection.selected === DateLimits.upper)
                    ) {
                        day.isSelectable = rule.test(day.date.toDate());
                    } else if (
                        rule.isFor === CalendarSelectionRuleType.range &&
                        currCalSelection.selected === DateLimits.upper
                    ) {
                        day.isSelectable = rule.test(currCalSelection.lowerLimit, day.date.toDate());
                    }
                }
            });
        });

        return day;
    };

    const monthPickerProps: IOptionsCycleProps = {
        options: months,
        isInline: true,
        className: 'mod-month',
    };

    const startingYearIndex: number = years.indexOf(DateUtils.currentYear.toString());

    // startingYear is an index, so can't be more than length of years
    const isStartingYearDefined = !!years[props.startingYear];

    const startingYear: number =
        (isStartingYearDefined && props.startingYear) ||
        (startingYearIndex >= 0 ? startingYearIndex : Math.floor(years.length / 2));

    const yearPickerProps: IOptionsCycleProps = {
        options: years,
        isInline: true,
        className: 'mod-year',
    };

    const orderedDays: string[] = [days[startingDay], ...days.slice(startingDay + 1), ...days.slice(0, startingDay)];
    const daysHeaderColumns: ITableHeaderCellProps[] = orderedDays.map((day: string) => ({
        title: countdown ? day.substr(0, 1) : day,
    }));

    const monthPicker = withReduxState ? (
        <OptionsCycleConnected id={id + MONTH_PICKER_ID} startAt={startingMonth} {...monthPickerProps} />
    ) : (
        <OptionsCycle currentOption={startingMonth} {...monthPickerProps} />
    );

    const yearPicker = withReduxState ? (
        <OptionsCycleConnected id={id + YEAR_PICKER_ID} startAt={startingYear} {...yearPickerProps} />
    ) : (
        <OptionsCycle currentOption={startingYear} {...yearPickerProps} />
    );

    const selectedYearOption = selectedYear || startingYear;

    const year = parseInt(years[selectedYearOption], 10);
    const selectedMonth = props.selectedMonth ?? startingMonth;
    const month: IDay[][] = DateUtils.getMonthWeeks(new Date(year, selectedMonth), startingDay);

    const weeks = month.map((week: IDay[]) => {
        const daysInWeek = week.map((day: IDay) => {
            const dayFilled = fillInDayInfos(day);
            return (
                <CalendarDay
                    key={dayFilled.date.toString()}
                    day={dayFilled}
                    onClick={(value: Date) => handleClick(value)}
                    onSelectUnselectable={() => handleInvalidDateSelected()}
                />
            );
        });

        return (
            <tr key={`week-${daysInWeek[0].key}`} className={classNames({'no-hover': countdown})}>
                {daysInWeek}
            </tr>
        );
    });

    const tableClasses: string = classNames('table', 'calendar-grid', {
        selecting: !!getSelectedDatePicker(),
    });

    const wrapperClasses: string = classNames(
        'calendar',
        {
            'mod-width-50': !simple,
            'countdown-calendar': countdown,
        },
        wrapperClassNames
    );

    if (countdown) {
        const endOfMonth = moment().endOf('month');
        const daysLeftInMonth = endOfMonth.diff(moment(), 'days');

        // Datepicker uses below logic to avoid displaying '0 days left'
        const countdownTitle =
            daysLeftInMonth === 0
                ? locales.countdownHeaderLastDay[defaultLanguage]
                : locales.countdownHeader[defaultLanguage].replace('#{days}', daysLeftInMonth.toString());

        countdownHeader = (
            <div id="countdown-header">
                <h5 className="bold mb1">{countdownTitle}</h5>
                <div className="smaller">in {months[selectedMonth]}</div>
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
            {showHeader && (countdownHeader ?? defaultHeader)}
            <table className={tableClasses}>
                <TableHeader
                    columns={daysHeaderColumns}
                    headerClass={classNames('mod-no-border-top', {'mod-no-border-bottom': countdown})}
                />
                <tbody>{weeks}</tbody>
            </table>
        </div>
    );
};
1;
