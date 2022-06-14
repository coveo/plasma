import {IDropdownOption} from '../DropdownSearch';
import {
    selectOptionDropdownSearch,
    selectOrSetNextActiveOption,
    updateActiveOptionDropdownSearch,
} from '../DropdownSearchActions';
import * as DropdownSearchUtils from '../DropdownSearchUtils';

describe('DropdownSearch', () => {
    describe('DropdownSearchActions', () => {
        describe('selectOrSetNextActiveOption', () => {
            const dropdownId = 'anywoulddo';
            const keyCode = 1; // any would do
            const activeOption: IDropdownOption = {value: 'anywoulddo', selected: false};

            it('should return an action of type DropdownSearchActions.select if isSelectingOption returns true', () => {
                jest.spyOn(DropdownSearchUtils, 'isSelectingOption').mockReturnValue(true);

                expect(selectOrSetNextActiveOption(dropdownId, keyCode, activeOption)).toEqual(
                    selectOptionDropdownSearch(dropdownId, activeOption, true)
                );
            });

            it('should return an action of type DropdownSearchActions.active if isSelectingOption returns false', () => {
                jest.spyOn(DropdownSearchUtils, 'isSelectingOption').mockReturnValue(false);

                expect(selectOrSetNextActiveOption(dropdownId, keyCode, activeOption)).toEqual(
                    updateActiveOptionDropdownSearch(dropdownId, keyCode, activeOption)
                );
            });
        });
    });
});
