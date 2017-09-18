import * as React from 'react';
import * as classNames from 'classnames';

export interface IInputProps {
  label?: string;
  type?: string;
  classes?: string[];
  innerInputClasses?: string[];
  labelClasses?: string[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  validMessage?: string;
  invalidMessage?: string;
}

export class Input extends React.Component<IInputProps, any> {
  private innerInput: HTMLInputElement;

  static defaultProps: Partial<IInputProps> = {
    type: 'text',
  };

  reset() {
    this.innerInput.value = '';
  }

  getInnerValue(): string {
    return this.innerInput.value;
  }

  private handleChange() {
    if (this.props.onChange) {
      this.props.onChange(this.innerInput.value);
    }
  }

  private handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  render() {
    const classes = classNames('input-wrapper', this.props.classes);
    const labelClasses = classNames(this.props.labelClasses);
    const innerInputClasses = classNames(this.props.innerInputClasses);

    return (
      <div className={classes}>
        <input
          className={innerInputClasses}
          type={this.props.type}
          defaultValue={this.props.value}
          ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
          onBlur={() => this.handleChange()}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required
        />
        <label className={labelClasses}
          data-valid-message={this.props.validMessage}
          data-invalid-message={this.props.invalidMessage}>{this.props.label}
        </label>

        {this.props.children}
      </div>
    );
  }
}
