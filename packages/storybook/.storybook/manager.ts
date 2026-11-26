import {addons, type State, types} from 'storybook/manager-api';
import {create} from 'storybook/theming';
import {DocsCanvasTabs} from './DocsCanvasTabs.js';

// Detect user's preferred color scheme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const base = prefersDark ? 'dark' : 'light';
const brandImage = prefersDark ? '/plasma-logo-dark.svg' : '/plasma-logo-light.svg';

/**
 * The toolbar holds preview controls — background, grid, outline, product theme. They only mean
 * something while a component is rendering underneath them, so every other page hides the bar
 * rather than offering switches that change nothing.
 *
 * A page qualifies when it sits under `Components/` and is bound to a component. That second half
 * matters: `Components/Overview` is a hand-written page with no preview, and the Foundations pages
 * are story-backed too, so neither the namespace nor the entry type separates them on its own.
 */
const rendersAComponent = (state: State): boolean => {
    const entry = state.index?.[state.storyId];
    if (!entry?.title?.startsWith('Components/')) {
        return false;
    }
    return !entry.tags?.includes('unattached-mdx');
};

addons.setConfig({
    theme: create({
        base,
        brandTitle: 'Plasma Design System',
        brandImage,
    }),
    layoutCustomisations: {
        showToolbar: (state, defaultValue) => defaultValue && rendersAComponent(state),
    },
});

// Docs / Canvas tabs on the left of the toolbar, replacing the separate sidebar entries.
addons.add('plasma/docs-canvas-tabs', {
    title: 'Docs and Canvas',
    type: types.TOOL,
    render: DocsCanvasTabs,
});

// Override the browser tab title to show "Plasma Design System" instead of "Storybook"
const titleElement = document.querySelector('title');

if (titleElement) {
    const observer = new MutationObserver(() => {
        if (document.title.includes('Storybook')) {
            document.title = document.title.replace('Storybook', 'Plasma Design System');
        }
    });

    observer.observe(titleElement, {childList: true});
}
