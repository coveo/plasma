import * as _ from 'underscore';
import {keyCode} from '../../../../utils/InputUtils';
import {IReduxAction} from '../../../../utils/ReduxUtils';
import {IDropdownOption} from '../../DropdownSearch';
import {DropdownSearchActions, IOptionsDropdownSearchPayload} from '../../DropdownSearchActions';
import {IDropdownSearchState} from '../../DropdownSearchReducers';
import {multiSelectDropdownSearchReducer} from '../MultiSelectDropdownSearchReducer';

describe('DropdownSearch', () => {

    describe('MultiSelectDropdownSearchReducers', () => {

        const defaultPayload = {id: 'new-dropdown-search'};
        let options: IDropdownOption[] = [];
        let defaultOldState: IDropdownSearchState = {id: 'new-dropdown-search'};

        beforeEach(() => {
            options = [
                {value: 'test 1'},
                {value: 'test 2'},
            ];

            defaultOldState = {
                ...defaultOldState,
                options: options,
                isOpened: false,
            };
        });

        it('should add a new multiselect state on "ADD_MULTI_SELECT_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState = {id: 'new-dropdown-search'};
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.addMultiSelect,
                payload: {...defaultPayload, dropdownOptions: options},
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(oldState, action);

            for (const option of options) {
                expect(updatedState.options.indexOf(option)).toBeDefined();
            }
            expect(_.where(updatedState.options, {selected: true})).toEqual([]);
            expect(updatedState.isOpened).toBe(false);
        });

        it('should add a selected option on "MULTI_SELECT_OPTION_DROPDOWN_SEARCH"', () => {
            const addedSelectedOption: IDropdownOption = options[0];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.multiSelect,
                payload: {...defaultPayload, addedSelectedOption},
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

            expect(_.findWhere(updatedState.options, {...options[0], selected: true})).toBeDefined();
        });

        it('should remove the selected option from the displayed options on "MULTI_SELECT_OPTION_DROPDOWN_SEARCH"', () => {
            const addedSelectedOption: IDropdownOption = options[0];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.multiSelect,
                payload: {...defaultPayload, addedSelectedOption},
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

            expect(_.findWhere(updatedState.options, {...options[0], selected: true}).hidden).toBe(true);
        });

        it('should remove all from selectedOptions on "REMOVE_ALL_SELECTED_OPTIONS_MULTISELECT_DROPDOWN_SEARCH"', () => {
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.deselectAllOptions,
                payload: defaultPayload,
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

            expect(_.where(updatedState.options, {selected: true})).toEqual([]);
        });

        it('should display all options in displayed options on "REMOVE_ALL_SELECTED_OPTIONS_MULTISELECT_DROPDOWN_SEARCH"', () => {
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.deselectAllOptions,
                payload: defaultPayload,
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

            expect(_.where(updatedState.options, {hidden: false}).length).toBe(options.length);
        });

        it('should only remove the selected option from the selectedOptions on "REMOVE_SELECTED_OPTION_DROPDOWN_SEARCH"', () => {
            const selectedOptionValue: string = options[0].value;

            const oldstate: IDropdownSearchState = {
                ...defaultOldState,
                options: [{...options[0], selected: true, hidden: true}, {...options[1], selected: true, hidden: true}],
            };

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.deselectOption,
                payload: {...defaultPayload, selectedOptionValue},
            };

            const expectedOptionsState: IDropdownOption[] = [
                {...options[0], selected: false, hidden: false},
                {...options[1], selected: true, hidden: true},
            ];

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(oldstate, action);

            expect(updatedState.options).toEqual(expectedOptionsState);
        });

        it('should add the removed option in the hidden options on "REMOVE_SELECTED_OPTION_DROPDOWN_SEARCH"', () => {
            const selectedOptionValue: string = options[0].value;

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.deselectOption,
                payload: {...defaultPayload, selectedOptionValue},
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

            expect(_.findWhere(_.reject(updatedState.options, (option) => {
                return option.custom || option.hidden;
            }), {value: selectedOptionValue})).toBeDefined();
        });

        it('should add a custom selected option on "ADD_CUSTOM_SELECTED_OPTION"', () => {
            const customValue: string = 'custom_value';

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.addCustomSelectedOption,
                payload: {...defaultPayload, selectedOptionValue: customValue},
            };

            const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

            expect(_.where(updatedState.options, {selected: true, value: customValue}).length).toBe(1);
        });

        describe('on key down', () => {

            it('should return the new state with active option above the last one if the keyCode is "Up Arrow"', () => {
                const oldstate: IDropdownSearchState = {
                    ...defaultOldState,
                    id: 'new-dropdown-search',
                    isOpened: true,
                    options: options,
                    activeOption: options[1],
                };
                const keycode = keyCode.upArrow;
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };
                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(oldstate, action);

                expect(updatedState.activeOption.value).toEqual(options[0].value);
            });

            it('should add a custom option on enter if the selected option is not present', () => {
                const keycode = keyCode.enter;
                const customValue: string = 'custom_value';
                const stateWithFilterTextPresent: IDropdownSearchState = {
                    ...defaultOldState,
                    filterText: customValue,
                    activeOption: undefined,
                };
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(stateWithFilterTextPresent, action);

                expect(_.where(updatedState.options, {selected: true, value: customValue}).length).toBe(1);
            });

            it('should add the active option on tab in selected options', () => {
                const keycode = keyCode.tab;
                const oldstate: IDropdownSearchState = {...defaultOldState, activeOption: options[0]};
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(oldstate, action);

                expect(_.findWhere(updatedState.options, {...options[0], selected: true})).toBeDefined();
            });

            it('should remove last selected option on backspace when the filter text is empty', () => {
                const keycode = keyCode.backspace;
                const filterText: string = '';
                const stateWithFilterTextPresent: IDropdownSearchState = {
                    ...defaultOldState,
                    filterText,
                    options: [
                        {...options[0], selected: true, hidden: true},
                        {...options[1], selected: true, hidden: true},
                    ],
                };
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const expectedOptions: IDropdownOption[] = [
                    {...options[0], selected: true, hidden: true},
                    {...options[1], selected: false, hidden: false},
                ];

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(stateWithFilterTextPresent, action);

                expect(updatedState.options).toEqual(expectedOptions);
            });

            it('should not remove last selected option on backspace when the filter text is not empty', () => {
                const keycode = keyCode.backspace;
                const filterText: string = 'not empty filter text';
                const stateWithFilterTextPresent: IDropdownSearchState = {
                    ...defaultOldState,
                    filterText,
                    options: [].concat(options),
                };
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const expectedSelectedOptions: IDropdownOption[] = [];

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(stateWithFilterTextPresent, action);

                expect(_.where(updatedState.options, {selected: true})).toEqual(expectedSelectedOptions);
            });

            it('should close the dropdown on escape', () => {
                const keycode = keyCode.escape;
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

                expect(updatedState.isOpened).toBe(false);
            });

            it('should remove focus on unknown key', () => {
                const keycode = -1;
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

                expect(updatedState.setFocusOnDropdownButton).toBe(false);
            });

            it('should set no active option on unknown key', () => {
                const keycode = -1;
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.onKeyDownMultiselect,
                    payload: {...defaultPayload, keyCode: keycode},
                };

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

                expect(updatedState.activeOption).toBeUndefined();
            });
        });

        describe('default action', () => {
            it('should return the same state by default', () => {
                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: 'default multiselect action',
                    payload: defaultPayload,
                };

                const updatedState: IDropdownSearchState = multiSelectDropdownSearchReducer(defaultOldState, action);

                expect(updatedState).toEqual(defaultOldState);
            });
        });
    });
});
