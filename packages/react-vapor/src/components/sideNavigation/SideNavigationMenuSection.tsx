import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {Collapsible} from '../collapsible/Collapsible';
import {Svg} from '../svg/Svg';
import {ISideNavigationHeaderProps} from './SideNavigationHeader';

export interface ISideNavigationSectionProps extends SideNavigationHeaderProps {
    /**
     * @deprecated pass those in props directly
     */
    header?: ISideNavigationHeaderProps;
    expandable?: boolean;
    expanded?: boolean;
    onClick?: () => void;
}

export interface SideNavigationHeaderProps {
    title?: React.ReactNode;
    svgName?: string;
    svgClass?: string;
    customIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SideNavigationHeader: React.FunctionComponent<SideNavigationHeaderProps> = (props) => {
    let icon: React.ReactNode = null;
    if (props.customIcon) {
        icon = props.customIcon;
    } else if (props.svgName) {
        icon = (
            <Svg
                svgName={props.svgName}
                svgClass={classNames(
                    'navigation-menu-section-header-icon icon mod-lg transparency-3 fill-white',
                    props.svgClass
                )}
            />
        );
    } else {
        icon = <span className="navigation-menu-section-header-icon" />;
    }

    return (
        <div className="navigation-menu-section-header text-white" onClick={props.onClick}>
            {icon}
            {props.children}
        </div>
    );
};

export const SideNavigationMenuSection: React.FunctionComponent<ISideNavigationSectionProps> = ({
    expandable,
    expanded,
    onClick,
    header,
    children,
    title,
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
