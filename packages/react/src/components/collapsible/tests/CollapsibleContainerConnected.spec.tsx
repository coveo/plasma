import {render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';

describe('CollapsibleContainerConnected', () => {
    it('displays the collapsible header and its content', () => {
        render(
            <CollapsibleContainerConnected id="🆔" title="the title">
                content
            </CollapsibleContainerConnected>,
        );

        expect(screen.getByText('the title')).toBeVisible();
        expect(screen.getByText('content')).toBeVisible();
        expect(screen.queryByRole('img', {name: /question/i})).not.toBeInTheDocument();
        expect(screen.queryByRole('img', {name: /info/i})).not.toBeInTheDocument();
    });

    it('displays a question icon next to the title if informationUrl prop was provided', async () => {
        render(
            <CollapsibleContainerConnected id="🆔" title="the title" informationUrl="http://perdu.com">
                content
            </CollapsibleContainerConnected>,
        );
        await waitFor(() => screen.findByRole('img', {name: /question/i}));

        expect(screen.getByRole('img', {name: /question/i})).toBeInTheDocument();
    });

    it('displays an info icon next to the title if informationTooltip prop was provided alone', async () => {
        render(
            <CollapsibleContainerConnected id="🆔" title="the title" informationTooltip={{title: 'tooltip!'}}>
                content
            </CollapsibleContainerConnected>,
        );

        await waitFor(() => screen.findByRole('img', {name: /info/i}));

        expect(screen.getByRole('img', {name: /info/i})).toBeInTheDocument();
    });

    it('calls the onClick event when the collapsible is clicked if the prop is set', async () => {
        const functionToBeCalled = jest.fn();

        render(
            <CollapsibleContainerConnected id="🆔" title="the title" onClick={functionToBeCalled}>
                content
            </CollapsibleContainerConnected>,
        );

        await userEvent.click(screen.getByText(/the title/i));

        expect(functionToBeCalled).toHaveBeenCalledTimes(1);
    });
});
