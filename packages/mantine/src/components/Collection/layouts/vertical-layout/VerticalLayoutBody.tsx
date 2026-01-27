import {Box, Group, Stack, useProps} from '@mantine/core';
import {ForwardedRef, useMemo} from 'react';
import {CollectionCellContext, CollectionColumnDef} from '../../CollectionColumn.types.js';
import {useCollectionContext} from '../../CollectionContext.js';
import {DragHandle} from '../shared/DragHandle.js';
import {renderColumnHeader} from '../shared/headerUtils.js';
import {
    createItemRenderers,
    DraggableContentRenderer,
    ItemContentRenderer,
    LayoutClasses,
    mapItemsToComponents,
} from '../shared/itemRenderer.js';
import {LAYOUT_BODY_DEFAULT_PROPS, LayoutBodyProps} from '../shared/layoutConstants.js';
import {RemoveButton} from '../shared/RemoveButton.js';
import classes from './VerticalLayout.module.css';

const defaultProps: Partial<LayoutBodyProps<unknown>> = LAYOUT_BODY_DEFAULT_PROPS;

/**
 * Renders the stack of fields (columns) for a vertical layout item
 */
const renderFieldStack = (
    item: any,
    index: number,
    columns: Array<CollectionColumnDef<any>>,
    cellContext: CollectionCellContext<any>,
    layoutClasses: LayoutClasses,
) => (
    <Stack gap="xs" className={layoutClasses.fieldGroup}>
        {columns.map((column, colIndex) => {
            const columnId = column.id ?? `column-${colIndex}`;
            const header = renderColumnHeader(column.header, colIndex);
            return (
                <Box key={columnId} className={layoutClasses.field}>
                    {header && <Box className={layoutClasses.fieldLabel}>{header}</Box>}
                    <Box className={layoutClasses.fieldContent}>{column.cell(item, index, cellContext)}</Box>
                </Box>
            );
        })}
    </Stack>
);

/**
 * Vertical layout content renderer - renders: [DragHandle?] [Stack of fields] [RemoveButton?]
 * For non-draggable items with remove button
 */
const renderVerticalContent: ItemContentRenderer<any> = (item, index, columns, cellContext, layoutClasses) => {
    const showRemove = cellContext.removable && cellContext.onRemove && !cellContext.draggable;

    return (
        <Group wrap="nowrap" align="flex-start" gap="sm" className={layoutClasses.itemContent}>
            {renderFieldStack(item, index, columns, cellContext, layoutClasses)}
            {showRemove && <RemoveButton removable={cellContext.removable} onRemove={cellContext.onRemove} />}
        </Group>
    );
};

/**
 * Vertical layout content renderer for draggable items
 * Renders: [DragHandle] [Stack of fields] [RemoveButton?]
 */
const renderVerticalDraggableContent: DraggableContentRenderer<any> = (
    item,
    index,
    columns,
    cellContext,
    layoutClasses,
    dragHandleProps,
) => (
    <Group wrap="nowrap" align="flex-start" gap="sm" className={layoutClasses.itemContent}>
        <DragHandle
            setActivatorNodeRef={dragHandleProps.setActivatorNodeRef}
            listeners={dragHandleProps.listeners}
            attributes={dragHandleProps.attributes}
        />
        {renderFieldStack(item, index, columns, cellContext, layoutClasses)}
        {cellContext.removable && cellContext.onRemove && (
            <RemoveButton removable={cellContext.removable} onRemove={cellContext.onRemove} />
        )}
    </Group>
);

// Create renderers once - they are stable component references
const verticalRenderers = createItemRenderers<any>();

export const VerticalLayoutBody = <T,>(props: LayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const collectionCtx = useCollectionContext();
    const {items, onRemove, removable, draggable, disabled, readOnly, getItemId, gap, ref, ...others} = useProps(
        'VerticalLayoutBody',
        defaultProps as LayoutBodyProps<T>,
        props,
    );

    const config = useMemo(
        () => ({
            renderContent: renderVerticalContent,
            containerSelector: 'item',
            inlineControls: false,
            renderDraggableContent: renderVerticalDraggableContent,
        }),
        [],
    );

    const itemComponents = mapItemsToComponents(items, verticalRenderers, config, classes as LayoutClasses, {
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
            {itemComponents}
        </Stack>
    );
};
