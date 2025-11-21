import {render, screen} from '@test-utils';

import {BlankSlate} from '../BlankSlate.js';

describe('BlankSlate', () => {
    it('renders the children', () => {
        render(<BlankSlate>content</BlankSlate>);

        expect(screen.getByText('content')).toBeInTheDocument();
    });
});
