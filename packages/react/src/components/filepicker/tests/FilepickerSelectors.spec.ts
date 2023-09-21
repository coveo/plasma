import {PlasmaState} from '../../../PlasmaState';
import {FilepickerSelectors} from '../FilepickerSelectors';

describe('FilepickerSelectors', () => {
    describe('getFile', () => {
        // tested via the FilePicker component tests
    });

    describe('isEmpty', () => {
        it('should return undefined if no filepicker match the specified id', () => {
            expect(FilepickerSelectors.isEmpty({filepickers: {}} as PlasmaState, {id: '📜'})).toBeUndefined();
            expect(
                FilepickerSelectors.isEmpty(
                    {filepickers: {'🍩': {id: '🍩', isEmpty: true, selectedFile: null}}} as PlasmaState,
                    {id: '📜'},
                ),
            ).toBeUndefined();
        });

        it('should return true if no file is selected in the filepicker at the specified id', () => {
            expect(
                FilepickerSelectors.isEmpty(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {id: '📜', isEmpty: true, selectedFile: null},
                        },
                    } as PlasmaState,
                    {id: '📜'},
                ),
            ).toBe(true);
        });

        it('should return false if a file is selected in the file picker at the specified id', () => {
            expect(
                FilepickerSelectors.isEmpty(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {
                                id: '📜',
                                isEmpty: false,
                                selectedFile: {
                                    name: 'whatever',
                                    size: 12,
                                    type: 'text/plain',
                                    lastModified: new Date().valueOf(),
                                },
                            },
                        },
                    } as PlasmaState,
                    {id: '📜'},
                ),
            ).toBe(false);
        });
    });

    describe('getFileMetadata', () => {
        it('should return undefined if no filepicker match the specified id', () => {
            expect(FilepickerSelectors.getFileMetadata({filepickers: {}} as PlasmaState, {id: '📜'})).toBeUndefined();

            expect(
                FilepickerSelectors.getFileMetadata(
                    {filepickers: {'🍩': {id: '🍩', isEmpty: true, selectedFile: null}}} as PlasmaState,
                    {id: '📜'},
                ),
            ).toBeUndefined();
        });

        it('should return null if there is no file selected in the filepicker at the specified id', () => {
            expect(
                FilepickerSelectors.getFileMetadata(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {id: '📜', isEmpty: true, selectedFile: null},
                        },
                    } as PlasmaState,
                    {id: '📜'},
                ),
            ).toBeNull();
        });

        it('should return the file metadata if a file is selected in the file picker at the specified id', () => {
            const fileMetaData = {
                name: 'whatever',
                size: 12,
                type: 'text/plain',
                lastModified: new Date().valueOf(),
            };

            expect(
                FilepickerSelectors.getFileMetadata(
                    {
                        filepickers: {
                            '🍩': {id: '🍩', isEmpty: true, selectedFile: null},
                            '📜': {
                                id: '📜',
                                isEmpty: false,
                                selectedFile: fileMetaData,
                            },
                        },
                    } as PlasmaState,
                    {id: '📜'},
                ),
            ).toEqual(fileMetaData);
        });
    });
});
