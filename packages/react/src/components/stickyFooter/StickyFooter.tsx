import classNames from 'clsx';
import {Component, ReactNode} from 'react';

export interface IStickyFooterProps {
    /**
     * Whether the footer is visible
     */
    isOpened: boolean;
    /**
     * The unique identifier of the footer
     */
    id?: string;
    /**
     * CSS classes to set on the footer element
     */
    className?: string;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export class StickyFooter extends Component<IStickyFooterProps> {
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
