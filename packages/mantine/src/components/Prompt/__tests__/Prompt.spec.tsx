import {render, screen} from '@test-utils';
import {Prompt} from '../Prompt.js';

describe('Prompt', () => {
    it('displays the title, body and close button', () => {
        render(
            <Prompt.Information opened onClose={vi.fn()} title="title modal">
                content modal
                <Prompt.Footer>footer content</Prompt.Footer>
            </Prompt.Information>,
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
            <Prompt.Information opened onClose={onClose} title="title modal">
                content modal
            </Prompt.Information>,
        );

        screen.getByRole('button').click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it.each([
        ['information', Prompt.Information],
        ['success', Prompt.Success],
        ['warning', Prompt.Warning],
        ['critical', Prompt.Critical],
    ])('displays a %s icon when the prompt is of variant %s', (variant, Component) => {
        render(
            <Component opened onClose={vi.fn()} title="title modal">
                content modal
            </Component>,
        );
        expect(screen.getByRole('img', {name: variant})).toBeVisible();
    });
});
