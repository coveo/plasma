import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ExpressionEditorActions, IExpressionEditorActionPayload} from './ExpressionEditorActions';

export interface IExpressionEditorState {
    id: string;
    expression?: string;
    booleanOperator?: string;
}

export const expressionEditorState: IExpressionEditorState = {id: '', expression: ''};
export const expressionEditorsInitialState: IExpressionEditorState[] = [];

export const expressionEditorReducer = (
    state: IExpressionEditorState = expressionEditorState,
    action: IReduxAction<IExpressionEditorActionPayload>,
): IExpressionEditorState => {
    switch (action.type) {
        case ExpressionEditorActions.update:
            return {
                ...state,
                id: action.payload.id,
                expression: action.payload.expression,
                booleanOperator: action.payload.booleanOperator,
            };
        default:
            return state;
    }
};

export const expressionEditorsReducer = (
    state: IExpressionEditorState[] = expressionEditorsInitialState,
    action: IReduxAction<IExpressionEditorActionPayload>,
): IExpressionEditorState[] => {
    switch (action.type) {
        case ExpressionEditorActions.update:
            const expressionEditor: IExpressionEditorState = _.findWhere(state, {id: action.payload.id});
            if (expressionEditor == null) {
                return [
                    ...state,
                    expressionEditorReducer(undefined, action),
                ];
            } else {
                return state.map((editor: IExpressionEditorState) => {
                    return editor.id === action.payload.id
                        ? expressionEditorReducer(editor, action)
                        : editor;
                });
            }
        case ExpressionEditorActions.remove:
            return _.reject(state, (editor: IExpressionEditorState) => {
                return action.payload.id === editor.id;
            });
        default:
            return state;
    }
};
