import * as _ from 'underscore';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {ExpressionEditorActions, IExpressionEditorActionPayload} from './ExpressionEditorActions';

export interface IExpressionEditorState {
    id: string;
    expression?: string;
    // disabled: boolean;
}

export const expressionEditorState: IExpressionEditorState = {id: 'initid', expression: 'initial'};
export const expressionEditorsInitialState: IExpressionEditorState[] = [];

export const expressionEditorReducer = (
    state: IExpressionEditorState = expressionEditorState,
    action: IReduxAction<IExpressionEditorActionPayload>,
): IExpressionEditorState => {
    // TODO : add this part when the add/remove will be implemented
    // if (state.id !== action.payload.id) {
    //     return state;
    // }

    switch (action.type) {
        case ExpressionEditorActions.update:
            return {
                ...state,
                id: action.payload.id,
                expression: action.payload.expression,
            };
        default:
            return state;
    }
};

// TODO le reducer est tout croche il faudrait l'arranger quand je vais faire l'ajout des expressions editor
export const expressionEditorsReducer = (
    state: IExpressionEditorState[] = expressionEditorsInitialState,
    action: IReduxAction<IExpressionEditorActionPayload>,
): IExpressionEditorState[] => {
    switch (action.type) {
        case ExpressionEditorActions.update:
            // TODO : Remove when the add/remove will have been implemented
            const expressionEditor: IExpressionEditorState = _.findWhere(state, {id: action.payload.id});

            if (expressionEditor == null) {
                return [
                    ...state,
                    expressionEditorReducer(undefined, action),
                ];
            }
            return state.map((expressionEditors: IExpressionEditorState) => expressionEditorReducer(expressionEditors, action));
        default:
            return state;
    }
};
