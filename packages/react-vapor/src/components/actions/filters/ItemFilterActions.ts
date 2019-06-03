import {IReduxAction} from '../../../utils/ReduxUtils';

export const ItemFilterActions = {
    add: 'ADD_ITEM_FILTER',
    filter: 'FILTER_ITEMS',
    remove: 'REMOVE_ITEM_FILTER',
};

export interface IItemFilterActionPayload {
    id: string;
}

export interface IItemFilteringActionPayload extends IItemFilterActionPayload {
    item: string;
}

export const addItemFilter = (id: string): IReduxAction<IItemFilterActionPayload> => ({
    type: ItemFilterActions.add,
    payload: {
        id,
    },
});

export const filterItems = (id: string, item: string): IReduxAction<IItemFilteringActionPayload> => ({
    type: ItemFilterActions.filter,
    payload: {
        id,
        item,
    },
});

export const removeItemFilter = (id: string): IReduxAction<IItemFilterActionPayload> => ({
    type: ItemFilterActions.remove,
    payload: {
        id,
    },
});
