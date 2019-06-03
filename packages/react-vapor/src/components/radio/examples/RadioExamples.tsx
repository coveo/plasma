import * as React from 'react';
import {RadioDisabledExample} from './RadioDisabledExample';
import {RadioSelectConnectedExample} from './RadioSelectConnectedExample';
import {RadioSelectExample} from './RadioSelectExample';
import {SingleRadioExample} from './SingleRadioExample';

export class RadioExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Radio Buttons</h1>
                <SingleRadioExample />
                <RadioSelectExample />
                <RadioDisabledExample />
                <RadioSelectConnectedExample />
            </div>
        );
    }
}
