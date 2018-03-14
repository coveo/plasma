import * as _ from 'underscore';
import { IReduxAction } from '../../utils/ReduxUtils';
import { ICheckboxState } from './CheckboxReducers';
import { GroupableCheckboxActions, IGroupableCheckboxActionPayload } from './GroupableCheckboxActions';
import {
  addChildCheckbox,
  addParentCheckbox,
  removeChildCheckbox,
  removeParentCheckbox,
  toggleChildCheckbox,
  toggleParentCheckbox,
} from './GroupableCheckboxReducersUtils';

export interface IGroupableCheckboxesState {
  total: number;
  nbChecked: number;
  parentId?: string;
  parent?: ICheckboxState;
  checkboxes: ICheckboxState[];
}

export const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbChecked: 0, checkboxes: []};
export const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];

export const groupableCheckboxReducer = (state: IGroupableCheckboxesState = groupableCheckboxInitialState,
                                         action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState => {
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      return action.payload.isParent
        ? addParentCheckbox(state, action)
        : addChildCheckbox(state, action);

    case GroupableCheckboxActions.toggleGroup:
      if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {
        return action.payload.isParent
          ? toggleParentCheckbox(state, action)
          : toggleChildCheckbox(state, action);

      }
    default:
      return state;
  }
};

export const groupableCheckboxesReducer = (state: IGroupableCheckboxesState[] = groupableCheckboxesInitialState,
                                           action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState[] => {
  let groupableCheckboxesState: IGroupableCheckboxesState;
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      groupableCheckboxesState = _.findWhere(state, {parentId: (action.payload.parentId || action.payload.id)});
      if (state && groupableCheckboxesState) {
        groupableCheckboxReducer(groupableCheckboxesState, action);
        return state;
      }
      return [
        ...state,
        groupableCheckboxReducer(groupableCheckboxesState, action),
      ];
    case GroupableCheckboxActions.removeGroup:
      if (action.payload.isParent) {
        return removeParentCheckbox(state, action);
      }

      groupableCheckboxesState = _.findWhere(state, {parentId: (action.payload.parentId || action.payload.id)});
      if (groupableCheckboxesState) {
        removeChildCheckbox(groupableCheckboxesState, action);
      }
    case GroupableCheckboxActions.toggleGroup:
      return state.map((groupableCheckboxes: IGroupableCheckboxesState) => groupableCheckboxReducer(groupableCheckboxes, action));
    default:
      return state;
  }
};
