import {Box, BoxProps, CompoundStylesApiProps, Factory, MantineSpacing, Stack, useProps} from '@mantine/core';
import {ForwardedRef, useMemo} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionColumnDef} from '../../CollectionColumn.types.js';
import {DragHandle} from '../shared/DragHandle.js';
import {renderColumnHeader} from '../shared/headerUtils.js';
import {createItemRenderers, ItemContentRenderer, mapItemsToComponents} from '../shared/itemRenderer.js';
import {LAYOUT_BODY_DEFAULT_PROPS} from '../shared/layoutConstants.js';
import {RemoveButton} from '../shared/RemoveButton.js';
import {useVerticalLayout} from './VerticalLayoutContext.js';

export type VerticalLayoutBodyStylesNames =
    | 'item'
    | 'itemHeader'
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
 * Vertical layout specific content renderer - renders stacked fields with labels
 */
const renderVerticalContent: ItemContentRenderer<any> = (item, index, columns, cellContext, getStyles) => (
    <>
        {cellContext.removable && cellContext.onRemove && !cellContext.draggable && (
            <Box {...getStyles('itemHeader')}>
                <div />
                <RemoveButton removable={cellContext.removable} onRemove={cellContext.onRemove} getStyles={getStyles} />
            </Box>
        )}
        <Box {...getStyles('fieldGroup')}>
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
        </Box>
    </>
);

/**
 * Custom header renderer for draggable vertical items
 */
const renderVerticalDraggableHeader = (
    onRemove: (() => void) | undefined,
    removable: boolean | undefined,
    setActivatorNodeRef: (element: HTMLElement | null) => void,
    listeners: any,
    attributes: any,
    getStyles: any,
) => (
    <Box {...getStyles('itemHeader')}>
        <DragHandle
            setActivatorNodeRef={setActivatorNodeRef}
            listeners={listeners}
            attributes={attributes}
            getStyles={getStyles}
        />
        {removable && onRemove && <RemoveButton removable={removable} onRemove={onRemove} getStyles={getStyles} />}
    </Box>
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
            renderDraggableHeader: renderVerticalDraggableHeader,
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
