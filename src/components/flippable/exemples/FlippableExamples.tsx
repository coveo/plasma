import * as React from 'react';

import { Flippable } from '../Flippable';
import { FlippableConnected } from '../FlippableConnected';
import { smallDiv } from './FlippableExamplesCommon';

export class FlippableExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Flippable List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default Flippable</label>
          <div className='form-control'>
            <Flippable
              id='flippable-example-1'
              front={
                <div style={smallDiv} className='bg-white bold center-align flex' >
                  Some content on the front
                </div>
              }
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flippable with redux state</label>
          <div className='form-control flex'>
            <FlippableConnected
              id='flippable-example1'
              front={
                <div style={smallDiv} className='bg-white center-align flex center bold'>
                  <span>Some content on the front <br/>(Click me)</span>
                </div>
              }
              back={
                <div style={smallDiv} className='bg-light-grey bold center-align flex' >Some content on the back</div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
