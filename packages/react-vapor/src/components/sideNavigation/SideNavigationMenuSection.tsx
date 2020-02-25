import * as classNames from 'classnames';
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
}
export interface ISideNavigationSectionProps extends SideNavigationHeaderProps {
    /**
     * @deprecated pass those in props directly
     */
    header?: ISideNavigationHeaderProps;
    expandable?: boolean;
    expanded?: boolean;
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

const SideNavigationHeader: React.FunctionComponent<SideNavigationHeaderProps> = ({
    customIcon,
    onClick,
    children,
    ...iconProps
}) => (
    <div className="navigation-menu-section-header text-white" onClick={onClick}>
        {customIcon || <HeaderIcon {...iconProps} />}
        {children}
    </div>
);

export const SideNavigationMenuSection: React.FunctionComponent<ISideNavigationSectionProps> = ({
    expandable,
    expanded,
    title,
    onClick,
    header,
    children,
    ...headerProps
}) => {
    const headerTitle = title || (header && header.title);
    const sectionHeader = headerTitle && (
        <SideNavigationHeader {..._.extend({}, header, headerProps)} onClick={expandable ? _.noop : onClick}>
            {headerTitle}
        </SideNavigationHeader>
    );
    const items = <div className="navigation-menu-section-items">{children}</div>;

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
        <div className="navigation-menu-section">
            {sectionHeader}
            {items}
        </div>
    );
};
