import {IconChevronLeft} from '@coveord/plasma-react-icons';
import {Anchor, type AnchorProps, Flex, type PolymorphicFactory, polymorphicFactory} from '@mantine/core';
import {ReactNode} from 'react';
import {useHeaderContext} from '../Header.context.js';

export interface HeaderBreadcrumbAnchorProps extends AnchorProps {
    /**
     * If true, only one breadcrumb will be displayed with a back arrow
     * @default false
     **/
    single?: boolean;
    children: ReactNode;
}

export type HeaderBreadcrumbAnchorStyleNames = 'breadcrumbAnchor' | 'breadcrumbAnchorSingleGroup';

export type HeaderBreadcrumbAnchorFactory = PolymorphicFactory<{
    props: HeaderBreadcrumbAnchorProps;
    ref: HTMLAnchorElement;
    stylesNames: HeaderBreadcrumbAnchorStyleNames;
    compound: true;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
}>;

export const HeaderBreadcrumbAnchor = polymorphicFactory<HeaderBreadcrumbAnchorFactory>((props, ref) => {
    const {children, className, classNames, styles, style, single, ...others} = props;
    const ctx = useHeaderContext();

    const content = single ? (
        <Flex
            align="center"
            {...ctx.getStyles('breadcrumbAnchorSingleGroup', {className, classNames, styles, style, props})}
        >
            <IconChevronLeft aria-label="arrow pointing back" size={16} />
            {children}
        </Flex>
    ) : (
        children
    );

    return (
        <Anchor
            ref={ref}
            inherit
            {...ctx.getStyles('breadcrumbAnchor', {className, classNames, styles, style, props})}
            {...others}
        >
            {content}
        </Anchor>
    );
});

HeaderBreadcrumbAnchor.displayName = 'Header.BreadcrumbAnchor';
