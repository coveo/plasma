import * as React from 'react';
import { Radio } from '../Radio';
import { RadioSelect } from '../RadioSelect';

export class RadioDisabledExample extends React.Component<any, any> {
  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Radio Select with disabled options</label>
        <RadioSelect value='a-value' disabled>
          <Radio id='Option3' name='disabledOptions' label='Yellow' value='yellow' />
          <Radio id='Option4' name='disabledOptions' label='Red' value='red' />
        </RadioSelect>
      </div>
    );
  }
}
