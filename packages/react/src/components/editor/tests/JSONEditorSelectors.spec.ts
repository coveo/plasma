import {PlasmaState} from '../../../PlasmaState.js';
import {JSONEditorSelectors} from '../JSONEditorSelectors.js';

describe('JSONEditorSelectors', () => {
    describe('getValue', () => {
        it('should not throw and return an empty string when passing a falsy id', () => {
            expect(JSONEditorSelectors.getValue({} as PlasmaState, undefined)).toBe('');
            expect(JSONEditorSelectors.getValue({} as PlasmaState, null)).toBe('');
            expect(JSONEditorSelectors.getValue({} as PlasmaState, '')).toBe('');
        });

        it('should return the json value at the specified id', () => {
            const id = '❄️';
            const expectedValue = '{}';
            const state = {
                jsonEditors: [{id, value: expectedValue, valid: true}],
            };

            expect(JSONEditorSelectors.getValue(state, id)).toBe(expectedValue);
        });
    });

    describe('isValid', () => {
        it('should not throw and return false when passing a falsy id', () => {
            expect(JSONEditorSelectors.isValid({} as PlasmaState, undefined)).toBe(false);
            expect(JSONEditorSelectors.isValid({} as PlasmaState, null)).toBe(false);
            expect(JSONEditorSelectors.isValid({} as PlasmaState, '')).toBe(false);
        });

        it('should return the json value valid status at the specified id', () => {
            const id = '🆒';
            const expectedValue = '{}';
            const state = {
                jsonEditors: [{id, value: expectedValue, valid: true}],
            };

            expect(JSONEditorSelectors.isValid(state, id)).toBe(true);
        });
    });
});
