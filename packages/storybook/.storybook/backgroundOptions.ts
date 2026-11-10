/**
 * Plasma does not support dark mode, so the Storybook is pinned to light.
 *
 * This used to follow `prefers-color-scheme` and whatever the toolbar last stored. Both are
 * gone: with no control left to switch back, anyone whose OS is set to dark — or who had a
 * stored dark preference from before — would have been stuck in a scheme the design system
 * does not actually support.
 *
 * To bring dark mode back: restore the OS/localStorage lookup here, re-add the colour-scheme
 * control to the sidebar footer, and drop the rule hiding the backgrounds tool in
 * `manager-head.html`.
 */
export const backgroundOptions = {
    light: {name: 'Light', value: 'var(--coveo-app-background)'},
};
