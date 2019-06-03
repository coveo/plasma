import * as classNames from 'classnames';
import * as React from 'react';
import * as styles from './InfoBox.scss';

export class InfoBox extends React.PureComponent<React.HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames('text-oxford-blue bg-onahau', this.props.className, styles.infoBox)}>
                {this.props.children}
            </div>
        );
    }
}
