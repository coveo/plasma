import {JSONEditorUtils} from '../JSONEditorUtils.js';

describe('JSONEditorUtils', () => {
    describe('validateValue', () => {
        it('should return false when the value is undefined', () => {
            expect(JSONEditorUtils.validateValue(undefined)).toBe(false);
        });

        it('should return false when the value is an empty string', () => {
            expect(JSONEditorUtils.validateValue('')).toBe(false);
        });

        it('should return true when the value is parsable', () => {
            expect(JSONEditorUtils.validateValue('{}')).toBe(true);
        });
    });
});
