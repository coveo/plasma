import {render, screen} from '@test-utils';

import {CopyToClipboard} from '../CopyToClipboard';

describe('CopyToClipboard', () => {
    it('should display only a button by default', () => {
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
});
