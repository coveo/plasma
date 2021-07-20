import * as React from 'react';
import {TableHOCContext} from '../TableHOC';

export const useCustomLayoutEffect = ({id, isLoading}: {id: string; isLoading: boolean}) => {
    const tableHeaderRef = React.useRef<HTMLTableHeaderCellElement>();
    const {columnWidths, setColumnWidths} = React.useContext(TableHOCContext);

    React.useLayoutEffect(() => {
        if (id && tableHeaderRef.current && !isLoading) {
            setColumnWidths(id, tableHeaderRef.current.offsetWidth);
        }
    }, [isLoading]);

    const style = {
        width: `${columnWidths[id]}px`,
        minWidth: `${columnWidths[id]}px`,
        maxWidth: `${columnWidths[id]}px`,
    };

    return {style, tableHeaderRef};
};
