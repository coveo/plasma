import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import {ReactNode, MouseEvent, FunctionComponent, useRef, useEffect} from 'react';
import * as _ from 'underscore';

import {Collapsible} from '../collapsible/Collapsible';
import {Svg} from '../svg';
import {ISideNavigationHeaderProps} from './SideNavigationHeader';

export interface SideNavigationHeaderProps {
    title?: ReactNode;
    svgName?: SvgName;
    svgClass?: string;
    customIcon?: ReactNode;
    onClick?: (event: MouseEvent) => void;
    isLink?: boolean;
    className?: string;
}
export interface ISideNavigationSectionProps extends SideNavigationHeaderProps {
    /**
     * @deprecated pass those in props directly
     */
    header?: ISideNavigationHeaderProps;
    expandable?: boolean;
    expanded?: boolean;
    isActive?: boolean;
    onClick?: () => void;
    itemsClassName?: string;
}

const HeaderIcon: FunctionComponent<SideNavigationHeaderProps> = ({svgName, svgClass}) =>
    svgName ? (
        <Svg svgName={svgName} svgClass={classNames('navigation-menu-section-header-icon icon mod-lg', svgClass)} />
    ) : (
        <span className="navigation-menu-section-header-no-icon" />
    );

const SideNavigationHeader: FunctionComponent<
    SideNavigationHeaderProps & Pick<ISideNavigationSectionProps, 'expandable'>
> = ({customIcon, onClick, children, expandable, isLink, className, ...iconProps}) => (
    <div
        className={classNames(
            'navigation-menu-section-header',
            {
                'no-collapse': !expandable && !isLink,
                'no-icon': !customIcon && !iconProps.svgName,
            },
            className
        )}
        onClick={onClick}
    >
        {customIcon || <HeaderIcon {...iconProps} />}
        {children}
    </div>
);

/**
 * @deprecated Use Mantine NavLink instead: https://mantine.dev/core/nav-link/
 */
export const SideNavigationMenuSection: FunctionComponent<ISideNavigationSectionProps> = ({
    expandable,
    expanded,
    title,
    onClick,
    header,
    children,
    isActive,
    isLink,
    itemsClassName,
    ...headerProps
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isActive && ref.current) {
            ref.current.scrollIntoView({behavior: 'instant', block: 'nearest'});
        }
    }, [isActive]);

    const sectionClasses = classNames('navigation-menu-section-link', {'state-active': isActive});
    const headerTitle = title || (header && header.title);
    const sectionHeader = headerTitle && (
        <SideNavigationHeader
            {..._.extend({}, header, headerProps)}
            expandable={expandable}
            isLink={isLink}
            onClick={expandable ? _.noop : onClick}
        >
            {headerTitle}
        </SideNavigationHeader>
    );

    const items = children ? (
        <div className={classNames('navigation-menu-section-items', itemsClassName)}>{children}</div>
    ) : null;
    const sectionLink = isLink ? (
        <div className={sectionClasses} ref={ref}>
            {sectionHeader}
        </div>
    ) : (
        <div className={'navigation-menu-section'}>
            {sectionHeader}
            {items}
        </div>
    );

    return expandable ? (
        <Collapsible
            className="navigation-menu-section"
            id={_.uniqueId('nav-section')}
            headerContent={sectionHeader}
            toggleIconClassName="navigation-menu-section-toggle"
            onClick={onClick}
            expanded={!!expanded}
        >
            {items}
        </Collapsible>
    ) : (
        sectionLink
    );
};
