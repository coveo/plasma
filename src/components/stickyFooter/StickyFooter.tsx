import * as classNames from 'classnames';
import * as React from 'react';
import * as styles from './StickyFooter.scss';
import { IClassName } from 'src/utils/ClassNameUtils';

export interface IStickyFooterProps {
    id?: string;
    className?: IClassName;
    isOpened: boolean;
}

export class StickyFooter extends React.Component<IStickyFooterProps> {
    static ID = 'StickyFooter';

    render() {
        const { id, className, isOpened } = this.props;
        return (
            <div id={id || StickyFooter.ID} className={
                classNames({
                    [styles.stickyFooterOpened]: isOpened,
                    [styles.stickyFooter]: true
                }, className)}>
                {this.props.children}
            </div>
        );
    }
}
