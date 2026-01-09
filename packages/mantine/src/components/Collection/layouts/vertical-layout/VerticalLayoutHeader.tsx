import {BoxProps, CompoundStylesApiProps, Factory} from '@mantine/core';
import {ForwardedRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionColumnDef} from '../../CollectionColumn.types.js';
import {VerticalLayoutBodyFactory} from './VerticalLayoutBody.js';

export type VerticalLayoutHeaderStyleNames = never;

export interface VerticalLayoutHeaderProps<T> extends BoxProps, CompoundStylesApiProps<VerticalLayoutBodyFactory> {
    columns: Array<CollectionColumnDef<T>>;
    draggable?: boolean;
    removable?: boolean;
}

type VerticalLayoutHeaderFactory = Factory<{
    props: VerticalLayoutHeaderProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: VerticalLayoutHeaderStyleNames;
    compound: true;
}>;

/**
 * VerticalLayout doesn't have a global header - headers are shown per item
 * This component returns null but exists to maintain the layout interface
 */
export const VerticalLayoutHeader = <T,>(
    _props: VerticalLayoutHeaderProps<T> & {ref?: ForwardedRef<HTMLDivElement>},
): null => null;

VerticalLayoutHeader.extend = identity as CustomComponentThemeExtend<VerticalLayoutHeaderFactory>;
