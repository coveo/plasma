import classNames from 'classnames';
import React, {useEffect, FunctionComponent} from 'react';
import {DATES_SEPARATOR, DateUtils} from '../../utils/DateUtils';
import {DatePicker, IDatePickerProps} from './DatePicker';
import {DatePickerDateRange} from './DatePickerConstants';

export interface IRangeLimit {
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    message?: string;
}

export interface IDatesSelectionOwnProps {
    id?: string;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    isRange?: boolean;
    isClearable?: boolean;
    rangeLimit?: IRangeLimit;
    minimalRangeLimit?: IRangeLimit;
    color?: string;
    calendarId?: string;
    defaultLowerLimit?: Date;
    defaultUpperLimit?: Date;
    lowerLimitPlaceholder?: string;
    upperLimitPlaceholder?: string;
    initiallyUnselected?: boolean;
    initialDateRange?: DatePickerDateRange;
}

export interface IDatesSelectionStateProps {
    lowerLimit?: Date;
    upperLimit?: Date;
    inputLowerLimit?: Date;
    inputUpperLimit?: Date;
    quickOption?: string;
    isSelecting?: string;
}

export interface IDatesSelectionDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: (isUpperLimit: boolean) => void;
    onBlur?: (date: Date, isUpperLimit: boolean, datePicker?: boolean) => void;
}

export interface IDatesSelectionChildrenProps {
    setToNowTooltip?: string;
}

export interface IDatesSelectionProps
    extends IDatesSelectionOwnProps,
        IDatesSelectionStateProps,
        IDatesSelectionDispatchProps,
        IDatesSelectionChildrenProps {}

export const LOWER_LIMIT_PLACEHOLDER: string = 'Select a start date';
export const UPPER_LIMIT_PLACEHOLDER: string = 'Select an end date';

export const DatesSelection: FunctionComponent<IDatesSelectionProps> = ({
    lowerLimitPlaceholder = LOWER_LIMIT_PLACEHOLDER,
    upperLimitPlaceholder = UPPER_LIMIT_PLACEHOLDER,
    quickOption = '',
    isSelecting = '',
    ...props
}) => {
    const onDateChange = (date: Date, isUpperLimit: boolean, datePicker?: boolean) => {
        if (props.onBlur) {
            props.onBlur(date, isUpperLimit, datePicker);
        }
    };

    const onDateClick = (isUpperLimit: boolean) => {
        if (props.onClick) {
            props.onClick(isUpperLimit);
        }
    };

    useEffect(() => {
        if (props.onRender) {
            props.onRender();
        }
        return () => {
            if (props.onDestroy) {
                props.onDestroy();
            }
        };
    }, []);

    useEffect(() => {
        const dates: string[] = quickOption.split(DATES_SEPARATOR);

        // new Date('' || undefined || null) throws Invalid Date
        onDateChange(dates[0] ? new Date(dates[0]) : new Date(), false, true);

        if (dates.length > 1) {
            onDateChange(new Date(dates[1]), true, true);
        }
    }, [quickOption]);

    const handleOnBlur = (date: Date, isUpperLimit: boolean = false) => {
        const formattedLowerLimit: string = DateUtils.getDateWithTimeString(props.inputLowerLimit);
        const formattedUpperLimit: string = DateUtils.getDateWithTimeString(props.inputUpperLimit);
        const formattedInputDate: string = DateUtils.getDateWithTimeString(date);

        if (
            (!isUpperLimit && formattedLowerLimit !== formattedInputDate) ||
            (isUpperLimit && formattedUpperLimit !== formattedInputDate)
        ) {
            onDateChange(date, isUpperLimit);
        }
    };

    // render start
    const isSmallSplit = props.isRange && !props.hasSetToNowButton;
    const isLarge = props.withTime || (props.isRange && props.hasSetToNowButton);
    const wrapperClasses: string = !isSmallSplit || isLarge ? '' : 'mod-inline flex';

    const datePickerProps: IDatePickerProps = {
        withTime: props.withTime,
        hasSetToNowButton: props.hasSetToNowButton,
        setToNowTooltip: props.setToNowTooltip,
        isSelecting: isSelecting,
        onClick: (isUpperLimit: boolean) => onDateClick(isUpperLimit),
        onBlur: (date: Date, isUpperLimit: boolean) => handleOnBlur(date, isUpperLimit),
        placeholder: '',
    };

    const endDatePickerProps = {...datePickerProps, minimalRangeLimit: props.minimalRangeLimit};

    const separator: JSX.Element = props.isRange ? (
        <span className={classNames('date-separator', {'mod-vertical': isLarge})}>
            <span>-</span>
        </span>
    ) : null;

    // console.log('props.upperLimit', props.upperLimit);

    const toDate: JSX.Element = props.isRange ? (
        <DatePicker upperLimit date={props.upperLimit} {...endDatePickerProps} placeholder={upperLimitPlaceholder} />
    ) : null;

    return (
        <div className={wrapperClasses}>
            <DatePicker date={props.lowerLimit} {...datePickerProps} placeholder={lowerLimitPlaceholder} />
            {separator}
            {toDate}
        </div>
    );
    // render end
};
