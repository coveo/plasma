import {Children, FunctionComponent, PropsWithChildren, ReactElement, useState} from 'react';

import {InlineConfirmButton} from './InlineConfirmButton.js';
import {InlineConfirmContext} from './InlineConfirmContext.js';
import {InlineConfirmPrompt} from './InlineConfirmPrompt.js';

type InlineConfirmType = FunctionComponent<PropsWithChildren> & {
    Prompt: typeof InlineConfirmPrompt;
    Button: typeof InlineConfirmButton;
};

export const InlineConfirm: InlineConfirmType = ({children}) => {
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
