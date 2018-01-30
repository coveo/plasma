import * as React from 'react';
import * as classNames from 'classnames';
import { contains, isUndefined } from 'underscore';
import { ILabelProps, Label } from './Label';
import { IClassName } from '../../utils/ClassNameUtils';

export interface IInputOwnProps {
  id?: string;
  name?: string;
  type?: string;
  classes?: IClassName;
  innerInputClasses?: IClassName;
  defaultValue?: string;
  placeholder?: string;
  defaultChecked?: boolean;
  readOnly?: boolean;
  validate?: (value: any) => boolean;
  labelTitle?: string;
  labelProps?: ILabelProps;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (value: string) => void;
  validateOnChange?: boolean;
  /**
   * Specify if an InputConnected should be disabled onMount
   */
  disabledOnMount?: boolean;
  /**
   * Specify if an InputConnected should be validated onMount
   */
  validateOnMount?: boolean;
}

export interface IInputStateProps {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  valid?: boolean;
}

export interface IInputDispatchProps {
  onDestroy?: () => void;
  onRender?: (value?: string, valid?: boolean, disabled?: boolean) => void;
  onChange?: (value?: string) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IInputProps extends IInputOwnProps, IInputStateProps, IInputDispatchProps { }

export class Input extends React.Component<IInputProps, any> {
  private innerInput: HTMLInputElement;

  static defaultProps: Partial<IInputProps> = {
    type: 'text',
    valid: true,
  };

  componentWillMount() {
    if (this.props.onRender) {
      // undefined validOnMount will default to true in the state
      const validOnMount = this.props.validateOnMount
        && this.props.validate
        && this.props.validate(this.props.defaultValue || '');

      this.props.onRender(
        this.props.defaultValue,
        validOnMount,
        this.props.disabledOnMount,
      );
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  reset() {
    this.innerInput.value = '';
  }

  getInnerValue(): string {
    return this.innerInput.value;
  }

  private handleBlur() {
    if (this.props.onBlur) {
      this.props.onBlur(this.innerInput.value);
    }
  }

  private handleChange() {
    if (this.props.onChange) {
      this.props.onChange(this.innerInput.value);
    }
  }

  private handleClick(e: React.MouseEvent<HTMLElement>) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  private handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  private getLabel(): JSX.Element {
    const { labelProps, labelTitle } = this.props;
    return labelTitle
      ? <Label htmlFor={this.props.id} {...labelProps}>{labelTitle}</Label>
      : null;
  }

  render() {
    const classes = classNames(
      'input-wrapper validate',
      {
        'input-field': contains(['number', 'text'], this.props.type),
      },
      this.props.classes
    );
    const innerInputClasses = classNames({
      invalid: !this.props.valid && contains(['number', 'text'], this.props.type),
    }, this.props.innerInputClasses);

    return (
      <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>
        <input
          id={this.props.id}
          className={innerInputClasses}
          type={this.props.type}
          defaultValue={!isUndefined(this.props.value) ? this.props.value : this.props.defaultValue}
          ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
          onBlur={() => this.handleBlur()}
          onChange={() => this.handleChange()}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
          placeholder={this.props.placeholder}
          checked={!!this.props.checked}
          disabled={!!this.props.disabled}
          name={this.props.name}
          required
          readOnly={!!this.props.readOnly}
        />
        {this.getLabel()}
        {this.props.children}
      </div>
    );
  }
}
