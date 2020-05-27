import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import * as s from 'underscore.string';

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

export class DatePickerBox extends React.Component<IDatePickerBoxProps, any> {
    static defaultProps: Partial<IDatePickerBoxProps> = {
        clearLabel: DEFAULT_CLEAR_DATE_LABEL,
    };

    static getCalendarId = (datePickerId: string) => `calendar-${datePickerId}`;

    private id: string;

    componentWillMount() {
        this.id = DatePickerBox.getCalendarId(this.props.id);
    }

    render() {
        const calendarProps: ICalendarProps = {
            id: this.id,
            months: this.props.months,
            startingMonth: this.props.startingMonth,
            years: this.props.years,
            startingYear: this.props.startingYear,
            days: this.props.days,
            startingDay: this.props.startingDay,
            selectionRules: this.props.selectionRules,
            isLinkedToDateRange: this.props.isLinkedToDateRange,
            simple: this.props.simple,
            wrapperClassNames: this.props.withoutBoxResize && 'calendar-max-height',
        };

        const calendar: JSX.Element = this.props.withReduxState ? (
            <CalendarConnected {...calendarProps} />
        ) : (
            <Calendar />
        );

        const datePickerClasses: string = classNames('date-picker-box', 'flex', 'flex-column', {
            simple: this.props.simple,
        });

        const inside: JSX.Element = this.props.simple ? (
            calendar
        ) : (
            <div
                className={classNames('flex', {
                    'calendar-max-height': this.props.withoutBoxResize,
                })}
            >
                {calendar}
                {this.getdatePickerRightPart()}
            </div>
        );

        return (
            <div className={datePickerClasses}>
                {inside}
                {this.props.footer}
            </div>
        );
    }

    private getdatePickerRightPart(): JSX.Element {
        return (
            <div className="date-selection mod-width-50 mod-border-left mod-small-content p2">
                {this.getdateSelectionBoxes()}
                {this.getClearOptions()}
            </div>
        );
    }

    private getdateSelectionBoxes(): JSX.Element[] {
        return _.map(this.props.datesSelectionBoxes, (datesSelectionBox: IDatesSelectionBox) => {
            const boxId: string = `${this.props.id}-${s.slugify(datesSelectionBox.title)}`;

            const quickOptionsProps: IOptionPickerProps = {
                id: boxId,
                options: datesSelectionBox.quickOptions,
            };
            const optionPicker: JSX.Element = this.props.withReduxState ? (
                <OptionPickerConnected {...quickOptionsProps} />
            ) : (
                <OptionPicker {...quickOptionsProps} />
            );

            const datesSelectionProps: IDatesSelectionProps = {
                id: boxId,
                withTime: datesSelectionBox.withTime,
                hasSetToNowButton: datesSelectionBox.hasSetToNowButton,
                setToNowTooltip: this.props.setToNowTooltip,
                isRange: datesSelectionBox.isRange,
                isClearable: this.props.isClearable,
                rangeLimit: datesSelectionBox.rangeLimit,
                color: datesSelectionBox.color,
                calendarId: this.id,
                lowerLimitPlaceholder: this.props.lowerLimitPlaceholder,
                upperLimitPlaceholder: this.props.upperLimitPlaceholder,
                initiallyUnselected: this.props.initiallyUnselected,
                initialDateRange: this.props.initialDateRange,
            };
            const dateSelection: JSX.Element = this.props.withReduxState ? (
                <DatesSelectionConnected {...datesSelectionProps} />
            ) : (
                <DatesSelection {...datesSelectionProps} />
            );

            return (
                <div key={boxId}>
                    <h3 className="bold text-medium-blue">{datesSelectionBox.title}</h3>
                    {optionPicker}
                    {dateSelection}
                </div>
            );
        });
    }

    private getClearOptions(): JSX.Element {
        return this.props.isClearable ? (
            <button type="button" onClick={() => this.props.onClear()} className="clear-selection-button mt2">
                {this.props.clearLabel}
            </button>
        ) : null;
    }
}
