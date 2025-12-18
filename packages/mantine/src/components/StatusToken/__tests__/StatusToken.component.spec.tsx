import {render, screen} from '@test-utils';
import {StatusToken, type StatusTokenVariant} from '../StatusToken.js';

describe('StatusToken', () => {
    it('renders with default props', () => {
        render(<StatusToken data-testid="status-token" />);
        expect(screen.getByTestId('status-token')).toHaveAttribute('data-variant', 'info');
    });

    it('renders with custom size and variant', () => {
        render(<StatusToken size="sm" data-testid="status-token" variant="success" />);
        expect(screen.getByTestId('status-token')).toHaveAttribute('data-variant', 'success');
    });

    it.each<{variant: StatusTokenVariant; expected: string}>([
        {variant: 'info', expected: 'Info'},
        {variant: 'success', expected: 'Success'},
        {variant: 'caution', expected: 'Caution'},
        {variant: 'error', expected: 'Error'},
        {variant: 'disabled', expected: 'Disabled'},
        {variant: 'waiting', expected: 'Waiting'},
        {variant: 'edited', expected: 'Edited'},
        {variant: 'new', expected: 'New'},
    ])('is accessible for the $variant variant', ({variant, expected}) => {
        render(<StatusToken variant={variant} />);
        expect(screen.getByRole('img', {name: expected})).toBeVisible();
    });
});
