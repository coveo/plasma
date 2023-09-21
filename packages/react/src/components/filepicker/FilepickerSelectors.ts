import {createSelector} from 'reselect';

import {PlasmaState} from '../../PlasmaState';
import {FilepickerState} from './FilepickerReducers';

const getFile = (inputId: string): File => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    return input?.files?.[0];
};

const getFilePicker = (state: PlasmaState, {id}: {id: string}) => state.filepickers[id];

const getFileMetadata = createSelector(
    getFilePicker,
    (filepicker: FilepickerState[keyof FilepickerState]) => filepicker?.selectedFile,
);

const isEmpty = createSelector(
    getFilePicker,
    (filepicker: FilepickerState[keyof FilepickerState]) => filepicker?.isEmpty,
);

export const FilepickerSelectors = {
    getFile,
    getFileMetadata,
    isEmpty,
};
