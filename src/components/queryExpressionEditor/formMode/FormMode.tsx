import * as React from 'react';
import * as _ from 'underscore';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {Button} from '../../button/Button';
import { selectListBoxOption } from '../../listBox/ListBoxActions';
import { booleanOperatorSelectId } from '../booleanOperatorSelect/BooleanOperatorSelect';
import {ExpressionEditorConnected} from '../expressionEditor/ExpressionEditorConnected';
import {IExpressionEditorState} from '../expressionEditor/ExpressionEditorReducers';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';

export const expressionEditorId: string = 'expression-editor';

export interface IFormModeOwnProps {
    queryTrigger: QueryTrigger;
    updateQueryExpression: (expression: string) => void;
}

export interface IFormModeOwnState {
    fields?: IField[];
    expressionEditors?: JSX.Element[];
}

export interface IFormModeStateProps {
    expressionEditorsState?: IExpressionEditorState[];
}

export interface IFormModeDispatchProps {
    selectListBoxOption?: (id: string, multi: boolean, value: string) => void;
}

export interface IFormModeProps extends IFormModeOwnProps, IFormModeStateProps, IFormModeDispatchProps {}

export class FormMode extends React.Component<IFormModeProps, IFormModeOwnState> {
    private id: number;

    constructor(props: IFormModeOwnProps) {
        super(props);
        this.state = {fields: [], expressionEditors: []};
        this.id = 0;
    }

    componentWillReceiveProps(nextProps: IFormModeProps) {
        // update le state courant avec toutes les expressions
        // const finalExpression: string = this.getExpression(nextProps);
        // this.setState({finalExpression: expression});
        const finaleExpression = this.getFinalExpression(nextProps);
        this.props.updateQueryExpression(finaleExpression);
    }

    async componentDidMount() {
        const getfields = await this.props.queryTrigger.getFields();
        this.setState({fields: getfields});
        this.addExpressionEditor();
    }

    // TODO remove
    private logReduxState() {
        // console.log(ReactVaporStore.getState())
        // console.log(ReactVaporStore.getState().expressionEditors)
    }

    private addExpressionEditor() {
        const newSate = this.state.expressionEditors;
        newSate.push(
            <ExpressionEditorConnected
                key={`${expressionEditorId}-${this.id}`}
                id={`${expressionEditorId}-${this.id}`}
                fields={this.state.fields}
                queryTrigger={this.props.queryTrigger}
                addExpressionEditor={() => this.addExpressionEditor()}
                deleteExpressionEditor={(id: string) => this.deleteExpressionEditor(id)}
                ensureLastEditorCanAddRule={() => this.ensureLastEditorCanAddRule()}
            />,
        );
        this.setState({expressionEditors: newSate});
        this.id++;
    }

    private deleteExpressionEditor(id: string) {
        const updatedExpressionEditors = this.state.expressionEditors;
        const index = updatedExpressionEditors.findIndex((editor) => {
            return editor.props.id === id;
        });
        if (index !== -1) {
            updatedExpressionEditors.splice(index, 1);
        }
        this.setState({expressionEditors: updatedExpressionEditors});
    }

    private ensureLastEditorCanAddRule() {
        // TODO : Fix this it is probably better to use a prop!
        // console.log( this.props.expressionEditorsState)
        const lastEditorId = this.props.expressionEditorsState[this.props.expressionEditorsState.length - 2].id;
        // console.log( lastEditorId)
        ReactVaporStore.dispatch(selectListBoxOption(`${lastEditorId}-${booleanOperatorSelectId}`, false, null));
    }

    private getFinalExpression(nextProps: IFormModeProps) {
        let finaleExpression: string = 'a';
        _.forEach(nextProps.expressionEditorsState, (expressionEditorState) => {
            finaleExpression = finaleExpression.concat(expressionEditorState.expression);
        });
        return finaleExpression;
    }

    render() {
        return (
            <div>
                <Button enabled={true} name={'Log Redux State'} onClick={() => this.logReduxState()} />
                <Button enabled={true} name={'dispatch test'} onClick={() => this.ensureLastEditorCanAddRule()} />
                {this.state.expressionEditors}
            </div>
        );
    }
}
