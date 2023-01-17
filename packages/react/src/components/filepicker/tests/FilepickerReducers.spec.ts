import {FileMetadata} from '../../../utils/FileUtils.js';
import {FilepickerActions} from '../FilepickerActions.js';
import {filepickersReducer, FilepickerState} from '../FilepickerReducers.js';

describe('FilepickerReducers', () => {
    it('should return an empty object if the current state is undefined', () => {
        expect(filepickersReducer(undefined, {type: 'UNKOWN_ACTION'})).toEqual({});
    });

    it('should return the old state if the action type is unknown by the reducer', () => {
        const oldState: FilepickerState = {};

        expect(filepickersReducer(oldState, {type: 'UNKOWN_ACTION'})).toBe(oldState);
    });

    describe('adding a filepicker', () => {
        it('should return the old state if no id is specified', () => {
            const oldState: FilepickerState = {};

            expect(filepickersReducer(oldState, FilepickerActions.add(''))).toBe(oldState);
        });

        it('should add a new entry at the specified id with an empty filepicker state as value', () => {
            const oldState: FilepickerState = {};
            const newState = filepickersReducer(oldState, FilepickerActions.add('📜'));

            expect(newState).not.toBe(oldState);
            expect(newState).toEqual({'📜': {id: '📜', isEmpty: true, selectedFile: null}});
        });

        it('should not remove other existing entries', () => {
            const otherFilePicker: FilepickerState[keyof FilepickerState] = {
                id: 'other-filepicker',
                isEmpty: true,
                selectedFile: null,
            };

            const oldState: FilepickerState = {[otherFilePicker.id]: otherFilePicker};
            const newState = filepickersReducer(oldState, FilepickerActions.add('📜'));

            expect(newState[otherFilePicker.id]).toBe(otherFilePicker);
        });
    });

    describe('selecting a file in a filepicker', () => {
        it('should return the old state if no id is specified', () => {
            const oldState: FilepickerState = {};

            expect(filepickersReducer(oldState, FilepickerActions.setFile('', null))).toBe(oldState);
        });

        it('should set "isEmpty" field to true and the "selectedFile" field to null if the specified file is null', () => {
            const oldState: FilepickerState = {
                '📜': {
                    id: '📜',
                    isEmpty: false,
                    selectedFile: {
                        name: 'whatever.txt',
                        size: 12,
                        type: 'text/plain',
                        lastModified: new Date().valueOf(),
                    },
                },
            };

            expect(filepickersReducer(oldState, FilepickerActions.setFile('📜', null))).toEqual({
                '📜': {id: '📜', isEmpty: true, selectedFile: null},
            });
        });

        it('should set "isEmpty" field to false if the specified file is null', () => {
            const file: FileMetadata = {
                name: 'whatever.txt',
                size: 12,
                type: 'text/plain',
                lastModified: new Date().valueOf(),
            };
            const oldState: FilepickerState = {
                '📜': {id: '📜', isEmpty: true, selectedFile: null},
            };

            expect(filepickersReducer(oldState, FilepickerActions.setFile('📜', file))).toEqual({
                '📜': {
                    id: '📜',
                    isEmpty: false,
                    selectedFile: file,
                },
            });
        });

        it('should not change the other existing entries', () => {
            const otherFilePicker: FilepickerState[keyof FilepickerState] = {
                id: 'other-filepicker',
                isEmpty: false,
                selectedFile: {
                    name: 'whatever.txt',
                    size: 12,
                    type: 'text/plain',
                    lastModified: new Date().valueOf(),
                },
            };

            const oldState: FilepickerState = {[otherFilePicker.id]: otherFilePicker};
            const newState = filepickersReducer(oldState, FilepickerActions.setFile('📜', null));

            expect(newState[otherFilePicker.id]).toBe(otherFilePicker);
        });
    });

    describe('removing a filepicker', () => {
        it('should return the old state if no id is specified', () => {
            const oldState: FilepickerState = {};

            expect(filepickersReducer(oldState, FilepickerActions.clear(''))).toBe(oldState);
        });

        it('should return the old state if there is no entry in the state at the specified id', () => {
            const oldState: FilepickerState = {
                'other-filepicker': {id: 'other-filepicker', isEmpty: true, selectedFile: null},
            };

            expect(filepickersReducer(oldState, FilepickerActions.clear('📜'))).toBe(oldState);
        });

        it('should remove the entry at the specified id', () => {
            const oldState: FilepickerState = {
                '📜': {id: '📜', isEmpty: true, selectedFile: null},
                'other-filepicker': {id: 'other-filepicker', isEmpty: true, selectedFile: null},
            };

            expect(filepickersReducer(oldState, FilepickerActions.clear('📜'))).toEqual({
                'other-filepicker': {id: 'other-filepicker', isEmpty: true, selectedFile: null},
            });
        });
    });
});
