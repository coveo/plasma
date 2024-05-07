import {FunctionComponent, ReactNode} from 'react';

export interface TableNoDataProps {
    children: ReactNode;
}

export const TableNoData: FunctionComponent<TableNoDataProps> = ({children}) => <>{children}</>;
