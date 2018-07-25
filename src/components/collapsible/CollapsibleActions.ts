import {IReduxAction} from '../../utils/ReduxUtils';

export const CollapsibleActions = {
    add: 'ADD_COLLAPSIBLE',
    remove: 'REMOVE_COLLAPSIBLE',
    setExpanded: 'SET_COLLAPSIBLE_EXPANDED',
};

export interface ILoadingActionPayload {
    id: string;
    expanded?: boolean;
}

/**
 * @deprecated use addCollapsible instead
 */
export const addCollapsibleContainer = (id: string, expanded: boolean): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleActions.add,
    payload: {id, expanded},
});

/**
 * @deprecated use removeCollapsible instead
 */
export const removeCollapsibleContainer = (id: string): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleActions.remove,
    payload: {id},
});

/**
 * @deprecated use setCollapsibleExpanded instead
 */
export const setExpandedCollapsibleContainer = (id: string, expanded: boolean): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleActions.setExpanded,
    payload: {id, expanded},
});

export const addCollapsible = (id: string, expanded: boolean): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleActions.add,
    payload: {id, expanded},
});

export const removeCollapsible = (id: string): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleActions.remove,
    payload: {id},
});

export const setCollapsibleExpanded = (id: string, expanded: boolean): IReduxAction<ILoadingActionPayload> => ({
    type: CollapsibleActions.setExpanded,
    payload: {id, expanded},
});
