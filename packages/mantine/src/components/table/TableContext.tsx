import {createSafeContext, GetStylesApi} from '@mantine/core';
import {createContext, useContext} from 'react';
import {type PlasmaTableFactory} from './Table';
import {TableContextType} from './Table.types';

export const TableContext = createContext<TableContextType<any> | null>(null);

export const useTable = <T,>(): TableContextType<T> => {
    const ctx = useContext(TableContext);
    if (ctx === null) {
        throw new Error('useTable must be used inside of a TableContext.Provider');
    }

    return ctx;
};

interface TableStyleContextType {
    getStyles: GetStylesApi<PlasmaTableFactory>;
}

export const [TableStylesProvider, useTableStyles] = createSafeContext<TableStyleContextType>(
    'Table component was not found in the tree',
);
