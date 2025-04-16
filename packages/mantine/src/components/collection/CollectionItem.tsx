import {DragAndDropSize24Px, IconCircleMinus} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Group, GroupProps} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

import {ActionIcon} from '../action-icon';
import {useCollectionContext} from './CollectionContext';

interface CollectionItemProps extends CollectionItemSharedProps {
    draggable?: boolean;
    disabled: boolean;
}

interface CollectionItemSharedProps extends GroupProps {
    id: string;
    onRemove?: React.MouseEventHandler<HTMLButtonElement>;
    removable?: boolean;
}

const RemoveButton: FunctionComponent<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({onClick}) => (
    <ActionIcon.Quaternary style={{alignSelf: 'center'}} onClick={onClick}>
        <IconCircleMinus size={20} />
    </ActionIcon.Quaternary>
);

const RemoveButtonPlaceholder = () => <div style={{width: 28}} />;

const StaticCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = ({
    onRemove,
    removable = true,
    children,
}) => {
    const ctx = useCollectionContext();
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : <RemoveButtonPlaceholder />;

    return (
        <Group {...ctx.getStyles('item')}>
            {children}
            {removeButton}
        </Group>
    );
};

const DisabledCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = ({children}) => {
    const ctx = useCollectionContext();
    return <Group {...ctx.getStyles('item')}>{children}</Group>;
};

const DraggableCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = ({
    id,
    onRemove,
    removable = true,
    children,
}) => {
    const ctx = useCollectionContext();
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : null;
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef} = useSortable({
        id,
    });

    return (
        <Group
            ref={setNodeRef}
            {...ctx.getStyles('item', {
                style: transform
                    ? {
                          transform: CSS.Transform.toString(transform),
                          transition,
                      }
                    : undefined,
            })}
            data-isdragging={isDragging}
        >
            <div ref={setActivatorNodeRef} {...listeners} {...attributes} {...ctx.getStyles('dragHandle')}>
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
