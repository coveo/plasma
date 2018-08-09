import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {ICheckboxActionPayload} from '../../checkbox/CheckboxActions';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {fieldSelectId} from '../fieldSelect/FieldSelect';
import {operatorSelectId} from '../operatorSelect/OperatorSelect';
import {fieldValueSelectId} from '../valueSelect/ValueSelect';
import {ExpressionEditor, IExpressionEditorDispatchProps, IExpressionEditorOwnProps, IExpressionEditorProps, IExpressionEditorStateProps} from './ExpressionEditor';
import {removeExpressionEditor, updateExpressionEditor} from './ExpressionEditorActions';
import {IExpressionEditorState} from './ExpressionEditorReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IExpressionEditorOwnProps): IExpressionEditorStateProps => {
    const expressionEditor: IExpressionEditorState = _.findWhere(state.expressionEditors, {id: ownProps.id});
    const operatorSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.id}-${operatorSelectId}`});
    const fieldSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.id}-${fieldSelectId}`});
    const fieldValuesSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.id}-${fieldValueSelectId}`});

    return {
        expression: expressionEditor && expressionEditor.expression ? expressionEditor.expression : undefined,
        booleanOperator: expressionEditor && expressionEditor.booleanOperator ? expressionEditor.booleanOperator : undefined,
        selectedOperator: operatorSelect && operatorSelect.selected ? operatorSelect.selected[0] : undefined,
        selectedField: fieldSelect && fieldSelect.selected ? fieldSelect.selected[0] : undefined,
        selectedFieldValues: fieldValuesSelect && fieldValuesSelect.selected ? fieldValuesSelect.selected : undefined,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void, ownProps: IExpressionEditorOwnProps): IExpressionEditorDispatchProps => {
    return {
        update: (expression: string, booleanOperator: string) => dispatch(updateExpressionEditor(ownProps.id, expression, booleanOperator)),
        remove: () => dispatch(removeExpressionEditor(ownProps.id)),
    };
};

export const ExpressionEditorConnected: React.ComponentClass<IExpressionEditorProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ExpressionEditor);
