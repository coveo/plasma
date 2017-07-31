import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import {
  addUniqueSelectedOption,
  dropdownSearchInitialState,
  dropdownSearchReducer,
  getDisplayedOptions,
  getNextIndexPosition,
  getFilteredOptions,
  IDropdownSearchState, removeSelectedOption,
} from '../DropdownSearchReducers';
import { IReduxAction } from '../../../utils/ReduxUtils';
import { FixedQueue } from '../../../utils/FixedQueue';
import { IDropdownOption } from '../DropdownSearch';
import { keyCode } from '../../../utils/InputUtils';

export const multiSelectDropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState => {

  switch (action.type) {
    case DropdownSearchActions.addMultiSelect:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropdown,
        selectedOptions: new FixedQueue<IDropdownOption>(),
        filterText: '',
        isOpened: false,
      };
    case DropdownSearchActions.removeSelectedOption:
      let selectedOptions = removeSelectedOption(state, action.payload.selectedOptionValue);
      let displayedOptions = getDisplayedOptions({ ...state, selectedOptions });
      return {
        ...state,
        id: action.payload.id,
        isOpened: false,
        selectedOptions,
        activeOption: undefined,
        displayedOptions,
      };
    case DropdownSearchActions.removeAllSelectedOptions:
      selectedOptions = new FixedQueue<IDropdownOption>();
      displayedOptions = getDisplayedOptions({ ...state, selectedOptions, });
      return {
        ...state,
        id: action.payload.id,
        selectedOptions,
        displayedOptions,
      };
    case DropdownSearchActions.multiSelect:
      return {
        ...state,
        id: action.payload.id,
        isOpened: true,
        selectedOptions: state.selectedOptions.push(action.payload.addedSelectedOption),
        displayedOptions: getDisplayedOptions(state),
      };
    case DropdownSearchActions.addCustomSelectedOption:
      return {
        ...state,
        id: action.payload.id,
        isOpened: true,
        selectedOptions: addUniqueSelectedOption(state, action.payload.selectedOptionValue),
        displayedOptions: getDisplayedOptions(state),
      };
    case DropdownSearchActions.onKeyDownMultiselect:
      const isFirstSelectedOption = action.payload.keyCode === keyCode.upArrow && state.activeOption === state.options[0];
      const filteredOptions = getFilteredOptions(state);
      if (action.payload.keyCode === keyCode.upArrow || action.payload.keyCode === keyCode.downArrow) {
        return {
          ...state,
          isOpened: !isFirstSelectedOption,
          activeOption: !isFirstSelectedOption ?
            filteredOptions[getNextIndexPosition(filteredOptions, state.activeOption, action.payload.keyCode)] : undefined,
          setFocusOnDropdownButton: isFirstSelectedOption,
        };
      } else if ((action.payload.keyCode === keyCode.enter || action.payload.keyCode === keyCode.tab) && state.activeOption) {
        return {
          ...state,
          id: action.payload.id,
          isOpened: true,
          selectedOptions: state.selectedOptions.push(state.activeOption),
          activeOption: undefined,
          filterText: '',
          setFocusOnDropdownButton: true,
          displayedOptions: getDisplayedOptions(state),
        };
      } else if (((action.payload.keyCode === keyCode.enter || action.payload.keyCode === keyCode.tab) && !state.activeOption && state.filterText)) {
        return {
          ...state,
          id: action.payload.id,
          isOpened: true,
          selectedOptions: addUniqueSelectedOption(state, state.filterText),
          activeOption: undefined,
          filterText: '',
          setFocusOnDropdownButton: true,
          displayedOptions: getDisplayedOptions(state),
        };
      } else if (action.payload.keyCode === keyCode.backspace) {
        if (state.filterText === '') {
          return {
            ...state,
            id: action.payload.id,
            isOpened: true,
            selectedOptions: state.selectedOptions.removeLastElement(),
            activeOption: undefined,
            setFocusOnDropdownButton: true,
            displayedOptions: getDisplayedOptions(state),
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
