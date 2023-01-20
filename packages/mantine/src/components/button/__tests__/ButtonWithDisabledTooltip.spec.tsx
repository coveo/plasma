import {render, screen, userEvent} from '@test-utils';
import {ButtonWithDisabledTooltip} from '../ButtonWithDisabledTooltip';

describe('ButtonWithDisabledTooltip', () => {
    it('disables the button when disabled prop is true', async () => {
        const user = userEvent.setup();
        const onClickSpy = jest.fn();
        render(
            <ButtonWithDisabledTooltip disabled onClick={onClickSpy}>
                save
            </ButtonWithDisabledTooltip>
        );

        const button = screen.getByRole('button', {name: /save/i});
        await user.click(button);
        expect(button).toBeDisabled();
        expect(onClickSpy).not.toHaveBeenCalled();
    });

    it('does not disable the button when disabled prop is false', async () => {
        const user = userEvent.setup();
        const onClickSpy = jest.fn();
        render(<ButtonWithDisabledTooltip onClick={onClickSpy}>save</ButtonWithDisabledTooltip>);

        const button = screen.getByRole('button', {name: /save/i});
        await user.click(button);
        expect(button).toBeEnabled();
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('shows a tooltip when hovering over the disabled button', async () => {
        const user = userEvent.setup();
        render(
            <ButtonWithDisabledTooltip disabled disabledTooltip="tooltip message">
                save
            </ButtonWithDisabledTooltip>
        );
        const button = screen.getByRole('button', {name: /save/i});
        expect(screen.queryByRole('tooltip', {name: /tooltip message/i})).not.toBeInTheDocument();
        await user.hover(button);
        expect(screen.getByRole('tooltip', {name: /tooltip message/i})).toBeInTheDocument();
    });

    it('does not show the tooltip when hovering over the button if it is not disabled', async () => {
        const user = userEvent.setup();
        render(<ButtonWithDisabledTooltip disabledTooltip="tooltip message">save</ButtonWithDisabledTooltip>);
        const button = screen.getByRole('button', {name: /save/i});
        expect(screen.queryByRole('tooltip', {name: /tooltip message/i})).not.toBeInTheDocument();
        await user.hover(button);
        expect(screen.queryByRole('tooltip', {name: /tooltip message/i})).not.toBeInTheDocument();
    });
});
