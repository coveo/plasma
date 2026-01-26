import {IconPlus} from '@coveord/plasma-react-icons';
import {Box} from '@mantine/core';
import {ReactNode} from 'react';

import {Button} from '../Button/Button.js';
import classes from './Collection.module.css';

export interface CollectionAddButtonProps {
    /**
     * The label of the add item button
     *
     * @default "Add item"
     */
    addLabel?: ReactNode;
    /**
     * The tooltip text displayed when hovering over the disabled add item button
     *
     * @default 'There is already an empty item'
     */
    addDisabledTooltip?: string;
    /**
     * Whether the add button is allowed/enabled
     */
    addAllowed: boolean;
    /**
     * Callback when the add button is clicked
     */
    onAdd: () => void;
}

export const CollectionAddButton = ({addLabel, addDisabledTooltip, addAllowed, onAdd}: CollectionAddButtonProps) => (
    <Box className={classes.addButtonContainer}>
        <Button.Quaternary
            leftSection={<IconPlus size={16} />}
            onClick={onAdd}
            disabled={!addAllowed}
            disabledTooltip={addDisabledTooltip}
        >
            {addLabel}
        </Button.Quaternary>
    </Box>
);
