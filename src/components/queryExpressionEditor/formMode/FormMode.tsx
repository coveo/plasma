import * as React from 'react';
import {ExpressionEditorConnected} from '../expressionEditor/ExpressionEditorConnected';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';

export const expressionEditor1ID: string = 'expression-editor-1';
export const expressionEditor2ID: string = 'expression-editor-2';

export interface IFormModeOwnProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IFormModeOwnState {
    fields?: IField[];
}

export interface IFormModeStateProps {
    expressions?: string[];
}

export interface IFormModeDispatchProps {
}

export interface IFormModeProps extends IFormModeOwnProps, IFormModeStateProps, IFormModeDispatchProps {}

export class FormMode extends React.Component<IFormModeProps, IFormModeOwnState> {

    constructor(props: IFormModeOwnProps) {
        super(props);
        this.state = {fields: []};
    }

    // componentWillReceiveProps(nextProps: IExpressionEditorProps) {
    // update le state courant avec toutes les expressions
    // const finalExpression: string = this.getExpression(nextProps);
    // this.setState({finalExpression: expression});
    // }

    async componentDidMount() {
        const newfields = await this.props.queryTrigger.getFields();
        this.setState({fields: newfields});
    }

    render() {
        return (
            <div>
                <ExpressionEditorConnected
                    id={expressionEditor1ID}
                    fields={this.state.fields}
                    queryTrigger={this.props.queryTrigger}
                    updateQueryExpression={this.props.updateQueryExpression}
                />
                <ExpressionEditorConnected
                    id={expressionEditor2ID}
                    fields={this.state.fields}
                    queryTrigger={this.props.queryTrigger}
                    updateQueryExpression={this.props.updateQueryExpression}
                />
            </div>
        );
    }
}
