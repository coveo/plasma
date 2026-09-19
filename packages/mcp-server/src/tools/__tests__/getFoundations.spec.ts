import {describe, expect, it} from 'vitest';
import {getFoundations} from '../getFoundations.js';
import {FOUNDATIONS, makeData} from './fixtures.js';

describe('getFoundations', () => {
    it('returns the foundations documentation content', () => {
        const result = getFoundations(makeData());
        expect(result.isError).toBeFalsy();
        expect(result.text).toBe(FOUNDATIONS.content);
    });

    it('joins multiple foundation entries with a separator', () => {
        const second = {...FOUNDATIONS, name: 'Colors', content: '# Colors\n\nPalette tokens.'};
        const result = getFoundations(makeData(undefined, undefined, [FOUNDATIONS, second]));
        expect(result.isError).toBeFalsy();
        expect(result.text).toBe(`${FOUNDATIONS.content}\n\n---\n\n${second.content}`);
    });

    it('returns an error result when no foundations are available', () => {
        const result = getFoundations(makeData(undefined, undefined, []));
        expect(result.isError).toBe(true);
        expect(result.text).toMatchInlineSnapshot(`"No foundations documentation is available."`);
    });
});
