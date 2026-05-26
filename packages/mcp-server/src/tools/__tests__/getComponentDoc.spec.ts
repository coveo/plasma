import {describe, it, expect, beforeEach} from 'vitest';
import {buildComponentMap} from '../buildComponentMap.js';
import {getComponentDoc} from '../getComponentDoc.js';
import {BUTTON, makeData} from './fixtures.js';

describe('getComponentDoc', () => {
    let componentMap: ReturnType<typeof buildComponentMap>;

    beforeEach(() => {
        componentMap = buildComponentMap(makeData());
    });

    it('returns the full component content for a known component', () => {
        const result = getComponentDoc(componentMap, 'Button');
        expect(result.isError).toBeFalsy();
        expect(result.text).toBe(BUTTON.content);
    });

    it('looks up components case-insensitively', () => {
        expect(getComponentDoc(componentMap, 'button').text).toBe(BUTTON.content);
        expect(getComponentDoc(componentMap, 'BUTTON').text).toBe(BUTTON.content);
        expect(getComponentDoc(componentMap, 'BuTtOn').text).toBe(BUTTON.content);
    });

    it('returns an error result for an unknown component', () => {
        const result = getComponentDoc(componentMap, 'UnknownWidget');
        expect(result.isError).toBe(true);
        expect(result.text).toMatchInlineSnapshot(
            `"Component "UnknownWidget" not found. Use list_components to see available components."`,
        );
    });
});
