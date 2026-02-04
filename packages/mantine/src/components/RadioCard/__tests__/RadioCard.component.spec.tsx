import {render, screen} from '@test-utils';
import {userEvent} from '@testing-library/user-event';
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

    it('shows tooltip when disabled with disabledTooltip prop', async () => {
        const tooltipText = 'This option is disabled';
        render(<RadioCard label="Test Title" disabled disabledTooltip={tooltipText} />);

        const radioCard = screen.getByRole('radio');
        await userEvent.hover(radioCard);

        expect(await screen.findByText(tooltipText)).toBeInTheDocument();
    });

    it('does not show tooltip when enabled with disabledTooltip prop', async () => {
        const tooltipText = 'This option is disabled';
        render(<RadioCard label="Test Title" disabledTooltip={tooltipText} />);

        const radioCard = screen.getByRole('radio');
        await userEvent.hover(radioCard);

        expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
    });
});
