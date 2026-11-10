import {create} from 'storybook/theming';

/**
 * The manager chrome's theme. Lives here because two places need to agree on it: the boot
 * configuration in `manager.ts` and the colour-scheme toggle, which swaps it at runtime.
 * The brand image changes with the scheme, so the logo never sits on a background it was
 * not drawn for.
 */
export const plasmaManagerTheme = () =>
    create({
        base: 'light',
        brandTitle: 'Plasma Design System',
        brandImage: '/plasma-logo-light.svg',
    });
