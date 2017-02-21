import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { DatePickerBox, IDatesSelectionBox, IDatePickerBoxProps, IDatePickerBoxChildrenProps } from './DatePickerBox';
import { IDatePickerState } from './DatePickerReducers';
import { DateUtils } from '../../utils/DateUtils';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DEFAULT_YEARS } from '../calendar/Calendar';

export interface IDatePickerDropdownOwnProps extends React.ClassAttributes<DatePickerDropdown> {
  label?: string;
  id?: string;
  applyLabel?: string;
  cancelLabel?: string;
  toLabel?: string;
  onRight?: boolean;
  onBeforeApply?: () => void;
}

export interface IDatePickerDropdownChildrenProps extends IDatePickerBoxChildrenProps {
  datesSelectionBoxes: IDatesSelectionBox[];
  setToNowTooltip?: string;
  months?: string[];
  startingMonth?: number;
  years?: string[];
  startingYear?: number;
  days?: string[];
  startingDay?: number;
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
}

export interface IDatePickerDropdownProps extends IDatePickerDropdownOwnProps, IDatePickerDropdownStateProps,
  IDatePickerDropdownDispatchProps, IDatePickerDropdownChildrenProps { }

export const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string = 'Select date';
export const DEFAULT_APPLY_DATE_LABEL: string = 'Apply';
export const DEFAULT_CANCEL_DATE_LABEL: string = 'Cancel';
export const DEFAULT_TO_LABEL: string = 'to';

export class DatePickerDropdown extends React.Component<IDatePickerDropdownProps, any> {
  private dropdown: HTMLDivElement;

  private handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.datePicker);
    }
  };

  private handleDocumentClick = (e: MouseEvent) => {
    let dropdown: HTMLDivElement = ReactDOM.findDOMNode<HTMLDivElement>(this.dropdown);

    if (!dropdown.contains(e.toElement)) {
      this.props.onDocumentClick();
      this.handleCancel();
    }
  };

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }

    if (this.props.onDocumentClick) {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    if (this.props.onDocumentClick) {
      document.removeEventListener('click', this.handleDocumentClick);
    }

    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  private handleApply() {
    if (this.props.onBeforeApply) {
      this.props.onBeforeApply();
    }

    if (this.props.onApply) {
      this.props.onApply();
    }
  }

  private handleCancel() {
    if (this.props.onCancel) {
      let currentMonth: number = this.props.datePicker
        ? this.props.datePicker.appliedLowerLimit.getMonth()
        : DateUtils.currentMonth;
      let years: string[] = this.props.years || DEFAULT_YEARS;
      let currentYear: number = this.props.datePicker
        ? this.props.datePicker.appliedLowerLimit.getFullYear()
        : DateUtils.currentYear;
      this.props.onCancel(currentMonth, years.indexOf(currentYear.toString()), this.props.isOpened);
    }
  }

  private formatDate(date: Date): string {
    return this.props.datesSelectionBoxes.length && this.props.datesSelectionBoxes[0].withTime
      ? DateUtils.getDateWithTimeString(date)
      : DateUtils.getSimpleDate(date);
  }

  render() {
    let datePickerBoxProps: IDatePickerBoxProps = {
      setToNowTooltip: this.props.setToNowTooltip,
      datesSelectionBoxes: this.props.datesSelectionBoxes,
      months: this.props.months,
      startingMonth: this.props.startingMonth,
      years: this.props.years,
      startingYear: this.props.startingYear,
      days: this.props.days,
      startingDay: this.props.startingDay,
      footer: (
        <footer className='modal-footer mod-small'>
          <button className='btn mod-primary mod-small' onClick={() => this.handleApply()}>
            {this.props.applyLabel || DEFAULT_APPLY_DATE_LABEL}
          </button>
          <button className='btn mod-small' onClick={() => this.handleCancel()}>
            {this.props.cancelLabel || DEFAULT_CANCEL_DATE_LABEL}
          </button>
        </footer>
      )
    };
    let datePickerBox: JSX.Element = this.props.withReduxState
      ? <DatePickerBox withReduxState id={this.props.id} {...datePickerBoxProps} />
      : <DatePickerBox {...datePickerBoxProps} />;

    let dropdownClasses: string[] = ['dropdown-wrapper'];
    if (this.props.isOpened) {
      dropdownClasses.push('open');
    }

    let label: string = this.props.label || DEFAULT_DATE_PICKER_DROPDOWN_LABEL;
    let toLabel: JSX.Element = null;
    let labelSecondPart: string;
    if (this.props.datePicker) {
      label = this.formatDate(this.props.datePicker.appliedLowerLimit);
      if (this.props.datePicker.isRange) {
        toLabel = <span className='to-label'> {(this.props.toLabel || DEFAULT_TO_LABEL)} </span>;
        labelSecondPart = this.formatDate(this.props.datePicker.appliedUpperLimit);
      }
    }

    let menuClasses: string[] = ['dropdown-menu', 'normal-height'];
    if (this.props.onRight) {
      menuClasses.push('on-right');
    }

    return (
      <div className='date-picker-dropdown'>
        <div className={dropdownClasses.join(' ')} ref={(dropdown: HTMLDivElement) => this.dropdown = dropdown}>
          <span className='dropdown-toggle btn inline-flex flex-center' onClick={() => this.handleClick()}>
            <span className='dropdown-selected-value'>
              <label>
                {label}
                {toLabel}
                {labelSecondPart}
              </label>
            </span>
            <span className='dropdown-toggle-arrow'></span>
          </span>
          <div className={menuClasses.join(' ')}>
            {datePickerBox}
          </div>
        </div>
      </div>
    );
  }
}
