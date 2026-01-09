import {Box, BoxProps, CompoundStylesApiProps, Factory, MantineSpacing, Stack, useProps} from '@mantine/core';
import {ForwardedRef, useMemo} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionColumnDef} from '../../CollectionColumn.types.js';
import {getColumnSizeStyles} from '../shared/columnUtils.js';
import {createItemRenderers, ItemContentRenderer, mapItemsToComponents} from '../shared/itemRenderer.js';
import {LAYOUT_BODY_DEFAULT_PROPS} from '../shared/layoutConstants.js';
import {useHorizontalLayout} from './HorizontalLayoutContext.js';

export type HorizontalLayoutBodyStylesNames = 'row' | 'cell' | 'dragHandle' | 'removeButton';

export interface HorizontalLayoutBodyProps<T> extends BoxProps, CompoundStylesApiProps<HorizontalLayoutBodyFactory> {
    columns: Array<CollectionColumnDef<T>>;
    items: T[]; // Required for Body
    onRemove?: (index: number) => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    getItemId?: (item: T, index: number) => string;
    gap?: MantineSpacing;
}

export type HorizontalLayoutBodyFactory = Factory<{
    props: HorizontalLayoutBodyProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: HorizontalLayoutBodyStylesNames;
    compound: true;
}>;

const defaultProps: Partial<HorizontalLayoutBodyProps<unknown>> = LAYOUT_BODY_DEFAULT_PROPS;

/**
 * Horizontal layout specific content renderer - renders cells in a row
 */
const renderHorizontalContent: ItemContentRenderer<any> = (item, index, columns, cellContext, getStyles) => (
    <>
        {columns.map((column, colIndex) => {
            const columnId = column.id ?? `column-${colIndex}`;
            return (
                <Box
                    key={columnId}
                    {...getStyles('cell')}
                    style={{
                        ...getColumnSizeStyles(column),
                        ...getStyles('cell').style,
                    }}
                >
                    {column.cell(item, index, cellContext)}
                </Box>
            );
        })}
    </>
);

// Create renderers once - they are stable component references
const horizontalRenderers = createItemRenderers<any>();

export const HorizontalLayoutBody = <T,>(
    props: HorizontalLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>},
) => {
    const ctx = useHorizontalLayout();
    const {
        columns,
        items,
        onRemove,
        removable,
        draggable,
        disabled,
        getItemId,
        gap,
        classNames: _classNames,
        className: _className,
        styles: _styles,
        style: _style,
        ref,
        ...others
    } = useProps('HorizontalLayoutBody', defaultProps as HorizontalLayoutBodyProps<T>, props);

    const config = useMemo(
        () => ({
            renderContent: renderHorizontalContent,
            containerSelector: 'row',
            inlineControls: true,
        }),
        [],
    );

    const rows = mapItemsToComponents(items, horizontalRenderers, config, ctx.getStyles, {
        getItemId,
        onRemove,
        removable,
        draggable,
        disabled,
        columns,
    });

    return (
        <Stack ref={ref} gap={gap} {...(others as any)}>
            {rows}
        </Stack>
    );
};

HorizontalLayoutBody.extend = identity as CustomComponentThemeExtend<HorizontalLayoutBodyFactory>;
