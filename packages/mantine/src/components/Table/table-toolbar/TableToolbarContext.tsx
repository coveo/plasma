import {createContext, useContext} from 'react';

const TableToolbarContext = createContext(false);

export const TableToolbarProvider = TableToolbarContext.Provider;
export const useIsInToolbar = () => useContext(TableToolbarContext);
