import {render, screen} from '@test-utils';
import {Prompt} from '../Prompt';

describe('Prompt', () => {
    it('displays the title, body and close button', () => {
        render(
            <Prompt opened onClose={vi.fn()} title="title modal">
                content modal
                <Prompt.Footer>footer content</Prompt.Footer>
            </Prompt>,
        );
        expect(screen.getByRole('dialog', {name: /title modal/i})).toBeInTheDocument();
        expect(screen.getByText(/content modal/i)).toBeInTheDocument();
        expect(screen.getByText(/footer content/i)).toBeInTheDocument();
        expect(screen.getByText(/title modal/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClose when clicking on the close button', () => {
        const onClose = vi.fn();
        render(
            <Prompt opened onClose={onClose} title="title modal">
                content modal
            </Prompt>,
        );

        screen.getByRole('button').click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('display an icon', () => {
        render(
            <Prompt opened onClose={vi.fn()} title="title modal">
                content modal
            </Prompt>,
        );
        expect(screen.getByRole('presentation')).toBeVisible();
    });

    it('does not display the icon when the icon prop is null', () => {
        render(
            <Prompt opened onClose={vi.fn()} title="title modal" icon={null}>
                content modal
            </Prompt>,
        );
        expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });
});
