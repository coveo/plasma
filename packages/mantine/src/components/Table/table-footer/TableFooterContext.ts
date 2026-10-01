import {createContext, useContext} from 'react';

const TableFooterContext = createContext(false);

export const TableFooterProvider = TableFooterContext.Provider;
export const useIsInFooter = () => useContext(TableFooterContext);
