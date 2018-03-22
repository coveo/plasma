import * as React from 'react';

export interface ITabContentProps {}

export class TabContent extends React.Component<ITabContentProps, any> {

    render() {

        return (
            <div className='tab-content'>
                {this.props.children}
            </div>
        );
    }
}
