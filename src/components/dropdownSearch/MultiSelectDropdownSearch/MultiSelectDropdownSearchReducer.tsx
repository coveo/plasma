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
          {value: 'VALUE3', displayValue: 'PO'},
          {value: 'VALUE4', displayValue: 'ça marche'},
          {value: 'VALUE5', displayValue: 'en tabarouette'},
          {value: 'VALUE6', displayValue: 'mon gars'},
        ]),
        filterText: action.payload.filterText,
        isOpened: false,
      };
    case DropdownSearchActions.removeAllSelectedOptions:
      const selectedOptions = new FixedQueue<IDropdownOption>();
      return {
        ...state,
        id: action.payload.id,
        selectedOptions: selectedOptions,
        isOpened: false,
        setFocusOnDropdownButton: false,
      };
    default:
      return dropdownSearchReducer(state, action);
  }
};
