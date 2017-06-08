import * as React from 'react';
import {Button} from '../Button';

export class ButtonExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Default Button</label>
          <Button enabled={true} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Default Button</label>
          <Button enabled={true} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Default Button</label>
          <Button enabled={true} />
        </div>
      </div>
    );
  };
}
