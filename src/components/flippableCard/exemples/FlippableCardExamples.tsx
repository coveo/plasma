import * as React from 'react';
import { FlippableCard } from '../FlippableCard';

export class FlippableCardExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1 bold'>FlippableCard List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default FlippableCard</label>
          <div className='form-control'>
            <FlippableCard />
          </div>
        </div>
      </div>
    );
  }
}
