import {createContext, useContext} from 'react';

import {TableContextType} from './Table.types';

export const TableContext = createContext<TableContextType<any> | null>(null);

export const useTable = <T,>(): TableContextType<T> => {
    const ctx = useContext(TableContext);
    if (ctx === null) {
        throw new Error('useTable must be used inside of a TableContext.Provider');
    }

    return ctx;
};
