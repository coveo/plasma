import {FunctionComponent, PropsWithChildren} from 'react';

import {useFixedWidthWhileLoading} from './utils/TableHooks.js';

interface TableRowHeaderProps {
    isLoading?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const TableRowHeader: FunctionComponent<PropsWithChildren<TableRowHeaderProps>> = ({isLoading, children}) => {
    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    return (
        <th ref={tableHeaderRef} style={style}>
            {children}
        </th>
    );
};
