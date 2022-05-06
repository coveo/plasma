import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import {Component} from 'react';

import {Svg} from '../svg';

/**
 * @deprecated Use SideNavigationHeaderProps instead
 */
export interface ISideNavigationHeaderProps {
    title: string;
    svgName?: SvgName;
    svgClass?: string;
    onClick?: () => void;
}

/**
 * @deprecated Will be removed in version 5
 */
export class SideNavigationHeader extends Component<ISideNavigationHeaderProps> {
    private handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const svgClass = classNames('navigation-menu-section-header-icon icon mod-lg', this.props.svgClass);
        const icon = this.props.svgName ? (
            <Svg svgName={this.props.svgName} svgClass={svgClass} />
        ) : (
            <span className="navigation-menu-section-header-icon" />
        );
        return (
            <div className="navigation-menu-section-header" onClick={() => this.handleClick()}>
                {icon}
                {this.props.title}
                {this.props.children}
            </div>
        );
    }
}
