import { IReduxAction } from '../../utils/ReduxUtils';
import { IDropdownOption } from './DropdownSearch';

export interface IDefaultDropdownSearchPayload {
  id: string;
}

export interface IOptionsDropdownSearchPayload extends IDefaultDropdownSearchPayload {
  optionsDropDown?: IDropdownOption[];
  filterText?: string;
  selectedOption?: IDropdownOption;
  isOpened?: boolean;
}

export const DropdownSearchActions = {
  toggle: 'TOGGLE_DROPDOWN_SEARCH',
  add: 'ADD_DROPDOWN_SEARCH',
  remove: 'REMOVE_DROPDOWN_SEARCH',
  update: 'UPDATE_DROPDOWN_SEARCH',
  filter: 'FILTER_DROPDOWN_SEARCH',
  select: 'SELECT_DROPDOWN_SEARCH',
};

export const applyFilterDropdownSearch = (id: string, filterText: string): IReduxAction<IOptionsDropdownSearchPayload> => ({
  type: DropdownSearchActions.filter,
  payload: {
    id,
    filterText,
  },
});

export const updateOptionsDropdownSearch = (id: string,
  optionsDropDown: IDropdownOption[]): IReduxAction<IOptionsDropdownSearchPayload> => ({
    type: DropdownSearchActions.update,
    payload: {
      id,
      optionsDropDown,
    },
  });

export const toggleDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({
  type: DropdownSearchActions.toggle,
  payload: {
    id,
  },
});

export const addDropdownSearch = (id: string, optionsDropDown: IDropdownOption[] = []): IReduxAction<IOptionsDropdownSearchPayload> => ({
  type: DropdownSearchActions.add,
  payload: {
    id,
    optionsDropDown,
    filterText: '',
  },
});

export const removeDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({
  type: DropdownSearchActions.remove,
  payload: {
    id,
  },
});

export const selectOptionDropdownSearch = (id: string, selectedOption: IDropdownOption): IReduxAction<IOptionsDropdownSearchPayload> => ({
  type: DropdownSearchActions.select,
  payload: {
    id,
    selectedOption,
  },
});
