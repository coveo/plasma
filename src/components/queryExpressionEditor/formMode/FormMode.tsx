import * as React from 'react';
import {ExpressionEditor} from '../expressionEditor/ExpressionEditor';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';

export interface IFormModeProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IFormModeState {

}

export class FormMode extends React.Component<IFormModeProps, IFormModeState> {

    constructor(props: IFormModeProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <ExpressionEditor queryTrigger={this.props.queryTrigger} updateQueryExpression={this.props.updateQueryExpression} />
            </div>
        );
    }
}
