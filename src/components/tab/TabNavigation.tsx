import * as React from 'react';

export interface ITabNavigationProps {}

export class TabNavigation extends React.Component<ITabNavigationProps, any> {

    render() {

        return (
            <div className='tab-navigation'>
                {this.props.children}
            </div>
        );
    }
}
