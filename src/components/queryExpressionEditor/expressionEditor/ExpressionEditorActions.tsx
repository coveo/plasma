import { IReduxAction } from '../../../utils/ReduxUtils';

export interface IExpressionEditorActionPayload {
    id: string;
    expression?: string;
    // disabled?: boolean;
}

export const ExpressionEditorActions = {
    update: 'UPDATE_EXPRESSION_EDITOR',
};

export const updateExpressionEditor = (id: string, expression?: string): IReduxAction<IExpressionEditorActionPayload> => ({
    type: ExpressionEditorActions.update,
    payload: {
        id,
        expression,
    },
});


