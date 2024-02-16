import {BoxProps, Factory, useProps} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import {ForwardedRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils';
import {Th} from '../../table-header/Th';
import {useTable} from '../../TableContext';
import {type TableLayoutProps} from '../TableLayouts';
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
    const {table, getExpandChildren, loading, className, style, classNames, styles, ...others} = useProps(
        'RowLayoutHeader',
        defaultProps as RowLayoutHeaderProps<T>,
        props,
    );
    const {multiRowSelectionEnabled, disableRowSelection} = useTable();

    const headers = table.getHeaderGroups().map((headerGroup) => (
        <tr
            key={headerGroup.id}
            data-selectable={!disableRowSelection}
            data-multi-selection={multiRowSelectionEnabled}
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
