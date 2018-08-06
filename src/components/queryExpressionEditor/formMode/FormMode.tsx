import * as React from 'react';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import { ExpressionEditorConnected } from '../expressionEditor/ExpressionEditorConnected';

export const expressionEditor1ID: string = 'expression-editor-1';
export const expressionEditor2ID: string = 'expression-editor-2';

export interface IFormModeOwnProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IFormModeStateProps {
    expressions?: string[];
}


export interface IFormModeDispatchProps {
    
}


export interface IFormModeProps extends IFormModeOwnProps, IFormModeStateProps, IFormModeDispatchProps {}


export class FormMode extends React.Component<IFormModeProps> {

    constructor(props: IFormModeOwnProps) {
        super(props);
    }

    // componentWillReceiveProps(nextProps: IExpressionEditorProps) {
        // update le state courant avec toutes les expressions
        // const finalExpression: string = this.getExpression(nextProps);
        // this.setState({finalExpression: expression});
    // }

    render() {
        return (
            <div>
                <ExpressionEditorConnected id={expressionEditor1ID} queryTrigger={this.props.queryTrigger} updateQueryExpression={this.props.updateQueryExpression} />
                <ExpressionEditorConnected id={expressionEditor2ID} queryTrigger={this.props.queryTrigger} updateQueryExpression={this.props.updateQueryExpression} />
            </div>
        );
    }
}
