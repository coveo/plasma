import {BasePayload, IReduxAction} from '../../utils/ReduxUtils';

export const CollapsibleActions = {
    add: 'ADD_COLLAPSIBLE',
    remove: 'REMOVE_COLLAPSIBLE',
    setExpanded: 'SET_COLLAPSIBLE_EXPANDED',
};

export interface CollapsiblePayload extends BasePayload {
    expanded?: boolean;
}

export const addCollapsible = (id: string, expanded: boolean): IReduxAction<CollapsiblePayload> => ({
    type: CollapsibleActions.add,
    payload: {id, expanded},
});

/**
 * @deprecated use addCollapsible instead
 */
export const addCollapsibleContainer = addCollapsible;

export const removeCollapsible = (id: string): IReduxAction<CollapsiblePayload> => ({
    type: CollapsibleActions.remove,
    payload: {id},
});
/**
 * @deprecated use removeCollapsible instead
 */
export const removeCollapsibleContainer = removeCollapsible;

export const setCollapsibleExpanded = (id: string, expanded: boolean): IReduxAction<CollapsiblePayload> => ({
    type: CollapsibleActions.setExpanded,
    payload: {id, expanded},
});

/**
 * @deprecated use setCollapsibleExpanded instead
 */
export const setExpandedCollapsibleContainer = setCollapsibleExpanded;
