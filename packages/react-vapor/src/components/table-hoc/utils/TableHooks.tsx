import * as React from 'react';

export const useCustomLayoutEffect = (isLoading: boolean) => {
    const tableHeaderRef = React.useRef<HTMLTableHeaderCellElement>();
    const [columnWidth, setColumnWidth] = React.useState<number>();

    React.useLayoutEffect(() => {
        if (tableHeaderRef.current && !isLoading) {
            setColumnWidth(tableHeaderRef.current.offsetWidth);
        }
    }, [isLoading]);

    const style = {
        width: `${columnWidth}px`,
        minWidth: `${columnWidth}px`,
        maxWidth: `${columnWidth}px`,
    };

    return {style, tableHeaderRef};
};
