import {Box, BoxProps, MantineSpacing, Stack, useProps} from '@mantine/core';
import {ForwardedRef, useMemo} from 'react';
import {useCollectionContext} from '../../CollectionContext.js';
import {getColumnSizeStyles} from '../shared/columnUtils.js';
import {createItemRenderers, ItemContentRenderer, LayoutClasses, mapItemsToComponents} from '../shared/itemRenderer.js';
import {LAYOUT_BODY_DEFAULT_PROPS} from '../shared/layoutConstants.js';
import classes from './HorizontalLayout.module.css';

export interface HorizontalLayoutBodyProps<T = unknown> extends BoxProps {
    items: T[];
    onRemove?: (index: number) => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    getItemId?: (item: T, index: number) => string;
    gap?: MantineSpacing;
}

const defaultProps: Partial<HorizontalLayoutBodyProps> = LAYOUT_BODY_DEFAULT_PROPS;

/**
 * Horizontal layout specific content renderer - renders cells in a row
 */
const renderHorizontalContent: ItemContentRenderer<unknown> = (
    item,
    index,
    columns,
    cellContext,
    layoutClasses: LayoutClasses,
) => (
    <>
        {columns.map((column, colIndex) => {
            const columnId = column.id ?? `column-${colIndex}`;
            return (
                <Box key={columnId} className={layoutClasses.cell} style={getColumnSizeStyles(column)}>
                    {column.cell(item, index, cellContext)}
                </Box>
            );
        })}
    </>
);

// Create renderers once - they are stable component references
const horizontalRenderers = createItemRenderers<unknown>();

export const HorizontalLayoutBody = <T,>(
    props: HorizontalLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>},
) => {
    const collectionCtx = useCollectionContext();
    const {items, onRemove, removable, draggable, disabled, readOnly, getItemId, gap, ref, ...others} = useProps(
        'HorizontalLayoutBody',
        defaultProps as HorizontalLayoutBodyProps<T>,
        props,
    );

    const config = useMemo(
        () => ({
            renderContent: renderHorizontalContent,
            containerSelector: 'row',
            inlineControls: true,
        }),
        [],
    );

    const rows = mapItemsToComponents(items, horizontalRenderers, config, classes as LayoutClasses, {
        getItemId,
        onRemove,
        removable,
        draggable,
        disabled,
        readOnly,
        columns: collectionCtx.columns,
    });

    return (
        <Stack ref={ref} gap={gap} {...others}>
            {rows}
        </Stack>
    );
};
