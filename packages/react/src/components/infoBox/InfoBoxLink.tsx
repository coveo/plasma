import classNames from 'classnames';
import * as React from 'react';

export class InfoBoxLink extends React.PureComponent<React.HTMLProps<HTMLAnchorElement>> {
    render() {
        return (
            <a {...this.props} className={classNames('underline', this.props.className)}>
                {this.props.children}
            </a>
        );
    }
}
