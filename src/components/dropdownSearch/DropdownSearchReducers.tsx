import { IReduxAction } from '../../utils/ReduxUtils';
import { IDropdownOption } from './DropdownSearch';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from './DropdownSearchActions';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import { keyCode } from '../../utils/InputUtils';
import {FixedQueue} from '../../utils/FixedQueue';
import {multiSelectDropdownSearchReducer} from './MultiSelectDropdownSearch/MultiSelectDropdownSearchReducer';
import {UUID} from '../../utils/UUID';

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

  const removeSelectedOption = (displayValue: string): FixedQueue<IDropdownOption> => {
    return new FixedQueue<IDropdownOption>(_.filter(state.selectedOptions.getQueue(),
      (selectedOption: IDropdownOption) => {
        return selectedOption.displayValue != displayValue;
      }
    ));
  };

  const addUniqueSelectedOption = (displayValue: string): FixedQueue<IDropdownOption> => {
    return removeSelectedOption(displayValue).push({value: UUID.generate(), displayValue: displayValue});
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
    case DropdownSearchActions.open:
      return {
        ...state,
        isOpened: true,
        filterText: '',
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.close:
      return {
        ...state,
        isOpened: false,
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
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: state.selectedOptions.push(action.payload.addedSelectedOption),
        isOpened: false,
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.removeSelectedOption:
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: removeSelectedOption(action.payload.selectedOptionValue),
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
      const isFirstSelectedOption = action.payload.keyCode === keyCode.upArrow && state.activeOption === state.options[0];
      const optionsFiltered = getOptionsFiltered(state);
      if (action.payload.keyCode === keyCode.upArrow || action.payload.keyCode === keyCode.downArrow) {
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
          isOpened: false,
          selectedOptions: state.selectedOptions.push(state.activeOption),
          activeOption: undefined,
          filterText: '',
          setFocusOnDropdownButton: true,
        };
      } else if (((action.payload.keyCode === keyCode.enter || action.payload.keyCode === keyCode.tab ) && !state.activeOption && state.filterText != '' && state.selectedOptions.getMaxLength() > 1)) {
          return {
            ...state,
            id: action.payload.id,
            isOpened: false,
            selectedOptions: addUniqueSelectedOption(state.filterText),
            activeOption: undefined,
            filterText: '',
            setFocusOnDropdownButton: true,
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
          };
        }
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
    case DropdownSearchActions.open:
    case DropdownSearchActions.close:
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
    case DropdownSearchActions.removeAllSelectedOptions:
    case DropdownSearchActions.multiSelect:
      return state.map((dropdownSearch: IDropdownSearchState) => {
        if (dropdownSearch.id === action.payload.id) {
          return multiSelectDropdownSearchReducer(dropdownSearch, action);
        }
        return dropdownSearch;
      });
    case DropdownSearchActions.remove:
      return _.reject(state, (dropdown: IDropdownSearchState) => {
        return action.payload.id === dropdown.id;
      });
    default:
      return state;
  }
};
