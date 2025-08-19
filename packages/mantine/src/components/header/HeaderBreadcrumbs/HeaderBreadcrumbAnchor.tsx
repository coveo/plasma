import {Anchor, type AnchorProps, type PolymorphicFactory, polymorphicFactory} from '@mantine/core';
import {useHeaderContext} from '../Header.context';

export type HeaderBreadcrumbAnchorStyleNames = 'breadcrumbAnchor';

export type HeaderBreadcrumbAnchorFactory = PolymorphicFactory<{
    props: AnchorProps;
    ref: HTMLAnchorElement;
    stylesNames: HeaderBreadcrumbAnchorStyleNames;
    compound: true;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
}>;

export const HeaderBreadcrumbAnchor = polymorphicFactory<HeaderBreadcrumbAnchorFactory>((props, ref) => {
    const {className, classNames, styles, style, ...others} = props;
    const ctx = useHeaderContext();

    return (
        <Anchor
            ref={ref}
            inherit
            {...ctx.getStyles('breadcrumbAnchor', {className, classNames, styles, style, props})}
            {...others}
        />
    );
});
HeaderBreadcrumbAnchor.displayName = '@coveo/plasma-mantine/HeaderBreadcrumbAnchor';
