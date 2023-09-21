import classNames from 'clsx';
import moment from 'moment';
import {ClassAttributes, Component} from 'react';
import * as ReactDOM from 'react-dom';

import {TooltipPlacement} from '../../utils';
import {DateUtils} from '../../utils/DateUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {DEFAULT_YEARS} from '../calendar/Calendar';
import {CollapsibleToggle} from '../collapsible';
import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop, IDropOwnProps} from '../drop/Drop';
import {ModalFooter} from '../modal/ModalFooter';
import {DatePickerBox, IDatePickerBoxOwnProps, IDatePickerBoxProps} from './DatePickerBox';
import {IDatePickerState} from './DatePickerReducers';
import {IRangeLimit} from './DatesSelection';

export interface IDatePickerDropdownOwnProps
    extends Pick<
            IDatePickerBoxOwnProps,
            | 'setToNowTooltip'
            | 'datesSelectionBoxes'
            | 'months'
            | 'startingMonth'
            | 'years'
            | 'startingYear'
            | 'days'
            | 'startingDay'
            | 'selectionRules'
            | 'lowerLimitPlaceholder'
            | 'upperLimitPlaceholder'
            | 'isLinkedToDateRange'
            | 'isClearable'
            | 'initiallyUnselected'
            | 'clearLabel'
            | 'simple'
            | 'initialDateRange'
        >,
        ClassAttributes<DatePickerDropdown> {
    /**
     * The text displayed in the downdown button when no dates are selected
     */
    label?: string;
    /**
     * CSS classes to set on the DatePicker outer most element
     */
    className?: string;
    /**
     * A unique identifier that identifies the DatePicker in the PlasmaState. Useful to retrieve the selected value.
     */
    id?: string;
    /**
     * The text displayed inside the "Apply" button
     *
     * @default "Apply"
     */
    applyLabel?: string;
    /**
     * The text displayed inside the "Cancel" button
     *
     * @default "Cancel"
     */
    cancelLabel?: string;
    /**
     * The text displayed in between the 2 selected dates of a date range
     *
     * @default "to"
     */
    toLabel?: string;
    /**
     * When true, the dropdown will be aligned with the right edge of its opening button
     */
    onRight?: boolean;
    /**
     * A callback function that is executed before applying a new selection of dates
     */
    onBeforeApply?: () => void;
    /**
     * CSS classes to set on the DatePicker dropdown container
     *
     * @default []
     */
    extraDropdownClasses?: string[];
    /**
     * CSS classes to set on the DatePicker toggle button
     *
     * @default []
     */
    extraDropdownToggleClasses?: string[];
    /**
     * Whether the datepicker dropdown content is rendered when closed
     *
     * @default true
     */
    renderDatePickerWhenClosed?: boolean;
    /**
     * When true, the datepicker will not be editable
     */
    readonly?: boolean;
    /**
     * Additional props to set on the underlying Drop component
     */
    dropOptions?: Partial<IDropOwnProps>;
    /**
     * Whether the dropdown should be rendered using the Drop component. Using the Drop component can be useful to render the dropdown content outside of the standard DOM tree. This can be needed when rendering a datepicker inside a Modal and you want the dropdown content to display above or outside the Modal's natural perimeter.
     *
     * @default false
     */
    withDrop?: boolean;
    /**
     * @deprecated This was used in conjunction with the old Table component that is now deprecated
     */
    attributeName?: string;
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

export interface IDatePickerDropdownProps
    extends IDatePickerDropdownOwnProps,
        IDatePickerDropdownStateProps,
        IDatePickerDropdownDispatchProps {}

export const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string = 'Select date';
export const DEFAULT_APPLY_DATE_LABEL: string = 'Apply';
export const DEFAULT_CANCEL_DATE_LABEL: string = 'Cancel';
export const DEFAULT_TO_LABEL: string = 'to';
export const DEFAULT_EXTRA_DROPDOWN_CLASSES: string[] = [];
export const DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES: string[] = [];
export const DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED: boolean = true;
export const DEFAULT_INITIALY_UNSELECTED: boolean = false;

/**
 * @deprecated Use Mantine DatePicker instead
 */
export class DatePickerDropdown extends Component<IDatePickerDropdownProps, any> {
    static defaultProps: Partial<IDatePickerDropdownProps> = {
        label: DEFAULT_DATE_PICKER_DROPDOWN_LABEL,
        applyLabel: DEFAULT_APPLY_DATE_LABEL,
        cancelLabel: DEFAULT_CANCEL_DATE_LABEL,
        toLabel: DEFAULT_TO_LABEL,
        extraDropdownClasses: DEFAULT_EXTRA_DROPDOWN_CLASSES,
        extraDropdownToggleClasses: DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES,
        renderDatePickerWhenClosed: DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED,
        isClearable: false,
        withDrop: false,
    };

    private dropdown: HTMLDivElement;

    componentDidMount() {
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
                    toLabel = (
                        <span className={classNames('mx1', {disabled: this.props.readonly})}>{this.props.toLabel}</span>
                    );
                    labelSecondPart = formattedUpper;
                }
            }
        }

        const dropdownClasses: string = classNames(...this.props.extraDropdownClasses, 'dropdown-wrapper', 'dropdown', {
            open: this.props.isOpened,
        });

        const menuClasses: string = classNames('dropdown-menu', 'normal-height', {
            'on-right': this.props.onRight,
        });

        const toggleClasses = classNames(
            'dropdown-toggle btn inline-flex flex-center space-between',
            this.props.extraDropdownToggleClasses,
            {
                'dropdown-toggle-placeholder': !this.props.datePicker || !this.props.datePicker.appliedLowerLimit,
            },
        );

        if (this.props.withDrop) {
            return (
                <Drop
                    id={this.props.id}
                    positions={[DropPodPosition.bottom, DropPodPosition.top]}
                    buttonContainerProps={{className: 'inline-block'}}
                    renderOpenButton={(onClick: () => void) => (
                        <div
                            className={classNames('date-picker-dropdown', this.props.className)}
                            ref={(dropdown: HTMLDivElement) => (this.dropdown = dropdown)}
                        >
                            <div className={dropdownClasses}>
                                <button
                                    className={toggleClasses}
                                    onClick={() => {
                                        this.handleClick();
                                        onClick();
                                    }}
                                    disabled={this.props.readonly}
                                >
                                    <span className="dropdown-selected-value">
                                        <label>
                                            {label}
                                            {toLabel}
                                            {labelSecondPart}
                                        </label>
                                    </span>
                                    <CollapsibleToggle expanded={this.props.isOpened} />
                                </button>
                            </div>
                        </div>
                    )}
                    closeOnClickDrop={false}
                    {...this.props.dropOptions}
                >
                    {this.getDatePickerBox()}
                </Drop>
            );
        }

        return (
            <div className={classNames('date-picker-dropdown', this.props.className)}>
                <div className={dropdownClasses} ref={(dropdown: HTMLDivElement) => (this.dropdown = dropdown)}>
                    <button className={toggleClasses} onClick={this.handleClick} disabled={this.props.readonly}>
                        <span className="dropdown-selected-value">
                            <label>
                                {label}
                                {toLabel}
                                {labelSecondPart}
                            </label>
                        </span>
                        <CollapsibleToggle expanded={this.props.isOpened} />
                    </button>
                    <div className={menuClasses}>{this.getDatePickerBox()}</div>
                </div>
            </div>
        );
    }

    private handleClick = () => {
        if (this.props.onClick && !this.props.readonly) {
            this.props.onClick(this.props.datePicker);
        }
    };

    private handleDocumentClick = (e: MouseEvent) => {
        const dropdown: Element | Text = ReactDOM.findDOMNode(this.dropdown);
        if (!dropdown.contains(e.target as Node) && this.props.isOpened && !this.props.withDrop) {
            this.props.onDocumentClick();
            this.handleCancel();
        }
    };

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
            const currentMonth: number =
                this.props.datePicker && this.props.datePicker.appliedLowerLimit
                    ? this.props.datePicker.appliedLowerLimit.getMonth()
                    : DateUtils.currentMonth;
            const years: string[] = this.props.years || DEFAULT_YEARS;
            const currentYear: number =
                this.props.datePicker && this.props.datePicker.appliedLowerLimit
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

    private getLimitAndDiffInMinutes(range: IRangeLimit): {limit: number; diff: number} {
        const limit: number = DateUtils.convertRangeToMinutes(range);
        const diff: number = moment(this.props.datePicker.inputUpperLimit).diff(
            moment(this.props.datePicker.inputLowerLimit),
            'minutes',
        );
        return {limit, diff};
    }

    private hasNotReachTheMinimalRangeLimit(): boolean {
        if (this.props.datePicker?.minimalRangeLimit) {
            const {limit, diff} = this.getLimitAndDiffInMinutes(this.props.datePicker.minimalRangeLimit);
            return Math.abs(diff) < limit;
        }
        return false;
    }

    private hasExceededRangeLimit(): boolean {
        if (this.props.datePicker?.rangeLimit) {
            const {limit, diff} = this.getLimitAndDiffInMinutes(this.props.datePicker.rangeLimit);
            return diff > limit;
        }

        return false;
    }

    private getApplyButtonTooltip(hasExceededRangeLimit: boolean, hasNotReachTheMinimalRangeLimit: boolean): string {
        if (hasExceededRangeLimit) {
            return this.props.datePicker.rangeLimit.message;
        }

        if (hasNotReachTheMinimalRangeLimit) {
            return this.props.datePicker.minimalRangeLimit.message;
        }

        return '';
    }

    private getDatePickerBox(): JSX.Element {
        if (this.props.isOpened || this.props.renderDatePickerWhenClosed) {
            const hasExceededRangeLimit = this.hasExceededRangeLimit();
            const hasNotReachTheMinimalRangeLimit = this.hasNotReachTheMinimalRangeLimit();
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
                withoutBoxResize: true,
                onClear: () => this.handleClear(),
                footer: (
                    <ModalFooter classes={['mod-small']}>
                        <Button
                            enabled
                            name={this.props.cancelLabel}
                            small
                            primary={false}
                            onClick={() => this.handleCancel()}
                        />
                        <Button
                            enabled={!hasExceededRangeLimit && !hasNotReachTheMinimalRangeLimit}
                            name={this.props.applyLabel}
                            small={true}
                            primary={true}
                            tooltip={this.getApplyButtonTooltip(hasExceededRangeLimit, hasNotReachTheMinimalRangeLimit)}
                            tooltipPlacement={TooltipPlacement.Left}
                            onClick={() => this.handleApply()}
                        />
                    </ModalFooter>
                ),
            };

            return this.props.withReduxState ? (
                <DatePickerBox withReduxState id={this.props.id} {...datePickerBoxProps} />
            ) : (
                <DatePickerBox {...datePickerBoxProps} />
            );
        }
    }
}
