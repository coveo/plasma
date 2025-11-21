import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '../../../__tests__/Utils.js';
import {BrowserPreview} from '../BrowserPreview.js';

describe('BrowserPreview', () => {
    it('shows no tooltip when none specified', async () => {
        render(<BrowserPreview />);

        expect(screen.queryByRole('img', {name: /information/i})).not.toBeInTheDocument();
    });

    it('renders the specified text as the header tooltip content', async () => {
        const user = userEvent.setup();
        const headerTooltip = 'This is a custom description.';

        render(<BrowserPreview headerTooltip={headerTooltip} />);

        await waitFor(() => screen.findByRole('img', {name: /information/i}));
        await user.hover(screen.getByRole('img', {name: /information/i}));

        await waitFor(() => expect(screen.getByText(headerTooltip)).toBeVisible());
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
