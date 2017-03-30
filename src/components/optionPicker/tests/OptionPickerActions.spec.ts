import { IReduxAction } from '../../../utils/ReduxUtils';
import { IOptionPickerPayload, IChangeOptionPayload } from '../OptionPickerActions';
import {
  changeOptionPicker,
  removeOptionPicker,
  addOptionPicker,
  resetOptionPickers,
  OptionPickerActions
} from '../OptionPickerActions';

describe('Option picker', () => {

  describe('OptionsPickerActions', () => {

    const OPTION_PICKER_ID: string = 'option-picker';

    it('should create an action to add the option picker', () => {
      let expectedAction: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.add,
        payload: {
          id: OPTION_PICKER_ID
        }
      };

      expect(addOptionPicker(OPTION_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to remove the option picker', () => {
      let expectedAction: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.remove,
        payload: {
          id: OPTION_PICKER_ID
        }
      };

      expect(removeOptionPicker(OPTION_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to change the option picker value', () => {
      let expectedValue: string = 'any value we want';
      let expectedLabel: string = 'any label';
      let expectedAction: IReduxAction<IChangeOptionPayload> = {
        type: OptionPickerActions.change,
        payload: {
          id: OPTION_PICKER_ID,
          value: expectedValue,
          label: expectedLabel
        }
      };

      expect(changeOptionPicker(OPTION_PICKER_ID, expectedLabel, expectedValue)).toEqual(expectedAction);
    });

    it('should create an action to reset the option pickers', () => {
      let expectedAction: IReduxAction<IOptionPickerPayload> = {
        type: OptionPickerActions.reset,
        payload: {
          id: OPTION_PICKER_ID
        }
      };

      expect(resetOptionPickers(OPTION_PICKER_ID)).toEqual(expectedAction);
    });
  });
});
