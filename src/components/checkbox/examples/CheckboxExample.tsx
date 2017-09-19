import * as React from 'react';
import { Checkbox } from '../Checkbox';

export interface ICheckboxWithStateProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  classes?: string[];
}

export interface ICheckboxWithStateState {
  checked?: boolean;
}

export class CheckboxExample extends React.Component<ICheckboxWithStateProps, ICheckboxWithStateState> {
  constructor(props: ICheckboxWithStateProps, state: ICheckboxWithStateState) {
    super(props, state);
    this.state = {
      checked: this.props.checked
    };
  }

  handleClick() {
    if (!this.props.disabled) {
      this.setState({
        checked: !this.state.checked
      });
    }
  }

  render() {
    return (
      <Checkbox classes={this.props.classes} onClick={() => this.handleClick()} label={this.props.label} checked={this.state.checked} disabled={this.props.disabled} />
    );
  }
}
