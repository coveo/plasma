import {IReduxAction} from '../../utils/index.js';
import {FileMetadata} from '../../utils/FileUtils.js';
import {FilepickerActionsTypes, FilepickerState} from './FilepickerReducers.js';

const addFilepicker = (id: string): IReduxAction<{id: keyof FilepickerState}> => ({
    type: FilepickerActionsTypes.Add,
    payload: {id},
});

const setSelectedFile = (
    id: string,
    selectedFile: FileMetadata
): IReduxAction<{id: string; selectedFile: FileMetadata}> => ({
    type: FilepickerActionsTypes.SetValue,
    payload: {
        id,
        selectedFile,
    },
});

const clearFilepicker = (id: string): IReduxAction<{id: keyof FilepickerState}> => ({
    type: FilepickerActionsTypes.Clear,
    payload: {id},
});

export const FilepickerActions = {
    add: addFilepicker,
    setFile: setSelectedFile,
    clear: clearFilepicker,
};
