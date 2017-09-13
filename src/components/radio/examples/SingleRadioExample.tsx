import * as React from 'react';
import { Radio } from '../Radio';

export class SingleRadioExample extends React.Component<any, any> {
  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Single Radio Option</label>
        <Radio id='SingleOption' name='singleoption' label='Purple' value='purple' />
      </div>
    );
  }
}
