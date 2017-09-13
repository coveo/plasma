import * as React from 'react';

export interface IInputProps {
  label?: string;
  classes?: string[];
  labelClasses?: string[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  validate?: (value: string) => string;
}

export class Input extends React.Component<IInputProps, any> {
  private innerInput: HTMLInputElement;

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
    const classes = ['input-wrapper'].concat(this.props.classes);
    const labelClasses = [].concat(this.props.labelClasses);

    return (
      <div className={classes.join(' ')}>
        <input
          type='text'
          defaultValue={this.props.value}
          ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
          onBlur={() => this.handleChange()}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          required />
        <label className={labelClasses.join(' ')}>{this.props.label}</label>
        {this.props.children}
      </div>
    );
  }
}
