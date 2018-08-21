import * as classNames from 'classnames';
import * as moment from 'moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {DateUtils} from '../../utils/DateUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {DEFAULT_YEARS, ICalendarSelectionRule} from '../calendar/Calendar';
import {Input} from '../input/Input';
import {ModalFooter} from '../modal/ModalFooter';
import {DatePickerBox, IDatePickerBoxChildrenProps, IDatePickerBoxProps, IDatesSelectionBox} from './DatePickerBox';
import {DatePickerDateRange} from './DatePickerConstants';
import {IDatePickerState} from './DatePickerReducers';

export interface IDatePickerDropdownOwnProps extends React.ClassAttributes<DatePickerDropdown> {
    label?: string;
    id?: string;
    applyLabel?: string;
    cancelLabel?: string;
    toLabel?: string;
    onRight?: boolean;
    onBeforeApply?: () => void;
    extraDropdownClasses?: string[];
    extraDropdownToggleClasses?: string[];
    renderDatePickerWhenClosed?: boolean;
    initiallyUnselected?: boolean;
    isClearable?: boolean;
    attributeName?: string;
    readonly?: boolean;
}

export interface IDatePickerDropdownChildrenProps extends IDatePickerBoxChildrenProps {
    datesSelectionBoxes: IDatesSelectionBox[];
    setToNowTooltip?: string;
    clearLabel?: string;
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
    simple?: boolean;
    initialDateRange?: DatePickerDateRange;
}

export interface IDatePickerDropdownStateProps extends IReduxStatePossibleProps {
    isOpened?: boolean;
    datePicker?: IDatePickerState;
}

export interface IDatePickerDropdownDispatchProps {
    onApply?: () => void;
    onCancel?: (currentMonth: number, currentYear: number, isOpened: boolean) => void;
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: (datePicker: IDatePickerState) => void;
    onDocumentClick?: () => void;
    onClear?: () => void;
}

export interface IDatePickerDropdownProps extends IDatePickerDropdownOwnProps, IDatePickerDropdownStateProps,
    IDatePickerDropdownDispatchProps, IDatePickerDropdownChildrenProps {}

export const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string = 'Select date';
export const DEFAULT_APPLY_DATE_LABEL: string = 'Apply';
export const DEFAULT_CANCEL_DATE_LABEL: string = 'Cancel';
export const DEFAULT_TO_LABEL: string = 'to';
export const DEFAULT_EXTRA_DROPDOWN_CLASSES: string[] = [];
export const DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES: string[] = [];
export const DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED: boolean = true;
export const DEFAULT_INITIALY_UNSELECTED: boolean = false;

export class DatePickerDropdown extends React.Component<IDatePickerDropdownProps, any> {
    static defaultProps: Partial<IDatePickerDropdownProps> = {
        label: DEFAULT_DATE_PICKER_DROPDOWN_LABEL,
        applyLabel: DEFAULT_APPLY_DATE_LABEL,
        cancelLabel: DEFAULT_CANCEL_DATE_LABEL,
        toLabel: DEFAULT_TO_LABEL,
        extraDropdownClasses: DEFAULT_EXTRA_DROPDOWN_CLASSES,
        extraDropdownToggleClasses: DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES,
        renderDatePickerWhenClosed: DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED,
        isClearable: false,
    };

