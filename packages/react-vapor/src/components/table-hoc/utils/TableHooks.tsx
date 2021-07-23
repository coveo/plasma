import * as React from 'react';

export const useFixedWidthWhileLoading = (isLoading: boolean) => {
    const tableHeaderRef = React.useRef<HTMLTableHeaderCellElement>();
    const [columnWidth, setColumnWidth] = React.useState<number>();

    React.useLayoutEffect(() => {
        if (tableHeaderRef.current && !isLoading) {
            setColumnWidth(tableHeaderRef.current.offsetWidth);
        }
    }, [isLoading]);

    const style: React.CSSProperties = {
        width: `${columnWidth}px`,
    };

    return {style, tableHeaderRef};
};
