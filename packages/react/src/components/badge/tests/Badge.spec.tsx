import {render, screen, within} from '@test-utils';

describe('Badge', () => {
    it('renders a badge', () => {
        render(<Badge label="label" icon="lock" />);

        const badge = screen.getByLabelText('badge');
        expect(badge).toBeInTheDocument();
        expect(within(badge).getByText('label')).toBeInTheDocument();
        expect(within(badge).getByRole('img', {name: 'lock icon'})).toBeInTheDocument();
    });
});
