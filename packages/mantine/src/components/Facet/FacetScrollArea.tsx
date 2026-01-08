import {ScrollArea, ScrollAreaProps} from '@mantine/core';
import {forwardRef} from 'react';

export const FacetScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({style, children, ...others}: ScrollAreaProps, ref) => (
        <ScrollArea {...others} style={{width: '100%', ...style}} viewportRef={ref}>
            {children}
        </ScrollArea>
    ),
);
