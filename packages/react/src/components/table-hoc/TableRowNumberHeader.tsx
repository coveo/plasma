import {FunctionComponent} from 'react';

import {useFixedWidthWhileLoading} from './utils/TableHooks.js';

interface TableRowNumberHeaderProps {
    isLoading?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const TableRowNumberHeader: FunctionComponent<TableRowNumberHeaderProps> = ({isLoading}) => {
    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    return <th ref={tableHeaderRef} style={style} />;
};
