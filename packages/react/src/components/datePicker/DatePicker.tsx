import moment from 'moment';
import classNames from 'clsx';
import {ClassAttributes, PureComponent} from 'react';

import {DateUtils} from '../../utils/DateUtils';
import {DateLimits} from './DatePickerActions';
import {DEFAULT_DATE_PICKER_COLOR} from './DatePickerConstants';
import {IRangeLimit} from './DatesSelection';
import {ISetToNowProps, SetToNowButton} from './SetToNowButton';
import {CalendarSelectionRuleType, ICalendarSelectionRule} from '../calendar';

export interface IDatePickerProps extends ClassAttributes<DatePicker> {
    onBlur: (date: Date, isUpperLimit: boolean) => void;
    onClick: (isUpperLimit: boolean) => void;
    placeholder: string;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    upperLimit?: boolean;
    minimalRangeLimit?: IRangeLimit;
    date?: Date;
    /**
     * The text displayed when hovering over the set to now button
     *
     * @default "Set to now"
     */
    setToNowTooltip?: ISetToNowProps['tooltip'];
    isSelecting?: string;
    color?: string;
    selectionRules?: ICalendarSelectionRule[];
}

/**
 * @deprecated Use Mantine DatePicker instead
 */
export class DatePicker extends PureComponent<IDatePickerProps, {isSelected: boolean; isDatePermitted: boolean}> {
    static defaultProps: Partial<IDatePickerProps> = {
        color: DEFAULT_DATE_PICKER_COLOR,
    };

    private dateInput: HTMLInputElement;
    state = {isSelected: false, isDatePermitted: true};

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
        if (!moment(this.dateInput.value).isValid()) {
            return;
        }

        if (this.dateInput.value !== '') {
            const date: Date = this.getDateFromString(this.dateInput.value);
            // setting isDatePermitted as let and in component state, since setState is async and triggers rerender of component
            // and we need the value immediately to decide whether to to call props.onBlur
            let isDatePermitted = true;

            this.props.selectionRules
                ?.filter(
                    (rule: ICalendarSelectionRule) =>
                        (rule.isFor === CalendarSelectionRuleType.all && this.props.isSelecting === DateLimits.lower) ||
                        (rule.isFor === CalendarSelectionRuleType.all && this.props.isSelecting === DateLimits.upper)
                )
                .forEach((rule: ICalendarSelectionRule) => {
                    isDatePermitted = rule.test(date);
                });

            this.setState({isDatePermitted}, () => {
                if (isDatePermitted && date.getDate()) {
                    this.props.onBlur(date, this.props.upperLimit);
                }
            });
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

        // Setting invalid state in componentDidUpdate triggers props.onBlur which causes infinie loop.
        // Wrapping setState in condition to check the date is within the allowed range fixes this.
        if (this.state.isDatePermitted) {
            this.setState({isSelected});
        }
    }

    render() {
        const nowButton: JSX.Element = this.props.hasSetToNowButton ? (
            <SetToNowButton onClick={this.setToToday} tooltip={this.props.setToNowTooltip} />
        ) : null;

        const inputClasses = classNames({
            'picking-date': this.state.isSelected,
            'date-picked': !this.state.isSelected && !!this.props.date,
            invalid: !this.state.isDatePermitted,
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
