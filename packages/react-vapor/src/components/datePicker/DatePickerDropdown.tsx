import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import moment from 'moment';
import React, {useEffect, useRef, FunctionComponent} from 'react';

import {TooltipPlacement} from '../../utils';
import {DateUtils} from '../../utils/DateUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Button} from '../button/Button';
import {DEFAULT_YEARS, ICalendarSelectionRule} from '../calendar/Calendar';
import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop, IDropOwnProps} from '../drop/Drop';
import {ModalFooter} from '../modal/ModalFooter';
import {Svg} from '../svg';
import {DatePickerBox, IDatePickerBoxChildrenProps, IDatePickerBoxProps, IDatesSelectionBox} from './DatePickerBox';
import {DatePickerDateRange} from './DatePickerConstants';
import {IDatePickerState} from './DatePickerReducers';
import {IRangeLimit} from './DatesSelection';

export interface IDatePickerDropdownOwnProps {
    label?: string;
    className?: string;
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
    dropOptions?: Partial<IDropOwnProps>;
    withDrop?: boolean;
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

export interface IDatePickerDropdownProps
    extends IDatePickerDropdownOwnProps,
        IDatePickerDropdownStateProps,
        IDatePickerDropdownDispatchProps,
        IDatePickerDropdownChildrenProps {}

export const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string = 'Select date';
export const DEFAULT_APPLY_DATE_LABEL: string = 'Apply';
export const DEFAULT_CANCEL_DATE_LABEL: string = 'Cancel';
export const DEFAULT_TO_LABEL: string = 'to';
export const DEFAULT_EXTRA_DROPDOWN_CLASSES: string[] = [];
export const DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES: string[] = [];
export const DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED: boolean = true;
export const DEFAULT_INITIALY_UNSELECTED: boolean = false;

export const DatePickerDropdown: FunctionComponent<IDatePickerDropdownProps> = ({
    label = DEFAULT_DATE_PICKER_DROPDOWN_LABEL,
    applyLabel = DEFAULT_APPLY_DATE_LABEL,
    cancelLabel = DEFAULT_CANCEL_DATE_LABEL,
    toLabel = DEFAULT_TO_LABEL,
    extraDropdownClasses = DEFAULT_EXTRA_DROPDOWN_CLASSES,
    extraDropdownToggleClasses = DEFAULT_EXTRA_DROPDOWN_TOGGLE_CLASSES,
    renderDatePickerWhenClosed = DEFAULT_RENDER_DATEPICKER_WHEN_CLOSED,
    isClearable = false,
    withDrop = false,
    ...props
}) => {
    const dropdownRef = useRef<HTMLDivElement>();

    const handleOutsideClick = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            props.onDocumentClick();
            handleCancel();
        }
    };

    useEffect(() => {
        props.onRender?.();

        if (props.onDocumentClick && !props.readonly) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            if (props.onDocumentClick && !props.readonly) {
                document.removeEventListener('click', handleOutsideClick);
            }

            props.onDestroy?.();
        };
    }, []);

    const handleClick = () => {
        if (!props.readonly) {
            props.onClick?.(props.datePicker);
        }
    };

    const handleApply = () => {
        props.onBeforeApply?.();
        props.onApply?.();
    };

    const handleCancel = () => {
        if (props.onCancel) {
            const currentMonth: number =
                props.datePicker && props.datePicker.appliedLowerLimit
                    ? props.datePicker.appliedLowerLimit.getMonth()
                    : DateUtils.currentMonth;

            const y: string[] = props.years || DEFAULT_YEARS;

            const currentYear: number =
                props.datePicker && props.datePicker.appliedLowerLimit
                    ? props.datePicker.appliedLowerLimit.getFullYear()
                    : DateUtils.currentYear;

            props.onCancel(currentMonth, y.indexOf(currentYear.toString()), props.isOpened);
        }
    };

    const handleClear = () => {
        props.onClear?.();
    };

    const formatDate = (date: Date): string =>
        props.datesSelectionBoxes.length && props.datesSelectionBoxes[0].withTime
            ? DateUtils.getDateWithTimeString(date)
            : DateUtils.getSimpleDate(date);

    const getLimitAndDiffInMinutes = (range: IRangeLimit): {limit: number; diff: number} => {
        const limit = DateUtils.convertRangeToMinutes(range);
        const diff = moment(props.datePicker.inputUpperLimit).diff(moment(props.datePicker.inputLowerLimit), 'minutes');
        return {limit, diff};
    };

    const hasNotReachTheMinimalRangeLimit = (): boolean => {
        if (props.datePicker?.minimalRangeLimit) {
            const {limit, diff} = getLimitAndDiffInMinutes(props.datePicker.minimalRangeLimit);
            return Math.abs(diff) < limit;
        }
        return false;
    };

    const hasExceededRangeLimit = (): boolean => {
        if (props.datePicker?.rangeLimit) {
            const {limit, diff} = getLimitAndDiffInMinutes(props.datePicker.rangeLimit);
            return diff > limit;
        }

        return false;
    };

    const getApplyButtonTooltip = (isRangeLimitExceeded: boolean, isMinimalRangeLimitReached: boolean): string => {
        if (isRangeLimitExceeded) {
            return props.datePicker.rangeLimit.message;
        }

        if (isMinimalRangeLimitReached) {
            return props.datePicker.minimalRangeLimit.message;
        }

        return '';
    };

    const getDatePickerBox = (): JSX.Element => {
        if (props.isOpened || renderDatePickerWhenClosed) {
            const isRangeLimitExceeded = hasExceededRangeLimit();
            const isMinimalRangeLimitReached = hasNotReachTheMinimalRangeLimit();
            const datePickerBoxProps: IDatePickerBoxProps = {
                setToNowTooltip: props.setToNowTooltip,
                datesSelectionBoxes: props.datesSelectionBoxes,
                months: props.months,
                startingMonth: props.startingMonth,
                years: props.years,
                startingYear: props.startingYear,
                days: props.days,
                startingDay: props.startingDay,
                selectionRules: props.selectionRules,
                lowerLimitPlaceholder: props.lowerLimitPlaceholder,
                upperLimitPlaceholder: props.upperLimitPlaceholder,
                isLinkedToDateRange: props.isLinkedToDateRange,
                isClearable,
                initiallyUnselected: props.initiallyUnselected,
                clearLabel: props.clearLabel,
                simple: props.simple,
                initialDateRange: props.initialDateRange,
                withoutBoxResize: true,
                onClear: () => handleClear(),
                footer: (
                    <ModalFooter classes={['mod-small']}>
                        <Button
                            enabled={!isRangeLimitExceeded && !isMinimalRangeLimitReached}
                            name={applyLabel}
                            small={true}
                            primary={true}
                            tooltip={getApplyButtonTooltip(isRangeLimitExceeded, isMinimalRangeLimitReached)}
                            tooltipPlacement={TooltipPlacement.Left}
                            onClick={handleApply}
                        />
                        <Button enabled={true} name={cancelLabel} small={true} primary={true} onClick={handleCancel} />
                    </ModalFooter>
                ),
            };

            return (
                <DatePickerBox
                    {...(props.withReduxState && {withReduxState: true, id: props.id})}
                    {...datePickerBoxProps}
                />
            );
        }
    };

    let dropdownLabel = label;
    let dropdownToLabel: JSX.Element = null;
    let labelSecondPart = '';

    if (props.datePicker && props.datePicker.appliedLowerLimit) {
        dropdownLabel = formatDate(props.datePicker.appliedLowerLimit);
        if (props.datePicker.isRange) {
            const formattedUpper = formatDate(props.datePicker.appliedUpperLimit);
            if (formattedUpper !== dropdownLabel) {
                dropdownToLabel = <span className={classNames('mx1', {disabled: props.readonly})}>{toLabel}</span>;
                labelSecondPart = formattedUpper;
            }
        }
    }

    const dropdownClasses = classNames(extraDropdownClasses, 'dropdown-wrapper dropdown', {
        open: props.isOpened,
    });

    const menuClasses = classNames('dropdown-menu normal-height', {
        'on-right': props.onRight,
    });

    const toggleClasses = classNames('dropdown-toggle btn inline-flex flex-center', extraDropdownToggleClasses, {
        'dropdown-toggle-placeholder': !props.datePicker || !props.datePicker.appliedLowerLimit,
    });

    if (withDrop) {
        return (
            <Drop
                id={props.id}
                positions={[DropPodPosition.bottom, DropPodPosition.top]}
                buttonContainerProps={{className: 'inline-block'}}
                renderOpenButton={(onClick: () => void) => (
                    <div className={classNames('date-picker-dropdown', props.className)} ref={dropdownRef}>
                        <div className={dropdownClasses}>
                            <button
                                className={toggleClasses}
                                onClick={() => {
                                    handleClick();
                                    onClick();
                                }}
                                disabled={props.readonly}
                            >
                                <span className="dropdown-selected-value">
                                    <label>
                                        {dropdownLabel}
                                        {dropdownToLabel}
                                        {labelSecondPart}
                                    </label>
                                </span>
                                <Svg
                                    svgName={props.isOpened ? VaporSVG.svg.chartUp.name : VaporSVG.svg.chartDown.name}
                                    svgClass="icon dropdown-toggle-arrow-style"
                                />
                            </button>
                        </div>
                    </div>
                )}
                closeOnClickDrop={false}
                {...props.dropOptions}
            >
                {getDatePickerBox()}
            </Drop>
        );
    }

    return (
        <div className={classNames('date-picker-dropdown', props.className)}>
            <div className={dropdownClasses} ref={dropdownRef}>
                <button className={toggleClasses} onClick={handleClick} disabled={props.readonly}>
                    <span className="dropdown-selected-value">
                        <label>
                            {dropdownLabel}
                            {dropdownToLabel}
                            {labelSecondPart}
                        </label>
                    </span>
                    <Svg
                        svgName={props.isOpened ? VaporSVG.svg.chartUp.name : VaporSVG.svg.chartDown.name}
                        svgClass="icon dropdown-toggle-arrow-style"
                    />
                </button>
                <div className={menuClasses}>{getDatePickerBox()}</div>
            </div>
        </div>
    );
};
