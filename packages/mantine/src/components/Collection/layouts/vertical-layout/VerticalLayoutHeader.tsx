import {ForwardedRef} from 'react';
import {LayoutHeaderProps} from '../shared/layoutConstants.js';

/**
 * VerticalLayout doesn't have a global header - headers are shown per item
 * This component returns null but exists to maintain the layout interface
 */
export const VerticalLayoutHeader = (_props: LayoutHeaderProps & {ref?: ForwardedRef<HTMLDivElement>}): null => null;
