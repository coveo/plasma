import * as _ from 'underscore';

import {IReduxAction} from '../../utils/ReduxUtils';
import {CollapsibleActions, CollapsiblePayload} from './CollapsibleActions';

export interface CollapsibleState {
    id: string;
    expanded: boolean;
}

/**
 * @deprecated use CollapsibleState instead
 */
export interface ICollapsibleContainerState extends CollapsibleState {}

export const collapsibleInitialState: CollapsibleState = {
    id: undefined,
    expanded: undefined,
};

export const collapsiblesInitialState: CollapsibleState[] = [];

export const collapsiblesReducer = (
    state: CollapsibleState[] = collapsiblesInitialState,
    action: IReduxAction<CollapsiblePayload>
): CollapsibleState[] => {
    switch (action.type) {
        case CollapsibleActions.add:
            return [...state, action.payload as CollapsibleState];
        case CollapsibleActions.remove:
            return _.reject(state, (collapsible: CollapsibleState) => collapsible.id === action.payload.id);
        case CollapsibleActions.setExpanded:
            return state.map((collapsible: CollapsibleState) =>
                collapsible.id === action.payload.id ? (action.payload as CollapsibleState) : collapsible
            );
        default:
            return state;
    }
};

/**
 * @deprecated use collapsiblesReducer instead
 */
export const collapsibleContainersReducer = collapsiblesReducer;
