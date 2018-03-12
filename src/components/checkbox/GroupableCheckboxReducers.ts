import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ICheckboxState} from './CheckboxReducers';
import {GroupableCheckboxActions, IGroupableCheckboxActionPayload} from './GroupableCheckboxActions';
import {addChildCheckbox, addParentCheckbox, removeChildCheckbox, removeParentCheckbox} from './GroupableCheckboxReducersUtils';

export interface IGroupableCheckboxesState {
  total: number;
  nbSelected: number;
  parentId?: string;
  parent?: ICheckboxState;
  checkboxes: ICheckboxState[];
}

export const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbSelected: 0, checkboxes: []};
export const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];

export const groupableCheckboxReducer = (state: IGroupableCheckboxesState = groupableCheckboxInitialState,
                                         action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState => {
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      if (action.payload.isParent) {
        return addParentCheckbox(state, action);
      }
      return addChildCheckbox(state, action);

    case GroupableCheckboxActions.toggleGroup:
      if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {
        let isChecked: boolean;
        if (action.payload.isParent) {
          isChecked = !state.parent.checked;
          return {
            ...state,
            parent: {
              id: action.payload.id,
              checked: isChecked,
            },
            checkboxes: _.map(state.checkboxes, (checkbox: ICheckboxState) => {
              checkbox.checked = isChecked;
              return checkbox;
            }),
            nbSelected: isChecked ? state.total : 0,
          };
        }
        const checkboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {
          if (checkbox.id === action.payload.id) {
            isChecked = !checkbox.checked;
            return {
              id: checkbox.id,
              checked: isChecked,
            };
          }
          return checkbox;
        });
        if (checkboxes) {
          const nbSelected: number = state.nbSelected += (isChecked ? 1 : -1);
          return {
            ...state,
            parent: {
              id: action.payload.parentId,
              checked: nbSelected === state.total,
            },
            nbSelected,
            checkboxes: [...checkboxes],
          };
        }
      }
      return state;
    default:
      return state;
  }
};

export const groupableCheckboxesReducer = (state: IGroupableCheckboxesState[] = groupableCheckboxesInitialState,
                                           action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState[] => {
  let groupableCheckboxesState: IGroupableCheckboxesState;
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      groupableCheckboxesState = _.findWhere(state, { parentId: (action.payload.parentId || action.payload.id) });
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

      groupableCheckboxesState = _.findWhere(state, { parentId: (action.payload.parentId || action.payload.id) });
      if (groupableCheckboxesState) {
        removeChildCheckbox(groupableCheckboxesState, action);
      }
      return state;
    case GroupableCheckboxActions.toggleGroup:
      return state.map((groupableCheckboxes: IGroupableCheckboxesState) => groupableCheckboxReducer(groupableCheckboxes, action));
    default:
      return state;
  }
};
