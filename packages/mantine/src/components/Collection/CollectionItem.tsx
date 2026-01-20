import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Group, GroupProps, useProps} from '@mantine/core';
import {FunctionComponent, type MouseEventHandler, PropsWithChildren} from 'react';

import {useCollectionContext} from './CollectionContext.js';
import {DragHandle} from './layouts/shared/DragHandle.js';
import {RemoveButton} from './layouts/shared/RemoveButton.js';

interface CollectionItemProps extends CollectionItemSharedProps {
    draggable?: boolean;
    disabled: boolean;
}

interface CollectionItemSharedProps extends GroupProps {
    id: string;
    onRemove?: MouseEventHandler<HTMLButtonElement>;
    removable?: boolean;
}

const defaultProps: Partial<CollectionItemSharedProps> = {
    removable: true,
    gap: 'sm',
};

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

    return (
        <Group
            data-testid={`item-${id}`}
            {...ctx.getStyles('item', {style, className, classNames, styles})}
            {...others}
        >
            {children}
            <RemoveButton removable={removable} onRemove={onRemove} getStyles={ctx.getStyles} />
        </Group>
    );
};

const DisabledCollectionItem: FunctionComponent<PropsWithChildren<CollectionItemSharedProps>> = (props) => {
    const ctx = useCollectionContext();
    const {
        children,
        id,
        removable: _removable,
        onRemove: _onRemove,

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
            <DragHandle
                setActivatorNodeRef={setActivatorNodeRef}
                listeners={listeners}
                attributes={attributes}
                getStyles={ctx.getStyles}
            />
            {children}
            <RemoveButton removable={removable} onRemove={onRemove} getStyles={ctx.getStyles} />
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
