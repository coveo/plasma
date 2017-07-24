import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../DropdownSearchActions';
import { dropdownSearchInitialState, dropdownSearchReducer, IDropdownSearchState } from '../DropdownSearchReducers';
import { IReduxAction } from '../../../utils/ReduxUtils';
import {FixedQueue} from '../../../utils/FixedQueue';
import {IDropdownOption} from '../DropdownSearch';
export const multiSelectDropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>) => {
  switch (action.type) {
    case DropdownSearchActions.select:
      return {
        ...state,
        id: action.payload.id,
        selectedOption: action.payload.selectedOption,
        isOpened: true,
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.addMultiSelect:
      return {
        ...state,
        id: action.payload.id,
        options: action.payload.optionsDropdown,
        selectedOptions: new FixedQueue<IDropdownOption>([{value: 'VALUE', displayValue: 'Salut'},
        ]),
        filterText: action.payload.filterText,
        isOpened: false,
      };
    case DropdownSearchActions.removeAllSelectedOptions:
      let selectedOptions = new FixedQueue<IDropdownOption>();
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: selectedOptions,
        isOpened: false,
        setFocusOnDropdownButton: false,
      };
    case DropdownSearchActions.multiSelect:
      state.selectedOptions.push(action.payload.addedSelectedOption);
      return {
        ...state,
        id: action.payload.id,
        isOpened: true,
      };
    default:
      return dropdownSearchReducer(state, action);
  }
};
