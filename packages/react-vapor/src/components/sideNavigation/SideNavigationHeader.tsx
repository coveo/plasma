import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';

/**
 * @deprecated Use SideNavigationHeaderProps instead
 */
export interface ISideNavigationHeaderProps {
    title: string;
    svgName?: string;
    svgClass?: string;
    onClick?: () => void;
}

/**
 * @deprecated Will be removed in version 5
 */
export class SideNavigationHeader extends React.Component<ISideNavigationHeaderProps> {
    private handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const svgClass = classNames(
            'navigation-menu-section-header-icon icon mod-lg transparency-3',
            this.props.svgClass
        );
        const icon = this.props.svgName ? (
            <Svg svgName={this.props.svgName} svgClass={svgClass} />
        ) : (
            <span className="navigation-menu-section-header-icon" />
        );
        return (
            <div className="navigation-menu-section-header text-white" onClick={() => this.handleClick()}>
                {icon}
                {this.props.title}
                {this.props.children}
            </div>
        );
    }
}
