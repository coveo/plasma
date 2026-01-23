import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Box} from '@mantine/core';
import {ReactNode} from 'react';
import {CollectionCellContext, CollectionColumnDef} from '../../CollectionColumn.types.js';
import {DragHandle} from './DragHandle.js';
import {RemoveButton} from './RemoveButton.js';

/**
 * CSS classes object for layout styling.
 */
export interface LayoutClasses {
    [key: string]: string;
}

/**
 * Common props for rendering an item/row in either layout.
 */
export interface ItemProps<T> {
    item: T;
    index: number;
    id: string;
    columns: Array<CollectionColumnDef<T>>;
    onRemove?: () => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    classes: LayoutClasses;
    config: ItemRendererConfig<T>;
}

/**
 * Function type that renders the content specific to each layout.
 * Horizontal layout renders cells in a row, vertical layout renders stacked fields.
 */
export type ItemContentRenderer<T> = (
    item: T,
    index: number,
    columns: Array<CollectionColumnDef<T>>,
    cellContext: CollectionCellContext<T>,
    classes: LayoutClasses,
) => ReactNode;

/**
 * Function type that renders content with inline drag handle for draggable items.
 * Used by layouts that want the drag handle integrated into the content (e.g., vertical layout).
 */
export type DraggableContentRenderer<T> = (
    item: T,
    index: number,
    columns: Array<CollectionColumnDef<T>>,
    cellContext: CollectionCellContext<T>,
    classes: LayoutClasses,
    dragHandleProps: {
        setActivatorNodeRef: (element: HTMLElement | null) => void;
        listeners: any;
        attributes: any;
    },
) => ReactNode;

/**
 * Configuration for creating layout-specific item renderers.
 */
export interface ItemRendererConfig<T> {
    /** The content rendering function specific to the layout */
    renderContent: ItemContentRenderer<T>;
    /** The container style selector ('row' for horizontal, 'item' for vertical) */
    containerSelector: string;
    /** Optional: whether to render drag handle and remove button inline with content (used by horizontal layout) */
    inlineControls?: boolean;
    /**
     * Optional: custom content renderer for draggable items that integrates the drag handle.
     * If provided, this is used instead of the default drag handle + renderContent pattern.
     * Used by vertical layout to place drag handle alongside the field stack.
     */
    renderDraggableContent?: DraggableContentRenderer<T>;
}

/**
 * Creates a set of item renderers (draggable, static, disabled) for a layout.
 * This eliminates the duplication of three nearly identical component variants.
 * The renderers are stable function references that don't capture variables in closures.
 */
export const createItemRenderers = <T,>() => {
    /**
     * Draggable item/row renderer with drag and drop functionality
     */
    const DraggableItem = (props: ItemProps<T>) => {
        const {item, index, id, columns, onRemove, removable, disabled, readOnly, classes, config} = props;
        const {attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef} = useSortable(
            {id},
        );

        const cellContext: CollectionCellContext<T> = {
            removable,
            draggable: true,
            disabled,
            readOnly,
            onRemove,
        };

        const dragHandleProps = {setActivatorNodeRef, listeners, attributes};

        // Use renderDraggableContent if provided (integrates drag handle into content)
        if (config.renderDraggableContent) {
            return (
                <Box
                    ref={setNodeRef}
                    data-testid={`item-${id}`}
                    className={classes[config.containerSelector]}
                    style={
                        transform
                            ? {
                                  transform: CSS.Transform.toString(transform),
                                  transition,
                              }
                            : undefined
                    }
                    data-isdragging={isDragging}
                >
                    {config.renderDraggableContent(item, index, columns, cellContext, classes, dragHandleProps)}
                </Box>
            );
        }

        // Default behavior: inline drag handle + content + remove button (used by horizontal layout)
        return (
            <Box
                ref={setNodeRef}
                data-testid={`item-${id}`}
                className={classes[config.containerSelector]}
                style={
                    transform
                        ? {
                              transform: CSS.Transform.toString(transform),
                              transition,
                          }
                        : undefined
                }
                data-isdragging={isDragging}
            >
                <DragHandle setActivatorNodeRef={setActivatorNodeRef} listeners={listeners} attributes={attributes} />
                {config.renderContent(item, index, columns, cellContext, classes)}
                {config.inlineControls && <RemoveButton removable={removable} onRemove={onRemove} />}
            </Box>
        );
    };

    /**
     * Static (non-draggable) item/row renderer
     */
    const StaticItem = (props: ItemProps<T>) => {
        const {item, index, id, columns, onRemove, removable, disabled, readOnly, classes, config} = props;

        const cellContext: CollectionCellContext<T> = {
            removable,
            draggable: false,
            disabled,
            readOnly,
            onRemove,
        };

        return (
            <Box data-testid={`item-${id}`} className={classes[config.containerSelector]}>
                {config.renderContent(item, index, columns, cellContext, classes)}
                {config.inlineControls && <RemoveButton removable={removable} onRemove={onRemove} />}
            </Box>
        );
    };

    /**
     * Disabled item/row renderer (no drag, no remove)
     */
    const DisabledItem = (props: ItemProps<T>) => {
        const {item, index, id, columns, disabled, readOnly, classes, config} = props;

        const cellContext: CollectionCellContext<T> = {
            removable: false,
            draggable: false,
            disabled,
            readOnly,
        };

        return (
            <Box data-testid={`item-${id}`} className={classes[config.containerSelector]}>
                {config.renderContent(item, index, columns, cellContext, classes)}
            </Box>
        );
    };

    return {DraggableItem, StaticItem, DisabledItem};
};

/**
 * Maps items to their appropriate renderer components based on state.
 */
export const mapItemsToComponents = <T,>(
    items: T[],
    renderers: ReturnType<typeof createItemRenderers<T>>,
    config: ItemRendererConfig<T>,
    classes: LayoutClasses,
    options: {
        getItemId?: (item: T, index: number) => string;
        onRemove?: (index: number) => void;
        removable?: boolean;
        draggable?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        columns: Array<CollectionColumnDef<T>>;
    },
): ReactNode[] => {
    const {getItemId, onRemove, removable, draggable, disabled, readOnly, columns} = options;
    const {DraggableItem, StaticItem, DisabledItem} = renderers;

    return items.map((item, index) => {
        const id = getItemId?.(item, index) ?? String(index);
        const itemProps: ItemProps<T> = {
            item,
            index,
            id,
            columns,
            onRemove: onRemove ? () => onRemove(index) : undefined,
            removable,
            draggable,
            disabled,
            readOnly,
            classes,
            config,
        };

        if (disabled) {
            return <DisabledItem key={id} {...itemProps} />;
        }

        if (draggable) {
            return <DraggableItem key={id} {...itemProps} />;
        }

        return <StaticItem key={id} {...itemProps} />;
    });
};
