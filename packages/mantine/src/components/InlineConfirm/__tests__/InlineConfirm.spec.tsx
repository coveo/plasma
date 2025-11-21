import {Button, Menu} from '@mantine/core';
import {render, screen, userEvent} from '@test-utils';

import {InlineConfirm, InlineConfirmComponentsProps} from '../InlineConfirm.js';

describe('InlineConfirm', () => {
    it('renders its children', () => {
        render(<InlineConfirm>Hello World</InlineConfirm>);

        expect(screen.getByText('Hello World')).toBeVisible();
    });

    it('calls the onClick prop when clicking on a button', async () => {
        const user = userEvent.setup({delay: null});
        const onClickSpy = vi.fn();
        render(
            <InlineConfirm>
                <InlineConfirm.Target inlineConfirmId="delete" onClick={onClickSpy}>
                    Delete
                </InlineConfirm.Target>
            </InlineConfirm>,
        );

        await user.click(screen.getByRole('button', {name: 'Delete'}));

        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('calls the onClick prop when clicking on the menu item', async () => {
        const user = userEvent.setup({delay: null});
        const onClickSpy = vi.fn();
        render(
            <InlineConfirm>
                <Menu>
                    <Menu.Target>
                        <button>open menu</button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <InlineConfirm.Target component={Menu.Item} inlineConfirmId="delete" onClick={onClickSpy}>
                            Delete
                        </InlineConfirm.Target>
                    </Menu.Dropdown>
                </Menu>
            </InlineConfirm>,
        );

        await user.click(screen.getByRole('button', {name: /open menu/i}));
        await user.click(await screen.findByRole('menuitem', {name: /delete/i}));

        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('replace the children with a prompt when clicking on a button which requires confirmation', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <InlineConfirm>
                <InlineConfirm.Target inlineConfirmId="my-button-id">Remove</InlineConfirm.Target>
                <InlineConfirm.Prompt inlineConfirmId="my-button-id" />
            </InlineConfirm>,
        );
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Remove'})).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'Remove'}));

        expect(screen.getByText('Are you sure?')).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Remove'})).not.toBeInTheDocument();
    });

    it('replace the children with a prompt when clicking on a button which requires confirmation even if the prompt is nested', async () => {
        const user = userEvent.setup();
        const Fixture = ({inlineConfirmId}: InlineConfirmComponentsProps) => (
            <InlineConfirm.Prompt inlineConfirmId={inlineConfirmId} />
        );
        render(
            <InlineConfirm>
                <InlineConfirm.Target inlineConfirmId="my-button-id">Remove</InlineConfirm.Target>
                <Fixture inlineConfirmId="my-button-id" />
            </InlineConfirm>,
        );
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Remove'})).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'Remove'}));

        expect(screen.getByText('Are you sure?')).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Remove'})).not.toBeInTheDocument();
    });

    it('hides the prompt when the user cancel and call onConfirm when the user confirms', async () => {
        const user = userEvent.setup({delay: null});
        const confirmSpy = vi.fn();
        render(
            <InlineConfirm>
                <InlineConfirm.Target inlineConfirmId="my-button-id">Remove</InlineConfirm.Target>
                <InlineConfirm.Prompt
                    inlineConfirmId="my-button-id"
                    label="Remove?"
                    confirm={<Button onClick={confirmSpy}>I confirm</Button>}
                    cancel={<Button>I changed my mind</Button>}
                />
            </InlineConfirm>,
        );

        await user.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Remove?')).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'I changed my mind'}));
        expect(screen.queryByText('Remove?')).not.toBeInTheDocument();
        expect(confirmSpy).not.toHaveBeenCalled();

        await user.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Remove?')).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'I confirm'}));
        expect(screen.queryByText('Remove?')).not.toBeInTheDocument();
        expect(confirmSpy).toHaveBeenCalledTimes(1);
    });

    it('shows the prompt related to the clicked button', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <InlineConfirm>
                <InlineConfirm.Target inlineConfirmId="remove">Remove</InlineConfirm.Target>
                <InlineConfirm.Prompt
                    inlineConfirmId="remove"
                    label="Delete X?"
                    confirm={<Button>I confirm</Button>}
                    cancel={<Button>Cancel</Button>}
                />

                <InlineConfirm.Target inlineConfirmId="print">Print</InlineConfirm.Target>
                <InlineConfirm.Prompt
                    inlineConfirmId="print"
                    label="Print?"
                    confirm={<Button>Yes</Button>}
                    cancel={<Button>No, save the trees</Button>}
                />
            </InlineConfirm>,
        );

        await user.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Delete X?')).toBeVisible();
        expect(screen.queryByText('Print?')).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'Cancel'}));

        await user.click(screen.getByRole('button', {name: 'Print'}));
        expect(screen.queryByText('Delete X?')).not.toBeInTheDocument();
        expect(screen.getByText('Print?')).toBeVisible();
    });

    it('shows tooltip when button is disabled', async () => {
        const user = userEvent.setup();
        const onClickSpy = vi.fn();
        render(
            <InlineConfirm>
                <InlineConfirm.Target
                    inlineConfirmId="delete"
                    onClick={onClickSpy}
                    disabled
                    disabledTooltip="You shall not pass"
                >
                    Delete
                </InlineConfirm.Target>
            </InlineConfirm>,
        );

        const deleteButton = screen.getByRole('button', {name: 'Delete'});
        expect(deleteButton).toBeDisabled();
        expect(screen.queryByRole('tooltip', {name: /You shall not pass/i})).not.toBeInTheDocument();

        await user.hover(deleteButton.parentElement);

        expect(await screen.findByRole('tooltip', {name: /You shall not pass/i})).toBeInTheDocument();
    });
});
