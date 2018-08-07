
import * as React from 'react';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import { SingleSelectConnected } from '../../select/SingleSelectConnected';

export const addRuleSelectId: string = 'add-rule-select';

const addRuleItems: IItemBoxProps[] = [{value: 'AND', displayValue: 'And'}, {value: 'OR', displayValue: 'Or'}];

export interface IAddRuleSelectProps {
    expressionEditorId: string;
    isCurrentExpressionComplete: boolean;
}

export interface IAddRuleSelectState {
}

export class AddRuleSelect extends React.Component<IAddRuleSelectProps, IAddRuleSelectState> {
    // TODO remove if not used
    constructor(props: IAddRuleSelectProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <span>
                <SingleSelectConnected
                    id={`${this.props.expressionEditorId}-${addRuleSelectId}`}
                    items={addRuleItems}
                    placeholder='Add rule'
                    disabled={!this.props.isCurrentExpressionComplete}
                />
            </span>
        );
    }
}
