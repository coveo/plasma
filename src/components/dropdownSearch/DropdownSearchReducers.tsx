import { IReduxAction } from '../../utils/ReduxUtils';
import { IDropdownOption, IDropdownSearchState } from './DropdownSearch';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from './DropdownSearchActions';
import * as _ from 'underscore';

export const defaultSelectedOption: IDropdownOption = {
  value: 'Select an option',
};

export const dropdownSearchInitialState: IDropdownSearchState = {
  id: undefined,
  isOpened: false,
};
export const dropdownsSearchInitialState: IDropdownSearchState[] = [];

export const dropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState => {
  switch (action.type) {
    case DropdownSearchActions.toggle:
      if (action.payload.id !== state.id) {
        return state;
      }
      return {
        ...state,
        isOpened: !state.isOpened,
        filterText: '',
      };
    case DropdownSearchActions.update:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropDown,
      };
    case DropdownSearchActions.filter:
      return {
        ...state,
        id: action.payload.id,
        filterText: action.payload.filterText,
      };
    case DropdownSearchActions.update:
      return {
        ...state,
        id: action.payload.id,
        selectedOption: action.payload.selectedOption,
      };
    case DropdownSearchActions.select:
      return {
        ...state,
        id: action.payload.id,
        selectedOption: action.payload.selectedOption,
        isOpened: false,
      };
    case DropdownSearchActions.add:
      return {
        id: action.payload.id,
        options: action.payload.optionsDropDown,
        selectedOption: action.payload.selectedOption,
        isOpened: false,
      };
    default:
      return state;
  }
};

export const dropdownsSearchReducer = (state: IDropdownSearchState[] = dropdownsSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState[] => {
  switch (action.type) {
    case DropdownSearchActions.update:
    case DropdownSearchActions.filter:
    case DropdownSearchActions.toggle:
    case DropdownSearchActions.select:
      return state.map((dropdownSearch: IDropdownSearchState) => {
        if (dropdownSearch.id === action.payload.id) {
          return dropdownSearchReducer(dropdownSearch, action);
        } else {
          return dropdownSearch;
        }
      });
    case DropdownSearchActions.add:
      return [
        ...state,
        dropdownSearchReducer(undefined, action),
      ];
    case DropdownSearchActions.remove:
      return _.reject(state, (dropdown: IDropdownSearchState) => {
        return action.payload.id === dropdown.id;
      });
    default:
      return state;
  }
};
