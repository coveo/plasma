import {Factory, StylesApiProps, useProps} from '@mantine/core';
import {MantineComponent} from '@mantine/core/lib/core/factory/factory';
import {Children, ReactElement, ReactNode, useState} from 'react';
import {InlineConfirmProvider} from './InlineConfirmContext';
import {InlineConfirmPrompt} from './InlineConfirmPrompt';

import {InlineConfirmTarget} from './InlineConfirmTarget';

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
        (child) => child.type === InlineConfirmPrompt && child.props.id === confirmingId,
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