    private dropdown: HTMLDivElement;

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }

        if (this.props.onDocumentClick && !this.props.readonly) {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        if (this.props.onDocumentClick && !this.props.readonly) {
            document.removeEventListener('click', this.handleDocumentClick);
        }

        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        let label: string = this.props.label;
        let toLabel: JSX.Element = null;
        let labelSecondPart: string = '';
        if (this.props.datePicker && this.props.datePicker.appliedLowerLimit) {
            label = this.formatDate(this.props.datePicker.appliedLowerLimit);
            if (this.props.datePicker.isRange) {
                const formattedUpper = this.formatDate(this.props.datePicker.appliedUpperLimit);
                if (formattedUpper !== label) {
                    toLabel = <span className='to-label'> {this.props.toLabel} </span>;
                    labelSecondPart = formattedUpper;
                }
            }
        }

        if (this.props.readonly) {
            return (
                <Input
                    value={`${label} ${this.props.datePicker && this.props.datePicker.isRange ? this.props.toLabel + ' ' + labelSecondPart : ''}`}
                    readOnly
                />
            );
        }

        const dropdownClasses: string = classNames(
            ...this.props.extraDropdownClasses,
            'dropdown-wrapper',
            'dropdown',
            {
                open: this.props.isOpened,
            },
        );

        const menuClasses: string = classNames(
            'dropdown-menu',
            'normal-height',
            {
                'on-right': this.props.onRight,
            },
        );

        return (
            <div className='date-picker-dropdown'>
                <div className={dropdownClasses} ref={(dropdown: HTMLDivElement) => this.dropdown = dropdown}>
                    <span
                        className={`dropdown-toggle btn inline-flex flex-center ${this.props.extraDropdownToggleClasses.join(' ')}`}
                        onClick={() => this.handleClick()}>
                        <span className='dropdown-selected-value'>
                            <label>
                                {label}
                                {toLabel}
                                {labelSecondPart}
                            </label>
                        </span>
                        <span className='dropdown-toggle-arrow'></span>
                    </span>
                    <div className={menuClasses}>
                        {this.getDatePickerBox()}
                    </div>
                </div>
            </div>
        );
    }

    private handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.datePicker);
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        const dropdown: Element | Text = ReactDOM.findDOMNode(this.dropdown);
        if (!dropdown.contains(e.target as Node) && this.props.isOpened) {
            this.props.onDocumentClick();
            this.handleCancel();
        }
    }

    private handleApply() {
        if (this.props.onBeforeApply) {
            this.props.onBeforeApply();
        }

        if (this.props.onApply) {
            this.props.onApply();
        }
    }

    private handleCancel() {
        if (this.props.onCancel) {
            const currentMonth: number = this.props.datePicker && this.props.datePicker.appliedLowerLimit
                ? this.props.datePicker.appliedLowerLimit.getMonth()
                : DateUtils.currentMonth;
            const years: string[] = this.props.years || DEFAULT_YEARS;
            const currentYear: number = this.props.datePicker && this.props.datePicker.appliedLowerLimit
                ? this.props.datePicker.appliedLowerLimit.getFullYear()
                : DateUtils.currentYear;
            this.props.onCancel(currentMonth, years.indexOf(currentYear.toString()), this.props.isOpened);
        }
    }

    private handleClear() {
        if (this.props.onClear) {
            this.props.onClear();
        }
    }

    private formatDate(date: Date): string {
        return this.props.datesSelectionBoxes.length && this.props.datesSelectionBoxes[0].withTime
            ? DateUtils.getDateWithTimeString(date)
            : DateUtils.getSimpleDate(date);
    }

    private hasExceededRangeLimit(): boolean {
        if (this.props.datePicker && this.props.datePicker.rangeLimit) {
            const {weeks, days, hours} = this.props.datePicker.rangeLimit;
            const limitInMinutes: number = (weeks ? weeks * 10080 : 0) + (days ? days * 1440 : 0) + (hours ? hours * 60 : 0);
            const diffInMinutes: number = moment(this.props.datePicker.inputUpperLimit).diff(moment(this.props.datePicker.inputLowerLimit), 'minutes');
            return diffInMinutes > limitInMinutes;
        }

        return false;
    }

    private getDatePickerBox(): JSX.Element {
        if (this.props.isOpened || this.props.renderDatePickerWhenClosed) {
            const hasExceededRangeLimit = this.hasExceededRangeLimit();
            const datePickerBoxProps: IDatePickerBoxProps = {
                setToNowTooltip: this.props.setToNowTooltip,
                datesSelectionBoxes: this.props.datesSelectionBoxes,
                months: this.props.months,
                startingMonth: this.props.startingMonth,
                years: this.props.years,
                startingYear: this.props.startingYear,
                days: this.props.days,
                startingDay: this.props.startingDay,
                selectionRules: this.props.selectionRules,
                lowerLimitPlaceholder: this.props.lowerLimitPlaceholder,
                upperLimitPlaceholder: this.props.upperLimitPlaceholder,
                isLinkedToDateRange: this.props.isLinkedToDateRange,
                isClearable: this.props.isClearable,
                initiallyUnselected: this.props.initiallyUnselected,
                clearLabel: this.props.clearLabel,
                simple: this.props.simple,
                initialDateRange: this.props.initialDateRange,
                onClear: () => this.handleClear(),
                footer: (
                    <ModalFooter classes={['mod-small']}>
                        <Button enabled={!hasExceededRangeLimit}
                            name={this.props.applyLabel}
                            small={true}
                            primary={true}
                            tooltip={hasExceededRangeLimit ? this.props.datePicker.rangeLimit.message : ''}
                            tooltipPlacement={'left'}
                            onClick={() => this.handleApply()} />
                        <Button enabled={true}
                            name={this.props.cancelLabel}
                            small={true}
                            primary={true}
                            onClick={() => this.handleCancel()} />
                    </ModalFooter>
                ),
            };

            return this.props.withReduxState
                ? <DatePickerBox withReduxState id={this.props.id} {...datePickerBoxProps} />
                : <DatePickerBox {...datePickerBoxProps} />;
        }
    }
}
