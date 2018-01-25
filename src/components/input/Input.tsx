import * as React from 'react';
import * as classNames from 'classnames';
import { ILabelProps, Label } from './Label';

export interface IInputOwnProps {
  id?: string;
  name?: string;
  type?: string;
  classes?: string[];
  innerInputClasses?: string[];
  defaultValue?: string;
  placeholder?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  validate?: (value: any) => boolean;
  withValidStyle?: true;
  labelTitle?: string;
  labelProps?: ILabelProps;
}

export interface IInputStateProps {
  checked?: boolean;
  value?: string;
  valid?: boolean;
}

export interface IInputDispatchProps {
  onDestroy?: () => void;
  onRender?: (value?: any, valid?: boolean) => void;
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
      this.props.onRender();
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
      'input-wrapper',
      this.props.classes
    );
    const innerInputClasses = classNames({
      valid: this.props.valid && this.props.withValidStyle,
      invalid: !this.props.valid,
    }, this.props.innerInputClasses);

    return (
      <div className={classes} onClick={(e: React.MouseEvent<HTMLElement>) => this.handleClick(e)}>
        <input
          id={this.props.id}
          className={innerInputClasses}
          type={this.props.type}
          defaultValue={this.props.value}
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
