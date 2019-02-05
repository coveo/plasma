import {IDragSource, IDropTarget} from 'react-dnd';
import {findDOMNode} from 'react-dom';
import * as _ from 'underscore';
import {DnDContainer, IDraggableContainerOwnProps} from './DnDContainer';

const move = (dragIndex: number, hoverIndex: number, list: any[], callBack: (listReorder: any[]) => void) => {
    const moving = list[dragIndex];
    const newOrder = [...list];

    // Remove the element at position dragIndex
    newOrder.splice(dragIndex, 1);

    // Insert the moving element at hoverIndex
    newOrder.splice(hoverIndex, 0, moving);

    callBack(newOrder);
};

const getBoxTarget = (parameter: string): IDropTarget => ({
    hover(props: IDraggableContainerOwnProps, monitor: any, component?: DnDContainer): void {
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
    drop(props: IDraggableContainerOwnProps, monitor: any) {
        monitor.getItem()[parameter] = null;
    },
});

const getSelectedBoxSource = (parameter: string): IDragSource => ({
    isDragging(props: IDraggableContainerOwnProps, monitor: any) {
        return props.id === monitor.getItem()[parameter];
    },
    beginDrag(props: IDraggableContainerOwnProps) {
        return {...props};
    },
});

// This object is usefull when the drag happen outside of the DraggableSelectedOption,
// instead of making the child handle it, the parent catches the event
const parentDropTarget = {
    drop: _.noop,
};

export const DnDUtils = {
    move: move,
    getBoxTarget: getBoxTarget,
    getSelectedBoxSource: getSelectedBoxSource,
    parentDropTarget,
};
