import * as React from 'react';

import {useFixedWidthWhileLoading} from './utils/TableHooks';

interface TableRowNumberHeaderProps {
    isLoading?: boolean;
}

export const TableRowNumberHeader: React.FunctionComponent<TableRowNumberHeaderProps> = ({isLoading}) => {
    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    return <th ref={tableHeaderRef} style={style} />;
};
