import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import './styles/headings.css';

import type {Preview} from '@storybook/react-vite';
import {backgroundOptions, prefersDark} from './backgroundOptions.js';
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
        backgrounds: {value: prefersDark ? 'dark' : 'light'},
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
                order: [
                    '@overview',
                    ['Getting Started', 'Using LLMs'],
                    '@foundation',
                    ['Overview', 'Colors', 'Iconography', 'Radii', 'Shadows', 'Spacings', 'Typography'],
                    '@content',
                    ['About Content', 'Audience', 'Voice', 'Writing mechanics', 'Product vocabulary', 'Glossary'],
                    '@components',
                    [
                        'Overview',
                        'Call to action',
                        'Forms and inputs',
                        'Feedback',
                        'Layout',
                        'Data display',
                        'Typography',
                        'Miscellaneous',
                    ],
                    '*',
                    'changelogs',
                ],
            },
        },
    },
    decorators: [useColorScheme, withTheme],
};

export default preview;
