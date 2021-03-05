import classNames from 'classnames';
import * as React from 'react';

export class InfoBoxFooter extends React.PureComponent<React.HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, 'info-box__footer')}>
                {this.props.children}
            </div>
        );
    }
}
