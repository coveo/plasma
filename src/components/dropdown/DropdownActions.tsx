import {IReduxAction} from '../../utils/ReduxUtils';

export interface IDropdownActionPayload {
    id: string;
}

export const DropdownActions = {
    add: 'ADD_DROPDOWN',
    remove: 'REMOVE_DROPDOWN',
    toggle: 'TOGGLE_DROPDOWN',
    close: 'CLOSE',
};

export const addDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({
    type: DropdownActions.add,
    payload: {
        id,
    },
});

export const removeDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({
    type: DropdownActions.remove,
    payload: {
        id,
    },
});

export const toggleDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({
    type: DropdownActions.toggle,
    payload: {
        id,
    },
});

export const closeDropdown = (id: string): IReduxAction<IDropdownActionPayload> => ({
    type: DropdownActions.close,
    payload: {
        id,
    },
});
