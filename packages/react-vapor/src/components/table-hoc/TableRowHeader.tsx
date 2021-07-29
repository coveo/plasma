import * as React from 'react';

import {useFixedWidthWhileLoading} from './utils/TableHooks';

interface TableRowHeaderProps {
    isLoading?: boolean;
}

export const TableRowHeader: React.FunctionComponent<TableRowHeaderProps> = ({isLoading, children}) => {
    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    return (
        <th ref={tableHeaderRef} style={style}>
            {children}
        </th>
    );
};
