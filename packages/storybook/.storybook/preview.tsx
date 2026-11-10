import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/carousel/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import './styles/headings.css';

import type {Preview} from '@storybook/react-vite';
import {backgroundOptions} from './backgroundOptions.js';
import {themes, withTheme} from './decorators/withTheme.js';
import {ThemedDocsContainer} from './ThemedDocsContainer.js';
import {plasmaDocsComponents} from './plasmaMarkdownOverrides.js';

const preview: Preview = {
    globalTypes: {
        primaryColor: {
            description: "Primary color applied to Mantine's theme",
            toolbar: {
                title: 'Primary Color',
                icon: 'paintbrush',
                items: themes,
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        primaryColor: 'teal',
        backgrounds: {value: 'light'},
    },
    parameters: {
        backgrounds: {
            options: backgroundOptions,
        },
        docs: {
            codePanel: true,
            container: ThemedDocsContainer,
            toc: {
                headingSelector: 'h2',
            },
            components: plasmaDocsComponents,
        },
        controls: {
            disableSaveFromUI: true,
        },
        options: {
            storySort: {
                // Sections, groups and pages that matter are ordered explicitly below.
                // Everything not named here — notably the components inside each group —
                // falls back to alphabetical. Without this they keep the order of the files
                // they were imported from, which after the recategorisation no longer
                // matches anything a reader can predict.
                method: 'alphabetical',
                // Section order and page order follow the Plasma Storybook Blueprint.
                order: [
                    'Get started',
                    ['Welcome to Plasma', 'How it works', 'Install and setup', 'Collaboration and contact'],
                    'Foundations',
                    ['Design tokens', 'Color', 'Typography', 'Spacing', 'Radii', 'Shadows', 'Iconography'],
                    'Components',
                    [
                        // Overview is the section's index page, so it stays on top.
                        // The groups below it are alphabetical, as are the components
                        // inside them (via `method` above).
                        'Overview',
                        'Buttons',
                        'Combobox',
                        'Data display',
                        'Feedback',
                        'Inputs',
                        'Layout',
                        'Navigation',
                        'Overlays',
                        'Re-exported Mantine components',
                    ],
                    'Patterns',
                    ['Overview', 'Navigate with links'],
                    'Content',
                    [
                        'Overview',
                        'Target Audience',
                        'Voice',
                        'Writing Mechanics',
                        'Product Names & Vocabulary',
                        'Glossary',
                    ],
                    '*',
                    'changelogs',
                    ['Overview'],
                ],
            },
        },
    },
    decorators: [withTheme],
};

export default preview;
