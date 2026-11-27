import {render, screen, userEvent} from '@test-utils';
import {StatusToken} from '../../StatusToken/StatusToken.js';
import {InlineMessage, type InlineMessageVariant} from '../InlineMessage.js';

describe('InlineMessage', () => {
    it('renders the message content', () => {
        render(<InlineMessage>Renaming triggers a full rebuild.</InlineMessage>);
        expect(screen.getByText('Renaming triggers a full rebuild.')).toBeVisible();
    });

    it('renders a gray information icon for the subtle variant', () => {
        render(<InlineMessage.Subtle>Based on 30-day activity</InlineMessage.Subtle>);
        expect(screen.getByRole('img', {name: 'information'})).toBeVisible();
    });

    it.each<{variant: InlineMessageVariant; iconName: string}>([
        {variant: 'information', iconName: 'information'},
        {variant: 'advice', iconName: 'advice'},
        {variant: 'warning', iconName: 'warning'},
        {variant: 'critical', iconName: 'error'},
        {variant: 'success', iconName: 'success'},
    ])('renders the matching semantic icon for the $variant variant', ({variant, iconName}) => {
        render(<InlineMessage variant={variant}>message</InlineMessage>);
        expect(screen.getByRole('img', {name: iconName})).toBeVisible();
    });

    it('exposes semantic sub-components', () => {
        render(
            <>
                <InlineMessage.Information>info</InlineMessage.Information>
                <InlineMessage.Advice>advice</InlineMessage.Advice>
                <InlineMessage.Warning>warning</InlineMessage.Warning>
                <InlineMessage.Critical>critical</InlineMessage.Critical>
                <InlineMessage.Success>success</InlineMessage.Success>
            </>,
        );
        expect(screen.getByRole('img', {name: 'information'})).toBeVisible();
        expect(screen.getByRole('img', {name: 'advice'})).toBeVisible();
        expect(screen.getByRole('img', {name: 'warning'})).toBeVisible();
        expect(screen.getByRole('img', {name: 'error'})).toBeVisible();
        expect(screen.getByRole('img', {name: 'success'})).toBeVisible();
    });

    it('removes the icon when icon is null', () => {
        render(<InlineMessage.Warning icon={null}>No icon here</InlineMessage.Warning>);
        expect(screen.queryByRole('img')).not.toBeInTheDocument();
        expect(screen.getByText('No icon here')).toBeVisible();
    });

    it('replaces the default icon with a custom one', () => {
        render(
            <InlineMessage.Subtle icon={<StatusToken variant="waiting" />}>Indexing in progress</InlineMessage.Subtle>,
        );
        expect(screen.getByRole('img', {name: 'Waiting'})).toBeVisible();
        expect(screen.queryByRole('img', {name: 'information'})).not.toBeInTheDocument();
    });

    it('renders a link placed after the message text', () => {
        render(
            <InlineMessage.Critical>
                The index could not be rebuilt. <a href="/logs">View the log</a>
            </InlineMessage.Critical>,
        );
        expect(screen.getByRole('link', {name: 'View the log'})).toHaveAttribute('href', '/logs');
    });

    it('reveals the tooltip content when hovering the message', async () => {
        const user = userEvent.setup();
        render(
            <InlineMessage.Warning tooltip="3 of the last 30 days have no data because tracking was interrupted.">
                Based on partial data
            </InlineMessage.Warning>,
        );
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

        await user.hover(screen.getByText('Based on partial data'));

        expect(await screen.findByRole('tooltip')).toHaveTextContent(
            '3 of the last 30 days have no data because tracking was interrupted.',
        );
    });

    it('reveals the tooltip content when the message receives keyboard focus', async () => {
        const user = userEvent.setup();
        render(
            <InlineMessage.Warning tooltip="Tracking was interrupted.">Based on partial data</InlineMessage.Warning>,
        );

        await user.tab();

        expect(screen.getByText('Based on partial data').closest('[tabindex="0"]')).toHaveFocus();
        expect(await screen.findByRole('tooltip')).toHaveTextContent('Tracking was interrupted.');
    });

    it('is not focusable when it has no tooltip', () => {
        render(<InlineMessage.Warning>Renaming triggers a full rebuild.</InlineMessage.Warning>);
        expect(screen.getByText('Renaming triggers a full rebuild.').closest('[tabindex]')).toBeNull();
    });

    it('forwards the role so the message can be announced as a live region', () => {
        render(<InlineMessage.Critical role="alert">The index could not be rebuilt.</InlineMessage.Critical>);
        expect(screen.getByRole('alert')).toHaveTextContent('The index could not be rebuilt.');
    });

    it('renders inline elements only by default so it can live inside a paragraph', () => {
        render(
            <p data-testid="paragraph">
                <InlineMessage.Success>Saved</InlineMessage.Success>
            </p>,
        );
        expect(screen.getByTestId('paragraph').querySelector('div')).toBeNull();
        expect(screen.getByText('Saved')).toBeVisible();
    });

    it('renders as a custom element', () => {
        render(<InlineMessage.Success component="div">Saved</InlineMessage.Success>);
        expect(screen.getByText('Saved').closest('div')).toBeInTheDocument();
    });
    it('applies classNames overrides to its inner elements', () => {
        render(
            <InlineMessage.Information classNames={{icon: 'custom-icon', label: 'custom-label'}}>
                message
            </InlineMessage.Information>,
        );
        expect(screen.getByText('message')).toHaveClass('custom-label');
        expect(screen.getByRole('img', {name: 'information'}).parentElement).toHaveClass('custom-icon');
    });
});
