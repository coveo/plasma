import {IReduxAction} from '../../utils/ReduxUtils';

export const NumericInputActionTypes = {
    mount: 'MOUNT_NUMERIC_INPUT',
    unmount: 'UNMOUNT_NUMERIC_INPUT',
    set: 'SET_NUMERIC_INPUT',
    increment: 'INCREMENT_NUMERIC_INPUT',
};

const mount = (id: string, initialValue: number): IReduxAction<ISetNumericInputPayload> => ({
    type: NumericInputActionTypes.mount,
    payload: {id, value: initialValue},
});

const unmount = (id: string): IReduxAction<{id: string}> => ({
    type: NumericInputActionTypes.unmount,
    payload: {id},
});

export interface ISetNumericInputPayload {
    id: string;
    value: number | string;
    min?: number;
    max?: number;
}

const setValue = (id: string, value: number | string, min?: number, max?: number): IReduxAction<ISetNumericInputPayload> => ({
    type: NumericInputActionTypes.set,
    payload: {id, value, min, max},
});

export const NumericInputActions = {
    mount,
    unmount,
    setValue,
};
