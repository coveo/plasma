import {BoxProps, CompoundStylesApiProps, Factory, useProps} from '@mantine/core';
import {ForwardedRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {TableLayoutProps} from '../../Table.types.js';
import {useTableContext} from '../../TableContext.js';
import {Th} from '../../table-header/Th.js';
import {RowLayoutBodyFactory} from './RowLayoutBody.js';
import {useRowLayout} from './RowLayoutContext.js';

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
        getRowActions: _getRowActions,
        loading: _loading,
        getRowAttributes: _getRowAttributes,
        onRowDoubleClick: _onRowDoubleClick,
        className,
        style,
        classNames,
        styles,
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
