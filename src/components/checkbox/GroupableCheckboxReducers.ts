import * as _ from 'underscore';
import { IReduxAction } from '../../utils/ReduxUtils';
import { ICheckboxState } from './CheckboxReducers';
import { GroupableCheckboxActions, IGroupableCheckboxActionPayload } from './GroupableCheckboxActions';

export interface IGroupableCheckboxesState {
  total: number;
  nbSelected: number;
  parentId?: string;
  parent?: ICheckboxState;
  checkboxes: ICheckboxState[];
}

export const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbSelected: 0, checkboxes: []};
export const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];

export const addParentCheckbox = (state: IGroupableCheckboxesState,
                                  action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState => {
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

  state.parent = newCheckbox;
  return state;
};

export const addChildCheckbox = (state: IGroupableCheckboxesState,
                                 action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState => {
  const newChecboxes: ICheckboxState[] = state.checkboxes.concat({
    id: action.payload.id,
    checked: !!action.payload.checked,
  });

  const total: number = state.total + 1;
  const nbSelected: number = state.nbSelected + (action.payload.checked ? 1 : 0);

  if (state === groupableCheckboxInitialState) {
    return {
      ...state,
      total,
      nbSelected,
      checkboxes: newChecboxes,
      parentId: action.payload.parentId,
    };
  }

  return {...state,
    checkboxes: newChecboxes,
    total,
    nbSelected,
  };
};

export const groupableCheckboxReducer = (state: IGroupableCheckboxesState = groupableCheckboxInitialState,
                                         action: IReduxAction<IGroupableCheckboxActionPayload>): IGroupableCheckboxesState => {
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      if (action.payload.isParent) {
        return addParentCheckbox(state, action);
      }
      return addChildCheckbox(state, action);
    case GroupableCheckboxActions.removeGroup:
      if (state.parentId === action.payload.parentId) {
        let isChecked: boolean = false;
        const newCheckboxes = _.reject(state.checkboxes, (checkbox: ICheckboxState) => {
          const reject: boolean = checkbox.id === action.payload.id;
          isChecked = reject ? checkbox.checked : isChecked;
          return reject;
      });

        const total: number = state.total - 1;
        const nbSelected: number = isChecked ? state.nbSelected - 1 : state.nbSelected;
        return {
          ...state,
          checkboxes: newCheckboxes,
          nbSelected,
          total,
        };
      }
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
  switch (action.type) {
    case GroupableCheckboxActions.addGroup:
      const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state, (groupCheckboxState: IGroupableCheckboxesState) =>
        groupCheckboxState.parentId === action.payload.id || groupCheckboxState.parentId === action.payload.parentId);
      if (state && groupableCheckboxesState) {
        state = _.reject(state, (groupableCheckboxes: IGroupableCheckboxesState) =>
          groupableCheckboxes.parentId === action.payload.id || groupableCheckboxes.parentId === action.payload.parentId);
        return [...state, groupableCheckboxReducer(groupableCheckboxesState, action)];
      }
      return [
        ...state,
        groupableCheckboxReducer(groupableCheckboxesState, action),
      ];
    case GroupableCheckboxActions.removeGroup:
      if (action.payload.parentId) {
        const groupCheckboxesState: IGroupableCheckboxesState = _.findWhere(state, (groupCheckboxState: IGroupableCheckboxesState) =>
          groupCheckboxState.parentId === action.payload.id || groupCheckboxState.parentId === action.payload.parentId);
        if (state && groupCheckboxesState) {
          return [
            ...state,
            groupableCheckboxReducer(groupCheckboxesState, action),
          ];
        }
      } else {
        _.reject(state, (checkbox: IGroupableCheckboxesState) => {
          return action.payload.id === checkbox.parentId;
        });
      }
    case GroupableCheckboxActions.toggleGroup:
      return state.map((groupableCheckboxes: IGroupableCheckboxesState) => groupableCheckboxReducer(groupableCheckboxes, action));
    default:
      return state;
  }
};
