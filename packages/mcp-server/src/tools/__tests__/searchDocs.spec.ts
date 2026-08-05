import {describe, it, expect} from 'vitest';
import {searchDocs} from '../searchDocs.js';
import {makeData} from './fixtures.js';

describe('searchDocs', () => {
    it('returns a no-results message when nothing matches', () => {
        expect(searchDocs(makeData(), 'xyznonexistent')).toMatchInlineSnapshot(
            `"No results found matching "xyznonexistent"."`,
        );
    });

    it('returns matching components', () => {
        expect(searchDocs(makeData(), 'button')).toMatchInlineSnapshot(`
          "# Search Results for "button"

          Found 1 result(s):

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

    it('ranks results by relevance (more matches first)', () => {
        const result = searchDocs(makeData(), 'button');
        const buttonIndex = result.indexOf('## Button');
        const modalIndex = result.indexOf('## Modal');
        expect(buttonIndex).toBeLessThan(modalIndex === -1 ? Infinity : modalIndex);
    });

    it('is case-insensitive in matching', () => {
        const lower = searchDocs(makeData(), 'button');
        const upper = searchDocs(makeData(), 'BUTTON');
        expect(lower).toContain('## Button');
        expect(upper).toContain('## Button');
    });

    it('returns at most 5 results', () => {
        const manyComponents = Array.from({length: 10}, (_, i) => ({
            name: `Comp${i}`,
            description: 'common description text',
            content: `# Comp${i}\n\ncommon description text`,
        }));
        const result = searchDocs(makeData(manyComponents, []), 'common');
        const matches = result.match(/^## Comp\d/gm);
        expect(matches).not.toBeNull();
        expect(matches!.length).toBeLessThanOrEqual(5);
    });

    it('supports multi-word queries', () => {
        expect(searchDocs(makeData(), 'button clickable')).toMatchInlineSnapshot(`
          "# Search Results for "button clickable"

          Found 1 result(s):

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

          Found 1 result(s):

          ## Modal

          A dialog overlay component

          # Modal

          Use the Modal to display overlay dialogs.

          ## Usage

          Import from \`@coveord/plasma-mantine\`."
        `);
    });

    it('searches content guidelines as well', () => {
        expect(searchDocs(makeData(), 'capitalization')).toMatchInlineSnapshot(`
          "# Search Results for "capitalization"

          Found 1 result(s):

          ## Content Guidelines — Writing Mechanics (Content Guideline)

          Required rules for grammar, punctuation, capitalization, structure, and length in Coveo UX copy.

          ## Capitalization

          Use sentence case for all UI text.

          ## Punctuation

          Add a period after full sentences. Do not add a period after fragments."
        `);
    });

    it('labels content guideline results with (Content Guideline)', () => {
        expect(searchDocs(makeData(), 'voice')).toMatchInlineSnapshot(`
          "# Search Results for "voice"

          Found 1 result(s):

          ## Content Guidelines — Voice (Content Guideline)

          Coveo's required voice qualities (clear, human, helpful) and how to apply tone by context.

          ## Voice of Coveo

          Voice is fixed. Every piece of UX copy must be **clear**, **human**, and **helpful**.

          ### Clear

          Use plain words. Be as short as possible.

          ### Human

          Speak directly to the user.

          ### Helpful

          Explain what the user can do, not what the system did."
        `);
    });
});
