import {describe, expect, it} from 'vitest';
import {buildGuidelineMap, getContentGuideline} from '../getContentGuideline.js';
import {VOICE_GUIDELINE, WRITING_MECHANICS_GUIDELINE} from './fixtures.js';

describe('getContentGuideline', () => {
    const guidelineMap = buildGuidelineMap([VOICE_GUIDELINE, WRITING_MECHANICS_GUIDELINE]);

    it('returns the content for a known guideline by slug', () => {
        const result = getContentGuideline(guidelineMap, 'Voice');
        expect(result.isError).toBeFalsy();
        expect(result.text).toMatchInlineSnapshot(`
          "## Voice of Coveo

          Voice is fixed. Every piece of UX copy must be **clear**, **human**, and **helpful**.

          ### Clear

          Use plain words. Be as short as possible.

          ### Human

          Speak directly to the user.

          ### Helpful

          Explain what the user can do, not what the system did."
        `);
    });

    it('returns the content for a known guideline by full name', () => {
        const result = getContentGuideline(guidelineMap, 'Content Guidelines — Voice');
        expect(result.isError).toBeFalsy();
        expect(result.text).toBe(VOICE_GUIDELINE.content);
    });

    it('is case-insensitive', () => {
        expect(getContentGuideline(guidelineMap, 'voice').text).toBe(VOICE_GUIDELINE.content);
        expect(getContentGuideline(guidelineMap, 'VOICE').text).toBe(VOICE_GUIDELINE.content);
    });

    it('finds WritingMechanics by slug', () => {
        const result = getContentGuideline(guidelineMap, 'WritingMechanics');
        expect(result.isError).toBeFalsy();
        expect(result.text).toMatchInlineSnapshot(`
          "## Capitalization

          Use sentence case for all UI text.

          ## Punctuation

          Add a period after full sentences. Do not add a period after fragments."
        `);
    });

    it('returns an error for an unknown guideline', () => {
        const result = getContentGuideline(guidelineMap, 'Nonexistent');
        expect(result.isError).toBe(true);
        expect(result.text).toMatchInlineSnapshot(
            `"Content guideline "Nonexistent" not found. Use list_content_guidelines to see available guidelines."`,
        );
    });
});
