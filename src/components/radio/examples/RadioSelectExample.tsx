import * as React from 'react';
import { Radio } from '../Radio';
import { RadioSelect } from '../RadioSelect';
import { Label } from '../../input/Label';

export interface IRadioSelectProps {
  defaultValue?: string;
  disabled?: boolean;
}

export interface IRadioSelectState {
  value: string;
}

export class RadioSelectExample extends React.Component<IRadioSelectProps, IRadioSelectState> {
  constructor(props: IRadioSelectProps, state: IRadioSelectState) {
    super(props, state);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  private handleChange(value: string) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Radio Select</label>
        <RadioSelect
          value={this.state.value}
          onChange={(value => this.handleChange(value))}
          disabled={this.props.disabled}>
          <Radio id='Option1' name='enabledOptions' value='blue'>
            <Label>Blue</Label>
          </Radio>
          <Radio id='Option2' name='enabledOptions' value='green'>
            <Label>Green</Label>
          </Radio>
        </RadioSelect>
      </div>
    );
  }
}
