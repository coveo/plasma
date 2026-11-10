import {describe, expect, it} from 'vitest';
import {buildPatternMap, getPattern} from '../getPattern.js';
import {NAVIGATE_WITH_LINKS} from './fixtures.js';

describe('getPattern', () => {
    const patternMap = buildPatternMap([NAVIGATE_WITH_LINKS]);

    it('returns the content for a known pattern by name', () => {
        const result = getPattern(patternMap, 'Navigate with links');
        expect(result.isError).toBeFalsy();
        expect(result.text).toBe(NAVIGATE_WITH_LINKS.content);
    });

    it('is case-insensitive', () => {
        expect(getPattern(patternMap, 'navigate with links').text).toBe(NAVIGATE_WITH_LINKS.content);
        expect(getPattern(patternMap, 'NAVIGATE WITH LINKS').text).toBe(NAVIGATE_WITH_LINKS.content);
    });

    it('returns an error for an unknown pattern', () => {
        const result = getPattern(patternMap, 'Nonexistent');
        expect(result.isError).toBe(true);
        expect(result.text).toMatchInlineSnapshot(
            `"Pattern "Nonexistent" not found. Use list_patterns to see available patterns."`,
        );
    });
});
