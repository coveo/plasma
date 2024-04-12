import {factory, Factory, StylesApiProps, useProps} from '@mantine/core';
import {Children, ReactElement, ReactNode, useState} from 'react';
import {InlineConfirmProvider} from './InlineConfirmContext';
import {InlineConfirmPrompt} from './InlineConfirmPrompt';

import {InlineConfirmTarget} from './InlineConfirmTarget';

export type InlineConfirmStyleNames = 'root';

export interface InlineConfirmProps extends StylesApiProps<InlineConfirmFactory> {
    /**
     * The content of the component. Should contain at least one `InlineConfirm.Target` and one `InlineConfirm.Prompt` with matching ids
     */
    children: ReactNode;
}

export type InlineConfirmFactory = Factory<{
    props: InlineConfirmProps;
    ref: never;
    stylesNames: InlineConfirmStyleNames;
    staticComponents: {
        Prompt: typeof InlineConfirmPrompt;
        Target: typeof InlineConfirmTarget;
    };
}>;

const defaultProps: Partial<InlineConfirmProps> = {};

export const InlineConfirm = factory<InlineConfirmFactory>((_props) => {
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
});

InlineConfirm.Prompt = InlineConfirmPrompt;
InlineConfirm.Target = InlineConfirmTarget;
