import { IOptionPickerPayload, OptionPickerActions, IChangeOptionPayload } from '../OptionPickerActions';
import {
  IOptionPickerState,
  optionPickersReducer,
  optionPickersInitialState,
  optionPickerReducer,
  optionPickerInitialState
} from '../OptionPickerReducers';
import { IReduxAction } from '../../../utils/ReduxUtils';
import * as _ from 'underscore';

describe('Option picker', () => {

  const genericAction: IReduxAction<IOptionPickerPayload> = {
    type: 'DO_SOMETHING',
    payload: {
      id: 'some-option-picker'
    }
  };

  describe('optionPickersReducer', () => {
    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IOptionPickerState[] = undefined;
      let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, genericAction);

      expect(optionPickersState).toBe(optionPickersInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IOptionPickerState[] = [{ id: 'some-option-picker', selectedValue: 'anything', selectedLabel: 'the label' }];
      let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, genericAction);

      expect(optionPickersState).toBe(oldState);
    });

    it('should return the old state with one more IOptionPickerState when the action is "ADD_OPTION_PICKER"', () => {
      let oldState: IOptionPickerState[] = optionPickersInitialState;
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.add,
        payload: {
          id: 'some-option-picker'
        }
      };
      let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);

      expect(optionPickersState.length).toBe(oldState.length + 1);
      expect(optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id).length).toBe(1);

      oldState = optionPickersState;
      action.payload.id = 'some-option-picker2';
      optionPickersState = optionPickersReducer(oldState, action);

      expect(optionPickersState.length).toBe(oldState.length + 1);
      expect(optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the IOptionPickerState when the action is "REMOVE_OPTION_PICKER', () => {
      let oldState: IOptionPickerState[] = [
        {
          id: 'some-option-picker2',
          selectedValue: '',
          selectedLabel: ''
        }, {
          id: 'some-option-picker',
          selectedValue: 'something',
          selectedLabel: 'something'
        }, {
          id: 'some-option-picker3',
          selectedValue: 'nothing',
          selectedLabel: 'nothing'
        }
      ];
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.remove,
        payload: {
          id: 'some-option-picker'
        }
      };
      let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);

      expect(optionPickersState.length).toBe(oldState.length - 1);
      expect(optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id).length).toBe(0);

      oldState = optionPickersState;
      action.payload.id = 'some-option-picker2';
      optionPickersState = optionPickersReducer(oldState, action);

      expect(optionPickersState.length).toBe(oldState.length - 1);
      expect(optionPickersState.filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state when the action is "REMOVE_OPTION_PICKER" and the options cycle id does not exist',
      () => {
        let oldState: IOptionPickerState[] = [
          {
            id: 'some-option-picker2',
            selectedValue: '',
            selectedLabel: ''
          }, {
            id: 'some-option-picker',
            selectedValue: 'something',
            selectedLabel: 'something'
          }, {
            id: 'some-option-picker3',
            selectedValue: 'nothing',
            selectedLabel: 'nothing'
          }
        ];
        let action: IReduxAction<IOptionPickerPayload> = {
          type: OptionPickerActions.remove,
          payload: {
            id: 'some-option-picker4'
          }
        };
        let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);

        expect(optionPickersState.length).toBe(oldState.length);
        expect(optionPickersState
          .filter((optionPicker: IOptionPickerState) => optionPicker.id === action.payload.id).length).toBe(0);
      });

    it('should return the state with the new selected value and label for the option picker with the action id when' +
      'the action is "CHANGE_OPTION"', () => {
        let oldState: IOptionPickerState[] = [
          {
            id: 'some-option-picker2',
            selectedValue: '',
            selectedLabel: ''
          }, {
            id: 'some-option-picker',
            selectedValue: 'something',
            selectedLabel: 'something'
          }, {
            id: 'some-option-picker3',
            selectedValue: 'nothing',
            selectedLabel: 'nothing'
          }
        ];
        let action: IReduxAction<IChangeOptionPayload> = {
          type: OptionPickerActions.change,
          payload: {
            id: 'some-option-picker',
            value: 'new value',
            label: 'new label'
          }
        };
        let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);

        expect(_.findWhere(optionPickersState, { id: action.payload.id }).selectedValue).toBe(action.payload.value);
        expect(_.findWhere(optionPickersState, { id: action.payload.id }).selectedLabel).toBe(action.payload.label);
      });

    it('should reset all option pickers starting with the action id if the action is "RESET_OPTION_PICKERS"', () => {
      let oldState: IOptionPickerState[] = [
        {
          id: 'some-option-picker2',
          selectedValue: '',
          selectedLabel: ''
        }, {
          id: 'some-option-picker',
          selectedValue: 'something',
          selectedLabel: 'something'
        }, {
          id: 'some-option-picker3',
          selectedValue: 'nothing',
          selectedLabel: 'nothing'
        }, {
          id: 'other-id',
          selectedValue: 'this will not be reset',
          selectedLabel: 'this wont be rest either'
        }
      ];
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.reset,
        payload: {
          id: 'some-option-picker'
        }
      };
      let optionPickersState: IOptionPickerState[] = optionPickersReducer(oldState, action);

      expect(_.findWhere(optionPickersState, { id: 'some-option-picker2' }).selectedValue).toBe('');
      expect(_.findWhere(optionPickersState, { id: 'some-option-picker2' }).selectedLabel).toBe('');

      expect(_.findWhere(optionPickersState, { id: 'some-option-picker' }).selectedValue).toBe('');
      expect(_.findWhere(optionPickersState, { id: 'some-option-picker' }).selectedLabel).toBe('');

      expect(_.findWhere(optionPickersState, { id: 'some-option-picker3' }).selectedValue).toBe('');
      expect(_.findWhere(optionPickersState, { id: 'some-option-picker3' }).selectedLabel).toBe('');

      expect(_.findWhere(optionPickersState, { id: 'other-id' }).selectedValue).not.toBe('');
      expect(_.findWhere(optionPickersState, { id: 'other-id' }).selectedLabel).not.toBe('');
    });

    it('should not change the original state', () => {
      let expectedState = optionPickersInitialState.slice(0);
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.add,
        payload: {
          id: 'some-option-picker'
        }
      };
      optionPickersReducer(optionPickersInitialState, action);

      expect(expectedState).toEqual(optionPickersInitialState);
    });
  });

  describe('optionPickerReducer', () => {
    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IOptionPickerState = undefined;
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, genericAction);

      expect(optionPickerState).toBe(optionPickerInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IOptionPickerState = { id: 'some-option-picker', selectedValue: 'anything', selectedLabel: 'aaa' };
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, genericAction);

      expect(optionPickerState).toBe(oldState);
    });

    it('should return a new option picker with the specified id when the action is "ADD_OPTION_PICKER"', () => {
      let oldState: IOptionPickerState = optionPickerInitialState;
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.add,
        payload: {
          id: 'some-option-picker'
        }
      };
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);

      expect(optionPickerState.id).toBe(action.payload.id);
      expect(optionPickerState.selectedValue).toBe('');
      expect(optionPickerState.selectedValue).toBe('');
    });

    it('should return the original state if the action is "CHANGE_OPTION" and the id is not the one specified in the action', () => {
      let oldState: IOptionPickerState = {
        id: 'some-option-picker',
        selectedValue: 'anything',
        selectedLabel: 'aaa'
      };
      let action: IReduxAction<IChangeOptionPayload> = {
        type: OptionPickerActions.change,
        payload: {
          id: 'some-option-picker5',
          value: 'nothing',
          label: 'bbb'
        }
      };
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);

      expect(optionPickerState.selectedValue).toBe(oldState.selectedValue);
      expect(optionPickerState.selectedLabel).toBe(oldState.selectedLabel);
    });

    it('should return the option picker with a new selected value and label when the action is "CHANGE_OPTION" and the id is the one specified', () => {
      let oldState: IOptionPickerState = {
        id: 'some-option-picker',
        selectedValue: 'anything',
        selectedLabel: 'aaa'
      };
      let action: IReduxAction<IChangeOptionPayload> = {
        type: OptionPickerActions.change,
        payload: {
          id: 'some-option-picker',
          value: 'nothing',
          label: 'bbb'
        }
      };
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);

      expect(optionPickerState.selectedValue).toBe(action.payload.value);
      expect(optionPickerState.selectedLabel).toBe(action.payload.label);
    });

    it('should return the option picker as is if the action is "RESET_OPTION_PICKERS" and the id does not start with the one from the action', () => {
      let oldState: IOptionPickerState = {
        id: 'some-option-picker',
        selectedValue: 'anything',
        selectedLabel: 'aaa'
      };
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.reset,
        payload: {
          id: 'option-picker'
        }
      };
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);

      expect(optionPickerState.selectedValue).toBe(oldState.selectedValue);
      expect(optionPickerState.selectedLabel).toBe(oldState.selectedLabel);
    });

    it('should return the option picker without a selected value if the action is "RESET_OPTION_PICKERS" and the id starts with the one from the action', () => {
      let oldState: IOptionPickerState = {
        id: 'some-option-picker',
        selectedValue: 'anything',
        selectedLabel: 'aaa'
      };
      let action: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.reset,
        payload: {
          id: 'some-option'
        }
      };
      let optionPickerState: IOptionPickerState = optionPickerReducer(oldState, action);

      expect(optionPickerState.selectedValue).toBe('');
      expect(optionPickerState.selectedLabel).toBe('');
    });

    it('should not change the original state', () => {
      let expectedState = _.extend({}, optionPickerInitialState);
      let action: IReduxAction<IChangeOptionPayload> = {
        type: OptionPickerActions.change,
        payload: {
          id: 'some-option-picker',
          value: 'a value',
          label: 'a label'
        }
      };
      optionPickerReducer(optionPickerInitialState, action);

      expect(expectedState).toEqual(optionPickerInitialState);
    });
  });
});
