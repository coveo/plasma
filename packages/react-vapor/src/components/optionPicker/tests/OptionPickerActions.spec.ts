import {IReduxAction} from '../../../utils/ReduxUtils';
import {IChangeOptionPayload, IOptionPickerPayload} from '../OptionPickerActions';
import {
    addOptionPicker,
    changeOptionPicker,
    OptionPickerActions,
    removeOptionPicker,
    resetOptionPickers,
} from '../OptionPickerActions';

describe('Option picker', () => {
    describe('OptionsPickerActions', () => {
        const OPTION_PICKER_ID: string = 'option-picker';

        it('should create an action to add the option picker', () => {
            const expectedAction: IReduxAction<IOptionPickerPayload> = {
                type: OptionPickerActions.add,
                payload: {
                    id: OPTION_PICKER_ID,
                },
            };

            expect(addOptionPicker(OPTION_PICKER_ID)).toEqual(expectedAction);
        });

        it('should create an action to remove the option picker', () => {
            const expectedAction: IReduxAction<IOptionPickerPayload> = {
                type: OptionPickerActions.remove,
                payload: {
                    id: OPTION_PICKER_ID,
                },
            };

            expect(removeOptionPicker(OPTION_PICKER_ID)).toEqual(expectedAction);
        });

        it('should create an action to change the option picker value', () => {
            const expectedValue: string = 'any value we want';
            const expectedLabel: string = 'any label';
            const expectedAction: IReduxAction<IChangeOptionPayload> = {
                type: OptionPickerActions.change,
                payload: {
                    id: OPTION_PICKER_ID,
                    value: expectedValue,
                    label: expectedLabel,
                },
            };

            expect(changeOptionPicker(OPTION_PICKER_ID, expectedLabel, expectedValue)).toEqual(expectedAction);
        });

        it('should create an action to reset the option pickers', () => {
            const expectedAction: IReduxAction<IOptionPickerPayload> = {
                type: OptionPickerActions.reset,
                payload: {
                    id: OPTION_PICKER_ID,
                },
            };

            expect(resetOptionPickers(OPTION_PICKER_ID)).toEqual(expectedAction);
        });
    });
});
