import * as _ from 'underscore';
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
