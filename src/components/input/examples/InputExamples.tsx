import * as React from 'react';
import {Input} from '../Input';
import {Label} from '../Label';

export interface IInputExampleStateProps {
    inputClasses: string[];
}

export class InputExamples extends React.Component<any, IInputExampleStateProps> {
    private innerInput: Input;

    constructor(props: any, state: IInputExampleStateProps) {
        super(props, state);

        this.state = {
            inputClasses: [],
        };
    }

    private onChange() {
        const inputValue = this.innerInput.getInnerValue();
        this.setInputClasses(inputValue ? 'valid' : 'invalid');
    }

    setInputClasses(className: string) {
        this.setState({
            inputClasses: [className],
        });
    }

    render() {
        return (
            <div className='form-group'>
                <Input
                    innerInputClasses={this.state.inputClasses}
                    placeholder='Please, do not leave me empty!'
                    ref={(innerInput: Input) => this.innerInput = innerInput}
                    onKeyUp={() => this.onChange()}>
                    <Label
                        validMessage='Great!'
                        invalidMessage='The input box must not be empty.'>
                        An Input Box
            </Label>
                </Input>
            </div>
        );
    }
}
