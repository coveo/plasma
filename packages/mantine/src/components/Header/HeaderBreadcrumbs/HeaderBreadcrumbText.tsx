import {type PolymorphicFactory, polymorphicFactory, Text, type TextProps} from '@mantine/core';
import {useHeaderContext} from '../Header.context.js';

export type HeaderBreadcrumbTextStyleNames = 'breadcrumbText';

export type HeaderBreadcrumbTextFactory = PolymorphicFactory<{
    props: TextProps;
    ref: HTMLParagraphElement;
    stylesNames: HeaderBreadcrumbTextStyleNames;
    compound: true;
    defaultComponent: 'p';
    defaultRef: HTMLParagraphElement;
}>;

/**
 * @deprecated Every breadcrumb item must be a link: use `Header.BreadcrumbAnchor` for each ancestor page, and leave the current page out of the trail since the header title already shows it. Will be removed in the next major version.
 */
export const HeaderBreadcrumbText = polymorphicFactory<HeaderBreadcrumbTextFactory>((props) => {
    const {className, classNames, styles, style, ref, ...others} = props;
    const ctx = useHeaderContext();

    return (
        <Text
            ref={ref}
            inherit
            {...ctx.getStyles('breadcrumbText', {className, classNames, styles, style, props})}
            {...others}
        />
    );
});

HeaderBreadcrumbText.displayName = 'Header.BreadcrumbText';
