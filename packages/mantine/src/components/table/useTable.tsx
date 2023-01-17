import {useContext} from 'react';
import {TableContext} from './TableContext.js';

export const useTable = () => {
    const ctx = useContext(TableContext);
    if (ctx === null) {
        throw new Error('useTable must be used inside of a TableContext.Provider');
    }

    return ctx;
};
