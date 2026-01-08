import {Factory, MantineComponent, StylesApiProps, useProps} from '@mantine/core';
import {Children, ReactElement, ReactNode, useState} from 'react';
import {InlineConfirmProvider} from './InlineConfirmContext.js';
import {InlineConfirmPrompt} from './InlineConfirmPrompt.js';

import {InlineConfirmTarget} from './InlineConfirmTarget.js';

/**
 * Direct children of InlineConfirm that wraps an InlineConfirm.Prompt need this prop
 */
export interface InlineConfirmComponentsProps {
    /**
     * Unique id to map the prompt to the target
     */
    inlineConfirmId: string;
}

export interface InlineConfirmProps extends StylesApiProps<InlineConfirmFactory> {
    /**
     * The content of the component. Should contain at least one `InlineConfirm.Target` and one `InlineConfirm.Prompt` with matching ids
     */
    children: ReactNode;
}

export type InlineConfirmFactory = Factory<{
    props: InlineConfirmProps;
    ref: never;
    staticComponents: {
        Prompt: typeof InlineConfirmPrompt;
        Target: typeof InlineConfirmTarget;
    };
}>;

const defaultProps: Partial<InlineConfirmProps> = {};

export const InlineConfirm = ((_props) => {
    const {children} = useProps('InlineConfirm', defaultProps, _props);
    const [confirmingId, setConfirmingId] = useState<string | null>(null);

    const convertedChildren = Children.toArray(children) as ReactElement[];
    const prompt = convertedChildren.find(
        (child) =>
            child.type !== InlineConfirmTarget &&
            (child.props as InlineConfirmComponentsProps)?.inlineConfirmId === confirmingId,
    );
    const clearConfirm = () => setConfirmingId(null);
    return (
        <InlineConfirmProvider value={{confirmingId, setConfirmingId, clearConfirm}}>
            {prompt ?? children}
        </InlineConfirmProvider>
    );
}) as MantineComponent<InlineConfirmFactory>;

InlineConfirm.Prompt = InlineConfirmPrompt;
InlineConfirm.Target = InlineConfirmTarget;
