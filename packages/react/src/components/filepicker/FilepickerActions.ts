import {IReduxAction} from '../../utils';
import {FileMetadata} from '../../utils/FileUtils';
import {FilepickerActionsTypes, FilepickerState} from './FilepickerReducers';

const addFilepicker = (id: string): IReduxAction<{id: keyof FilepickerState}> => ({
    type: FilepickerActionsTypes.Add,
    payload: {id},
});

const setSelectedFile = (
    id: string,
    selectedFile: FileMetadata,
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
