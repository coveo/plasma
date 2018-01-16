import * as React from 'react';
import * as classNames from 'classnames';

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
}

export interface IInputStateProps {
  checked?: boolean;
  value?: string;
}

export interface IInputDispatchProps {
  onDestroy?: () => void;
  onRender?: () => void;
  onBlur?: (value: string) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (value?: string) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface IInputProps extends IInputOwnProps, IInputStateProps, IInputDispatchProps { }

export class Input extends React.Component<IInputProps, any> {
  private innerInput: HTMLInputElement;

  static defaultProps: Partial<IInputProps> = {
    type: 'text',
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

  render() {
    const classes = classNames(
      'input-wrapper',
      this.props.classes
    );
    const innerInputClasses = classNames(this.props.innerInputClasses);

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
        {this.props.children}
      </div>
    );
  }
}
