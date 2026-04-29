import {render, screen, userEvent, waitFor} from '@test-utils';
import {CopyToClipboard} from '../CopyToClipboard.js';

describe('CopyToClipboard.Menu', () => {
    it('displays the menu', () => {
        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name" tooltipLabelCopied="Name copied">
                    Copy name to clipboard
                </CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id" tooltipLabelCopied="ID copied">
                    Copy ID to clipboard
                </CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        expect(screen.getByRole('button', {name: /copy to clipboard/i})).toBeVisible();
    });

    it('opens the dropdown and shows menu items when the button is clicked', async () => {
        const user = userEvent.setup();
        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name" tooltipLabelCopied="Name copied">
                    Copy name to clipboard
                </CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id" tooltipLabelCopied="ID copied">
                    Copy ID to clipboard
                </CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        await user.click(screen.getByRole('button', {name: /copy to clipboard/i}));
        await waitFor(() => expect(screen.getByText('Copy name to clipboard')).toBeVisible());
        expect(screen.getByText('Copy ID to clipboard')).toBeVisible();
    });

    it('calls onCopy callback when the user copies the value to the clipboard', async () => {
        const onCopySpy = vi.fn();
        const user = userEvent.setup();

        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name" tooltipLabelCopied="Name copied" onCopy={onCopySpy}>
                    Copy name to clipboard
                </CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id" tooltipLabelCopied="ID copied">
                    Copy ID to clipboard
                </CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        await user.click(screen.getByRole('button', {name: /copy to clipboard/i}));
        await waitFor(() => user.click(screen.getByText('Copy name to clipboard')));

        expect(onCopySpy).toHaveBeenCalled();
    });

    it('displays the correct tooltip label when a menu item is copied', async () => {
        const user = userEvent.setup();

        render(
            <CopyToClipboard.Menu>
                <CopyToClipboard.MenuTarget />
                <CopyToClipboard.MenuItem value="copy-name" tooltipLabelCopied="Name copied">
                    Copy name to clipboard
                </CopyToClipboard.MenuItem>
                <CopyToClipboard.MenuItem value="copy-id" tooltipLabelCopied="ID copied">
                    Copy ID to clipboard
                </CopyToClipboard.MenuItem>
            </CopyToClipboard.Menu>,
        );

        await user.click(screen.getByRole('button', {name: /copy to clipboard/i}));
        await waitFor(() => user.click(screen.getByText('Copy name to clipboard')));
        expect(screen.getByRole('tooltip', {name: /name copied/i})).toBeVisible();
    });
});
