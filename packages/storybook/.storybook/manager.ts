import {addons, types} from 'storybook/manager-api';
import {create} from 'storybook/theming';
import {DocsCanvasTabs} from './DocsCanvasTabs.js';

// Detect user's preferred color scheme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const base = prefersDark ? 'dark' : 'light';
const brandImage = prefersDark ? '/plasma-logo-dark.svg' : '/plasma-logo-light.svg';

addons.setConfig({
    theme: create({
        base,
        brandTitle: 'Plasma Design System',
        brandImage,
    }),
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
