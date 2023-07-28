import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    DropdownSearch,
    IDropdownOption,
    IDropdownSearchOwnProps,
    IDropdownSearchProps,
    IDropdownSearchStateProps,
} from './DropdownSearch';
import {
    addDropdownSearch,
    applyFilterDropdownSearch,
    closeDropdownSearch,
    removeDropdownSearch,
    selectOptionDropdownSearch,
    selectOrSetNextActiveOption,
    toggleDropdownSearch,
    updateActiveOptionDropdownSearch,
    updateOptionsDropdownSearch,
} from './DropdownSearchActions';
import {IDropdownSearchState} from './DropdownSearchReducers';

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

    return {
        isOpened: false,
        options: ownProps.defaultOptions || [],
        filterText: '',
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IDropdownSearchOwnProps) => ({
    onMount: () => {
        dispatch(
            addDropdownSearch(
                ownProps.id,
                ownProps.defaultOptions,
                ownProps.defaultSelectedOption,
                ownProps.supportSingleCustomOption,
            ),
        );

        // TODO: remove this once the component is refactored and the DropdownSearchReducer is not overwriting the defaultSelectedOption passed above anymore.
        if (ownProps.defaultSelectedOption) {
            dispatch(updateOptionsDropdownSearch(ownProps.id, ownProps.defaultOptions, ownProps.defaultSelectedOption));
        }
    },
    onDestroy: () => dispatch(removeDropdownSearch(ownProps.id)),
    onToggleDropdown: () => dispatch(toggleDropdownSearch(ownProps.id)),
    onBlur: () => dispatch(toggleDropdownSearch(ownProps.id)),
    onOptionClick: (option: IDropdownOption) => dispatch(selectOptionDropdownSearch(ownProps.id, option)),
    onFilterTextChange: (filterText: string) => dispatch(applyFilterDropdownSearch(ownProps.id, filterText)),
    onKeyDownFilterBox: (keyCode: number, activeOption?: IDropdownOption) =>
        dispatch(selectOrSetNextActiveOption(ownProps.id, keyCode, activeOption)),
    onKeyDownDropdownButton: (keyCode: number, activeOption?: IDropdownOption) =>
        dispatch(selectOrSetNextActiveOption(ownProps.id, keyCode, activeOption)),
    onMouseEnterDropdown: (activeOption?: IDropdownOption) =>
        dispatch(updateActiveOptionDropdownSearch(ownProps.id, -1, activeOption)),
    onClose: () => dispatch(closeDropdownSearch(ownProps.id)),
    updateOptions: (options: IDropdownOption[]) => dispatch(updateOptionsDropdownSearch(ownProps.id, options)),
});

/**
 * @deprecated use Mantine instead
 */
export const DropdownSearchConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(DropdownSearch);
