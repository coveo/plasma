
import * as React from 'react';
import {InputConnected} from '../../input/InputConnected';
import * as styles from './ValueSelectNumber.scss';

export const VALUE_SELECT_NUMBER_ID: string = 'value-select-number';

export interface IValueSelectNumberProps {
    expressionEditorId: string;
}

export class ValueSelectNumber extends React.Component<IValueSelectNumberProps> {

    private isInteger(value: string): boolean {
        const isInteger = new RegExp(/^[0-9]*$/);
        return isInteger.test(value);
    }

    render() {
        return (
            <span>
                <InputConnected
                    id={`${this.props.expressionEditorId}-${VALUE_SELECT_NUMBER_ID}`}
                    validate={(numberValue: string) => this.isInteger(numberValue)}
                    labelTitle='Enter a number'
                    labelProps={{invalidMessage: 'Enter a valid number'}}
                    innerInputClasses={`${styles.numberInput}`}
                    validateOnChange
                />
            </span>
        );
    }
}
