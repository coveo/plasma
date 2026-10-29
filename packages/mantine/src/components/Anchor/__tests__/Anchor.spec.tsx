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

            expect(screen.getByRole('link', {name: /^Plasma\W*\(opens in a new tab\)$/})).toBeVisible();
        });

        it('announces a custom new tab label', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" newTabLabel="(ouvre un nouvel onglet)">
                    Plasma
                </Anchor.External>,
            );

            expect(screen.getByRole('link', {name: /^Plasma\W*\(ouvre un nouvel onglet\)$/})).toBeVisible();
        });

        it('describes the new tab on a link labelled with aria-label', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" aria-label="Plasma design system">
                    Plasma
                </Anchor.External>,
            );

            expect(
                screen.getByRole('link', {name: 'Plasma design system', description: /opens in a new tab/}),
            ).toBeVisible();
        });

        it('describes the new tab on a link labelled with aria-labelledby', () => {
            render(
                <>
                    <span id="plasma-label">Plasma design system</span>
                    <Anchor.External href="https://plasma.coveo.com" aria-labelledby="plasma-label">
                        Plasma
                    </Anchor.External>
                </>,
            );

            expect(
                screen.getByRole('link', {name: 'Plasma design system', description: /opens in a new tab/}),
            ).toBeVisible();
        });

        it('keeps the existing description of a labelled link', () => {
            render(
                <>
                    <span id="plasma-hint">Public site</span>
                    <Anchor.External
                        href="https://plasma.coveo.com"
                        aria-label="Plasma design system"
                        aria-describedby="plasma-hint"
                    >
                        Plasma
                    </Anchor.External>
                </>,
            );

            expect(
                screen.getByRole('link', {
                    name: 'Plasma design system',
                    description: /^Public site\W*\(opens in a new tab\)$/,
                }),
            ).toBeVisible();
        });

        it('renders a decorative external icon', () => {
            render(<Anchor.External href="https://plasma.coveo.com">Plasma</Anchor.External>);

            const icon = screen.getByRole('link').querySelector('svg');
            expect(icon).toBeInTheDocument();
            expect(icon).toHaveAttribute('aria-hidden', 'true');
        });

        it('does not announce a new tab when the target is overridden', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" target="_self">
                    Plasma
                </Anchor.External>,
            );

            expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
            expect(screen.queryByText(/opens in a new tab/)).not.toBeInTheDocument();
        });

        it('keeps the new tab defaults when target and rel are undefined', () => {
            render(
                <Anchor.External href="https://plasma.coveo.com" target={undefined} rel={undefined}>
                    Plasma
                </Anchor.External>,
            );

            const link = screen.getByRole('link', {name: /^Plasma\W*\(opens in a new tab\)$/});
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
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
