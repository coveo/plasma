import moment from 'moment';
import classNames from 'classnames';
import * as React from 'react';

import {DateUtils} from '../../utils/DateUtils';
import {DateLimits} from './DatePickerActions';
import {DEFAULT_DATE_PICKER_COLOR} from './DatePickerConstants';
import {IRangeLimit} from './DatesSelection';
import {SetToNowButton} from './SetToNowButton';

export interface IDatePickerProps extends React.ClassAttributes<DatePicker> {
    onBlur: (date: Date, isUpperLimit: boolean) => void;
    onClick: (isUpperLimit: boolean) => void;
    placeholder: string;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    upperLimit?: boolean;
    minimalRangeLimit?: IRangeLimit;
    date?: Date;
    setToNowTooltip?: string;
    isSelecting?: string;
    color?: string;
}

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
        this.dateInput.value = this.props.minimalRangeLimit
            ? this.getStringFromDate(this.updateDateBasedOnMinimalLimit(date))
            : this.getStringFromDate(date);
        this.handleChangeDate();
    };

    private updateDateBasedOnMinimalLimit = (date: Date) => {
        const minimalLimitInMinutes: number = DateUtils.convertRangeToMinutes(this.props.minimalRangeLimit);
        const diff = moment().diff(moment(date), 'minutes');
        if (Math.abs(diff) < minimalLimitInMinutes) {
            return moment(date).add(minimalLimitInMinutes, 'minutes').toDate();
        }

        return date;
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

    componentDidUpdate(prevProps: IDatePickerProps) {
        if (this.props.date) {
            const dateValue: string = this.getStringFromDate(this.props.date);

            if (this.dateInput.value !== dateValue) {
                this.dateInput.value = dateValue;
            }
        } else {
            this.dateInput.value = '';
        }
        const isSelected =
            (this.props.isSelecting === DateLimits.upper && this.props.upperLimit) ||
            (this.props.isSelecting === DateLimits.lower && !this.props.upperLimit);
        this.setState({isSelected});
    }

    render() {
        const nowButton: JSX.Element = this.props.hasSetToNowButton ? (
            <SetToNowButton onClick={this.setToToday} tooltip={this.props.setToNowTooltip} />
        ) : null;

        const inputClasses = classNames({
            'picking-date': this.state.isSelected,
            'date-picked': !this.state.isSelected && !!this.props.date,
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
