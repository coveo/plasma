import { IPerPageActionPayload, PerPageActions, IChangePerPageActionPayload } from '../NavigationPerPageActions';
import { IReduxAction } from '../../../../utils/ReduxUtils';
import {
  IPerPageState,
  perPageCompositeReducer,
  perPageCompositeInitialState,
  perPageReducer,
  perPageInitialState
} from '../NavigationPerPageReducers';

describe('Reducers', () => {

  describe('NavigationPerPageReducers', () => {
    let genericAction: IReduxAction<IChangePerPageActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'per-page',
        perPage: 20
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IPerPageState[] = undefined;
      let perPageCompositeState = perPageCompositeReducer(oldState, genericAction);

      expect(perPageCompositeState).toBe(perPageCompositeInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for a specific perPage', () => {
      let oldState: IPerPageState = undefined;
      let perPageState = perPageReducer(oldState, genericAction);

      expect(perPageState).toBe(perPageInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IPerPageState[] = [perPageInitialState];
      let perPageCompositeState: IPerPageState[] = perPageCompositeReducer(oldState, genericAction);

      expect(perPageCompositeState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for a specific perPage', () => {
      let oldState: IPerPageState = {
        id: 'per-page',
        perPage: 20
      };
      let pageNbState = perPageReducer(oldState, genericAction);

      expect(pageNbState).toBe(oldState);
    });

    it('should return the old state with one more PerPageState when the action is "ADD_PER_PAGE"', () => {
      let oldState: IPerPageState[] = perPageCompositeInitialState;
      let action: IReduxAction<IChangePerPageActionPayload> = {
        type: PerPageActions.add,
        payload: {
          id: 'per-page',
          perPage: 30
        }
      };
      let perPageCompositeState: IPerPageState[] = perPageCompositeReducer(oldState, action);

      expect(perPageCompositeState.length).toBe(oldState.length + 1);
      expect(perPageCompositeState.filter(p => p.id === action.payload.id).length).toBe(1);

      oldState = perPageCompositeState;
      action.payload.id = 'per-page2';
      perPageCompositeState = perPageCompositeReducer(oldState, action);

      expect(perPageCompositeState.length).toBe(oldState.length + 1);
      expect(perPageCompositeState.filter(p => p.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the PerPageState with the action id when the action is "REMOVE_PER_PAGE"', () => {
      let oldState: IPerPageState[] = [
        {
          id: 'per-page',
          perPage: 20
        }, {
          id: 'per-page2',
          perPage: 50
        }, {
          id: 'per-page1',
          perPage: 300
        }
      ];
      let action: IReduxAction<IPerPageActionPayload> = {
        type: PerPageActions.remove,
        payload: {
          id: 'per-page2'
        }
      };
      let perPageCompositeState: IPerPageState[] = perPageCompositeReducer(oldState, action);

      expect(perPageCompositeState.length).toBe(oldState.length - 1);
      expect(perPageCompositeState.filter(p => p.id === action.payload.id).length).toBe(0);

      oldState = perPageCompositeState;
      action.payload.id = 'per-page';
      perPageCompositeState = perPageCompositeReducer(oldState, action);

      expect(perPageCompositeState.length).toBe(oldState.length - 1);
      expect(perPageCompositeState.filter(p => p.id === action.payload.id).length).toBe(0);
    });

    it('should change the page number of the action id when action is "CHANGE_PER_PAGE"', () => {
      let oldState: IPerPageState = {
        id: 'per-page',
        perPage: 20
      };
      let newState: IPerPageState = {
        id: 'per-page',
        perPage: 10
      };
      let action: IReduxAction<IPerPageActionPayload> = {
        type: PerPageActions.change,
        payload: newState
      };
      let perPageCompositeState = perPageCompositeReducer([oldState], action);

      expect(perPageCompositeState[0]).toEqual(jasmine.objectContaining(newState));
    });
  });
});
