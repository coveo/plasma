import * as React from 'react';

import {useCustomLayoutEffect} from './utils/TableHooks';

interface TableRowNumberHeaderProps {
    isLoading?: boolean;
    id?: string;
}

export const TableRowNumberHeader: React.FC<TableRowNumberHeaderProps> = ({id, isLoading}) => {
    const {style, targetRef} = useCustomLayoutEffect({id, isLoading});

    return <th ref={targetRef} style={style} />;
};
