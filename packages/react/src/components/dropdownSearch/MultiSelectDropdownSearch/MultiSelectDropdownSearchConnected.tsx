import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils.js';
import {
    IDropdownOption,
    IDropdownSearchDispatchProps,
    IDropdownSearchOwnProps,
    IDropdownSearchProps,
    IDropdownSearchStateProps,
} from '../DropdownSearch.js';
import {
    addCustomSelectedOption,
    addMultiSelectDropdownSearch,
    applyFilterDropdownSearch,
    closeDropdownSearch,
    deselectAllOptionsMultiselectDropdownSearch,
    deselectOptionDropdownSearch,
    keyDownMultiselectDropdownSearch,
    multiSelectOptionDropdownSearch,
    openDropdownSearch,
    removeDropdownSearch,
    updateOptionsDropdownSearch,
} from '../DropdownSearchActions.js';
import {IDropdownSearchState} from '../DropdownSearchReducers.js';
import {MultiSelectDropdownSearch} from './MultiSelectDropdownSearch.js';

const mapStateToProps = (state: PlasmaState, ownProps: IDropdownSearchProps): IDropdownSearchStateProps => {
    const dropdownSearch: IDropdownSearchState = _.findWhere(state.dropdownSearch, {id: ownProps.id});

    if (dropdownSearch) {
        return {
            isOpened: dropdownSearch.isOpened || false,
            options: dropdownSearch.options || [],
            filterText: dropdownSearch.filterText || '',
            activeOption: dropdownSearch.activeOption,
            setFocusOnDropdownButton: dropdownSearch.setFocusOnDropdownButton,
        };
    }

    return MultiSelectDropdownSearch.defaultProps;
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IDropdownSearchOwnProps
): IDropdownSearchDispatchProps => ({
    onMount: () => dispatch(addMultiSelectDropdownSearch(ownProps.id, ownProps.defaultOptions)),
    onDestroy: () => dispatch(removeDropdownSearch(ownProps.id)),
    onBlur: (options: IDropdownOption[]) => dispatch(closeDropdownSearch(ownProps.id, options)),
    onFocus: () => dispatch(openDropdownSearch(ownProps.id)),
    onOptionClick: (option: IDropdownOption) => dispatch(multiSelectOptionDropdownSearch(ownProps.id, option)),
    onCustomOptionClick: (value: string) => dispatch(addCustomSelectedOption(ownProps.id, value)),
    onFilterTextChange: (filterText: string) => dispatch(applyFilterDropdownSearch(ownProps.id, filterText)),
    onKeyDownFilterBox: (keyCode: number) => dispatch(keyDownMultiselectDropdownSearch(ownProps.id, keyCode)),
    onRemoveSelectedOption: (value: string) => dispatch(deselectOptionDropdownSearch(ownProps.id, value)),
    onRemoveAllSelectedOptions: () => dispatch(deselectAllOptionsMultiselectDropdownSearch(ownProps.id)),
    updateOptions: (options: IDropdownOption[]) =>
        dispatch(updateOptionsDropdownSearch(ownProps.id, options, undefined, false)),
});

/**
 * @deprecated use Mantine instead
 */
export const MultiSelectDropdownSearchConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(MultiSelectDropdownSearch);
