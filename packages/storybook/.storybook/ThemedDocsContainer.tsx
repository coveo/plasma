import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import {DocsContainer, type DocsContainerProps} from '@storybook/addon-docs/blocks';
import {type PropsWithChildren, useMemo} from 'react';
import {create} from 'storybook/theming';
import {backgroundOptions} from './backgroundOptions.js';
import {DocsTheme} from './styles/docsTheme.js';

/**
 * Docs pages render inside Storybook's own container, which needs a theme of its own.
 *
 * This used to track the `backgrounds` global and flip between light and dark, listening on
 * GLOBALS_UPDATED to follow the toolbar. Plasma does not support dark mode, so the scheme is
 * fixed and all of that is gone; see `backgroundOptions.ts` for what to restore if that
 * changes.
 */
export const ThemedDocsContainer = ({children, context, ...props}: PropsWithChildren<DocsContainerProps>) => {
    const docsTheme = useMemo(
        () =>
            create({
                base: 'light',
                appContentBg: backgroundOptions.light.value,
            }),
        [],
    );

    return (
        <DocsContainer {...props} context={context} theme={docsTheme}>
            <Plasmantine defaultColorScheme="light" theme={DocsTheme}>
                <div className="sb-unstyled">{children}</div>
            </Plasmantine>
        </DocsContainer>
    );
};
