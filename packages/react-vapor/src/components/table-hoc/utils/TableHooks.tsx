import * as React from 'react';
import {TableHOCContext} from '../TableHOC';

export const useCustomLayoutEffect = ({id, isLoading}: {id: string; isLoading: boolean}) => {
    const targetRef = React.useRef<HTMLTableHeaderCellElement>();
    const {columnWidths, setColumnWidths} = React.useContext(TableHOCContext);

    React.useLayoutEffect(() => {
        if (id && targetRef.current && !isLoading) {
            setColumnWidths(id, targetRef.current.offsetWidth);
        }
    }, [isLoading]);

    const style = {
        width: `${columnWidths[id]}px`,
        minWidth: `${columnWidths[id]}px`,
        maxWidth: `${columnWidths[id]}px`,
    };

    return {style, targetRef};
};
