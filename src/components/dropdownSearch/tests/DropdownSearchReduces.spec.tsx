import { IReduxAction } from '../../../utils/ReduxUtils';
import { IDropdownOption } from '../DropdownSearch';
import {
  dropdownSearchInitialState,
  dropdownSearchReducer,
  dropdownsSearchInitialState,
  dropdownsSearchReducer,
  IDropdownSearchState,
} from '../DropdownSearchReducers';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import * as _ from 'underscore';
import { keyCode } from '../../../utils/InputUtils';

describe('DropdownSearch', () => {

  describe('DropdownSearchReducers', () => {

    const defaultAction = {
      type: 'default',
    };

    const defaultState = [
      {
        id: 'new-dropdown-search',
        isOpened: false,
      }, {
        id: 'new-dropdown-search-1',
        isOpened: false,
      }, {
        id: 'new-dropdown-search-2',
        isOpened: true,
      },
    ];
    const defaultPayload = { id: 'new-dropdown-search' };

    const options = [{ value: 'test 1' }, { value: 'test 2' }];
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
        payload: _.extend({}, defaultPayload, { optionsDropdown: newDropdownOption }),
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
          selectedOption: { value: 'test 1' },
        },
      ];

      const action: IReduxAction<IOptionsDropdownSearchPayload> = {
        type: DropdownSearchActions.select,
        payload: _.extend({}, defaultPayload, { selectedOption }),
      };
      const dropdownSearchState: IDropdownSearchState[] = dropdownsSearchReducer(oldState, action);

      expect(dropdownSearchState.length).toBe(oldState.length);
      expect(dropdownSearchState.filter(
        (dropdownSearch: IDropdownSearchState) => dropdownSearch.id === action.payload.id &&
          dropdownSearch.selectedOption.value === selectedOption.value).length).toBe(1);
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
            isOpened: false,
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
            && !dropdownSearch.isOpened).length).toBe(1);
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
      'should return  oldstate with activeOption undefined and setFocusOnDropdownButton false if the keyCode is equal to -1 on ACTIVE_DROPDOWN_SEARCH',
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
  });
});
