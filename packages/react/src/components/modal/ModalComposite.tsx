import classNames from 'clsx';
import {ReactNode, MouseEvent, KeyboardEvent, PureComponent} from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {Defaults} from '../../Defaults';
import {IWithDirtyProps} from '../../hoc/withDirty/withDirty';
import {PlasmaState} from '../../PlasmaState';
import {IClassName} from '../../utils/ClassNameUtils';
import {IDispatch, IReduxStatePossibleProps, ReduxUtils} from '../../utils/ReduxUtils';
import {IModalDispatchProps, IModalOwnProps, IModalStateProps} from './Modal';
import {addModal, closeModal, removeModal} from './ModalActions';
import {IModalBackdropOwnProps} from './ModalBackdrop';
import {ModalBody} from './ModalBody';
import {IModalFooterProps, ModalFooter} from './ModalFooter';
import {IModalHeaderDispatchProps, IModalHeaderOwnProps, IModalHeaderProps, ModalHeader} from './ModalHeader';
import {ModalHeaderConnected} from './ModalHeaderConnected';

export interface IModalCompositeOwnProps
    extends IModalOwnProps,
        Partial<IModalHeaderOwnProps>,
        IModalFooterProps,
        IModalBackdropOwnProps {
    /**
     * React child to add to the header
     */
    modalHeaderChildren?: ReactNode;
    /**
     * Additionnal CSS class to add to the header
     */
    modalHeaderClasses?: IClassName;
    /**
     * React child to add to the body
     */
    modalBodyChildren?: ReactNode;
    /**
     * Additionnal CSS class to add to the body
     */
    modalBodyClasses?: IClassName;
    /**
     * React child to add to the footer
     */
    modalFooterChildren?: ReactNode;
    /**
     * Additionnal CSS class to add to the footer
     */
    modalFooterClasses?: IClassName;
    /**
     * Additionnal CSS class to add to the modal container
     */
    contentClasses?: IClassName;
    /**
     * Wheter this backdrop is for a prompt or not
     *
     * @default false
     */
    isPrompt?: boolean;
    /**
     * Function that will be called before the modal is closed
     *
     * @param isDirty has the modal changed
     * @returns wheter the close should happen or not
     */
    validateShouldNavigate?: (isDirty: boolean) => boolean;
}

export interface IModalCompositeStateProps extends IReduxStatePossibleProps, IModalStateProps {
    layer: number;
}

export interface IModalCompositeDispatchProps extends IModalDispatchProps, IModalHeaderDispatchProps {}

export interface IModalCompositeProps
    extends IModalCompositeOwnProps,
        Partial<IModalCompositeStateProps>,
        Partial<IModalCompositeDispatchProps> {}

const modalPropsToOmit = [
    'classes',
    'closeCallback',
    'closeTimeout',
    'contentRef',
    'displayFor',
    'docLink',
    'id',
    'isOpened',
    'isPrompt',
    'layer',
    'modalBodyChildren',
    'modalBodyClasses',
    'modalFooterChildren',
    'modalFooterClasses',
    'modalHeaderChildren',
    'modalHeaderClasses',
    'onClose',
    'onDestroy',
    'onRender',
    'openOnMount',
    'title',
    'validateShouldNavigate',
    'withReduxState',
    'contentClasses',
];

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class ModalComposite extends PureComponent<
    IModalCompositeProps & Partial<ReactModal.Props> & Partial<IWithDirtyProps>
> {
    static defaultProps: Partial<IModalCompositeProps> = {
        id: _.uniqueId('modal'),
        closeTimeout: Defaults.MODAL_TIMEOUT,
    };

    render() {
        const reactModalprops: Partial<ReactModal.Props> = _.omit(this.props, modalPropsToOmit);
        return (
            <ReactModal
                key={this.props.id}
                isOpen={this.props.isOpened}
                aria={{
                    labelledby: `modal-${this.props.id}-title`,
                }}
                className={{
                    base: classNames('modal-container --react-modal', this.props.classes, {
                        'mod-prompt': this.props.isPrompt,
                    }),
                    afterOpen: 'opened',
                    beforeClose: 'closed',
                }}
                overlayClassName={{
                    base: classNames('modal-backdrop --react-modal', {
                        [`layer-${this.props.layer}`]: this.props.layer > 0,
                    }),
                    afterOpen: 'opened',
                    beforeClose: 'clear',
                }}
                onRequestClose={this.onRequestClose}
                closeTimeoutMS={this.props.closeTimeout}
                contentRef={this.props.contentRef}
                parentSelector={this.getParent}
                onAfterClose={this.props.closeCallback}
                {...reactModalprops}
            >
                <div className={classNames('modal-content', this.props.contentClasses)} id={this.props.id}>
                    {this.getModalHeader()}
                    {this.getModalBody()}
                    {this.getModalFooter()}
                </div>
            </ReactModal>
        );
    }

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    private onRequestClose = (e: MouseEvent | KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (this.props.validateShouldNavigate) {
            if (this.props.validateShouldNavigate(this.props.isDirty)) {
                this.props.onClose?.();
            }
        } else {
            this.props.onClose?.();
        }
    };

    private getModalHeader() {
        const basicProps: IModalHeaderProps = {
            id: this.props.id,
            title: this.props.title,
            classes: this.props.modalHeaderClasses,
            docLink: this.props.docLink,
            htmlId: `modal-${this.props.id}-title`,
        };

        if (!this.props.title) {
            return null;
        }

        if (this.props.withReduxState) {
            return (
                <ModalHeaderConnected key="modal-header" {...basicProps}>
                    {this.props.modalHeaderChildren}
                </ModalHeaderConnected>
            );
        }
        return (
            <ModalHeader key="modal-header" {...basicProps} onClose={this.props.onClose}>
                {this.props.modalHeaderChildren}
            </ModalHeader>
        );
    }

    private getModalBody = () =>
        this.props.modalBodyChildren && (
            <ModalBody key="modal-body" classes={this.props.modalBodyClasses}>
                {this.props.modalBodyChildren}
            </ModalBody>
        );

    private getModalFooter = () =>
        this.props.modalFooterChildren && (
            <ModalFooter key="modal-footer" classes={this.props.modalFooterClasses}>
                {this.props.modalFooterChildren}
            </ModalFooter>
        );

    private getParent = (): HTMLElement => document.querySelector(Defaults.MODAL_ROOT);
}

const mapStateToProps = (state: PlasmaState, ownProps: IModalCompositeOwnProps): IModalCompositeStateProps => ({
    withReduxState: true,
    isOpened: state.modals && state.modals.some((modal) => modal.id === ownProps.id && modal.isOpened),
    layer: state.openModals ? state.openModals.indexOf(ownProps.id) + 1 : 0,
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalCompositeOwnProps): IModalCompositeDispatchProps => ({
    onRender: () => dispatch(addModal(ownProps.id, ownProps.openOnMount)),
    onDestroy: () => dispatch(removeModal(ownProps.id)),
    onClose: () => dispatch(closeModal(ownProps.id)),
});

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalCompositeConnected = connect<
    IModalStateProps,
    IModalDispatchProps,
    IModalCompositeProps &
        Partial<IModalCompositeStateProps> &
        Partial<IModalCompositeDispatchProps> &
        Partial<ReactModal.Props> &
        Partial<IWithDirtyProps>
>(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(ModalComposite as any);
