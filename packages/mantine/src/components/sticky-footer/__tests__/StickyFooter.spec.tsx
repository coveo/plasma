import {render, screen} from '@test-utils';

import {StickyFooter} from '../StickyFooter.js';

describe('StickyFooter', () => {
    it('adds a separator on top the footer if borderTop is true', () => {
        render(<StickyFooter borderTop>title</StickyFooter>);
        expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('renders children', () => {
        render(
            <StickyFooter>
                <div>im the children</div>
            </StickyFooter>
        );

        expect(screen.getByText('im the children')).toBeInTheDocument();
    });
});
