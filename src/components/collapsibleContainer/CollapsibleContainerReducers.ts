import { IReduxAction } from '../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../ReactVapor';
import { CollapsibleContainerActions } from './CollapsibleContainerActions';
import * as _ from 'underscore';

export interface ICollapsibleContainerState {
  id: string;
  expanded: boolean;
}

export const collapsibleContainerInitialState: ICollapsibleContainerState = {
  id: undefined,
  expanded: undefined,
};

export const collapsibleContainersInitialState: ICollapsibleContainerState[] = [];

export const collapsibleContainerReducer = (
  state: ICollapsibleContainerState = collapsibleContainerInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): ICollapsibleContainerState => {
  switch (action.type) {
    case CollapsibleContainerActions.add:
      return {
        id: action.payload.id,
        expanded: action.payload.expanded,
      };
    case CollapsibleContainerActions.setExpanded:
      return state.id === action.payload.id
        ? { ...state, expanded: action.payload.expanded }
        : state;
    default:
      return state;
  }
};

export const collapsibleContainersReducer = (
  state: ICollapsibleContainerState[] = collapsibleContainersInitialState,
  action: IReduxAction<IReduxActionsPayload>,
): ICollapsibleContainerState[] => {
  switch (action.type) {
    case CollapsibleContainerActions.add:
      return [
        ...state,
        collapsibleContainerReducer(undefined, action),
      ];
    case CollapsibleContainerActions.remove:
      return _.reject(state, (collapsibleContainer: ICollapsibleContainerState) => collapsibleContainer.id === action.payload.id);
    case CollapsibleContainerActions.setExpanded:
      return state.map((collapsibleContainer: ICollapsibleContainerState) => collapsibleContainerReducer(collapsibleContainer, action));
    default:
      return state;
  }
};
