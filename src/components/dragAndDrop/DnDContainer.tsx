import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {ICustomTag} from '../../utils/ComponentUtils';
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
    draggableContainerElement?: ICustomTag;
    draggableIconElement?: ICustomTag;
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
        draggableContainerElement: {
            tag: 'div',
            props: {className: 'flex flex-center'},
        },
        draggableIconElement: {
            tag: 'div',
            props: {},
        },
        icon: <Svg svgName={VaporSVG.svg.dragDrop.name} svgClass='icon' />,
    };

    private getIcon() {
        const icon: React.ReactNode = (
            <this.props.draggableIconElement.tag
                style={{
                    visibility: this.props.isDraggable ? 'visible' : 'hidden',
                    cursor: this.props.isDraggable ? 'move' : 'default',
                }}
                {...this.props.draggableIconElement.props}
            >
                {this.props.icon}
            </this.props.draggableIconElement.tag>
        );
        return this.props.isDraggable ? this.props.connectDragSource(icon) : icon;
    }

    render() {
        const opacity = this.props.isDragging ? 0 : 1;
        const content = (
            <this.props.draggableContainerElement.tag
                {...this.props.draggableContainerElement.props}
                style={{opacity}}
            >
                {this.getIcon()}
                {React.cloneElement(this.props.child, _.omit(this.props, multilineBoxWithDnDPropsToOmit))}
            </this.props.draggableContainerElement.tag>
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
