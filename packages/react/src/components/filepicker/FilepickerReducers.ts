import * as _ from 'underscore';

import {IReduxAction} from '../../utils/index.js';
import {FileMetadata} from '../../utils/FileUtils.js';

export const FilepickerActionsTypes = {
    Add: 'ADD_FILE_PICKER',
    SetValue: 'SET_FILE_PICKER',
    Clear: 'CLEAR_FILE_PICKER',
};

export type FilepickerState = Record<string, {id: string; isEmpty: boolean; selectedFile: FileMetadata}>;

const addFilepicker = (state: FilepickerState, action: IReduxAction<{id: string}>): FilepickerState => {
    if (action?.payload?.id) {
        return {
            ...state,
            [action.payload.id]: {id: action.payload.id, isEmpty: true, selectedFile: null},
        };
    }
    return state;
};

const setSelectedFile = (
    state: FilepickerState,
    action: IReduxAction<{id: string; selectedFile: FileMetadata}>
): FilepickerState => {
    if (action?.payload?.id) {
        return {
            ...state,
            [action.payload.id]: {
                id: action.payload.id,
                isEmpty: !action.payload.selectedFile,
                selectedFile: action.payload.selectedFile ?? null,
            },
        };
    }
    return state;
};

const clearFilepicker = (state: FilepickerState, action: IReduxAction<{id: string}>): FilepickerState =>
    state[action?.payload?.id] ? _.omit(state, action.payload.id) : state;

const Reducers = {
    [FilepickerActionsTypes.Add]: addFilepicker,
    [FilepickerActionsTypes.SetValue]: setSelectedFile,
    [FilepickerActionsTypes.Clear]: clearFilepicker,
};

export const filepickersReducer = (state: FilepickerState = {}, action: IReduxAction<{id: keyof FilepickerState}>) => {
    if (Reducers[action.type]) {
        return Reducers[action.type](state, action);
    }
    return state;
};
