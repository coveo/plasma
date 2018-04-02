import {IDropdownOption} from './DropdownSearch';
import {getSelectedOption} from './DropdownSearchUtils';

describe('DropdownSearchUtils', () => {
    describe('getSelectedOption', () => {
        it('should return undefined if the dropdown does not exist in the state', () => {
            expect(getSelectedOption('non-existing-dropdown', [])).toBeUndefined();
        });

        it('should return undefined if the dropdown does exist in the state but have no selected option', () => {
            expect(getSelectedOption('existing-dropdown', [{options: [], id: 'existing-dropdown'}])).toBeUndefined();
        });

        it('should return the selected option if there is one', () => {
            const selectedOption: IDropdownOption = {value: 'selected option', selected: true};
            expect(getSelectedOption('existing-dropdown', [{options: [selectedOption], id: 'existing-dropdown'}]))
                .toEqual(selectedOption);
        });
    });
});
