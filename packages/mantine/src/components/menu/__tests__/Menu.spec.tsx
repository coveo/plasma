import {render, screen} from '../../../__tests__/Utils';
import {Menu} from '../Menu';

describe('Menu', () => {
    it('prevents navigating to the specified link when disabled', async () => {
        render(
            <Menu opened>
                <Menu.Item component="a" href="https://coveo.com" disabled>
                    Disabled Item
                </Menu.Item>
            </Menu>,
        );
        const disabledItem = screen.getByRole('menuitem', {name: 'Disabled Item'});
        expect(disabledItem).toBeInTheDocument();
        expect(disabledItem).toHaveAttribute('data-disabled', 'true');
        expect(disabledItem).not.toHaveAttribute('href');
    });
});
