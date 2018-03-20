import * as React from 'react';
import * as _ from 'underscore';
import * as  s from 'underscore.string';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Calendar, ICalendarProps, ICalendarSelectionRule} from '../calendar/Calendar';
import {CalendarConnected} from '../calendar/CalendarConnected';
import {IOption} from '../optionPicker/Option';
import {IOptionPickerProps, OptionPicker} from '../optionPicker/OptionPicker';
import {OptionPickerConnected} from '../optionPicker/OptionPickerConnected';
import {DatesSelection, IDatesSelectionProps, IRangeLimit} from './DatesSelection';
import {DatesSelectionConnected} from './DatesSelectionConnected';

export interface IDatesSelectionBox {
    title: string;
    quickOptions?: IOption[];
    isRange?: boolean;
    rangeLimit?: IRangeLimit;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    color?: string;
}

export interface IDatePickerBoxOwnProps extends React.ClassAttributes<DatePickerBox> {
    id?: string;
    datesSelectionBoxes: IDatesSelectionBox[];
    setToNowTooltip?: string;
    isClearable?: boolean;
    clearLabel?: string;
    initiallyUnselected?: boolean;
    footer?: JSX.Element;
    onClear?: () => void;
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
}

export const DEFAULT_CLEAR_DATE_LABEL = 'Clear';

export interface IDatePickerBoxProps extends IDatePickerBoxOwnProps, IDatePickerBoxStateProps,
    IDatePickerBoxChildrenProps {}

export class DatePickerBox extends React.Component<IDatePickerBoxProps, any> {
    static defaultProps: Partial<IDatePickerBoxProps> = {
        clearLabel: DEFAULT_CLEAR_DATE_LABEL,
    };

    render() {
        const calendarProps: ICalendarProps = {
            id: `calendar-${this.props.id}`,
            months: this.props.months,
            startingMonth: this.props.startingMonth,
            years: this.props.years,
            startingYear: this.props.startingYear,
            days: this.props.days,
            startingDay: this.props.startingDay,
            selectionRules: this.props.selectionRules,
            isLinkedToDateRange: this.props.isLinkedToDateRange,
        };

        const calendar: JSX.Element = this.props.withReduxState ? <CalendarConnected {...calendarProps} /> : <Calendar />;
        const datesSelectionBoxes: JSX.Element[] =
            _.map(this.props.datesSelectionBoxes, (datesSelectionBox: IDatesSelectionBox) => {
                const boxId: string = this.props.id + '-' + s.slugify(datesSelectionBox.title);

                const quickOptionsProps: IOptionPickerProps = {
                    id: boxId,
                    options: datesSelectionBox.quickOptions,
                };
                const optionPicker: JSX.Element = this.props.withReduxState
                    ? <OptionPickerConnected {...quickOptionsProps} />
                    : <OptionPicker {...quickOptionsProps} />;

                const datesSelectionProps: IDatesSelectionProps = {
                    id: boxId,
                    withTime: datesSelectionBox.withTime,
                    hasSetToNowButton: datesSelectionBox.hasSetToNowButton,
                    setToNowTooltip: this.props.setToNowTooltip,
                    isRange: datesSelectionBox.isRange,
                    isClearable: this.props.isClearable,
                    rangeLimit: datesSelectionBox.rangeLimit,
                    color: datesSelectionBox.color,
                    calendarId: calendarProps.id,
                    lowerLimitPlaceholder: this.props.lowerLimitPlaceholder,
                    upperLimitPlaceholder: this.props.upperLimitPlaceholder,
                    initiallyUnselected: this.props.initiallyUnselected,
                };
                const dateSelection: JSX.Element = this.props.withReduxState
                    ? <DatesSelectionConnected {...datesSelectionProps} />
                    : <DatesSelection {...datesSelectionProps} />;

                return (
                    <div key={boxId}>
                        <h3 className='bold text-medium-blue'>{datesSelectionBox.title}</h3>
                        {optionPicker}
                        {dateSelection}
                    </div>
                );
            });

        const clearOption: JSX.Element = this.props.isClearable
            ? <button type='button' onClick={() => this.props.onClear()} className='clear-selection-button mt2' >{this.props.clearLabel}</button>
            : null;

        return (
            <div className='date-picker-box flex flex-column'>
                <div className='split-layout'>
                    {calendar}
                    <div className='date-selection column mod-small-content p2'>
                        {datesSelectionBoxes}
                        {clearOption}
                    </div>
                </div>
                {this.props.footer}
            </div>
        );
    }
}
