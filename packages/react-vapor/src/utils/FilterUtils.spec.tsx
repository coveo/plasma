import * as React from 'react';

import {FilterUtils} from './FilterUtils';

describe('FilterUtils', () => {
    describe('matchesString', () => {
        it('should return false if the string does not match the filter value', () => {
            expect(FilterUtils.matchesString('abc', 'def')).toBe(false);
            expect(FilterUtils.matchesString('abc', 'a')).toBe(false);
        });

        it('should return false if the string to compare is empty', () => {
            expect(FilterUtils.matchesString('abc', '')).toBe(false, 'empty string');
            expect(FilterUtils.matchesString('abc', null)).toBe(false, 'null string');
            expect(FilterUtils.matchesString('abc', undefined)).toBe(false, 'undefined string');
        });

        it('should return true if the string matches the filter value', () => {
            expect(FilterUtils.matchesString('abc', 'abc')).toBe(true, 'exact match');
            expect(FilterUtils.matchesString('a', 'abc')).toBe(true, 'partial match');
        });

        it('should return true if the filter value is empty', () => {
            expect(FilterUtils.matchesString('', 'abc')).toBe(true, 'empty filter');
            expect(FilterUtils.matchesString(null, 'abc')).toBe(true, 'null filter');
            expect(FilterUtils.matchesString(undefined, 'abc')).toBe(true, 'undefined filter');
        });
    });

    describe('matchesNumber', () => {
        it('should return false if the number does not match the filter value', () => {
            expect(FilterUtils.matchesNumber('abc', 12)).toBe(false);
            expect(FilterUtils.matchesNumber('23', 12)).toBe(false);
            expect(FilterUtils.matchesNumber('123', 12)).toBe(false);
        });

        it('should return false if the number to compare is empty', () => {
            expect(FilterUtils.matchesNumber('12', null)).toBe(false, 'null number');
            expect(FilterUtils.matchesNumber('12', undefined)).toBe(false, 'undefined number');
        });

        it('should return true if the number matches the filter value', () => {
            expect(FilterUtils.matchesNumber('123', 123)).toBe(true, 'exact match');
            expect(FilterUtils.matchesNumber('0', 0)).toBe(true, 'exact match');
            expect(FilterUtils.matchesNumber('12', 123)).toBe(true, 'partial match');
        });

        it('should return true if the filter value is empty', () => {
            expect(FilterUtils.matchesNumber('', 123)).toBe(true, 'empty filter');
            expect(FilterUtils.matchesNumber(null, 123)).toBe(true, 'null filter');
            expect(FilterUtils.matchesNumber(undefined, 123)).toBe(true, 'undefined filter');
        });
    });

    describe('matchesReactNode', () => {
        it('should return false if the node does not contain the filter value anywhere in its rendering tree', () => {
            expect(FilterUtils.matchesReactNode('💎', 'some string')).toBe(false);
            expect(FilterUtils.matchesReactNode('💎', 42)).toBe(false);
            expect(FilterUtils.matchesReactNode('💎', <div>not what you are looking for</div>)).toBe(false);
        });

        it('should return false is the node is empty', () => {
            expect(FilterUtils.matchesReactNode('💎', '')).toBe(false);
            expect(FilterUtils.matchesReactNode('💎', null)).toBe(false);
            expect(FilterUtils.matchesReactNode('💎', undefined)).toBe(false);
        });

        it('should return true if the node contains the filter value somewhere in its rendering tree', () => {
            expect(FilterUtils.matchesReactNode('💎', '💎')).toBe(true);
            expect(FilterUtils.matchesReactNode('💎', <div>💎</div>)).toBe(true);
            expect(
                FilterUtils.matchesReactNode(
                    '💎',
                    <div>
                        <h1>gotta dig to find diamonds</h1>
                        <div>
                            <p>we need to go deeper</p>
                            <span>💎</span>
                        </div>
                    </div>
                )
            ).toBe(true);
        });

        it('should return true if the filter value is empty', () => {
            expect(FilterUtils.matchesReactNode('', 123)).toBe(true, 'empty filter');
            expect(FilterUtils.matchesReactNode(null, '123')).toBe(true, 'null filter');
            expect(FilterUtils.matchesReactNode(undefined, <div>123</div>)).toBe(true, 'undefined filter');
        });
    });

    describe('matchesArrayLength', () => {
        it('should return false if the array length does not match the filter value', () => {
            expect(FilterUtils.matchesArrayLength('abc', [])).toBe(false);
            expect(FilterUtils.matchesArrayLength('1', [])).toBe(false);
            expect(FilterUtils.matchesArrayLength('0', [1, 2, 3])).toBe(false);
        });

        it('should return false if the array does not exist', () => {
            expect(FilterUtils.matchesArrayLength('1', undefined)).toBe(false);
            expect(FilterUtils.matchesArrayLength('0', null)).toBe(false);
        });

        it('should return true if the filter value is empty', () => {
            expect(FilterUtils.matchesArrayLength('10', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true, 'exact match');
            expect(FilterUtils.matchesArrayLength('1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true, 'partial match 1');
            expect(FilterUtils.matchesArrayLength('0', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true, 'partial match 0');
        });

        it('should return true if the filter value is empty', () => {
            expect(FilterUtils.matchesArrayLength('', [])).toBe(true, 'empty filter');
            expect(FilterUtils.matchesArrayLength(null, [1])).toBe(true, 'null filter');
            expect(FilterUtils.matchesArrayLength(undefined, [1, 2])).toBe(true, 'undefined filter');
        });
    });
});
