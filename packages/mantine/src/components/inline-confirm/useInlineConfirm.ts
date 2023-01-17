import {useContext} from 'react';
import {InlineConfirmContext} from './InlineConfirmContext.js';

export const useInlineConfirm = () => {
    const ctx = useContext(InlineConfirmContext);

    if (ctx === null) {
        throw new Error('useConfirm must be used inside of a InlineConfirmContext.Provider');
    }

    return ctx;
};
