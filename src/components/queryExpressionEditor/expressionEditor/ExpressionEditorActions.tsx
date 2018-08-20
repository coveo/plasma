import {IReduxAction} from '../../../utils/ReduxUtils';

export interface IExpressionEditorActionPayload {
    id: string;
    expression?: string;
    booleanOperator?: string;
}

export const ExpressionEditorActions = {
    update: 'UPDATE_EXPRESSION_EDITOR',
    remove: 'REMOVE_EXPRESSION_EDITOR',
};

export const updateExpressionEditor = (id: string, expression?: string, booleanOperator?: string): IReduxAction<IExpressionEditorActionPayload> => ({
    type: ExpressionEditorActions.update,
    payload: {
        id,
        expression,
        booleanOperator,
    },
});

export const removeExpressionEditor = (id: string): IReduxAction<IExpressionEditorActionPayload> => ({
    type: ExpressionEditorActions.remove,
    payload: {
        id,
    },
});
