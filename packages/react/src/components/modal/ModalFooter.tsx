import classNames from 'clsx';
import {Component, ReactNode} from 'react';

import {IClassName} from '../../utils/ClassNameUtils';

export interface IModalFooterProps {
    /**
     * Additionnal CSS class for the footer
     */
    classes?: IClassName;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class ModalFooter extends Component<IModalFooterProps> {
    render() {
        const classes = classNames('modal-footer', this.props.classes);

        return <div className={classes}>{this.props.children}</div>;
    }
}
