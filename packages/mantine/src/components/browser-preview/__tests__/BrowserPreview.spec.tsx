import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import {BrowserPreview} from '../BrowserPreview';

describe('BrowserPreview', () => {
    it('renders the default tooltip content when none specified', async () => {
        const user = userEvent.setup();

        render(<BrowserPreview />);

        await waitFor(() => screen.findByRole('img', {name: /info/i}));
        await user.hover(screen.getByRole('img', {name: /info/i}));

        expect(
            await screen.findByText(
                'The final look in your search page may differ due to the customization you made in your page.',
            ),
        ).toBeVisible();
    });
    it('renders the specified text as the header tooltip content', async () => {
        const user = userEvent.setup();
        const headerTooltip = 'This is a custom description.';

        render(<BrowserPreview headerTooltip={headerTooltip} />);

        await waitFor(() => screen.findByRole('img', {name: /info/i}));
        await user.hover(screen.getByRole('img', {name: /info/i}));

        expect(await screen.findByText(headerTooltip)).toBeVisible();
    });

    it('renders the specific title when provided', () => {
        const headerTitle = 'Custom title.';
        render(<BrowserPreview title={headerTitle} />);

        expect(screen.getByText(/custom title/i)).toBeInTheDocument();
    });

    it('renders the children', () => {
        render(<BrowserPreview>This is awesome content</BrowserPreview>);

        expect(screen.getByText(/this is awesome content/i)).toBeInTheDocument();
    });
});
