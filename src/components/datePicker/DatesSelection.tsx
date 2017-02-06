import { DatePicker, IDatePickerProps } from './DatePicker';
import { DATES_SEPARATOR } from '../../utils/DateUtils';
import * as React from 'react';

export interface IDatesSelectionOwnProps extends React.ClassAttributes<DatesSelection> {
  id?: string;
  withTime?: boolean;
  hasSetToNowButton?: boolean;
  isRange?: boolean;
  color?: string;
  calendarId?: string;
}

export interface IDatesSelectionStateProps {
  lowerLimit?: Date;
  upperLimit?: Date;
  quickOption?: string;
  isSelecting?: string;
}

export interface IDatesSelectionDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onChange?: (date: Date, isUpperLimit: boolean, datePicker?: boolean) => void;
  onClick?: (isUpperLimit: boolean) => void;
}

export interface IDatesSelectionChildrenProps {
  setToNowTooltip?: string;
}

export interface IDatesSelectionProps extends IDatesSelectionOwnProps, IDatesSelectionStateProps,
  IDatesSelectionDispatchProps, IDatesSelectionChildrenProps { }

export class DatesSelection extends React.Component<IDatesSelectionProps, any> {

  private onDateChange(date: Date, isUpperLimit: boolean, datePicker?: boolean) {
    if (this.props.onChange) {
      this.props.onChange(date, isUpperLimit, datePicker);
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
      let dates: string[] = nextProps.quickOption.split(DATES_SEPARATOR);
      this.onDateChange(new Date(dates[0]), false, true);

      if (dates.length > 1) {
        this.onDateChange(new Date(dates[1]), true, true);
      }
    }
  }

  render() {
    let wrapperClasses: string = !this.props.withTime ? 'mod-inline flex' : '';
    let datePickerProps: IDatePickerProps = {
      withTime: this.props.withTime,
      hasSetToNowButton: this.props.hasSetToNowButton,
      setToNowTooltip: this.props.setToNowTooltip,
      onChange: (date: Date, isUpperLimit: boolean) => this.onDateChange(date, isUpperLimit),
      onClick: (isUpperLimit: boolean) => this.onDateClick(isUpperLimit)
    };
    let separatorClasses: string[] = ['date-separator'];
    if (this.props.withTime) {
      separatorClasses.push('mod-vertical');
    }
    let separator: JSX.Element = this.props.isRange
      ? <span className={separatorClasses.join(' ')}>
        <span>-</span>
      </span>
      : null;
    let toDate: JSX.Element = this.props.isRange
      ? <DatePicker upperLimit date={this.props.upperLimit} {...datePickerProps} />
      : null;

    return (
      <div className={wrapperClasses}>
        <DatePicker date={this.props.lowerLimit} {...datePickerProps} />
        {separator}
        {toDate}
      </div>
    );
  }
}
