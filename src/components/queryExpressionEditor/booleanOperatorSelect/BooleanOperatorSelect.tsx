
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';

export const booleanOperatorSelectId: string = 'boolean-operator-select';

const booleanOperatorItems: IItemBoxProps[] = [{value: 'AND', displayValue: 'And'}, {value: 'OR', displayValue: 'Or'}];

export interface IBooleanOperatorSelectProps {
    expressionEditorId: string;
    isCurrentExpressionComplete: boolean;
    onBooleanOperatorSelect: (booleanOperator: string) => void;
}

export interface IABooleanOperatorSelectState {
}

export class BooleanOperatorSelect extends React.Component<IBooleanOperatorSelectProps, IABooleanOperatorSelectState> {
    // TODO remove if not used
    constructor(props: IBooleanOperatorSelectProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <span>
                <SingleSelectConnected
                    id={`${this.props.expressionEditorId}-${booleanOperatorSelectId}`}
                    items={booleanOperatorItems}
                    placeholder='Add rule'
                    disabled={!this.props.isCurrentExpressionComplete} // TODO
                    onSelectOptionCallback={(selectedBooleanOperator) => this.props.onBooleanOperatorSelect(selectedBooleanOperator)}
                />
            </span>
        );
    }
}
