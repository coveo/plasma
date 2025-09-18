import {render, screen, userEvent} from '@test-utils';
import {ButtonWithDisabledTooltip} from '../ButtonWithDisabledTooltip.js';

describe('ButtonWithDisabledTooltip', () => {
    it('shows a tooltip when hovering over the disabled button', async () => {
        const user = userEvent.setup();
        render(
            <ButtonWithDisabledTooltip disabled disabledTooltip="tooltip message">
                <button disabled>save</button>
            </ButtonWithDisabledTooltip>,
        );
        const button = screen.getByRole('button', {name: /save/i});
        expect(button).toBeDisabled();
        expect(screen.queryByRole('tooltip', {name: /tooltip message/i})).not.toBeInTheDocument();
        await user.hover(button);
        expect(await screen.findByRole('tooltip', {name: /tooltip message/i})).toBeInTheDocument();
    });

    it('does not show the tooltip when hovering over the button if it is not disabled', async () => {
        const user = userEvent.setup();
        render(
            <ButtonWithDisabledTooltip disabledTooltip="tooltip message">
                <button>save</button>
            </ButtonWithDisabledTooltip>,
        );
        const button = screen.getByRole('button', {name: /save/i});
        expect(screen.queryByRole('tooltip', {name: /tooltip message/i})).not.toBeInTheDocument();
        await user.hover(button);
        expect(screen.queryByRole('tooltip', {name: /tooltip message/i})).not.toBeInTheDocument();
    });

    it.skip('does not render the tooltip if there is no disabled tooltip message', () => {
        const {container} = render(
            <ButtonWithDisabledTooltip>
                <button>save</button>
            </ButtonWithDisabledTooltip>,
        );
        expect(container).toMatchInlineSnapshot(`
            <div>
              <button>
                save
              </button>
            </div>
        `);
    });
});
