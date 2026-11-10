import {render, screen} from '@test-utils';
import {Anchor} from '../Anchor.js';

describe('Anchor', () => {
    it('renders a link to the given destination', () => {
        render(<Anchor href="/somewhere">Somewhere</Anchor>);

        expect(screen.getByRole('link', {name: 'Somewhere'})).toHaveAttribute('href', '/somewhere');
    });

    it('opens links to another origin in a new tab without exposing the opener', () => {
        render(<Anchor href="https://docs.coveo.com/en/3361">Docs</Anchor>);

        const link = screen.getByRole('link', {name: 'Docs'});
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it.each([
        ['a relative path', '/settings'],
        ['a path relative to the current page', 'settings/general'],
        ['a hash', '#details'],
        ['an absolute URL on the current origin', `${window.location.origin}/settings`],
    ])('opens %s in the same tab', (_description, href) => {
        render(<Anchor href={href}>Settings</Anchor>);

        const link = screen.getByRole('link', {name: 'Settings'});
        expect(link).not.toHaveAttribute('target');
        expect(link).not.toHaveAttribute('rel');
    });

    it('treats another port on the same host as another origin', () => {
        const otherPort = window.location.port === '1234' ? '4321' : '1234';
        render(<Anchor href={`${window.location.protocol}//${window.location.hostname}:${otherPort}/`}>App</Anchor>);

        expect(screen.getByRole('link', {name: 'App'})).toHaveAttribute('target', '_blank');
    });

    it('keeps an explicit target and rel on a link to another origin', () => {
        render(
            <Anchor href="https://docs.coveo.com" target="_self" rel="nofollow">
                Docs
            </Anchor>,
        );

        const link = screen.getByRole('link', {name: 'Docs'});
        expect(link).toHaveAttribute('target', '_self');
        expect(link).toHaveAttribute('rel', 'nofollow');
    });

    it('keeps the new tab defaults on a link to another origin when target and rel are undefined', () => {
        render(
            <Anchor href="https://docs.coveo.com" target={undefined} rel={undefined}>
                Docs
            </Anchor>,
        );

        const link = screen.getByRole('link', {name: 'Docs'});
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('updates the target when the href changes', () => {
        const {rerender} = render(<Anchor href="/settings">Link</Anchor>);
        expect(screen.getByRole('link')).not.toHaveAttribute('target');

        rerender(<Anchor href="https://docs.coveo.com">Link</Anchor>);
        expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('does not set a target when the href cannot be parsed', () => {
        render(<Anchor href="http://[invalid">Broken</Anchor>);

        expect(screen.getByRole('link', {name: 'Broken'})).not.toHaveAttribute('target');
    });

    it('does not set a target without an href', () => {
        render(<Anchor component="button">Action</Anchor>);

        expect(screen.getByRole('button', {name: 'Action'})).not.toHaveAttribute('target');
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
