import {Paper, Stack} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

interface BlankSlateProps {
    /**
     * Whether the Blankslate render with a border
     *
     * @default true
     */
    withBorder?: boolean;
}

export const BlankSlate: FunctionComponent<PropsWithChildren<BlankSlateProps>> = ({children, withBorder = true}) => (
    <Paper shadow={withBorder && 'xs'} p="xl" withBorder={withBorder}>
        <div>bonjour !!!</div>
        <Stack align="center">{children}</Stack>
    </Paper>
);
