import {IReduxAction} from '../../utils/ReduxUtils';

export const CollapsibleContainerActions = {
    add: 'ADD_COLLAPSIBLE_CONTAINER',
    remove: 'REMOVE_COLLAPSIBLE_CONTAINER',
    setExpanded: 'SET_EXPANDED_COLLAPSIBLE_CONTAINER',
};

export interface ILoadingActionPayload {
    id: string;
    expanded?: boolean;
}

export const addCollapsibleContainer = (id: string, expanded: boolean): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleContainerActions.add,
    payload: {id, expanded},
});

export const removeCollapsibleContainer = (id: string): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleContainerActions.remove,
    payload: {id},
});

export const setExpandedCollapsibleContainer = (id: string, expanded: boolean): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleContainerActions.setExpanded,
    payload: {id, expanded},
});
