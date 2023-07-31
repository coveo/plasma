import * as _ from 'underscore';

import {IReduxAction} from '../../utils';
import {JSONEditorActionPayload, JSONEditorActionTypes} from './JSONEditorActions';
import {JSONEditorUtils} from './JSONEditorUtils';

export interface JSONEditorState {
    id: string;
    value: string;
    valid: boolean;
}

export const jsonEditorInitialState: JSONEditorState = {
    id: undefined,
    value: '',
    valid: false,
};

export const jsonEditorsInitialState: JSONEditorState[] = [];

export const jsonEditorsReducer = (
    state: JSONEditorState[] = jsonEditorsInitialState,
    action: IReduxAction<JSONEditorActionPayload>,
): JSONEditorState[] => {
    switch (action.type) {
        case JSONEditorActionTypes.add:
            return [
                ...state,
                {...action.payload, valid: JSONEditorUtils.validateValue(action.payload.value)} as JSONEditorState,
            ];
        case JSONEditorActionTypes.remove:
            return _.reject(state, (jsonEditor: JSONEditorState) => jsonEditor.id === action.payload.id);
        case JSONEditorActionTypes.update:
            return state.map((jsonEditor: JSONEditorState) =>
                jsonEditor.id === action.payload.id
                    ? {...jsonEditor, ...action.payload, valid: JSONEditorUtils.validateValue(action.payload.value)}
                    : jsonEditor,
            );
        default:
            return state;
    }
};
