import * as React from 'react';
import * as classNames from 'classnames';
import {contains} from 'underscore';
import { ILabelProps, Label } from './Label';
import { IClassName } from '../../utils/ClassNameUtils';

export interface IInputOwnProps {
  id?: string;
  name?: string;
  type?: string;
  classes?: IClassName;
  innerInputClasses?: string[];
  defaultValue?: string;
  placeholder?: string;
  defaultChecked?: boolean;
  readOnly?: boolean;
  validate?: (value: any) => boolean;
  labelTitle?: string;
  labelProps?: ILabelProps;
  onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>, props: IInputProps) => any;
  /**
   * The initial disabled state of the input that will be sent to the Redux Store onMount
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
  onRender?: (value?: any, valid?: boolean, disabled?: boolean) => void;
  onBlur?: (value: string) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (value?: any) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
      this.props.onRender(
        this.props.defaultValue,
        this.props.validateOnMount && this.props.validate && this.props.validate(this.props.validateOnMount),
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

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) {
      this.props.onChange(this.innerInput.value);
    }

    if (this.props.onChangeCallback) {
      this.props.onChangeCallback(e, this.props);
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
          defaultValue={this.props.value || (this.innerInput && this.innerInput.value)}
          ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
          onBlur={() => this.handleBlur()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
          placeholder={this.props.placeholder}
          checked={!!this.props.checked}
          disabled={!!this.props.disabled}
          name={this.props.name}
          value={this.props.value || (this.innerInput && this.innerInput.value)}
          required
          readOnly={!!this.props.readOnly}
        />
        {this.getLabel()}
        {this.props.children}
      </div>
    );
  }
}
