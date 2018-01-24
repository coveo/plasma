import * as React from 'react';
import { SingleRadioExample } from './SingleRadioExample';
import { RadioSelectExample } from './RadioSelectExample';
import { RadioDisabledExample } from './RadioDisabledExample';

export class RadioExamples extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Radio Buttons</h1>
        <SingleRadioExample />
        <RadioSelectExample />
        <RadioDisabledExample />
      </div>
    );
  }
}
