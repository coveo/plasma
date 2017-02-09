import { IReduxAction } from '../../../utils/ReduxUtils';
import { IReduxActionsPayload } from '../../../ReactVapor';
import { OptionsCycleActions, addOptionsCycle, changeOptionsCycle, removeOptionsCycle } from '../OptionsCycleActions';

describe('Options cycle', () => {

  describe('OptionsCycleActions', () => {

    const OPTIONS_CYCLE_ID: string = 'option-cycle';
    const CURRENT_OPTION: number = 3;

    it('should create an action to add the options cycle', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionsCycleActions.add,
        payload: {
          id: OPTIONS_CYCLE_ID,
          currentOption: CURRENT_OPTION
        }
      };

      expect(addOptionsCycle(OPTIONS_CYCLE_ID, CURRENT_OPTION)).toEqual(expectedAction);
    });

    it('should create an action to change the options cycle', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionsCycleActions.change,
        payload: {
          id: OPTIONS_CYCLE_ID,
          currentOption: CURRENT_OPTION
        }
      };

      expect(changeOptionsCycle(OPTIONS_CYCLE_ID, CURRENT_OPTION)).toEqual(expectedAction);
    });

    it('should create an action to remove the options cycle', () => {
      let expectedAction: IReduxAction<IReduxActionsPayload> = {
        type: OptionsCycleActions.remove,
        payload: {
          id: OPTIONS_CYCLE_ID
        }
      };

      expect(removeOptionsCycle(OPTIONS_CYCLE_ID)).toEqual(expectedAction);
    });
  });
});
