import * as React from 'react';
import { Checkbox } from '../Checkbox';

export interface ICheckboxWithStateProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface ICheckboxWithStateState {
  checked?: boolean;
}

export class CheckboxWithState extends React.Component<ICheckboxWithStateProps, ICheckboxWithStateState> {
  constructor(props: ICheckboxWithStateProps, state: ICheckboxWithStateState) {
    super(props, state);
    this.state = {
      checked: this.props.checked
    };
  }

  handleChange() {
    if (!this.props.disabled) {
      this.setState({
        checked: !this.state.checked
      });
    }
  }

  render() {
    return (
      <Checkbox onChange={() => this.handleChange()} label={this.props.label} checked={this.state.checked} disabled={this.props.disabled} />
    );
  }
}
