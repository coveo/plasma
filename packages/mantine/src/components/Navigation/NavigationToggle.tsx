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
}

export const NavigationToggle: FunctionComponent<NavigationToggleProps> = ({
    className,
    expandLabel = 'Expand',
    collapseLabel = 'Collapse',
}) => {
    const {toggleCollapsed, collapsed} = useNavigation();
    const Icon = collapsed ? IconChevronRight : IconChevronLeft;

    return (
        <Box className={clsx(className, classes.toggleContainer)} onClick={() => toggleCollapsed()} mod={{collapsed}}>
            <ActionIcon size="sm" className={classes.toggle} variant="filled">
                <Icon aria-label={collapsed ? expandLabel : collapseLabel} />
            </ActionIcon>
        </Box>
    );
};

NavigationToggle.displayName = 'NavigationToggle';
