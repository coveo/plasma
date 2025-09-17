import {render, screen, userEvent} from '@test-utils';

import {CopyToClipboard} from '../CopyToClipboard.js';

describe('CopyToClipboard', () => {
    it('displays only a button by default', () => {
        const testValue = 'text value';
        render(<CopyToClipboard value={testValue} />);

        expect(screen.getByRole('button', {name: /copy/i})).toBeVisible();
        expect(screen.queryByDisplayValue(testValue)).not.toBeInTheDocument();
        expect(document.querySelector('input')).not.toBeInTheDocument();
    });

    describe('when "isLabel" is true', () => {
        it('should display an input element', () => {
            const testValue = 'text value';
            render(<CopyToClipboard value={testValue} withLabel />);

            expect(screen.getByDisplayValue(testValue)).toBeVisible();
            expect(screen.getByRole('button', {name: /copy/i})).toBeVisible();
            expect(document.querySelector('input')).toBeInTheDocument();
        });
    });

    it('calls onCopy callback when the users copy the value to the clipboard', async () => {
        const onCopySpy = vi.fn();
        const user = userEvent.setup();
        render(<CopyToClipboard value="whatever" onCopy={onCopySpy} />);

        await user.click(screen.getByRole('button', {name: /copy/i}));

        expect(onCopySpy).toHaveBeenCalled();
    });
});
