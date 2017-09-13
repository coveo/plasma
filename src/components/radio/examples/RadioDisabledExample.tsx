import * as React from 'react';
import { Radio } from '../Radio';
import { RadioSelect } from '../RadioSelect';

interface IRadioSelectProps {
  defaultValue?: string;
}

interface IRadioSelectState {
  value: string;
}

export class RadioDisabledExample extends React.Component<IRadioSelectProps, IRadioSelectState> {
  constructor(props: IRadioSelectProps, state: IRadioSelectState) {
    super(props, state);
    this.state = {
      value: this.props.defaultValue
    };
  }

  handleChange(value: string) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Radio Select with disabled options</label>
        <RadioSelect value={this.state.value} onChange={(value => this.handleChange(value))} disabled={true}>
          <Radio id='Option3' name='disabledOptions' label='Yellow' value='yellow' />
          <Radio id='Option4' name='disabledOptions' label='Red' value='red' />
        </RadioSelect>
      </div>
    );
  }
}
