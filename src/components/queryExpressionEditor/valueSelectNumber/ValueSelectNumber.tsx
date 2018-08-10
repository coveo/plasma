
import * as React from 'react';
import { InputConnected } from '../../input/InputConnected';

export const valueSelectNumberId: string = 'value-select-number';

export interface IValueSelectNumberProps {
    expressionEditorId: string;
}

export interface IValueSelectNumberState {
}

export class ValueSelectNumber extends React.Component<IValueSelectNumberProps, IValueSelectNumberState> {
    constructor(props: IValueSelectNumberProps) {
        super(props);
        this.state = {};
    }

    private isInteger(value: string): boolean {
        // TODO : 22aa is valid review parsing
        // const parsedInt = parseInt(value, radix);
        // return true; Number.isInteger(parsedInt);
        return true;
    }

    render() {
        return (
            <span>
                <InputConnected
                    id={`${this.props.expressionEditorId}-${valueSelectNumberId}`}
                    validate={(numberValue: string) => this.isInteger(numberValue)}
                    labelTitle='Enter a number'
                    labelProps={{invalidMessage: 'Enter a valid number'}}
                    innerInputClasses='mb2'
                    validateOnChange
                />
            </span>
        );
    }
}
