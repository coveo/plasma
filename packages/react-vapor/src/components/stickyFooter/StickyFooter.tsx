import classNames from 'classnames';
import * as React from 'react';

export interface IStickyFooterProps {
    isOpened: boolean;
    id?: string;
    className?: string;
}

export class StickyFooter extends React.Component<IStickyFooterProps> {
    static ID = 'StickyFooter';
    static defaultProps: Partial<IStickyFooterProps> = {
        id: StickyFooter.ID,
    };

    render() {
        const {id, className, isOpened} = this.props;
        return (
            <div id={id} className={classNames('sticky-footer', {opened: isOpened}, className)}>
                {this.props.children}
            </div>
        );
    }
}
