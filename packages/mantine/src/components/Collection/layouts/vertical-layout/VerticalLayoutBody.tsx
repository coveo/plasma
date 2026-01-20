import {Box, BoxProps, CompoundStylesApiProps, Factory, Group, MantineSpacing, Stack, useProps} from '@mantine/core';
import {ForwardedRef, useMemo} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionCellContext, CollectionColumnDef} from '../../CollectionColumn.types.js';
import {DragHandle} from '../shared/DragHandle.js';
import {renderColumnHeader} from '../shared/headerUtils.js';
import {createItemRenderers, ItemContentRenderer, mapItemsToComponents} from '../shared/itemRenderer.js';
import {LAYOUT_BODY_DEFAULT_PROPS} from '../shared/layoutConstants.js';
import {RemoveButton} from '../shared/RemoveButton.js';
import {useVerticalLayout} from './VerticalLayoutContext.js';

export type VerticalLayoutBodyStylesNames =
    | 'item'
    | 'itemContent'
    | 'dragHandle'
    | 'removeButton'
    | 'fieldGroup'
    | 'field'
    | 'fieldLabel'
    | 'fieldContent';

export interface VerticalLayoutBodyProps<T> extends BoxProps, CompoundStylesApiProps<VerticalLayoutBodyFactory> {
    columns: Array<CollectionColumnDef<T>>;
    items: T[]; // Required for Body
    onRemove?: (index: number) => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    getItemId?: (item: T, index: number) => string;
    gap?: MantineSpacing;
}

export type VerticalLayoutBodyFactory = Factory<{
    props: VerticalLayoutBodyProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: VerticalLayoutBodyStylesNames;
    compound: true;
}>;

const defaultProps: Partial<VerticalLayoutBodyProps<unknown>> = LAYOUT_BODY_DEFAULT_PROPS;

/**
 * Renders the stack of fields (columns) for a vertical layout item
 */
const renderFieldStack = (
    item: any,
    index: number,
    columns: Array<CollectionColumnDef<any>>,
    cellContext: CollectionCellContext<any>,
    getStyles: any,
) => (
    <Stack gap="xs" {...getStyles('fieldGroup')}>
        {columns.map((column, colIndex) => {
            const columnId = column.id ?? `column-${colIndex}`;
            const header = renderColumnHeader(column.header, colIndex);
            return (
                <Box key={columnId} {...getStyles('field')}>
                    {header && <Box {...getStyles('fieldLabel')}>{header}</Box>}
                    <Box {...getStyles('fieldContent')}>{column.cell(item, index, cellContext)}</Box>
                </Box>
            );
        })}
    </Stack>
);

/**
 * Vertical layout content renderer - renders: [DragHandle?] [Stack of fields] [RemoveButton?]
 * For non-draggable items with remove button
 */
const renderVerticalContent: ItemContentRenderer<any> = (item, index, columns, cellContext, getStyles) => {
    const showRemove = cellContext.removable && cellContext.onRemove && !cellContext.draggable;

    return (
        <Group wrap="nowrap" align="flex-start" gap="sm" {...getStyles('itemContent')}>
            {renderFieldStack(item, index, columns, cellContext, getStyles)}
            {showRemove && (
                <RemoveButton removable={cellContext.removable} onRemove={cellContext.onRemove} getStyles={getStyles} />
            )}
        </Group>
    );
};

/**
 * Vertical layout content renderer for draggable items
 * Renders: [DragHandle] [Stack of fields] [RemoveButton?]
 */
const renderVerticalDraggableContent = (
    item: any,
    index: number,
    columns: Array<CollectionColumnDef<any>>,
    cellContext: CollectionCellContext<any>,
    getStyles: any,
    dragHandleProps: {
        setActivatorNodeRef: (element: HTMLElement | null) => void;
        listeners: any;
        attributes: any;
    },
) => (
    <Group wrap="nowrap" align="flex-start" gap="sm" {...getStyles('itemContent')}>
        <DragHandle
            setActivatorNodeRef={dragHandleProps.setActivatorNodeRef}
            listeners={dragHandleProps.listeners}
            attributes={dragHandleProps.attributes}
            getStyles={getStyles}
        />
        {renderFieldStack(item, index, columns, cellContext, getStyles)}
        {cellContext.removable && cellContext.onRemove && (
            <RemoveButton removable={cellContext.removable} onRemove={cellContext.onRemove} getStyles={getStyles} />
        )}
    </Group>
);

// Create renderers once - they are stable component references
const verticalRenderers = createItemRenderers<any>();

export const VerticalLayoutBody = <T,>(props: VerticalLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const ctx = useVerticalLayout();
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
    } = useProps('VerticalLayoutBody', defaultProps as VerticalLayoutBodyProps<T>, props);

    const config = useMemo(
        () => ({
            renderContent: renderVerticalContent,
            containerSelector: 'item',
            inlineControls: false,
            renderDraggableContent: renderVerticalDraggableContent,
        }),
        [],
    );

    const itemComponents = mapItemsToComponents(items, verticalRenderers, config, ctx.getStyles, {
        getItemId,
        onRemove,
        removable,
        draggable,
        disabled,
        columns,
    });

    return (
        <Stack ref={ref} gap={gap} {...(others as any)}>
            {itemComponents}
        </Stack>
    );
};

VerticalLayoutBody.extend = identity as CustomComponentThemeExtend<VerticalLayoutBodyFactory>;
