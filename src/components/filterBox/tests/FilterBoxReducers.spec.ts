import { IReduxAction } from '../../../utils/ReduxUtils';
import { IFilterActionPayload, FilterActions, IChangeFilterActionPayload } from '../FilterBoxActions';
import {
  IFilterState,
  filterBoxesReducer,
  filtersInitialState,
  filterBoxReducer,
  filterBoxInitialState
} from '../FilterBoxReducers';

describe('FilterBox', () => {

  describe('FilterBoxReducers', () => {
    let genericAction: IReduxAction<IFilterActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'some-filter'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IFilterState[] = undefined;
      let filtersState: IFilterState[] = filterBoxesReducer(oldState, genericAction);

      expect(filtersState).toBe(filtersInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one filter box', () => {
      let oldState: IFilterState = undefined;
      let filterBoxState: IFilterState = filterBoxReducer(oldState, genericAction);

      expect(filterBoxState).toBe(filterBoxInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IFilterState[] = [filterBoxInitialState];
      let filtersState: IFilterState[] = filterBoxesReducer(oldState, genericAction);

      expect(filtersState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one filter box', () => {
      let oldState: IFilterState = filterBoxInitialState;
      let filterBoxState: IFilterState = filterBoxReducer(oldState, genericAction);

      expect(filterBoxState).toBe(oldState);
    });

    it('should return the old state with one more FilterState when the action is "FilterActions.addFilter"', () => {
      let oldState: IFilterState[] = filtersInitialState;
      let action: IReduxAction<IFilterActionPayload> = {
        type: FilterActions.addFilter,
        payload: {
          id: 'some-filter'
        }
      };
      let filtersState: IFilterState[] = filterBoxesReducer(oldState, action);

      expect(filtersState.length).toBe(oldState.length + 1);
      expect(filtersState.filter(filterBox => filterBox.id === action.payload.id).length).toBe(1);

      oldState = filtersState;
      action.payload.id = 'some-filter2';
      filtersState = filterBoxesReducer(oldState, action);

      expect(filtersState.length).toBe(oldState.length + 1);
      expect(filtersState.filter(filterBox => filterBox.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the FilterState with the timer id when the action is "FilterActions.removeFilter"', () => {
      let oldState: IFilterState[] = [
        {
          id: 'some-filter2',
          filterText: ''
        }, {
          id: 'some-filter1',
          filterText: 'sdf'
        }, {
          id: 'some-filter3',
          filterText: ''
        }
      ];
      let action: IReduxAction<IFilterActionPayload> = {
        type: FilterActions.removeFilter,
        payload: {
          id: 'some-filter1'
        }
      };
      let filtersState: IFilterState[] = filterBoxesReducer(oldState, action);

      expect(filtersState.length).toBe(oldState.length - 1);
      expect(filtersState.filter(filterBox => filterBox.id === action.payload.id).length).toBe(0);

      oldState = filtersState;
      action.payload.id = 'some-filter2';
      filtersState = filterBoxesReducer(oldState, action);

      expect(filtersState.length).toBe(oldState.length - 1);
      expect(filtersState.filter(timer => timer.id === action.payload.id).length).toBe(0);
    });

    it('should update the filter text of a filter box when the action is "FilterActions.filterThrough"', () => {
      let oldState: IFilterState[] = [
        {
          id: 'some-filter2',
          filterText: ''
        }, {
          id: 'some-filter1',
          filterText: 'sdf'
        }, {
          id: 'some-filter3',
          filterText: ''
        }
      ];
      let newFilter = 'something';
      let action: IReduxAction<IChangeFilterActionPayload> = {
        type: FilterActions.filterThrough,
        payload: {
          id: 'some-filter1',
          filterText: newFilter
        }
      };
      let filtersState: IFilterState[] = filterBoxesReducer(oldState, action);

      expect(filtersState.length).toBe(oldState.length);
      expect(filtersState.filter(filterBox => filterBox.id === action.payload.id)[0].filterText).toBe(newFilter);
    });
  });
});
