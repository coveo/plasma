import classNames from 'classnames';
import * as React from 'react';
import {DateUtils} from '../../utils/DateUtils';
import {DateLimits} from './DatePickerActions';
import {SetToNowButton} from './SetToNowButton';

export interface IDatePickerProps extends React.ClassAttributes<DatePicker> {
    onBlur: (date: Date, isUpperLimit: boolean) => void;
    onClick: (isUpperLimit: boolean) => void;
    placeholder: string;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    upperLimit?: boolean;
    date?: Date;
    setToNowTooltip?: string;
    isSelecting?: string;
    color?: string;
}

export const DatePickerColors = {
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    red: 'red',
    orange: 'orange',
};

export const DEFAULT_DATE_PICKER_COLOR: string = DatePickerColors.blue;

export class DatePicker extends React.PureComponent<IDatePickerProps, {isSelected: boolean}> {
    static defaultProps: Partial<IDatePickerProps> = {
        color: DEFAULT_DATE_PICKER_COLOR,
    };

    private dateInput: HTMLInputElement;
    state = {isSelected: false};

    private getDateFromString(dateValue: string): Date {
        return this.props.withTime
            ? DateUtils.getDateFromTimeString(dateValue)
            : DateUtils.getDateFromSimpleDateString(dateValue);
    }

    private getStringFromDate(date: Date): string {
        return this.props.withTime ? DateUtils.getDateWithTimeString(date) : DateUtils.getSimpleDate(date);
    }

    private setToToday = () => {
        const date = new Date();
        this.dateInput.value = this.getStringFromDate(date);
        this.handleChangeDate();
    };

    private handleChangeDate = () => {
        const date: Date = this.getDateFromString(this.dateInput.value);

        if (date.getDate()) {
            this.props.onBlur(date, this.props.upperLimit);
        }
    };

    private handleClick = () => {
        this.props.onClick(this.props.upperLimit);
    };

    componentWillReceiveProps(nextProps: IDatePickerProps) {
        if (nextProps.date) {
            const dateValue: string = this.getStringFromDate(nextProps.date);

            if (this.dateInput.value !== dateValue) {
                this.dateInput.value = dateValue;
            }
        } else {
            this.dateInput.value = '';
        }
        const isSelected =
            (nextProps.isSelecting === DateLimits.upper && nextProps.upperLimit) ||
            (nextProps.isSelecting === DateLimits.lower && !nextProps.upperLimit);
        this.setState({isSelected});
    }

    render() {
        const nowButton: JSX.Element = this.props.hasSetToNowButton ? (
            <SetToNowButton onClick={this.setToToday} tooltip={this.props.setToNowTooltip} />
        ) : null;

        const inputClasses = classNames(`border-${this.props.color}`, {
            'picking-date': this.state.isSelected,
            'date-picked': !this.state.isSelected && this.dateInput?.value,
            [`bg-${this.props.color}`]: !this.state.isSelected && this.dateInput?.value,
        });

        return (
            <div className="date-picker flex">
                <input
                    className={inputClasses}
                    ref={(dateInput: HTMLInputElement) => (this.dateInput = dateInput)}
                    onBlur={this.handleChangeDate}
                    onFocus={this.handleClick}
                    placeholder={this.props.placeholder}
                    required
                />
                {nowButton}
            </div>
        );
    }
}
