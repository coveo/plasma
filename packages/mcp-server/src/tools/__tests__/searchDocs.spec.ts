import {describe, it, expect} from 'vitest';
import {searchDocs} from '../searchDocs.js';
import {makeData} from './fixtures.js';

describe('searchDocs', () => {
    it('returns a no-results message when nothing matches', () => {
        expect(searchDocs(makeData(), 'xyznonexistent')).toMatchInlineSnapshot(
            `"No components found matching "xyznonexistent"."`,
        );
    });

    it('returns matching components', () => {
        expect(searchDocs(makeData(), 'button')).toMatchInlineSnapshot(`
          "# Search Results for "button"

          Found 1 component(s):

          ## Button

          A clickable button component

          # Button

          Use the Button to trigger actions.

          ## Props

          | Prop | Type | Default |
          |------|------|---------|
          | variant | string | 'filled' |
          | disabled | boolean | false |

          ## Usage

          Import from \`@coveord/plasma-mantine\`."
        `);
    });

    it('ranks components by relevance (more matches first)', () => {
        const result = searchDocs(makeData(), 'button');
        const buttonIndex = result.indexOf('## Button');
        const modalIndex = result.indexOf('## Modal');
        expect(buttonIndex).toBeLessThan(modalIndex === -1 ? Infinity : modalIndex);
    });

    it('is case-insensitive in matching', () => {
        const lower = searchDocs(makeData(), 'button');
        const upper = searchDocs(makeData(), 'BUTTON');
        // Both queries should find the same component regardless of casing
        expect(lower).toContain('## Button');
        expect(upper).toContain('## Button');
    });

    it('returns at most 5 results', () => {
        const manyComponents = Array.from({length: 10}, (_, i) => ({
            name: `Comp${i}`,
            description: 'common description text',
            content: `# Comp${i}\n\ncommon description text`,
        }));
        const result = searchDocs(makeData(manyComponents), 'common');
        const matches = result.match(/^## Comp\d/gm);
        expect(matches).not.toBeNull();
        expect(matches!.length).toBeLessThanOrEqual(5);
    });

    it('supports multi-word queries', () => {
        expect(searchDocs(makeData(), 'button clickable')).toMatchInlineSnapshot(`
          "# Search Results for "button clickable"

          Found 1 component(s):

          ## Button

          A clickable button component

          # Button

          Use the Button to trigger actions.

          ## Props

          | Prop | Type | Default |
          |------|------|---------|
          | variant | string | 'filled' |
          | disabled | boolean | false |

          ## Usage

          Import from \`@coveord/plasma-mantine\`."
        `);
    });

    it('includes the query in the results header', () => {
        expect(searchDocs(makeData(), 'dialog')).toMatchInlineSnapshot(`
          "# Search Results for "dialog"

          Found 1 component(s):

          ## Modal

          A dialog overlay component

          # Modal

          Use the Modal to display overlay dialogs.

          ## Usage

          Import from \`@coveord/plasma-mantine\`."
        `);
    });
});
