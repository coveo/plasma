import * as React from 'react';
import * as _ from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {IModalProps, Modal} from './Modal';
import {IModalBackdropProps, ModalBackdrop} from './ModalBackdrop';
import {ModalBackdropConnected} from './ModalBackdropConnected';
import {ModalBody} from './ModalBody';
import {ModalConnected} from './ModalConnected';
import {IModalFooterProps, ModalFooter} from './ModalFooter';
import {IModalHeaderProps, ModalHeader} from './ModalHeader';
import {ModalHeaderConnected} from './ModalHeaderConnected';

export interface IModalCompositeOwnProps extends IModalProps, IModalHeaderProps, IModalFooterProps, IModalBackdropProps {
    modalHeaderChildren?: React.ReactNode;
    modalHeaderClasses?: IClassName;
    modalBodyChildren?: React.ReactNode;
    modalBodyClasses?: IClassName;
    modalFooterChildren?: React.ReactNode;
    modalFooterClasses?: IClassName;
    isPrompt?: boolean;
}

export interface IModalCompositeStateProps extends IReduxStatePossibleProps {}

export interface IModalCompositeDispatchProps {}

export interface IModalCompositeProps extends IModalCompositeOwnProps, IModalCompositeStateProps, IModalCompositeDispatchProps {}

export class ModalComposite extends React.Component<IModalCompositeProps> {
    static defaultProps: Partial<IModalCompositeProps> = {
        id: _.uniqueId('modal'),
    };

    render() {
        return (
            <div>
                {this.getModal([this.getModalHeader(), this.getModalBody(), this.getModalFooter()])}
                {this.getModalBackdrop()}
            </div>
        );
    }

    private getModal(children: React.ReactNode) {
        const basicProps: IModalProps = {
            id: this.props.id,
            classes: this.props.classes,
            closeCallback: this.props.closeCallback,
            closeTimeout: this.props.closeTimeout,
        };
        const onRenderProp = this.props.onRender ? () => this.props.onRender() : undefined;
        const onDestroyProp = this.props.onDestroy ? () => this.props.onDestroy() : undefined;

        return this.props.withReduxState
            ? <ModalConnected {...basicProps}>{children}</ModalConnected>
            : <Modal
                {...basicProps}
                isOpened={this.props.isOpened}
                onRender={onRenderProp}
                onDestroy={onDestroyProp}
            >
                {children}
            </Modal>;
    }

    private getModalHeader() {
        const basicProps: IModalHeaderProps = {
            id: this.props.id,
            title: this.props.title,
            classes: this.props.modalHeaderClasses,
            docLink: this.props.docLink,
        };
        const onCloseProp = this.props.onClose ? () => this.props.onClose() : undefined;

        return this.props.withReduxState
            ? <ModalHeaderConnected key='modal-header' {...basicProps}>{this.props.modalHeaderChildren}</ModalHeaderConnected>
            : <ModalHeader key='modal-header' {...basicProps} onClose={onCloseProp}>{this.props.modalHeaderChildren}</ModalHeader>;
    }

    private getModalBody() {
        return this.props.modalBodyChildren
            ? <ModalBody key='modal-body' classes={this.props.modalBodyClasses}>{this.props.modalBodyChildren}</ModalBody>
            : null;
    }

    private getModalFooter() {
        return this.props.modalFooterChildren
            ? <ModalFooter key='modal-footer' classes={this.props.modalFooterClasses}>{this.props.modalFooterChildren}</ModalFooter>
            : null;
    }

    private getModalBackdrop() {
        const basicProps: IModalBackdropProps = {
            displayFor: [this.props.id],
            isPrompt: this.props.isPrompt,
        };

        const onClickProp = () => {
            if (this.props.onClose) {
                this.props.onClose();
            }
            if (this.props.onClick) {
                this.props.onClick();
            }
        };

        return this.props.withReduxState
            ? <ModalBackdropConnected {...basicProps} />
            : <ModalBackdrop {...basicProps} display={this.props.display || this.props.isOpened} onClick={onClickProp} />;
    }
}
