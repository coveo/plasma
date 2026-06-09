import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import {type PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {GLOBALS_UPDATED} from 'storybook/internal/core-events';
import {create} from 'storybook/theming';
import {backgroundOptions, prefersDark} from './backgroundOptions.js';

export const ThemedDocsContainer = ({children, context, ...props}: PropsWithChildren<DocsContainerProps>) => {
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

    const docsTheme = useMemo(
        () =>
            create({
                base: isDark ? 'dark' : 'light',
                appContentBg: isDark ? backgroundOptions.dark.value : backgroundOptions.light.value,
            }),
        [isDark],
    );

    return (
        <DocsContainer {...props} context={context} theme={docsTheme}>
            {children}
        </DocsContainer>
    );
};
