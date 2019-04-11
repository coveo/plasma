import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactModal from 'react-modal';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {Defaults} from '../../Defaults';
import {IWithDirtyProps} from '../../hoc/withDirty/withDirty';
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
    validateShouldNavigate?: (isDirty: boolean) => void;
}

export interface IModalCompositeStateProps extends IReduxStatePossibleProps, IModalStateProps {
    layer: number;
}

export interface IModalCompositeDispatchProps extends IModalDispatchProps, IModalHeaderDispatchProps {}

export interface IModalCompositeProps extends IModalCompositeOwnProps, Partial<IModalCompositeStateProps>, Partial<IModalCompositeDispatchProps> {}

const modalPropsToOmit = keys<IModalCompositeProps>();

export class ModalComposite extends React.PureComponent<IModalCompositeProps & Partial<ReactModal.Props> & Partial<IWithDirtyProps>> {
    static defaultProps: Partial<IModalCompositeProps> = {
        id: _.uniqueId('modal'),
        closeTimeout: Defaults.MODAL_TIMEOUT,
    };

    private timeoutId: number;

    constructor(props: IModalCompositeProps) {
        super(props);
        this.onRequestClose = this.onRequestClose.bind(this);
    }

    render() {
        const reactModalprops: Partial<ReactModal.Props> = _.omit(this.props, modalPropsToOmit);
        return (
            <ReactModal
                key={this.props.id}
                isOpen={this.props.isOpened}
                className={{
                    base: classNames(
                        'modal-container --react-modal',
                        this.props.classes,
                    ),
                    afterOpen: 'opened',
                    beforeClose: 'closed',
                }}
                overlayClassName={{
                    base: classNames(
                        'modal-backdrop --react-modal',
                        {[`layer-${this.props.layer}`]: this.props.layer > 0},
                    ),
                    afterOpen: 'opened',
                    beforeClose: 'clear',
                }}
                onRequestClose={this.onRequestClose}
                closeTimeoutMS={this.props.closeTimeout}
                contentRef={this.props.contentRef}
                parentSelector={this.getParent}
                {...reactModalprops}
            >
                <div className='modal-content' id={this.props.id}>
                    {this.getModalHeader()}
                    {this.getModalBody()}
                    {this.getModalFooter()}
                </div>
            </ReactModal>
        );
    }

    componentDidUpdate(prevProps: IModalCompositeProps) {
        // Workaround for https://github.com/reactjs/react-modal/issues/745
        if (prevProps.isOpened && !this.props.isOpened) {
            window.clearTimeout(this.timeoutId);
            this.timeoutId = window.setTimeout(() => {
                callIfDefined(this.props.closeCallback);
            }, this.props.closeTimeout);
        }
    }

    componentDidMount() {
        callIfDefined(this.props.onRender);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onDestroy);
        window.clearTimeout(this.timeoutId);
    }

    private onRequestClose() {
        if (this.props.validateShouldNavigate) {
            if (this.props.validateShouldNavigate(this.props.isDirty)) {
                this.props.onClose();
            }
        } else {
            callIfDefined(this.props.onClose);
        }
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
