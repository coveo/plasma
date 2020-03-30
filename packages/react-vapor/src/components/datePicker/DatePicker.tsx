import $ from 'jquery';
import * as React from 'react';
import {DateUtils} from '../../utils/DateUtils';
import {CalendarDay} from '../calendar/CalendarDay';
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

export class DatePicker extends React.Component<IDatePickerProps, any> {
    static defaultProps: Partial<IDatePickerProps> = {
        color: DEFAULT_DATE_PICKER_COLOR,
    };

    private dateInput: HTMLInputElement;
    private isPicked: boolean;

    private getDateFromString(dateValue: string): Date {
        return this.props.withTime
            ? DateUtils.getDateFromTimeString(dateValue)
            : DateUtils.getDateFromSimpleDateString(dateValue);
    }

    private getStringFromDate(date: Date): string {
        return this.props.withTime ? DateUtils.getDateWithTimeString(date) : DateUtils.getSimpleDate(date);
    }

    private setToToday() {
        const date = new Date();
        this.dateInput.value = this.getStringFromDate(date);
        this.handleChangeDate();
    }

    private handleChangeDate() {
        const date: Date = this.getDateFromString(this.dateInput.value);

        if (date.getDate()) {
            this.props.onBlur(date, this.props.upperLimit);
        }
    }

    handleDocumentClick = (e: MouseEvent) => {
        const target = $(e.target);
        if (
            this.isPicked &&
            !target.closest('.date-picker').length &&
            !target.closest(`.${CalendarDay.DEFAULT_DATE_CLASS}`).length &&
            !target.closest('.date-picker-dropdown').length
        ) {
            this.handleChangeDate();
        }
    };

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick);
    }

    componentWillReceiveProps(nextProps: IDatePickerProps) {
        if (nextProps.date) {
            const dateValue: string = this.getStringFromDate(nextProps.date);

            if (this.dateInput.value !== dateValue) {
                this.dateInput.value = dateValue;
            }
        } else {
            this.dateInput.value = '';
        }
        this.isPicked =
            (nextProps.isSelecting === DateLimits.upper && nextProps.upperLimit) ||
            (nextProps.isSelecting === DateLimits.lower && !nextProps.upperLimit);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    render() {
        const nowButton: JSX.Element = this.props.hasSetToNowButton ? (
            <SetToNowButton onClick={() => this.setToToday()} tooltip={this.props.setToNowTooltip} />
        ) : null;

        const inputClasses: string[] = [`border-${this.props.color}`];
        if (this.isPicked) {
            inputClasses.push('picking-date');
        } else if (this.dateInput && this.dateInput.value) {
            inputClasses.push('date-picked', `bg-${this.props.color}`);
        }

        return (
            <div className="date-picker flex">
                <input
                    className={inputClasses.join(' ')}
                    ref={(dateInput: HTMLInputElement) => (this.dateInput = dateInput)}
                    onBlur={() => this.handleChangeDate()}
                    onClick={() => this.props.onClick(this.props.upperLimit)}
                    placeholder={this.props.placeholder}
                    required
                />
                {nowButton}
            </div>
        );
    }
}
