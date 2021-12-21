import {IReduxAction} from '../../utils/ReduxUtils';

export const InputActions = {
    add: 'ADD_INPUT',
    remove: 'REMOVE_INPUT',
    changeValue: 'CHANGE_VALUE_INPUT',
    validateValue: 'VALIDATE_VALUE_INPUT',
    setDisabled: 'SET_DISABLED_INPUT',
};

export interface IInputActionPayload {
    id: string;
    valid?: boolean;
    value?: string;
    disabled?: boolean;
}

export const addInput = (
    id: string,
    value = '',
    valid = true,
    disabled = false
): IReduxAction<IInputActionPayload> => ({
    type: InputActions.add,
    payload: {id, value, valid, disabled},
});

export const removeInput = (id: string): IReduxAction<IInputActionPayload> => ({
    type: InputActions.remove,
    payload: {id},
});

export const changeInputValue = (id: string, value = '', valid = true): IReduxAction<IInputActionPayload> => ({
    type: InputActions.changeValue,
    payload: {id, value, valid},
});

export const validateInputValue = (id: string, valid = true): IReduxAction<IInputActionPayload> => ({
    type: InputActions.validateValue,
    payload: {id, valid},
});

export const setDisabledInput = (id: string, disabled = false): IReduxAction<IInputActionPayload> => ({
    type: InputActions.setDisabled,
    payload: {id, disabled},
});
