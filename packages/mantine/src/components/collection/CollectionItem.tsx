import {DragAndDropSize24Px, IconTrash} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Group, GroupProps, useProps} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

import {ActionIcon} from '../action-icon/ActionIcon.js';
import {useCollectionContext} from './CollectionContext.js';

interface CollectionItemProps extends CollectionItemSharedProps {
    draggable?: boolean;
    disabled: boolean;
}

interface CollectionItemSharedProps extends GroupProps {
    id: string;
    onRemove?: React.MouseEventHandler<HTMLButtonElement>;
    removable?: boolean;
}

const defaultProps: Partial<CollectionItemSharedProps> = {
    removable: true,
    gap: 'sm',
};

const RemoveButton: FunctionComponent<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({onClick}) => (
    <ActionIcon.Quaternary style={{alignSelf: 'center'}} onClick={onClick}>
        <IconTrash aria-label="Remove" size={16} />
    </ActionIcon.Quaternary>
);

const RemoveButtonPlaceholder = () => <div style={{width: 28}} />;

const StaticCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = (props) => {
    const {
        children,
        removable,
        onRemove,
        id,

        // Style props
        style,
        className,
        classNames,
        styles,
        ...others
    } = useProps('CollectionItem', defaultProps, props);
    const ctx = useCollectionContext();
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : <RemoveButtonPlaceholder />;

    return (
        <Group
            data-testid={`item-${id}`}
            {...ctx.getStyles('item', {style, className, classNames, styles})}
            {...others}
        >
            {children}
            {removeButton}
        </Group>
    );
};

const DisabledCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = (props) => {
    const ctx = useCollectionContext();
    const {
        children,
        id,

        // Style props
        style,
        className,
        classNames,
        styles,
        ...others
    } = useProps('CollectionItem', defaultProps, props);
    return (
        <Group
            data-testid={`item-${id}`}
            {...ctx.getStyles('item', {style, className, classNames, styles})}
            {...others}
        >
            {children}
        </Group>
    );
};

const DraggableCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = (props) => {
    const ctx = useCollectionContext();
    const {
        children,
        removable,
        onRemove,
        id,

        // Style props
        className,
        classNames,
        styles,
        ...others
    } = useProps('CollectionItem', defaultProps, props);
    const removeButton = removable && onRemove ? <RemoveButton onClick={onRemove} /> : null;
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef} = useSortable({
        id,
    });

    return (
        <Group
            data-testid={`item-${id}`}
            ref={setNodeRef}
            {...ctx.getStyles('item', {
                style: transform
                    ? {
                          transform: CSS.Transform.toString(transform),
                          transition,
                      }
                    : undefined,
                className,
                classNames,
                styles,
            })}
            data-isdragging={isDragging}
            {...others}
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
