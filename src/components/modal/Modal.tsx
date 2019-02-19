import * as classNames from 'classnames';
import * as React from 'react';

import {IClassName} from '../../utils/ClassNameUtils';

export interface IModalOwnProps {
    id?: string;
    classes?: IClassName;
    closeCallback?: () => void;
    closeTimeout?: number;
    /**
     * Renders the Modal already opened.
     * To be used with ModalConnected only.
     */
    openOnMount?: boolean;
    contentRef?: (el: HTMLDivElement) => void;
}

export interface IModalStateProps {
    isOpened: boolean;
}

export interface IModalDispatchProps {
    onDestroy: () => void;
    onRender: () => void;
}

export interface IModalProps extends IModalOwnProps, Partial<IModalStateProps>, Partial<IModalDispatchProps> {}

/**
 * @deprecated use ModalComposite instead
 */
export class Modal extends React.Component<IModalProps, {}> {

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.isOpened) {
            this.closeModal();
        }
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    componentWillReceiveProps(nextProps: IModalProps) {
        if (this.props.isOpened && !nextProps.isOpened) {
            this.closeModal();
        }
    }

    private closeModal() {
        if (this.props.closeCallback) {
            if (this.props.closeTimeout) {
                setTimeout(() => this.props.closeCallback(), this.props.closeTimeout);
            } else {
                this.props.closeCallback();
            }
        }
    }

    render() {
        const classes = classNames(
            'modal-container',
            this.props.classes,
            {
                'opened': this.props.isOpened,
            },
        );

        return (
            <div className={classes}>
                <div className='modal-content' ref={this.props.contentRef}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
