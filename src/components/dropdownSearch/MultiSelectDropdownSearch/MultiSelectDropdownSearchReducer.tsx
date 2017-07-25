import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import { dropdownSearchInitialState, dropdownSearchReducer, IDropdownSearchState } from '../DropdownSearchReducers';
import { IReduxAction } from '../../../utils/ReduxUtils';
import {FixedQueue} from '../../../utils/FixedQueue';
import {IDropdownOption} from '../DropdownSearch';
import * as _ from 'underscore';
export const multiSelectDropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>) => {

  const getDisplayedOptions = () => {
    return _.filter(state.options,
      (option: IDropdownOption) => {
        return _.findWhere(state.selectedOptions.getQueue(), {displayValue: option.displayValue}) == undefined;
      });
  };

  switch (action.type) {
    case DropdownSearchActions.addMultiSelect:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropdown,
        selectedOptions: new FixedQueue<IDropdownOption>(),
        filterText: action.payload.filterText,
        isOpened: false,
      };
    case DropdownSearchActions.removeAllSelectedOptions:
      state.selectedOptions = new FixedQueue<IDropdownOption>();
      const displayedOptions = getDisplayedOptions();
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: state.selectedOptions,
        isOpened: false,
        setFocusOnDropdownButton: false,
        displayedOptions: displayedOptions,
      };
    case DropdownSearchActions.multiSelect:
      return {
        ...state,
        id: action.payload.id,
        isOpened: true,
        selectedOptions: state.selectedOptions.push(action.payload.addedSelectedOption),
        displayedOptions: getDisplayedOptions(),
      };
    default:
      return dropdownSearchReducer(state, action);
  }
};
