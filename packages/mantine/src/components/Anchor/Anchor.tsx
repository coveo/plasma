import {
    AnchorCssVariables,
    AnchorProps,
    AnchorStylesNames,
    AnchorVariant,
    Anchor as MantineAnchor,
    polymorphicFactory,
    PolymorphicFactory,
} from '@mantine/core';
import {AnchorExternal, AnchorExternalProps, AnchorExternalStylesNames} from './AnchorExternal.js';

export type AnchorOverloadFactory = PolymorphicFactory<{
    props: AnchorProps;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorStylesNames;
    vars: AnchorCssVariables;
    variant: AnchorVariant;
    staticComponents: {
        External: typeof AnchorExternal;
    };
}>;

const isExternalHref = (href: string | undefined): boolean => {
    if (!href || typeof window === 'undefined') {
        return false;
    }
    try {
        return new URL(href, window.location.origin).origin !== window.location.origin;
    } catch {
        return false;
    }
};

export const Anchor = polymorphicFactory<AnchorOverloadFactory>(({ref, ...props}) => {
    const {href, target, rel} = props as {href?: string; target?: string; rel?: string};
    const isExternal = isExternalHref(href);

    // Explicit target and rel props take precedence over the external defaults, undefined ones don't
    return (
        <MantineAnchor
            ref={ref}
            {...props}
            target={target ?? (isExternal ? '_blank' : undefined)}
            rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        />
    );
});

Anchor.External = AnchorExternal;
Anchor.displayName = 'Anchor';

export namespace Anchor {
    export type Props = AnchorProps;
    export type StylesNames = AnchorStylesNames;
    export type CssVariables = AnchorCssVariables;
    export type Factory = AnchorOverloadFactory;

    export namespace External {
        export type Props = AnchorExternalProps;
        export type StylesNames = AnchorExternalStylesNames;
    }
}

export type {AnchorCssVariables, AnchorFactory, AnchorProps, AnchorStylesNames, AnchorVariant} from '@mantine/core';
export type {AnchorExternalFactory, AnchorExternalProps, AnchorExternalStylesNames} from './AnchorExternal.js';
