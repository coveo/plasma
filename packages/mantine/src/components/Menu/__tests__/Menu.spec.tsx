import {render, screen, userEvent} from '../../../__tests__/Utils.js';
import {plasmaTheme} from '../../../theme/Theme.js';
import {Menu} from '../Menu.js';

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

    it('shows the disabled tooltip when hovering a disabled item', async () => {
        const user = userEvent.setup();
        render(
            <Menu opened>
                <Menu.Item disabled disabledTooltip="Select a record first">
                    Export
                </Menu.Item>
            </Menu>,
        );

        await user.hover(screen.getByRole('menuitem', {name: 'Export'}));

        expect(await screen.findByRole('tooltip', {name: 'Select a record first'})).toBeInTheDocument();
    });

    it('renders a search input in the dropdown', () => {
        render(
            <Menu opened>
                <Menu.Dropdown>
                    <Menu.Search placeholder="Search" />
                    <Menu.Item>Dashboard</Menu.Item>
                </Menu.Dropdown>
            </Menu>,
        );

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

    it('colors a red item with the Plasma primary shade instead of Mantine shade 6', () => {
        render(
            <Menu opened>
                <Menu.Item color="red">Delete</Menu.Item>
            </Menu>,
        );

        const item = screen.getByRole('menuitem', {name: 'Delete'});

        expect(item.style.getPropertyValue('--menu-item-color')).toBe(plasmaTheme.colors!.red![5]);
    });
});
