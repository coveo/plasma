import './styles/reset.css';

import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/notifications/styles.layer.css';

import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import type {Preview} from '@storybook/react-vite';
import {type PropsWithChildren, useEffect, useState} from 'react';
import {GLOBALS_UPDATED} from 'storybook/internal/core-events';
import {themes as storybookThemes} from 'storybook/theming';
import {useColorScheme} from './decorators/useColorScheme.js';
import {themes, withTheme} from './decorators/withTheme.js';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const ThemedDocsContainer = ({children, context, ...props}: PropsWithChildren<DocsContainerProps>) => {
    const [isDark, setIsDark] = useState(() => {
        const stories = context.componentStories();
        if (stories.length > 0) {
            return context.getStoryContext(stories[0]).globals?.backgrounds?.value === 'dark';
        }
        return prefersDark;
    });

    useEffect(() => {
        const onGlobalsUpdated = ({globals}: {globals: Record<string, unknown>}) => {
            setIsDark((globals.backgrounds as {value?: string})?.value === 'dark');
        };
        context.channel.on(GLOBALS_UPDATED, onGlobalsUpdated);
        return () => context.channel.off(GLOBALS_UPDATED, onGlobalsUpdated);
    }, [context.channel]);

    return (
        <DocsContainer {...props} context={context} theme={isDark ? storybookThemes.dark : storybookThemes.light}>
            {children}
        </DocsContainer>
    );
};

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
            options: {
                dark: {name: 'Dark', value: 'var(--coveo-app-background)'},
                light: {name: 'Light', value: 'var(--coveo-app-background)'},
            },
        },
        chromatic: {disableSnapshot: true},
        docs: {
            codePanel: true,
            container: ThemedDocsContainer,
        },
        controls: {
            disableSaveFromUI: true,
        },
        options: {
            storySort: {
                order: ['@foundation', '@components', '*'],
            },
        },
    },
    decorators: [useColorScheme, withTheme],
};

export default preview;
