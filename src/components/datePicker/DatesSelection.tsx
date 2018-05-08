import * as React from 'react';
import {DATES_SEPARATOR, DateUtils} from '../../utils/DateUtils';
import {DatePicker, IDatePickerProps} from './DatePicker';

export interface IRangeLimit {
    weeks?: number;
    days?: number;
    hours?: number;
    message?: string;
}

export interface IDatesSelectionOwnProps extends React.ClassAttributes<DatesSelection> {
    id?: string;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    isRange?: boolean;
    isClearable?: boolean;
    rangeLimit?: IRangeLimit;
    color?: string;
    calendarId?: string;
    defaultLowerLimit?: Date;
    defaultUpperLimit?: Date;
    lowerLimitPlaceholder?: string;
    upperLimitPlaceholder?: string;
    initiallyUnselected?: boolean;
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

export interface IDatesSelectionProps extends IDatesSelectionOwnProps, IDatesSelectionStateProps,
    IDatesSelectionDispatchProps, IDatesSelectionChildrenProps {}

export const LOWER_LIMIT_PLACEHOLDER: string = 'Select a start date';
export const UPPER_LIMIT_PLACEHOLDER: string = 'Select an end date';

export class DatesSelection extends React.Component<IDatesSelectionProps, any> {
    static defaultProps: Partial<IDatesSelectionProps> = {
        lowerLimitPlaceholder: LOWER_LIMIT_PLACEHOLDER,
        upperLimitPlaceholder: UPPER_LIMIT_PLACEHOLDER,
        quickOption: '',
        isSelecting: '',
    };

    private onDateChange(date: Date, isUpperLimit: boolean, datePicker?: boolean) {
        if (this.props.onBlur) {
            this.props.onBlur(date, isUpperLimit, datePicker);
        }
    }

    private onDateClick(isUpperLimit: boolean) {
        if (this.props.onClick) {
            this.props.onClick(isUpperLimit);
        }
    }

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    componentWillReceiveProps(nextProps: IDatesSelectionProps) {
        if (nextProps.quickOption && nextProps.quickOption !== this.props.quickOption) {
            const dates: string[] = nextProps.quickOption.split(DATES_SEPARATOR);

            this.onDateChange(new Date(dates[0]), false, true);

            if (dates.length > 1) {
                this.onDateChange(new Date(dates[1]), true, true);
            }
        }
    }

    private handleOnBlur(date: Date, isUpperLimit: boolean = false) {
        const formattedLowerLimit: string = DateUtils.getDateWithTimeString(this.props.inputLowerLimit);
        const formattedUpperLimit: string = DateUtils.getDateWithTimeString(this.props.inputUpperLimit);
        const formattedInputDate: string = DateUtils.getDateWithTimeString(date);

        if ((!isUpperLimit && formattedLowerLimit !== formattedInputDate) || (isUpperLimit && formattedUpperLimit !== formattedInputDate)) {
            this.onDateChange(date, isUpperLimit);
        }
    }

    render() {
        const isSmallSplit = this.props.isRange && !this.props.hasSetToNowButton;
        const isLarge = this.props.withTime || (this.props.isRange && this.props.hasSetToNowButton);
        const wrapperClasses: string = !isSmallSplit || isLarge ? '' : 'mod-inline flex';
        const datePickerProps: IDatePickerProps = {
            withTime: this.props.withTime,
            hasSetToNowButton: this.props.hasSetToNowButton,
            setToNowTooltip: this.props.setToNowTooltip,
            isSelecting: this.props.isSelecting,
            onClick: (isUpperLimit: boolean) => this.onDateClick(isUpperLimit),
            onBlur: (date: Date, isUpperLimit: boolean) => this.handleOnBlur(date, isUpperLimit),
            placeholder: '',
        };
        const separatorClasses: string[] = ['date-separator'];
        if (isLarge) {
            separatorClasses.push('mod-vertical');
        }
        const separator: JSX.Element = this.props.isRange
            ? <span className={separatorClasses.join(' ')}>
                <span>-</span>
            </span>
            : null;
        const toDate: JSX.Element = this.props.isRange
            ? <DatePicker
                upperLimit
                date={this.props.upperLimit}
                {...datePickerProps}
                placeholder={this.props.upperLimitPlaceholder} />
            : null;

        return (
            <div className={wrapperClasses}>
                <DatePicker date={this.props.lowerLimit} {...datePickerProps} placeholder={this.props.lowerLimitPlaceholder} />
                {separator}
                {toDate}
            </div>
        );
    }
}
