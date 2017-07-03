import { Loading } from './Loading';
import * as React from 'react';

export class LoadingExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2' style={{ width: 400 }}>
        <div className='form-group'>
          <label className='form-control-label'>Loading bouncing balls</label>
          <Loading />
        </div>
      </div>
    );
  }
}
