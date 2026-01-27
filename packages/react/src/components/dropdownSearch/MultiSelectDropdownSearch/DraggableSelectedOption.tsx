import {DragAndDropSize24Px} from '@coveord/plasma-react-icons';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {CSSProperties, FunctionComponent, PropsWithChildren} from 'react';

import {ISelectedOptionProps, SelectedOption} from './SelectedOption';

export interface IDraggableSelectedOptionOwnProps {
    /**
     * A function triggered when another option is dragged over the current option
     *
     * @param value the unique value of the option dragged over the current option
     */
    onMoveOver: (value: ISelectedOptionProps['value']) => void;
    /**
     * The unique identifier of the parent MultiSelect component
     */
    parentId: string;
}

/**
 * @deprecated use Mantine instead
 */
export const DraggableSelectedOption: FunctionComponent<
    PropsWithChildren<IDraggableSelectedOptionOwnProps & ISelectedOptionProps>
> = ({label, selectedTooltip, readOnly, value, onRemoveClick}) => {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef} = useSortable({
        id: value,
    });
    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition: transform ? transition : undefined,
        backgroundColor: 'white',
        boxShadow: isDragging ? 'var(--medium-elevation-on-light)' : undefined,
        zIndex: isDragging ? 2 : 1,
    };
    return (
        <div style={style} ref={setNodeRef}>
            <SelectedOption
                value={value}
                label={isDragging ? null : label}
                selectedTooltip={selectedTooltip}
                readOnly={readOnly}
                onRemoveClick={onRemoveClick}
                prepend={
                    !readOnly && (
                        <div
                            className="move-option cursor-move p1 mod-border-right"
                            ref={setActivatorNodeRef}
                            {...attributes}
                            {...listeners}
                        >
                            <DragAndDropSize24Px height={16} />
                        </div>
                    )
                }
            >
                {label}
            </SelectedOption>
        </div>
    );
};
