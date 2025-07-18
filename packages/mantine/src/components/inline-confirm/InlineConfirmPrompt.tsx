import {Factory, factory, Group, GroupProps, isElement, useProps} from '@mantine/core';
import {cloneElement, ReactElement, ReactNode, useEffect} from 'react';
import {Button} from '../button/Button';
import {InlineConfirmComponentsProps} from './InlineConfirm';

import {useInlineConfirm} from './InlineConfirmContext';

interface InlineConfirmPromptProps extends Omit<GroupProps, 'children'>, InlineConfirmComponentsProps {
    /**
     * Label element
     *
     * @default Are you sure?
     */
    label?: ReactNode;
    /**
     * Confirm button element
     *
     * @default <Button.DestructivePrimary>Delete</Button.DestructivePrimary>
     */
    confirm?: ReactElement;
    /**
     * Cancel button element
     *
     * @default <Button.Tertiary>Cancel</Button.Tertiary>
     */
    cancel?: ReactElement;
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
    confirm: <Button.DestructivePrimary>Delete</Button.DestructivePrimary>,
    cancel: <Button.Tertiary>Cancel</Button.Tertiary>,
    gap: 'xs',
    wrap: 'nowrap',
};

export const InlineConfirmPrompt = factory<InlineConfirmPromptFactory>((props, ref) => {
    const {inlineConfirmId, label, confirm, cancel, onConfirm, onCancel, ...others} = useProps(
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
        if (confirmingId !== inlineConfirmId) {
            clearConfirm();
        }
    }, []);

    if (confirmingId === inlineConfirmId) {
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
