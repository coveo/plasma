import * as classNames from 'classnames';
import * as React from 'react';
import * as styles from './InfoBox.scss';

export class InfoBoxFooter extends React.PureComponent<React.HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, styles.infoBoxFooter)}>
                {this.props.children}
            </div>
        );
    }
}
