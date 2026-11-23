import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/carousel/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import './styles/headings.css';

import type {Preview} from '@storybook/react-vite';
import {backgroundOptions, getPreferredColorScheme} from './backgroundOptions.js';
import {useColorScheme} from './decorators/useColorScheme.js';
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
        backgrounds: {value: getPreferredColorScheme()},
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
                // Sections and groups are ordered explicitly; everything else — the
                // components inside each group — falls back to alphabetical.
                method: 'alphabetical',
                order: [
                    'Get started',
                    ['Welcome to Plasma', 'How it works', 'Install and setup', 'Collaboration and contact'],
                    'Foundations',
                    ['Colors', 'Typography', 'Spacings', 'Radii', 'Shadows', 'Iconography', 'Variables'],
                    'Components',
                    [
                        // Overview is the section index, so it stays on top. The groups
                        // below it are alphabetical, as are the components inside them.
                        'Overview',
                        'Buttons',
                        'Combobox',
                        'Data display',
                        'Feedback',
                        'Inputs',
                        'Layout',
                        'Navigation',
                        'Overlays',
                    ],
                    'Patterns',
                    ['Overview', 'Navigate with links'],
                    'Content',
                    ['About Content', 'Audience', 'Voice', 'Writing mechanics', 'Product vocabulary', 'Glossary'],
                    '*',
                    'changelogs',
                ],
            },
        },
    },
    decorators: [useColorScheme, withTheme],
};

export default preview;
