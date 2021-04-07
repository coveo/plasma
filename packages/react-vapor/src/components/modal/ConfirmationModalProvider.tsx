import * as React from 'react';

import {Button} from '../button/Button';
import {ModalComposite} from './ModalComposite';

const defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];
const defaultConfirmButtonText = 'Confirm';

export interface IConfirmationModalChildrenProps {
    promptBefore: (callbackOnDiscard: () => any) => boolean;
}

export interface IConfirmationModalProviderProps {
    id?: string;
    shouldConfirm: boolean;
    modalTitle: string;
    modalBodyChildren: React.ReactNode;
    className?: string[];
    children: (props: IConfirmationModalChildrenProps) => React.ReactNode;
    confirmButtonText?: string;
}

export const ConfirmationModalProvider: React.FunctionComponent<IConfirmationModalProviderProps> = ({
    id,
    shouldConfirm,
    children,
    modalTitle,
    className = defaultModalClasses,
    modalBodyChildren,
    confirmButtonText = defaultConfirmButtonText,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(null);

    const promptBefore = (callbackOnDiscard: () => any): boolean => {
        if (shouldConfirm) {
            setIsOpen(true);
            setConfirm(() => () => {
                callbackOnDiscard();
                close();
            });
            return false;
        }
        return true;
    };

    const close = () => {
        setIsOpen(false);
    };

    return (
        <>
            {children({promptBefore})}
            <ModalComposite
                id={id}
                title={modalTitle}
                classes={className}
                modalHeaderClasses={['mod-warning']}
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                modalBodyChildren={modalBodyChildren}
                modalFooterChildren={
                    <>
                        <Button small name={confirmButtonText} onClick={confirm} primary />
                        <Button small autoFocus name="Cancel" onClick={close} />
                    </>
                }
                isOpen={isOpen}
                onClose={close}
            />
        </>
    );
};
