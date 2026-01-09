import {Box, BoxProps, CompoundStylesApiProps, Factory, useProps} from '@mantine/core';
import {ForwardedRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionColumnDef} from '../../CollectionColumn.types.js';
import {getColumnSizeStyles} from '../shared/columnUtils.js';
import {renderColumnHeader} from '../shared/headerUtils.js';
import {HorizontalLayoutBodyFactory} from './HorizontalLayoutBody.js';
import {useHorizontalLayout} from './HorizontalLayoutContext.js';

export type HorizontalLayoutHeaderStyleNames = 'headerRow' | 'headerCell' | 'dragHandleHeader' | 'removeButtonHeader';

export interface HorizontalLayoutHeaderProps<T> extends BoxProps, CompoundStylesApiProps<HorizontalLayoutBodyFactory> {
    columns: Array<CollectionColumnDef<T>>;
    draggable?: boolean;
    removable?: boolean;
}

type HorizontalLayoutHeaderFactory = Factory<{
    props: HorizontalLayoutHeaderProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: HorizontalLayoutHeaderStyleNames;
    compound: true;
}>;

const defaultProps: Partial<HorizontalLayoutHeaderProps<unknown>> = {
    draggable: false,
    removable: true,
};

export const HorizontalLayoutHeader = <T,>(
    props: HorizontalLayoutHeaderProps<T> & {ref?: ForwardedRef<HTMLDivElement>},
) => {
    const ctx = useHorizontalLayout();
    const {columns, draggable, removable, className, style, classNames, styles, ref, ...others} = useProps(
        'HorizontalLayoutHeader',
        defaultProps as HorizontalLayoutHeaderProps<T>,
        props,
    );

    return (
        <Box ref={ref} {...ctx.getStyles('headerRow', {className, classNames, styles, style})} {...others}>
            {draggable && <div {...ctx.getStyles('dragHandleHeader', {classNames, styles})} />}
            {columns.map((column, index) => {
                const columnId = column.id ?? `column-${index}`;
                return (
                    <Box
                        key={columnId}
                        {...ctx.getStyles('headerCell', {classNames, styles})}
                        style={{
                            ...getColumnSizeStyles(column),
                            ...ctx.getStyles('headerCell', {classNames, styles}).style,
                        }}
                    >
                        {renderColumnHeader(column.header, index)}
                    </Box>
                );
            })}
            {removable && <div {...ctx.getStyles('removeButtonHeader', {classNames, styles})} />}
        </Box>
    );
};

HorizontalLayoutHeader.extend = identity as CustomComponentThemeExtend<HorizontalLayoutHeaderFactory>;
