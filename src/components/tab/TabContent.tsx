import * as classNames from 'classnames';
import * as React from 'react';

export interface ITabContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export class TabContent extends React.Component<ITabContentProps> {

    render() {

        return (
            <div className={classNames('tab-content', this.props.className)} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}
