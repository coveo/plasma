import {IReduxAction} from '../../utils/ReduxUtils';

export interface ISubNavigationActionPayload {
    id: string;
    selected?: string;
}

export const SubNavigationActions = {
    add: 'ADD_SUB_NAVIGATION',
    remove: 'REMOVE_SUB_NAVIGATION',
    select: 'SELECT_SUB_NAVIGATION',
};

export const addSubNavigation = (id: string, itemsId: string[]): IReduxAction<ISubNavigationActionPayload> => ({
    type: SubNavigationActions.add,
    payload: {
        id,
        selected: itemsId.length ? itemsId[0] : '',
    },
});

export const removeSubNavigation = (id: string): IReduxAction<ISubNavigationActionPayload> => ({
    type: SubNavigationActions.remove,
    payload: {
        id,
    },
});

export const selectSubNavigation = (id: string, selected: string): IReduxAction<ISubNavigationActionPayload> => ({
    type: SubNavigationActions.select,
    payload: {
        id,
        selected,
    },
});
