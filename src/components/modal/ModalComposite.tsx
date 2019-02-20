import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactModal from 'react-modal';
import * as _ from 'underscore';

import {Defaults} from '../../Defaults';
import {IClassName} from '../../utils/ClassNameUtils';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {IModalDispatchProps, IModalOwnProps, IModalStateProps} from './Modal';
import {IModalBackdropOwnProps} from './ModalBackdrop';
import {ModalBody} from './ModalBody';
import {IModalFooterProps, ModalFooter} from './ModalFooter';
import {IModalHeaderDispatchProps, IModalHeaderOwnProps, IModalHeaderProps, ModalHeader} from './ModalHeader';
import {ModalHeaderConnected} from './ModalHeaderConnected';

export interface IModalCompositeOwnProps extends IModalOwnProps, IModalHeaderOwnProps, IModalFooterProps, IModalBackdropOwnProps {
    modalHeaderChildren?: React.ReactNode;
    modalHeaderClasses?: IClassName;
    modalBodyChildren?: React.ReactNode;
    modalBodyClasses?: IClassName;
    modalFooterChildren?: React.ReactNode;
    modalFooterClasses?: IClassName;
    isPrompt?: boolean;
}

export interface IModalCompositeStateProps extends IReduxStatePossibleProps, IModalStateProps {}

export interface IModalCompositeDispatchProps extends IModalDispatchProps, IModalHeaderDispatchProps {}

export interface IModalCompositeProps extends IModalCompositeOwnProps, Partial<IModalCompositeStateProps>, Partial<IModalCompositeDispatchProps> {}

export class ModalComposite extends React.PureComponent<IModalCompositeProps> {
    static defaultProps: Partial<IModalCompositeProps> = {
        id: _.uniqueId('modal'),
    };

    render() {
        return (
            <ReactModal
                key={this.props.id}
                isOpen={this.props.isOpened}
                className={{
                    base: classNames('modal-container --react-modal', this.props.classes),
                    afterOpen: 'opened',
                    beforeClose: 'closed',
                }}
                overlayClassName={{
                    base: 'modal-backdrop --react-modal',
                    afterOpen: 'opened',
                    beforeClose: 'clear',
                }}
                onRequestClose={this.props.onClose}
                onAfterClose={this.props.closeCallback}
                closeTimeoutMS={this.props.closeTimeout || Defaults.MODAL_TIMEOUT}
                contentRef={this.props.contentRef}
                parentSelector={this.getParent}
            >
                <div className='modal-content'>
                    {this.getModalHeader()}
                    {this.getModalBody()}
                    {this.getModalFooter()}
                </div>
            </ReactModal>
        );
    }

    componentDidMount() {
        callIfDefined(this.props.onRender);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onDestroy);
    }

    private getModalHeader() {
        const basicProps: IModalHeaderProps = {
            id: this.props.id,
            title: this.props.title,
            classes: this.props.modalHeaderClasses,
            docLink: this.props.docLink,
        };

        return this.props.withReduxState
            ? <ModalHeaderConnected key='modal-header' {...basicProps}>{this.props.modalHeaderChildren}</ModalHeaderConnected>
            : <ModalHeader key='modal-header' {...basicProps} onClose={this.props.onClose}>{this.props.modalHeaderChildren}</ModalHeader>;
    }

    private getModalBody = () => this.props.modalBodyChildren && (
        <ModalBody key='modal-body' classes={this.props.modalBodyClasses}>
            {this.props.modalBodyChildren}
        </ModalBody>
    )

    private getModalFooter = () => this.props.modalFooterChildren && (
        <ModalFooter key='modal-footer' classes={this.props.modalFooterClasses}>
            {this.props.modalFooterChildren}
        </ModalFooter>
    )

    private getParent = (): HTMLElement => document.querySelector(Defaults.MODAL_ROOT);
}
