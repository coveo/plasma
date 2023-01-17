import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {FunctionComponent, MouseEvent, PropsWithChildren, ReactNode, useEffect, useRef} from 'react';
import * as _ from 'underscore';

import {Collapsible} from '../collapsible/Collapsible.js';
import {ISideNavigationHeaderProps} from './SideNavigationHeader.js';

export interface SideNavigationHeaderProps {
    title?: ReactNode;
    icon?: Icon;
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

const HeaderIcon: FunctionComponent<SideNavigationHeaderProps> = ({icon: IconName}) =>
    IconName ? (
        <IconName height={16} className="navigation-menu-section-header-icon" />
    ) : (
        <span className="navigation-menu-section-header-no-icon" />
    );

const SideNavigationHeader: FunctionComponent<
    React.PropsWithChildren<SideNavigationHeaderProps & Pick<ISideNavigationSectionProps, 'expandable'>>
> = ({customIcon, onClick, children, expandable, isLink, className, ...iconProps}) => (
    <div
        className={classNames(
            'navigation-menu-section-header',
            {
                'no-collapse': !expandable && !isLink,
                'no-icon': !customIcon && !iconProps.icon,
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
export const SideNavigationMenuSection: FunctionComponent<PropsWithChildren<ISideNavigationSectionProps>> = ({
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
