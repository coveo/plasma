import { IReduxAction } from '../../utils/ReduxUtils';
import { IDropdownOption } from './DropdownSearch';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from './DropdownSearchActions';
import * as _ from 'underscore';
import * as s from 'underscore.string';
import { keyCode } from '../../utils/InputUtils';
import { multiSelectDropdownSearchReducer } from './MultiSelectDropdownSearch/MultiSelectDropdownSearchReducer';
import { deepClone } from '../../utils/CloneUtils';

export interface IDropdownSearchState {
  id: string;
  isOpened?: boolean;
  filterText?: string;
  options?: IDropdownOption[];
  selectedOption?: IDropdownOption;
  activeOption?: IDropdownOption;
  setFocusOnDropdownButton?: boolean;
  defaultSelectedOptionValue?: string;
  supportSingleCustomOption?: boolean;
}

export const defaultSelectedOptionPlaceholder: IDropdownOption = {
  value: 'Select an option',
  selected: true,
  custom: true,
  default: true,
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

export const deselectOption = (options: IDropdownOption[], value: string): IDropdownOption[] => {
  const nextOptions: IDropdownOption[] = deepClone(options);
  const selectedOption = _.find(nextOptions, { value });
  if (selectedOption) {
    if (selectedOption.custom) {
      nextOptions.splice(nextOptions.indexOf(selectedOption), 1);
    } else {
      selectedOption.selected = false;
      selectedOption.hidden = false;
    }
  }
  return nextOptions;
};

export const deselectLastSelectedOption = (options: IDropdownOption[]): IDropdownOption[] => {
  const lastSelectedOption: IDropdownOption = _.find(options.slice().reverse(), { selected: true });
  return lastSelectedOption
    ? deselectOption(options, lastSelectedOption.value)
    : deepClone(options);
};

export const deselectAllOptions = (options: IDropdownOption[], includeCustom: boolean = false): IDropdownOption[] => {
  let nextOptions: IDropdownOption[] = [];
  _.each(options, (option: IDropdownOption) => {
    if (!option.custom || includeCustom) {
      const nextOption = deepClone(option);
      nextOptions.push({ ...nextOption, selected: false, hidden: false });
    }
  });

  return nextOptions;
};

export const addUniqueSelectedOption = (options: IDropdownOption[], value: string): IDropdownOption[] => {
  const sameValueDoesNotExist = _.findWhere(options, { value }) === undefined;

  if (sameValueDoesNotExist) {
    const nextOptions: IDropdownOption[] = deepClone(options);
    nextOptions.push({
      value,
      selected: true,
      custom: true,
    });
    return nextOptions;
  }
  return deepClone(options);
};

export const getDisplayedOptions = (options: IDropdownOption[]): IDropdownOption[] => {
  return _.reject(options, (option) => option.custom || option.hidden);
};

export const getFilteredOptions = (state: IDropdownSearchState, filterText?: string) => {
  const currentFilterText: string = filterText || state.filterText || '';
  return _.filter(getDisplayedOptions(state.options),
    (option: IDropdownOption) => {
      const displayValue = option.displayValue || option.value;
      return s.contains(displayValue.toLowerCase(), (currentFilterText).toLowerCase());
    });
};

export const selectSingleOption = (options: IDropdownOption[], selectedOption: IDropdownOption): IDropdownOption[] => {
  return _.map(options, (option: IDropdownOption) =>
    _.extend(deepClone(option), { selected: option.value === selectedOption.value }));
};

export const multiSelectOption = (options: IDropdownOption[], selectedOption: IDropdownOption): IDropdownOption[] => {
  return _.map(options, (option: IDropdownOption) => {
    const nextOption: IDropdownOption = deepClone(option);
    if (nextOption.value === selectedOption.value) {
      nextOption.selected = true;
      nextOption.hidden = true;
    }
    return nextOption;
  });
};

export const updateOptions = (options: IDropdownOption[], selectedOption?: IDropdownOption): IDropdownOption[] => {
  let updatedOptions: IDropdownOption[] = options
    ? deepClone(options)
    : [];

  const defaultSelectedOption = selectedOption
    ? { ...selectedOption, selected: true, custom: true, default: true }
    : defaultSelectedOptionPlaceholder;

  updatedOptions = _.find(updatedOptions, (option) => option.value === defaultSelectedOption.value)
    ? selectSingleOption(updatedOptions, defaultSelectedOption)
    : [...updatedOptions, defaultSelectedOption];

  return updatedOptions;
};

export const getSelectedOption = (options: IDropdownOption[]): IDropdownOption => {
  return _.findWhere(options, { selected: true });
};

export const getFilterText = (state: IDropdownSearchState): string => {
  const selectedOption = getSelectedOption(state.options) || {} as any;
  return selectedOption.custom && !selectedOption.default && state.supportSingleCustomOption
    ? selectedOption.value
    : '';
};

export const dropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>): IDropdownSearchState => {

  switch (action.type) {
    case DropdownSearchActions.toggle:
      return {
        ...state,
        isOpened: !state.isOpened,
        filterText: getFilterText(state),
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.open:
      return {
        ...state,
        isOpened: true,
        filterText: getFilterText(state),
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.close:
      return {
        ...state,
        isOpened: false,
        filterText: getFilterText(state),
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.update:
      return {
        ...state,
        id: action.payload.id,
        options: updateOptions(action.payload.dropdownOptions, action.payload.defaultSelectedOption),
        filterText: getFilterText(state),
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.filter:
      return {
        ...state,
        id: action.payload.id,
        filterText: action.payload.filterText,
        activeOption: getFilteredOptions(state, action.payload.filterText)[0] || state.activeOption,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.select:
      return {
        ...state,
        id: action.payload.id,
        options: selectSingleOption(state.options, action.payload.addedSelectedOption),
        isOpened: false,
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.add:
      return {
        ...state,
        options: updateOptions(action.payload.dropdownOptions, action.payload.defaultSelectedOption),
        id: action.payload.id,
        filterText: getFilterText(state),
        isOpened: false,
        supportSingleCustomOption: action.payload.supportSingleCustomOption,
      };
    case DropdownSearchActions.active:
      const keyPressed = action.payload.keyCode;
      const isFirstSelectedOption = keyPressed === keyCode.upArrow && state.activeOption === state.options[0];
      const optionsFiltered = getFilteredOptions(state);

      if (_.contains([keyCode.upArrow, keyCode.downArrow], keyPressed)) {
        return {
          ...state,
          isOpened: !isFirstSelectedOption,
          activeOption: !isFirstSelectedOption ?
            optionsFiltered[getNextIndexPosition(optionsFiltered, state.activeOption, keyPressed)] : undefined,
          setFocusOnDropdownButton: isFirstSelectedOption,
        };
      } else if (_.contains([keyCode.enter, keyCode.tab], keyPressed)
        && state.supportSingleCustomOption
        && (state.activeOption && state.activeOption.value) !== state.filterText
        && state.filterText !== '') {
        return {
          ...state,
          id: action.payload.id,
          isOpened: false,
          options: [...deselectAllOptions(state.options, true), { value: state.filterText, selected: true, custom: true, hidden: true }],
          activeOption: undefined,
          filterText: getFilterText(state),
          setFocusOnDropdownButton: true,
        };
      } else if (_.contains([keyCode.enter, keyCode.tab], keyPressed) && state.activeOption) {
        return {
          ...state,
          id: action.payload.id,
          isOpened: false,
          options: selectSingleOption(deselectAllOptions(state.options, true), state.activeOption),
          activeOption: undefined,
          filterText: getFilterText(state),
          setFocusOnDropdownButton: true,
        };
      } else if (keyPressed === keyCode.escape) {
        return {
          ...state,
          isOpened: false,
        };
      } else if (keyPressed === -1) {
        return {
          ...state,
          id: action.payload.id,
          activeOption: undefined,
          setFocusOnDropdownButton: false,
        };
      }
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
      return state.map((dropdownSearch: IDropdownSearchState) => {
        return dropdownSearch.id === action.payload.id
          ? dropdownSearchReducer(dropdownSearch, action)
          : dropdownSearch;
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
    case DropdownSearchActions.deselectAllOptions:
    case DropdownSearchActions.multiSelect:
    case DropdownSearchActions.addCustomSelectedOption:
    case DropdownSearchActions.onKeyDownMultiselect:
    case DropdownSearchActions.deselectOption:
      return state.map((dropdownSearch: IDropdownSearchState) => {
        return dropdownSearch.id === action.payload.id
          ? multiSelectDropdownSearchReducer(dropdownSearch, action)
          : dropdownSearch;
      });
    case DropdownSearchActions.remove:
      return _.reject(state, (dropdown: IDropdownSearchState) => {
        return action.payload.id === dropdown.id;
      });
    default:
      return state;
  }
};
