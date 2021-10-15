import classNames from 'classnames';
import * as React from 'react';
import {slugify} from 'underscore.string';

import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Calendar, ICalendarProps, ICalendarSelectionRule} from '../calendar/Calendar';
import {CalendarConnected} from '../calendar/CalendarConnected';
import {IOption} from '../optionPicker/Option';
import {IOptionPickerProps, OptionPicker} from '../optionPicker/OptionPicker';
import {OptionPickerConnected} from '../optionPicker/OptionPickerConnected';
import {DatePickerDateRange} from './DatePickerConstants';
import {DatesSelection, IDatesSelectionProps, IRangeLimit} from './DatesSelection';
import {DatesSelectionConnected} from './DatesSelectionConnected';

export interface IDatesSelectionBox {
    title: string;
    quickOptions?: IOption[];
    isRange?: boolean;
    rangeLimit?: IRangeLimit;
    minimalRangeLimit?: IRangeLimit;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    color?: string;
}

export interface IDatePickerBoxOwnProps {
    id?: string;
    datesSelectionBoxes: IDatesSelectionBox[];
    setToNowTooltip?: string;
    isClearable?: boolean;
    clearLabel?: string;
    initiallyUnselected?: boolean;
    simple?: boolean;
    footer?: JSX.Element;
    onClear?: () => void;
    withoutBoxResize?: boolean;
}

export interface IDatePickerBoxStateProps extends IReduxStatePossibleProps {}

export interface IDatePickerBoxChildrenProps {
    months?: string[];
    startingMonth?: number;
    years?: string[];
    startingYear?: number;
    days?: string[];
    startingDay?: number;
    selectionRules?: ICalendarSelectionRule[];
    lowerLimitPlaceholder?: string;
    upperLimitPlaceholder?: string;
    isLinkedToDateRange?: boolean;
    initialDateRange?: DatePickerDateRange;
}

export const DEFAULT_CLEAR_DATE_LABEL = 'Clear';

export interface IDatePickerBoxProps
    extends IDatePickerBoxOwnProps,
        IDatePickerBoxStateProps,
        IDatePickerBoxChildrenProps {}

export const getCalendarId = (datePickerId: string) => `calendar-${datePickerId}`;

export const DatePickerBox: React.FunctionComponent<IDatePickerBoxProps> = ({
    clearLabel = DEFAULT_CLEAR_DATE_LABEL,
    id,
    datesSelectionBoxes,
    setToNowTooltip,
    isClearable,
    initiallyUnselected,
    simple,
    footer,
    onClear,
    withoutBoxResize,
    withReduxState,
    lowerLimitPlaceholder,
    upperLimitPlaceholder,
    initialDateRange,
    months,
    startingMonth,
    years,
    startingYear,
    days,
    startingDay,
    selectionRules,
    isLinkedToDateRange,
}) => {
    const getdateSelectionBoxes = (): JSX.Element[] =>
        datesSelectionBoxes.map(
            ({title, quickOptions, withTime, hasSetToNowButton, isRange, rangeLimit, minimalRangeLimit, color}) => {
                const boxId = `${id}-${slugify(title)}`;

                const quickOptionsProps: IOptionPickerProps = {
                    id: boxId,
                    options: quickOptions,
                };

                const optionPicker = withReduxState ? (
                    <OptionPickerConnected {...quickOptionsProps} />
                ) : (
                    <OptionPicker {...quickOptionsProps} />
                );

                const datesSelectionProps: IDatesSelectionProps = {
                    id: boxId,
                    withTime,
                    hasSetToNowButton,
                    setToNowTooltip,
                    isRange,
                    isClearable,
                    rangeLimit,
                    minimalRangeLimit,
                    color,
                    calendarId: getCalendarId(id),
                    lowerLimitPlaceholder,
                    upperLimitPlaceholder,
                    initiallyUnselected,
                    initialDateRange,
                };

                const dateSelection = withReduxState ? (
                    <DatesSelectionConnected {...datesSelectionProps} />
                ) : (
                    <DatesSelection {...datesSelectionProps} />
                );

                return (
                    <div key={boxId}>
                        <h6 className="bold">{title}</h6>
                        {optionPicker}
                        {dateSelection}
                    </div>
                );
            }
        );

    const getClearOptions = (): JSX.Element =>
        isClearable ? (
            <button type="button" onClick={onClear} className="clear-selection-button btn mt2">
                {clearLabel}
            </button>
        ) : null;

    const getdatePickerRightPart = (): JSX.Element => (
        <div className="date-selection mod-width-50 mod-border-left mod-small-content p2">
            {getdateSelectionBoxes()}
            {getClearOptions()}
        </div>
    );

    const calendarProps: ICalendarProps = {
        id: getCalendarId(id),
        months,
        startingMonth,
        years,
        startingYear,
        days,
        startingDay,
        selectionRules,
        isLinkedToDateRange,
        simple,
        wrapperClassNames: withoutBoxResize && 'calendar-max-height',
    };

    const calendar = withReduxState ? <CalendarConnected {...calendarProps} /> : <Calendar />;

    const datePickerClasses = classNames('date-picker-box', 'flex', 'flex-column', {
        simple,
    });

    const inside = simple ? (
        calendar
    ) : (
        <div
            className={classNames('flex', {
                'calendar-max-height': withoutBoxResize,
            })}
        >
            {calendar}
            {getdatePickerRightPart()}
        </div>
    );

    return (
        <div className={datePickerClasses}>
            {inside}
            {footer}
        </div>
    );
};
