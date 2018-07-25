import * as _ from 'underscore';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction} from '../../utils/ReduxUtils';
import {CollapsibleActions} from './CollapsibleActions';

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

/**
 * @deprecated use collapsibleInitialState instead
 */
export const collapsibleContainerInitialState = collapsibleInitialState;

export const collapsiblesInitialState: CollapsibleState[] = [];

/**
 * @deprecated use collapsiblesInitialState instead
 */
export const collapsibleContainersInitialState = collapsiblesInitialState;

export const collapsibleReducer = (
    state: CollapsibleState = collapsibleInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): CollapsibleState => {
    switch (action.type) {
        case CollapsibleActions.add:
            return {
                id: action.payload.id,
                expanded: action.payload.expanded,
            };
        case CollapsibleActions.setExpanded:
            return state.id === action.payload.id
                ? {...state, expanded: action.payload.expanded}
                : state;
        default:
            return state;
    }
};

/**
 * @deprecated use collapsibleReducer instead
 */
export const collapsibleContainerReducer = collapsibleReducer;

export const collapsiblesReducer = (
    state: CollapsibleState[] = collapsiblesInitialState,
    action: IReduxAction<IReduxActionsPayload>,
): CollapsibleState[] => {
    switch (action.type) {
        case CollapsibleActions.add:
            return [
                ...state,
                collapsibleReducer(undefined, action),
            ];
        case CollapsibleActions.remove:
            return _.reject(state, (collapsible: CollapsibleState) => collapsible.id === action.payload.id);
        case CollapsibleActions.setExpanded:
            return state.map((collapsible: CollapsibleState) => collapsibleReducer(collapsible, action));
        default:
            return state;
    }
};

/**
 * @deprecated use collapsiblesReducer instead
 */
export const collapsibleContainersReducer = collapsiblesReducer;
