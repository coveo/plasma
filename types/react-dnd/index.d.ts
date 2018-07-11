declare module ReactDnD {
    type ReactProps = any;

    type _DragSourceTypePrimitives = string | symbol;
    type DragSourceType = _DragSourceTypePrimitives | ((props: ReactProps) => _DragSourceTypePrimitives);

    type _DropTargetTypesPrimitives = string | symbol | Array<string | symbol>;
    type DropTargetTypes = _DropTargetTypesPrimitives | ((props: ReactProps) => _DropTargetTypesPrimitives);

    interface IDragSource {
        beginDrag: (props: ReactProps, monitor: DragSourceMonitor, component: YourReactClass) => any;
        endDrag?: (props: ReactProps, monitor: DragSourceMonitor, component?: YourReactClass) => void;
        canDrag?: (props: ReactProps, monitor: DragSourceMonitor) => boolean;
        isDragging?: (props: ReactProps, monitor: DragSourceMonitor) => boolean;
    }

    interface IDropTarget {
        drop?: (props: ReactProps, monitor: DropTargetMonitor, component: YourReactClass) => any;
        hover?: (props: ReactProps, monitor: DropTarget, component?: YourReactClass) => void;
        canDrop?: (props: ReactProps, monitor: DropTarget) => boolean;
    }

    type IDragSourceCollect = (connect: DragSourceConnector, monitor: DragSourceMonitor) => any;
    type IDragTargetCollect = (connect: DropTargetConnector, monitor: DropTargetMonitor) => any;
    const DropTarget: (type: DropTargetTypes, spec: IDropTarget, collect: IDragTargetCollect) => (component: YourReactClass) => ReactClass;
    const DragSource: (type: DragSourceType, spec: IDragSource, collect: IDragSourceCollect) => (component: YourReactClass) => ReactClass;

    const DragDropContext: any;
}
declare module 'react-dnd' {
    export = ReactDnD;
}

declare module 'react-dnd-html5-backend' {
    const X: any;
    export default X;
}
