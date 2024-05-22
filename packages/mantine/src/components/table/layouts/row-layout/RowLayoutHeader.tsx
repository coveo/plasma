import {BoxProps, CompoundStylesApiProps, Factory, useProps} from '@mantine/core';
import {ForwardedRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils';
import {TableLayoutProps} from '../../Table.types';
import {useTableContext} from '../../TableContext';
import {Th} from '../../table-header/Th';
import {RowLayoutBodyFactory} from './RowLayoutBody';
import {useRowLayout} from './RowLayoutContext';

export type RowLayoutHeaderStyleNames = 'headerRow';

export interface RowLayoutHeaderProps<T>
    extends BoxProps,
        TableLayoutProps<T>,
        CompoundStylesApiProps<RowLayoutBodyFactory> {}

type RowLayoutHeaderFactory = Factory<{
    props: RowLayoutHeaderProps<unknown>;
    ref: HTMLTableRowElement;
    stylesNames: RowLayoutHeaderStyleNames;
    compound: true;
}>;

const defaultProps: Partial<RowLayoutHeaderProps<unknown>> = {};

export const RowLayoutHeader = <T,>(props: RowLayoutHeaderProps<T> & {ref?: ForwardedRef<HTMLTableRowElement>}) => {
    const ctx = useRowLayout();
    const {
        getRowExpandedContent: _getRowExpandedContent,
        loading: _loading,
        className,
        style,
        classNames,
        styles,
        getRowAttributes: _getRowAttributes,
        ...others
    } = useProps('RowLayoutHeader', defaultProps as RowLayoutHeaderProps<T>, props);
    const {table, store} = useTableContext<T>();

    const headers = table.getHeaderGroups().map((headerGroup) => (
        <tr
            key={headerGroup.id}
            data-selectable={store.rowSelectionEnabled}
            data-multi-selection={store.multiRowSelectionEnabled}
            {...ctx.getStyles('headerRow', {className, classNames, styles, style})}
            {...others}
        >
            {headerGroup.headers.map((columnHeader) => (
                <Th key={columnHeader.id} header={columnHeader} />
            ))}
        </tr>
    ));
    return <>{headers}</>;
};
RowLayoutHeader.extend = identity as CustomComponentThemeExtend<RowLayoutHeaderFactory>;
