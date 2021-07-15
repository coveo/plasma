import {render, screen, within} from '@test-utils';
import userEvent, {specialChars} from '@testing-library/user-event';
import * as React from 'react';

import {UrlUtils} from '../../../utils';
import {Tab, TabConnected} from '../Tab';
import {TabContent} from '../TabContent';
import {TabNavigation} from '../TabNavigation';
import {TabPaneConnected} from '../TabPane';

describe('Tab', () => {
    it('displays the tooltip text when hovering over the tab button', async () => {
        render(<Tab title="Title" tooltip="tooltip content" />);
        const tab = screen.getByRole('tab', {name: /title/i});
        userEvent.hover(tab);
        expect(await screen.findByText('tooltip content')).toBeInTheDocument();
    });

    it('redirects to the specified url when clicking on the tab', () => {
        const spy = jest.spyOn(UrlUtils, 'redirectToUrl').mockImplementation(() => null);
        render(<Tab title="Title" url="www" />);
        userEvent.click(screen.getByRole('tab', {name: /title/i}));
        expect(spy).toHaveBeenCalledWith('www');
        spy.mockReset();
        spy.mockRestore();
    });

    it('calls the onSelect callback when clicking on the tab', () => {

        const onSelectSpy = jest.fn();
        render(<TabConnected id="🆔" title="Title" onSelect={onSelectSpy} />);
        userEvent.click(screen.getByRole('tab', {name: /title/i}));
        expect(onSelectSpy).toHaveBeenCalled();
    });

    describe('Navigation', () => {
        beforeEach(() => {
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
                </div>
            );
        });

        it('displays the first panel by default', () => {
            const tabPanel1 = screen.getByRole('tabpanel', {name: /Tab 1/i});
            expect(tabPanel1).toBeVisible();
            expect(within(tabPanel1).getByText(/content tab 1/i)).toBeVisible();
            expect(screen.queryByRole('tabpanel', {name: /Tab 2/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('tabpanel', {name: /Tab 3/i})).not.toBeInTheDocument();
        });

        it('displays the panel associated with the active panel', () => {
            const tab1 = screen.getByRole('tab', {name: /Tab 1/i});
            const tab2 = screen.getByRole('tab', {name: /Tab 2/i});
            const tab3 = screen.getByRole('tab', {name: /Tab 3/i});

            userEvent.click(tab2);

            expect(screen.queryByRole('tabpanel', {name: /Tab 1/i})).not.toBeInTheDocument();
            expect(screen.getByRole('tabpanel', {name: /Tab 2/i})).toBeVisible();
            expect(screen.queryByRole('tabpanel', {name: /Tab 3/i})).not.toBeInTheDocument();

            userEvent.click(tab3);

            expect(screen.queryByRole('tabpanel', {name: /Tab 1/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('tabpanel', {name: /Tab 2/i})).not.toBeInTheDocument();
            expect(screen.getByRole('tabpanel', {name: /Tab 3/i})).toBeVisible();

            userEvent.click(tab1);

            expect(screen.getByRole('tabpanel', {name: /Tab 1/i})).toBeVisible();
            expect(screen.queryByRole('tabpanel', {name: /Tab 2/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('tabpanel', {name: /Tab 3/i})).not.toBeInTheDocument();
        });

        it('supports keyboard navigation between tabs', () => {
            const tab1 = screen.getByRole('tab', {name: /Tab 1/i});
            const tab2 = screen.getByRole('tab', {name: /Tab 2/i});
            const tab3 = screen.getByRole('tab', {name: /Tab 3/i});

            expect(document.body).toHaveFocus();
            userEvent.tab();

            // Move right
            expect(tab1).toHaveFocus();
            userEvent.type(tab1, specialChars.arrowRight);
            expect(tab2).toHaveFocus();
            userEvent.type(tab2, specialChars.arrowRight);
            expect(tab3).toHaveFocus();
            userEvent.type(tab3, specialChars.arrowRight);
            expect(tab1).toHaveFocus();

            // Move left
            userEvent.type(tab1, specialChars.arrowLeft);
            expect(tab3).toHaveFocus();
            userEvent.type(tab3, specialChars.arrowLeft);
            expect(tab2).toHaveFocus();
            userEvent.type(tab2, specialChars.arrowLeft);
            expect(tab1).toHaveFocus();
        });

        it('does not display the panel associated with a disabled tab', () => {
            userEvent.click(screen.getByRole('tab', {name: /Tab 4/i}));
            expect(screen.queryByRole('tabpanel', {name: /Tab 4/i})).not.toBeInTheDocument();
        });
    });
});
