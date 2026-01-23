import {BoxProps} from '@mantine/core';
import {ForwardedRef} from 'react';

export interface VerticalLayoutHeaderProps extends BoxProps {
    draggable?: boolean;
    removable?: boolean;
}

/**
 * VerticalLayout doesn't have a global header - headers are shown per item
 * This component returns null but exists to maintain the layout interface
 */
export const VerticalLayoutHeader = (_props: VerticalLayoutHeaderProps & {ref?: ForwardedRef<HTMLDivElement>}): null =>
    null;
