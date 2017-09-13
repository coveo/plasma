import * as React from 'react';
import { CheckboxWithState } from './CheckboxWithStateExample';

export class CheckboxExamples extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>Checkboxes</h1>
        <div className='form-group'>
          <CheckboxWithState label='A checkbox unchecked by default' />
          <br />
          <CheckboxWithState label='A checkbox checked by default' checked={true} />
          <br />
          <CheckboxWithState label='A disabled checkbox' disabled={true} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>A checkbox with no label</label>
          <br />
          <CheckboxWithState />
        </div>
      </div>
    );
  }
}
