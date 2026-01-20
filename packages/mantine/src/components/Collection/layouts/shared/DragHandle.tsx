import {DragAndDropSize16Px} from '@coveord/plasma-react-icons';
import {GetStylesApi} from '@mantine/core';
import type {FunctionComponent} from 'react';

export interface DragHandleProps {
    setActivatorNodeRef: (element: HTMLElement | null) => void;
    listeners: any;
    attributes: any;
    getStyles: GetStylesApi<any>;
}

/**
 * Shared drag handle component used by both horizontal and vertical layouts.
 * Renders the drag icon with proper event handlers for drag and drop functionality.
 */
export const DragHandle: FunctionComponent<DragHandleProps> = ({
    setActivatorNodeRef,
    listeners,
    attributes,
    getStyles,
}) => (
    <div ref={setActivatorNodeRef} {...listeners} {...attributes} {...getStyles('dragHandle')}>
        <DragAndDropSize16Px height={16} />
    </div>
);
