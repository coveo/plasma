import { IReactVaporState, IReduxActionsPayload } from '../../../ReactVapor';
import { IDropdownOption, IDropdownSearchOwnProps, IDropdownSearchProps, IDropdownSearchStateProps } from './../DropdownSearch';
import { IReduxAction, ReduxUtils } from '../../../utils/ReduxUtils';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import {
  addMultiSelectDropdownSearch,
  applyFilterDropdownSearch,
  multiSelectOptionDropdownSearch,
  removeAllSelectedOptionsMultiselectDropdownSearch,
  removeDropdownSearch,
  removeSelectedOptionDropdownSearch,
  toggleDropdownSearch,
  updateActiveOptionDropdownSearch,
} from '../DropdownSearchActions';
import { IDropdownSearchState } from './../DropdownSearchReducers';
import { FixedQueue} from '../../../utils/FixedQueue';
import { MultiSelectDropdownSearch } from './MultiSelectDropdownSearch';

const mapStateToProps = (state: IReactVaporState, ownProps: IDropdownSearchProps): IDropdownSearchStateProps => {
  const dropdownSearch: IDropdownSearchState = _.findWhere(state.dropdownSearch, { id: ownProps.id });

  if (dropdownSearch) {
    return {
      isOpened: dropdownSearch.isOpened || false,
      options: dropdownSearch.options || [],
      selectedOptions: dropdownSearch.selectedOptions,
      filterText: dropdownSearch.filterText || '',
      activeOption: dropdownSearch.activeOption,
      setFocusOnDropdownButton: dropdownSearch.setFocusOnDropdownButton,
    };
  }

  return {
    isOpened: false,
    options: ownProps.defaultOptions || [],
    selectedOptions: new FixedQueue<IDropdownOption>(),
    filterText: '',
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
                            ownProps: IDropdownSearchOwnProps) => ({
  onMount: () => dispatch(addMultiSelectDropdownSearch(ownProps.id, ownProps.defaultOptions)),
  onDestroy: () => dispatch(removeDropdownSearch(ownProps.id)),
  onToggleDropdown: () => dispatch(toggleDropdownSearch(ownProps.id)),
  onBlur: () => dispatch(toggleDropdownSearch(ownProps.id)),
  onFocus: () => dispatch(toggleDropdownSearch(ownProps.id)),
  onOptionClick: (option: IDropdownOption) => dispatch(multiSelectOptionDropdownSearch(ownProps.id, option)),
  onFilterClick: (filterText: string) => dispatch(applyFilterDropdownSearch(ownProps.id, filterText)),
  onKeyDownFilterBox: (keyCode: number) => dispatch(updateActiveOptionDropdownSearch(ownProps.id, keyCode)),
  onMouseEnterDropdown: () => dispatch(updateActiveOptionDropdownSearch(ownProps.id, -1)),
  onRemoveSelectedOption: (value: string) => dispatch(removeSelectedOptionDropdownSearch(ownProps.id, value)),
  onRemoveAllSelectedOptions: () => dispatch(removeAllSelectedOptionsMultiselectDropdownSearch(ownProps.id)),
});

export const MultiselectDropdownSearchConnected: React.ComponentClass<IDropdownSearchProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(MultiSelectDropdownSearch);
