import {createContext, useContext} from 'react';

export interface TableActionContextValue {
    /**
     * Whether the action belongs to the `$$destructive` group
     */
    destructive: boolean;
}

const TableActionContext = createContext<TableActionContextValue>({destructive: false});

export const TableActionProvider = TableActionContext.Provider;
export const useTableActionContext = () => useContext(TableActionContext);
