import { SetToNowButton } from './SetToNowButton';
import { DateUtils } from '../../utils/DateUtils';
import * as React from 'react';
import { DateLimits } from './DatePickerActions';

export interface IDatePickerProps extends React.ClassAttributes<DatePicker> {
  withTime?: boolean;
  hasSetToNowButton?: boolean;
  upperLimit?: boolean;
  onChange: (date: Date, isUpperLimit: boolean) => void;
  date?: Date;
  setToNowTooltip?: string;
  isSelecting?: string;
  color?: string;
  onClick?: (isUpperLimit: boolean) => void;
}

export const DEFAULT_DATE_PICKER_COLOR: string = 'blue';

export class DatePicker extends React.Component<IDatePickerProps, any> {
  private dateInput: HTMLInputElement;

  private setToToday() {
    let date = new Date();
    this.dateInput.value = this.props.withTime
      ? DateUtils.getDateWithTimeString(date)
      : DateUtils.getSimpleDate(date);
    this.handleChange();
  }

  private handleChange() {
    if (this.props.onChange) {
      let dateValue: string = this.dateInput.value;
      let date: Date = this.props.withTime ? new Date(dateValue) : DateUtils.getDateFromSimpleDateString(dateValue);

      if (date.getDate()) {
        this.props.onChange(date, this.props.upperLimit);
      }
    }
  }

  componentWillReceiveProps(nextProps: IDatePickerProps) {
    if (nextProps.date && nextProps.date !== this.props.date) {
      let dateValue: string = this.props.withTime
        ? DateUtils.getDateWithTimeString(nextProps.date)
        : DateUtils.getSimpleDate(nextProps.date);

      if (new Date(this.dateInput.value) !== new Date(dateValue)) {
        this.dateInput.value = dateValue;
      }
    }
  }

  render() {
    let color: string = this.props.color || DEFAULT_DATE_PICKER_COLOR;
    let nowButton: JSX.Element = this.props.hasSetToNowButton
      ? <SetToNowButton onClick={() => this.setToToday()} tooltip={this.props.setToNowTooltip} />
      : null;

    let inputClasses: string[] = [`border-${color}`];
    if (this.props.isSelecting === DateLimits.upper && this.props.upperLimit
      || this.props.isSelecting === DateLimits.lower && !this.props.upperLimit) {
      inputClasses.push('picking-date');
    } else if (this.dateInput && this.dateInput.value) {
      inputClasses.push('date-picked');
      inputClasses.push(`bg-${color}`);
    }

    return (
      <div className='date-picker flex'>
        <input
          className={inputClasses.join(' ')}
          ref={(dateInput: HTMLInputElement) => this.dateInput = dateInput}
          onChange={() => this.handleChange()}
          onClick={() => this.props.onClick(this.props.upperLimit)}
          />
        {nowButton}
      </div>
    );
  }
}
