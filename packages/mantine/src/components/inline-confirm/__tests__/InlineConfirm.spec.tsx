import {render, screen, userEvent} from '@test-utils';

import {InlineConfirm} from '../InlineConfirm';

describe('InlineConfirm', () => {
    it('renders its children', () => {
        render(<InlineConfirm>Hello World</InlineConfirm>);

        expect(screen.getByText('Hello World')).toBeVisible();
    });

    it('calls the onClick prop when clicking on a button', () => {
        const onClickSpy = jest.fn();
        render(
            <InlineConfirm>
                <InlineConfirm.Button id="delete" onClick={onClickSpy}>
                    Delete
                </InlineConfirm.Button>
            </InlineConfirm>
        );

        userEvent.click(screen.getByRole('button', {name: 'Delete'}));

        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('replace the children with a prompt when clicking on a button which requires confirmation', () => {
        render(
            <InlineConfirm>
                <InlineConfirm.Button id="my-button-id">Remove</InlineConfirm.Button>
                <InlineConfirm.Prompt id="my-button-id" label="Are you sure?" onConfirm={jest.fn()} />
            </InlineConfirm>
        );
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Remove'})).toBeVisible();

        userEvent.click(screen.getByRole('button', {name: 'Remove'}));

        expect(screen.getByText('Are you sure?')).toBeVisible();
        expect(screen.queryByRole('button', {name: 'Remove'})).not.toBeInTheDocument();
    });

    it('hides the prompt when the user cancel and call onConfirm when the user confirms', () => {
        const confirmSpy = jest.fn();
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
            </InlineConfirm>
        );

        userEvent.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Are you sure?')).toBeVisible();

        userEvent.click(screen.getByRole('button', {name: 'I changed my mind'}));
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(confirmSpy).not.toHaveBeenCalled();

        userEvent.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Are you sure?')).toBeVisible();

        userEvent.click(screen.getByRole('button', {name: 'I confirm'}));
        expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
        expect(confirmSpy).toHaveBeenCalledTimes(1);
    });

    it('shows the prompt related to the clicked button', () => {
        render(
            <InlineConfirm>
                <InlineConfirm.Button id="remove">Remove</InlineConfirm.Button>
                <InlineConfirm.Prompt id="remove" label="Delete X?" onConfirm={jest.fn()} />

                <InlineConfirm.Button id="print">Print</InlineConfirm.Button>
                <InlineConfirm.Prompt id="print" label="Print?" onConfirm={jest.fn()} />
            </InlineConfirm>
        );

        userEvent.click(screen.getByRole('button', {name: 'Remove'}));
        expect(screen.getByText('Delete X?')).toBeVisible();
        expect(screen.queryByText('Print?')).not.toBeInTheDocument();

        userEvent.click(screen.getByRole('button', {name: 'Cancel'}));

        userEvent.click(screen.getByRole('button', {name: 'Print'}));
        expect(screen.queryByText('Delete X?')).not.toBeInTheDocument();
        expect(screen.getByText('Print?')).toBeVisible();
    });
});
