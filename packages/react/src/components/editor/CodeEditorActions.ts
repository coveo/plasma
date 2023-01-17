import {IReduxAction} from '../../utils/index.js';

export const CodeEditorActionTypes = {
    remove: 'REMOVE_CODE_EDITOR',
    update: 'UPDATE_CODE_EDITOR',
};

export interface CodeEditorActionPayload {
    id: string;
    value?: string;
}

const updateValue = (id: string, value = ''): IReduxAction<CodeEditorActionPayload> => ({
    type: CodeEditorActionTypes.update,
    payload: {id, value},
});

const remove = (id: string): IReduxAction<CodeEditorActionPayload> => ({
    type: CodeEditorActionTypes.remove,
    payload: {id},
});

export const CodeEditorActions = {
    updateValue,
    remove,
};
