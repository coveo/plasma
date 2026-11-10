import {describe, expect, it} from 'vitest';
import {listPatterns} from '../listPatterns.js';
import {makeData} from './fixtures.js';

describe('listPatterns', () => {
    it('returns a formatted markdown list', () => {
        expect(listPatterns(makeData())).toMatchInlineSnapshot(`
          "# Plasma Patterns

          Patterns combine components to solve a recurring user need.

          - **Navigate with links**: How to move users to another page, section, or resource with links."
        `);
    });

    it('handles empty patterns', () => {
        expect(listPatterns(makeData(undefined, undefined, undefined, []))).toMatchInlineSnapshot(`
          "# Plasma Patterns

          Patterns combine components to solve a recurring user need.

          "
        `);
    });
});
