import * as React from 'react';
import {callIfDefined, convertUndefinedAndNullToEmptyString} from './FalsyValuesUtils';

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

describe('callIfDefined', () => {
    let callbackSpy: jasmine.Spy;

    beforeEach(() => {
        callbackSpy = jasmine.createSpy('callback');
    });

    it('should call the callback when it is a defined function', () => {
        callIfDefined(callbackSpy);

        expect(callbackSpy).toHaveBeenCalled();
    });

    it('should call the callback and pass down args properly', () => {
        const args = [
            'some'
            [1],
            -10,
            true,
            () => 'ooookay',
        ];

        callIfDefined(callbackSpy, ...args);

        expect(callbackSpy).toHaveBeenCalledWith(...args);
    });

    it('should not throw errors when calling with undefined values', () => {
        const someDeclaredButNotAssignedCallback: () => any = undefined;

        expect(() => callIfDefined(undefined)).not.toThrow();
        expect(() => callIfDefined(null)).not.toThrow();
        expect(() => callIfDefined('')).not.toThrow();
        expect(() => callIfDefined('askjdh')).not.toThrow();
        expect(() => callIfDefined(someDeclaredButNotAssignedCallback)).not.toThrow();
    });
});
