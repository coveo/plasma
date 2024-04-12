import {Factory, factory, Group, GroupProps, isElement, useProps} from '@mantine/core';
import {cloneElement, ReactNode, useEffect} from 'react';

import {useInlineConfirm} from './InlineConfirmContext';
import {Button} from '../button/Button';

interface InlineConfirmPromptProps extends Omit<GroupProps, 'children'> {
    /**
     * Unique id to map the prompt to the target
     */
    id: string;
    /**
     * Label element
     *
     * @default Are you sure?
     */
    label?: ReactNode;
    /**
     * Confirm button element
     *
     * @default <Button color="red">Delete</Button>
     */
    confirm?: ReactNode;
    /**
     * Cancel button element
     *
     * @default <Button variant="outline">Cancel</Button>
     */
    cancel?: ReactNode;
    /**
     * Function called when the confirm button is clicked
     */
    onConfirm?(): void;

    /**
     * Function called when the cancel button is clicked
     */
    onCancel?(): void;
}

export type InlineConfirmPromptFactory = Factory<{
    props: InlineConfirmPromptProps;
    ref: HTMLDivElement;
}>;

const defaultProps: Partial<InlineConfirmPromptProps> = {
    label: 'Are you sure?',
    confirm: <Button color="red">Delete</Button>,
    cancel: <Button variant="outline">Cancel</Button>,
    gap: 'xs',
    wrap: 'nowrap',
};

export const InlineConfirmPrompt = factory<InlineConfirmPromptFactory>((props, ref) => {
    const {id, label, confirm, cancel, onConfirm, onCancel, ...others} = useProps(
        'InlineConfirmPrompt',
        defaultProps,
        props,
    );
    const {confirmingId, clearConfirm} = useInlineConfirm();

    if (!isElement(cancel) || !isElement(confirm)) {
        throw new Error(
            'InlineConfirm.Prompt component cancel & confirm props should be elements or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported',
        );
    }
    const cancelEl = cloneElement(cancel, {
        onClick: () => {
            cancel.props.onClick?.();
            onCancel?.();
            clearConfirm();
        },
    });
    const confirmEl = cloneElement(confirm, {
        onClick: () => {
            confirm.props.onClick?.();
            onConfirm?.();
            clearConfirm();
        },
    });

    useEffect(() => {
        if (confirmingId !== id) {
            clearConfirm();
        }
    }, []);

    if (confirmingId === id) {
        return (
            <Group ref={ref} {...others}>
                {label}
                {confirmEl}
                {cancelEl}
            </Group>
        );
    }
    return null;
});
