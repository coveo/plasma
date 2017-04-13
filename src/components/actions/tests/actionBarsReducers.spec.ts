import { IReduxAction } from '../../../utils/ReduxUtils';
import { IActionBarPayload, ActionBarActions, IChangeActionBarActionsPayload } from '../ActionBarActions';
import {
  IActionBarState,
  actionBarsInitialState,
  actionBarsReducer,
  actionBarInitialState,
  actionBarReducer
} from '../ActionBarReducers';

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

    it('should return the old state without the PromptState with the prompt id when the action is "REMOVE_ACTION_BAR', () => {
      let oldState: IActionBarState[] = [
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
      let action: IReduxAction<IActionBarPayload> = {
        type: ActionBarActions.remove,
        payload: {
          id: 'some-action-bar'
        }
      };
      let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

      expect(actionBarsState.length).toBe(oldState.length - 1);
      expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(0);

      oldState = actionBarsState;
      action.payload.id = 'some-action-bar2';
      actionBarsState = actionBarsReducer(oldState, action);

      expect(actionBarsState.length).toBe(oldState.length - 1);
      expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state when the action is "REMOVE_ACTION_BAR" and the prompt id does not exist', () => {
      let oldState: IActionBarState[] = [
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
      let action: IReduxAction<IActionBarPayload> = {
        type: ActionBarActions.remove,
        payload: {
          id: 'some-action-bar4'
        }
      };
      let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

      expect(actionBarsState.length).toBe(oldState.length);
      expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id).length).toBe(0);
    });

    it('should add the model (with its actions) to the action bar when the action is "ADD_ACTIONS"', () => {
      let oldState: IActionBarState[] = [
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

      let action: IReduxAction<IChangeActionBarActionsPayload> = {
        type: ActionBarActions.addActions,
        payload: {
          id: 'some-action-bar3',
          actions: [{ enabled: true }]
        }
      };

      let actionBarsState: IActionBarState[] = actionBarsReducer(oldState, action);

      expect(actionBarsState.length).toBe(oldState.length);
      expect(actionBarsState.filter(actionBar => actionBar.id === action.payload.id)[0].actions).toBeDefined();
      expect(actionBarsState.filter(actionBar => actionBar.id !== action.payload.id)[0].actions).toBeUndefined();
    });
  });
});
