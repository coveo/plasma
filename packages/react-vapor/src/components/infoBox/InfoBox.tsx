import classNames from 'classnames';
import * as React from 'react';
import * as styles from './InfoBox.scss';

export class InfoBox extends React.PureComponent<React.HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div
                {...this.props}
                className={classNames('text-oxford-blue', this.props.className, styles.infoBox)}
                style={{backgroundColor: '#ccefff'}}
            >
                {this.props.children}
            </div>
        );
    }
}
