import {createContext, useContext} from 'react';

export interface TableActionContextValue {
    /**
     * How the action is rendered: as a menu item (row actions menu) or as a button (bulk actions bar)
     */
    variant: 'menuItem' | 'button';
    /**
     * Whether the action belongs to the `$$destructive` group
     */
    destructive: boolean;
}

const TableActionContext = createContext<TableActionContextValue>({variant: 'menuItem', destructive: false});

export const TableActionProvider = TableActionContext.Provider;
export const useTableActionContext = () => useContext(TableActionContext);
