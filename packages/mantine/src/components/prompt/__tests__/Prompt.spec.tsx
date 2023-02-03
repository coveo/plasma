import {render, screen} from '@test-utils';
import {Prompt} from '../Prompt';

describe('Prompt', () => {
    it('displays the title, body and close button', () => {
        render(
            <Prompt variant="default" opened onClose={vi.fn()} title="title modal">
                content modal
                <Prompt.Footer>footer content</Prompt.Footer>
            </Prompt>
        );
        expect(screen.getByText(/content modal/i)).toBeInTheDocument();
        expect(screen.getByText(/footer content/i)).toBeInTheDocument();
        expect(screen.getByText(/title modal/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClose when clicking on the close button', () => {
        const onClose = vi.fn();
        render(
            <Prompt variant="default" opened onClose={onClose} title="title modal">
                content modal
            </Prompt>
        );

        screen.getByRole('button').click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
