import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IDraggableSelectedOptionOwnProps} from '../dropdownSearch/MultiSelectDropdownSearch/DraggableSelectedOption';
import {Svg} from '../svg/Svg';
import {DnDUtils} from './DnDUtils';

export interface IDraggableContainerOwnProps {
    id: string;
    isDragging?: boolean;
    connectDragSource?: any;
    connectDropTarget?: any;
    connectDragPreview?: any;
    index: number;
    move: (dragIndex: number, hoverIndex: number) => void;
    child: any;
    isDraggable?: boolean;
    draggableContainerProps?: React.HTMLProps<HTMLDivElement>;
    draggableIconProps?: React.HTMLProps<HTMLDivElement>;
    icon: React.ReactNode;
}

export const DraggableContainerType = 'CONTAINER_BOX';

const multilineBoxWithDnDPropsToOmit = keys<IDraggableSelectedOptionOwnProps>();

@DropTarget(DraggableContainerType, DnDUtils.getBoxTarget('id'), (connect: any) => ({
    connectDropTarget: connect.dropTarget(),
}))
@DragSource(DraggableContainerType, DnDUtils.getSelectedBoxSource('id'), (connect: any, monitor: any) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}),
)
export class DnDContainer extends React.Component<IDraggableContainerOwnProps> {

    static defaultProps = {
        isDraggable: true,
        draggableContainerProps: {
            className: 'flex flex-center',
        },
        draggableIconProps: {},
        icon: <Svg svgName={VaporSVG.svg.dragDrop.name} svgClass='icon' />,
    };

    private getIcon() {
        const icon: React.ReactNode = (
            <div
                style={{
                    visibility: this.props.isDraggable ? 'visible' : 'hidden',
                    cursor: this.props.isDraggable ? 'move' : 'default',
                }}
                {...this.props.draggableIconProps}
            >
                {this.props.icon}
            </div>
        );
        return this.props.isDraggable ? this.props.connectDragSource(icon) : icon;
    }

    render() {
        const opacity = this.props.isDragging ? 0 : 1;
        const content = this.props.connectDropTarget(
            <div
                {...this.props.draggableContainerProps}
                style={{opacity}}
            >
                {this.getIcon()}
                {React.cloneElement(this.props.child, _.omit(this.props, multilineBoxWithDnDPropsToOmit))}
            </div>,
        );

        return this.props.isDraggable
            ? this.props.connectDragPreview(
                this.props.connectDropTarget(
                    content,
                ),
            )
            : content;
    }
}
