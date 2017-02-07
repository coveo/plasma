import {
  IOptionsCycleState,
  optionsCyclesInitialState,
  optionsCyclesReducer,
  optionsCycleReducer,
  optionsCycleInitialState
} from '../OptionsCycleReducers';
import { OptionsCycleActions, IChangeOptionsCyclePayload, IOptionsCyclePayload } from '../OptionsCycleActions';
import { IReduxAction } from '../../../utils/ReduxUtils';
import * as _ from 'underscore';

describe('Options cycle', () => {

  const genericAction: IReduxAction<IOptionsCyclePayload> = {
    type: 'DO_SOMETHING',
    payload: {
      id: 'some-options-cycle'
    }
  };

  describe('optionsCyclesReducer', () => {
    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IOptionsCycleState[] = undefined;
      let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, genericAction);

      expect(optionsCyclesState).toBe(optionsCyclesInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IOptionsCycleState[] = [{ id: 'some-options-cycle', currentOption: 3 }];
      let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, genericAction);

      expect(optionsCyclesState).toBe(oldState);
    });

    it('should return the old state with one more IOptionsCycleState when the action is "ADD_OPTIONS_CYCLE"', () => {
      let oldState: IOptionsCycleState[] = optionsCyclesInitialState;
      let action: IReduxAction<IChangeOptionsCyclePayload> = {
        type: OptionsCycleActions.add,
        payload: {
          id: 'some-options-cycle',
          currentOption: 2
        }
      };
      let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);

      expect(optionsCyclesState.length).toBe(oldState.length + 1);
      expect(optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id).length).toBe(1);

      oldState = optionsCyclesState;
      action.payload.id = 'some-options-cycle2';
      optionsCyclesState = optionsCyclesReducer(oldState, action);

      expect(optionsCyclesState.length).toBe(oldState.length + 1);
      expect(optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the IOptionsCycleState when the action is "REMOVE_OPTIONS_CYCLE', () => {
      let oldState: IOptionsCycleState[] = [
        {
          id: 'some-options-cycle2',
          currentOption: 1
        }, {
          id: 'some-options-cycle',
          currentOption: 0
        }, {
          id: 'some-options-cycle3',
          currentOption: 2
        }
      ];
      let action: IReduxAction<IOptionsCyclePayload> = {
        type: OptionsCycleActions.remove,
        payload: {
          id: 'some-options-cycle'
        }
      };
      let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);

      expect(optionsCyclesState.length).toBe(oldState.length - 1);
      expect(optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id).length).toBe(0);

      oldState = optionsCyclesState;
      action.payload.id = 'some-options-cycle2';
      optionsCyclesState = optionsCyclesReducer(oldState, action);

      expect(optionsCyclesState.length).toBe(oldState.length - 1);
      expect(optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state when the action is "REMOVE_OPTIONS_CYCLE" and the options cycle id does not exist', () => {
      let oldState: IOptionsCycleState[] = [
        {
          id: 'some-options-cycle2',
          currentOption: 4
        }, {
          id: 'some-options-cycle',
          currentOption: 2
        }, {
          id: 'some-options-cycle3',
          currentOption: 1
        }
      ];
      let action: IReduxAction<IOptionsCyclePayload> = {
        type: OptionsCycleActions.remove,
        payload: {
          id: 'some-option-cycle4'
        }
      };
      let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);

      expect(optionsCyclesState.length).toBe(oldState.length);
      expect(optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id === action.payload.id).length).toBe(0);
    });

    it('should return the state with the new current option for the options cycle with the action id when the action is "CHANGE_OPTIONS_CYCLE"', () => {
      let oldState: IOptionsCycleState[] = [
        {
          id: 'some-options-cycle2',
          currentOption: 7
        }, {
          id: 'some-options-cycle',
          currentOption: 9
        }, {
          id: 'some-options-cycle3',
          currentOption: 3
        }
      ];
      let action: IReduxAction<IChangeOptionsCyclePayload> = {
        type: OptionsCycleActions.change,
        payload: {
          id: 'some-options-cycle',
          currentOption: 4
        }
      };
      let optionsCyclesState: IOptionsCycleState[] = optionsCyclesReducer(oldState, action);
      expect(_.findWhere(optionsCyclesState, { id: action.payload.id }).currentOption).toBe(action.payload.currentOption);
      expect(optionsCyclesState.filter((optionsCycle: IOptionsCycleState) => optionsCycle.id !== action.payload.id).length).toBe(2);
    });

    it('should not change the original state', () => {
      let expectedState = optionsCyclesInitialState.slice(0);
      let action: IReduxAction<IOptionsCyclePayload> = {
        type: OptionsCycleActions.add,
        payload: {
          id: 'some-options-cycle'
        }
      };
      optionsCyclesReducer(optionsCyclesInitialState, action);

      expect(expectedState).toEqual(optionsCyclesInitialState);
    });
  });

  describe('optionsCycleReducer', () => {
    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IOptionsCycleState = undefined;
      let optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, genericAction);

      expect(optionsCycleState).toBe(optionsCycleInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IOptionsCycleState = { id: 'some-option-cycle', currentOption: 2 };
      let optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, genericAction);

      expect(optionsCycleState).toBe(oldState);
    });

    it('should return a new options cycle with the specified id and current option when the action is "ADD_OPTIONS_CYCLE"', () => {
      let oldState: IOptionsCycleState = optionsCycleInitialState;
      let action: IReduxAction<IChangeOptionsCyclePayload> = {
        type: OptionsCycleActions.add,
        payload: {
          id: 'some-options-cycle',
          currentOption: 4
        }
      };
      let optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);

      expect(optionsCycleState.id).toBe(action.payload.id);
      expect(optionsCycleState.currentOption).toBe(action.payload.currentOption);
    });

    it('should return the original state if the action is "CHANGE_OPTIONS_CYCLE" and the id is not the one specified in the action', () => {
      let oldState: IOptionsCycleState = {
        id: 'some-options-cycle',
        currentOption: 7
      };
      let action: IReduxAction<IChangeOptionsCyclePayload> = {
        type: OptionsCycleActions.change,
        payload: {
          id: 'some-options-cycle5',
          currentOption: 2
        }
      };
      let optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);

      expect(optionsCycleState.currentOption).toBe(oldState.currentOption);
    });

    it('should return the options cycle with a new item when the action is "CHANGE_OPTIONS_CYCLE" and the id is the one specified', () => {
      let oldState: IOptionsCycleState = {
        id: 'some-options-cycle',
        currentOption: 2
      };
      let action: IReduxAction<IChangeOptionsCyclePayload> = {
        type: OptionsCycleActions.change,
        payload: {
          id: 'some-options-cycle',
          currentOption: 3
        }
      };
      let optionsCycleState: IOptionsCycleState = optionsCycleReducer(oldState, action);

      expect(optionsCycleState.currentOption).toBe(action.payload.currentOption);
    });

    it('should not change the original state', () => {
      let expectedState = _.extend({}, optionsCycleInitialState);
      let action: IReduxAction<IChangeOptionsCyclePayload> = {
        type: OptionsCycleActions.change,
        payload: {
          id: 'some-options-cycle',
          currentOption: 3
        }
      };
      optionsCycleReducer(optionsCycleInitialState, action);

      expect(expectedState).toEqual(optionsCycleInitialState);
    });
  });
});
