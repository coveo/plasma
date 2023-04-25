import {DragAndDropSize24Px} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {CSSProperties, FunctionComponent, HTMLProps, PropsWithChildren, ReactNode} from 'react';

export interface IDraggableContainerOwnProps {
    id: string;
    parentId: string;
    draggableContainerProps?: Partial<HTMLProps<HTMLDivElement>>;
    draggableIconProps?: HTMLProps<HTMLDivElement>;
    icon?: ReactNode;
    isDraggable?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const DnDContainer: FunctionComponent<PropsWithChildren<IDraggableContainerOwnProps>> = ({
    draggableContainerProps = {className: 'flex flex-center'},
    draggableIconProps = {},
    icon = <DragAndDropSize24Px className="mb2 mr1" />,
    children,
    isDraggable = true,
    id,
}) => {
    const {attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef, isDragging} = useSortable({
        id,
        disabled: {draggable: !isDraggable, droppable: !isDraggable},
    });
    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition: transform ? transition : undefined,
        backgroundColor: 'white',
        boxShadow: isDragging ? 'var(--medium-elevation-on-light)' : undefined,
        zIndex: isDragging ? 2 : 1,
        position: 'inherit',
    };

    return (
        <div {...draggableContainerProps} style={style} ref={setNodeRef}>
            <div
                ref={setActivatorNodeRef}
                style={{
                    visibility: isDraggable ? 'visible' : 'hidden',
                    cursor: isDraggable ? 'move' : 'default',
                }}
                {...draggableIconProps}
                {...attributes}
                {...listeners}
            >
                {icon}
            </div>
            {children}
        </div>
    );
};
