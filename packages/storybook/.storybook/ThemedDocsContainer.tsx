import {Plasmantine, useMantineColorScheme} from '@coveord/plasma-mantine';
import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import {type PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {GLOBALS_UPDATED} from 'storybook/internal/core-events';
import {create} from 'storybook/theming';
import {backgroundOptions, prefersDark} from './backgroundOptions.js';

export const ThemedDocsContainer = ({children, context, ...props}: PropsWithChildren<DocsContainerProps>) => {
    const [isDark, setIsDark] = useState(() => {
        const mantineColorSchemePreferrence = localStorage.getItem('mantine-color-scheme-value');
        const stories = context.componentStories();

        if (stories.length > 0) {
            return context.getStoryContext(stories[0]).globals?.backgrounds?.value === 'dark';
        }
        return mantineColorSchemePreferrence === 'dark' || prefersDark;
    });

    useEffect(() => {
        const onGlobalsUpdated = ({globals}: {globals: Record<string, unknown>}) => {
            const newIsDark = (globals.backgrounds as {value?: string})?.value === 'dark';
            setIsDark(newIsDark);
        };
        context.channel.on(GLOBALS_UPDATED, onGlobalsUpdated);
        return () => context.channel.off(GLOBALS_UPDATED, onGlobalsUpdated);
    }, [context.channel, setIsDark]);

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
            <Plasmantine defaultColorScheme={isDark ? 'dark' : 'light'}>
                <SchemeWatcher isDark={isDark} />
                {children}
            </Plasmantine>
        </DocsContainer>
    );
};

const SchemeWatcher = ({isDark}: {isDark: boolean}) => {
    const {setColorScheme} = useMantineColorScheme();
    useEffect(() => {
        setColorScheme(isDark ? 'dark' : 'light');
    }, [isDark]);
    return null;
};
