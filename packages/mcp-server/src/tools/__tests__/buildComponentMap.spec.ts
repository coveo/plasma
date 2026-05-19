import {describe, it, expect} from 'vitest';
import {buildComponentMap} from '../buildComponentMap.js';
import {BUTTON, MODAL, ALERT, makeData} from './fixtures.js';

describe('buildComponentMap', () => {
    it('builds a map keyed by lowercase component name', () => {
        const map = buildComponentMap(makeData());
        expect(map.size).toBe(3);
        expect(map.has('button')).toBe(true);
        expect(map.has('modal')).toBe(true);
        expect(map.has('alert')).toBe(true);
    });

    it('returns an empty map when there are no components', () => {
        const map = buildComponentMap(makeData([]));
        expect(map.size).toBe(0);
    });

    it('stores component data correctly', () => {
        const map = buildComponentMap(makeData());
        expect(map.get('button')).toEqual(BUTTON);
        expect(map.get('modal')).toEqual(MODAL);
        expect(map.get('alert')).toEqual(ALERT);
    });
});
