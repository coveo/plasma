import {render, screen} from '@test-utils';
import {Anchor} from '../Anchor.js';

describe('Anchor', () => {
    it('renders a link to the given destination', () => {
        render(<Anchor href="/somewhere">Somewhere</Anchor>);

        expect(screen.getByRole('link', {name: 'Somewhere'})).toHaveAttribute('href', '/somewhere');
    });

    describe('Anchor.External', () => {
        it('opens the destination in a new tab without exposing the opener', () => {
            render(<Anchor.External href="https://plasma.coveo.com">Plasma</Anchor.External>);

            const link = screen.getByRole('link', {name: /plasma/i});
            expect(link).toHaveAttribute('href', 'https://plasma.coveo.com');
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });

        it('tells screen reader users that the link opens in a new tab', () => {
            render(<Anchor.External href="https://plasma.coveo.com">Plasma</Anchor.External>);

            expect(screen.getByRole('link', {name: /^Plasma\s\(opens in a new tab\)$/})).toBeVisible();
        });

        it('announces a custom new tab label', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" newTabLabel="(ouvre un nouvel onglet)">
                    Plasma
                </Anchor.External>,
            );

            expect(screen.getByRole('link', {name: /^Plasma\s\(ouvre un nouvel onglet\)$/})).toBeVisible();
        });

        it('renders a decorative external icon by default', () => {
            render(<Anchor.External href="https://plasma.coveo.com">Plasma</Anchor.External>);

            const icon = screen.getByRole('link').querySelector('svg');
            expect(icon).toBeInTheDocument();
            expect(icon).toHaveAttribute('aria-hidden', 'true');
        });

        it('does not render the icon when showIcon is false', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" showIcon={false}>
                    Plasma
                </Anchor.External>,
            );

            expect(screen.getByRole('link', {name: /^Plasma\s\(opens in a new tab\)$/})).toBeVisible();
            expect(screen.getByRole('link').querySelector('svg')).not.toBeInTheDocument();
        });

        it('does not announce a new tab when the target is overridden', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" target="_self">
                    Plasma
                </Anchor.External>,
            );

            const link = screen.getByRole('link', {name: /^Plasma\s?$/});
            expect(link).toHaveAttribute('target', '_self');
        });

        it('forwards the ref to the anchor element', () => {
            const ref = {current: null as HTMLAnchorElement | null};
            render(
                <Anchor.External ref={ref} href="https://plasma.coveo.com">
                    Plasma
                </Anchor.External>,
            );

            expect(ref.current).toBe(screen.getByRole('link'));
        });
    });
});
