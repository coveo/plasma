import * as classNames from 'classnames';
import * as React from 'react';
import * as styles from './StickyFooter.scss';

export interface IStickyFooterProps {
    className?: string;
}

export class StickyFooter extends React.Component<IStickyFooterProps> {
    static ID = 'StickyFooter';

    render() {
        return (
            <div id={StickyFooter.ID} className={classNames(styles.stickyFooter, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}
