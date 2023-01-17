import {PlasmaState} from '../../../PlasmaState.js';
import {TextAreaSelectors} from '../TextAreaSelectors.js';

describe('TextAreaSelectors', () => {
    describe('getValue', () => {
        it('should not throw and return an empty string when passing a falsy id', () => {
            expect(TextAreaSelectors.getValue({} as PlasmaState, undefined)).toBe('');
            expect(TextAreaSelectors.getValue({} as PlasmaState, null)).toBe('');
            expect(TextAreaSelectors.getValue({} as PlasmaState, '')).toBe('');
        });

        it('should return the textarea value at the specified id', () => {
            const id = 'my-text-area';
            const expectedValue = 'okansdjas ndkjna skjdnkjan skjdnoiuqwn eoinoiuqn fijuhwnbd ifniuzxn fdd';
            const state = {
                textAreas: [{id, value: expectedValue, disabled: false}],
            };

            expect(TextAreaSelectors.getValue(state, id)).toBe(expectedValue);
        });
    });

    describe('isDisabled', () => {
        it('should not throw and return false when passing a falsy id', () => {
            expect(TextAreaSelectors.isDisabled({} as PlasmaState, undefined)).toBe(false);
            expect(TextAreaSelectors.isDisabled({} as PlasmaState, null)).toBe(false);
            expect(TextAreaSelectors.isDisabled({} as PlasmaState, '')).toBe(false);
        });

        it('should return the textarea disabled status at the specified id', () => {
            const id = '=)';
            const expectedValue = '(=';
            const state = {
                textAreas: [{id, value: expectedValue, disabled: true}],
            };

            expect(TextAreaSelectors.isDisabled(state, id)).toBe(true);
        });
    });
});
