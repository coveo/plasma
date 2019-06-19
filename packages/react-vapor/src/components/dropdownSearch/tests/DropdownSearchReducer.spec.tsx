import * as _ from 'underscore';
import {keyCode} from '../../../utils/InputUtils';
import {IReduxAction} from '../../../utils/ReduxUtils';
import {IDropdownOption} from '../DropdownSearch';
import {addDropdownSearch, DropdownSearchActions, IOptionsDropdownSearchPayload} from '../DropdownSearchActions';
import {
    addUniqueSelectedOption,
    defaultSelectedOptionPlaceholder,
    deselectAllOptions,
    deselectLastSelectedOption,
    deselectOption,
    dropdownSearchInitialState,
    dropdownSearchReducer,
    dropdownsSearchInitialState,
    dropdownsSearchReducer,
    getDisplayedOptions,
    IDropdownSearchState,
    isNotCustomOption,
    multiSelectOption,
    removeCustomOptions,
    shouldHideOnFilter,
} from '../DropdownSearchReducers';

describe('DropdownSearch', () => {
    describe('DropdownSearchReducers', () => {
        const defaultAction = {
            type: 'default',
        };

        const defaultState: IDropdownSearchState[] = [
            {
                id: 'new-dropdown-search',
                isOpened: false,
                options: [],
            },
            {
                id: 'new-dropdown-search-1',
                isOpened: false,
                options: [],
            },
            {
                id: 'new-dropdown-search-2',
                isOpened: true,
                options: [],
            },
        ];

        const defaultPayload = {id: 'new-dropdown-search'};

        const options = [
            {value: 'test 1', displayValue: 'display 1'},
            {value: 'test 2', displayValue: 'display 2'},
            {value: 'test 3', displayValue: 'display 3'},
        ];

        const defaultOldState: IDropdownSearchState[] = [
            {
                id: 'new-dropdown-search',
                isOpened: false,
                options,
            },
        ];

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IDropdownSearchState[] = undefined;
            const actionBarsState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, defaultAction);

            expect(actionBarsState).toBe(dropdownsSearchInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one action bar', () => {
            const oldState: IDropdownSearchState = undefined;
            const actionBarState: IDropdownSearchState = dropdownSearchReducer(oldState, defaultAction);

            expect(actionBarState).toBe(dropdownSearchInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IDropdownSearchState[] = [dropdownSearchInitialState];
            const actionBarsState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, defaultAction);

            expect(actionBarsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one action bar', () => {
            const oldState: IDropdownSearchState = dropdownSearchInitialState;
            const actionBarState: IDropdownSearchState = dropdownSearchReducer(oldState, defaultAction);

            expect(actionBarState).toBe(oldState);
        });

        it('should return a new state with actions payload has parameter on "ADD_DROPDOWN_SEARCH"', () => {
            let oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.add,
                payload: _.extend({}, defaultPayload),
            };
            let dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length + 1);
            expect(
                dropdownSearchState.filter(
                    (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
                ).length
            ).toBe(1);

            oldState = dropdownSearchState;
            action.payload.id = 'new-dropdown-search-2';
            dropdownSearchState = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length + 1);
            expect(
                dropdownSearchState.filter(
                    (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
                ).length
            ).toBe(1);
        });

        it('should return a state with a default selected option when defaultSelectedOption is given on "ADD_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const defaultSelectedOption: IDropdownOption = {value: 'Default option'};
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.add,
                payload: _.extend({}, {...defaultPayload, defaultSelectedOption, dropdownOptions: options}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            const dropdownSearch = _.find(
                dropdownSearchState,
                (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
            );

            expect(
                _.find(dropdownSearch.options, (option) => option.value === defaultSelectedOption.value).selected
            ).toBe(true);
        });

        it('should return a state with a default selected option when no options are given on "ADD_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.add,
                payload: _.extend({}, {...defaultPayload}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            const dropdownSearch = _.find(
                dropdownSearchState,
                (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
            );

            expect(
                _.find(dropdownSearch.options, (option) => option.value === defaultSelectedOptionPlaceholder.value)
            ).toBeDefined();
        });

        it('should return a state with a selectedOption if the defaultSelectedOption is equal to one option already present "ADD_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const defaultSelectedOption: IDropdownOption = {value: 'Default option', selected: false};
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.add,
                payload: _.extend({}, {...defaultPayload, options: [defaultSelectedOption], defaultSelectedOption}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            const dropdownSearch = _.find(
                dropdownSearchState,
                (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
            );

            expect(
                _.find(dropdownSearch.options, (option) => option.value === defaultSelectedOption.value).selected
            ).toBe(true);
        });

        it('should return a state with supportSingleCustomOption set to false if the property is not passed to the addDropdownSearch action generator on "ADD_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const action: IReduxAction<IOptionsDropdownSearchPayload> = addDropdownSearch(
                defaultPayload.id,
                [],
                undefined
            );
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            const dropdownSearch = _.find(
                dropdownSearchState,
                (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
            );

            expect(dropdownSearch.supportSingleCustomOption).toBe(false);
        });

        it('should return a state with supportSingleCustomOption set to false if the property is passed with false in the payload on "ADD_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const action: IReduxAction<IOptionsDropdownSearchPayload> = addDropdownSearch(
                defaultPayload.id,
                [],
                undefined,
                false
            );
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            const dropdownSearch = _.find(
                dropdownSearchState,
                (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
            );

            expect(dropdownSearch.supportSingleCustomOption).toBe(false);
        });

        it('should return a state with supportSingleCustomOption set to true if the property is passed with false in the payload on "ADD_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
            const action: IReduxAction<IOptionsDropdownSearchPayload> = addDropdownSearch(
                defaultPayload.id,
                [],
                undefined,
                true
            );
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            const dropdownSearch = _.find(
                dropdownSearchState,
                (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
            );

            expect(dropdownSearch.supportSingleCustomOption).toBe(true);
        });

        it('should return the old state without the dropdownSearch with the payload id when the action is "REMOVE_DROPDOWN_SEARCH"', () => {
            let oldState: IDropdownSearchState[] = defaultState.slice();
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.remove,
                payload: _.extend({}, defaultPayload),
            };
            let dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length - 1);
            expect(dropdownSearchState.filter((dropdownSearch) => dropdownSearch.id === action.payload.id).length).toBe(
                0
            );

            oldState = dropdownSearchState;
            action.payload.id = 'new-dropdown-search-2';
            dropdownSearchState = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length - 1);
            expect(dropdownSearchState.filter((dropdownSearch) => dropdownSearch.id === action.payload.id).length).toBe(
                0
            );
        });

        it('should return the old state when the action is "REMOVE_DROPDOWN_SEARCH" and the payload id does not exist', () => {
            const oldState: IDropdownSearchState[] = defaultState.slice();
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.remove,
                payload: {id: 'not a id'},
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
                ).length
            ).toBe(0);
        });

        it('should return the new state with the isOpened toggle and the filterText reset to empty string on "TOGGLE_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = defaultState.slice();
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.toggle,
                payload: _.extend({}, defaultPayload),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (dropdownSearch: IDropdownSearchState) =>
                        dropdownSearch.id === action.payload.id &&
                        _.isEmpty(dropdownSearch.filterText) &&
                        dropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should return the new state with the isOpened toggle and the filterText reset to empty string on "UPDATE_DROPDOWN_SEARCH"', () => {
            const dropdownOption = [{value: 'test'}, {value: 'test 1'}, {value: 'test 2'}];
            const newDropdownOption = [{value: 'test 4', selected: true}];
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    options: dropdownOption,
                },
            ];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.update,
                payload: _.extend({}, defaultPayload, {
                    dropdownOptions: newDropdownOption,
                    defaultSelectedOption: newDropdownOption[0],
                }),
            };

            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
                )[0].options
            ).toEqual(newDropdownOption);
        });

        it('should return the new state with the filterText set to newFilterText on "FILTER_DROPDOWN_SEARCH"', () => {
            const newFilterText = 'new filter';
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    filterText: '',
                    options: [],
                },
            ];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.filter,
                payload: _.extend({}, defaultPayload, {filterText: newFilterText}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        currentDropdownSearch.filterText === newFilterText
                ).length
            ).toBe(1);
        });

        describe('FILTER_DROPDOWN_SEARCH with supportSingleCustomOption', () => {
            let oldState: IDropdownSearchState[];

            beforeEach(() => {
                oldState = [
                    {
                        id: 'new-dropdown-search',
                        isOpened: false,
                        filterText: '',
                        options: [
                            {
                                value: 'testOption',
                                displayValue: 'testOption',
                                custom: false,
                                selected: false,
                            },
                        ],
                        supportSingleCustomOption: true,
                    },
                ];
            });

            it('should should not add a custom option if the filterText is empty', () => {
                const newFilterText = '';

                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.filter,
                    payload: _.extend({}, defaultPayload, {filterText: newFilterText}),
                };
                const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

                expect(
                    dropdownSearchState.filter(
                        (currentDropdownSearch: IDropdownSearchState) =>
                            currentDropdownSearch.id === action.payload.id &&
                            currentDropdownSearch.options[1] === undefined
                    ).length
                ).toBe(1);
            });

            it('should add a custom option if the filterText is not empty', () => {
                const newFilterText = 'non empty filterText';

                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.filter,
                    payload: _.extend({}, defaultPayload, {filterText: newFilterText}),
                };
                const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

                expect(
                    dropdownSearchState.filter(
                        (currentDropdownSearch: IDropdownSearchState) =>
                            currentDropdownSearch.id === action.payload.id &&
                            currentDropdownSearch.options[0].custom === true
                    ).length
                ).toBe(1);
            });

            it('should add a custom option if the filterText is not empty with its value being the filterText value', () => {
                const newFilterText = 'non empty filterText';

                const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                    type: DropdownSearchActions.filter,
                    payload: _.extend({}, defaultPayload, {filterText: newFilterText}),
                };
                const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

                expect(
                    dropdownSearchState.filter(
                        (currentDropdownSearch: IDropdownSearchState) =>
                            currentDropdownSearch.id === action.payload.id &&
                            currentDropdownSearch.options[0].value === newFilterText
                    ).length
                ).toBe(1);
            });
        });

        it('should return the new state with the selectedOptions modified on "SELECT_DROPDOWN_SEARCH"', () => {
            const selectedOption: IDropdownOption = {value: 'test', displayValue: 'yolo test'};
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: true,
                },
            ];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.select,
                payload: _.extend({}, defaultPayload, {addedSelectedOption: selectedOption}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        _.where(currentDropdownSearch.options, {value: selectedOption.value})
                ).length
            ).toBe(1);
        });

        it('should return the old state on "SELECT_DROPDOWN_SEARCH" with a disabled option in the payload', () => {
            const selectedOption: IDropdownOption = {value: 'test', displayValue: 'yolo test', disabled: true};
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: true,
                },
            ];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.select,
                payload: _.extend({}, defaultPayload, {addedSelectedOption: selectedOption}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState).toEqual(oldState);
        });

        it('should remove custom options on "SELECT_DROPDOWN_SEARCH" with supportSingleCustomOption', () => {
            const selectedOption: IDropdownOption = {value: 'test', displayValue: 'yolo test'};
            const dropdownOption = [
                {value: 'test'},
                {value: 'test 1'},
                {value: 'custom 1', custom: true},
                {value: 'test 2'},
            ];
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    options: dropdownOption,
                    supportSingleCustomOption: true,
                },
            ];

            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.select,
                payload: _.extend({}, defaultPayload, {addedSelectedOption: selectedOption}),
            };

            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                _.findWhere(
                    dropdownSearchState.filter(
                        (currentDropdownSearch: IDropdownSearchState) => currentDropdownSearch.id === action.payload.id
                    )[0].options,
                    {custom: true}
                )
            ).toBeUndefined();
        });

        it('should return the new state with the activeOption set, isOpened at true and setFocusOnDropdownButton at false if the keyCode is "Down Arrow" on "ACTIVE_DROPDOWN_SEARCH"', () => {
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.downArrow}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(defaultOldState, action);

            expect(dropdownSearchState.length).toBe(defaultOldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        currentDropdownSearch.activeOption.value === options[0].value &&
                        !currentDropdownSearch.setFocusOnDropdownButton &&
                        currentDropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should return the new state with the activeOption set, isOpened at true and setFocusOnDropdownButton at false if the keyCode is "Up Arrow" on "ACTIVE_DROPDOWN_SEARCH"', () => {
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.upArrow}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(defaultOldState, action);

            expect(dropdownSearchState.length).toBe(defaultOldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        currentDropdownSearch.activeOption.value === options[0].value &&
                        !currentDropdownSearch.setFocusOnDropdownButton &&
                        currentDropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should return the new state with the activeOption set with the option after this one set in activeOption in oldState if the keyCode is "Down Arrow" on "ACTIVE_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    options,
                    activeOption: options[0],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.downArrow}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        currentDropdownSearch.activeOption.value === options[1].value &&
                        !currentDropdownSearch.setFocusOnDropdownButton &&
                        currentDropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should return the new state with the activeOption set with the option before this one set in activeOption in oldState if the keyCode is "Up Arrow" on "ACTIVE_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    options,
                    activeOption: options[1],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.upArrow}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        currentDropdownSearch.activeOption.value === options[0].value &&
                        !currentDropdownSearch.setFocusOnDropdownButton &&
                        currentDropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should stay action on the last element if the keyCode is "Down Arrow" on "ACTIVE_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: true,
                    options,
                    activeOption: options[options.length - 1],
                    setFocusOnDropdownButton: false,
                    filterText: '',
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.downArrow}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        currentDropdownSearch.activeOption &&
                        currentDropdownSearch.activeOption.value === options[options.length - 1].value &&
                        !currentDropdownSearch.setFocusOnDropdownButton &&
                        currentDropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should close the dropdown and remove the activeOption if the keyCode is "Up Arrow" with the first option on "ACTIVE_DROPDOWN_SEARCH"', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: true,
                    options,
                    activeOption: options[0],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.upArrow}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id &&
                        !currentDropdownSearch.isOpened &&
                        currentDropdownSearch.setFocusOnDropdownButton
                ).length
            ).toBe(1);
        });

        it('should close the dropdown if the keyCode is "Escape" on ACTIVE_DROPDOWN_SEARCH', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: true,
                    options,
                    activeOption: options[0],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: keyCode.escape}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(
                dropdownSearchState.filter(
                    (currentDropdownSearch: IDropdownSearchState) =>
                        currentDropdownSearch.id === action.payload.id && !currentDropdownSearch.isOpened
                ).length
            ).toBe(1);
        });

        it('should return oldstate with activeOption undefined and setFocusOnDropdownButton false if the keyCode is equal to -1 on ACTIVE_DROPDOWN_SEARCH', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    options,
                    activeOption: options[0],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: -1}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(dropdownSearchState[0]).toEqual(
                _.extend({}, oldState[0], {
                    activeOption: undefined,
                    setFocusOnDropdownButton: false,
                })
            );
        });

        it('should return the oldState if the keyCode is not -1 or one of the keyCode for enter, tab, up_arrow and down_arrow', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'new-dropdown-search',
                    isOpened: false,
                    options,
                    activeOption: options[0],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.active,
                payload: _.extend({}, defaultPayload, {keyCode: 1231}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState.length).toBe(oldState.length);
            expect(dropdownSearchState[0]).toEqual(oldState[0]);
        });

        it('should return old state if the id does not match with a multiselect action', () => {
            const oldState: IDropdownSearchState[] = [
                {
                    id: 'no-match',
                    isOpened: false,
                    options,
                    activeOption: options[0],
                },
            ];
            const action: IReduxAction<IOptionsDropdownSearchPayload> = {
                type: DropdownSearchActions.multiSelect,
                payload: _.extend({}, defaultPayload, {addedSelectedOption: options[0]}),
            };
            const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

            expect(dropdownSearchState).toEqual(oldState);
        });

        describe('utility functions', () => {
            describe('get displayed options', () => {
                it('should return all the options if selectedOptions is empty', () => {
                    const state: IDropdownSearchState = {
                        id: 'new-dropdown-search',
                        options,
                    };

                    expect(getDisplayedOptions(state)).toEqual(options);
                });

                it('should return only the options that are not selected', () => {
                    const state: IDropdownSearchState = {
                        id: 'new-dropdown-search',
                        options: [{...options[0], selected: true, hidden: true}, options[1], options[2]],
                    };

                    expect(getDisplayedOptions(state)).toEqual([options[1], options[2]]);
                });

                it('should return only the options in the right order', () => {
                    const state: IDropdownSearchState = {
                        id: 'new-dropdown-search',
                        options: [options[0], {...options[1], selected: true, hidden: true}, options[2]],
                    };

                    expect(getDisplayedOptions(state)).toEqual([options[0], options[2]]);
                });
            });

            describe('deselect last selected option', () => {
                it('should return an array of option without the last one', () => {
                    const optionToBeRemoved: IDropdownOption = {
                        value: 'value',
                        displayValue: 'display',
                        selected: true,
                    };

                    const selectedOptions: IDropdownOption[] = [...options, optionToBeRemoved];

                    expect(deselectLastSelectedOption(selectedOptions)).toEqual([
                        ...options,
                        {...optionToBeRemoved, selected: false, hidden: false},
                    ]);
                });

                it('should return an array equals to the one passed if there are no selected options', () => {
                    const selectedOptions: IDropdownOption[] = [].concat(options);

                    expect(deselectLastSelectedOption(selectedOptions)).toEqual(options);
                });
            });

            describe('add unique selected option', () => {
                it('should add a custom selected option', () => {
                    const opts: IDropdownOption[] = [];
                    const value = 'Display value';

                    expect(
                        _.findWhere(addUniqueSelectedOption(opts, value), {value, selected: true, custom: true})
                    ).toBeDefined();
                });

                it('should not add a custom selected option if another one with the same value is present', () => {
                    const newOptions: IDropdownOption[] = [options[0]];

                    expect(addUniqueSelectedOption(newOptions, options[0].value).length).toBe(1);
                });

                it('should add a custom selected option when reselecting values and value does not exist', () => {
                    const expectedOption: IDropdownOption = {value: 'custom', displayValue: 'A custom value'};
                    const newOptions: IDropdownOption[] = [options[0]];

                    const resultingOptions: IDropdownOption[] = multiSelectOption(newOptions, expectedOption);

                    expect(resultingOptions.length).toBe(2);
                    expect(resultingOptions[1].value).toBe(expectedOption.value);
                    expect(resultingOptions[1].displayValue).toBe(expectedOption.displayValue);
                    expect(resultingOptions[1].selected).toBe(true);
                });
            });

            describe('deselect all options', () => {
                it('should return an array with all option unselected', () => {
                    const optionsToDeselect: IDropdownOption[] = [
                        {...options[0], selected: true},
                        {...options[1], selected: true},
                        {...options[2], selected: true},
                    ];

                    expect(_.where(deselectAllOptions(optionsToDeselect), {selected: true}).length).toBe(0);
                });

                it('should remove the custom options', () => {
                    const optionsToDeselect: IDropdownOption[] = [
                        {...options[0], selected: true},
                        {...options[1], selected: true, custom: true},
                        {...options[2], selected: true, custom: true},
                    ];

                    const expectedDeselectedOptions: IDropdownOption[] = [
                        {...options[0], selected: false, hidden: false},
                    ];

                    expect(deselectAllOptions(optionsToDeselect)).toEqual(expectedDeselectedOptions);
                });
            });

            describe('deselect option', () => {
                it('should return an array with the right option unselected', () => {
                    const optionsToDeselect: IDropdownOption[] = [
                        {...options[0], selected: true},
                        {...options[1], selected: true},
                        {...options[2], selected: true},
                    ];

                    expect(
                        _.where(deselectOption(optionsToDeselect, options[0].value), {
                            value: options[0].value,
                            selected: false,
                            hidden: false,
                        }).length
                    ).toBe(1);
                });

                it('should remove the option if it is custom', () => {
                    const optionsToDeselect: IDropdownOption[] = [
                        {...options[0], selected: true},
                        {...options[1], selected: true},
                        {...options[2], selected: true, custom: true},
                    ];

                    expect(
                        _.find(deselectOption(optionsToDeselect, options[2].value), {value: options[2].value})
                    ).toBeUndefined();
                });
            });

            describe('isNotCustomOption', () => {
                let customOption: IDropdownOption;

                beforeEach(() => {
                    customOption = {value: 'test', custom: true, selected: false};
                });

                it('should return false if the option is custom and unselected by default', () => {
                    expect(isNotCustomOption(customOption)).toBe(false);
                });

                it('should return false if the option is custom and selected by default', () => {
                    customOption.selected = true;
                    expect(isNotCustomOption(customOption)).toBe(false);
                });

                it('should return false if the option is custom and unselected, and includeSelected is set to false', () => {
                    expect(isNotCustomOption(customOption, false)).toBe(false);
                });

                it('should return true if the option is custom and selected, and includeSelected is set to false', () => {
                    customOption.selected = true;
                    expect(isNotCustomOption(customOption, false)).toBe(true);
                });

                it('should return true if the option is not custom', () => {
                    const optionNotCustom = _.extend(customOption, {custom: false});
                    expect(isNotCustomOption(optionNotCustom)).toBe(true);
                    expect(isNotCustomOption(optionNotCustom)).toBe(true);
                });
            });

            describe('removeCustomOptions', () => {
                const supportSingleCustomOption = true;

                let testOptions: IDropdownOption[];

                beforeEach(() => {
                    testOptions = [
                        {value: 'test 1', displayValue: 'display 1', custom: true, selected: true},
                        {value: 'test 2', displayValue: 'display 2', custom: true, selected: false},
                        {value: 'test 3', displayValue: 'display 3', custom: false, selected: false},
                        {value: 'test 4', displayValue: 'display 4', custom: false, selected: true},
                    ];
                });

                it('should return the same options if supportSingleCustomOption is false', () => {
                    expect(removeCustomOptions(testOptions, !supportSingleCustomOption)).toEqual(testOptions);
                });

                describe('with supportSingleCustomOption', () => {
                    it('should return only the non custom options by default', () => {
                        expect(removeCustomOptions(testOptions, supportSingleCustomOption)).toEqual(
                            testOptions.filter((option: IDropdownOption) => !option.custom)
                        );
                    });

                    it('should return the non custom options with the selected custom option if includeSelected is set to false', () => {
                        expect(removeCustomOptions(testOptions, supportSingleCustomOption, false)).toEqual(
                            testOptions.filter((option: IDropdownOption) => !option.custom || option.selected)
                        );
                    });
                });
            });

            describe('removeCustomOptions', () => {
                const supportSingleCustomOption = true;

                let testOptions: IDropdownOption[];

                beforeEach(() => {
                    testOptions = [
                        {value: 'test 1', displayValue: 'display 1', custom: true, selected: true},
                        {value: 'test 2', displayValue: 'display 2', custom: true, selected: false},
                        {value: 'test 3', displayValue: 'display 3', custom: false, selected: false},
                        {value: 'test 4', displayValue: 'display 4', custom: false, selected: true},
                    ];
                });

                it('should return the same options if supportSingleCustomOption is false', () => {
                    expect(removeCustomOptions(testOptions, !supportSingleCustomOption)).toEqual(testOptions);
                });

                describe('with supportSingleCustomOption', () => {
                    it('should return only the non custom options by default', () => {
                        expect(removeCustomOptions(testOptions, supportSingleCustomOption)).toEqual(
                            testOptions.filter((option: IDropdownOption) => !option.custom)
                        );
                    });

                    it('should return the non custom options with the selected custom option if includeSelected is set to false', () => {
                        expect(removeCustomOptions(testOptions, supportSingleCustomOption, false)).toEqual(
                            testOptions.filter((option: IDropdownOption) => !option.custom || option.selected)
                        );
                    });
                });
            });

            describe('shouldHideOnFilter', () => {
                const testFilterText = 'testFilterText';

                let testOption: IDropdownOption;

                beforeEach(() => {
                    testOption = {value: 'test'};
                });

                it('should return false if the option is not default and not custom, regardless of the filterText', () => {
                    expect(shouldHideOnFilter(testOption, testFilterText)).toBe(false);

                    testOption.value = testFilterText;
                    expect(shouldHideOnFilter(testOption, testFilterText)).toBe(false);
                });

                it('should return true if the option is default regardless of the filterText', () => {
                    testOption.default = true;
                    expect(shouldHideOnFilter(testOption, testFilterText)).toBe(true);

                    testOption.default = true;
                    testOption.value = testFilterText;
                    expect(shouldHideOnFilter(testOption, testFilterText)).toBe(true);
                });

                it('should return false if the option is custom and its value does not equal to the filterText', () => {
                    testOption.custom = true;
                    expect(shouldHideOnFilter(testOption, testFilterText)).toBe(false);
                });

                it('should return true if the option is custom and its value equals the filterText', () => {
                    testOption.custom = true;
                    testOption.value = testFilterText;
                    expect(shouldHideOnFilter(testOption, testFilterText)).toBe(true);
                });
            });
        });
    });
});
