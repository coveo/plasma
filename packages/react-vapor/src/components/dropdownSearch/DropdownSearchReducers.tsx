import * as _ from 'underscore';
import * as s from 'underscore.string';
import {deepClone} from '../../utils/CloneUtils';
import {keyCode} from '../../utils/InputUtils';
import {IReduxAction} from '../../utils/ReduxUtils';
import {IDropdownOption} from './DropdownSearch';
import {DropdownSearchActions, IOptionsDropdownSearchPayload} from './DropdownSearchActions';
import {multiSelectDropdownSearchReducer} from './MultiSelectDropdownSearch/MultiSelectDropdownSearchReducer';

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
    hidden: true,
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

export const isNotCustomOption = (option: IDropdownOption, includeSelected: boolean = true): boolean =>
    includeSelected ? !option.custom : !option.custom || option.selected;

// removeCustomOptions only utilized in supportSingleCustomOption scenarios, otherwise causes side effects for multiselect
export const removeCustomOptions = (
    options: IDropdownOption[],
    supportSingleCustomOption: boolean,
    includeSelected: boolean = true
) => {
    return !supportSingleCustomOption
        ? deepClone(options)
        : deepClone(options.filter((option: IDropdownOption) => isNotCustomOption(option, includeSelected)));
};

export const shouldHideOnFilter = (option: IDropdownOption, filterText: string): boolean =>
    !!(option.default || (option.custom && option.value === filterText));

export const deselectOption = (options: IDropdownOption[], value: string): IDropdownOption[] => {
    const nextOptions: IDropdownOption[] = deepClone(options);
    const selectedOption = _.find(nextOptions, {value});
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
    const lastSelectedOption: IDropdownOption = _.find(options.slice().reverse(), {selected: true});
    return lastSelectedOption ? deselectOption(options, lastSelectedOption.value) : deepClone(options);
};

export const deselectAllOptions = (options: IDropdownOption[], includeCustom: boolean = false): IDropdownOption[] => {
    const nextOptions: IDropdownOption[] = [];
    _.each(options, (option: IDropdownOption) => {
        if (!option.custom || includeCustom) {
            const nextOption = deepClone(option);
            nextOptions.push({...nextOption, selected: false, hidden: false});
        }
    });

    return nextOptions;
};

export const addUniqueSelectedOption = (
    options: IDropdownOption[],
    value: string,
    displayValue?: string
): IDropdownOption[] => {
    const sameValueDoesNotExist = _.findWhere(options, {value}) === undefined;

    if (sameValueDoesNotExist) {
        const nextOptions: IDropdownOption[] = deepClone(options);
        nextOptions.push({
            value,
            displayValue: displayValue || value,
            selected: true,
            custom: true,
        });
        return nextOptions;
    }
    return deepClone(options);
};

export const getDisplayedOptions = (state: IDropdownSearchState): IDropdownOption[] => {
    return _.reject(state.options, (option) => (!state.supportSingleCustomOption && option.custom) || option.hidden);
};

export const getFilteredOptions = (state: IDropdownSearchState, filterText?: string) => {
    const currentFilterText: string = filterText || state.filterText || '';
    return _.filter(getDisplayedOptions(state), (option: IDropdownOption) => {
        const displayValue = option.displayValue || option.value;
        return s.contains(displayValue.toLowerCase(), currentFilterText.toLowerCase());
    });
};

export const selectSingleOption = (options: IDropdownOption[], selectedOption: IDropdownOption): IDropdownOption[] => {
    return _.map(options, (option: IDropdownOption) =>
        _.extend(deepClone(option), {selected: option.value === selectedOption.value})
    );
};

export const multiSelectOption = (options: IDropdownOption[], selectedOption: IDropdownOption): IDropdownOption[] => {
    let valueFound: boolean = false;
    const newOptions: IDropdownOption[] = _.map(options, (option: IDropdownOption) => {
        const nextOption: IDropdownOption = deepClone(option);
        if (nextOption.value === selectedOption.value) {
            valueFound = true;
            nextOption.selected = true;
            nextOption.hidden = true;
        }
        return nextOption;
    });

    if (!valueFound) {
        return addUniqueSelectedOption(options, selectedOption.value, selectedOption.displayValue);
    }

    return newOptions;
};

export const updateOptions = (
    options: IDropdownOption[],
    selectAValue: boolean = true,
    selectedOption?: IDropdownOption
): IDropdownOption[] => {
    let updatedOptions: IDropdownOption[] = options ? deepClone(options) : [];

    if (selectAValue) {
        const defaultSelectedOption = selectedOption
            ? {...selectedOption, selected: true, custom: true}
            : defaultSelectedOptionPlaceholder;

        updatedOptions = _.find(updatedOptions, (option) => option.value === defaultSelectedOption.value)
            ? selectSingleOption(updatedOptions, defaultSelectedOption)
            : [...updatedOptions, defaultSelectedOption];
    }

    return updatedOptions;
};

