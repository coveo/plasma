import {IReduxAction} from '../../utils/ReduxUtils';

export const LastUpdatedActions = {
    addLastUpdated: 'ADD_LAST_UPDATED',
    removeLastUpdated: 'REMOVE_LAST_UPDATED',
    changeLastUpdated: 'CHANGE_LAST_UPDATED',
};

export interface ILastUpdatedPayload {
    id: string;
}

export const addLastUpdated = (id: string): IReduxAction<ILastUpdatedPayload> => ({
    type: LastUpdatedActions.addLastUpdated,
    payload: {
        id,
    },
});

export const removeLastUpdated = (id: string): IReduxAction<ILastUpdatedPayload> => ({
    type: LastUpdatedActions.removeLastUpdated,
    payload: {
        id,
    },
});

export const changeLastUpdated = (id: string): IReduxAction<ILastUpdatedPayload> => ({
    type: LastUpdatedActions.changeLastUpdated,
    payload: {
        id,
    },
});
