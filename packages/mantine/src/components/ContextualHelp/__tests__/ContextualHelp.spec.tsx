import {render, screen, userEvent, waitFor} from '@test-utils';

import {RadioCard} from '../../RadioCard/RadioCard.js';
import {ContextualHelp} from '../ContextualHelp.js';

describe('ContextualHelp', () => {
    it('renders a button named "More information" by default', () => {
        render(<ContextualHelp>Help content</ContextualHelp>);

        expect(screen.getByRole('button', {name: 'More information'})).toBeVisible();
    });

    it('uses the provided aria-label as the button name', () => {
        render(<ContextualHelp aria-label="About clickthrough rate">Help content</ContextualHelp>);

        expect(screen.getByRole('button', {name: 'About clickthrough rate'})).toBeVisible();
    });

    it('does not focus the associated field when clicked inside a label', async () => {
        const user = userEvent.setup();
        render(
            <label>
                Field label
                <ContextualHelp>Help content</ContextualHelp>
                <input />
            </label>,
        );

        await user.click(screen.getByRole('button', {name: 'More information'}));

        expect(screen.getByRole('textbox')).not.toHaveFocus();
    });

    it('does not prevent submitting a form with the Enter key', async () => {
        const user = userEvent.setup();
        const onSubmit = vi.fn((event) => event.preventDefault());
        render(
            <form onSubmit={onSubmit}>
                <label>
                    Name <ContextualHelp>Help content</ContextualHelp>
                    <input />
                </label>
                <button type="submit">Save</button>
            </form>,
        );

        await user.type(screen.getByRole('textbox'), 'value{Enter}');

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    describe('when not focusable', () => {
        it('renders a non-focusable icon named "question" that shows the content on hover', async () => {
            const user = userEvent.setup();
            render(<ContextualHelp focusable={false}>Help content</ContextualHelp>);

            expect(screen.queryByRole('button')).not.toBeInTheDocument();
            await user.tab();
            expect(document.body).toHaveFocus();

            await user.hover(screen.getByRole('img', {name: 'question'}));
            expect(await screen.findByRole('tooltip')).toHaveTextContent('Help content');
        });

        it('still lets mouse users reach the links of the interactive variant', async () => {
            const user = userEvent.setup();
            render(
                <ContextualHelp variant="interactive" focusable={false}>
                    Help content <a href="https://docs.coveo.com">Learn more</a>
                </ContextualHelp>,
            );

            expect(screen.queryByRole('button')).not.toBeInTheDocument();
            await user.hover(screen.getByRole('img', {name: 'question'}));
            await user.hover(await screen.findByRole('link', {name: 'Learn more'}));
            await new Promise((resolve) => setTimeout(resolve, 200));
            expect(screen.getByRole('link', {name: 'Learn more'})).toBeVisible();
        });

        it('is not focusable inside a RadioCard label, so the card does not contain a nested button', async () => {
            const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
            const user = userEvent.setup();
            render(
                <RadioCard
                    value="a"
                    label={
                        <>
                            Option <ContextualHelp>Help content</ContextualHelp>
                        </>
                    }
                />,
            );

            expect(screen.queryByRole('button', {name: 'More information'})).not.toBeInTheDocument();
            expect(consoleError).not.toHaveBeenCalled();

            await user.hover(screen.getByRole('img', {name: 'question'}));
            expect(await screen.findByRole('tooltip')).toHaveTextContent('Help content');
            consoleError.mockRestore();
        });
    });

    describe('text variant', () => {
        it('shows the content on hover and hides it on unhover', async () => {
            const user = userEvent.setup();
            render(<ContextualHelp>Help content</ContextualHelp>);
            const trigger = screen.getByRole('button', {name: 'More information'});

            await user.hover(trigger);
            expect(await screen.findByRole('tooltip')).toHaveTextContent('Help content');

            await user.unhover(trigger);
            await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
        });

        it('shows the content on keyboard focus and describes the button with it', async () => {
            const user = userEvent.setup();
            render(<ContextualHelp>Help content</ContextualHelp>);

            await user.tab();

            const tooltip = await screen.findByRole('tooltip');
            expect(tooltip).toHaveTextContent('Help content');
            expect(screen.getByRole('button', {name: 'More information'})).toHaveAccessibleDescription('Help content');
        });
    });

    describe('interactive variant', () => {
        it('shows the content on hover and keeps it open while hovering it', async () => {
            const user = userEvent.setup();
            render(
                <ContextualHelp variant="interactive">
                    Help content <a href="https://docs.coveo.com">Learn more</a>
                </ContextualHelp>,
            );

            await user.hover(screen.getByRole('button', {name: 'More information'}));
            const dialog = await screen.findByRole('dialog');
            expect(dialog).toHaveTextContent('Help content');

            await user.hover(screen.getByRole('link', {name: 'Learn more'}));
            await new Promise((resolve) => setTimeout(resolve, 200));
            expect(screen.getByRole('dialog')).toBeVisible();
        });

        it('closes when the pointer leaves the button and the content', async () => {
            const user = userEvent.setup();
            render(<ContextualHelp variant="interactive">Help content</ContextualHelp>);
            const trigger = screen.getByRole('button', {name: 'More information'});

            await user.hover(trigger);
            await screen.findByRole('dialog');
            await user.unhover(trigger);

            await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
        });

        it('opens on keyboard focus, lets the user tab into its links, and closes on Escape', async () => {
            const user = userEvent.setup();
            render(
                <ContextualHelp variant="interactive">
                    Help content <a href="https://docs.coveo.com">Learn more</a>
                </ContextualHelp>,
            );

            await user.tab();
            expect(screen.getByRole('button', {name: 'More information'})).toHaveAttribute('aria-expanded', 'true');
            await screen.findByRole('dialog');

            await user.tab();
            expect(screen.getByRole('link', {name: 'Learn more'})).toHaveFocus();
            expect(screen.getByRole('dialog')).toBeVisible();

            await user.keyboard('{Escape}');
            await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
        });
    });
});
