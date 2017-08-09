import { IReduxAction } from '../../../utils/ReduxUtils';
import { IDropdownOption } from '../DropdownSearch';
import {
  addUniqueSelectedOption,
  dropdownSearchInitialState,
  dropdownSearchReducer,
  dropdownsSearchInitialState,
  dropdownsSearchReducer, getDisplayedOptions,
  IDropdownSearchState, deselectLastSelectedOption, deselectAllOptions, deselectOption,
} from '../DropdownSearchReducers';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import * as _ from 'underscore';
import { keyCode } from '../../../utils/InputUtils';

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
      }, {
        id: 'new-dropdown-search-1',
        isOpened: false,
        options: [],
      }, {
        id: 'new-dropdown-search-2',
        isOpened: true,
        options: [],
      },
    ];

    const defaultPayload = { id: 'new-dropdown-search' };

    const options = [
      { value: 'test 1', displayValue: 'display 1' },
      { value: 'test 2', displayValue: 'display 2' },
      { value: 'test 3', displayValue: 'display 3' }
    ];

    const oldState: IDropdownSearchState[] = [
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

    it('should return a new state with actions payload has parameter on "ADD_DROPDOWN_SEARCH', () => {
      let oldState: IDropdownSearchState[] = dropdownsSearchInitialState;
      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.add,
        payload: _.extend({}, defaultPayload),
      };
      let dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length + 1);
      expect(dropdownSearchState.filter(
        (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id).length).toBe(1);

      oldState = dropdownSearchState;
      action.payload.id = 'new-dropdown-search-2';
      dropdownSearchState = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length + 1);
      expect(dropdownSearchState.filter((dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the dropdownSearch with the payload id when the action is "REMOVE_DROPDOWN_SEARCH"', () => {
      let oldState: IDropdownSearchState[] = defaultState.slice();
      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.remove,
        payload: _.extend({}, defaultPayload),
      };
      let dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length - 1);
      expect(dropdownSearchState.filter(dropdownSearch => dropdownSearch.id === action.payload.id).length).toBe(0);

      oldState = dropdownSearchState;
      action.payload.id = 'new-dropdown-search-2';
      dropdownSearchState = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length - 1);
      expect(dropdownSearchState.filter(dropdownSearch => dropdownSearch.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state when the action is "REMOVE_DROPDOWN_SEARCH" and the payload id does not exist', () => {
      const oldState: IDropdownSearchState[] = defaultState.slice();
      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.remove,
        payload: { id: 'not a id' },
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length);
      expect(dropdownSearchState.filter((dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id).length).toBe(0);
    });

    it('should return the new state with the isOpened toggle and the filterText reset to empty string on "TOGGLE_DROPDOWN_SEARCH"', () => {
      const oldState: IDropdownSearchState[] = defaultState.slice();
      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.toggle,
        payload: _.extend({}, defaultPayload),
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length);
      expect(dropdownSearchState.filter((dropdownSearch: IDropdownSearchState) =>
        dropdownSearch.id === action.payload.id && _.isEmpty(dropdownSearch.filterText) && dropdownSearch.isOpened).length).toBe(1);
    });

    it('should return the new state with the isOpened toggle and the filterText reset to empty string on "UPDATE_DROPDOWN_SEARCH"', () => {
      const dropdownOption = [{ value: 'test' }, { value: 'test 1' }, { value: 'test 2' }];
      const newDropdownOption = [{ value: 'test 4' }];
      const oldState: IDropdownSearchState[] = [
        {
          id: 'new-dropdown-search',
          isOpened: false,
          options: dropdownOption,
        },
      ];

      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.update,
        payload: _.extend({}, defaultPayload, { dropdownOptions: newDropdownOption }),
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length);
      expect(dropdownSearchState.filter((dropdownSearch: IDropdownSearchState) =>
        dropdownSearch.id === action.payload.id && dropdownSearch.options === newDropdownOption).length).toBe(1);
    });

    it('should return the new state with the isOpened toggle and the filterText reset to empty string on "FILTER_DROPDOWN_SEARCH"', () => {
      const newFilterText = 'new filter';
      const oldState: IDropdownSearchState[] = [
        {
          id: 'new-dropdown-search',
          isOpened: false,
          filterText: '',
        },
      ];

      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.filter,
        payload: _.extend({}, defaultPayload, { filterText: newFilterText }),
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length);
      expect(dropdownSearchState.filter(
        (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id &&
          dropdownSearch.filterText === newFilterText).length).toBe(1);
    });

    it('should return the new state with the selectedOptions modified on "SELECT_DROPDOWN_SEARCH"', () => {
      const selectedOption: IDropdownOption = { value: 'test', displayValue: 'yolo test' };
      const oldState: IDropdownSearchState[] = [
        {
          id: 'new-dropdown-search',
          isOpened: true,
        },
      ];

      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.select,
        payload: _.extend({}, defaultPayload, { addedSelectedOption: selectedOption }),
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length);
      expect(dropdownSearchState.filter(
        (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id &&
          _.where(dropdownSearch.options, { value: selectedOption.value })).length).toBe(1);
    });

    it(
      'should return the new state with the activeOption set, isOpened at true and setFocusOnDropdownButton at false if the keyCode is "Down Arrow" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
        const action: IReduxAction<IOptionsDropdownSearchPayload> = {
          type: DropdownSearchActions.active,
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.downArrow }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && dropdownSearch.activeOption.value === options[0].value
            && !dropdownSearch.setFocusOnDropdownButton
            && dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should return the new state with the activeOption set, isOpened at true and setFocusOnDropdownButton at false if the keyCode is "Up Arrow" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
        const action: IReduxAction<IOptionsDropdownSearchPayload> = {
          type: DropdownSearchActions.active,
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.upArrow }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && dropdownSearch.activeOption.value === options[0].value
            && !dropdownSearch.setFocusOnDropdownButton
            && dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should return the new state with the activeOption set with the option after this one set in activeOption in oldState if the keyCode is "Down Arrow" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.downArrow }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && dropdownSearch.activeOption.value === options[1].value
            && !dropdownSearch.setFocusOnDropdownButton
            && dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should return the new state with the activeOption set with the option before this one set in activeOption in oldState if the keyCode is "Up Arrow" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.upArrow }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && dropdownSearch.activeOption.value === options[0].value
            && !dropdownSearch.setFocusOnDropdownButton
            && dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should stay action on the last element if the keyCode is "Down Arrow" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.downArrow }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && dropdownSearch.activeOption &&
            dropdownSearch.activeOption.value === options[options.length - 1].value
            && !dropdownSearch.setFocusOnDropdownButton
            && dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should close the dropdown and remove the activeOption if the keyCode is "Up Arrow" with the first option on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.upArrow }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && !dropdownSearch.isOpened
            && dropdownSearch.setFocusOnDropdownButton).length).toBe(1);
      });

    it(
      'should return the new state with the activeOption undefined, isOpened at false and setFocusOnDropdownButton at true if the keyCode is "Enter" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.enter }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && _.isUndefined(dropdownSearch.activeOption)
            && dropdownSearch.setFocusOnDropdownButton
            && !dropdownSearch.isOpened
        ).length).toBe(1);
      });

    it(
      'should return the new state with the activeOption undefined, isOpened at false and setFocusOnDropdownButton at true if the keyCode is "Tab" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.tab }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && _.isUndefined(dropdownSearch.activeOption)
            && dropdownSearch.setFocusOnDropdownButton
            && !dropdownSearch.isOpened
        ).length).toBe(1);
      });

    it(
      'should not change the selectedOption with an activeOption undefined in the state if the keyCode is "Enter" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
        const oldState: IDropdownSearchState[] = [
          {
            id: 'new-dropdown-search',
            isOpened: false,
            options,
            activeOption: undefined,
          },
        ];
        const action: IReduxAction<IOptionsDropdownSearchPayload> = {
          type: DropdownSearchActions.active,
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.enter }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && _.isUndefined(dropdownSearch.activeOption)
            && _.isUndefined(dropdownSearch.selectedOption)).length).toBe(1);
      });

    it(
      'should not change the selectedOption with an activeOption undefined in the state if the keyCode is "Tab" on "ACTIVE_DROPDOWN_SEARCH"',
      () => {
        const oldState: IDropdownSearchState[] = [
          {
            id: 'new-dropdown-search',
            isOpened: false,
            options,
            activeOption: undefined,
          },
        ];
        const action: IReduxAction<IOptionsDropdownSearchPayload> = {
          type: DropdownSearchActions.active,
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.tab }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && _.isUndefined(dropdownSearch.activeOption)
            && _.isUndefined(dropdownSearch.selectedOption)).length).toBe(1);
      });

    it(
      'should return the new state with the activeOption undefined, isOpened at false and setFocusOnDropdownButton at true if the keyCode is "Tab" on ACTIVE_DROPDOWN_SEARCH',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.tab }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && _.isUndefined(dropdownSearch.activeOption)
            && dropdownSearch.setFocusOnDropdownButton
            && !dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should close the dropdown if the keyCode is "Escape" on ACTIVE_DROPDOWN_SEARCH',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: keyCode.escape }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.filter(
          (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id
            && !dropdownSearch.isOpened).length).toBe(1);
      });

    it(
      'should return oldstate with activeOption undefined and setFocusOnDropdownButton false if the keyCode is equal to -1 on ACTIVE_DROPDOWN_SEARCH',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: -1 }),
        };
        const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

        expect(dropdownSearchState.length).toBe(oldState.length);
        expect(dropdownSearchState[0]).toEqual(_.extend({}, oldState[0], {
          activeOption: undefined,
          setFocusOnDropdownButton: false,
        }));
      });

    it(
      'should return the oldState if the keyCode is not -1 or one of the keyCode for enter, tab, up_arrow and down_arrow',
      () => {
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
          payload: _.extend({}, defaultPayload, { keyCode: 1231 }),
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
        payload: _.extend({}, defaultPayload, { addedSelectedOption: options[0] }),
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState).toEqual(oldState);
    });

    describe('get displayed options', () => {

      it('should return all the options if selectedOptions is empty', () => {
        const state: IDropdownSearchState = {
          id: 'new-dropdown-search',
          options,
        };

        expect(getDisplayedOptions(state.options)).toEqual(options);
      });

      it('should return only the options that are not selected', () => {
        const state: IDropdownSearchState = {
          id: 'new-dropdown-search',
          options: [{ ...options[0], selected: true, hidden: true }, options[1], options[2]],
        };

        expect(getDisplayedOptions(state.options)).toEqual([options[1], options[2]]);
      });

      it('should return only the options in the right order', () => {
        const state: IDropdownSearchState = {
          id: 'new-dropdown-search',
          options: [options[0], { ...options[1], selected: true, hidden: true }, options[2]],
        };

        expect(getDisplayedOptions(state.options)).toEqual([options[0], options[2]]);
      });
    });

    describe('deselect last selected option', () => {
      it('should return an array of option without the last one', () => {
        const optionToBeRemoved: IDropdownOption = {
          value: 'value', displayValue: 'display', selected: true
        };

        const selectedOptions: IDropdownOption[] = [
          ...options, optionToBeRemoved
        ];

        expect(deselectLastSelectedOption(selectedOptions)).toEqual([...options,
        { ...optionToBeRemoved, selected: false, hidden: false }]);
      });

      it('should return an array equals to the one passed if there are no selected options', () => {
        const selectedOptions: IDropdownOption[] = [].concat(options);

        expect(deselectLastSelectedOption(selectedOptions)).toEqual(options);
      });
    });

    describe('add unique selected option', () => {
      it('should add a custom selected option', () => {
        const options: IDropdownOption[] = [];
        const value = 'Display value';

        expect(_.findWhere(addUniqueSelectedOption(options, value), { value, selected: true, custom: true })).toBeDefined();
      });

      it('should not add a custom selected option if another one with the same value is present', () => {
        const newOptions: IDropdownOption[] = [options[0]];

        expect(addUniqueSelectedOption(newOptions, options[0].value).length).toBe(1);
      });
    });

    describe('deselect all options', () => {
      it('should return an array with all option unselected', () => {
        const optionsToDeselect: IDropdownOption[] = [
          { ...options[0], selected: true },
          { ...options[1], selected: true },
          { ...options[2], selected: true },
        ];

        expect(_.where(deselectAllOptions(optionsToDeselect), { selected: true }).length).toBe(0);
      });

      it('should remove the custom options', () => {
        const optionsToDeselect: IDropdownOption[] = [
          { ...options[0], selected: true },
          { ...options[1], selected: true, custom: true },
          { ...options[2], selected: true, custom: true },
        ];

        const expectedDeselectedOptions: IDropdownOption[] = [{ ...options[0], selected: false, hidden: false }];

        expect(deselectAllOptions(optionsToDeselect)).toEqual(expectedDeselectedOptions);
      });
    });

    describe('deselect option', () => {
      it('should return an array with the right option unselected', () => {
        const optionsToDeselect: IDropdownOption[] = [
          { ...options[0], selected: true },
          { ...options[1], selected: true },
          { ...options[2], selected: true },
        ];

        expect(_.where(deselectOption(optionsToDeselect, options[0].value),
          { value: options[0].value, selected: false, hidden: false }).length).toBe(1);
      });

      it('should remove the option if it is custom', () => {
        const optionsToDeselect: IDropdownOption[] = [
          { ...options[0], selected: true },
          { ...options[1], selected: true },
          { ...options[2], selected: true, custom: true },
        ];

        expect(_.find(deselectOption(optionsToDeselect, options[2].value),
          { value: options[2].value })).toBeUndefined();
      });
    });
  });
});