export const dropdownSearchReducer = (
    state: IDropdownSearchState = dropdownSearchInitialState,
    action: IReduxAction<IOptionsDropdownSearchPayload>
): IDropdownSearchState => {
    let nextOptions: IDropdownOption[] = [];

    switch (action.type) {
        case DropdownSearchActions.toggle:
            nextOptions = state.supportSingleCustomOption
                ? removeCustomOptions(state.options, state.supportSingleCustomOption, false)
                : state.options;
            return {
                ...state,
                isOpened: !state.isOpened,
                options: nextOptions,
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
                options: updateOptions(
                    action.payload.dropdownOptions,
                    action.payload.selectAValue,
                    action.payload.defaultSelectedOption
                ),
                setFocusOnDropdownButton: false,
            };
        case DropdownSearchActions.filter:
            const options = state.options || [];
            const shouldReturnNewOptions: boolean =
                state.supportSingleCustomOption &&
                options
                    .filter((option: IDropdownOption) => !option.custom && !option.default)
                    .every(
                        (option: IDropdownOption) =>
                            (option.displayValue || option.value).toLowerCase() !==
                            (action.payload.filterText || '').toLowerCase()
                    );

            nextOptions = shouldReturnNewOptions
                ? options.map((option: IDropdownOption) =>
                      _.extend(option, {hidden: shouldHideOnFilter(option, action.payload.filterText)})
                  )
                : options;

            if (shouldReturnNewOptions) {
                const newCustomOption: IDropdownOption[] =
                    action.payload.filterText !== ''
                        ? [{value: action.payload.filterText, selected: false, custom: true, hidden: false}]
                        : [];

                const newState = _.extend(deepClone(state), {
                    options: [
                        ...newCustomOption,
                        ...removeCustomOptions(nextOptions, state.supportSingleCustomOption, false),
                    ],
                });

                return {
                    ...newState,
                    id: action.payload.id,
                    filterText: action.payload.filterText,
                    activeOption: getFilteredOptions(newState, action.payload.filterText)[0] || undefined,
                    setFocusOnDropdownButton: false,
                };
            }

            return {
                ...state,
                id: action.payload.id,
                options: deepClone(nextOptions),
                filterText: action.payload.filterText,
                activeOption: getFilteredOptions(state, action.payload.filterText)[0] || undefined,
                setFocusOnDropdownButton: false,
            };
        case DropdownSearchActions.select:
            if (action.payload.addedSelectedOption.disabled) {
                return state;
            }

            const optionsWithOneSelectedOption = selectSingleOption(
                deselectAllOptions(state.options, true),
                action.payload.addedSelectedOption
            );

            nextOptions = !state.supportSingleCustomOption
                ? selectSingleOption(state.options, action.payload.addedSelectedOption)
                : removeCustomOptions(optionsWithOneSelectedOption, state.supportSingleCustomOption, false);

            return {
                ...state,
                options: nextOptions,
                id: action.payload.id,
                isOpened: false,
                activeOption: undefined,
                setFocusOnDropdownButton: action.payload.setFocusOnDropdown,
            };
        case DropdownSearchActions.add:
            return {
                ...state,
                options: updateOptions(
                    action.payload.dropdownOptions,
                    action.payload.selectAValue,
                    action.payload.defaultSelectedOption
                ),
                id: action.payload.id,
                filterText: '',
                isOpened: false,
                supportSingleCustomOption: action.payload.supportSingleCustomOption,
            };
        case DropdownSearchActions.active:
            const keyPressed = action.payload.keyCode;
            const optionsFiltered = getFilteredOptions(state);
            const isFirstSelectedOption = keyPressed === keyCode.upArrow && state.activeOption === optionsFiltered[0];

            const shouldSelectSecondOption: boolean =
                keyPressed === keyCode.downArrow &&
                (state.activeOption && state.activeOption.value) === (optionsFiltered[0] && optionsFiltered[0].value) &&
                !!state.filterText;

            const activeOption: IDropdownOption = shouldSelectSecondOption
                ? optionsFiltered[1]
                : optionsFiltered[getNextIndexPosition(optionsFiltered, state.activeOption, keyPressed)];

            if (_.contains([keyCode.upArrow, keyCode.downArrow], keyPressed)) {
                return {
                    ...state,
                    isOpened: !isFirstSelectedOption,
                    options:
                        state.supportSingleCustomOption && isFirstSelectedOption
                            ? removeCustomOptions(state.options, false)
                            : state.options,
                    activeOption: !isFirstSelectedOption ? activeOption : undefined,
                    setFocusOnDropdownButton: isFirstSelectedOption,
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

export const dropdownsSearchReducer = (
    state: IDropdownSearchState[] = dropdownsSearchInitialState,
    action: IReduxAction<IOptionsDropdownSearchPayload>
): IDropdownSearchState[] => {
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
            return [...state, dropdownSearchReducer(undefined, action)];
        case DropdownSearchActions.addMultiSelect:
            return [...state, multiSelectDropdownSearchReducer(undefined, action)];
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
