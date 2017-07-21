import { IReduxAction } from '../../utils/ReduxUtils';
import { IDropdownOption } from './DropdownSearch';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from './DropdownSearchActions';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import { keyCode } from '../../utils/InputUtils';
import {FixedQueue} from '../../utils/FixedQueue';
import {multiSelectDropdownSearchReducer} from './MultiSelectDropdownSearch/MultiSelectDropdownSearchReducer';

export interface IDropdownSearchState {
  id: string;
  isOpened?: boolean;
  filterText?: string;
  options?: IDropdownOption[];
  selectedOptions?: FixedQueue<IDropdownOption>;
  selectedOption?: IDropdownOption;
  activeOption?: IDropdownOption;
  setFocusOnDropdownButton?: boolean;
}

export const defaultSelectedOption: IDropdownOption = {
  value: 'Select an option',
};

export const dropdownSearchInitialState: IDropdownSearchState = {
  id: undefined,
  isOpened: false,
};
export const dropdownsSearchInitialState: IDropdownSearchState[] = [];

export const getNextIndexPosition = (array: any[], item: any, key: number): number => {
  let index: number = array.indexOf(item);

  if (index === -1) {
    return 0;
  } else if (item) {
    if (key === keyCode.upArrow) {
      index -= 1;
    } else if (key === keyCode.downArrow) {
      index += 1;
    }
  }
  if (index >= array.length - 1) {
    return array.length - 1;
  }

  return index;
};

export const getOptionsFiltered = (state: IDropdownSearchState, filterText?: string) => {
  const currentFilterText: string = filterText || state.filterText;
  return _.filter(state.options,
    (option: IDropdownOption) => {
      const value = option.displayValue || option.value;
      return _.isEmpty(currentFilterText) || s.contains(value.toLowerCase(), (currentFilterText).toLowerCase());
    });
};

export const dropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState => {
  const removeSelectedOption = function () {
    return new FixedQueue<IDropdownOption>(_.filter(state.selectedOptions.getQueue(),
      (selectedOption: IDropdownOption) => {
        return selectedOption.displayValue != action.payload.selectedOptionValue;
      }
    ));
  };
  switch (action.type) {
    case DropdownSearchActions.toggle:
      return {
        ...state,
        isOpened: !state.isOpened,
        filterText: '',
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.update:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropdown,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.filter:
      return {
        ...state,
        id: action.payload.id,
        filterText: action.payload.filterText,
        activeOption: getOptionsFiltered(state, action.payload.filterText)[0] || state.activeOption,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.select:
      state.selectedOptions.push(action.payload.addedSelectedOption);
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: state.selectedOptions,
        isOpened: false,
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.removeSelectedOption:
      const selectedOptions = removeSelectedOption();
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: selectedOptions,
        isOpened: false,
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.add:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropdown,
        selectedOptions: new FixedQueue<IDropdownOption>([], 1),
        filterText: action.payload.filterText,
        isOpened: false,
      };
    case DropdownSearchActions.active:
      if (action.payload.keyCode === keyCode.upArrow || action.payload.keyCode === keyCode.downArrow) {
        const isFirstSelectedOption = action.payload.keyCode === keyCode.upArrow && state.activeOption === state.options[0];
        const optionsFiltered = getOptionsFiltered(state);
        return {
          ...state,
          isOpened: !isFirstSelectedOption,
          activeOption: !isFirstSelectedOption ?
            optionsFiltered[getNextIndexPosition(optionsFiltered, state.activeOption, action.payload.keyCode)] : undefined,
          setFocusOnDropdownButton: isFirstSelectedOption,
        };
      } else if ((action.payload.keyCode === keyCode.enter || action.payload.keyCode === keyCode.tab) && state.activeOption) {
        return {
          ...state,
          id: action.payload.id,
          selectedOption: state.activeOption,
          isOpened: false,
          activeOption: undefined,
          setFocusOnDropdownButton: true,
        };
      } else if (action.payload.keyCode === -1) {
        return {
          ...state,
          id: action.payload.id,
          activeOption: undefined,
          setFocusOnDropdownButton: false,
        };
      }

      return state;
    default:
      return state;
  }
};

export const dropdownsSearchReducer = (state: IDropdownSearchState[] = dropdownsSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState[] => {
  switch (action.type) {
    case DropdownSearchActions.update:
    case DropdownSearchActions.filter:
    case DropdownSearchActions.active:
    case DropdownSearchActions.toggle:
    case DropdownSearchActions.select:
    case DropdownSearchActions.removeSelectedOption:
      return state.map((dropdownSearch: IDropdownSearchState) => {
        if (dropdownSearch.id === action.payload.id) {
          return dropdownSearchReducer(dropdownSearch, action);
        }
        return dropdownSearch;
      });
    case DropdownSearchActions.add:
      return [
        ...state,
        dropdownSearchReducer(undefined, action),
      ];
    case DropdownSearchActions.addMultiSelect:
      return [
        ...state,
        multiSelectDropdownSearchReducer(undefined, action),
      ];
    case DropdownSearchActions.remove:
      return _.reject(state, (dropdown: IDropdownSearchState) => {
        return action.payload.id === dropdown.id;
      });
    default:
      return state;
  }
};
