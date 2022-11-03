import {createStyles, DefaultProps, Divider, Group, Paper} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

interface StickyFooterProps extends DefaultProps {
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
        maxHeight: '80px',
    },
}));

export const StickyFooter: FunctionComponent<PropsWithChildren<StickyFooterProps>> = ({
    borderTop,
    children,
    ...others
}) => {
    const {classes} = useStyles();

    return (
        <Paper className={classes.footer}>
            {borderTop ? <Divider size="xs" /> : null}
            <Group position="right" spacing="xs" py="md" px="xl" {...others}>
                {children}
            </Group>
        </Paper>
    );
};
