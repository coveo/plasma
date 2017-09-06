import * as React from 'react';

export interface IInputProps {
  label?: string;
  type?: string;
  classes?: string[];
  innerInputClasses?: string[];
  labelClasses?: string[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  validMessage?: string;
  invalidMessage?: string;
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
    const innerInputClasses = [].concat(this.props.innerInputClasses);

    return (
      <div className={classes.join(' ')}>
        <input
          className={innerInputClasses.join(' ')}
          type={this.props.type ? this.props.type : 'text'}
          defaultValue={this.props.value}
          ref={(innerInput: HTMLInputElement) => this.innerInput = innerInput}
          onBlur={() => this.handleChange()}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.handleKeyUp(event)}
          placeholder={this.props.placeholder}
          required />
        <label className={labelClasses.join(' ')}
          data-valid-message={this.props.validMessage}
          data-invalid-message={this.props.invalidMessage}>{this.props.label}</label>
        {this.props.children}
      </div>
    );
  }
}
