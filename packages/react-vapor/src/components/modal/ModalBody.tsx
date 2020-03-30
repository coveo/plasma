import classNames from 'classnames';
import * as React from 'react';
import {IClassName} from '../../utils/ClassNameUtils';

export interface IModalBodyProps {
    classes?: IClassName;
}

export class ModalBody extends React.Component<IModalBodyProps, {}> {
    render() {
        const classes = classNames('modal-body relative', this.props.classes);

        return <div className={classes}>{this.props.children}</div>;
    }
}
