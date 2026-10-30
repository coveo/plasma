import {createTheme, useMantineColorScheme} from '@coveord/plasma-mantine/core';
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import {type PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {GLOBALS_UPDATED} from 'storybook/internal/core-events';
import {create} from 'storybook/theming';
import {backgroundOptions, getPreferredColorScheme} from './backgroundOptions.js';

/**
 * Storybook mirrors the toolbar globals into the manager URL as `globals=key:value;other.key:value`.
 * The preview iframe is same-origin, so the manager URL is readable; anything else returns undefined.
 */
const readGlobalFromManagerUrl = (key: string): string | undefined => {
    try {
        const search = window.parent?.location?.search ?? window.location.search;
        const raw = new URLSearchParams(search).get('globals');
        if (!raw) {
            return undefined;
        }
        for (const pair of raw.split(';')) {
            const [pairKey, value] = pair.split(':');
            if (pairKey === key && value) {
                return value;
            }
        }
    } catch {
        // Cross-origin manager, or no parent: fall through to the default.
    }
    return undefined;
};

export const ThemedDocsContainer = ({children, context, ...props}: PropsWithChildren<DocsContainerProps>) => {
    // Unattached docs (content and pattern pages) have no story to read globals from, so they fall back to the
    // project's initial primary color and follow the toolbar through GLOBALS_UPDATED.
    const defaultPrimaryColor =
        (context.projectAnnotations.initialGlobals?.primaryColor as string | undefined) ?? 'teal';
    const [isDark, setIsDark] = useState(() => {
        const stories = context.componentStories();

        if (stories.length > 0) {
            return context.getStoryContext(stories[0]).globals?.backgrounds?.value === 'dark';
        }
        // Unattached docs remount on globals change, so an explicit choice must win over the OS preference
        return getPreferredColorScheme() === 'dark';
    });
    const [primaryColor, setPrimaryColor] = useState<string>(() => {
        const stories = context.componentStories();

        if (stories.length > 0) {
            return (
                (context.getStoryContext(stories[0]).globals?.primaryColor as string | undefined) ?? defaultPrimaryColor
            );
        }
        // Unattached docs remount when a global changes, before GLOBALS_UPDATED reaches them, so the manager URL is
        // the only place the current choice survives.
        return readGlobalFromManagerUrl('primaryColor') ?? defaultPrimaryColor;
    });

    useEffect(() => {
        const onGlobalsUpdated = ({globals}: {globals: Record<string, unknown>}) => {
            const newIsDark = (globals.backgrounds as {value?: string})?.value === 'dark';
            setIsDark(newIsDark);
            setPrimaryColor((globals.primaryColor as string | undefined) ?? defaultPrimaryColor);
        };
        context.channel.on(GLOBALS_UPDATED, onGlobalsUpdated);
        return () => context.channel.off(GLOBALS_UPDATED, onGlobalsUpdated);
    }, [context.channel, setIsDark, setPrimaryColor, defaultPrimaryColor]);

    // Same theme as the withTheme story decorator, so live examples on docs pages match the stories they document.
    // The taller reading line height for prose is applied by CSS on the `.sb-unstyled` wrapper, not by the theme,
    // because a theme override would also reach the components rendered inside `<Unstyled>` examples.
    const mantineTheme = useMemo(() => createTheme({primaryColor}), [primaryColor]);

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
            <Plasmantine defaultColorScheme={isDark ? 'dark' : 'light'} theme={mantineTheme}>
                <SchemeWatcher isDark={isDark} />
                <div className="sb-unstyled">{children}</div>
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
