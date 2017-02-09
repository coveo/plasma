import { IReduxAction } from '../../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../../ReactVapor';
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
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionPickerActions.add,
        payload: {
          id: OPTION_PICKER_ID
        }
      };

      expect(addOptionPicker(OPTION_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to remove the option picker', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionPickerActions.remove,
        payload: {
          id: OPTION_PICKER_ID
        }
      };

      expect(removeOptionPicker(OPTION_PICKER_ID)).toEqual(expectedAction);
    });

    it('should create an action to change the option picker value', () => {
      let expectedValue: string = 'any value we want';
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionPickerActions.change,
        payload: {
          id: OPTION_PICKER_ID,
          value: expectedValue
        }
      };

      expect(changeOptionPicker(OPTION_PICKER_ID, expectedValue)).toEqual(expectedAction);
    });

    it('should create an action to reset the option pickers', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionPickerActions.reset,
        payload: {
          id: OPTION_PICKER_ID
        }
      };

      expect(resetOptionPickers(OPTION_PICKER_ID)).toEqual(expectedAction);
    });
  });
});
