import {
  ISubNavigationState,
  subNavigationsReducer,
  subNavigationReducer,
  subNavigationsInitialState,
  subNavigationInitialState
} from '../SubNavigationReducers';
import { IReduxAction } from '../../../utils/ReduxUtils';
import { ISubNavigationActionPayload, SubNavigationActions } from '../SubNavigationActions';
import { findWhere } from 'underscore';

describe('Reducers', () => {
  describe('subNavigations', () => {
    let genericAction: IReduxAction<ISubNavigationActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'sub-navigation'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: ISubNavigationState[] = undefined;
      let newState: ISubNavigationState[] = subNavigationsReducer(oldState, genericAction);

      expect(newState).toBe(subNavigationsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one sub navigation', () => {
      let oldState: ISubNavigationState = undefined;
      let newState: ISubNavigationState = subNavigationReducer(oldState, genericAction);

      expect(newState).toBe(subNavigationInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: ISubNavigationState[] = [subNavigationInitialState];
      let newState: ISubNavigationState[] = subNavigationsReducer(oldState, genericAction);

      expect(newState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one facet', () => {
      let oldState: ISubNavigationState = subNavigationInitialState;
      let newState: ISubNavigationState = subNavigationReducer(oldState, genericAction);

      expect(newState).toBe(oldState);
    });

    it('should return the old state with one more SubNavigationState when the action is "ADD_SUB_NAVIGATION"', () => {
      let oldState: ISubNavigationState[] = subNavigationsInitialState;
      let action: IReduxAction<ISubNavigationActionPayload> = {
        type: SubNavigationActions.add,
        payload: {
          id: 'one'
        }
      };
      let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);

      expect(newState.length).toBe(oldState.length + 1);
      expect(newState.filter(subNav => subNav.id === action.payload.id).length).toBe(1);

      oldState = newState;
      action.payload.id = 'two';
      newState = subNavigationsReducer(oldState, action);

      expect(newState.length).toBe(oldState.length + 1);
      expect(newState.filter(subNav => subNav.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the SubNavigationState with the action facet when the action is "REMOVE_SUB_NAVIGATION"',
      () => {
        let firstIdtoRemove = 'sub-nav-3';
        let secondIdtoRemove = 'sub-nav-2';
        let oldState: ISubNavigationState[] = [
          {
            id: secondIdtoRemove,
            selected: ''
          }, {
            id: firstIdtoRemove,
            selected: 'one'
          }, {
            id: 'sub-nav-1',
            selected: 'test'
          }
        ];
        let action: IReduxAction<ISubNavigationActionPayload> = {
          type: SubNavigationActions.remove,
          payload: {
            id: firstIdtoRemove
          }
        };
        let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);

        expect(newState.length).toBe(oldState.length - 1);
        expect(newState.filter(subNav => subNav.id === action.payload.id).length).toBe(0);

        oldState = newState;
        action.payload.id = secondIdtoRemove;
        newState = subNavigationsReducer(oldState, action);

        expect(newState.length).toBe(oldState.length - 1);
        expect(newState.filter(subNav => subNav.id === action.payload.id).length).toBe(0);
      });

    it('should set the selected value in SubNavigationState when the action is "SELECT_SUB_NAVIGATION"', () => {
      let firstIdToSet = 'sub-nav-1';
      let firstExpectedSelected = 'k';

      let secondIdToSet = 'sub-nav-2';
      let secondExpectedSelected = 'k-again';

      let oldState: ISubNavigationState[] = [
        {
          id: secondIdToSet,
          selected: ''
        }, {
          id: 'sub-nav-3',
          selected: 'one'
        }, {
          id: firstIdToSet,
          selected: 'test'
        }
      ];
      let action: IReduxAction<ISubNavigationActionPayload> = {
        type: SubNavigationActions.select,
        payload: {
          id: firstIdToSet,
          selected: firstExpectedSelected,
        }
      };
      let newState: ISubNavigationState[] = subNavigationsReducer(oldState, action);

      expect(findWhere(newState, { id: firstIdToSet }).selected).toBe(firstExpectedSelected);

      action.payload = { id: secondIdToSet, selected: secondExpectedSelected };
      newState = subNavigationsReducer(oldState, action);

      expect(findWhere(newState, { id: secondIdToSet }).selected).toBe(secondExpectedSelected);
    });
  });
});
