import { IReduxAction } from '../../../utils/ReduxUtils';
import { IActionBarPayload, ActionBarActions, IChangeActionBarActionsPayload } from '../ActionBarActions';
import {
  IActionBarState,
  actionBarsInitialState,
  actionBarsReducer,
  actionBarInitialState,
  actionBarReducer
} from '../ActionBarReducers';
import { turnOnLoading, turnOffLoading } from '../../loading/LoadingActions';
import * as _ from 'underscore';

describe('Actions', () => {

  describe('actionBars', () => {
    let genericAction: IReduxAction<IActionBarPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'some-action-bar'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IActionBarState[] = undefined;
      let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, genericAction);

      expect(actionBarsState).toBe(actionBarsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one action bar', () => {
      let oldState: IActionBarState = undefined;
      let actionBarState: IActionBarState = actionBarReducer(oldState, genericAction);

      expect(actionBarState).toBe(actionBarInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IActionBarState[] = [actionBarInitialState];
      let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, genericAction);

      expect(actionBarsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one action bar', () => {
      let oldState: IActionBarState = actionBarInitialState;
      let actionBarState: IActionBarState = actionBarReducer(oldState, genericAction);

      expect(actionBarState).toBe(oldState);
    });

    it('should return the old state with one more ActionBarState when the action is "ADD_ACTION_BAR"', () => {
      let oldState: IActionBarState[] = actionBarsInitialState;
      let action: IReduxAction<IActionBarPayload> = {
        type: ActionBarActions.add,
        payload: {
          id: 'some-action-bar'
        }
      };
      let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

      expect(actionBarsState.length).toBe(oldState.length + 1);
      expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(1);

      oldState = actionBarsState;
      action.payload.id = 'some-action-bar2';
      actionBarsState = actionBarsReducer(oldState, action);

      expect(actionBarsState.length).toBe(oldState.length + 1);
      expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(1);
    });

    describe('with action bars in the state', () => {
      let oldState: IActionBarState[];

      beforeEach(() => {
        oldState = [
          {
            id: 'some-action-bar2',
            actions: undefined
          }, {
            id: 'some-action-bar',
            actions: undefined
          }, {
            id: 'some-action-bar3',
            actions: undefined
          }
        ];
      });

      it('should return the old state without the PromptState with the prompt id when the action is "REMOVE_ACTION_BAR', () => {
        const action: IReduxAction<IActionBarPayload> = {
          type: ActionBarActions.remove,
          payload: {
            id: oldState[1].id
          }
        };
        let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

        expect(actionBarsState.length).toBe(oldState.length - 1);
        expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(0);

        oldState = actionBarsState;
        action.payload.id = oldState[0].id;
        actionBarsState = actionBarsReducer(oldState, action);

        expect(actionBarsState.length).toBe(oldState.length - 1);
        expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(0);
      });

      it('should return the old state when the action is "REMOVE_ACTION_BAR" and the prompt id does not exist', () => {
        const action: IReduxAction<IActionBarPayload> = {
          type: ActionBarActions.remove,
          payload: {
            id: 'i do not exist'
          }
        };
        const actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

        expect(actionBarsState.length).toBe(oldState.length);
        expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(0);
      });

      it('should add the model (with its actions) to the action bar when the action is "ADD_ACTIONS"', () => {
        const action: IReduxAction<IChangeActionBarActionsPayload> = {
          type: ActionBarActions.addActions,
          payload: {
            id: oldState[2].id,
            actions: [{ enabled: true }]
          }
        };

        const actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

        expect(actionBarsState.length).toBe(oldState.length);
        expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id)[0].actions).toBeDefined();
        expect(actionBarsState.filter(actionBar => actionBar.id !== action.payload.id)[0].actions).toBeUndefined();
      });

      it('should set the actionbar isLoading prop to true when a loading action is dispatched and contain its id', () => {
        const actionBarsState = actionBarsReducer(oldState, turnOnLoading([oldState[2].id]));

        expect(_.findWhere(actionBarsState, { id: oldState[2].id }).isLoading).toBe(true);
        expect(actionBarsState.filter((actionBar => actionBar.id !== oldState[2].id)))
          .toEqual(oldState.filter((actionBar => actionBar.id !== oldState[2].id)));
      });

      it('should set the actionbar isLoading prop to false when a loading action is dispatched and contain its id', () => {
        const actionBarsState = actionBarsReducer(oldState, turnOffLoading([oldState[2].id]));

        expect(_.findWhere(actionBarsState, { id: oldState[2].id }).isLoading).toBe(false);
        expect(actionBarsState.filter((actionBar => actionBar.id !== oldState[2].id)))
          .toEqual(oldState.filter((actionBar => actionBar.id !== oldState[2].id)));
      });
    });
  });
});
