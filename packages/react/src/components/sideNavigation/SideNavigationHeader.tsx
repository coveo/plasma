import {Icon} from '@coveord/plasma-react-icons';
import {Component, ReactNode} from 'react';

/**
 * @deprecated Use SideNavigationHeaderProps instead
 */
export interface ISideNavigationHeaderProps {
    title: string;
    icon?: Icon;
    onClick?: () => void;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine NavLink instead: https://mantine.dev/core/nav-link/
 */
export class SideNavigationHeader extends Component<ISideNavigationHeaderProps> {
    private handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const icon = this.props.icon ? (
            <this.props.icon className="navigation-menu-section-header-icon" />
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
