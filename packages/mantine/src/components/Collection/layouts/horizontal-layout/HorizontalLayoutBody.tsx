import {DragAndDropSize24Px, IconTrash} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Box, BoxProps, CompoundStylesApiProps, Factory, MantineSpacing, Stack, useProps} from '@mantine/core';
import {ForwardedRef} from 'react';
import {CustomComponentThemeExtend, identity} from '../../../../utils/createFactoryComponent.js';
import {ActionIcon} from '../../../ActionIcon/ActionIcon.js';
import {CollectionCellContext, CollectionColumnDef} from '../../CollectionColumn.types.js';
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

const defaultProps: Partial<HorizontalLayoutBodyProps<unknown>> = {
    removable: true,
    draggable: false,
    disabled: false,
    gap: 'md',
};

interface RowProps<T> {
    item: T;
    index: number;
    id: string;
    columns: Array<CollectionColumnDef<T>>;
    onRemove?: () => void;
    removable?: boolean;
    draggable?: boolean;
    disabled?: boolean;
}

const DraggableRow = <T,>({item, index, id, columns, onRemove, removable, disabled}: RowProps<T>) => {
    const ctx = useHorizontalLayout();
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
            {...ctx.getStyles('row')}
            style={{
                ...(transform
                    ? {
                          transform: CSS.Transform.toString(transform),
                          transition,
                      }
                    : undefined),
                ...ctx.getStyles('row').style,
            }}
            data-isdragging={isDragging}
        >
            <div ref={setActivatorNodeRef} {...listeners} {...attributes} {...ctx.getStyles('dragHandle')}>
                <DragAndDropSize24Px height={16} />
            </div>
            {columns.map((column, colIndex) => {
                const columnId = column.id ?? `column-${colIndex}`;
                return (
                    <Box
                        key={columnId}
                        {...ctx.getStyles('cell')}
                        style={{
                            width: column.size
                                ? typeof column.size === 'number'
                                    ? `${column.size}px`
                                    : column.size
                                : 'auto',
                            minWidth: column.minSize
                                ? typeof column.minSize === 'number'
                                    ? `${column.minSize}px`
                                    : column.minSize
                                : undefined,
                            maxWidth: column.maxSize
                                ? typeof column.maxSize === 'number'
                                    ? `${column.maxSize}px`
                                    : column.maxSize
                                : undefined,
                            ...ctx.getStyles('cell').style,
                        }}
                    >
                        {column.cell(item, index, cellContext)}
                    </Box>
                );
            })}
            {removable && onRemove ? (
                <Box {...ctx.getStyles('removeButton')}>
                    <ActionIcon.Quaternary onClick={onRemove}>
                        <IconTrash aria-label="Remove" size={16} />
                    </ActionIcon.Quaternary>
                </Box>
            ) : (
                <div style={{width: 28}} />
            )}
        </Box>
    );
};

const StaticRow = <T,>({item, index, id, columns, onRemove, removable, disabled}: RowProps<T>) => {
    const ctx = useHorizontalLayout();

    const cellContext: CollectionCellContext<T> = {
        removable,
        draggable: false,
        disabled,
        onRemove,
    };

    return (
        <Box data-testid={`item-${id}`} {...ctx.getStyles('row')}>
            {columns.map((column, colIndex) => {
                const columnId = column.id ?? `column-${colIndex}`;
                return (
                    <Box
                        key={columnId}
                        {...ctx.getStyles('cell')}
                        style={{
                            width: column.size
                                ? typeof column.size === 'number'
                                    ? `${column.size}px`
                                    : column.size
                                : 'auto',
                            minWidth: column.minSize
                                ? typeof column.minSize === 'number'
                                    ? `${column.minSize}px`
                                    : column.minSize
                                : undefined,
                            maxWidth: column.maxSize
                                ? typeof column.maxSize === 'number'
                                    ? `${column.maxSize}px`
                                    : column.maxSize
                                : undefined,
                            ...ctx.getStyles('cell').style,
                        }}
                    >
                        {column.cell(item, index, cellContext)}
                    </Box>
                );
            })}
            {removable && onRemove ? (
                <Box {...ctx.getStyles('removeButton')}>
                    <ActionIcon.Quaternary onClick={onRemove}>
                        <IconTrash aria-label="Remove" size={16} />
                    </ActionIcon.Quaternary>
                </Box>
            ) : (
                <div style={{width: 28}} />
            )}
        </Box>
    );
};

const DisabledRow = <T,>({item, index, id, columns, disabled}: RowProps<T>) => {
    const ctx = useHorizontalLayout();

    const cellContext: CollectionCellContext<T> = {
        removable: false,
        draggable: false,
        disabled,
    };

    return (
        <Box data-testid={`item-${id}`} {...ctx.getStyles('row')}>
            {columns.map((column, colIndex) => {
                const columnId = column.id ?? `column-${colIndex}`;
                return (
                    <Box
                        key={columnId}
                        {...ctx.getStyles('cell')}
                        style={{
                            width: column.size
                                ? typeof column.size === 'number'
                                    ? `${column.size}px`
                                    : column.size
                                : 'auto',
                            minWidth: column.minSize
                                ? typeof column.minSize === 'number'
                                    ? `${column.minSize}px`
                                    : column.minSize
                                : undefined,
                            maxWidth: column.maxSize
                                ? typeof column.maxSize === 'number'
                                    ? `${column.maxSize}px`
                                    : column.maxSize
                                : undefined,
                            ...ctx.getStyles('cell').style,
                        }}
                    >
                        {column.cell(item, index, cellContext)}
                    </Box>
                );
            })}
        </Box>
    );
};

export const HorizontalLayoutBody = <T,>(
    props: HorizontalLayoutBodyProps<T> & {ref?: ForwardedRef<HTMLDivElement>},
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
    } = useProps('HorizontalLayoutBody', defaultProps as HorizontalLayoutBodyProps<T>, props);

    const rows = items.map((item, index) => {
        const id = getItemId?.(item, index) ?? String(index);
        const rowProps: RowProps<T> = {
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
            return <DisabledRow key={id} {...rowProps} />;
        }

        if (draggable) {
            return <DraggableRow key={id} {...rowProps} />;
        }

        return <StaticRow key={id} {...rowProps} />;
    });

    return (
        <Stack ref={ref} gap={gap} {...(others as any)}>
            {rows}
        </Stack>
    );
};

HorizontalLayoutBody.extend = identity as CustomComponentThemeExtend<HorizontalLayoutBodyFactory>;
