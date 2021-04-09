import * as React from 'react';
import {connect} from 'react-redux';

import {ConnectedProps, IDispatch} from '../../utils';
import {Button} from '../button/Button';
import {ModalActions} from './ModalActions';
import {ModalCompositeConnected} from './ModalComposite';

const defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];
const defaultConfirmButtonText = 'Confirm';

export interface IConfirmationModalChildrenProps {
    promptBefore: (callbackOnDiscard: () => any) => boolean;
}

export interface IConfirmationModalProviderProps {
    confirmationModalId?: string;
    shouldConfirm: boolean;
    modalTitle: string;
    modalBodyChildren: React.ReactNode;
    className?: string[];
    children: (props: IConfirmationModalChildrenProps) => React.ReactNode;
    confirmButtonText?: string;
}

const enhance = connect(null, (dispatch: IDispatch, ownProps: IConfirmationModalProviderProps) => ({
    onOpen: () => dispatch(ModalActions.openModal(ownProps.confirmationModalId)),
    onClose: () => dispatch(ModalActions.closeModal(ownProps.confirmationModalId)),
}));

/**
 * @description wrapper for a modal, that adds a confirmation modal below it
 */

export const ConfirmationModalProviderDisconnected: React.FunctionComponent<
    IConfirmationModalProviderProps & ConnectedProps<typeof enhance>
> = ({
    confirmationModalId,
    shouldConfirm,
    children,
    modalTitle,
    className = defaultModalClasses,
    modalBodyChildren,
    confirmButtonText = defaultConfirmButtonText,
    onOpen,
    onClose,
}) => {
    const [confirm, setConfirm] = React.useState(null);

    const promptBefore = (callbackOnDiscard: () => any): boolean => {
        if (shouldConfirm) {
            onOpen();
            setConfirm(() => () => {
                callbackOnDiscard();
                onClose();
            });
            return false;
        }
        return true;
    };

    return (
        <>
            {children({promptBefore})}
            <ModalCompositeConnected
                id={confirmationModalId}
                title={modalTitle}
                classes={className}
                modalHeaderClasses={['mod-warning']}
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                modalBodyChildren={modalBodyChildren}
                modalFooterChildren={
                    <>
                        <Button small name={confirmButtonText} onClick={confirm} primary />
                        <Button small autoFocus name="Cancel" onClick={onClose} />
                    </>
                }
            />
        </>
    );
};

export const ConfirmationModalProvider = enhance(ConfirmationModalProviderDisconnected);
