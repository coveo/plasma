import { IReduxAction } from '../../../utils/ReduxUtils';
import { IDropdownOption, IDropdownSearchState } from '../DropdownSearch';
import {
  dropdownSearchInitialState,
  dropdownSearchReducer,
  dropdownsSearchInitialState,
  dropdownsSearchReducer,
} from '../DropdownSearchReducers';
import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import * as _ from 'underscore';

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
        payload: _.extend({}, defaultPayload, { optionsDropDown: newDropdownOption }),
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
        (dropdownSearch: IOptionsDropdownSearchPayload) => dropdownSearch.id === action.payload.id &&
          dropdownSearch.filterText === newFilterText).length).toBe(1);
    });

    it('should return the new state with the selectedOption modified on "SELECT_DROPDOWN_SEARCH"', () => {
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
        (dropdownSearch: IOptionsDropdownSearchPayload) => dropdownSearch.id === action.payload.id &&
          dropdownSearch.selectedOption.value === selectedOption.value).length).toBe(1);
    });
  });
});
