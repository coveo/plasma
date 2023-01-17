import classNames from 'classnames';
import {Component} from 'react';

import {JSXRenderable} from '../../utils/JSXUtils.js';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils.js';

export interface ISideNavProps extends IReduxStatePossibleProps {
    className?: string;
    children?: JSXRenderable;
    opened?: boolean;
}

/**
 * @deprecated Use Mantine NavLink instead: https://mantine.dev/core/nav-link/
 */
export class SideNavigation extends Component<ISideNavProps> {
    static toggleEvent = 'side-navigation-toggle';

    render() {
        return (
            <nav
                className={classNames(this.props.className, 'navigation', {
                    'navigation-opened': !this.props.withReduxState || this.props.opened,
                })}
            >
                <div className="navigation-menu">
                    <div className="navigation-menu-sections">{this.props.children}</div>
                </div>
            </nav>
        );
    }
}
