import {render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {BrowserPreview} from '../BrowserPreview.js';

describe('BrowserPreview', () => {
    it('renders the specified header description as tooltip title', async () => {
        const headerDescription = '🥰';
        render(<BrowserPreview headerDescription={headerDescription} />);
        await waitFor(() => screen.findByRole('img', {name: /info/i}));
        await userEvent.hover(screen.getByRole('img', {name: /info/i}));

        expect(await screen.findByText(headerDescription)).toBeVisible();
    });

    it('renders the specific title when provided', () => {
        const headerTitle = 'La CacouSoudane';
        render(<BrowserPreview title={headerTitle} />);

        expect(screen.getByText(/la cacousoudane/i)).toBeInTheDocument();
    });

    it('renders the specific title truncated when provided, but too long', () => {
        const headerTitle = 'La CacouSoudane FAFOU LOUDANE';
        render(<BrowserPreview title={headerTitle} />);

        expect(screen.getByText(/la cacousoudane fafo\.\.\./i)).toBeInTheDocument();
    });
});
