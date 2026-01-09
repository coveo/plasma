import {HorizontalLayout} from './horizontal-layout/HorizontalLayout.js';
import {VerticalLayout} from './vertical-layout/VerticalLayout.js';

export const CollectionLayouts = {
    Horizontal: HorizontalLayout,
    Vertical: VerticalLayout,
} as const;

export {HorizontalLayout} from './horizontal-layout/HorizontalLayout.js';
export {VerticalLayout} from './vertical-layout/VerticalLayout.js';
export type {CollectionLayout, CollectionLayoutProps} from './CollectionLayout.types.js';
