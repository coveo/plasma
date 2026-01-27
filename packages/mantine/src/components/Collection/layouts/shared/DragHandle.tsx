import {DragAndDropSize16Px} from '@coveord/plasma-react-icons';
import type {FunctionComponent} from 'react';
import {useCollectionContext} from '../../CollectionContext.js';

export interface DragHandleProps {
    setActivatorNodeRef: (element: HTMLElement | null) => void;
    listeners: any;
    attributes: any;
}

/**
 * Shared drag handle component used by both horizontal and vertical layouts.
 * Renders the drag icon with proper event handlers for drag and drop functionality.
 */
export const DragHandle: FunctionComponent<DragHandleProps> = ({setActivatorNodeRef, listeners, attributes}) => {
    const {getStyles} = useCollectionContext();
    return (
        <div ref={setActivatorNodeRef} {...listeners} {...attributes} {...getStyles('dragHandle')}>
            <DragAndDropSize16Px height={16} />
        </div>
    );
};
