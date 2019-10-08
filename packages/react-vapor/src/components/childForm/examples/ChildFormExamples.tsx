import * as React from 'react';
import {ChildFormWithRadiosExamples} from './ChildFormWithRadiosExample';
import {SimpleChildFormExample} from './SimpleChildFormExample';

export class ChildFormExamples extends React.Component<any, any> {
    static description = 'Child Forms are used to make accessible more controls when an option is selected in a form.';
    render() {
        return (
            <div className="mt2">
                <SimpleChildFormExample />
                <ChildFormWithRadiosExamples />
            </div>
        );
    }
}
