import {Paper, Stack} from '@mantine/core';
import {FunctionComponent} from 'react';

interface BlankSlateProps {
    /**
     * Whether the Blankslate render with a border
     *
     * @default true
     */
    withBorder?: boolean;
}

export const BlankSlate: FunctionComponent<BlankSlateProps> = ({children, withBorder = true}) => (
    <Paper shadow={withBorder && 'xs'} p="xl" withBorder={withBorder}>
        <Stack align="center">{children}</Stack>
    </Paper>
);
