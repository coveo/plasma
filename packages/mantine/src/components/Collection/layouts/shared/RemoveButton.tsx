import {IconTrash} from '@coveord/plasma-react-icons';
import {Box} from '@mantine/core';
import {FunctionComponent, type MouseEventHandler} from 'react';
import {ActionIcon} from '../../../ActionIcon/ActionIcon.js';
import {useCollectionContext} from '../../CollectionContext.js';

export interface RemoveButtonProps {
    removable?: boolean;
    onRemove?: MouseEventHandler<HTMLButtonElement>;
    removeDisabledTooltip?: string;
}

/**
 * Shared remove button component used by both horizontal and vertical layouts.
 * Renders a trash icon button when removable, a disabled one with a tooltip when a reason is given, or a spacer div otherwise.
 */
export const RemoveButton: FunctionComponent<RemoveButtonProps> = ({removable, onRemove, removeDisabledTooltip}) => {
    const {getStyles, removeLabel} = useCollectionContext();

    const canRemove = removable && !!onRemove;

    if (!canRemove && !removeDisabledTooltip) {
        return <div style={{width: 36}} />;
    }

    return (
        <Box {...getStyles('removeButton')}>
            <ActionIcon.Quaternary
                onClick={onRemove}
                disabled={!canRemove}
                disabledTooltip={removeDisabledTooltip}
                size="lg"
            >
                <IconTrash aria-label={removeLabel} size={16} />
            </ActionIcon.Quaternary>
        </Box>
    );
};
