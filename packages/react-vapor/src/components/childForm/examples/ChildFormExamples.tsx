import * as React from 'react';
import {ChildFormWithRadiosExamples} from './ChildFormWithRadiosExample';
import {SimpleChildFormExample} from './SimpleChildFormExample';

export class ChildFormExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Child Form Element</h1>
                <SimpleChildFormExample />
                <ChildFormWithRadiosExamples />
            </div>
        );
    }
}
