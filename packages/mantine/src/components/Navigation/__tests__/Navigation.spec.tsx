import {AppShell} from '@mantine/core';
import {render, screen, userEvent} from '@test-utils';

import {Navigation} from '../Navigation.js';
import {NavigationLink} from '../NavigationLink.js';
import {NavigationSection} from '../NavigationSection.js';

describe('Navigation', () => {
    describe('NavigationToggle', () => {
        it('toggles the Navigation.SideBar when clicking on the toggle', async () => {
            const user = userEvent.setup();
            render(
                <AppShell>
                    <Navigation>
                        <Navigation.SideBar />
                    </Navigation>
                </AppShell>,
            );
            const navigation = screen.getByRole('navigation');
            expect(navigation).not.toHaveAttribute('data-collapsed');

            await user.click(screen.getByRole('button', {name: 'Collapse'}));
            expect(navigation).toHaveAttribute('data-collapsed', 'true');

            await user.click(screen.getByRole('button', {name: 'Expand'}));
            expect(navigation).not.toHaveAttribute('data-collapsed');
        });
    });

    describe('NavigationSection', () => {
        it('is collapsed initially', async () => {
            const user = userEvent.setup();
            render(
                <NavigationSection label="Content" leftSection={<span>icon</span>}>
                    <div>one</div>
                    <div>two</div>
                </NavigationSection>,
            );

            const section = screen.getByText(/content/i);
            expect(section.closest('a')).not.toHaveAttribute('data-expanded');

            await user.click(section);
            expect(section.closest('a')).toHaveAttribute('data-expanded', 'true');
        });

        it('hides the section entirely if all children are conditionally hidden', () => {
            render(
                <NavigationSection label="Content" leftSection={<span>icon</span>}>
                    {null}
                </NavigationSection>,
            );

            expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
        });
    });

    describe('NavigationLink', () => {
        it('renders with data-navlink attribute', () => {
            render(<NavigationLink level={2} label="Sources" />);
            const link = screen.getByText(/Sources/i).closest('[data-navlink]');
            expect(link).toBeInTheDocument();
        });

        it('renders as active when the active prop is true', () => {
            render(<NavigationLink level={2} label="Sources" active />);
            const link = screen.getByText(/Sources/i).closest('[data-navlink]');
            expect(link).toHaveAttribute('data-active', 'true');
        });

        it('renders as inactive when the active prop is false or not provided', () => {
            render(<NavigationLink level={2} label="Sources" />);
            const link = screen.getByText(/Sources/i).closest('[data-navlink]');
            expect(link).not.toHaveAttribute('data-active');
        });

        it('renders a badge when the badge prop is provided', () => {
            render(<NavigationLink level={2} label="Sources" badge="new" />);
            expect(screen.getByText('new')).toBeInTheDocument();
        });

        it('renders with a custom component', () => {
            const CustomLink = (props: any) => <button {...props} />;
            render(<NavigationLink level={1} label="Home" component={CustomLink} />);
            expect(screen.getByRole('button', {name: /Home/i})).toBeInTheDocument();
        });
    });
});
