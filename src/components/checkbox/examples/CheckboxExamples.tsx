import * as React from 'react';
import { CheckboxExample } from './CheckboxExample';

export class CheckboxExamples extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>Checkboxes</h1>
        <div className='form-group'>
          <CheckboxExample label='A checkbox unchecked by default' />
          <br />
          <CheckboxExample classes={['mt1']} label='A checkbox checked by default' checked={true} />
          <br />
          <CheckboxExample classes={['mt1']} label='A disabled checkbox' disabled={true} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>A checkbox with no label</label>
          <br />
          <CheckboxExample />
        </div>
      </div>
    );
  }
}
