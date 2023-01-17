import {DragAndDropSize16Px} from '@coveord/plasma-react-icons';
import {FunctionComponent, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {ISelectedOptionProps, SelectedOption} from './SelectedOption.js';

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

type DragItem = Pick<ISelectedOptionProps, 'value'>;

/**
 * @deprecated use Mantine instead
 */
export const DraggableSelectedOption: FunctionComponent<
    React.PropsWithChildren<IDraggableSelectedOptionOwnProps & ISelectedOptionProps>
> = ({label, selectedTooltip, readOnly, value, parentId, onMoveOver, onRemoveClick}) => {
    const DraggableItemType = `MULTI_SELECT_OPTION_${parentId}`;
    const dropRef = useRef<HTMLDivElement>();
    const [, drop] = useDrop(() => ({
        accept: DraggableItemType,
        hover: ({value: draggedValue}: DragItem) => {
            if (draggedValue !== value) {
                onMoveOver(draggedValue);
            }
        },
    }));
    const [{isDragging}, drag, dragPreview] = useDrag(() => ({
        type: DraggableItemType,
        item: (): DragItem => ({value}),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    const opacity = isDragging ? 0 : 1;
    drop(dragPreview(dropRef));
    return (
        <div style={{opacity}} ref={dropRef}>
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
                            aria-grabbed={isDragging}
                            ref={drag}
                        >
                            <DragAndDropSize16Px height={16} />
                        </div>
                    )
                }
            >
                {label}
            </SelectedOption>
        </div>
    );
};
