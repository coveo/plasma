import {IconPlus} from '@coveord/plasma-react-icons';
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
import {useDidUpdate} from '@mantine/hooks';
import {ForwardedRef, ReactNode} from 'react';

import {CustomComponentThemeExtend, identity} from '../../utils/createFactoryComponent.js';
import {Button} from '../Button/Button.js';
import classes from './Collection.module.css';
import {CollectionProvider} from './CollectionContext.js';
import {CollectionItem} from './CollectionItem.js';

export interface CollectionProps<T> extends __InputWrapperProps, BoxProps, StylesApiProps<CollectionFactory> {
    /**
     * The default value each new item should have
     */
    newItem: T | (() => T);
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
    onReorderItem?: (payload: {from: number; to: number}) => void;
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
    allowAdd?: boolean | ((values: T[]) => boolean);
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

export type CollectionStylesNames = 'root' | 'item' | 'items' | 'itemDragging' | 'dragHandle';

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
    gap: 'md',
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
    const _error = error ? (
        <Input.Error {...errorProps} pt="xs">
            {error}
        </Input.Error>
    ) : null;
    const _header =
        _label || _description ? (
            <Stack gap="xxs" pb="xs">
                {_label}
                {_description}
            </Stack>
        ) : null;

    const standardizedItems = value.map((item, index) => ({id: getItemId?.(item, index) ?? String(index), data: item}));

    const items = standardizedItems.map((item, index) => (
        <CollectionItem
            key={item.id}
            id={item.id}
            disabled={!canEdit}
            draggable={draggable}
            onRemove={() => onRemoveItem?.(index)}
            removable={!(isRequired && hasOnlyOneItem)}
        >
            {children(item.data, index)}
        </CollectionItem>
    ));

    const addAllowed = typeof allowAdd === 'boolean' ? allowAdd : (allowAdd?.(value) ?? true);

    const _addButton = canEdit ? (
        <Box className={classes.addButtonContainer}>
            <Button.Quaternary
                leftSection={<IconPlus size={16} />}
                onClick={() => {
                    const newItemValue = typeof newItem === 'function' ? (newItem as () => T)() : newItem;
                    onInsertItem(newItemValue, value?.length ?? 0);
                }}
                disabled={!addAllowed}
                disabledTooltip={addDisabledTooltip}
            >
                {addLabel}
            </Button.Quaternary>
        </Box>
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
                        <Stack gap={gap} {...getStyles('items')}>
                            {items}
                            {_addButton}
                        </Stack>
                        {_error}
                    </Box>
                </SortableContext>
            </DndContext>
        </CollectionProvider>
    );
};

Collection.displayName = 'Collection';

Collection.extend = identity as CustomComponentThemeExtend<CollectionFactory>;
