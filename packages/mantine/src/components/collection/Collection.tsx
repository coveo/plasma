import {IconCirclePlus} from '@coveord/plasma-react-icons';
import {DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import {restrictToParentElement, restrictToVerticalAxis} from '@dnd-kit/modifiers';
import {SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {
    __InputWrapperProps,
    Box,
    BoxProps,
    Factory,
    Input,
    MantineSpacing,
    Stack,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import {ReorderPayload} from '@mantine/form/lib/types';
import {useDidUpdate} from '@mantine/hooks';
import {ForwardedRef, ReactNode} from 'react';

import {CustomComponentThemeExtend, identity} from '../../utils';
import {Button} from '../button';
import classes from './Collection.module.css';
import {CollectionProvider} from './CollectionContext';
import {CollectionItem} from './CollectionItem';

export interface CollectionProps<T> extends __InputWrapperProps, BoxProps, StylesApiProps<CollectionFactory> {
    /**
     * The default value each new item should have
     */
    newItem: T;
    /**
     * A render function called for each item passed in the `value` prop.
     *
     * @param item The current item's value
     * @param index The current item's index
     */
    children: (item: T, index: number) => ReactNode;
    /**
     * The list of items to display inside the collection
     *
     * @default []
     */
    value?: T[];
    /**
     * Defines how each item is uniquely identified. It is highly recommended that you specify this prop to an ID that makes sense.
     *
     * This method is required when using this component with ReactHookForm.
     *
     * @see {@link https://react-hook-form.com/api/usefieldarray/} for using a collection with ReactHookForm.
     *
     * @param originalItem The original item
     * @param itemIndex The index of the original item
     */
    getItemId?: (originalItem: T, itemIndex: number) => string;
    /**
     * Unused, has no effect
     */
    onFocus?: () => void;
    /**
     * Function called whenever the value needs to be updated
     *
     * @param value The whole list of items after the change
     */
    onChange?: (value: T[]) => void;
    /**
     * Function called after an item is removed from the collection using the remove button
     *
     * @param itemIndex The index of the item that was removed
     */
    onRemoveItem?: (itemIndex: number) => void;
    /**
     * Function that gets called whenever a collection item needs to be reordered
     *
     * @param payload The origin and destination index of the item to reorder
     */
    onReorderItem?: (payload: ReorderPayload) => void;
    /**
     * Function that gets called when a new item needs to be added to the collection
     *
     * @param value The value of the item to insert
     * @param index The index of the new item to insert
     */
    onInsertItem?: (value: T, index: number) => void;
    /**
     * Whether the collection should have drag and drop behavior enabled
     *
     * @default false
     */
    draggable?: boolean;
    /**
     * Whether the collection is disabled, or in other words in read only mode
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the collection is readOnly. If true, the collection will not allow adding or removing items
     *
     * @default false
     */
    readOnly?: boolean;
    /**
     * Function that determines if the add item button should be enabled given the current items of the collection.
     * The button is always enabled if this props remains undefined
     *
     * @param values The current items of the collection
     */
    allowAdd?: (values: T[]) => boolean;
    /**
     * The label of the add item button
     *
     * @default "Add item"
     */
    addLabel?: string;
    /**
     * The tooltip text displayed when hovering over the disabled add item button
     *
     * @default 'There is already an empty item'
     */
    addDisabledTooltip?: string;
    /**
     * The gap between the colleciton items
     *
     * @default 'xs'
     */
    gap?: MantineSpacing;
    /**
     * Whether the collection is required. When required is true, the collection will hide the remove button if there is only one item
     *
     * @default false
     */
    required?: boolean;
}

export type CollectionStylesNames = 'root' | 'item' | 'itemDragging' | 'dragHandle';

export type CollectionFactory = Factory<{
    props: CollectionProps<unknown>;
    ref: HTMLDivElement;
    stylesNames: CollectionStylesNames;
}>;

const defaultProps: Partial<CollectionProps<unknown>> = {
    draggable: false,
    addLabel: 'Add item',
    addDisabledTooltip: 'There is already an empty item',
    disabled: false,
    readOnly: false,
    gap: 'xs',
    required: false,
    getItemId: ({id}: any) => id,
};

export const Collection = <T,>(props: CollectionProps<T> & {ref?: ForwardedRef<HTMLDivElement>}) => {
    const {
        value,
        onChange,
        onRemoveItem,
        onReorderItem,
        onInsertItem,
        disabled,
        readOnly,
        draggable,
        children,
        gap,
        required,
        newItem,
        addLabel,
        addDisabledTooltip,
        allowAdd,
        label,
        labelProps,
        withAsterisk,
        description,
        descriptionProps,
        error,
        errorProps,
        getItemId,
        ref,

        // Style props
        style,
        className,
        classNames,
        styles,
        unstyled,
        ...others
    } = useProps('Collection', defaultProps as CollectionProps<T>, props);

    const getStyles = useStyles<CollectionFactory>({
        name: 'Collection',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
    });
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const canEdit = !disabled && !readOnly;
    const hasOnlyOneItem = value.length === 1;

    /**
     * Enforcing onChange when the value is modified will make sure the errors are carried through.
     */
    useDidUpdate(() => {
        onChange?.(value);
    }, [JSON.stringify(value)]);

    const isRequired = typeof withAsterisk === 'boolean' ? withAsterisk : required;
    const _label = label ? (
        <Input.Label required={isRequired} {...labelProps}>
            {label}
        </Input.Label>
    ) : null;

    const _description = description ? (
        <Input.Description {...descriptionProps}>{description}</Input.Description>
    ) : null;
    const _error = error ? <Input.Error {...errorProps}>{error}</Input.Error> : null;
    const _header =
        _label || _description ? (
            <>
                {_label}
                {_description}
            </>
        ) : null;

    const standardizedItems = value.map((item, index) => ({id: getItemId?.(item, index) ?? String(index), data: item}));

    const items = standardizedItems.map((item, index) => (
        <CollectionItem
            key={item.id}
            id={item.id}
            disabled={!canEdit}
            draggable={draggable}
            onRemove={() => onRemoveItem?.(index)}
            removable={!(required && hasOnlyOneItem)}
        >
            {children(item.data, index)}
        </CollectionItem>
    ));

    const addAllowed = allowAdd?.(value) ?? true;

    const _addButton = canEdit ? (
        <Button.Quaternary
            leftSection={<IconCirclePlus size={16} />}
            onClick={() => onInsertItem(newItem, value?.length ?? 0)}
            disabled={!addAllowed}
            disabledTooltip={addDisabledTooltip}
        >
            {addLabel}
        </Button.Quaternary>
    ) : null;

    const getIndex = (id: string) => standardizedItems.findIndex((item) => item.id === id);

    const handleDragEnd = ({over, active}: DragEndEvent): void => {
        if (over) {
            const activeIndex = getIndex(String(active.id));
            const overIndex = getIndex(String(over.id));
            if (activeIndex !== overIndex) {
                onReorderItem?.({from: activeIndex, to: overIndex});
            }
        }
    };

    return (
        <CollectionProvider value={{getStyles}}>
            <DndContext
                onDragEnd={handleDragEnd}
                sensors={sensors}
                modifiers={[restrictToVerticalAxis, restrictToParentElement]}
            >
                <SortableContext items={standardizedItems} strategy={verticalListSortingStrategy}>
                    <Box ref={ref} {...others} {...getStyles('root')}>
                        {_header}
                        <Stack gap={gap}>
                            {items}
                            {_addButton}
                            {_error}
                        </Stack>
                    </Box>
                </SortableContext>
            </DndContext>
        </CollectionProvider>
    );
};

Collection.extend = identity as CustomComponentThemeExtend<CollectionFactory>;
