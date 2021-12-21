import {IReactVaporState} from '../../../ReactVaporState';
import {JSONEditorSelectors} from '../JSONEditorSelectors';

describe('JSONEditorSelectors', () => {
    describe('getValue', () => {
        it('should not throw and return an empty string when passing a falsy id', () => {
            expect(JSONEditorSelectors.getValue({} as IReactVaporState, undefined)).toBe('');
            expect(JSONEditorSelectors.getValue({} as IReactVaporState, null)).toBe('');
            expect(JSONEditorSelectors.getValue({} as IReactVaporState, '')).toBe('');
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
            expect(JSONEditorSelectors.isValid({} as IReactVaporState, undefined)).toBe(false);
            expect(JSONEditorSelectors.isValid({} as IReactVaporState, null)).toBe(false);
            expect(JSONEditorSelectors.isValid({} as IReactVaporState, '')).toBe(false);
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
