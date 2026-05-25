import {describe, it, expect} from 'vitest';
import {listComponents} from '../listComponents.js';
import {makeData} from './fixtures.js';

describe('listComponents', () => {
    it('renders the full component list', () => {
        expect(listComponents(makeData())).toMatchInlineSnapshot(`
          "# Plasma Components

          All components are imported from \`@coveord/plasma-mantine\`.

          - **Button**: A clickable button component
          - **Modal**: A dialog overlay component
          - **Alert**: An alert notification component"
        `);
    });

    it('falls back to "Plasma component" when description is empty', () => {
        const noDesc = {name: 'Badge', description: '', content: '# Badge content'};
        expect(listComponents(makeData([noDesc]))).toMatchInlineSnapshot(`
          "# Plasma Components

          All components are imported from \`@coveord/plasma-mantine\`.

          - **Badge**: Plasma component"
        `);
    });

    it('returns only the heading when there are no components', () => {
        expect(listComponents(makeData([]))).toMatchInlineSnapshot(`
          "# Plasma Components

          All components are imported from \`@coveord/plasma-mantine\`.

          "
        `);
    });
});
