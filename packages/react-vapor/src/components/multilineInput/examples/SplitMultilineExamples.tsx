import * as React from 'react';

import {ISplitInput, ISplitValue, SplitMultilineInput} from '../SplitMultilineInput';

export class SplitMultilineInputExamples extends React.PureComponent {
    static inputs: ISplitInput[] = [
        {
            id: '1',
            label: 'First input',
            placeholder: 'enter a value',
            validation: (value: string) => !!value,
            validationMessage: 'This cannot be empty',
        },
        {
            id: '2',
            label: 'Second input',
            placeholder: 'enter another value',
        },
    ];
    static tripleInputs: ISplitInput[] = [
        ...SplitMultilineInputExamples.inputs,
        {
            id: '3',
            label: 'Third input',
            placeholder: 'enter yet another value',
        },
    ];

    static values: ISplitValue[] = [
        {
            '1': 'first value',
            '2': 'other first value',
        },
        {
            '1': 'second value',
            '2': 'other second value',
        },
    ];
    static valuesForTripleInputs: ISplitValue[] = [
        {
            '1': 'One',
            '2': 'Two',
            '3': 'three',
        },
    ];

    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Split Multiline Input</label>
                    <SplitMultilineInput
                        inputs={SplitMultilineInputExamples.inputs}
                        defaultValues={SplitMultilineInputExamples.values}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Split Multiline Input with onChange prop</label>
                    <SplitMultilineInput
                        inputs={SplitMultilineInputExamples.inputs}
                        defaultValues={SplitMultilineInputExamples.values}
                        onChange={(values: ISplitValue) => alert(JSON.stringify(values))}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Split Multiline Input with 3 inputs</label>
                    <SplitMultilineInput
                        inputs={SplitMultilineInputExamples.tripleInputs}
                        defaultValues={SplitMultilineInputExamples.valuesForTripleInputs}
                    />
                </div>
            </div>
        );
    }
}
