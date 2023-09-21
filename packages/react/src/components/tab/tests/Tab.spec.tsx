import {render, screen, waitFor, within} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {RocketSize16Px} from '@coveord/plasma-react-icons';
import {Badge, BadgeType} from '../../badge/Badge';
import {UrlUtils} from '../../../utils';
import {Tab, TabConnected} from '../Tab';
import {TabContent} from '../TabContent';
import {TabNavigation} from '../TabNavigation';
import {TabPaneConnected} from '../TabPane';

describe('Tab', () => {
    it('displays the tooltip text when hovering over the tab button', async () => {
        const user = userEvent.setup();
        render(<Tab title="Title" tooltip="tooltip content" />);
        const tab = screen.getByRole('tab', {name: /title/i});
        await user.hover(tab);
        expect(await screen.findByText('tooltip content')).toBeInTheDocument();
    });

    it('displays the icon when one is set', async () => {
        render(<Tab title="Title" icon={RocketSize16Px} />);

        await screen.findByRole('img', {name: 'rocket'});

        expect(screen.getByRole('tab', {name: /rocket title/i})).toBeInTheDocument();
    });

    it('displays the badge when one is set', () => {
        render(<Tab title="Title" badge={<Badge label="Tag" isSmall type={BadgeType.New} extraClasses={['ml1']} />} />);

        expect(
            screen.getByRole('tab', {
                name: /title badge/i,
            }),
        ).toBeInTheDocument();
        expect(screen.getByText(/tag/i)).toBeInTheDocument();
    });

    it('redirects to the specified url when clicking on the tab', async () => {
        const user = userEvent.setup();
        const spy = jest.spyOn(UrlUtils, 'redirectToUrl').mockImplementation(() => null);
        render(<Tab title="Title" url="www" />);
        await user.click(screen.getByRole('tab', {name: /title/i}));
        expect(spy).toHaveBeenCalledWith('www');
        spy.mockReset();
        spy.mockRestore();
    });

    it('calls the onSelect callback when clicking on the tab', async () => {
        const user = userEvent.setup();
        const onSelectSpy = jest.fn();
        render(<TabConnected id="🆔" title="Title" onSelect={onSelectSpy} />);
        await user.click(screen.getByRole('tab', {name: /title/i}));
        expect(onSelectSpy).toHaveBeenCalled();
    });

    it('manages 2 tab groups independently from each other', async () => {
        const user = userEvent.setup();
        render(
            <div>
                <TabNavigation>
                    <TabConnected groupId="X" id="A" title="Tab 1" />
                    <TabConnected groupId="X" id="B" title="Tab 2" />
                </TabNavigation>
                <TabNavigation>
                    <TabConnected groupId="Y" id="A" title="Tab 3" />
                    <TabConnected groupId="Y" id="B" title="Tab 4" />
                </TabNavigation>
            </div>,
        );

        const tab1 = screen.getByRole('tab', {name: /Tab 1/i});
        const tab2 = screen.getByRole('tab', {name: /Tab 2/i});
        const tab3 = screen.getByRole('tab', {name: /Tab 3/i});
        const tab4 = screen.getByRole('tab', {name: /Tab 4/i});

        expect(tab1).toHaveAttribute('aria-selected', 'true');
        expect(tab2).toHaveAttribute('aria-selected', 'false');
        expect(tab3).toHaveAttribute('aria-selected', 'true');
        expect(tab4).toHaveAttribute('aria-selected', 'false');

        await user.click(tab2);

        expect(tab1).toHaveAttribute('aria-selected', 'false');
        expect(tab2).toHaveAttribute('aria-selected', 'true');
        expect(tab3).toHaveAttribute('aria-selected', 'true');
        expect(tab4).toHaveAttribute('aria-selected', 'false');
    });

    describe('Navigation', () => {
        const renderView = () =>
            render(
                <div>
                    <TabNavigation>
                        <TabConnected id="A" title="Tab 1" />
                        <TabConnected id="B" title="Tab 2" />
                        <TabConnected id="C" title="Tab 3" />
                        <TabConnected id="D" title="Tab 4" disabled />
                    </TabNavigation>
                    <TabContent>
                        <TabPaneConnected id="A">Content tab 1</TabPaneConnected>
                        <TabPaneConnected id="B">Content tab 2</TabPaneConnected>
                        <TabPaneConnected id="C">Content tab 3</TabPaneConnected>
                        <TabPaneConnected id="D">Content tab 4</TabPaneConnected>
                    </TabContent>
                </div>,
            );

        it('displays the first panel by default', () => {
            renderView();
            const tabPanel1 = screen.getByRole('tabpanel', {name: /Tab 1/i});
            expect(tabPanel1).toBeVisible();
            expect(within(tabPanel1).getByText(/content tab 1/i)).toBeVisible();
            expect(screen.queryByRole('tabpanel', {name: /Tab 2/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('tabpanel', {name: /Tab 3/i})).not.toBeInTheDocument();
        });

        it('displays the panel associated with the active panel', async () => {
            const user = userEvent.setup();
            renderView();
            const tab1 = screen.getByRole('tab', {name: /Tab 1/i});
            const tab2 = screen.getByRole('tab', {name: /Tab 2/i});
            const tab3 = screen.getByRole('tab', {name: /Tab 3/i});

            await user.click(tab2);

            expect(screen.queryByRole('tabpanel', {name: /Tab 1/i})).not.toBeInTheDocument();
            expect(screen.getByRole('tabpanel', {name: /Tab 2/i})).toBeVisible();
            expect(screen.queryByRole('tabpanel', {name: /Tab 3/i})).not.toBeInTheDocument();

            await user.click(tab3);

            expect(screen.queryByRole('tabpanel', {name: /Tab 1/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('tabpanel', {name: /Tab 2/i})).not.toBeInTheDocument();
            expect(screen.getByRole('tabpanel', {name: /Tab 3/i})).toBeVisible();

            await user.click(tab1);

            expect(screen.getByRole('tabpanel', {name: /Tab 1/i})).toBeVisible();
            expect(screen.queryByRole('tabpanel', {name: /Tab 2/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('tabpanel', {name: /Tab 3/i})).not.toBeInTheDocument();
        });

        // eslint-disable-next-line jest/no-disabled-tests
        it.skip('supports keyboard navigation between tabs', async () => {
            const user = userEvent.setup();
            renderView();
            const tab1 = screen.getByRole('tab', {name: /Tab 1/i});
            const tab2 = screen.getByRole('tab', {name: /Tab 2/i});
            const tab3 = screen.getByRole('tab', {name: /Tab 3/i});

            expect(document.body).toHaveFocus();
            await user.tab();

            // Move right
            expect(tab1).toHaveFocus();
            await user.click(tab1);
            await user.keyboard('{ArrowRight>}');
            await waitFor(() => expect(tab2).toHaveFocus());
            await user.keyboard('{ArrowRight>}');
            expect(tab3).toHaveFocus();
            await user.keyboard('{ArrowRight>}');
            expect(tab1).toHaveFocus();

            // Move left
            await user.keyboard('{ArrowLeftt>}');
            expect(tab3).toHaveFocus();
            await user.keyboard('{ArrowLeft>}');
            expect(tab2).toHaveFocus();
            await user.keyboard('{ArrowLeft>}');
            expect(tab1).toHaveFocus();
        });

        it('does not display the panel associated with a disabled tab', async () => {
            const user = userEvent.setup();
            renderView();
            await user.click(screen.getByRole('tab', {name: /Tab 4/i}));
            expect(screen.queryByRole('tabpanel', {name: /Tab 4/i})).not.toBeInTheDocument();
        });
    });
});
