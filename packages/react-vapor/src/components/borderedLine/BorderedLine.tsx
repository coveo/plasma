import classNames from 'classnames';
import * as React from 'react';

export class BorderedLine extends React.PureComponent<React.HTMLAttributes<HTMLDivElement>> {
    static defaultClassName = classNames('bordered-line mod-border-top mod-border-bottom');

    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, BorderedLine.defaultClassName)}>
                {this.props.children}
            </div>
        );
    }
}
