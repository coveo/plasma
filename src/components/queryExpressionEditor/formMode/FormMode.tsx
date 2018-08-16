import * as React from 'react';
import * as _ from 'underscore';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {selectListBoxOption} from '../../listBox/ListBoxActions';
import {booleanOperatorSelectId} from '../booleanOperatorSelect/BooleanOperatorSelect';
import {ExpressionEditorConnected} from '../expressionEditor/ExpressionEditorConnected';
import {IExpressionEditorState} from '../expressionEditor/ExpressionEditorReducers';
import {QueryTrigger} from '../queryTrigger/QueryTrigger';
import {IField} from '../responseParser/ResponseParser';
import * as styles from './FormMode.scss';
import {convertUndefinedAndNullToEmptyString} from '../../../utils/FalsyValuesUtils';
// import {Button} from '../../button/Button';

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
        const finaleExpression = this.getFinalExpression(nextProps);
        this.props.updateQueryExpression(finaleExpression);
    }

    async componentDidMount() {
        const getfields = await this.props.queryTrigger.getFields();
        this.setState({fields: getfields});
        this.addExpressionEditor();
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
        const lastEditorId = this.props.expressionEditorsState[this.props.expressionEditorsState.length - 2].id;
        ReactVaporStore.dispatch(selectListBoxOption(`${lastEditorId}-${booleanOperatorSelectId}`, false, null));
    }

    private getFinalExpression(nextProps: IFormModeProps) {
        let finaleExpression: string = '';
        const expressions: IExpressionEditorState[] = nextProps.expressionEditorsState;
        for (let i = 0; i < expressions.length; i++) {
            const expression: string = convertUndefinedAndNullToEmptyString(expressions[i].expression);
            let booleanOperator: string = convertUndefinedAndNullToEmptyString(expressions[i].booleanOperator);

            if (expression === '') {
                booleanOperator = '';
            }

            if (this.nextExpressionIsNotDefined(i, expressions)) {
                booleanOperator = '';
            }

            const completeExpression: string = `${expression} ${booleanOperator} `;

            finaleExpression = finaleExpression.concat(completeExpression);
        };
        return finaleExpression;
    }

    private nextExpressionIsNotDefined(i: number, expressions: IExpressionEditorState[]): boolean {
        if (i === expressions.length - 1) {
            return true;
        }

        const nextExpressionState: IExpressionEditorState = expressions[i + 1];
        if (_.isNull(nextExpressionState) || _.isUndefined(nextExpressionState)) {
            return true;
        } 

        const nextExpression: string = convertUndefinedAndNullToEmptyString(nextExpressionState.expression);
        if (nextExpression === '') {
            return true;
        }
        
        return false;
    }
    
    // TODO : Temporary function for debugging
    // private logReduxState() {
    //     console.log(ReactVaporStore.getState())
    // }

    render() {
        return (
            <div className={styles.expressionEditorsContainer}>
                <div className='text-medium-blue mt4 ml4'>
                    Build your query by selecting the desired parameters in the form.
                </div>
                {/* TODO : Temporary button for debugging */}
                {/* <Button enabled={true} name={'Log Redux State'} onClick={() => this.logReduxState()} />  */}
                <div className='mt3'>
                    {this.state.expressionEditors}
                </div>
            </div>
        );
    }
}
