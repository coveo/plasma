import {DragAndDropSize24Px, RemoveSize16Px} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {ActionIcon, DefaultProps, Group, Selectors} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

import useStyles from './Collection.styles';

interface CollectionItemProps extends CollectionItemSharedProps {
    draggable?: boolean;
    disabled: boolean;
}

interface CollectionItemSharedProps extends DefaultProps<Selectors<typeof useStyles>> {
    id: string;
    onRemove?: React.MouseEventHandler<HTMLButtonElement>;
    removable?: boolean;
}

const RemoveButton: FunctionComponent<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({onClick}) => (
    <ActionIcon sx={{alignSelf: 'center'}} variant="subtle" onClick={onClick} color="action">
        <RemoveSize16Px height={16} />
    </ActionIcon>
);

const RemoveButtonPlaceholder = () => <div style={{width: 28}} />;

const StaticCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = ({
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

const DisabledCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = ({
    children,
    styles,
}) => {
    const {classes, cx} = useStyles(null, {name: 'Collection', styles});
    return <Group className={cx(classes.item)}>{children}</Group>;
};

const DraggableCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = ({
    id,
    onRemove,
    removable = true,
    styles,
    children,
}) => {
    const {classes, cx} = useStyles(null, {name: 'Collection', styles});
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : null;
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef} = useSortable({
        id,
    });

    return (
        <Group
            ref={setNodeRef}
            className={cx(classes.item, {[classes.itemDragging]: isDragging})}
            sx={
                transform
                    ? {
                          transform: CSS.Transform.toString(transform),
                          transition,
                      }
                    : undefined
            }
        >
            <div ref={setActivatorNodeRef} {...listeners} {...attributes} className={classes.dragHandle}>
                <DragAndDropSize24Px height={16} />
            </div>
            {children}
            {removeButton}
        </Group>
    );
};

export const CollectionItem: FunctionComponent<PropsWithChildren<CollectionItemProps>> = ({
    draggable,
    disabled,
    ...otherProps
}) => {
    if (disabled) {
        return <DisabledCollectionItem {...otherProps} />;
    }
    if (draggable) {
        return <DraggableCollectionItem {...otherProps} />;
    }
    return <StaticCollectionItem {...otherProps} />;
};
