import { SetToNowButton } from './SetToNowButton';
import { DateUtils } from '../../utils/DateUtils';
import { DateLimits } from './DatePickerActions';
import * as React from 'react';

export interface IDatePickerProps extends React.ClassAttributes<DatePicker> {
  onChange: (date: Date, isUpperLimit: boolean) => void;
  onBlur: () => void;
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

  private getDateFromString(dateValue: string): Date {
    return this.props.withTime
      ? DateUtils.getDateFromTimeString(dateValue)
      : DateUtils.getDateFromSimpleDateString(dateValue);
  }

  private getStringFromDate(date: Date): string {
    return this.props.withTime
      ? DateUtils.getDateWithTimeString(date)
      : DateUtils.getSimpleDate(date);
  }

  private setToToday() {
    const date = new Date();
    this.dateInput.value = this.getStringFromDate(date);
    this.handleChange();
  }

  private handleChange() {
    const date: Date = this.getDateFromString(this.dateInput.value);

    if (date.getDate()) {
      this.props.onChange(date, this.props.upperLimit);
    }
  }

  private handleBlur() {
    this.handleChange();
    this.props.onBlur();
  }

  componentWillReceiveProps(nextProps: IDatePickerProps) {
    const dateValue: string = this.getStringFromDate(nextProps.date);

    if (nextProps.date && this.dateInput.value !== dateValue) {
      this.dateInput.value = dateValue;
    }
  }

  render() {
    const nowButton: JSX.Element = this.props.hasSetToNowButton
      ? <SetToNowButton onClick={() => this.setToToday()} tooltip={this.props.setToNowTooltip} />
      : null;


    const inputClasses: string[] = [`border-${this.props.color}`];
    if (this.props.isSelecting === DateLimits.upper && this.props.upperLimit
      || this.props.isSelecting === DateLimits.lower && !this.props.upperLimit) {
      inputClasses.push('picking-date');
    } else if (this.dateInput && this.dateInput.value) {
      inputClasses.push('date-picked', `bg-${this.props.color}`);
    }

    return (
      <div className='date-picker flex'>
        <input
          className={inputClasses.join(' ')}
          ref={(dateInput: HTMLInputElement) => this.dateInput = dateInput}
          onChange={() => this.handleChange()}
          onClick={() => this.props.onClick(this.props.upperLimit)}
          onBlur={() => this.handleBlur()}
          placeholder={this.props.placeholder}
          required
        />
        {nowButton}
      </div>
    );
  }
}
