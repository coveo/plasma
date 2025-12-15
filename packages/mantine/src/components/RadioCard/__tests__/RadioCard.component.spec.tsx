import {render, screen} from '@test-utils';
import {RadioCard} from '../RadioCard.js';

describe('RadioCard', () => {
    it('renders the title and description correctly', () => {
        const title = 'Test Title';
        const description = 'Test Description';

        render(<RadioCard label={title} description={description} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
    });
    it('renders the radio indicator correctly', () => {
        render(<RadioCard label="Test Title" />);

        expect(screen.getByRole('radio')).not.toBeDisabled();
    });

    it('renders disabled state correctly', () => {
        render(<RadioCard label="Test Title" disabled />);

        expect(screen.getByRole('radio')).toBeDisabled();
    });
});
