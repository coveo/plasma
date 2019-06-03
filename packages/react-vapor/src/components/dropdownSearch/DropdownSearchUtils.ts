import * as _ from 'underscore';
import {keyCode} from '../../utils/InputUtils';
import {IDropdownOption} from './DropdownSearch';
import {IDropdownSearchState} from './DropdownSearchReducers';

/**
 * Utility function preventing boilerplate code when retrieving the selected option of a DropdownSearchConnected.
 *
 * Especially useful in the context of mapStateToProps when you have one or multiple DropdownSearchConnected components in the same view.
 */
export const getDropdownSearchSelectedOption = (id: string, dropdownSearchState: IDropdownSearchState[] = []): IDropdownOption => {
    const dropdown = _.findWhere(dropdownSearchState, {id});
    return dropdown
        ? _.findWhere(dropdown.options, {selected: true})
        : undefined;
};

/**
 * Utility function identifying when a user is selecting an option with keyboard events (not mouse events).
 */
export const isSelectingOption = (keyPressed: number, activeOption: IDropdownOption): boolean =>
    _.contains([keyCode.enter, keyCode.tab], keyPressed) && activeOption && !activeOption.disabled;
