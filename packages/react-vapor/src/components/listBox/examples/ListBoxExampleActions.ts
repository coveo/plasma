import {IReduxAction} from '../../../utils/ReduxUtils';

export const ListBoxExampleActions = {
    add: 'ADD_LIST_BOX_EXAMPLE',
    remove: 'REMOVE_LIST_BOX_EXAMPLE',
    update: 'UPDATE_LIST_BOX_EXAMPLE',
};

export interface IListBoxExamplePayload {
    id: string;
    options?: string[];
}

export const addListBoxExample = (id: string, options?: string[]): IReduxAction<IListBoxExamplePayload> => ({
    type: ListBoxExampleActions.add,
    payload: {id, options},
});

export const removeListBoxExample = (id: string): IReduxAction<IListBoxExamplePayload> => ({
    type: ListBoxExampleActions.remove,
    payload: {id},
});

export const updateListBoxExample = (id: string, options: string[]): IReduxAction<IListBoxExamplePayload> => ({
    type: ListBoxExampleActions.update,
    payload: {id, options},
});
