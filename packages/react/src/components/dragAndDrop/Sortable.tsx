import {DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import {restrictToVerticalAxis, restrictToWindowEdges} from '@dnd-kit/modifiers';
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from '@dnd-kit/sortable';
import {ReactNode} from 'react';

export interface SortableProps {
    children: ReactNode;
    items: string[];
    onReorder: (values: string[]) => void;
}

export const Sortable = (props: SortableProps) => {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const getIndex = (id: string) => props.items.indexOf(id);

    const handleDragEnd = ({over, active}: DragEndEvent): void => {
        if (over) {
            const overIndex = getIndex(String(over.id));
            const activeIndex = getIndex(String(active.id));
            if (activeIndex !== overIndex) {
                const newOrder = arrayMove(props.items, activeIndex, overIndex);
                props.onReorder(newOrder);
            }
        }
    };

    return (
        <DndContext
            onDragEnd={handleDragEnd}
            sensors={sensors}
            modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        >
            <SortableContext items={props.items} strategy={verticalListSortingStrategy}>
                <div className="relative">{props.children}</div>
            </SortableContext>
        </DndContext>
    );
};
