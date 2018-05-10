import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';

export interface IFlatSelectActionPayload extends IReduxActionsPayload {
    id: string;
    selectedOptionId?: string;
}

export const FlatSelectActions = {
    add: 'ADD_FLAT_SELECT',
    remove: 'REMOVE_FLAT_SELECT',
    select: 'SELECT_FLAT_SELECT',
};

export const addFlatSelect = (id: string, selectedOptionId: string): IReduxAction<IFlatSelectActionPayload> => ({
    type: FlatSelectActions.add,
    payload: {
        id,
        selectedOptionId,
    },
});

export const removeFlatSelect = (id: string): IReduxAction<IFlatSelectActionPayload> => ({
    type: FlatSelectActions.remove,
    payload: {
        id,
    },
});

export const selectFlatSelect = (id: string, selectedOptionId: string): IReduxAction<IFlatSelectActionPayload> => ({
    type: FlatSelectActions.select,
    payload: {
        id,
        selectedOptionId,
    },
});
