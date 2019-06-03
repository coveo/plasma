import {IReduxAction} from '../../utils/ReduxUtils';

export const StringListActions = {
    add: 'ADD_STRING_LIST',
    remove: 'REMOVE_STRING_LIST',
    addValue: 'ADD_VALUE_STRING_LIST',
    removeValue: 'REMOVE_VALUE_STRING_LIST',
    updateValues: 'UPDATE_VALUES_STRING_LIST',
    reorder: 'REORDER_STRING_LIST',
};

export interface IStringListPayload {
    id: string;
    list?: string[];
    value?: string;
    reset?: boolean;
}

export const addStringList = (id: string, list: string[] = []): IReduxAction<IStringListPayload> => ({
    type: StringListActions.add,
    payload: {id, list},
});

export const removeStringList = (id: string): IReduxAction<IStringListPayload> => ({
    type: StringListActions.remove,
    payload: {id},
});

export const addValueStringList = (id: string, value: string, reset: boolean = false): IReduxAction<IStringListPayload> => ({
    type: StringListActions.addValue,
    payload: {id, value, reset},
});

export const removeValueStringList = (id: string, value: string): IReduxAction<IStringListPayload> => ({
    type: StringListActions.removeValue,
    payload: {id, value},
});

export const reorderStringList = (id: string, list: string[]): IReduxAction<IStringListPayload> => ({
    type: StringListActions.reorder,
    payload: {id, list},
});

export const updateValueStringList = (id: string, list: string[]): IReduxAction<IStringListPayload> => ({
    type: StringListActions.updateValues,
    payload: {id, list},
});
