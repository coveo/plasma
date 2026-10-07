import {AppShell} from '@mantine/core';
import {render, screen, userEvent} from '@test-utils';

import {Navigation} from '../Navigation.js';

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

        it('toggles the Navigation.SideBar with the keyboard', async () => {
            const user = userEvent.setup();
            render(
                <AppShell>
                    <Navigation>
                        <Navigation.SideBar />
                    </Navigation>
                </AppShell>,
            );
            const navigation = screen.getByRole('navigation');

            screen.getByRole('button', {name: 'Collapse'}).focus();
            await user.keyboard('{Enter}');
            expect(navigation).toHaveAttribute('data-collapsed', 'true');

            await user.keyboard('{Enter}');
            expect(navigation).not.toHaveAttribute('data-collapsed');
        });

        it('does not toggle the Navigation.SideBar when disabled', async () => {
            const user = userEvent.setup();
            render(
                <AppShell>
                    <Navigation>
                        <Navigation.SideBar toggleProps={{disabled: true}} />
                    </Navigation>
                </AppShell>,
            );

            const toggle = screen.getByRole('button', {name: 'Collapse'});
            expect(toggle).toBeDisabled();

            await user.click(toggle);
            expect(screen.getByRole('navigation')).not.toHaveAttribute('data-collapsed');
        });

        it('uses the labels passed through toggleProps', () => {
            render(
                <AppShell>
                    <Navigation defaultCollapsed>
                        <Navigation.SideBar toggleProps={{expandLabel: 'Show menu', collapseLabel: 'Hide menu'}} />
                    </Navigation>
                </AppShell>,
            );

            expect(screen.getByRole('button', {name: 'Show menu'})).toBeInTheDocument();
        });
    });

    describe('NavigationSideBar', () => {
        it('renders the collapse toggle by default', () => {
            render(
                <AppShell>
                    <Navigation>
                        <Navigation.SideBar />
                    </Navigation>
                </AppShell>,
            );

            expect(screen.getByRole('button', {name: 'Collapse'})).toBeInTheDocument();
        });

        it('does not render the collapse toggle when withToggle is false', () => {
            render(
                <AppShell>
                    <Navigation>
                        <Navigation.SideBar withToggle={false} />
                    </Navigation>
                </AppShell>,
            );

            expect(screen.queryByRole('button', {name: 'Collapse'})).not.toBeInTheDocument();
        });

        it('renders the header, the links and the footer in order', () => {
            render(
                <AppShell>
                    <Navigation>
                        <Navigation.SideBar header={<div>Header</div>} footer={<div>Footer</div>}>
                            <Navigation.Link level={1} label="Home" />
                        </Navigation.SideBar>
                    </Navigation>
                </AppShell>,
            );

            const header = screen.getByText('Header');
            const link = screen.getByText('Home');
            const footer = screen.getByText('Footer');
            expect(header.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
            expect(link.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        });
    });

    describe('NavigationSection', () => {
        it('is collapsed initially', async () => {
            const user = userEvent.setup();
            render(
                <Navigation.Section label="Content" leftSection={<span>icon</span>}>
                    <div>one</div>
                    <div>two</div>
                </Navigation.Section>,
            );

            const section = screen.getByText(/content/i);
            expect(section.closest('a')).not.toHaveAttribute('data-expanded');

            await user.click(section);
            expect(section.closest('a')).toHaveAttribute('data-expanded', 'true');
        });

        it('hides the section entirely if all children are conditionally hidden', () => {
            render(
                <Navigation.Section label="Content" leftSection={<span>icon</span>}>
                    {null}
                </Navigation.Section>,
            );

            expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
        });

        it('shows the section when children change from empty to populated', () => {
            const {rerender} = render(
                <Navigation.Section label="Content" leftSection={<span>icon</span>}>
                    {null}
                </Navigation.Section>,
            );

            expect(screen.queryByText(/content/i)).not.toBeInTheDocument();

            rerender(
                <Navigation.Section label="Content" leftSection={<span>icon</span>}>
                    <div>child</div>
                </Navigation.Section>,
            );

            expect(screen.getByText(/content/i)).toBeInTheDocument();
        });
    });

    describe('NavigationLink', () => {
        it('renders with data-navlink attribute', () => {
            render(<Navigation.Link level={2} label="Sources" />);
            const link = screen.getByText(/Sources/i).closest('[data-navlink]');
            expect(link).toBeInTheDocument();
        });

        it('renders as active when the active prop is true', () => {
            render(<Navigation.Link level={2} label="Sources" active />);
            const link = screen.getByText(/Sources/i).closest('[data-navlink]');
            expect(link).toHaveAttribute('data-active', 'true');
        });

        it('renders as inactive when the active prop is false or not provided', () => {
            render(<Navigation.Link level={2} label="Sources" />);
            const link = screen.getByText(/Sources/i).closest('[data-navlink]');
            expect(link).not.toHaveAttribute('data-active');
        });

        it('renders a badge when the badge prop is provided', () => {
            render(<Navigation.Link level={2} label="Sources" badge="new" />);
            expect(screen.getByText('New')).toBeInTheDocument();
        });

        it('renders with a custom component', () => {
            const CustomLink = (props: any) => <button {...props} />;
            render(<Navigation.Link level={1} label="Home" component={CustomLink} />);
            expect(screen.getByRole('button', {name: /Home/i})).toBeInTheDocument();
        });
    });
});
