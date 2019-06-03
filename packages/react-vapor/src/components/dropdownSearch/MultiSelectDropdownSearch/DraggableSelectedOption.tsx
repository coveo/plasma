import * as React from 'react';
import {DragSource, DropTarget, IDragSource, IDropTarget} from 'react-dnd';
import {findDOMNode} from 'react-dom';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';
import {Svg} from '../../svg/Svg';
import {ISelectedOptionProps, SelectedOption} from './SelectedOption';

export interface IDraggableSelectedOptionOwnProps {
    isDragging?: boolean;
    connectDragSource?: any;
    connectDropTarget?: any;
    connectDragPreview?: any;
    index: number;
    move: (dragIndex: number, hoverIndex: number) => void;
}

export interface IDraggableSelectedOptionProps extends IDraggableSelectedOptionOwnProps, ISelectedOptionProps {}

const selectedOptionSource: IDragSource = {
    isDragging(props: IDraggableSelectedOptionProps, monitor: any) {
        return props.label === monitor.getItem().label;
    },
    beginDrag(props: IDraggableSelectedOptionProps) {
        return {...props};
    },
};

const cardTarget: IDropTarget = {
    hover(props: IDraggableSelectedOptionProps, monitor: any, component?: DraggableSelectedOption): void {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(component) as Element).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.move(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
    drop(props: IDraggableSelectedOptionProps, monitor: any) {
        monitor.getItem().label = null;
    },
};

export const DraggableSelectedOptionType = 'SELECTED_OPTION';
const DraggableSelectedOptionPropsToOmit = keys<IDraggableSelectedOptionOwnProps>();

@DropTarget(DraggableSelectedOptionType, cardTarget, (connect: any) => ({
    connectDropTarget: connect.dropTarget(),
}))
@DragSource(DraggableSelectedOptionType, selectedOptionSource, (connect: any, monitor: any) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}),
)
export class DraggableSelectedOption extends React.Component<IDraggableSelectedOptionProps> {
    render() {
        const opacity = this.props.isDragging ? 0 : 1;

        const content: React.ReactNode = [
            this.props.connectDragSource(
                <div className='move-option infline-flex cursor-move align-center'>
                    <Svg svgName='drag-drop' svgClass='icon mod-small' />
                </div>,
            ),
            this.props.label,
        ];
        return this.props.connectDragPreview(
            this.props.connectDropTarget(
                <div className='selected-option-wrapper' style={{opacity}}>
                    <SelectedOption {..._.omit(this.props, DraggableSelectedOptionPropsToOmit)} label={content} />
                </div>,
            ),
        );
    }
}
