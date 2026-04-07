import {render, screen, userEvent} from '@test-utils';
import {CopyToClipboard} from '../CopyToClipboard.js';

describe('CopyToClipboard.Button', () => {
    it('displays the button', () => {
        render(<CopyToClipboard.Button value="copied-value" />);

        expect(screen.getByRole('button', {name: /copy to clipboard/i})).toBeVisible();
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    it('calls onCopy callback when the user copies the value to the clipboard', async () => {
        const onCopySpy = vi.fn();
        const user = userEvent.setup();
        render(<CopyToClipboard.Button value="copied-value" onCopy={onCopySpy} />);

        await user.click(screen.getByRole('button', {name: /copy to clipboard/i}));

        expect(onCopySpy).toHaveBeenCalled();
    });
});
