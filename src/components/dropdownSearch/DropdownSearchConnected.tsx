import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { DropdownSearch, IDropdownOption, IDropdownSearchOwnProps, IDropdownSearchProps, IDropdownSearchStateProps } from './DropdownSearch';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import {
  addDropdownSearch,
  applyFilterDropdownSearch,
  removeDropdownSearch, removeSelectedOptionDropdownSearch,
  selectOptionDropdownSearch,
  toggleDropdownSearch,
  updateActiveOptionDropdownSearch,
} from './DropdownSearchActions';
import { defaultSelectedOption, IDropdownSearchState } from './DropdownSearchReducers';
import {FixedQueue} from '../../utils/FixedQueue';

const mapStateToProps = (state: IReactVaporState, ownProps: IDropdownSearchProps): IDropdownSearchStateProps => {
  const dropdownSearch: IDropdownSearchState = _.findWhere(state.dropdownSearch, { id: ownProps.id });
  const selectedOption = ownProps.defaultSelectedOptions || defaultSelectedOption;

  if (dropdownSearch) {
    return {
      isOpened: dropdownSearch.isOpened || false,
      options: dropdownSearch.options || [],
      selectedOptions: dropdownSearch.selectedOptions || new FixedQueue<IDropdownOption>([selectedOption], 1),
      filterText: dropdownSearch.filterText || '',
      activeOption: dropdownSearch.activeOption,
      setFocusOnDropdownButton: dropdownSearch.setFocusOnDropdownButton,
    };
  }

  return {
    isOpened: false,
    options: ownProps.defaultOptions || [],
    selectedOptions: new FixedQueue<IDropdownOption>([selectedOption], 1),
    filterText: '',
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IDropdownSearchOwnProps) => ({
    onMount: () => dispatch(addDropdownSearch(ownProps.id, ownProps.defaultOptions)),
    onDestroy: () => dispatch(removeDropdownSearch(ownProps.id)),
    onToggleDropdown: () => dispatch(toggleDropdownSearch(ownProps.id)),
    onBlur: () => dispatch(toggleDropdownSearch(ownProps.id)),
    onOptionClick: (option: IDropdownOption) => dispatch(selectOptionDropdownSearch(ownProps.id, option)),
    onFilterClick: (filterText: string) => dispatch(applyFilterDropdownSearch(ownProps.id, filterText)),
    onKeyDownFilterBox: (keyCode: number) => dispatch(updateActiveOptionDropdownSearch(ownProps.id, keyCode)),
    onKeyDownDropdownButton: (keyCode: number) => dispatch(updateActiveOptionDropdownSearch(ownProps.id, keyCode)),
    onMouseEnterDropdown: () => dispatch(updateActiveOptionDropdownSearch(ownProps.id, -1)),
    onRemoveSelectedOption: (value: string) => dispatch(removeSelectedOptionDropdownSearch(ownProps.id, value)),
  });

export const DropdownSearchConnected: React.ComponentClass<IDropdownSearchProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(DropdownSearch);
