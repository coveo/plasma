import {forwardRef} from 'react';
import {ScrollArea, ScrollAreaProps} from '@mantine/core';

export const SelectScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({style, ...others}: ScrollAreaProps, ref) => (
        <ScrollArea {...others} style={{width: '100%', ...style}} viewportProps={{tabIndex: -1}} viewportRef={ref}>
            {others.children}
        </ScrollArea>
    ),
);

SelectScrollArea.displayName = '@mantine/core/SelectScrollArea';
