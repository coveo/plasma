import {AddSize16Px} from '@coveord/plasma-react-icons';
import {
    Box,
    Button,
    DefaultProps,
    Group,
    Input,
    InputWrapperBaseProps,
    MantineNumberSize,
    Selectors,
    Stack,
    Tooltip,
    useComponentDefaultProps,
} from '@mantine/core';
import {useId} from '@mantine/hooks';
import {ReactNode} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import {useControlledList} from '../../hooks/index.js';
import useStyles from './Collection.styles.js';
import {CollectionItem} from './CollectionItem.js';

interface CollectionProps<T>
    extends Omit<InputWrapperBaseProps, 'inputContainer' | 'inputWrapperOrder'>,
        DefaultProps<Selectors<typeof useStyles>> {
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
     * The initial items of the collection (for uncontrolled usage only)
     */
    defaultValue?: T[];
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
     * The spacing between the colleciton items
     *
     * @default 'xs'
     */
    spacing?: MantineNumberSize;
    /**
     * Whether the collection is required. When required is true, the collection will hide the remove button if there is only one item
     *
     * @default false
     */
    required?: boolean;
}

const defaultProps: Partial<CollectionProps<unknown>> = {
    draggable: false,
    addLabel: 'Add item',
    addDisabledTooltip: 'There is already an empty item',
    disabled: false,
    spacing: 'xs',
    required: false,
};

export const Collection = <T,>(props: CollectionProps<T>) => {
    const {
        value,
        defaultValue,
        onChange,
        onRemoveItem,
        disabled,
        draggable,
        children,
        spacing,
        required,
        newItem,
        addLabel,
        addDisabledTooltip,
        allowAdd,
        label,
        labelProps,
        description,
        descriptionProps,
        error,
        errorProps,

        // Style props
        classNames,
        className,
        styles,
        unstyled,

        ...others
    } = useComponentDefaultProps('Collection', defaultProps as CollectionProps<T>, props);
    const {classes, cx} = useStyles(null, {classNames, name: 'Collection', styles, unstyled});
    const collectionID = useId('dnd-droppable');

    const [values, {append, remove, reorder}] = useControlledList({value, onChange, defaultValue});
    const hasOnlyOneItem = values.length === 1;
    const removeItem = (index: number) => () => {
        remove(index);
        onRemoveItem?.(index);
    };

    const _label = label ? (
        <Input.Label required={required} {...labelProps}>
            {label}
        </Input.Label>
    ) : null;

    const _description = description ? (
        <Input.Description {...descriptionProps}>{description}</Input.Description>
    ) : null;
    const _error = error ? <Input.Error {...errorProps}>{error}</Input.Error> : null;
    const _header =
        _label || _description ? (
            <Box mb="sm">
                {_label}
                {_description}
            </Box>
        ) : null;

    const items = values.map((item, index) => (
        <CollectionItem
            key={index}
            disabled={disabled}
            draggable={draggable}
            index={index}
            onRemove={removeItem(index)}
            styles={styles}
            removable={!(required && hasOnlyOneItem)}
        >
            {children(item, index)}
        </CollectionItem>
    ));

    const addAllowed = allowAdd?.(values) ?? true;

    const _addButton = disabled ? null : (
        <Group>
            <Tooltip label={addDisabledTooltip} disabled={addAllowed}>
                <Box>
                    <Button
                        variant="subtle"
                        leftIcon={<AddSize16Px height={16} />}
                        onClick={() => append(newItem)}
                        disabled={!addAllowed}
                    >
                        {addLabel}
                    </Button>
                </Box>
            </Tooltip>
        </Group>
    );

    return (
        <DragDropContext
            onDragEnd={({destination, source}) => reorder({from: source.index, to: destination?.index || 0})}
        >
            <Droppable direction="vertical" droppableId={collectionID}>
                {(provided) => (
                    <Box
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={cx(classes.root, className)}
                        {...others}
                    >
                        {_header}
                        <Stack spacing={spacing}>
                            {items}
                            {provided.placeholder}
                            {_addButton}
                            {_error}
                        </Stack>
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    );
};
