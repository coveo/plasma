import * as classNames from 'classnames';
import * as React from 'react';
import {JSXRenderable} from '../../utils/JSXUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';

export interface ISideNavProps extends IReduxStatePossibleProps {
    className?: string;
    children?: JSXRenderable;
    opened?: boolean;
}

export class SideNavigation extends React.Component<ISideNavProps> {
    static toggleEvent = 'side-navigation-toggle';

    render() {
        return (
            <nav className={classNames(this.props.className, 'navigation', {'navigation-opened': this.props.withReduxState ? this.props.opened : true})}>
                <div className='navigation-menu'>
                    <div className='navigation-menu-sections'>
                        {this.props.children}
                    </div>
                </div>
            </nav>
        );
    }
}
