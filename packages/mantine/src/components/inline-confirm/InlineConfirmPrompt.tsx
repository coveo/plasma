import {Button, Group} from '@mantine/core';
import {FunctionComponent, ReactNode, useEffect} from 'react';

import {useInlineConfirm} from './useInlineConfirm.js';

interface InlineConfirmPromptProps {
    id: string;
    label: ReactNode;
    onConfirm: () => void;
    confirmLabel?: ReactNode;
    cancelLabel?: ReactNode;
}

export const InlineConfirmPrompt: FunctionComponent<InlineConfirmPromptProps> = ({
    id,
    label,
    confirmLabel = 'Delete',
    cancelLabel = 'Cancel',
    onConfirm,
}) => {
    const {confirmingId, clearConfirm} = useInlineConfirm();

    const onClickConfirm = () => {
        onConfirm();
        clearConfirm();
    };

    useEffect(() => {
        if (confirmingId !== id) {
            clearConfirm();
        }
    }, []);

    if (confirmingId === id) {
        return (
            <Group spacing="xs">
                {label}
                <Button onClick={onClickConfirm} color="red">
                    {confirmLabel}
                </Button>
                <Button onClick={clearConfirm} variant="outline">
                    {cancelLabel}
                </Button>
            </Group>
        );
    }
    return null;
};
