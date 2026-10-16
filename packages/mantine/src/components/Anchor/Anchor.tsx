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

export const Anchor = polymorphicFactory<AnchorOverloadFactory>(({ref, ...props}) => (
    <MantineAnchor ref={ref} {...props} />
));

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

export type {AnchorExternalFactory, AnchorExternalProps, AnchorExternalStylesNames} from './AnchorExternal.js';
