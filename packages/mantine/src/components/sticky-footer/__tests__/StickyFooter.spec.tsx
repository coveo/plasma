import {render, screen} from '@test-utils';

import {StickyFooter} from '../StickyFooter';

describe('StickyFooter', () => {
    it('renders children', () => {
        render(
            <StickyFooter>
                <div>im the children</div>
            </StickyFooter>,
        );

        expect(screen.getByText('im the children')).toBeInTheDocument();
    });
});
