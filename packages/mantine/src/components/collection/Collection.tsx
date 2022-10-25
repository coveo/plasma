import {AddSize16Px} from '@coveord/plasma-react-icons';
import {
    Box,
    Button,
    DefaultProps,
    Group,
    MantineNumberSize,
    Selectors,
    Stack,
    Tooltip,
    useComponentDefaultProps,
} from '@mantine/core';
import {useId} from '@mantine/hooks';
import {ReactNode} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import {useControlledList} from '../../hooks';
import {CollectionItem} from './CollectionItem';
import useStyles from './Colllection.styles';

interface CollectionProps<T> extends DefaultProps<Selectors<typeof useStyles>> {
    newItem: T;
    children: (item: T, index: number) => ReactNode;
    defaultValue?: T[];
    value?: T[];
    onFocus?: () => void;
    onChange?: (value: T[]) => void;
    draggable?: boolean;
    disabled?: boolean;
    addLabel?: string;
    addDisabledTooltip?: string;
    spacing?: MantineNumberSize;
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
        onFocus,
        disabled,
        draggable,
        children,
        spacing,
        required,
        newItem,
        addLabel,
        addDisabledTooltip,

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
    const items = values.map((item, index) => (
        <CollectionItem
            key={index}
            disabled={disabled}
            draggable={draggable}
            index={index}
            onRemove={() => remove(index)}
            styles={styles}
            removable={!(required && hasOnlyOneItem)}
        >
            {children(item, index)}
        </CollectionItem>
    ));

    const hasEmptyItem = values.some((item) => JSON.stringify(item) === JSON.stringify(newItem));

    const _addButton = disabled ? null : (
        <Group>
            <Tooltip label={addDisabledTooltip} disabled={!hasEmptyItem}>
                <Box>
                    <Button
                        variant="subtle"
                        leftIcon={<AddSize16Px height={16} />}
                        onClick={() => append(newItem)}
                        disabled={hasEmptyItem}
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
                        <Stack spacing={spacing}>
                            {items}
                            {provided.placeholder}
                            {_addButton}
                        </Stack>
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    );
};
