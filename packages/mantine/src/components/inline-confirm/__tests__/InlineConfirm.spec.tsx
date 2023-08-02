import {Menu} from '@mantine/core';
import {render, screen, userEvent} from '@test-utils';

import {InlineConfirm} from '../InlineConfirm';

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
                <InlineConfirm.Button id="delete" onClick={onClickSpy}>
                    Delete
                </InlineConfirm.Button>
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
                        <InlineConfirm.MenuItem id="delete" onClick={onClickSpy}>
                            Delete
                        </InlineConfirm.MenuItem>
                    </Menu.Dropdown>
                </Menu>
            </InlineConfirm>,
        );

        await user.click(screen.getByRole('button', {name: /open menu/i}));
        await user.click(screen.getByRole('menuitem', {name: /delete/i}));

        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('replace the children with a prompt when clicking on a button which requires confirmation', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <InlineConfirm>
                <InlineConfirm.Button id="my-button-id">Remove</InlineConfirm.Button>
                <InlineConfirm.Prompt id="my-button-id" label="Are you sure?" onConfirm={vi.fn()} />
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
                <InlineConfirm.Button id="my-button-id">Remove</InlineConfirm.Button>
                <InlineConfirm.Prompt
                    id="my-button-id"
                    label="Are you sure?"
                    confirmLabel="I confirm"
                    cancelLabel="I changed my mind"
                    onConfirm={confirmSpy}
                />
            </InlineConfirm>,
        );

        await user.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Are you sure?')).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'I changed my mind'}));
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(confirmSpy).not.toHaveBeenCalled();

        await user.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Are you sure?')).toBeVisible();

        await user.click(screen.getByRole('button', {name: 'I confirm'}));
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(confirmSpy).toHaveBeenCalledTimes(1);
    });

    it('shows the prompt related to the clicked button', async () => {
        const user = userEvent.setup({delay: null});
        render(
            <InlineConfirm>
                <InlineConfirm.Button id="remove">Remove</InlineConfirm.Button>
                <InlineConfirm.Prompt id="remove" label="Delete X?" onConfirm={vi.fn()} />

                <InlineConfirm.Button id="print">Print</InlineConfirm.Button>
                <InlineConfirm.Prompt id="print" label="Print?" onConfirm={vi.fn()} />
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
});
