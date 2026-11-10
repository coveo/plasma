import {addons, types} from 'storybook/manager-api';
import {DocsCanvasTabs} from './DocsCanvasTabs.js';
import {SidebarFooter} from './SidebarFooter.js';
import {plasmaManagerTheme} from './plasmaManagerTheme.js';
import {shouldShowToolbar} from './toolbarPolicy.js';

// Plasma does not support dark mode, so the chrome is always light. See backgroundOptions.ts.

// Every top-level section in the sidebar. Listed explicitly because Storybook has no
// "collapse everything" flag — a new root has to be added here to start collapsed too.
const collapsedRoots = ['get-started', 'foundations', 'components', 'patterns', 'content', 'changelogs'];

addons.setConfig({
    theme: plasmaManagerTheme(),
    sidebar: {
        collapsedRoots,
    },
    layoutCustomisations: {
        showToolbar: (state, defaultValue) =>
            state.index?.[state.storyId] ? shouldShowToolbar(state.index as never, state.storyId) : defaultValue,
    },
});

// Docs / Canvas tabs on the left of the toolbar, per the blueprint.
addons.add('plasma/docs-canvas-tabs', {
    title: 'Docs and Canvas',
    type: types.TOOL,
    render: DocsCanvasTabs,
});

// No sidebar slot exists in Storybook 10, so the footer rides along with the preview
// wrapper and portals itself into the sidebar.
addons.add('plasma/sidebar-footer', {
    title: 'Sidebar footer',
    type: types.PREVIEW,
    render: SidebarFooter,
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
