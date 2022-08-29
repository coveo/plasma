import {FunctionComponent} from 'react';

import {useFixedWidthWhileLoading} from './utils/TableHooks';

interface TableRowHeaderProps {
    isLoading?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const TableRowHeader: FunctionComponent<TableRowHeaderProps> = ({isLoading, children}) => {
    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    return (
        <th ref={tableHeaderRef} style={style}>
            {children}
        </th>
    );
};
