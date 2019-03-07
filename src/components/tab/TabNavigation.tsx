import * as classNames from 'classnames';
import * as React from 'react';

export interface ITabNavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export class TabNavigation extends React.Component<ITabNavigationProps> {

    render() {
        return (
            <div className={classNames('tab-navigation', this.props.className)} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}
