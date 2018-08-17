
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';

export const BOOLEAN_OPRATOR_SELECT_ID: string = 'boolean-operator-select';
export const BOOLEAN_OPERATOR_ITEMS: IItemBoxProps[] = [{value: 'AND', displayValue: 'And'}, {value: 'OR', displayValue: 'Or'}];

export interface IBooleanOperatorSelectProps {
    expressionEditorId: string;
    isExpressionComplete: boolean;
    onBooleanOperatorSelect: (booleanOperator: string) => void;
}

export class BooleanOperatorSelect extends React.Component<IBooleanOperatorSelectProps> {

    render() {
        return (
            <SingleSelectConnected
                id={`${this.props.expressionEditorId}-${BOOLEAN_OPRATOR_SELECT_ID}`}
                items={BOOLEAN_OPERATOR_ITEMS}
                placeholder='Add rule'
                disabled={!this.props.isExpressionComplete}
                onSelectOptionCallback={(selectedBooleanOperator) => this.props.onBooleanOperatorSelect(selectedBooleanOperator)}
            />
        );
    }
}
