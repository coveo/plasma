import {IReduxAction} from '../../utils/ReduxUtils';

export interface IRadioSelectActionPayload {
    id: string;
    value?: string;
    disabledValues?: string[];
}

export const RadioSelectActions = {
    set: 'SET_RADIOSELECT',
    remove: 'REMOVE_RADIOSELECT',
};

export const setRadioSelect = (id: string, state: {value?: string, disabledValues?: string[]}): IReduxAction<IRadioSelectActionPayload> => ({
    type: RadioSelectActions.set,
    payload: {
        id,
        ...state,
    },
});

export const removeRadioSelect = (id: string): IReduxAction<IRadioSelectActionPayload> => ({
    type: RadioSelectActions.remove,
    payload: {
        id,
    },
});
