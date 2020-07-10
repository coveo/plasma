import * as _ from 'underscore';

import {IReduxAction} from '../../utils';
import {IJSONEditorActionPayload, JSONEditorActionTypes} from './JSONEditorActions';
import {JSONEditorUtils} from './JSONEditorUtils';

export interface IJSONEditorState {
    id: string;
    value: string;
    valid: boolean;
}

export const jsonEditorInitialState: IJSONEditorState = {
    id: undefined,
    value: '',
    valid: false,
};

export const jsonEditorsInitialState: IJSONEditorState[] = [];

export const jsonEditorsReducer = (
    state: IJSONEditorState[] = jsonEditorsInitialState,
    action: IReduxAction<IJSONEditorActionPayload>
): IJSONEditorState[] => {
    switch (action.type) {
        case JSONEditorActionTypes.add:
            return [
                ...state,
                {...action.payload, valid: JSONEditorUtils.validateValue(action.payload.value)} as IJSONEditorState,
            ];
        case JSONEditorActionTypes.remove:
            return _.reject(state, (jsonEditor: IJSONEditorState) => jsonEditor.id === action.payload.id);
        case JSONEditorActionTypes.update:
            return state.map((jsonEditor: IJSONEditorState) =>
                jsonEditor.id === action.payload.id
                    ? {...jsonEditor, ...action.payload, valid: JSONEditorUtils.validateValue(action.payload.value)}
                    : jsonEditor
            );
        default:
            return state;
    }
};
