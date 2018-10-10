import {IReduxAction} from '../../utils/ReduxUtils';
import {IItemBoxProps} from '../itemBox/ItemBox';

export const ListBoxActions = {
    add: 'ADD_LIST_BOX',
    remove: 'REMOVE_LIST_BOX',
    select: 'SELECT_ITEM_LIST_BOX',
    unselect: 'UNSELECT_ITEM_LIST_BOX',
    reorder: 'REORDER_ITEM_LIST_BOX',
    setActive: 'SET_ACTIVE_ITEM_LIST_BOX',
    clear: 'CLEAR_ITEM_LIST_BOX',
};

export interface IListBoxPayload {
    id: string;
    multi?: boolean;
    value?: string;
    values?: string[];
    items?: IItemBoxProps[];
    diff?: number;
}

export const addListBox = (id: string, items: IItemBoxProps[]): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.add,
    payload: {id, items},
});

export const removeListBox = (id: string): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.remove,
    payload: {id},
});

export const selectListBoxOption = (id: string, multi: boolean, value: string): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.select,
    payload: {id, multi, value},
});

export const unselectListBoxOption = (id: string, value: string): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.unselect,
    payload: {id, value},
});

export const reorderListBoxOption = (id: string, values: string[]): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.reorder,
    payload: {id, values},
});

export const setActiveListBoxOption = (id: string, diff: number): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.setActive,
    payload: {id, diff},
});

export const clearListBoxOption = (id: string): IReduxAction<IListBoxPayload> => ({
    type: ListBoxActions.clear,
    payload: {id},
});
