import {IReduxAction} from '../../utils';

export const JSONEditorActionTypes = {
    add: 'ADD_JSON_EDITOR',
    remove: 'REMOVE_JSON_EDITOR',
    update: 'UPDATE_JSON_EDITOR',
};

export interface IJSONEditorActionPayload {
    id: string;
    value?: string;
}

const addJSONEditor = (id: string, value = ''): IReduxAction<IJSONEditorActionPayload> => ({
    type: JSONEditorActionTypes.add,
    payload: {id, value},
});

const removeJSONEditor = (id: string): IReduxAction<IJSONEditorActionPayload> => ({
    type: JSONEditorActionTypes.remove,
    payload: {id},
});

const updateJSONEditorValue = (id: string, value = ''): IReduxAction<IJSONEditorActionPayload> => ({
    type: JSONEditorActionTypes.update,
    payload: {id, value},
});

export const JSONEditorActions = {
    addJSONEditor,
    removeJSONEditor,
    updateJSONEditorValue,
};
