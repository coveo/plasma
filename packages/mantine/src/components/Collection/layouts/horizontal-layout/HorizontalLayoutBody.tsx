import {Box, Stack, useProps} from '@mantine/core';
import {ForwardedRef, useMemo} from 'react';
import {CollectionColumnDef} from '../../CollectionColumn.types.js';
import {useCollectionContext} from '../../CollectionContext.js';
import {getColumnSizeStyles} from '../shared/columnUtils.js';
import {createItemRenderers, ItemContentRenderer, LayoutClasses, mapItemsToComponents} from '../shared/itemRenderer.js';
import {LAYOUT_BODY_DEFAULT_PROPS, LayoutBodyProps} from '../shared/layoutConstants.js';
import classes from './HorizontalLayout.module.css';

const defaultProps = LAYOUT_BODY_DEFAULT_PROPS satisfies Partial<LayoutBodyProps>;

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

export const HorizontalLayoutBody = <T,>(props: LayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const collectionCtx = useCollectionContext();
    const {items, onRemove, removable, draggable, disabled, readOnly, getItemId, gap, ref, ...others} = useProps(
        'HorizontalLayoutBody',
        defaultProps,
        props,
    );
    const columns = (collectionCtx.columns ?? []) as Array<CollectionColumnDef<T>>;
    const horizontalRenderers = useMemo(() => createItemRenderers<T>(), []);

    const config = useMemo(
        () => ({
            renderContent: renderHorizontalContent as ItemContentRenderer<T>,
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
        columns,
    });

    return (
        <Stack ref={ref} gap={gap} {...others}>
            {rows}
        </Stack>
    );
};
