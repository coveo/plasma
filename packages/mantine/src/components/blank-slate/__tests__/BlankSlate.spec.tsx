import {render, screen} from '@test-utils';

import {BlankSlate} from '../BlankSlate';

describe('BlankSlate', () => {
    it('renders the children', () => {
        render(<BlankSlate>content</BlankSlate>);

        expect(screen.getByText('content')).toBeInTheDocument();
    });
});
