import {render, screen} from '@test-utils';

import {CopyToClipboard, CopyToClipboardVariant} from '../CopyToClipboard';

describe('CopyToClipboard', () => {
    it('should display only a button by default', () => {
        const testValue = 'text value';
        render(<CopyToClipboard value={testValue} />);

        expect(screen.getByRole('button', {name: /copy/i})).toBeVisible();
        expect(screen.queryByDisplayValue(testValue)).not.toBeInTheDocument();
        expect(document.querySelector('input')).not.toBeInTheDocument();
    });

    describe('when the variant is of type "text"', () => {
        it('should display an input element', () => {
            const testValue = 'text value';
            render(<CopyToClipboard value={testValue} variant={CopyToClipboardVariant.Text} />);

            expect(screen.getByDisplayValue(testValue)).toBeVisible();
            expect(screen.getByRole('button', {name: /copy/i})).toBeVisible();
            expect(document.querySelector('input')).toBeInTheDocument();
        });
    });

    describe('when the variant is of type "textarea"', () => {
        it('should display a textarea element', () => {
            const testValue = 'text value';
            render(<CopyToClipboard value={testValue} variant={CopyToClipboardVariant.TextArea} />);

            expect(screen.getByDisplayValue(testValue)).toBeVisible();
            expect(screen.getByRole('button', {name: /copy/i})).toBeVisible();
            expect(document.querySelector('textarea')).toBeInTheDocument();
        });
    });
});
