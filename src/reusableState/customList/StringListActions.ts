import {IReduxAction} from '../../utils/ReduxUtils';

export const StringListActions = {
    add: 'ADD_STRING_LIST',
    remove: 'REMOVE_STRING_LIST',
    addValue: 'ADD_VALUE_STRING_LIST',
    removeValue: 'REMOVE_VALUE_STRING_LIST',
};

export interface IStringListPayload {
    id: string;
    list?: string[];
    value?: string;
}

export const addStringList = (id: string, list?: string[]): IReduxAction<IStringListPayload> => ({
    type: StringListActions.add,
    payload: {id, list},
});

export const removeStringList = (id: string): IReduxAction<IStringListPayload> => ({
    type: StringListActions.remove,
    payload: {id},
});

export const addValueStringList = (id: string, value: string): IReduxAction<IStringListPayload> => ({
    type: StringListActions.addValue,
    payload: {id, value},
});

export const removeValueStringList = (id: string, value: string): IReduxAction<IStringListPayload> => ({
    type: StringListActions.removeValue,
    payload: {id, value},
});
