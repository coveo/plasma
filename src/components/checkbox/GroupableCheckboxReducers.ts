import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ICheckboxState} from './CheckboxReducers';
import {GroupableCheckboxActions, IGroupableCheckboxActionPayload} from './GroupableCheckboxActions';

export interface IGroupableCheckboxesState {
  total: number;
  nbSelected: number;
  parentId?: string;
  parent?: ICheckboxState;
  checkboxes: ICheckboxState[];
}

export const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbSelected: 0, checkboxes: []};
export const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];

export const addParentCheckbox = (
  state: IGroupableCheckboxesState,
  action: IReduxAction<IGroupableCheckboxActionPayload>,
): IGroupableCheckboxesState => {
  const newCheckbox = {
    id: action.payload.id,
    checked: !!action.payload.checked,
  };

  if (state === groupableCheckboxInitialState) {
    return {
      ...state,
      parentId: action.payload.id,
      parent: newCheckbox,
    };
  }

  return {
    ...state,
    parent: newCheckbox,
  };
};

export const addChildCheckbox = (
  state: IGroupableCheckboxesState,
  action: IReduxAction<IGroupableCheckboxActionPayload>,
): IGroupableCheckboxesState => {
  const total: number = state.total += 1;
  const nbSelected: number = state.nbSelected += (action.payload.checked ? 1 : 0);

  return {
    ...state,
    total,
    nbSelected,
    checkboxes: [
      ...state.checkboxes,
      {
        id: action.payload.id,
        checked: !!action.payload.checked,
      },
    ],
  };
};

export const toggleParentGroup = (
  state: IGroupableCheckboxesState,
  action: IReduxAction<IGroupableCheckboxActionPayload>,
): IGroupableCheckboxesState => {
  const isChecked: boolean = !state.parent.checked;
  return {
    ...state,
    parent: {
      id: action.payload.id,
      checked: isChecked,
    },
    checkboxes: _.map(state.checkboxes, (checkbox: ICheckboxState) => {
      return {
        ...checkbox,
        checked: isChecked,
      };
    }),
    nbSelected: isChecked ? state.total : 0,
  };
};

export const toggleGroup = (
  state: IGroupableCheckboxesState,
  action: IReduxAction<IGroupableCheckboxActionPayload>,
): IGroupableCheckboxesState => {
  let isChecked: boolean;
  const checkboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {
    if (checkbox.id === action.payload.id) {
      isChecked = !checkbox.checked;
      return {
        ...checkbox,
        checked: isChecked,
      };
    }
    return checkbox;
  });
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
};

export const groupableCheckboxReducer = (
  state: IGroupableCheckboxesState = groupableCheckboxInitialState,
  action: IReduxAction<IGroupableCheckboxActionPayload>,
): IGroupableCheckboxesState => {
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      return action.payload.isParent ? addParentCheckbox(state, action) : addChildCheckbox(state, action);
    case GroupableCheckboxActions.toggleGroup:
      if (state.parentId === action.payload.id || state.parentId === action.payload.parentId) {
        return action.payload.isParent ? toggleParentGroup(state, action) : toggleGroup(state, action);
      }
    default:
      return state;
  }
};

export const groupableCheckboxesReducer = (
  state: IGroupableCheckboxesState[] = groupableCheckboxesInitialState,
  action: IReduxAction<IGroupableCheckboxActionPayload>,
): IGroupableCheckboxesState[] => {
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state, (groupCheckboxState: IGroupableCheckboxesState) =>
        groupCheckboxState.parentId === action.payload.id || groupCheckboxState.parentId === action.payload.parentId);
      return [
        ...state,
        groupableCheckboxReducer(groupableCheckboxesState, action),
      ];
    case GroupableCheckboxActions.removeGroup:
      if (action.payload.isParent) {
        _.reject(state, (checkbox: IGroupableCheckboxesState) => action.payload.id === checkbox.parentId);
      }
    case GroupableCheckboxActions.toggleGroup:
      return state.map((groupableCheckboxes: IGroupableCheckboxesState) => groupableCheckboxReducer(groupableCheckboxes, action));
    default:
      return state;
  }
};
