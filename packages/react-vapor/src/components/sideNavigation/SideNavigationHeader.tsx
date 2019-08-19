import * as classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';

/**
 * @deprecated Use SideNavigationHeaderProps instead
 */
export interface ISideNavigationHeaderProps {
    title?: string;
    svgName?: string;
    svgClass?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * @deprecated Will be removed in version 5
 */
export const SideNavigationHeader: React.FunctionComponent<ISideNavigationHeaderProps> = ({
    onClick,
    svgClass,
    svgName,
    children,
}) => {
    const icon = svgName ? (
        <Svg
            svgName={svgName}
            svgClass={classNames('navigation-menu-section-header-icon icon mod-lg transparency-3', svgClass)}
        />
    ) : (
        <span className="navigation-menu-section-header-icon" />
    );

    return (
        <div className="navigation-menu-section-header text-white" onClick={onClick}>
            {icon}
            {children}
        </div>
    );
};
