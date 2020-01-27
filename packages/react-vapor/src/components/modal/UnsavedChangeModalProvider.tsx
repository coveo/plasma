import * as React from 'react';
import {Button} from '../button/Button';
import {ModalComposite} from './ModalComposite';

const defaultModalTitle = 'Unsaved Changes';
const defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];
const defaultModalDescription =
    'Are you sure you want to leave this page without saving? All unsaved changes will be lost.';
const defaultConfirmButtonText = 'Exit without applying changes';

export interface IUnsavedChangesModalProviderProps {
    isDirty: boolean;
    modalTitle?: string;
    className?: string[];
    children: (props: {promptBefore: (callbackOnDiscard: () => any) => boolean}) => React.ReactNode;
    unsavedChangesDescription?: string;
    confirmButtonText?: string;
}

export const UnsavedChangesModalProvider: React.FunctionComponent<IUnsavedChangesModalProviderProps> = ({
    isDirty,
    children,
    modalTitle = defaultModalTitle,
    className = defaultModalClasses,
    unsavedChangesDescription = defaultModalDescription,
    confirmButtonText = defaultConfirmButtonText,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(null);

    const promptBefore = (callbackOnDiscard: () => any): boolean => {
        if (isDirty) {
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
                title={modalTitle}
                classes={className}
                modalHeaderClasses={['mod-confirmation']}
                modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
                modalBodyChildren={<div>{unsavedChangesDescription}</div>}
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
