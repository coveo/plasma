import {IReduxAction} from '../../utils/ReduxUtils';

export interface IModalSelectActionPayload {
    id: string;
    value?: string;
}

export const ModalSelectActions = {
    set: 'SET_MODALSELECT',
    remove: 'REMOVE_MODALSELECT',
};

export const setModalSelect = (id: string, value?: string): IReduxAction<IModalSelectActionPayload> => ({
    type: ModalSelectActions.set,
    payload: {
        id,
        value,
    },
});

export const removeModalSelect = (id: string): IReduxAction<IModalSelectActionPayload> => ({
    type: ModalSelectActions.remove,
    payload: {
        id,
    },
});
