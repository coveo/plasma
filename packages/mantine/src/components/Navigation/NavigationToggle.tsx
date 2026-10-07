import {ActionIcon, Box} from '@mantine/core';
import {IconChevronLeft, IconChevronRight} from '@coveord/plasma-react-icons';
import clsx from 'clsx';
import {FunctionComponent} from 'react';
import {useNavigation} from './Navigation.context.js';
import classes from './NavigationToggle.module.css';

export interface NavigationToggleProps {
    className?: string;
    /**
     * Label for the expand button
     * @default 'Expand'
     */
    expandLabel?: string;
    /**
     * Label for the collapse button
     * @default 'Collapse'
     */
    collapseLabel?: string;
    /**
     * Whether the toggle is disabled. A disabled toggle stays visible but does not change the collapsed state.
     * @default false
     */
    disabled?: boolean;
}

export const NavigationToggle: FunctionComponent<NavigationToggleProps> = ({
    className,
    expandLabel = 'Expand',
    collapseLabel = 'Collapse',
    disabled = false,
}) => {
    const {toggleCollapsed, collapsed} = useNavigation();
    const Icon = collapsed ? IconChevronRight : IconChevronLeft;

    // The click is handled on the container so the whole strip next to the navbar edge toggles, not only the button.
    const onClick = () => {
        if (!disabled) {
            toggleCollapsed();
        }
    };

    return (
        <Box className={clsx(className, classes.toggleContainer)} mod={{collapsed, disabled}} onClick={onClick}>
            <ActionIcon
                size="sm"
                className={classes.toggle}
                variant="filled"
                aria-label={collapsed ? expandLabel : collapseLabel}
                disabled={disabled}
            >
                <Icon />
            </ActionIcon>
        </Box>
    );
};

NavigationToggle.displayName = 'NavigationToggle';
