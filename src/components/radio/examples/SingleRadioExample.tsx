import * as React from 'react';
import { Radio } from '../Radio';
import { Label } from '../../input/Label';

export class SingleRadioExample extends React.Component<any, any> {
  render() {
    return (
      <div className='form-group'>
        <label className='form-control-label'>A Single Radio Option</label>
        <Radio id='SingleOption' name='singleoption' value='purple'>
          <Label>Purple</Label>
        </Radio>
      </div>
    );
  }
}
