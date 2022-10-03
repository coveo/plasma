import {DragAndDropSize24Px} from '@coveord/plasma-react-icons';
import {FunctionComponent, HTMLProps, PropsWithChildren, ReactNode, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';

export interface IDraggableContainerOwnProps {
    id: string;
    parentId: string;
    /**
     * A function triggered when another box is dragged over the current box
     *
     * @param movingId the unique identifier of the box being dragged over the current box
     */
    onMoveOver: (movingId: string) => void;
    draggableContainerProps?: Partial<HTMLProps<HTMLDivElement>>;
    draggableIconProps?: HTMLProps<HTMLDivElement>;
    icon?: ReactNode;
    isDraggable?: boolean;
}

type DragItem = {id: string};

/**
 * @deprecated Use Mantine instead
 */
export const DnDContainer: FunctionComponent<PropsWithChildren<IDraggableContainerOwnProps>> = ({
    draggableContainerProps = {className: 'flex flex-center'},
    draggableIconProps = {},
    icon = <DragAndDropSize24Px className="mb2 mr1" />,
    children,
    isDraggable = true,
    onMoveOver,
    id,
    parentId,
}) => {
    const DraggableItemType = `MULTI_LINE_BOX_${parentId}`;
    const ref = useRef<HTMLDivElement>();
    const iconRef = useRef<HTMLDivElement>();
    const [, drop] = useDrop(() => ({
        accept: DraggableItemType,
        hover: ({id: draggedId}: DragItem) => {
            if (draggedId !== id) {
                onMoveOver(draggedId);
            }
        },
    }));
    const [{isDragging}, drag, dragPreview] = useDrag(() => ({
        item: (): DragItem => ({id}),
        type: DraggableItemType,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const opacity = isDragging ? 0 : 1;

    if (isDraggable) {
        drag(iconRef);
        drop(dragPreview(ref));
    }

    return (
        <div {...draggableContainerProps} style={{opacity}} ref={ref}>
            <div
                style={{
                    visibility: isDraggable ? 'visible' : 'hidden',
                    cursor: isDraggable ? 'move' : 'default',
                }}
                {...draggableIconProps}
                ref={iconRef}
            >
                {icon}
            </div>
            {children}
        </div>
    );
};
