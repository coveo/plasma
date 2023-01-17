import {ReactNode, FunctionComponent, useState} from 'react';
import {connect} from 'react-redux';

import {ConnectedProps, IDispatch} from '../../utils/index.js';
import {Button} from '../button/Button.js';
import {ModalActions} from './ModalActions.js';
import {ModalCompositeConnected} from './ModalComposite.js';

const defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];
const defaultConfirmButtonText = 'Confirm';

export interface IConfirmationModalChildrenProps {
    promptBefore: (callbackOnDiscard: () => any) => boolean;
}

export interface IConfirmationModalProviderProps {
    confirmationModalId?: string;
    shouldConfirm: boolean;
    modalTitle: string;
    modalBodyChildren: ReactNode;
    className?: string[];
    children: (props: IConfirmationModalChildrenProps) => ReactNode;
    confirmButtonText?: string;
}

const enhance = connect(null, (dispatch: IDispatch, ownProps: IConfirmationModalProviderProps) => ({
    openPrompt: () => dispatch(ModalActions.openModal(ownProps.confirmationModalId)),
    closePrompt: () => dispatch(ModalActions.closeModal(ownProps.confirmationModalId)),
}));

const ConfirmationModalProviderDisconnected: FunctionComponent<
    IConfirmationModalProviderProps & ConnectedProps<typeof enhance>
> = ({
    confirmationModalId,
    shouldConfirm,
    children,
    modalTitle,
    className = defaultModalClasses,
    modalBodyChildren,
    confirmButtonText = defaultConfirmButtonText,
    openPrompt,
    closePrompt,
}) => {
    const [confirm, setConfirm] = useState(null);

    const promptBefore = (callbackOnDiscard: () => any): boolean => {
        if (shouldConfirm) {
            openPrompt();
            setConfirm(() => () => {
                callbackOnDiscard();
                closePrompt();
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
                        <Button small autoFocus name="Cancel" onClick={closePrompt} />
                        <Button small name={confirmButtonText} onClick={confirm} primary />
                    </>
                }
            />
        </>
    );
};

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ConfirmationModalProvider = enhance(ConfirmationModalProviderDisconnected);
