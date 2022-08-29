import {ReactNode} from 'react';

import {ModalComposite} from '../../components/modal/ModalComposite';

export interface PreventNavigationPromptProps {
    id: string;
    title: string;
    content: ReactNode;
    exit: string;
    stay: string;
    isOpen: boolean;
    onClose: () => void;
    onStay: () => void;
}

/**
 * @deprecated Use Mantine instead
 */
export const PreventNavigationPrompt = ({
    id,
    title,
    content,
    exit,
    stay,
    isOpen,
    onClose,
    onStay,
}: PreventNavigationPromptProps) => (
    <ModalComposite
        id={id}
        isOpen={isOpen}
        title={title}
        classes={['mod-prompt', 'mod-fade-in-scale']}
        modalHeaderClasses={['mod-warning']}
        modalBodyClasses={['mod-header-padding', 'mod-form-top-bottom-padding']}
        modalBodyChildren={content}
        onClose={() => onStay()}
        modalFooterChildren={
            <>
                <button className="btn mod-small mod-primary js-exit" onClick={() => onClose()}>
                    {exit}
                </button>
                <button className="btn mod-small js-stay" onClick={() => onStay()}>
                    {stay}
                </button>
            </>
        }
    />
);
