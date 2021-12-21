declare module ReactDnD {
    type ReactProps = any;

    type _DragSourceTypePrimitives = string | symbol;
    type DragSourceType = _DragSourceTypePrimitives | ((props: ReactProps) => _DragSourceTypePrimitives);

    type _DropTargetTypesPrimitives = string | symbol | Array<string | symbol>;
    type DropTargetTypes = _DropTargetTypesPrimitives | ((props: ReactProps) => _DropTargetTypesPrimitives);

    interface IDragSource {
        beginDrag: (props: ReactProps, monitor: DragSourceMonitor, component: React.ReactComponent) => any;
        endDrag?: (props: ReactProps, monitor: DragSourceMonitor, component?: React.ReactComponent) => void;
        canDrag?: (props: ReactProps, monitor: DragSourceMonitor) => boolean;
        isDragging?: (props: ReactProps, monitor: DragSourceMonitor) => boolean;
    }

    interface IDropTarget {
        drop?: (props: ReactProps, monitor: DropTargetMonitor, component: React.ReactComponent) => any;
        hover?: (props: ReactProps, monitor: DropTarget, component?: React.ReactComponent) => void;
        canDrop?: (props: ReactProps, monitor: DropTarget) => boolean;
    }

    interface IDropTargetProps {
        connectDropTarget?: any;
    }

    type IDragSourceCollect = (connect: DragSourceConnector, monitor: DragSourceMonitor) => any;
    type IDragTargetCollect = (connect: DropTargetConnector, monitor: DropTargetMonitor) => any;
    const DropTarget: (
        type: DropTargetTypes,
        spec: IDropTarget,
        collect: IDragTargetCollect
    ) => (component: React.ReactComponent) => ReactClass;
    const DragSource: (
        type: DragSourceType,
        spec: IDragSource,
        collect: IDragSourceCollect
    ) => (component: React.ReactComponent) => ReactClass;

    const DragDropContext: any;
}
declare module 'react-dnd' {
    export = ReactDnD;
}

declare module 'react-dnd-html5-backend' {
    const X: any;
    export default X;
}

declare module 'react-dnd-test-backend' {
    const X: any;
    export default X;
}
