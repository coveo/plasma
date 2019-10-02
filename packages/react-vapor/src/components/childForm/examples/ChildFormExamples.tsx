import * as React from 'react';
import {ChildFormWithRadiosExamples} from './ChildFormWithRadiosExample';
import {SimpleChildFormExample} from './SimpleChildFormExample';

export class ChildFormExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <SimpleChildFormExample />
                <ChildFormWithRadiosExamples />
            </div>
        );
    }
}
