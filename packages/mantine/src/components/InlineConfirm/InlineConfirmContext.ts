import {createSafeContext} from '@mantine/core';

type InlineConfirmContextType = {
    confirmingId: string;
    setConfirmingId: (id: string) => void;
    clearConfirm: () => void;
};

export const [InlineConfirmProvider, useInlineConfirm] = createSafeContext<InlineConfirmContextType>(
    'InlineConfirm component was not found in tree',
);
