import {Children, FunctionComponent, ReactElement, ReactNode, useState} from 'react';

import {InlineConfirmButton} from './InlineConfirmButton';
import {InlineConfirmContext} from './InlineConfirmContext';
import {InlineConfirmPrompt} from './InlineConfirmPrompt';

type InlineConfirmType = FunctionComponent & {
    Prompt: typeof InlineConfirmPrompt;
    Button: typeof InlineConfirmButton;
};

export const InlineConfirm: InlineConfirmType = (children: ReactNode) => {
    const [confirmingId, setConfirmingId] = useState<string | null>(null);

    const convertedChildren = Children.toArray(children) as ReactElement[];
    const prompt = convertedChildren.find(
        (child) => child.type === InlineConfirmPrompt && child.props.id === confirmingId
    );
    const clearConfirm = () => setConfirmingId(null);

    return (
        <InlineConfirmContext.Provider value={{confirmingId, setConfirmingId, clearConfirm}}>
            {prompt ?? children}
        </InlineConfirmContext.Provider>
    );
};

InlineConfirm.Prompt = InlineConfirmPrompt;
InlineConfirm.Button = InlineConfirmButton;
