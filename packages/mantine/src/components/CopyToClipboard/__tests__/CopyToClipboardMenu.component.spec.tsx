import {render, screen, userEvent, waitFor} from '@test-utils';
import {CopyToClipboard} from '../CopyToClipboard';

describe('CopyToClipboard.Menu', () => {
    it('displays the menu', () => {
        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name">Copy name to clipboard</CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id">Copy ID to clipboard</CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        expect(screen.getByRole('button', {name: /copy to clipboard/i})).toBeVisible();
    });

    it('opens the dropdown and shows menu items when the button is clicked', async () => {
        const user = userEvent.setup();
        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name">Copy name to clipboard</CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id">Copy ID to clipboard</CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        await user.click(screen.getByRole('button', {name: /copy to clipboard/i}));
        await waitFor(() => expect(screen.getByText('Copy name to clipboard')).toBeVisible());
    });

    it('calls onCopy callback when the user copies the value to the clipboard', async () => {
        const onCopySpy = vi.fn();
        const user = userEvent.setup();

        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name" onCopy={onCopySpy}>
                    Copy name to clipboard
                </CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id">Copy ID to clipboard</CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        await user.click(screen.getByRole('button', {name: /copy to clipboard/i}));
        await waitFor(() => user.click(screen.getByText('Copy name to clipboard')));

        expect(onCopySpy).toHaveBeenCalled();
    });
});
