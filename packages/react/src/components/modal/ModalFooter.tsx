import classNames from 'classnames';
import * as React from 'react';

import {IClassName} from '../../utils/ClassNameUtils';

export interface IModalFooterProps {
    /**
     * Additionnal CSS class for the footer
     */
    classes?: IClassName;
}

export class ModalFooter extends React.Component<IModalFooterProps> {
    render() {
        const classes = classNames('modal-footer', this.props.classes);

        return <div className={classes}>{this.props.children}</div>;
    }
}
