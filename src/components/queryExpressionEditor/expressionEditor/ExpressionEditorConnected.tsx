import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {ICheckboxActionPayload} from '../../checkbox/CheckboxActions';
import {IDropdownOption} from '../../dropdownSearch/DropdownSearch';
import {IDropdownSearchState} from '../../dropdownSearch/DropdownSearchReducers';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {FIELD_SELECT_ID} from '../fieldSelect/FieldSelect';
import {OPERATOR_SELECT_ID} from '../operatorSelect/OperatorSelect';
import {ExpressionEditor, IExpressionEditorDispatchProps, IExpressionEditorOwnProps, IExpressionEditorProps, IExpressionEditorStateProps} from './ExpressionEditor';
import {removeExpressionEditor, updateExpressionEditor} from './ExpressionEditorActions';
import {IExpressionEditorState} from './ExpressionEditorReducers';

// TODO QUESTION R-V :
// Is this the only way to get the selected option from a DropdownSearchConnected selector?
// Note : Duplication of code with ValueSelectStringConnected.tsx
function getSelectedOption(options: IDropdownOption[]): string {
    const selectedOption: IDropdownOption = _.findWhere(options, {selected: true});
    return selectedOption.value;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IExpressionEditorOwnProps): IExpressionEditorStateProps => {
    const expressionEditors: IExpressionEditorState[] = state.expressionEditors && state.expressionEditors;
    const expressionEditor: IExpressionEditorState = _.findWhere(state.expressionEditors, {id: ownProps.id});
    const fieldSelect: IDropdownSearchState = _.findWhere(state.dropdownSearch, {id: `${ownProps.id}-${FIELD_SELECT_ID}`});
    const operatorSelect: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.id}-${OPERATOR_SELECT_ID}`});

    return {
        isExpressionEditorAlone: expressionEditors && expressionEditors.length ? expressionEditors.length === 1 : undefined,
        expression: expressionEditor && expressionEditor.expression ? expressionEditor.expression : undefined,
        booleanOperator: expressionEditor && expressionEditor.booleanOperator ? expressionEditor.booleanOperator : undefined,
        selectedField: fieldSelect && fieldSelect.options ? getSelectedOption(fieldSelect.options) : undefined,
        selectedOperator: operatorSelect && operatorSelect.selected ? operatorSelect.selected[0] : undefined,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<ICheckboxActionPayload>) => void, ownProps: IExpressionEditorOwnProps): IExpressionEditorDispatchProps => {
    return {
        updateExpression: (expression: string, booleanOperator: string) => dispatch(updateExpressionEditor(ownProps.id, expression, booleanOperator)),
        removeExpressionEditorState: () => dispatch(removeExpressionEditor(ownProps.id)),
    };
};

export const ExpressionEditorConnected: React.ComponentClass<IExpressionEditorProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ExpressionEditor);
