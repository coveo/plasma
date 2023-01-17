import {ReactNode, FunctionComponent} from 'react';

import {ConfirmationModalProvider, IConfirmationModalChildrenProps} from './ConfirmationModalProvider.js';

const defaultModalId = 'UnsavedChangesModalId';
const defaultModalTitle = 'Unsaved Changes';
const defaultModalClasses = ['mod-prompt', 'mod-fade-in-scale'];
const defaultModalDescription =
    'Are you sure you want to leave this page without saving? All unsaved changes will be lost.';
const defaultConfirmButtonText = 'Exit without applying changes';

export interface IUnsavedChangesModalProviderProps {
    isDirty: boolean;
    confirmationModalId?: string;
    modalTitle?: string;
    className?: string[];
    children: (props: IConfirmationModalChildrenProps) => ReactNode;
    unsavedChangesDescription?: string;
    confirmButtonText?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const UnsavedChangesModalProvider: FunctionComponent<IUnsavedChangesModalProviderProps> = ({
    isDirty,
    children,
    confirmationModalId = defaultModalId,
    modalTitle = defaultModalTitle,
    className = defaultModalClasses,
    unsavedChangesDescription = defaultModalDescription,
    confirmButtonText = defaultConfirmButtonText,
}) => (
    <ConfirmationModalProvider
        confirmationModalId={confirmationModalId}
        className={className}
        shouldConfirm={isDirty}
        modalTitle={modalTitle}
        modalBodyChildren={<div>{unsavedChangesDescription}</div>}
        confirmButtonText={confirmButtonText}
    >
        {(options: IConfirmationModalChildrenProps) => children(options)}
    </ConfirmationModalProvider>
);
