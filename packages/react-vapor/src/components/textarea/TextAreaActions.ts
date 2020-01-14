import {IReduxAction} from '../../utils/ReduxUtils';

export const TextAreaActions = {
    add: 'ADD_TEXTAREA',
    remove: 'REMOVE_TEXTAREA',
    changeValue: 'CHANGE_VALUE_TEXTAREA',
    setDisabled: 'SET_DISABLED_TEXTAREA',
};

export interface ITextAreaActionPayload {
    id: string;
    value?: string;
    disabled?: boolean;
}

export const addTextArea = (id: string, value = '', disabled = false): IReduxAction<ITextAreaActionPayload> => ({
    type: TextAreaActions.add,
    payload: {id, value, disabled},
});

export const removeTextArea = (id: string): IReduxAction<ITextAreaActionPayload> => ({
    type: TextAreaActions.remove,
    payload: {id},
});

export const changeTextAreaValue = (id: string, value = ''): IReduxAction<ITextAreaActionPayload> => ({
    type: TextAreaActions.changeValue,
    payload: {id, value},
});

export const setDisabledTextArea = (id: string, disabled = false): IReduxAction<ITextAreaActionPayload> => ({
    type: TextAreaActions.setDisabled,
    payload: {id, disabled},
});

export const TextAreaReduxActions = {
    addTextArea,
    removeTextArea,
    changeTextAreaValue,
    setDisabledTextArea,
};
