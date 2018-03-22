import {IReduxAction} from '../../utils/ReduxUtils';

export interface ITabActionPayload {
    groupId: string;
    id: string;
}

export const TabAction = {
    selectTab: 'SELECT_TAB',
    addTab: 'ADD_TAB',
    removeTab: 'REMOVE_TAB',
};

export const selectTab = (id: string, groupId?: string): IReduxAction<ITabActionPayload> => ({
    type: TabAction.selectTab,
    payload: {
        groupId,
        id,
    },
});

export const addTab = (id: string, groupId?: string): IReduxAction<ITabActionPayload> => ({
    type: TabAction.addTab,
    payload: {
        groupId,
        id,
    },
});

export const removeTab = (id: string, groupId?: string): IReduxAction<ITabActionPayload> => ({
    type: TabAction.removeTab,
    payload: {
        groupId,
        id,
    },
});
