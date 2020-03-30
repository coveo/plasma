import classNames from 'classnames';
import * as React from 'react';

export interface ITabContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export class TabContent extends React.Component<ITabContentProps> {
    render() {
        return (
            <div {...this.props} className={classNames('tab-content', this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}
