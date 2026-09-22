import {render, screen} from '@test-utils';

import {Drawer} from '../Drawer.js';

describe('DrawerFooter', () => {
    it('renders a footer', () => {
        render(<Drawer.Footer>Drawer footer</Drawer.Footer>);

        expect(screen.getByText('Drawer footer')).toBeInTheDocument();
    });
});
