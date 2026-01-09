import {DragAndDropSize24Px, IconTrash} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Box, BoxProps, CompoundStylesApiProps, Factory, Stack, useProps} from '@mantine/core';
import {ForwardedRef, ReactNode} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {ActionIcon} from '../../../ActionIcon/ActionIcon.js';
import {CollectionCellContext, CollectionColumnDef, CollectionHeaderContext} from '../../CollectionColumn.types.js';
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
    items: Array<T>; // Required for Body
    onRemove?: (index: number) => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
    getItemId?: (item: T, index: number) => string;
    gap?: string;
}

export type VerticalLayoutBodyFactory = Factory<{
    props: VerticalLayoutBodyProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: VerticalLayoutBodyStylesNames;
    compound: true;
}>;

const defaultProps: Partial<VerticalLayoutBodyProps<unknown>> = {
    removable: true,
    draggable: false,
    disabled: false,
    gap: 'md',
};

interface ItemProps<T> {
    item: T;
    index: number;
    id: string;
    columns: Array<CollectionColumnDef<T>>;
    onRemove?: () => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
}

const renderHeader = (header: CollectionColumnDef<unknown>['header'], index: number): ReactNode => {
    if (typeof header === 'function') {
        const context: CollectionHeaderContext = {index};
        return header(context);
    }
    return header;
};

const DraggableItem = <T,>({item, index, id, columns, onRemove, removable, disabled}: ItemProps<T>) => {
    const ctx = useVerticalLayout();
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef} = useSortable({
        id,
    });

    const cellContext: CollectionCellContext<T> = {
        removable,
        draggable: true,
        disabled,
        onRemove,
    };

    return (
        <Box
            ref={setNodeRef}
            data-testid={`item-${id}`}
            {...ctx.getStyles('item')}
            style={{
                ...(transform
                    ? {
                          transform: CSS.Transform.toString(transform),
                          transition,
                      }
                    : undefined),
                ...ctx.getStyles('item').style,
            }}
            data-isdragging={isDragging}
        >
            <Box {...ctx.getStyles('itemHeader')}>
                <div ref={setActivatorNodeRef} {...listeners} {...attributes} {...ctx.getStyles('dragHandle')}>
                    <DragAndDropSize24Px height={16} />
                </div>
                {removable && onRemove && (
                    <Box {...ctx.getStyles('removeButton')}>
                        <ActionIcon.Quaternary onClick={onRemove}>
                            <IconTrash aria-label="Remove" size={16} />
                        </ActionIcon.Quaternary>
                    </Box>
                )}
            </Box>
            <Box {...ctx.getStyles('fieldGroup')}>
                {columns.map((column, colIndex) => {
                    const columnId = column.id ?? `column-${colIndex}`;
                    const header = renderHeader(column.header, colIndex);
                    return (
                        <Box key={columnId} {...ctx.getStyles('field')}>
                            {header && <Box {...ctx.getStyles('fieldLabel')}>{header}</Box>}
                            <Box {...ctx.getStyles('fieldContent')}>{column.cell(item, index, cellContext)}</Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

const StaticItem = <T,>({item, index, id, columns, onRemove, removable, disabled}: ItemProps<T>) => {
    const ctx = useVerticalLayout();

    const cellContext: CollectionCellContext<T> = {
        removable,
        draggable: false,
        disabled,
        onRemove,
    };

    return (
        <Box data-testid={`item-${id}`} {...ctx.getStyles('item')}>
            {removable && onRemove && (
                <Box {...ctx.getStyles('itemHeader')}>
                    <div />
                    <Box {...ctx.getStyles('removeButton')}>
                        <ActionIcon.Quaternary onClick={onRemove}>
                            <IconTrash aria-label="Remove" size={16} />
                        </ActionIcon.Quaternary>
                    </Box>
                </Box>
            )}
            <Box {...ctx.getStyles('fieldGroup')}>
                {columns.map((column, colIndex) => {
                    const columnId = column.id ?? `column-${colIndex}`;
                    const header = renderHeader(column.header, colIndex);
                    return (
                        <Box key={columnId} {...ctx.getStyles('field')}>
                            {header && <Box {...ctx.getStyles('fieldLabel')}>{header}</Box>}
                            <Box {...ctx.getStyles('fieldContent')}>{column.cell(item, index, cellContext)}</Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

const DisabledItem = <T,>({item, index, id, columns, disabled}: ItemProps<T>) => {
    const ctx = useVerticalLayout();

    const cellContext: CollectionCellContext<T> = {
        removable: false,
        draggable: false,
        disabled,
    };

    return (
        <Box data-testid={`item-${id}`} {...ctx.getStyles('item')}>
            <Box {...ctx.getStyles('fieldGroup')}>
                {columns.map((column, colIndex) => {
                    const columnId = column.id ?? `column-${colIndex}`;
                    const header = renderHeader(column.header, colIndex);
                    return (
                        <Box key={columnId} {...ctx.getStyles('field')}>
                            {header && <Box {...ctx.getStyles('fieldLabel')}>{header}</Box>}
                            <Box {...ctx.getStyles('fieldContent')}>{column.cell(item, index, cellContext)}</Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

export const VerticalLayoutBody = <T,>(
    props: VerticalLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>},
) => {
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

    const itemComponents = items.map((item, index) => {
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
        };

        if (disabled) {
            return <DisabledItem key={id} {...itemProps} />;
        }

        if (draggable) {
            return <DraggableItem key={id} {...itemProps} />;
        }

        return <StaticItem key={id} {...itemProps} />;
    });

    return (
        <Stack ref={ref} gap={gap} {...others}>
            {itemComponents}
        </Stack>
    );
};

VerticalLayoutBody.extend = identity as CustomComponentThemeExtend<VerticalLayoutBodyFactory>;
