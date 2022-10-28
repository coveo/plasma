import {DragAndDropSize16Px, RemoveSize16Px} from '@coveord/plasma-react-icons';
import {ActionIcon, DefaultProps, Group, Selectors} from '@mantine/core';
import {FunctionComponent} from 'react';
import {Draggable} from 'react-beautiful-dnd';

import useStyles from './Colllection.styles';

interface CollectionItemProps extends CollectionItemSharedProps {
    draggable?: boolean;
    disabled: boolean;
}

interface CollectionItemSharedProps extends DefaultProps<Selectors<typeof useStyles>> {
    index: number;
    onRemove?: React.MouseEventHandler<HTMLButtonElement>;
    removable?: boolean;
}

const RemoveButton: FunctionComponent<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({onClick}) => (
    <ActionIcon variant="subtle" onClick={onClick} color="action">
        <RemoveSize16Px height={16} />
    </ActionIcon>
);

const RemoveButtonPlaceholder = () => <div style={{width: 28}} />;

const StaticCollectionItem: FunctionComponent<CollectionItemSharedProps> = ({
    onRemove,
    removable = true,
    styles,
    children,
}) => {
    const {classes, cx} = useStyles(null, {name: 'Collection', styles});
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : <RemoveButtonPlaceholder />;

    return (
        <Group className={cx(classes.item)}>
            {children}
            {removeButton}
        </Group>
    );
};

const DisabledCollectionItem: FunctionComponent<CollectionItemSharedProps> = ({children}) => {
    const {classes, cx} = useStyles();
    return <Group className={cx(classes.item)}>{children}</Group>;
};

const DraggableCollectionItem: FunctionComponent<CollectionItemSharedProps> = ({
    index,
    onRemove,
    removable = true,
    styles,
    children,
}) => {
    const {classes, cx} = useStyles(null, {name: 'Collection', styles});
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : null;

    return (
        <Draggable index={index} draggableId={index.toString()}>
            {(provided, {isDragging}) => (
                <Group
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={cx(classes.item, {[classes.itemDragging]: isDragging})}
                >
                    <div {...provided.dragHandleProps}>
                        <DragAndDropSize16Px height={16} />
                    </div>
                    {children}
                    {removeButton}
                </Group>
            )}
        </Draggable>
    );
};

export const CollectionItem: FunctionComponent<CollectionItemProps> = ({draggable, disabled, ...otherProps}) => {
    if (disabled) {
        return <DisabledCollectionItem {...otherProps} />;
    }
    if (draggable) {
        return <DraggableCollectionItem {...otherProps} />;
    }
    return <StaticCollectionItem {...otherProps} />;
};
