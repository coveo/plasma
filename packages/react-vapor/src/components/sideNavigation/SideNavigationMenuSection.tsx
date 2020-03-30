import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {Collapsible} from '../collapsible/Collapsible';
import {Svg} from '../svg/Svg';
import {ISideNavigationHeaderProps} from './SideNavigationHeader';

export interface SideNavigationHeaderProps {
    title?: React.ReactNode;
    svgName?: string;
    svgClass?: string;
    customIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent) => void;
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
}

const HeaderIcon: React.FunctionComponent<SideNavigationHeaderProps> = ({svgName, svgClass}) =>
    svgName ? (
        <Svg
            svgName={svgName}
            svgClass={classNames('navigation-menu-section-header-icon icon mod-lg transparency-3 fill-white', svgClass)}
        />
    ) : (
        <span className="navigation-menu-section-header-no-icon" />
    );

const SideNavigationHeader: React.FunctionComponent<SideNavigationHeaderProps &
    Pick<ISideNavigationSectionProps, 'expandable'>> = ({
    customIcon,
    onClick,
    children,
    expandable,
    isLink,
    className,
    ...iconProps
}) => {
    return (
        <div
            className={classNames(
                'navigation-menu-section-header',
                {
                    'no-collapse': !expandable && !isLink,
                },
                className
            )}
            onClick={onClick}
        >
            {customIcon || <HeaderIcon {...iconProps} />}
            {children}
        </div>
    );
};

export const SideNavigationMenuSection: React.FunctionComponent<ISideNavigationSectionProps> = ({
    expandable,
    expanded,
    title,
    onClick,
    header,
    children,
    isActive,
    isLink,
    ...headerProps
}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
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

    const items = children ? <div className="navigation-menu-section-items">{children}</div> : null;
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
            toggleIconClassName="fill-white transparency-3"
            onToggleExpandedState={onClick}
            expanded={!!expanded}
        >
            {items}
        </Collapsible>
    ) : (
        sectionLink
    );
};
