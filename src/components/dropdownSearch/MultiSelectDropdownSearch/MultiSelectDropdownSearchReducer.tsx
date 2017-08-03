import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import {
  addUniqueSelectedOption,
  dropdownSearchInitialState,
  dropdownSearchReducer,
  getNextIndexPosition,
  getFilteredOptions,
  IDropdownSearchState, removeSelectedOption, removeAllSelectedOption, selectOption, removeLastSelectedOption,
} from '../DropdownSearchReducers';
import { IReduxAction } from '../../../utils/ReduxUtils';
import { keyCode } from '../../../utils/InputUtils';
import * as _ from 'underscore';

export const multiSelectDropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState => {

  switch (action.type) {
    case DropdownSearchActions.addMultiSelect:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropdown,
        selectedOptions: [],
        filterText: '',
        isOpened: false,
      };
    case DropdownSearchActions.removeSelectedOption:
      return {
        ...state,
        options: removeSelectedOption(state.options, action.payload.selectedOptionValue),
        id: action.payload.id,
        isOpened: false,
        activeOption: undefined,
      };
    case DropdownSearchActions.removeAllSelectedOptions:
      return {
        ...state,
        options: removeAllSelectedOption(state.options),
        id: action.payload.id,
      };
    case DropdownSearchActions.multiSelect:
      return {
        ...state,
        options: selectOption(state.options, action.payload.addedSelectedOption),
        id: action.payload.id,
        isOpened: true,
      };
    case DropdownSearchActions.addCustomSelectedOption:
      return {
        ...state,
        options: addUniqueSelectedOption(state.options, action.payload.selectedOptionValue),
        id: action.payload.id,
        isOpened: true,
      };
    case DropdownSearchActions.onKeyDownMultiselect:
      const isFirstSelectedOption = action.payload.keyCode === keyCode.upArrow && state.activeOption === state.options[0];
      const filteredOptions = getFilteredOptions(state);
      if (_.contains([keyCode.upArrow, keyCode.downArrow], action.payload.keyCode)) {
        return {
          ...state,
          isOpened: !isFirstSelectedOption,
          activeOption: !isFirstSelectedOption ?
            filteredOptions[getNextIndexPosition(filteredOptions, state.activeOption, action.payload.keyCode)] : undefined,
          setFocusOnDropdownButton: isFirstSelectedOption,
        };
      } else if (_.contains([keyCode.enter, keyCode.tab], action.payload.keyCode) && state.activeOption) {

        return {
          ...state,
          options: selectOption(state.options, state.activeOption),
          id: action.payload.id,
          isOpened: true,
          activeOption: undefined,
          filterText: '',
          setFocusOnDropdownButton: true,
        };
      } else if ((_.contains([keyCode.enter, keyCode.tab], action.payload.keyCode) && !state.activeOption && state.filterText)) {
        return {
          ...state,
          options: addUniqueSelectedOption(state.options, state.filterText),
          id: action.payload.id,
          isOpened: true,
          activeOption: undefined,
          filterText: '',
          setFocusOnDropdownButton: true,
        };
      } else if (action.payload.keyCode === keyCode.backspace) {
        if (state.filterText === '') {
          return {
            ...state,
            options: removeLastSelectedOption(state.options),
            id: action.payload.id,
            isOpened: true,
            activeOption: undefined,
            setFocusOnDropdownButton: true,
          };
        }
      } else if (action.payload.keyCode === keyCode.escape) {
        return {
          ...state,
          isOpened: false,
        };
      } else if (action.payload.keyCode === -1) {
        return {
          ...state,
          id: action.payload.id,
          activeOption: undefined,
          setFocusOnDropdownButton: false,
        };
      }
      return {
        ...state,
        id: action.payload.id,
        activeOption: undefined,
        isOpened: true,
        setFocusOnDropdownButton: false,
      };
    default:
      return dropdownSearchReducer(state, action);
  }
};
