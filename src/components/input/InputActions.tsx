import { IReduxAction } from '../../utils/ReduxUtils';

export const InputActions = {
    add: 'ADD_INPUT',
    remove: 'REMOVE_INPUT',
    changeValue: 'CHANGE_VALUE_INPUT',
    validateValue: 'VALIDATE_VALUE_INPUT',
};

export interface IInputActionPayload {
    id: string;
    valid?: boolean;
    value?: any;
}

export const addInput = (id: string, value: any, valid = true): IReduxAction<IInputActionPayload> => ({
    type: InputActions.add,
    payload: { id, value, valid },
});

export const removeInput = (id: string): IReduxAction<IInputActionPayload> => ({
    type: InputActions.remove,
    payload: { id },
});

export const changeInputValue = (id: string, value: any, valid = true): IReduxAction<IInputActionPayload> => ({
    type: InputActions.changeValue,
    payload: { id, value, valid },
});

export const validateInputValue = (id: string, valid = true): IReduxAction<IInputActionPayload> => ({
    type: InputActions.validateValue,
    payload: { id, valid },
});