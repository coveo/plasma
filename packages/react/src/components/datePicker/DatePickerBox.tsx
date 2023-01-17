import classNames from 'classnames';
import {ClassAttributes, Component} from 'react';
import * as _ from 'underscore';
import s from 'underscore.string';

import {IReduxStatePossibleProps} from '../../utils/ReduxUtils.js';
import {Calendar, ICalendarOwnProps, ICalendarProps} from '../calendar/Calendar.js';
import {CalendarConnected} from '../calendar/CalendarConnected.js';
import {IOption} from '../optionPicker/Option.js';
import {IOptionPickerProps, OptionPicker} from '../optionPicker/OptionPicker.js';
import {OptionPickerConnected} from '../optionPicker/OptionPickerConnected.js';
import {DatesSelection, IDatesSelectionOwnProps, IDatesSelectionProps, IRangeLimit} from './DatesSelection.js';
import {DatesSelectionConnected} from './DatesSelectionConnected.js';

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

export interface IDatePickerBoxOwnProps
    extends Pick<
            ICalendarOwnProps,
            | 'months'
            | 'startingMonth'
            | 'years'
            | 'startingYear'
            | 'days'
            | 'startingDay'
            | 'selectionRules'
            | 'isLinkedToDateRange'
            | 'simple'
        >,
        Pick<
            IDatesSelectionOwnProps,
            | 'lowerLimitPlaceholder'
            | 'upperLimitPlaceholder'
            | 'initiallyUnselected'
            | 'initialDateRange'
            | 'isClearable'
            | 'setToNowTooltip'
        >,
        ClassAttributes<DatePickerBox> {
    id?: string;
    /**
     * This prop configures the portion to the right of the calendar, inside the datepicker dropdown
     */
    datesSelectionBoxes: IDatesSelectionBox[];
    /**
     * The text displayed inside the "clear" button
     *
     * @default "Clear"
     */
    clearLabel?: string;
    /**
     * The content displayed at the bottom of the datepicker dropdown
     */
    footer?: JSX.Element;
    onClear?: () => void;
    withoutBoxResize?: boolean;
}

export interface IDatePickerBoxStateProps extends IReduxStatePossibleProps {}

export const DEFAULT_CLEAR_DATE_LABEL = 'Clear';

export interface IDatePickerBoxProps extends IDatePickerBoxOwnProps, IDatePickerBoxStateProps {}

/**
 * @deprecated Use Mantine DatePicker instead
 */
export class DatePickerBox extends Component<IDatePickerBoxProps, any> {
    static defaultProps: Partial<IDatePickerBoxProps> = {
        clearLabel: DEFAULT_CLEAR_DATE_LABEL,
    };

    static getCalendarId = (datePickerId: string) => `calendar-${datePickerId}`;

    render() {
        const calendarProps: ICalendarProps = {
            id: DatePickerBox.getCalendarId(this.props.id),
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
                minimalRangeLimit: datesSelectionBox.minimalRangeLimit,
                calendarId: DatePickerBox.getCalendarId(this.props.id),
                lowerLimitPlaceholder: this.props.lowerLimitPlaceholder,
                upperLimitPlaceholder: this.props.upperLimitPlaceholder,
                initiallyUnselected: this.props.initiallyUnselected,
                initialDateRange: this.props.initialDateRange,
                selectionRules: this.props.selectionRules,
            };

            const dateSelection: JSX.Element = this.props.withReduxState ? (
                <DatesSelectionConnected {...datesSelectionProps} />
            ) : (
                <DatesSelection {...datesSelectionProps} />
            );

            return (
                <div key={boxId}>
                    <h6 className="bold">{datesSelectionBox.title}</h6>
                    {optionPicker}
                    {dateSelection}
                </div>
            );
        });
    }

    private getClearOptions(): JSX.Element {
        return this.props.isClearable ? (
            <button type="button" onClick={this.props.onClear} className="clear-selection-button btn mt2">
                {this.props.clearLabel}
            </button>
        ) : null;
    }
}
