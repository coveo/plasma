import * as React from 'react';
import { IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps, FlatSelect } from './FlatSelect';

export interface IFlatSelectStandaloneProps extends IFlatSelectOwnProps, IFlatSelectStateProps, IFlatSelectDispatchProps { }

export interface IFlatSelectStandaloneState {
  selectedOption: string;
}

export class FlatSelectStandalone extends React.Component<IFlatSelectStandaloneProps, IFlatSelectStandaloneState> {
  reset() {
    this.setState(this.getDefaultState());
  }

  selectedOption(): string {
    return this.state.selectedOption;
  }

  select(value: string) {
    this.setState({
      selectedOption: value
    });
  }

  constructor(props: IFlatSelectStandaloneProps, state: IFlatSelectStandaloneState) {
    super(props, state);

    this.state = this.getDefaultState();
  }

  private onClick(value: string) {
    this.select(value);
  }

  private getDefaultState() {
    let state: IFlatSelectStandaloneState;
    if (this.props.selectedOptions && this.props.selectedOptions.length > 0) {
      state = {
        selectedOption: this.props.selectedOptions[0]
      };
    } else if (this.props.options.length > 0) {
      state = {
        selectedOption: this.props.options[0].value()
      };
    } else {
      throw new Error('Flat select does not have any options to display.');
    }
    return state;
  }

  render() {
    return (
      <FlatSelect
        {...this.props}
        onClick={(value: string) => this.onClick(value)}
        selectedOptions={[this.state.selectedOption]}
      />
    );
  }
}
