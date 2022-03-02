import * as React from 'react';
import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';

describe('CollapsibleContainerConnected', () => {
    it('displays the collapsible header and its content', () => {
        render(
            <CollapsibleContainerConnected id="🆔" title="the title">
                content
            </CollapsibleContainerConnected>
        );

        expect(screen.getByText('the title')).toBeVisible();
        expect(screen.getByText('content')).toBeVisible();
        expect(screen.queryByRole('img', {name: /help icon/i})).not.toBeInTheDocument();
        expect(screen.queryByRole('img', {name: /info icon/i})).not.toBeInTheDocument();
    });

    it('displays a help icon next to the title if informationUrl prop was provided', () => {
        render(
            <CollapsibleContainerConnected id="🆔" title="the title" informationUrl="http://perdu.com">
                content
            </CollapsibleContainerConnected>
        );

        expect(screen.getByRole('img', {name: /help icon/i})).toBeInTheDocument();
    });

    it('displays an info icon next to the title if informationTooltip prop was provided alone', () => {
        render(
            <CollapsibleContainerConnected id="🆔" title="the title" informationTooltip={{title: 'tooltip!'}}>
                content
            </CollapsibleContainerConnected>
        );

        expect(screen.getByRole('img', {name: /info icon/i})).toBeInTheDocument();
    });

    it('calls the onClick event when the collapsible is clicked if the prop is set', () => {
        const functionToBeCalled = jest.fn();

        render(
            <CollapsibleContainerConnected id="🆔" title="the title" onClick={functionToBeCalled}>
                content
            </CollapsibleContainerConnected>
        );

        userEvent.click(screen.getByText(/the title/i));

        expect(functionToBeCalled).toHaveBeenCalledTimes(1);
    });
});
