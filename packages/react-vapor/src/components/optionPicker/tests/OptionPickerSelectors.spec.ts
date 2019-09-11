import {IOptionPickerState, optionPickerInitialState} from '../OptionPickerReducers';
import {OptionPickerSelectors} from '../OptionPickerSelectors';

describe('OptionPickerSelector', () => {
    const expectedOptionPicker: IOptionPickerState = {
        id: 'option-picker-id',
        selectedLabel: 'selected-label',
        selectedValue: 'selected-value',
    };

    describe('get', () => {
        it('should return the optionPickerInitialState when the option picker does not exist in the state', () => {
            const optionPicker: IOptionPickerState = OptionPickerSelectors.get(
                {datePickers: []},
                {id: 'I aint in the state'}
            );
            expect(optionPicker).toEqual(optionPickerInitialState);
        });

        it('should return the right option picker for the specified Id', () => {
            const optionPickerSelected = OptionPickerSelectors.get(
                {optionPickers: [expectedOptionPicker]},
                {id: expectedOptionPicker.id}
            );
            expect(optionPickerSelected).toEqual(expectedOptionPicker);
        });

        describe('getOptionPicker', () => {
            it('should return the optionPickerInitialState when the option picker does not exist in the state', () => {
                const optionpicker = OptionPickerSelectors.getOptionPicker(
                    {optionPickers: []},
                    {id: 'I aint in the state'}
                );
                expect(optionpicker).toEqual(optionPickerInitialState);
            });

            it('should return the right option picker from the state', () => {
                const selectedOptionPicker = OptionPickerSelectors.getOptionPicker(
                    {optionPickers: [expectedOptionPicker]},
                    {id: expectedOptionPicker.id}
                );
                expect(selectedOptionPicker).toEqual(expectedOptionPicker);
            });
        });
    });
});
