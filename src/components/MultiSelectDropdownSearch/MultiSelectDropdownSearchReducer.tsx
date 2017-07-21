import { DropdownSearchActions, IOptionsDropdownSearchPayload } from '../dropdownSearch/DropdownSearchActions';
import { dropdownSearchInitialState, dropdownSearchReducer, IDropdownSearchState } from '../dropdownSearch/DropdownSearchReducers';
import { IReduxAction } from '../../utils/ReduxUtils';
export const multiSelectDropdownSearchReducer = (state: IDropdownSearchState = dropdownSearchInitialState,
  action: IReduxAction<IOptionsDropdownSearchPayload>) => {
  switch (action.type) {
    case DropdownSearchActions.select:
      return {
        ...state,
        id: action.payload.id,
        selectedOption: action.payload.selectedOption,
        isOpened: false,
        activeOption: undefined,
        setFocusOnDropdownButton: false,
      };
    default:
      return dropdownSearchReducer(state, action);
  }
}
