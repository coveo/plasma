import { IReduxAction } from '../../utils/ReduxUtils';
import { IDropdownOption } from './DropdownSearch';

export interface IDefaultDropdownSearchPayload {
  id: string;
}

export interface IInputDrodownSearchPayload extends IDefaultDropdownSearchPayload {
  keyCode?: number;
}

export interface IOptionsDropdownSearchPayload extends IDefaultDropdownSearchPayload, IInputDrodownSearchPayload {
  optionsDropdown?: IDropdownOption[];
  filterText?: string;
  selectedOptions?: IDropdownOption[];
  selectedOption?: IDropdownOption;
  addedSelectedOption?: IDropdownOption;
  isOpened?: boolean;
}

export const DropdownSearchActions = {
  toggle: 'TOGGLE_DROPDOWN_SEARCH',
  add: 'ADD_DROPDOWN_SEARCH',
  remove: 'REMOVE_DROPDOWN_SEARCH',
  update: 'UPDATE_DROPDOWN_SEARCH',
  filter: 'FILTER_DROPDOWN_SEARCH',
  select: 'SELECT_DROPDOWN_SEARCH',
  active: 'ACTIVE_DROPDOWN_SEARCH',
};

export const applyFilterDropdownSearch = (id: string, filterText: string): IReduxAction<IOptionsDropdownSearchPayload> => ({
  type: DropdownSearchActions.filter,
  payload: {
    id,
    filterText,
  },
});

export const updateOptionsDropdownSearch = (id: string,
  optionsDropdown: IDropdownOption[]): IReduxAction<IOptionsDropdownSearchPayload> => ({
    type: DropdownSearchActions.update,
    payload: {
      id,
      optionsDropdown,
    },
  });

export const toggleDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({
  type: DropdownSearchActions.toggle,
  payload: {
    id,
  },
});

export const updateActiveOptionDropdownSearch = (id: string, keyCode: number): IReduxAction<IInputDrodownSearchPayload> => ({
  type: DropdownSearchActions.active,
  payload: {
    id,
    keyCode,
  },
});

export const addDropdownSearch = (id: string, optionsDropdown: IDropdownOption[] = []): IReduxAction<IOptionsDropdownSearchPayload> => ({
  type: DropdownSearchActions.add,
  payload: {
    id,
    optionsDropdown,
    filterText: '',
  },
});

export const removeDropdownSearch = (id: string): IReduxAction<IDefaultDropdownSearchPayload> => ({
  type: DropdownSearchActions.remove,
  payload: {
    id,
  },
});

export const selectOptionDropdownSearch = (id: string, addedSelectedOption: IDropdownOption): IReduxAction<IOptionsDropdownSearchPayload> => ({
  type: DropdownSearchActions.select,
  payload: {
    id,
    addedSelectedOption,
  },
});
