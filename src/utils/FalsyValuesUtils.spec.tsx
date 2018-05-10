import * as React from 'react';
import {convertUndefinedAndNullToEmptyString} from './FalsyValuesUtils';

describe('FalsyValuesUtils', () => {
    it('should return empty string if the value is undefined', () => {
        expect(convertUndefinedAndNullToEmptyString(undefined)).toBe('');
    });

    it('should return empty string if the value is null', () => {
        expect(convertUndefinedAndNullToEmptyString(null)).toBe('');
    });

    it('should return the value as is if it is not null or undefined', () => {
        [1000, 'non empty string', '', <div>testing a jsx element</div>].forEach((value: any) => {
            expect(convertUndefinedAndNullToEmptyString(value)).toBe(value);
        });
    });
});
