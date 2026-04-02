import {render, screen, userEvent} from '@test-utils';
import {CopyToClipboard} from '../CopyToClipboard';

describe('CopyToClipboard.Input', () => {
    it('displays the input', () => {
        const copiedValue = 'copied-value';
        render(<CopyToClipboard.Input value={copiedValue} />);

        expect(screen.getByRole('button', {name: /copy to clipboard/i})).toBeVisible();
        expect(screen.getByRole('textbox')).toHaveValue(copiedValue);
    });

    it('displays the label and description', () => {
        render(<CopyToClipboard.Input value="copied-value" label="my label" description="my description" />);

        expect(screen.getByText('my label')).toBeVisible();
        expect(screen.getByText('my description')).toBeVisible();
    });

    it('calls onCopy callback when the user copies the value to the clipboard', async () => {
        const onCopySpy = vi.fn();
        const user = userEvent.setup();

        render(<CopyToClipboard.Input value="copied-value" onCopy={onCopySpy} />);
        await user.click(screen.getByRole('button', {name: /copy/i}));
        expect(onCopySpy).toHaveBeenCalled();
    });
});
