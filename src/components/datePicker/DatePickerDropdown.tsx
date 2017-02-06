import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { DatePickerBox, IDatesSelectionBox, IDatePickerBoxProps } from './DatePickerBox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IDatePickerDropdownOwnProps extends React.ClassAttributes<DatePickerDropdown> {
  label?: string;
  id?: string;
  applyLabel?: string;
  cancelLabel?: string;
}

export interface IDatePickerDropdownChildrenProps {
  datesSelectionBoxes: IDatesSelectionBox[];
  setToNowTooltip?: string;
}

export interface IDatePickerDropdownStateProps extends IReduxStatePossibleProps {
  isOpened?: boolean;
}

export interface IDatePickerDropdownDispatchProps {
  onApply?: () => void;
  onCancel?: () => void;
  onRender?: () => void;
  onDestroy?: () => void;
  onClick?: () => void;
  onDocumentClick?: () => void;
}

export interface IDatePickerDropdownProps extends IDatePickerDropdownOwnProps, IDatePickerDropdownStateProps,
  IDatePickerDropdownDispatchProps, IDatePickerDropdownChildrenProps { }

export const DEFAULT_DATE_PICKER_DROPDOWN_LABEL: string = 'Select date';
export const DEFAULT_APPLY_DATE_LABEL: string = 'Apply';
export const DEFAULT_CANCEL_DATE_LABEL: string = 'Cancel';

export class DatePickerDropdown extends React.Component<IDatePickerDropdownProps, any> {
  private dropdown: HTMLDivElement;

  private handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
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
    if (this.props.onApply) {
      this.props.onApply();
    }
  }

  private handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    let datePickerBoxProps: IDatePickerBoxProps = {
      setToNowTooltip: this.props.setToNowTooltip,
      datesSelectionBoxes: this.props.datesSelectionBoxes,
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

    return (
      <div className='date-picker-dropdown'>
        <div className={dropdownClasses.join(' ')} ref={(dropdown: HTMLDivElement) => this.dropdown = dropdown}>
          <span className='dropdown-toggle btn inline-flex flex-center' onClick={() => this.handleClick()}>
            <span className='dropdown-selected-value'>
              <label>{this.props.label || DEFAULT_DATE_PICKER_DROPDOWN_LABEL}</label>
            </span>
            <span className='dropdown-toggle-arrow'></span>
          </span>
          <div className='dropdown-menu normal-height'>
            {datePickerBox}
          </div>
        </div>
      </div>
    );
  }
}
