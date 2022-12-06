import {Box, createStyles, DefaultProps, Divider, Group} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

export interface StickyFooterProps extends DefaultProps {
    /**
     * Whether a border is render on top of the footer
     */
    borderTop?: boolean;
}

const useStyles = createStyles(() => ({
    footer: {
        position: 'sticky',
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'white',
    },
}));

export const StickyFooter: FunctionComponent<PropsWithChildren<StickyFooterProps>> = ({
    borderTop,
    children,
    ...others
}) => {
    const {classes} = useStyles();

    return (
        <>
            {borderTop ? <Divider size="xs" /> : null}
            <Box className={classes.footer}>
                <Group position="right" spacing="xs" py="md" px="xl" {...others}>
                    {children}
                </Group>
            </Box>
        </>
    );
};
