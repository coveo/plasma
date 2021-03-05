import classNames from 'classnames';
import * as React from 'react';

export class InfoBox extends React.PureComponent<React.HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames('label info-box', this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}
