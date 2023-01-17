import classNames from 'clsx';
import {Component, ReactNode} from 'react';

import {IClassName} from '../../utils/ClassNameUtils';

export interface IModalBodyProps {
    classes?: IClassName;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class ModalBody extends Component<IModalBodyProps> {
    render() {
        const classes = classNames('modal-body relative', this.props.classes);

        return <div className={classes}>{this.props.children}</div>;
    }
}
