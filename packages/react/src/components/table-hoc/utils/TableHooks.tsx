import {CSSProperties, useRef, useState, useLayoutEffect} from 'react';

export const useFixedWidthWhileLoading = (isLoading: boolean) => {
    const tableHeaderRef = useRef<HTMLTableHeaderCellElement>(null);
    const [columnWidth, setColumnWidth] = useState<number>();

    useLayoutEffect(() => {
        if (tableHeaderRef.current && !isLoading) {
            setColumnWidth(tableHeaderRef.current.offsetWidth);
        }
    }, [isLoading]);

    const style: CSSProperties = isLoading
        ? {
              width: `${columnWidth}px`,
          }
        : {};

    return {style, tableHeaderRef};
};
