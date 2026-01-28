import {addons} from 'storybook/manager-api';
import {create} from 'storybook/theming';

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
