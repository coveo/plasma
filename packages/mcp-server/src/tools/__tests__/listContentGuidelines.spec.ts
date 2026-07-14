import {describe, expect, it} from 'vitest';
import {listContentGuidelines} from '../listContentGuidelines.js';
import {makeData} from './fixtures.js';

describe('listContentGuidelines', () => {
    it('returns a formatted markdown list', () => {
        expect(listContentGuidelines(makeData())).toMatchInlineSnapshot(`
          "# Plasma Content Guidelines

          Guidelines for writing UX copy in Coveo products.

          - **Content Guidelines — Voice**: Coveo's required voice qualities (clear, human, helpful) and how to apply tone by context.
          - **Content Guidelines — Writing Mechanics**: Required rules for grammar, punctuation, capitalization, structure, and length in Coveo UX copy."
        `);
    });

    it('handles empty content guidelines', () => {
        expect(listContentGuidelines(makeData(undefined, []))).toMatchInlineSnapshot(`
          "# Plasma Content Guidelines

          Guidelines for writing UX copy in Coveo products.

          "
        `);
    });
});
