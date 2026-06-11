import {IconTrash} from '@coveord/plasma-react-icons';
import {Box} from '@mantine/core';
import {FunctionComponent, type MouseEventHandler} from 'react';
import {ActionIcon} from '../../../ActionIcon/ActionIcon.js';
import {useCollectionContext} from '../../CollectionContext.js';

export interface RemoveButtonProps {
    removable?: boolean;
    onRemove?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Shared remove button component used by both horizontal and vertical layouts.
 * Renders a trash icon button when removable, or a spacer div otherwise.
 */
export const RemoveButton: FunctionComponent<RemoveButtonProps> = ({removable, onRemove}) => {
    const {getStyles} = useCollectionContext();

    if (!removable || !onRemove) {
        return <div style={{width: 36}} />;
    }

    return (
        <Box {...getStyles('removeButton')}>
            <ActionIcon.Quaternary size="lg" onClick={onRemove}>
                <IconTrash aria-label="Remove" />
            </ActionIcon.Quaternary>
        </Box>
    );
};
