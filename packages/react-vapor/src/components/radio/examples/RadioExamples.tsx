import * as React from 'react';
import {RadioDisabledExample} from './RadioDisabledExample';
import {RadioSelectConnectedExample} from './RadioSelectConnectedExample';
import {RadioSelectExample} from './RadioSelectExample';
import {SingleRadioExample} from './SingleRadioExample';
import {SingleRadioWithDescriptionExample} from './SingleRadioWithDescriptionExample';

export class RadioExamples extends React.Component<any, any> {
    static description = 'Radio Buttons allow for the selection of a single option among a set of options.';
    render() {
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Radio Buttons</h1>
                <SingleRadioExample />
                <SingleRadioWithDescriptionExample />
                <RadioSelectExample />
                <RadioDisabledExample />
                <RadioSelectConnectedExample />
            </div>
        );
    }
}
