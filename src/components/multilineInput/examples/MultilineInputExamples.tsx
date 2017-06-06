import { MultilineInput, IMultilineInputValue } from '../MultilineInput';
import * as React from 'react';

export interface IMultilineInputExampleProps { }

export interface IMultilineInputExampleStateProps {
  values: IMultilineInputValue[];
}

export class MultilineInputExamples extends React.Component<IMultilineInputExampleProps, IMultilineInputExampleStateProps> {
  constructor(props: IMultilineInputExampleProps) {
    super(props);
    this.state = {
      values: []
    };
  }

  private handleChange(values: IMultilineInputValue[]) {
    this.setState({
      values
    });
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Multiline Input</label>
          <MultilineInput
            title='A Multiline Input'
            placeholder='Enter a value'
            values={this.state.values}
            onChange={(values: IMultilineInputValue[]) => this.handleChange(values)} />
        </div>
      </div>
    );
  }
}
