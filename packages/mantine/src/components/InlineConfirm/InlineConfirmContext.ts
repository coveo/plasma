import {createSafeContext} from '@mantine/core';

type InlineConfirmContextType = {
    confirmingId: string | null;
    setConfirmingId: (id: string | null) => void;
    clearConfirm: () => void;
};

export const [InlineConfirmProvider, useInlineConfirm] = createSafeContext<InlineConfirmContextType>(
    'InlineConfirm component was not found in tree',
);
