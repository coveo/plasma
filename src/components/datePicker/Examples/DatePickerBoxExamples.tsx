import * as React from 'react';
import { DatePickerBox } from '../DatePickerBox';

export class DatePickerBoxExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Date picker</label>
          <DatePickerBox />
        </div>
      </div>
    );
  };
}
