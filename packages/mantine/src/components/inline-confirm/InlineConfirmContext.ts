import {createContext} from 'react';

type InlineConfirmContextType = {
    confirmingId: string;
    setConfirmingId: (id: string) => void;
    clearConfirm: () => void;
};

export const InlineConfirmContext = createContext<InlineConfirmContextType | null>(null);
